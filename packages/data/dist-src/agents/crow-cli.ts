import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "loadSession": true,
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    }
  },
  "agentInfo": {
    "name": "crow-cli",
    "title": "crow-cli",
    "version": "0.1.24"
  },
  "authMethods": [
    {
      "_meta": {
        "terminal-auth": {
          "args": [
            "crow-cli",
            "acp"
          ],
          "command": "uvx",
          "env": {},
          "label": "Crow Auth",
          "type": "terminal"
        }
      },
      "description": "This agent does not require authentication for FOSS deployments.",
      "id": "none",
      "name": "No Authentication Required"
    }
  ],
  "commands": [
    {
      "description": "Compact the conversation history to reduce context size",
      "name": "compact"
    },
    {
      "description": "Show available slash commands",
      "name": "help"
    },
    {
      "description": "Clear the session context",
      "name": "clear"
    },
    {
      "description": "Stop current operation",
      "name": "stop"
    }
  ],
  "configOptions": [
    {
      "category": "model",
      "currentValue": "",
      "id": "model",
      "name": "Model",
      "options": [],
      "type": "select"
    }
  ],
  "currentModeId": null,
  "id": "crow-cli",
  "modes": [],
  "name": "crow-cli",
  "protocolVersion": 1,
  "version": "0.1.24"
};
