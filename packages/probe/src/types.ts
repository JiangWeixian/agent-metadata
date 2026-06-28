export type RunnerKind = 'binary' | 'npx' | 'uvx'

export interface NpxDist {
  package: string
  args?: string[]
  env?: Record<string, string>
}

export interface UvxDist {
  package: string
  args?: string[]
  env?: Record<string, string>
}

export interface BinaryDist {
  archive: string
  cmd: string
  args?: string[]
  env?: Record<string, string>
}

export type BinaryPlatformMap = Record<string, BinaryDist>

export interface Distribution {
  npx?: NpxDist
  binary?: BinaryPlatformMap
  uvx?: UvxDist
}

export interface RegistryAgent {
  id: string
  name: string
  version: string
  description?: string
  repository?: string
  website?: string
  license?: string
  authors?: string[]
  distribution: Distribution
}

export interface Registry {
  version: string
  agents: RegistryAgent[]
  extensions?: unknown[]
}

export type AgentStatus
  = | 'auth_required'
    | 'error'
    | 'install_failed'
    | 'no_platform_binary'
    | 'ok'
    | 'skipped'

export interface AgentResult {
  id: string
  name: string
  version: string
  status: AgentStatus
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

export interface ProbeOutput {
  generatedAt: string
  clientProtocolVersion: number
  registryVersion: string
  total: number
  ok: number
  agents: AgentResult[]
}
