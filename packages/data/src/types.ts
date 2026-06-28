import type {
  SessionMode,
  AvailableCommand,
} from "@agentclientprotocol/sdk";

export type { SessionMode, AvailableCommand };

export interface AgentMetadata {
  id: string;
  name: string;
  version: string;
  protocolVersion: number;
  agentInfo: { name: string; version: string; [key: string]: unknown };
  agentCapabilities: { [key: string]: unknown };
  authMethods: { [key: string]: unknown }[];
  modes: SessionMode[];
  currentModeId: string | null;
  configOptions: unknown[];
  commands: AvailableCommand[];
}
