import type {
  SessionMode,
  AvailableCommand,
  AuthMethod,
  AgentCapabilities,
  SessionConfigOption,
} from "@agentclientprotocol/sdk";

export type {
  SessionMode,
  AvailableCommand,
  AuthMethod,
  AgentCapabilities,
  SessionConfigOption,
};

export interface AgentMetadata {
  id: string;
  name: string;
  version: string;
  protocolVersion: number;
  agentInfo: { name: string; version: string };
  agentCapabilities: AgentCapabilities;
  authMethods: AuthMethod[];
  modes: SessionMode[];
  currentModeId: string | null;
  configOptions: SessionConfigOption[];
  commands: AvailableCommand[];
}
