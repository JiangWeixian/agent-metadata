import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { LaunchAdapter } from './types'

const DUMMY_KEY = 'sk-probe-dummy-000000000000000000000000000000'

/**
 * autohand adapter: once the underlying CLI is installed, the ACP server requires `autohand login`.
 * ensureAuthenticated reads auth.token + auth.expiresAt from ~/.autohand/config.json,
 * and only compares expiresAt < new Date() locally (no network token verification) → writing a dummy token + a far-future expiresAt bypasses it.
 * HOME is isolated to probeHome to avoid polluting the real ~/.autohand.
 */
export const autohandLaunchAdapter: LaunchAdapter = {
  agentId: 'autohand',
  apply: async ({ probeHome }) => {
    const dir = join(probeHome, '.autohand')
    await mkdir(dir, { recursive: true })
    await writeFile(
      join(dir, 'config.json'),
      JSON.stringify({
        auth: {
          token: DUMMY_KEY,
          expiresAt: '9999-12-31T00:00:00.000Z',
          userId: 'probe-dummy',
        },
      }),
      'utf8',
    )
    return {
      env: { HOME: probeHome },
      note: 'autohand: dummy ~/.autohand/config.json {auth:{token,expiresAt:far-future}} under HOME isolation. ensureAuthenticated only checks expiry locally (no network). Requires the underlying CLI `autohand` on PATH.',
    }
  },
}
