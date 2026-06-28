import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": false
    },
    "promptCapabilities": {
      "audio": true,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {}
  },
  "agentInfo": {
    "name": "vtcode",
    "title": "Zed",
    "version": "0.96.12"
  },
  "authMethods": [],
  "commands": [
    {
      "description": "Create vtcode.toml and index the workspace",
      "input": {
        "hint": "Optional: --force flag"
      },
      "name": "init"
    },
    {
      "description": "Browse vtcode.toml settings sections",
      "input": null,
      "name": "config"
    },
    {
      "description": "Show model, provider, workspace, and tool status",
      "input": null,
      "name": "status"
    },
    {
      "description": "Run installation and configuration diagnostics",
      "input": null,
      "name": "doctor"
    },
    {
      "description": "Toggle between Code and Architect modes for read-only planning",
      "input": {
        "hint": "Optional: on | off"
      },
      "name": "plan"
    },
    {
      "description": "Cycle through Ask -> Architect -> Code modes",
      "input": null,
      "name": "mode"
    },
    {
      "description": "Show slash command help",
      "input": null,
      "name": "help"
    },
    {
      "description": "Reset conversation context",
      "input": null,
      "name": "reset"
    },
    {
      "description": "List tools and their descriptions",
      "input": null,
      "name": "tools"
    },
    {
      "description": "Close the VT Code session",
      "input": null,
      "name": "exit"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "code",
      "description": "Controls whether VT Code answers, plans, or edits.",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "name": "Ask",
          "value": "ask"
        },
        {
          "name": "Architect",
          "value": "architect"
        },
        {
          "name": "Code",
          "value": "code"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "none",
      "description": "Controls how much reasoning effort VT Code requests from the model.",
      "id": "thought_level",
      "name": "Thought level",
      "options": [
        {
          "name": "Minimal",
          "value": "minimal"
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
          "name": "Extra High",
          "value": "xhigh"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "code",
  "id": "vtcode",
  "modes": [
    {
      "description": "Answer questions with read-only workspace inspection",
      "id": "ask",
      "name": "Ask"
    },
    {
      "description": "Design and plan software systems with read-only workspace inspection",
      "id": "architect",
      "name": "Architect"
    },
    {
      "description": "Write and modify code with full tool access",
      "id": "code",
      "name": "Code"
    }
  ],
  "name": "VT Code",
  "protocolVersion": 1,
  "version": "0.96.14"
};
