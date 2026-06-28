import type {
  AvailableCommand,
  SessionMode,
} from '@agentclientprotocol/sdk'

/** Auth method entry — core fields typed, extensions allowed via index signature. */
export interface AgentAuthMethod {
  id: string
  name: string
  description?: null | string
  [key: string]: unknown
}

/** Agent capabilities — known fields typed, extensions allowed. */
export interface AgentCapabilities {
  loadSession?: boolean
  promptCapabilities?: { [key: string]: unknown }
  mcpCapabilities?: { [key: string]: unknown }
  [key: string]: unknown
}

/** Config option entry — core fields typed, extensions allowed. */
export interface AgentConfigOption {
  id: string
  name: string
  currentValue?: unknown
  description?: null | string
  [key: string]: unknown
}

export interface AgentMetadata {
  id: string
  name: string
  version: string
  protocolVersion: number
  agentInfo: { name: string; version: string; [key: string]: unknown }
  agentCapabilities: AgentCapabilities
  authMethods: AgentAuthMethod[]
  modes: SessionMode[]
  currentModeId: null | string
  configOptions: AgentConfigOption[]
  commands: AvailableCommand[]
}

export { type SessionMode, type AvailableCommand } from '@agentclientprotocol/sdk'
