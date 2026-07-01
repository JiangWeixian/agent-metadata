import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "auth": {},
    "loadSession": true,
    "mcpCapabilities": {
      "http": false,
      "sse": false
    },
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": false,
      "image": false
    },
    "sessionCapabilities": {
      "fork": {}
    }
  },
  "agentInfo": {
    "name": "sigit",
    "title": "siGit Code - AI Coding Agent",
    "version": "1.2.2"
  },
  "authMethods": [
    {
      "description": "Sign in with `/login <email> <password>` in the message box.",
      "id": "sigit",
      "name": "Sign in to siGit Code"
    }
  ],
  "commands": [
    {
      "description": "Show available commands",
      "name": "help"
    },
    {
      "description": "List available models",
      "input": {
        "hint": "model number to switch to (optional)"
      },
      "name": "models"
    },
    {
      "description": "Sign in to siGit Code Cloud",
      "input": {
        "hint": "<email> <password>"
      },
      "name": "login"
    },
    {
      "description": "Sign out of siGit Code Cloud",
      "name": "logout"
    },
    {
      "description": "Show the signed-in account",
      "name": "whoami"
    },
    {
      "description": "Re-sync sign-in and model state",
      "name": "reload"
    },
    {
      "description": "Wipe the conversation history",
      "name": "clear"
    },
    {
      "description": "Show engine status",
      "name": "status"
    }
  ],
  "configOptions": [
    {
      "category": "model",
      "currentValue": "bartowski/Qwen2.5-3B-Instruct-GGUF",
      "description": "Select an on-device model or a siGit Code Cloud tier",
      "id": "sigit-model",
      "name": "Model",
      "options": [
        {
          "description": "~3.8 GB - download on select",
          "name": "DeepSeek Coder 6.7B (Q4_K_M) [Onde]",
          "value": "TheBloke/deepseek-coder-6.7B-instruct-GGUF"
        },
        {
          "description": "~941 MB (GGUF Q4_K_M) - download on select",
          "name": "Qwen 2.5 1.5B [Onde]",
          "value": "bartowski/Qwen2.5-1.5B-Instruct-GGUF"
        },
        {
          "description": "~1.93 GB (GGUF Q4_K_M) - download on select",
          "name": "Qwen 2.5 3B [Onde]",
          "value": "bartowski/Qwen2.5-3B-Instruct-GGUF"
        },
        {
          "description": "tool calling - ~4.4 GB - download on select",
          "name": "Qwen 2.5 Coder 7B (Q4_K_M) [Onde]",
          "value": "bartowski/Qwen2.5-Coder-7B-Instruct-GGUF"
        },
        {
          "description": "tool calling - ~1.3 GB - download on select",
          "name": "Qwen 3 1.7B (Q4_K_M) [Onde]",
          "value": "bartowski/Qwen_Qwen3-1.7B-GGUF"
        },
        {
          "description": "tool calling - ~8.4 GB - download on select",
          "name": "Qwen 3 14B (Q4_K_M) [Onde]",
          "value": "bartowski/Qwen_Qwen3-14B-GGUF"
        },
        {
          "description": "tool calling - ~2.7 GB - download on select",
          "name": "Qwen 3 4B (Q4_K_M) [Onde]",
          "value": "bartowski/Qwen_Qwen3-4B-GGUF"
        },
        {
          "description": "tool calling - ~5 GB - download on select",
          "name": "Qwen 3 8B (Q4_K_M) [Onde]",
          "value": "bartowski/Qwen_Qwen3-8B-GGUF"
        },
        {
          "description": "tool calling - siGit Code Cloud",
          "name": "Balanced [siGit Code Cloud]",
          "value": "sigit-cloud:balanced"
        },
        {
          "description": "tool calling - siGit Code Cloud",
          "name": "Fast [siGit Code Cloud]",
          "value": "sigit-cloud:fast"
        },
        {
          "description": "tool calling - siGit Code Cloud",
          "name": "Large [siGit Code Cloud]",
          "value": "sigit-cloud:large"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": null,
  "currentModelId": null,
  "currentReasoningEffortId": null,
  "id": "sigit",
  "models": [],
  "modes": [],
  "name": "siGit Code",
  "protocolVersion": 1,
  "reasoningEfforts": [],
  "version": "1.2.2"
};
