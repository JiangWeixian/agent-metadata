/* eslint-disable unicorn/no-process-exit -- CLI build script */
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import type { AgentMetadata } from '../src/types'

interface AgentResult {
  id: string
  name: string
  version: string
  status: string
  error: null | string
  protocolVersion: null | number
  agentInfo: null | { name: string; version: string }
  agentCapabilities: null | Record<string, unknown>
  authMethods: null | unknown[]
  modes: null | unknown[]
  currentModeId: null | string
  configOptions: null | unknown[]
  commands: null | unknown[]
}

function toMetadata(r: AgentResult): AgentMetadata {
  return {
    id: r.id,
    name: r.name,
    version: r.version,
    protocolVersion: r.protocolVersion ?? 0,
    agentInfo: r.agentInfo ?? { name: r.id, version: r.version },
    agentCapabilities: (r.agentCapabilities ?? {}) as AgentMetadata['agentCapabilities'],
    authMethods: (r.authMethods ?? []) as AgentMetadata['authMethods'],
    modes: (r.modes ?? []) as AgentMetadata['modes'],
    currentModeId: r.currentModeId,
    configOptions: (r.configOptions ?? []) as AgentMetadata['configOptions'],
    commands: (r.commands ?? []) as AgentMetadata['commands'],
  }
}

function stableStringify(obj: unknown): string {
  return JSON.stringify(sortKeys(obj), null, 2)
}

function sortKeys(obj: unknown): unknown {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }
  if (Array.isArray(obj)) {
    return obj.map(item => sortKeys(item))
  }
  const sorted: Record<string, unknown> = {}
  for (const key of Object.keys(obj as Record<string, unknown>).toSorted()) {
    sorted[key] = sortKeys((obj as Record<string, unknown>)[key])
  }
  return sorted
}

function loadOkAgents(cacheDir: string): AgentResult[] {
  const files = readdirSync(cacheDir).filter(f => f.endsWith('.json'))
  const agents: AgentResult[] = []
  for (const f of files) {
    const raw = readFileSync(join(cacheDir, f), 'utf8')
    const parsed = JSON.parse(raw) as AgentResult
    if (parsed.status === 'ok') {
      agents.push(parsed)
    }
  }
  return agents.toSorted((a, b) => a.id.localeCompare(b.id))
}

function toIdentifier(id: string): string {
  return id.replaceAll('-', '_')
}

export function generatePackage(cacheDir: string, distSrcDir: string, pkgPath: string): number {
  const agents = loadOkAgents(cacheDir)
  if (agents.length === 0) {
    throw new Error('codegen: no ok agents found in cache directory')
  }

  // Non-destructive: never wipe dist-src. Only (re)write agents that probed ok
  // this run; preserve previously committed files for agents that didn't (e.g.
  // auth-required or environment-specific failures), so a CI run can never drop
  // locally captured data.
  mkdirSync(join(distSrcDir, 'agents'), { recursive: true })

  const srcTypesPath = join(import.meta.dirname, '..', 'src', 'types.ts')
  copyFileSync(srcTypesPath, join(distSrcDir, 'types.ts'))

  const okIds = new Set(agents.map(a => a.id))
  for (const r of agents) {
    const m = toMetadata(r)
    const json = stableStringify(m)
    writeFileSync(
      join(distSrcDir, 'agents', `${r.id}.ts`),
      `import type { AgentMetadata } from "../types.js";\n\nexport const agent: AgentMetadata = ${json};\n`,
    )
  }

  // The package surface is the union of freshly probed ok agents and any
  // previously committed agent files we are preserving.
  const allIds = [...new Set([
    ...okIds,
    ...readdirSync(join(distSrcDir, 'agents'))
      .filter(f => f.endsWith('.ts'))
      .map(f => f.slice(0, -'.ts'.length)),
  ])].toSorted((a, b) => a.localeCompare(b))

  const importLines = allIds
    .map(id => `import { agent as ${toIdentifier(id)} } from "./agents/${id}.js";`)
    .join('\n')
  const agentsObj = `{\n${allIds.map(id => `  ${JSON.stringify(id)}: ${toIdentifier(id)},`).join('\n')}\n}`
  writeFileSync(
    join(distSrcDir, 'index.ts'),
    `${importLines}\n\nexport const agents = ${agentsObj};\n`,
  )

  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))
  const exports: Record<string, unknown> = {
    '.': {
      types: './dist/index.d.ts',
      import: './dist/index.js',
      require: './dist/index.cjs',
    },
    './types': {
      types: './dist/types.d.ts',
      import: './dist/types.js',
      require: './dist/types.cjs',
    },
  }
  for (const id of allIds) {
    exports[`./${id}`] = {
      types: `./dist/agents/${id}.d.ts`,
      import: `./dist/agents/${id}.js`,
      require: `./dist/agents/${id}.cjs`,
    }
  }
  exports['./package.json'] = './package.json'
  pkg.exports = exports
  writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`)
  return allIds.length
}

function updateReadmeBadges(readmePath: string, agentCount: number): void {
  if (!existsSync(readmePath)) {
    return
  }
  const before = readFileSync(readmePath, 'utf8')
  const after = before.replace(/(\/badge\/agents-)\d+/, `$1${agentCount}`)
  if (after !== before) {
    writeFileSync(readmePath, after)
  }
}

if (process.argv[1] && process.argv[1].endsWith('codegen.ts')) {
  const cacheDir = join(import.meta.dirname, '..', '..', 'probe', 'cache')
  const distSrcDir = join(import.meta.dirname, '..', 'dist-src')
  const pkgPath = join(import.meta.dirname, '..', 'package.json')
  if (!existsSync(cacheDir)) {
    console.error(`codegen: cache directory not found: ${cacheDir}`)
    console.error('Run the probe first: cd packages/probe && pnpm start')
    process.exit(1)
  }
  const agentCount = generatePackage(cacheDir, distSrcDir, pkgPath)
  const readmePath = join(import.meta.dirname, '..', 'README.md')
  updateReadmeBadges(readmePath, agentCount)
  console.log(`codegen: generated dist-src/ from ${readdirSync(cacheDir).filter(f => f.endsWith('.json')).length} cache files`)
}
