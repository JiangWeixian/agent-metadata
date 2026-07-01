import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { extractConfig, generatePackage } from './codegen'

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

describe('extractConfig', () => {
  it('returns all-empty result for empty input', () => {
    const r = extractConfig([])
    expect(r.models).toEqual([])
    expect(r.currentModelId).toBeNull()
    expect(r.reasoningEfforts).toEqual([])
    expect(r.currentReasoningEffortId).toBeNull()
    expect(r.configOptions).toEqual([])
  })

  it('flattens a category:"model" / id:"model" select into models[] + currentModelId', () => {
    const modelSelect = {
      category: 'model',
      id: 'model',
      name: 'Model',
      currentValue: 'anthropic/claude-sonnet-4.6',
      options: [
        { name: 'Auto', value: 'default[]' },
        { name: 'Claude Sonnet 4.6', value: 'anthropic/claude-sonnet-4.6', description: 'Anthropic' },
      ],
    }
    const r = extractConfig([modelSelect])
    expect(r.models).toEqual([
      { id: 'default[]', name: 'Auto' },
      { id: 'anthropic/claude-sonnet-4.6', name: 'Claude Sonnet 4.6', description: 'Anthropic' },
    ])
    expect(r.currentModelId).toBe('anthropic/claude-sonnet-4.6')
    // non-destructive: the original entry is still in configOptions
    expect(r.configOptions).toEqual([modelSelect])
  })

  it('keeps a provider select (category:"model", id !== "model") in configOptions', () => {
    const provider = { category: 'model', id: 'provider', name: 'Provider', currentValue: 'cline', options: [] }
    const r = extractConfig([provider])
    expect(r.models).toEqual([])
    expect(r.currentModelId).toBeNull()
    expect(r.configOptions).toEqual([provider])
  })

  it('flattens category:"thought_level" into reasoningEfforts[] + currentReasoningEffortId', () => {
    const effortSelect = {
      category: 'thought_level',
      id: 'reasoning_effort',
      name: 'Reasoning effort',
      currentValue: 'high',
      options: [
        { name: 'low', value: 'low', description: 'Fast' },
        { name: 'high', value: 'high', description: 'Deep' },
      ],
    }
    const r = extractConfig([effortSelect])
    expect(r.reasoningEfforts).toEqual([
      { id: 'low', name: 'low', description: 'Fast' },
      { id: 'high', name: 'high', description: 'Deep' },
    ])
    expect(r.currentReasoningEffortId).toBe('high')
    // non-destructive: the original entry is still in configOptions
    expect(r.configOptions).toEqual([effortSelect])
  })

  it('preserves category:"mode" entries in configOptions (non-destructive)', () => {
    const modeSelect = { category: 'mode', id: 'mode', name: 'Mode', currentValue: 'agent', options: [] }
    const r = extractConfig([modeSelect])
    expect(r.models).toEqual([])
    expect(r.reasoningEfforts).toEqual([])
    expect(r.configOptions).toEqual([modeSelect])
  })

  it('keeps unrelated categories (e.g. fast-mode, sandbox) in configOptions', () => {
    const fast = { category: 'fast-mode', id: 'fast', name: 'Fast', options: [] }
    const sandbox = { category: 'sandbox', id: 'sandbox', name: 'Sandbox' }
    const r = extractConfig([fast, sandbox])
    expect(r.configOptions).toEqual([fast, sandbox])
  })

  it('handles a realistic mixed set end-to-end (non-destructive)', () => {
    const input = [
      { category: 'model', id: 'provider', name: 'Provider', options: [] },
      { category: 'model', id: 'model', name: 'Model', currentValue: 'm2', options: [{ name: 'M1', value: 'm1' }, { name: 'M2', value: 'm2' }] },
      { category: 'mode', id: 'mode', name: 'Mode', options: [] },
      { category: 'thought_level', id: 'effort', name: 'Effort', currentValue: 'medium', options: [{ name: 'low', value: 'low' }, { name: 'medium', value: 'medium' }] },
      { category: 'fast-mode', id: 'fast', name: 'Fast' },
    ]
    const r = extractConfig(input)
    expect(r.models.map(m => m.id)).toEqual(['m1', 'm2'])
    expect(r.currentModelId).toBe('m2')
    expect(r.reasoningEfforts.map(e => e.id)).toEqual(['low', 'medium'])
    expect(r.currentReasoningEffortId).toBe('medium')
    // configOptions is the full original array, untouched
    expect(r.configOptions).toEqual(input)
  })
})
