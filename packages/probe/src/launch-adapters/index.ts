import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { findLaunchAdapter } from "./registry";
import type { LaunchPatch } from "./types";

export { findLaunchAdapter } from "./registry";
export type { LaunchAdapter, LaunchPatch } from "./types";

export interface AppliedLaunchPatch {
  patch: LaunchPatch;
  probeHome: string;
}

/**
 * 启动补丁编排：为 agent 找适配器 → 在隔离 probeHome 下 apply → 返回 patch（env/args/note）。
 * 无适配器返回 null（调用方按原样启动）。适配器负责写自己的凭证文件到 probeHome。
 */
export async function applyLaunchPatch(
  agentId: string,
  version: string,
  probeRoot: string,
): Promise<AppliedLaunchPatch | null> {
  const adapter = findLaunchAdapter(agentId);
  if (!adapter) return null;

  const probeHome = join(probeRoot, `${agentId}-${version}`);
  await mkdir(probeHome, { recursive: true });

  const patch = await adapter.apply({ agentId, version, probeHome });
  return { patch: patch ?? {}, probeHome };
}
