import { ENV_LAUNCH_ADAPTERS } from "./env";
import { opencodeLaunchAdapter } from "./opencode";
import { kimiLaunchAdapter } from "./kimi";
import type { LaunchAdapter } from "./types";

const ACP_LAUNCH_ADAPTERS: readonly LaunchAdapter[] = [
  ...ENV_LAUNCH_ADAPTERS,
  opencodeLaunchAdapter,
  kimiLaunchAdapter,
];

export function findLaunchAdapter(agentId: string): LaunchAdapter | undefined {
  return ACP_LAUNCH_ADAPTERS.find((adapter) => adapter.agentId === agentId);
}
