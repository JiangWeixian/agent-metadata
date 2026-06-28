/**
 * Capabilities supported by the agent.
 *
 * Advertised during initialization to inform the client about
 * available features and content types.
 *
 * See protocol docs: [Agent Capabilities](https://agentclientprotocol.com/protocol/initialization#agent-capabilities)
 */
type AgentCapabilities = {
    /**
     * Whether the agent supports `session/load`.
     */
    loadSession?: boolean;
    /**
     * Prompt capabilities supported by the agent.
     */
    promptCapabilities?: PromptCapabilities;
    /**
     * MCP capabilities supported by the agent.
     */
    mcpCapabilities?: McpCapabilities;
    /**
     * Session lifecycle and prompt capabilities advertised by the agent.
     */
    sessionCapabilities?: SessionCapabilities;
    /**
     * Authentication-related capabilities supported by the agent.
     */
    auth?: AgentAuthCapabilities;
    /**
     * **UNSTABLE**
     *
     * This capability is not part of the spec yet, and may be removed or changed at any point.
     *
     * Provider configuration capabilities supported by the agent.
     *
     * By supplying `{}` it means that the agent supports provider configuration methods.
     *
     * @experimental
     */
    providers?: ProvidersCapabilities | null;
    /**
     * **UNSTABLE**
     *
     * This capability is not part of the spec yet, and may be removed or changed at any point.
     *
     * NES (Next Edit Suggestions) capabilities supported by the agent.
     *
     * @experimental
     */
    nes?: NesCapabilities | null;
    /**
     * **UNSTABLE**
     *
     * This capability is not part of the spec yet, and may be removed or changed at any point.
     *
     * The position encoding selected by the agent from the client's supported encodings.
     *
     * @experimental
     */
    positionEncoding?: PositionEncodingKind | null;
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
 * Prompt capabilities supported by the agent in `session/prompt` requests.
 *
 * Baseline agent functionality requires support for [`ContentBlock::Text`]
 * and [`ContentBlock::ResourceLink`] in prompt requests.
 *
 * Other variants must be explicitly opted in to.
 * Capabilities for different types of content in prompt requests.
 *
 * Indicates which content types beyond the baseline (text and resource links)
 * the agent can process.
 *
 * See protocol docs: [Prompt Capabilities](https://agentclientprotocol.com/protocol/initialization#prompt-capabilities)
 */
type PromptCapabilities = {
    /**
     * Agent supports [`ContentBlock::Image`].
     */
    image?: boolean;
    /**
     * Agent supports [`ContentBlock::Audio`].
     */
    audio?: boolean;
    /**
     * Agent supports embedded context in `session/prompt` requests.
     *
     * When enabled, the Client is allowed to include [`ContentBlock::Resource`]
     * in prompt requests for pieces of context that are referenced in the message.
     */
    embeddedContext?: boolean;
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
 * MCP capabilities supported by the agent
 */
type McpCapabilities = {
    /**
     * Agent supports [`McpServer::Http`].
     */
    http?: boolean;
    /**
     * Agent supports [`McpServer::Sse`].
     */
    sse?: boolean;
    /**
     * **UNSTABLE**
     *
     * This capability is not part of the spec yet, and may be removed or changed at any point.
     *
     * Agent supports [`McpServer::Acp`].
     *
     * @experimental
     */
    acp?: boolean;
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
 * Session capabilities supported by the agent.
 *
 * As a baseline, all Agents **MUST** support `session/new`, `session/prompt`, `session/cancel`, and `session/update`.
 *
 * Optionally, they **MAY** support other session methods and notifications by specifying additional capabilities.
 *
 * Note: `session/load` is still handled by the top-level `load_session` capability. This will be unified in future versions of the protocol.
 *
 * See protocol docs: [Session Capabilities](https://agentclientprotocol.com/protocol/initialization#session-capabilities)
 */
type SessionCapabilities = {
    /**
     * Whether the agent supports `session/list`.
     */
    list?: SessionListCapabilities | null;
    /**
     * Whether the agent supports `session/delete`.
     *
     * Optional. Omitted or `null` both mean the agent does not advertise support.
     * Supplying `{}` means the agent supports deleting sessions from `session/list`.
     */
    delete?: SessionDeleteCapabilities | null;
    /**
     * Whether the agent supports `additionalDirectories` on supported session lifecycle requests.
     *
     * Agents that also support `session/list` may return
     * `SessionInfo.additionalDirectories` to report the complete ordered
     * additional-root list associated with a listed session.
     */
    additionalDirectories?: SessionAdditionalDirectoriesCapabilities | null;
    /**
     * **UNSTABLE**
     *
     * This capability is not part of the spec yet, and may be removed or changed at any point.
     *
     * Whether the agent supports `session/fork`.
     *
     * @experimental
     */
    fork?: SessionForkCapabilities | null;
    /**
     * Whether the agent supports `session/resume`.
     */
    resume?: SessionResumeCapabilities | null;
    /**
     * Whether the agent supports `session/close`.
     */
    close?: SessionCloseCapabilities | null;
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
 * Capabilities for the `session/list` method.
 *
 * By supplying `{}` it means that the agent supports listing of sessions.
 */
type SessionListCapabilities = {
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
 * Capabilities for the `session/delete` method.
 *
 * Supplying `{}` means the agent supports deleting sessions from `session/list`.
 */
type SessionDeleteCapabilities = {
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
 * Capabilities for additional session directories support.
 *
 * By supplying `{}` it means that the agent supports the `additionalDirectories`
 * field on supported session lifecycle requests. Agents that also support
 * `session/list` may return `SessionInfo.additionalDirectories` to report the
 * complete ordered additional-root list associated with a listed session.
 */
type SessionAdditionalDirectoriesCapabilities = {
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
 * **UNSTABLE**
 *
 * This capability is not part of the spec yet, and may be removed or changed at any point.
 *
 * Capabilities for the `session/fork` method.
 *
 * By supplying `{}` it means that the agent supports forking of sessions.
 *
 * @experimental
 */
type SessionForkCapabilities = {
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
 * Capabilities for the `session/resume` method.
 *
 * By supplying `{}` it means that the agent supports resuming of sessions.
 */
type SessionResumeCapabilities = {
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
 * Capabilities for the `session/close` method.
 *
 * By supplying `{}` it means that the agent supports closing of sessions.
 */
type SessionCloseCapabilities = {
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
 * Authentication-related capabilities supported by the agent.
 */
type AgentAuthCapabilities = {
    /**
     * Whether the agent supports the logout method.
     *
     * By supplying `{}` it means that the agent supports the logout method.
     */
    logout?: LogoutCapabilities | null;
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
 * Logout capabilities supported by the agent.
 *
 * By supplying `{}` it means that the agent supports the logout method.
 */
type LogoutCapabilities = {
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
 * **UNSTABLE**
 *
 * This capability is not part of the spec yet, and may be removed or changed at any point.
 *
 * Provider configuration capabilities supported by the agent.
 *
 * By supplying `{}` it means that the agent supports provider configuration methods.
 *
 * @experimental
 */
type ProvidersCapabilities = {
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
 * NES capabilities advertised by the agent during initialization.
 */
type NesCapabilities = {
    /**
     * Events the agent wants to receive.
     */
    events?: NesEventCapabilities | null;
    /**
     * Context the agent wants attached to each suggestion request.
     */
    context?: NesContextCapabilities | null;
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
 * Event capabilities the agent can consume.
 */
type NesEventCapabilities = {
    /**
     * Document event capabilities.
     */
    document?: NesDocumentEventCapabilities | null;
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
 * Document event capabilities the agent wants to receive.
 */
type NesDocumentEventCapabilities = {
    /**
     * Whether the agent wants `document/didOpen` events.
     */
    didOpen?: NesDocumentDidOpenCapabilities | null;
    /**
     * Whether the agent wants `document/didChange` events, and the sync kind.
     */
    didChange?: NesDocumentDidChangeCapabilities | null;
    /**
     * Whether the agent wants `document/didClose` events.
     */
    didClose?: NesDocumentDidCloseCapabilities | null;
    /**
     * Whether the agent wants `document/didSave` events.
     */
    didSave?: NesDocumentDidSaveCapabilities | null;
    /**
     * Whether the agent wants `document/didFocus` events.
     */
    didFocus?: NesDocumentDidFocusCapabilities | null;
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
 * Marker for `document/didOpen` capability support.
 */
type NesDocumentDidOpenCapabilities = {
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
 * Capabilities for `document/didChange` events.
 */
type NesDocumentDidChangeCapabilities = {
    /**
     * The sync kind the agent wants: `"full"` or `"incremental"`.
     */
    syncKind: TextDocumentSyncKind;
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
 * How the agent wants document changes delivered.
 */
type TextDocumentSyncKind = "full" | "incremental";
/**
 * Marker for `document/didClose` capability support.
 */
type NesDocumentDidCloseCapabilities = {
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
 * Marker for `document/didSave` capability support.
 */
type NesDocumentDidSaveCapabilities = {
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
 * Marker for `document/didFocus` capability support.
 */
type NesDocumentDidFocusCapabilities = {
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
 * Context capabilities the agent wants attached to each suggestion request.
 */
type NesContextCapabilities = {
    /**
     * Whether the agent wants recent files context.
     */
    recentFiles?: NesRecentFilesCapabilities | null;
    /**
     * Whether the agent wants related snippets context.
     */
    relatedSnippets?: NesRelatedSnippetsCapabilities | null;
    /**
     * Whether the agent wants edit history context.
     */
    editHistory?: NesEditHistoryCapabilities | null;
    /**
     * Whether the agent wants user actions context.
     */
    userActions?: NesUserActionsCapabilities | null;
    /**
     * Whether the agent wants open files context.
     */
    openFiles?: NesOpenFilesCapabilities | null;
    /**
     * Whether the agent wants diagnostics context.
     */
    diagnostics?: NesDiagnosticsCapabilities | null;
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
 * Capabilities for recent files context.
 */
type NesRecentFilesCapabilities = {
    /**
     * Maximum number of recent files the agent can use.
     */
    maxCount?: number | null;
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
 * Capabilities for related snippets context.
 */
type NesRelatedSnippetsCapabilities = {
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
 * Capabilities for edit history context.
 */
type NesEditHistoryCapabilities = {
    /**
     * Maximum number of edit history entries the agent can use.
     */
    maxCount?: number | null;
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
 * Capabilities for user actions context.
 */
type NesUserActionsCapabilities = {
    /**
     * Maximum number of user actions the agent can use.
     */
    maxCount?: number | null;
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
 * Capabilities for open files context.
 */
type NesOpenFilesCapabilities = {
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
 * Capabilities for diagnostics context.
 */
type NesDiagnosticsCapabilities = {
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
 * The encoding used for character offsets in positions.
 *
 * Follows the same conventions as LSP 3.17. The default is UTF-16.
 */
type PositionEncodingKind = "utf-16" | "utf-32" | "utf-8";
/**
 * Describes an available authentication method.
 *
 * The `type` field acts as the discriminator in the serialized JSON form.
 * When no `type` is present, the method is treated as `agent`.
 */
type AuthMethod = (AuthMethodEnvVar & {
    type: "env_var";
}) | (AuthMethodTerminal & {
    type: "terminal";
}) | AuthMethodAgent;
/**
 * Typed identifier used for auth method values on the wire.
 */
type AuthMethodId = string;
/**
 * **UNSTABLE**
 *
 * This capability is not part of the spec yet, and may be removed or changed at any point.
 *
 * Describes a single environment variable for an [`AuthMethodEnvVar`] authentication method.
 *
 * @experimental
 */
type AuthEnvVar = {
    /**
     * The environment variable name (e.g. `"OPENAI_API_KEY"`).
     */
    name: string;
    /**
     * Human-readable label for this variable, displayed in client UI.
     */
    label?: string | null;
    /**
     * Whether this value is a secret (e.g. API key, token).
     * Clients should use a password-style input for secret vars.
     *
     * Defaults to `true`.
     */
    secret?: boolean;
    /**
     * Whether this variable is optional.
     *
     * Defaults to `false`.
     */
    optional?: boolean;
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
 * **UNSTABLE**
 *
 * This capability is not part of the spec yet, and may be removed or changed at any point.
 *
 * Environment variable authentication method.
 *
 * The user provides credentials that the client passes to the agent as environment variables.
 *
 * @experimental
 */
type AuthMethodEnvVar = {
    /**
     * Unique identifier for this authentication method.
     */
    id: AuthMethodId;
    /**
     * Human-readable name of the authentication method.
     */
    name: string;
    /**
     * Optional description providing more details about this authentication method.
     */
    description?: string | null;
    /**
     * The environment variables the client should set.
     */
    vars: Array<AuthEnvVar>;
    /**
     * Optional link to a page where the user can obtain their credentials.
     */
    link?: string | null;
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
 * **UNSTABLE**
 *
 * This capability is not part of the spec yet, and may be removed or changed at any point.
 *
 * Terminal-based authentication method.
 *
 * The client runs an interactive terminal for the user to authenticate via a TUI.
 *
 * @experimental
 */
type AuthMethodTerminal = {
    /**
     * Unique identifier for this authentication method.
     */
    id: AuthMethodId;
    /**
     * Human-readable name of the authentication method.
     */
    name: string;
    /**
     * Optional description providing more details about this authentication method.
     */
    description?: string | null;
    /**
     * Additional arguments to pass when running the agent binary for terminal auth.
     */
    args?: Array<string>;
    /**
     * Additional environment variables to set when running the agent binary for terminal auth.
     */
    env?: {
        [key: string]: string;
    };
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
 * Agent handles authentication itself.
 *
 * This is the default authentication method type.
 */
type AuthMethodAgent = {
    /**
     * Unique identifier for this authentication method.
     */
    id: AuthMethodId;
    /**
     * Human-readable name of the authentication method.
     */
    name: string;
    /**
     * Optional description providing more details about this authentication method.
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
 * A session configuration option selector and its current state.
 */
type SessionConfigOption = ((SessionConfigSelect & {
    type: "select";
}) | (SessionConfigBoolean & {
    type: "boolean";
})) & {
    /**
     * Unique identifier for the configuration option.
     */
    id: SessionConfigId;
    /**
     * Human-readable label for the option.
     */
    name: string;
    /**
     * Optional description for the Client to display to the user.
     */
    description?: string | null;
    /**
     * Optional semantic category for this option (UX only).
     */
    category?: SessionConfigOptionCategory | null;
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
 * Unique identifier for a session configuration option.
 */
type SessionConfigId = string;
/**
 * Semantic category for a session configuration option.
 *
 * This is intended to help Clients distinguish broadly common selectors (e.g. model selector vs
 * session mode selector vs thought/reasoning level) for UX purposes (keyboard shortcuts, icons,
 * placement). It MUST NOT be required for correctness. Clients MUST handle missing or unknown
 * categories gracefully.
 *
 * Category names beginning with `_` are free for custom use, like other ACP extension methods.
 * Category names that do not begin with `_` are reserved for the ACP spec.
 */
type SessionConfigOptionCategory = "mode" | "model" | "model_config" | "thought_level" | string;
/**
 * Unique identifier for a session configuration option value.
 */
type SessionConfigValueId = string;
/**
 * Possible values for a session configuration option.
 */
type SessionConfigSelectOptions = Array<SessionConfigSelectOption> | Array<SessionConfigSelectGroup>;
/**
 * A possible value for a session configuration option.
 */
type SessionConfigSelectOption = {
    /**
     * Unique identifier for this option value.
     */
    value: SessionConfigValueId;
    /**
     * Human-readable label for this option value.
     */
    name: string;
    /**
     * Optional description for this option value.
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
 * A group of possible values for a session configuration option.
 */
type SessionConfigSelectGroup = {
    /**
     * Unique identifier for this group.
     */
    group: SessionConfigGroupId;
    /**
     * Human-readable label for this group.
     */
    name: string;
    /**
     * The set of option values in this group.
     */
    options: Array<SessionConfigSelectOption>;
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
 * Unique identifier for a session configuration option value group.
 */
type SessionConfigGroupId = string;
/**
 * A single-value selector (dropdown) session configuration option payload.
 */
type SessionConfigSelect = {
    /**
     * The currently selected value.
     */
    currentValue: SessionConfigValueId;
    /**
     * The set of selectable options.
     */
    options: SessionConfigSelectOptions;
};
/**
 * **UNSTABLE**
 *
 * This capability is not part of the spec yet, and may be removed or changed at any point.
 *
 * A boolean on/off toggle session configuration option payload.
 *
 * @experimental
 */
type SessionConfigBoolean = {
    /**
     * The current value of the boolean option.
     */
    currentValue: boolean;
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
    };
    agentCapabilities: AgentCapabilities;
    authMethods: AuthMethod[];
    modes: SessionMode[];
    currentModeId: string | null;
    configOptions: SessionConfigOption[];
    commands: AvailableCommand[];
}

export type { AgentCapabilities, AgentMetadata, AuthMethod, AvailableCommand, SessionConfigOption, SessionMode };
