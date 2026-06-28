import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { BinaryDist, Distribution, RunnerKind } from './types'

export const CACHE_DIR = process.env.ACP_CACHE_DIR ?? '.acp-cache'
export const NPX_RUNNER = process.env.ACP_NPX_RUNNER ?? 'npx'
export const UVX_BIN = process.env.ACP_UVX_BIN ?? 'uvx'

export interface ResolvedRun {
  kind: RunnerKind
  command: string
  args: string[]
  env: Record<string, string>
  cwd: string
}

const PLATFORM_MAP: Record<string, string> = {
  darwin: 'darwin',
  linux: 'linux',
  win32: 'windows',
}
const ARCH_MAP: Record<string, string> = {
  arm64: 'aarch64',
  x64: 'x86_64',
}

export function platformKey(): null | string {
  const plat = PLATFORM_MAP[process.platform] ?? null
  const arch = ARCH_MAP[process.arch] ?? null
  if (!plat || !arch) {
    return null
  }
  return `${plat}-${arch}`
}

export function hasUv(): boolean {
  if (UVX_BIN.includes('/') || UVX_BIN.includes('\\')) {
    return existsSync(UVX_BIN)
  }
  try {
    const r = spawnSync('which', [UVX_BIN], { stdio: 'ignore' })
    return r.status === 0
  } catch {
    return false
  }
}

export type PrepareResult
  = | { kind: 'skip'; reason: string }
    | { kind: RunnerKind; binaryTarget?: BinaryDist }

export function prepareAgent(dist: Distribution): PrepareResult {
  if (dist.npx) {
    return { kind: 'npx' }
  }
  if (dist.uvx) {
    if (!hasUv()) {
      return { kind: 'skip', reason: `uvx distribution but '${UVX_BIN}' not found in PATH` }
    }
    return { kind: 'uvx' }
  }
  if (dist.binary) {
    const key = platformKey()
    if (!key) {
      return { kind: 'skip', reason: `unsupported platform ${process.platform}/${process.arch}` }
    }
    const target = dist.binary[key] ?? dist.binary['linux-x86_64']
    if (!target) {
      return { kind: 'skip', reason: `no binary for ${key}` }
    }
    return { kind: 'binary', binaryTarget: target }
  }
  return { kind: 'skip', reason: 'distribution has no npx/uvx/binary entry' }
}

const ARCHIVE_RE = /\.(?:tar\.gz|tgz|tar\.bz2|tbz2|bz2|tar)$/i

export async function resolveBinaryDir(
  agentId: string,
  version: string,
  target: BinaryDist,
): Promise<string> {
  const dir = join(CACHE_DIR, `${agentId}@${version}`)
  if (existsSync(join(dir, '.acp-ready'))) {
    return dir
  }
  mkdirSync(dir, { recursive: true })

  const archiveName = target.archive.split('/').pop() ?? 'archive'
  const archivePath = join(dir, archiveName)

  if (!existsSync(archivePath)) {
    const res = await fetch(target.archive, { redirect: 'follow' })
    if (!res.ok) {
      throw new Error(`download failed: ${target.archive} -> ${res.status}`)
    }
    await writeFile(archivePath, Buffer.from(await res.arrayBuffer()))
  }

  if (!ARCHIVE_RE.test(archiveName) && !archiveName.endsWith('.zip')) {
    run(['chmod', '+x', archivePath])
  } else if (archiveName.endsWith('.zip')) {
    run(['unzip', '-qo', archivePath, '-d', dir])
  } else if (archiveName.endsWith('.bz2')) {
    run(['tar', 'xjf', archivePath, '-C', dir])
  } else {
    run(['tar', 'xzf', archivePath, '-C', dir])
  }

  await writeFile(join(dir, '.acp-ready'), '')
  return dir
}

export async function resolveRun(
  agentId: string,
  version: string,
  dist: Distribution,
): Promise<ResolvedRun | { kind: 'skip'; reason: string }> {
  const prepared = prepareAgent(dist)
  if (prepared.kind === 'skip') {
    return prepared
  }

  if (prepared.kind === 'npx' && dist.npx) {
    return {
      kind: 'npx',
      command: NPX_RUNNER,
      args: ['--yes', dist.npx.package, ...(dist.npx.args ?? [])],
      env: { ...dist.npx.env },
      cwd: process.cwd(),
    }
  }
  if (prepared.kind === 'uvx' && dist.uvx) {
    return {
      kind: 'uvx',
      command: UVX_BIN,
      args: [dist.uvx.package, ...(dist.uvx.args ?? [])],
      env: { ...dist.uvx.env },
      cwd: process.cwd(),
    }
  }
  if (prepared.kind === 'binary' && prepared.binaryTarget) {
    const target = prepared.binaryTarget
    const cwd = await resolveBinaryDir(agentId, version, target)
    return {
      kind: 'binary',
      command: target.cmd,
      args: [...(target.args ?? [])],
      env: { ...target.env },
      cwd,
    }
  }
  return { kind: 'skip', reason: 'incomplete distribution definition' }
}

function run(cmd: string[]): void {
  const r = spawnSync(cmd[0], cmd.slice(1), { stdio: ['ignore', 'pipe', 'pipe'] })
  if (r.status !== 0) {
    const stderr = (r.stderr?.toString() ?? '').slice(0, 500)
    throw new Error(`command failed (${cmd.join(' ')}): ${stderr}`)
  }
}
