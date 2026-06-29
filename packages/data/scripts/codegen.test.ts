import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { generatePackage } from './codegen'

const FIXTURES_DIR = join(import.meta.dirname, 'fixtures')
const TMP_CACHE = join(import.meta.dirname, '..', 'tmp-test-cache')
const TMP_DIST_SRC = join(import.meta.dirname, '..', 'tmp-test-dist-src')
const TMP_PKG = join(import.meta.dirname, '..', 'tmp-test-package.json')

describe('codegen', () => {
  beforeEach(() => {
    rmSync(TMP_CACHE, { recursive: true, force: true })
    rmSync(TMP_DIST_SRC, { recursive: true, force: true })
    mkdirSync(TMP_CACHE, { recursive: true })
    for (const f of readdirSync(FIXTURES_DIR)) {
      copyFileSync(join(FIXTURES_DIR, f), join(TMP_CACHE, f))
    }
    // Create stub package.json for exports rewriting test
    writeFileSync(TMP_PKG, JSON.stringify({ name: 'test-pkg', exports: {} }, null, 2))
  })

  afterEach(() => {
    rmSync(TMP_CACHE, { recursive: true, force: true })
    rmSync(TMP_DIST_SRC, { recursive: true, force: true })
    try {
      rmSync(TMP_PKG, { force: true })
    } catch {}
  })

  it('emits dist-src/agents/<id>.ts for ok agents only', () => {
    generatePackage(TMP_CACHE, TMP_DIST_SRC, TMP_PKG)
    expect(existsSync(join(TMP_DIST_SRC, 'agents', 'gemini.ts'))).toBe(true)
    expect(existsSync(join(TMP_DIST_SRC, 'agents', 'qoder.ts'))).toBe(false)
  })

  it('emits dist-src/types.ts and dist-src/index.ts', () => {
    generatePackage(TMP_CACHE, TMP_DIST_SRC, TMP_PKG)
    expect(existsSync(join(TMP_DIST_SRC, 'types.ts'))).toBe(true)
    expect(existsSync(join(TMP_DIST_SRC, 'index.ts'))).toBe(true)
  })

  it('index.ts imports and re-exports ok agents only', () => {
    generatePackage(TMP_CACHE, TMP_DIST_SRC, TMP_PKG)
    const indexTs = readFileSync(join(TMP_DIST_SRC, 'index.ts'), 'utf8')
    expect(indexTs).toContain('gemini')
    expect(indexTs).not.toContain('qoder')
    expect(indexTs).toContain('export const agents')
  })

  it('generated agent .ts does not contain status or error fields', () => {
    generatePackage(TMP_CACHE, TMP_DIST_SRC, TMP_PKG)
    const agentTs = readFileSync(join(TMP_DIST_SRC, 'agents', 'gemini.ts'), 'utf8')
    expect(agentTs).not.toContain('status')
    expect(agentTs).not.toContain('"error"')
  })

  it('generated agent .ts has correct type annotation', () => {
    generatePackage(TMP_CACHE, TMP_DIST_SRC, TMP_PKG)
    const agentTs = readFileSync(join(TMP_DIST_SRC, 'agents', 'gemini.ts'), 'utf8')
    expect(agentTs).toContain('export const agent: AgentMetadata')
  })

  it('rewrites package.json exports with ok agent subpaths', () => {
    generatePackage(TMP_CACHE, TMP_DIST_SRC, TMP_PKG)
    const pkg = JSON.parse(readFileSync(TMP_PKG, 'utf8'))
    expect(pkg.exports['./gemini']).toBeDefined()
    expect(pkg.exports['./gemini'].import).toBe('./dist/agents/gemini.js')
    expect(pkg.exports['./qoder']).toBeUndefined()
  })

  it('is idempotent — running twice produces identical output', () => {
    generatePackage(TMP_CACHE, TMP_DIST_SRC, TMP_PKG)
    const firstRun = readFileSync(join(TMP_DIST_SRC, 'agents', 'gemini.ts'), 'utf8')
    generatePackage(TMP_CACHE, TMP_DIST_SRC, TMP_PKG)
    const secondRun = readFileSync(join(TMP_DIST_SRC, 'agents', 'gemini.ts'), 'utf8')
    expect(secondRun).toBe(firstRun)
  })

  it('preserves existing committed agents not present in the current probe', () => {
    // Simulate a previously committed agent that didn't probe ok this run.
    mkdirSync(join(TMP_DIST_SRC, 'agents'), { recursive: true })
    writeFileSync(
      join(TMP_DIST_SRC, 'agents', 'ghost.ts'),
      'import type { AgentMetadata } from "../types.js";\n\nexport const agent: AgentMetadata = {} as AgentMetadata;\n',
    )
    generatePackage(TMP_CACHE, TMP_DIST_SRC, TMP_PKG)
    // Preserved file is untouched.
    expect(existsSync(join(TMP_DIST_SRC, 'agents', 'ghost.ts'))).toBe(true)
    // And still wired into the index + exports.
    expect(readFileSync(join(TMP_DIST_SRC, 'index.ts'), 'utf8')).toContain('ghost')
    const pkg = JSON.parse(readFileSync(TMP_PKG, 'utf8'))
    expect(pkg.exports['./ghost']).toBeDefined()
  })

  it('throws when no ok agents found', () => {
    rmSync(TMP_CACHE, { recursive: true, force: true })
    mkdirSync(TMP_CACHE, { recursive: true })
    copyFileSync(join(FIXTURES_DIR, 'qoder.json'), join(TMP_CACHE, 'qoder.json'))
    expect(() => generatePackage(TMP_CACHE, TMP_DIST_SRC, TMP_PKG)).toThrow()
  })
})
