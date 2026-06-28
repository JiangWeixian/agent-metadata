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
            "JUNIE_HOME": "/Volumes/ORICO/Users/jiangwei/.junie"
          },
          "label": "Junie CLI login"
        }
      },
      "description": "Run Junie in a terminal and sign in using the Account screen.",
      "env": {
        "JUNIE_HOME": "/Volumes/ORICO/Users/jiangwei/.junie"
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
      "category": "model",
      "currentValue": "gemini-3-flash-preview",
      "description": "Select the model Junie uses for responses",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "description": "Top-tier model, good for everyday work. Fast and inexpensive.",
          "name": "Gemini 3 Flash Preview",
          "value": "gemini-3-flash-preview"
        },
        {
          "description": "Recommended inexpensive model that consumes 1.5–3x fewer credits than the default, with only a small loss in quality.",
          "name": "Gemini 3.1 Flash Lite",
          "value": "gemini-3.1-flash-lite"
        },
        {
          "description": "This top-tier model, good for everyday work, consumes 1.3–2x as many credits as the default.",
          "name": "Claude Sonnet 4.6",
          "value": "claude-sonnet-4-6"
        },
        {
          "description": "This top-tier model is recommended for medium or complex tasks. Consumes 2-3x as many credits as the default.",
          "name": "Claude Opus 4.6",
          "value": "claude-opus-4-6"
        },
        {
          "description": "New version of Opus. It is recommended for medium or complex tasks. Consumes 2-3x as many credits as the default.",
          "name": "Claude Opus 4.7",
          "value": "claude-opus-4-7"
        },
        {
          "description": "Latest version of Opus. It is recommended for medium or complex tasks. Consumes 2-3x as many credits as the default.",
          "name": "Claude Opus 4.8",
          "value": "claude-opus-4-8"
        },
        {
          "description": "The most powerful Anthropic model. Consumes 5-10x as many credits as the default. Not available for cybersecurity and biology tasks.",
          "name": "Claude Fable 5",
          "value": "claude-fable-5"
        },
        {
          "description": "This top-tier model consumes credits similar to the default.",
          "name": "GPT-5",
          "value": "gpt-5-2025-08-07"
        },
        {
          "description": "This top-tier model consumes 1.5–2x as many credits as the default.",
          "name": "GPT-5.3-codex",
          "value": "gpt-5.3-codex"
        },
        {
          "description": "Similar quality to GPT-5.3-codex, consumes 2–3x as many credits as the default.",
          "name": "GPT-5.4",
          "value": "gpt-5.4"
        },
        {
          "description": "The most advanced coding model by OpenAI, consumes 3–6x as many credits as the default.",
          "name": "GPT-5.5",
          "value": "gpt-5.5"
        },
        {
          "description": "This top-tier model consumes 1.5–2x as many credits as the default.",
          "name": "GPT-5.2",
          "value": "gpt-5.2-2025-12-11"
        },
        {
          "description": "This model is in preview. Response times may vary, and credit usage may be significantly higher than expected. Please monitor your balance.",
          "name": "Gemini 3.1 Pro Preview",
          "value": "gemini-3.1-pro-preview"
        },
        {
          "description": "This fast model consumes as many credits as the default.",
          "name": "Grok 4.3",
          "value": "grok-4.3"
        },
        {
          "description": "Top-tier model, consumes 3x as many credits as the default.",
          "name": "Gemini 3.5 Flash",
          "value": "gemini-3.5-flash"
        }
      ],
      "type": "select"
    },
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
  "id": "junie",
  "modes": [],
  "name": "Junie",
  "protocolVersion": 1,
  "version": "2045.46.0"
};
