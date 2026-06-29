import { spawnSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { mkdir, rm } from 'node:fs/promises'
import { join } from 'node:path'
import type { LaunchAdapter } from './types'
import { DUMMY_BASE, DUMMY_KEY, DUMMY_MODEL } from './dummy-env'

/**
 * dimcode adapter: ACP reports "Provider credentials are required".
 * Requires a SQLite provider record under `~/.dimcode/v2/` + config.json's defaultProvider.
 * Writing config.json alone is insufficient (provider details live in SQLite) → use `npx dimcode provider add/switch` to preconfigure
 * (npx installs dimcode itself; no global dim needed). HOME is isolated to probeHome to avoid polluting the real ~/.dimcode.
 * session/new only checks whether a provider is configured (no network key validation) → a dummy provider suffices.
 */
export const dimcodeLaunchAdapter: LaunchAdapter = {
  agentId: 'dimcode',
  apply: async ({ probeHome }) => {
    const dimDir = join(probeHome, '.dimcode')
    if (existsSync(dimDir)) {
      await rm(dimDir, { recursive: true, force: true })
    }
    await mkdir(probeHome, { recursive: true })

    const run = (args: string[]) =>
      spawnSync('npx', ['--yes', 'dimcode@0.2.11', ...args], {
        env: { ...process.env, HOME: probeHome },
        stdio: ['ignore', 'pipe', 'pipe'],
        timeout: 120_000,
      })

    run([
      'provider',
      'add',
      'probe-dummy',
      '--api-key',
      DUMMY_KEY,
      '--base-url',
      DUMMY_BASE,
      '--model',
      DUMMY_MODEL,
      '--adapter',
      'openai',
    ])
    run(['provider', 'switch', 'probe-dummy'])

    return {
      env: { HOME: probeHome, OPENAI_API_KEY: DUMMY_KEY },
      note: 'dimcode: pre-configured dummy provider via `npx dimcode provider add/switch` under HOME isolation. session/new only checks provider configured (no network key validation).',
    }
  },
}
