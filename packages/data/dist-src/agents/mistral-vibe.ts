import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "loadSession": true,
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "close": {},
      "fork": {},
      "list": {}
    }
  },
  "agentInfo": {
    "name": "@mistralai/mistral-vibe",
    "title": "Mistral Vibe",
    "version": "2.18.0"
  },
  "authMethods": [
    {
      "description": "Sign into Mistral Vibe through your Mistral AI Studio account.",
      "id": "browser-auth",
      "name": "Sign in through Mistral AI Studio"
    }
  ],
  "commands": [
    {
      "description": "Compact conversation history by summarizing. Optionally pass instructions to guide the summary",
      "input": {
        "hint": "Optional instructions to guide the compaction summary"
      },
      "name": "compact"
    },
    {
      "description": "Show data retention information",
      "name": "data-retention"
    },
    {
      "description": "Show available commands and keyboard shortcuts",
      "name": "help"
    },
    {
      "description": "Install the Lean 4 agent (leanstral)",
      "name": "leanstall"
    },
    {
      "description": "Show path to current session log directory",
      "name": "log"
    },
    {
      "description": "Show MCP OAuth status, login guidance, or log out an OAuth MCP server",
      "input": {
        "hint": "status | login <alias> | logout <alias>"
      },
      "name": "mcp"
    },
    {
      "description": "Configure proxy and SSL certificate settings",
      "input": {
        "hint": "KEY value to set, KEY to unset, or empty for help"
      },
      "name": "proxy-setup"
    },
    {
      "description": "Reload configuration, agent instructions, and skills from disk",
      "name": "reload"
    },
    {
      "description": "Teleport session to Vibe Code Web",
      "name": "teleport"
    },
    {
      "description": "Uninstall the Lean 4 agent",
      "name": "unleanstall"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "default",
      "id": "mode",
      "name": "Session Mode",
      "options": [
        {
          "description": "Requires approval for tool executions",
          "name": "Default",
          "value": "default"
        },
        {
          "description": "Read-only agent for exploration and planning",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Auto-approves file edits only",
          "name": "Accept Edits",
          "value": "accept-edits"
        },
        {
          "description": "Auto-approves all tool executions",
          "name": "Auto Approve",
          "value": "auto-approve"
        },
        {
          "description": "Read-only conversational mode for questions and discussions",
          "name": "Chat",
          "value": "chat"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "mistral-medium-3.5",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "description": "mistral-vibe-cli-latest",
          "name": "mistral-medium-3.5",
          "value": "mistral-medium-3.5"
        },
        {
          "description": "devstral-small-latest",
          "name": "devstral-small",
          "value": "devstral-small"
        },
        {
          "description": "devstral",
          "name": "local",
          "value": "local"
        }
      ],
      "type": "select"
    },
    {
      "category": "thinking",
      "currentValue": "high",
      "id": "thinking",
      "name": "Thinking",
      "options": [
        {
          "name": "Off",
          "value": "off"
        },
        {
          "name": "Low",
          "value": "low"
        },
        {
          "name": "Medium",
          "value": "medium"
        },
        {
          "name": "High",
          "value": "high"
        },
        {
          "name": "Max",
          "value": "max"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "default",
  "currentModelId": "mistral-medium-3.5",
  "currentReasoningEffortId": null,
  "id": "mistral-vibe",
  "models": [
    {
      "description": "mistral-vibe-cli-latest",
      "id": "mistral-medium-3.5",
      "name": "mistral-medium-3.5"
    },
    {
      "description": "devstral-small-latest",
      "id": "devstral-small",
      "name": "devstral-small"
    },
    {
      "description": "devstral",
      "id": "local",
      "name": "local"
    }
  ],
  "modes": [
    {
      "description": "Requires approval for tool executions",
      "id": "default",
      "name": "Default"
    },
    {
      "description": "Read-only agent for exploration and planning",
      "id": "plan",
      "name": "Plan"
    },
    {
      "description": "Auto-approves file edits only",
      "id": "accept-edits",
      "name": "Accept Edits"
    },
    {
      "description": "Auto-approves all tool executions",
      "id": "auto-approve",
      "name": "Auto Approve"
    },
    {
      "description": "Read-only conversational mode for questions and discussions",
      "id": "chat",
      "name": "Chat"
    }
  ],
  "name": "Mistral Vibe",
  "protocolVersion": 1,
  "reasoningEfforts": [],
  "version": "2.18.0"
};
