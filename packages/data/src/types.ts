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

/** A selectable model offered by an agent (mirrors the shape of SessionMode). */
export interface AgentModel {
  id: string
  name: string
  description?: null | string
}

/** A selectable reasoning-effort level offered by an agent. */
export interface AgentReasoningEffort {
  id: string
  name: string
  description?: null | string
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
  models: AgentModel[]
  currentModelId: null | string
  reasoningEfforts: AgentReasoningEffort[]
  currentReasoningEffortId: null | string
  configOptions: AgentConfigOption[]
  commands: AvailableCommand[]
}

export { type SessionMode, type AvailableCommand } from '@agentclientprotocol/sdk'
