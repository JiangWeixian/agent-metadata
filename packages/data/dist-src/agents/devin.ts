import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "_meta": {
      "cognition.ai/documentLifecycle": true,
      "cognition.ai/multiRootWorkspace": true,
      "cognition.ai/sessionRename": true,
      "cognition.ai/terminalLifecycle": true
    },
    "loadSession": true,
    "mcpCapabilities": {
      "http": false,
      "sse": false
    },
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "additionalDirectories": {},
      "list": {}
    }
  },
  "agentInfo": {
    "name": "affogato",
    "title": "Affogato Agent",
    "version": "0.0.0-dev"
  },
  "authMethods": [
    {
      "description": "Authenticate with your API key",
      "id": "windsurf-api-key",
      "name": "API Key"
    }
  ],
  "commands": [
    {
      "description": "Authenticate with an API key",
      "input": {
        "hint": "[api-key]"
      },
      "name": "login"
    },
    {
      "description": "Clear authentication",
      "name": "logout"
    },
    {
      "description": "Check authentication status",
      "name": "status"
    },
    {
      "description": "List workspace directories",
      "name": "workspace"
    },
    {
      "description": "Add additional workspace directory",
      "input": {
        "hint": "<path>"
      },
      "name": "add-dir"
    },
    {
      "description": "Remove a workspace directory",
      "input": {
        "hint": "<path>"
      },
      "name": "undo-add-dir"
    },
    {
      "description": "Switch to Ask mode (read-only)",
      "input": {
        "hint": "[question]"
      },
      "name": "ask"
    },
    {
      "description": "Force conversation compaction",
      "name": "compact"
    },
    {
      "description": "Show context window usage",
      "name": "context"
    },
    {
      "description": "Show session statistics",
      "name": "session-stats"
    },
    {
      "description": "Report a bug to the Devin CLI developers",
      "input": {
        "hint": "<description>"
      },
      "name": "bug"
    },
    {
      "description": "Show available commands",
      "name": "help"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "accept-edits",
      "id": "mode",
      "name": "Session Mode",
      "options": [
        {
          "_meta": {
            "cognition.ai/icon": "code"
          },
          "description": "Write and edit code",
          "name": "Code",
          "value": "accept-edits"
        },
        {
          "_meta": {
            "cognition.ai/icon": "message-circle"
          },
          "description": "Answer questions without code changes",
          "name": "Ask",
          "value": "ask"
        },
        {
          "_meta": {
            "cognition.ai/icon": "file-text"
          },
          "description": "Plan changes before implementing",
          "name": "Plan",
          "value": "plan"
        },
        {
          "_meta": {
            "cognition.ai/icon": "shield-off"
          },
          "description": "Auto-approve all tool calls",
          "name": "Bypass Permissions",
          "value": "bypass"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "accept-edits",
  "currentModelId": null,
  "currentReasoningEffortId": null,
  "id": "devin",
  "models": [],
  "modes": [
    {
      "id": "accept-edits",
      "name": "Code"
    },
    {
      "id": "ask",
      "name": "Ask"
    },
    {
      "id": "plan",
      "name": "Plan"
    },
    {
      "id": "bypass",
      "name": "Bypass Permissions"
    }
  ],
  "name": "Devin",
  "protocolVersion": 1,
  "reasoningEfforts": [],
  "version": "2026.8.18"
};
