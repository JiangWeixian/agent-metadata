import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "auth": {
      "logout": {}
    },
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": true
    },
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "additionalDirectories": {},
      "fork": {},
      "list": {},
      "resume": {}
    }
  },
  "agentInfo": {
    "name": "@jetbrains/junie",
    "title": "Junie",
    "version": "26.6.22 (2045.46)"
  },
  "authMethods": [
    {
      "description": "Log in via Junie Account in a browser.",
      "id": "jetbrains-account",
      "name": "Junie Account",
      "type": "agent"
    },
    {
      "_meta": {
        "terminal-auth": {
          "args": [
            "@jetbrains/junie@latest"
          ],
          "command": "npx",
          "env": {
            "JUNIE_HOME": "/home/runner/.junie"
          },
          "label": "Junie CLI login"
        }
      },
      "description": "Run Junie in a terminal and sign in using the Account screen.",
      "env": {
        "JUNIE_HOME": "/home/runner/.junie"
      },
      "id": "junie-cli",
      "name": "Junie CLI (interactive)",
      "type": "terminal"
    }
  ],
  "commands": [
    {
      "description": "Displays session usage and remaining quota",
      "name": "usage"
    },
    {
      "description": "Create a plan for the given task",
      "input": {
        "hint": "describe what to plan"
      },
      "name": "plan"
    },
    {
      "description": "Review code changes (diff vs main, or describe what to review)",
      "input": {
        "hint": "what to review (optional)"
      },
      "name": "review"
    }
  ],
  "configOptions": [
    {
      "category": "thought_level",
      "currentValue": "high",
      "description": "Select how much reasoning effort Junie spends for the selected model",
      "id": "effort",
      "name": "Effort",
      "options": [
        {
          "name": "◎ Low effort",
          "value": "low"
        },
        {
          "name": "◐ Medium effort",
          "value": "medium"
        },
        {
          "name": "◕ High effort",
          "value": "high"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": false,
      "description": "When enabled, Junie will execute commands without asking for approval",
      "id": "brave_mode",
      "name": "Brave Mode",
      "type": "boolean"
    }
  ],
  "currentModeId": null,
  "currentModelId": null,
  "currentReasoningEffortId": "high",
  "id": "junie",
  "models": [],
  "modes": [],
  "name": "Junie",
  "protocolVersion": 1,
  "reasoningEfforts": [
    {
      "id": "low",
      "name": "◎ Low effort"
    },
    {
      "id": "medium",
      "name": "◐ Medium effort"
    },
    {
      "id": "high",
      "name": "◕ High effort"
    }
  ],
  "version": "2045.46.0"
};
