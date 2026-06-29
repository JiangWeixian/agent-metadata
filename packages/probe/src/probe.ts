import type {
  AvailableCommandsUpdate,
  SessionUpdate,
} from '@agentclientprotocol/sdk'
import {
  client,
  ndJsonStream,
  PROTOCOL_VERSION,
  RequestError,
} from '@agentclientprotocol/sdk'
import { spawn } from 'node:child_process'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { Readable, Writable } from 'node:stream'
import type { AgentResult, RegistryAgent } from './types'
import { resolveRun } from './install'
import { applyLaunchPatch } from './launch-adapters'
import { BASELINE_DUMMY_ENV } from './launch-adapters/dummy-env'

export interface ProbeOptions {
  cwd: string
  timeoutMs: number
  settleMs: number
  verbose?: boolean
}

const AUTH_REQUIRED_CODE = -32_000

function dummyAuthEnv(): Record<string, string> {
  return process.env.ACP_DUMMY_AUTH === '1' ? { ...BASELINE_DUMMY_ENV } : {}
}

export function newResult(agent: RegistryAgent): AgentResult {
  return {
    id: agent.id,
    name: agent.name,
    version: agent.version,
    status: 'error',
    error: null,
    protocolVersion: null,
    agentInfo: null,
    agentCapabilities: null,
    authMethods: null,
    modes: null,
    currentModeId: null,
    configOptions: null,
    commands: null,
  }
}

export async function probeAgent(agent: RegistryAgent, opts: ProbeOptions): Promise<AgentResult> {
  const result = newResult(agent)

  const resolved = await resolveRun(agent.id, agent.version, agent.distribution)
  if (resolved.kind === 'skip') {
    result.status = 'skipped'
    result.error = resolved.reason
    return result
  }

  const probeRoot = mkdtempSync(join(tmpdir(), `acp-seed-${agent.id}-`))
  const applied = await applyLaunchPatch(agent.id, agent.version, probeRoot)

  const seedEnv: Record<string, string> = {}
  if (process.env.ACP_DUMMY_AUTH === '1') {
    Object.assign(seedEnv, dummyAuthEnv())
  }
  if (applied?.patch.env) {
    Object.assign(seedEnv, applied.patch.env)
  }
  const launchArgs = applied?.patch.args?.length
    ? [...applied.patch.args, ...resolved.args]
    : resolved.args

  const proc = spawn(resolved.command, launchArgs, {
    cwd: resolved.cwd,
    env: { ...process.env, ...resolved.env, ...seedEnv },
    stdio: ['pipe', 'pipe', 'pipe'],
    detached: true,
  })

  const stderrChunks: Buffer[] = []
  proc.stderr?.on('data', (chunk: Buffer) => {
    stderrChunks.push(chunk)
    if (opts.verbose) {
      process.stderr.write(chunk)
    }
  })

  const kill = () => {
    try {
      // Kill the whole process group (npx/binary may spawn grandchildren).
      if (proc.pid) {
        process.kill(-proc.pid, 'SIGKILL')
      } else {
        proc.kill('SIGKILL')
      }
    } catch {
      try {
        proc.kill('SIGKILL')
      } catch {
        /* already dead */
      }
    }
  }

  let capturedCommands: null | unknown[] = null

  const app = client({ name: 'acp-probe' })

  app.onNotification('session/update', (ctx) => {
    const update = ctx.params.update as SessionUpdate
    if (update.sessionUpdate === 'available_commands_update') {
      const cmds = (update as AvailableCommandsUpdate).availableCommands
      if (Array.isArray(cmds)) {
        capturedCommands = cmds
      }
    }
  })

  app.onRequest('session/request_permission', () => ({
    outcome: { outcome: 'cancelled' },
  }))

  const input = Readable.toWeb(proc.stdout!) as ReadableStream<Uint8Array>
  const output = Writable.toWeb(proc.stdin!) as WritableStream<Uint8Array>
  const stream = ndJsonStream(output, input)

  const work = app.connectWith(stream, async (ctx) => {
    const initResp = await ctx.request('initialize', {
      protocolVersion: PROTOCOL_VERSION,
      clientInfo: { name: 'acp-probe', version: '1.0.0' },
      clientCapabilities: {
        fs: { readTextFile: false, writeTextFile: false },
        terminal: false,
      },
    })

    result.protocolVersion = initResp.protocolVersion
    result.agentInfo = (initResp.agentInfo as null | { name: string; version: string }) ?? null
    result.agentCapabilities = (initResp.agentCapabilities as Record<string, unknown>) ?? null
    result.authMethods = initResp.authMethods ?? null

    try {
      await ctx.buildSession(opts.cwd).withSession(async (session) => {
        const modes = session.modes
        result.modes = modes?.availableModes ?? null
        result.currentModeId = modes?.currentModeId ?? null
        result.configOptions = session.newSessionResponse.configOptions ?? null

        await sleep(opts.settleMs)
        result.commands = capturedCommands
      })
      result.status = 'ok'
    } catch (error) {
      result.status = isAuthError(error) ? 'auth_required' : 'error'
      result.error = errMsg(error)
    }
  })

  const timer = setTimeout(() => {
    if (!result.error) {
      result.error = `timed out after ${opts.timeoutMs}ms`
    }
    kill()
  }, opts.timeoutMs)

  try {
    await work
  } catch (error) {
    if (!result.error) {
      result.error = errMsg(error)
    }
  } finally {
    clearTimeout(timer)
    kill()
  }

  const stderr = Buffer.concat(stderrChunks).toString('utf8').trim()
  if (stderr && result.status !== 'ok') {
    const tail = stderr.split('\n').slice(-15).join('\n')
    result.error = result.error ? `${result.error}\n--- agent stderr (tail) ---\n${tail}` : `--- agent stderr (tail) ---\n${tail}`
  }

  return result
}

function isAuthError(e: unknown): boolean {
  if (e instanceof RequestError) {
    return e.code === AUTH_REQUIRED_CODE || /auth/i.test(e.message)
  }
  return (
    typeof e === 'object'
    && e !== null
    && /auth_required|authentication required/i.test(JSON.stringify(e))
  )
}

function errMsg(e: unknown): string {
  if (e instanceof RequestError) {
    return `ACP error ${e.code}: ${e.message}`
  }
  if (e instanceof Error) {
    return e.message
  }
  return String(e)
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
