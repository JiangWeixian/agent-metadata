import { mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import type { LaunchPatch } from './types'
import { findLaunchAdapter } from './registry'

export { findLaunchAdapter } from './registry'
export type { LaunchAdapter, LaunchPatch } from './types'

export interface AppliedLaunchPatch {
  patch: LaunchPatch
  probeHome: string
}

/**
 * Launch patch orchestration: find the adapter for the agent → apply it under the isolated probeHome → return the patch (env/args/note).
 * Returns null when no adapter exists (the caller launches as-is). Each adapter is responsible for writing its own credential files into probeHome.
 */
export async function applyLaunchPatch(
  agentId: string,
  version: string,
  probeRoot: string,
): Promise<AppliedLaunchPatch | null> {
  const adapter = findLaunchAdapter(agentId)
  if (!adapter) {
    return null
  }

  const probeHome = join(probeRoot, `${agentId}-${version}`)
  await mkdir(probeHome, { recursive: true })

  const patch = await adapter.apply({ agentId, version, probeHome })
  return { patch: patch ?? {}, probeHome }
}
