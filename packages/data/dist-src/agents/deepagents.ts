import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
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
      "commands": true,
      "modes": true
    }
  },
  "agentInfo": {
    "name": "deepagents-acp",
    "version": "0.0.1"
  },
  "authMethods": [
    {
      "id": "anthropic",
      "link": "https://console.anthropic.com/settings/keys",
      "name": "Anthropic API Key",
      "type": "env_var",
      "vars": [
        {
          "name": "ANTHROPIC_API_KEY"
        }
      ]
    },
    {
      "id": "openai",
      "link": "https://platform.openai.com/api-keys",
      "name": "OpenAI API Key",
      "type": "env_var",
      "vars": [
        {
          "name": "OPENAI_API_KEY"
        }
      ]
    },
    {
      "description": "Configure LLM provider credentials via environment variables",
      "id": "deepagents-setup",
      "name": "DeepAgents Setup"
    }
  ],
  "commands": [
    {
      "description": "Switch to plan mode (read-only planning)",
      "name": "plan"
    },
    {
      "description": "Switch to agent mode (full autonomous)",
      "name": "agent"
    },
    {
      "description": "Switch to ask mode (Q&A, no file changes)",
      "name": "ask"
    },
    {
      "description": "Clear conversation context and start fresh",
      "name": "clear"
    },
    {
      "description": "Show current session status and loaded skills",
      "name": "status"
    }
  ],
  "configOptions": [],
  "currentModeId": "agent",
  "id": "deepagents",
  "modes": [
    {
      "description": "Full autonomous agent",
      "id": "agent",
      "name": "Agent Mode"
    },
    {
      "description": "Planning and discussion",
      "id": "plan",
      "name": "Plan Mode"
    },
    {
      "description": "Q&A without file changes",
      "id": "ask",
      "name": "Ask Mode"
    }
  ],
  "name": "DeepAgents",
  "protocolVersion": 1,
  "version": "0.1.7"
};
