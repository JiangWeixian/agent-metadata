export type RunnerKind = "npx" | "binary" | "uvx";

export interface NpxDist {
  package: string;
  args?: string[];
  env?: Record<string, string>;
}

export interface UvxDist {
  package: string;
  args?: string[];
  env?: Record<string, string>;
}

export interface BinaryDist {
  archive: string;
  cmd: string;
  args?: string[];
  env?: Record<string, string>;
}

export type BinaryPlatformMap = Record<string, BinaryDist>;

export interface Distribution {
  npx?: NpxDist;
  binary?: BinaryPlatformMap;
  uvx?: UvxDist;
}

export interface RegistryAgent {
  id: string;
  name: string;
  version: string;
  description?: string;
  repository?: string;
  website?: string;
  license?: string;
  authors?: string[];
  distribution: Distribution;
}

export interface Registry {
  version: string;
  agents: RegistryAgent[];
  extensions?: unknown[];
}

export type AgentStatus =
  | "ok"
  | "auth_required"
  | "error"
  | "skipped"
  | "no_platform_binary"
  | "install_failed";

export interface AgentResult {
  id: string;
  name: string;
  version: string;
  status: AgentStatus;
  error: string | null;
  protocolVersion: number | null;
  agentInfo: { name: string; version: string } | null;
  agentCapabilities: Record<string, unknown> | null;
  authMethods: unknown[] | null;
  modes: unknown[] | null;
  currentModeId: string | null;
  configOptions: unknown[] | null;
  commands: unknown[] | null;
}

export interface ProbeOutput {
  generatedAt: string;
  clientProtocolVersion: number;
  registryVersion: string;
  total: number;
  ok: number;
  agents: AgentResult[];
}
