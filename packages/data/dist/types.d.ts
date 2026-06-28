/**
 * Unique identifier for a Session Mode.
 */
type SessionModeId = string;
/**
 * A mode the agent can operate in.
 *
 * See protocol docs: [Session Modes](https://agentclientprotocol.com/protocol/session-modes)
 */
type SessionMode = {
    /**
     * Stable identifier used to refer to this protocol object in later messages.
     */
    id: SessionModeId;
    /**
     * Human-readable name shown for this protocol object.
     */
    name: string;
    /**
     * Optional human-readable details shown with this protocol object.
     */
    description?: string | null;
    /**
     * The _meta property is reserved by ACP to allow clients and agents to attach additional
     * metadata to their interactions. Implementations MUST NOT make assumptions about values at
     * these keys.
     *
     * See protocol docs: [Extensibility](https://agentclientprotocol.com/protocol/extensibility)
     */
    _meta?: {
        [key: string]: unknown;
    } | null;
};
/**
 * Information about a command.
 */
type AvailableCommand = {
    /**
     * Command name (e.g., `create_plan`, `research_codebase`).
     */
    name: string;
    /**
     * Human-readable description of what the command does.
     */
    description: string;
    /**
     * Input for the command if required
     */
    input?: AvailableCommandInput | null;
    /**
     * The _meta property is reserved by ACP to allow clients and agents to attach additional
     * metadata to their interactions. Implementations MUST NOT make assumptions about values at
     * these keys.
     *
     * See protocol docs: [Extensibility](https://agentclientprotocol.com/protocol/extensibility)
     */
    _meta?: {
        [key: string]: unknown;
    } | null;
};
/**
 * unstructured
 *
 * All text that was typed after the command name is provided as input.
 */
type AvailableCommandInput = UnstructuredCommandInput;
/**
 * All text that was typed after the command name is provided as input.
 */
type UnstructuredCommandInput = {
    /**
     * A hint to display when the input hasn't been provided yet
     */
    hint: string;
    /**
     * The _meta property is reserved by ACP to allow clients and agents to attach additional
     * metadata to their interactions. Implementations MUST NOT make assumptions about values at
     * these keys.
     *
     * See protocol docs: [Extensibility](https://agentclientprotocol.com/protocol/extensibility)
     */
    _meta?: {
        [key: string]: unknown;
    } | null;
};

interface AgentMetadata {
    id: string;
    name: string;
    version: string;
    protocolVersion: number;
    agentInfo: {
        name: string;
        version: string;
        [key: string]: unknown;
    };
    agentCapabilities: {
        [key: string]: unknown;
    };
    authMethods: {
        [key: string]: unknown;
    }[];
    modes: SessionMode[];
    currentModeId: string | null;
    configOptions: unknown[];
    commands: AvailableCommand[];
}

export type { AgentMetadata, AvailableCommand, SessionMode };
