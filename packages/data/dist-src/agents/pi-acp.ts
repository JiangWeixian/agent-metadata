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
      "embeddedContext": false,
      "image": true
    },
    "sessionCapabilities": {
      "list": {}
    }
  },
  "agentInfo": {
    "name": "pi-acp",
    "title": "pi ACP adapter",
    "version": "0.0.31"
  },
  "authMethods": [
    {
      "args": [
        "--terminal-login"
      ],
      "description": "Start pi in an interactive terminal to configure API keys or login",
      "env": {},
      "id": "pi_terminal_login",
      "name": "Launch pi in the terminal",
      "type": "terminal"
    }
  ],
  "commands": [
    {
      "description": "Manually compact the session context",
      "input": {
        "hint": "optional custom instructions"
      },
      "name": "compact"
    },
    {
      "description": "Toggle automatic context compaction",
      "input": {
        "hint": "on|off|toggle"
      },
      "name": "autocompact"
    },
    {
      "description": "Export session to an HTML file in the session cwd",
      "name": "export"
    },
    {
      "description": "Show session stats (messages, tokens, cost, session file)",
      "name": "session"
    },
    {
      "description": "Set session display name",
      "input": {
        "hint": "<name>"
      },
      "name": "name"
    },
    {
      "description": "Get/set pi steering message delivery mode (how queued steering messages are delivered)",
      "input": {
        "hint": "(no args to show) all | one-at-a-time"
      },
      "name": "steering"
    },
    {
      "description": "Get/set pi follow-up message delivery mode (how queued follow-up messages are delivered)",
      "input": {
        "hint": "(no args to show) all | one-at-a-time"
      },
      "name": "follow-up"
    },
    {
      "description": "Show pi changelog",
      "name": "changelog"
    }
  ],
  "configOptions": [
    {
      "category": "model",
      "currentValue": "anthropic/claude-opus-4-8",
      "description": "Select the model for this session",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "description": null,
          "name": "anthropic/Claude Haiku 3.5",
          "value": "anthropic/claude-3-5-haiku-20241022"
        },
        {
          "description": null,
          "name": "anthropic/Claude Haiku 3.5 (latest)",
          "value": "anthropic/claude-3-5-haiku-latest"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 3.5",
          "value": "anthropic/claude-3-5-sonnet-20240620"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 3.5 v2",
          "value": "anthropic/claude-3-5-sonnet-20241022"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 3.7",
          "value": "anthropic/claude-3-7-sonnet-20250219"
        },
        {
          "description": null,
          "name": "anthropic/Claude Haiku 3",
          "value": "anthropic/claude-3-haiku-20240307"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 3",
          "value": "anthropic/claude-3-opus-20240229"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 3",
          "value": "anthropic/claude-3-sonnet-20240229"
        },
        {
          "description": null,
          "name": "anthropic/Claude Fable 5",
          "value": "anthropic/claude-fable-5"
        },
        {
          "description": null,
          "name": "anthropic/Claude Haiku 4.5 (latest)",
          "value": "anthropic/claude-haiku-4-5"
        },
        {
          "description": null,
          "name": "anthropic/Claude Haiku 4.5",
          "value": "anthropic/claude-haiku-4-5-20251001"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4 (latest)",
          "value": "anthropic/claude-opus-4-0"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4.1 (latest)",
          "value": "anthropic/claude-opus-4-1"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4.1",
          "value": "anthropic/claude-opus-4-1-20250805"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4",
          "value": "anthropic/claude-opus-4-20250514"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4.5 (latest)",
          "value": "anthropic/claude-opus-4-5"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4.5",
          "value": "anthropic/claude-opus-4-5-20251101"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4.6",
          "value": "anthropic/claude-opus-4-6"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4.7",
          "value": "anthropic/claude-opus-4-7"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4.8",
          "value": "anthropic/claude-opus-4-8"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 4 (latest)",
          "value": "anthropic/claude-sonnet-4-0"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 4",
          "value": "anthropic/claude-sonnet-4-20250514"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 4.5 (latest)",
          "value": "anthropic/claude-sonnet-4-5"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 4.5",
          "value": "anthropic/claude-sonnet-4-5-20250929"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 4.6",
          "value": "anthropic/claude-sonnet-4-6"
        },
        {
          "description": null,
          "name": "deepseek/DeepSeek V4 Flash",
          "value": "deepseek/deepseek-v4-flash"
        },
        {
          "description": null,
          "name": "deepseek/DeepSeek V4 Pro",
          "value": "deepseek/deepseek-v4-pro"
        },
        {
          "description": null,
          "name": "google/Gemini 2.0 Flash",
          "value": "google/gemini-2.0-flash"
        },
        {
          "description": null,
          "name": "google/Gemini 2.0 Flash-Lite",
          "value": "google/gemini-2.0-flash-lite"
        },
        {
          "description": null,
          "name": "google/Gemini 2.5 Flash",
          "value": "google/gemini-2.5-flash"
        },
        {
          "description": null,
          "name": "google/Gemini 2.5 Flash-Lite",
          "value": "google/gemini-2.5-flash-lite"
        },
        {
          "description": null,
          "name": "google/Gemini 2.5 Pro",
          "value": "google/gemini-2.5-pro"
        },
        {
          "description": null,
          "name": "google/Gemini 3 Flash Preview",
          "value": "google/gemini-3-flash-preview"
        },
        {
          "description": null,
          "name": "google/Gemini 3 Pro Preview",
          "value": "google/gemini-3-pro-preview"
        },
        {
          "description": null,
          "name": "google/Gemini 3.1 Flash Lite",
          "value": "google/gemini-3.1-flash-lite"
        },
        {
          "description": null,
          "name": "google/Gemini 3.1 Flash Lite Preview",
          "value": "google/gemini-3.1-flash-lite-preview"
        },
        {
          "description": null,
          "name": "google/Gemini 3.1 Pro Preview",
          "value": "google/gemini-3.1-pro-preview"
        },
        {
          "description": null,
          "name": "google/Gemini 3.1 Pro Preview Custom Tools",
          "value": "google/gemini-3.1-pro-preview-customtools"
        },
        {
          "description": null,
          "name": "google/Gemini 3.5 Flash",
          "value": "google/gemini-3.5-flash"
        },
        {
          "description": null,
          "name": "google/Gemini Flash Latest",
          "value": "google/gemini-flash-latest"
        },
        {
          "description": null,
          "name": "google/Gemini Flash-Lite Latest",
          "value": "google/gemini-flash-lite-latest"
        },
        {
          "description": null,
          "name": "google/Gemma 4 26B A4B IT",
          "value": "google/gemma-4-26b-a4b-it"
        },
        {
          "description": null,
          "name": "google/Gemma 4 31B IT",
          "value": "google/gemma-4-31b-it"
        },
        {
          "description": null,
          "name": "mistral/Codestral (latest)",
          "value": "mistral/codestral-latest"
        },
        {
          "description": null,
          "name": "mistral/Devstral 2",
          "value": "mistral/devstral-2512"
        },
        {
          "description": null,
          "name": "mistral/Devstral 2",
          "value": "mistral/devstral-latest"
        },
        {
          "description": null,
          "name": "mistral/Devstral Medium",
          "value": "mistral/devstral-medium-2507"
        },
        {
          "description": null,
          "name": "mistral/Devstral 2 (latest)",
          "value": "mistral/devstral-medium-latest"
        },
        {
          "description": null,
          "name": "mistral/Devstral Small 2505",
          "value": "mistral/devstral-small-2505"
        },
        {
          "description": null,
          "name": "mistral/Devstral Small",
          "value": "mistral/devstral-small-2507"
        },
        {
          "description": null,
          "name": "mistral/Devstral Small 2",
          "value": "mistral/labs-devstral-small-2512"
        },
        {
          "description": null,
          "name": "mistral/Magistral Medium (latest)",
          "value": "mistral/magistral-medium-latest"
        },
        {
          "description": null,
          "name": "mistral/Magistral Small",
          "value": "mistral/magistral-small"
        },
        {
          "description": null,
          "name": "mistral/Ministral 3B (latest)",
          "value": "mistral/ministral-3b-latest"
        },
        {
          "description": null,
          "name": "mistral/Ministral 8B (latest)",
          "value": "mistral/ministral-8b-latest"
        },
        {
          "description": null,
          "name": "mistral/Mistral Large 2.1",
          "value": "mistral/mistral-large-2411"
        },
        {
          "description": null,
          "name": "mistral/Mistral Large 3",
          "value": "mistral/mistral-large-2512"
        },
        {
          "description": null,
          "name": "mistral/Mistral Large (latest)",
          "value": "mistral/mistral-large-latest"
        },
        {
          "description": null,
          "name": "mistral/Mistral Medium 3",
          "value": "mistral/mistral-medium-2505"
        },
        {
          "description": null,
          "name": "mistral/Mistral Medium 3.1",
          "value": "mistral/mistral-medium-2508"
        },
        {
          "description": null,
          "name": "mistral/Mistral Medium 3.5",
          "value": "mistral/mistral-medium-2604"
        },
        {
          "description": null,
          "name": "mistral/Mistral Medium 3.5",
          "value": "mistral/mistral-medium-3.5"
        },
        {
          "description": null,
          "name": "mistral/Mistral Medium (latest)",
          "value": "mistral/mistral-medium-latest"
        },
        {
          "description": null,
          "name": "mistral/Mistral Nemo",
          "value": "mistral/mistral-nemo"
        },
        {
          "description": null,
          "name": "mistral/Mistral Small 3.2",
          "value": "mistral/mistral-small-2506"
        },
        {
          "description": null,
          "name": "mistral/Mistral Small 4",
          "value": "mistral/mistral-small-2603"
        },
        {
          "description": null,
          "name": "mistral/Mistral Small (latest)",
          "value": "mistral/mistral-small-latest"
        },
        {
          "description": null,
          "name": "mistral/Mistral 7B",
          "value": "mistral/open-mistral-7b"
        },
        {
          "description": null,
          "name": "mistral/Open Mistral Nemo",
          "value": "mistral/open-mistral-nemo"
        },
        {
          "description": null,
          "name": "mistral/Mixtral 8x22B",
          "value": "mistral/open-mixtral-8x22b"
        },
        {
          "description": null,
          "name": "mistral/Mixtral 8x7B",
          "value": "mistral/open-mixtral-8x7b"
        },
        {
          "description": null,
          "name": "mistral/Pixtral 12B",
          "value": "mistral/pixtral-12b"
        },
        {
          "description": null,
          "name": "mistral/Pixtral Large (latest)",
          "value": "mistral/pixtral-large-latest"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2 0711",
          "value": "moonshotai/kimi-k2-0711-preview"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2 0905",
          "value": "moonshotai/kimi-k2-0905-preview"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2 Thinking",
          "value": "moonshotai/kimi-k2-thinking"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2 Thinking Turbo",
          "value": "moonshotai/kimi-k2-thinking-turbo"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2 Turbo",
          "value": "moonshotai/kimi-k2-turbo-preview"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2.5",
          "value": "moonshotai/kimi-k2.5"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2.6",
          "value": "moonshotai/kimi-k2.6"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2.7 Code",
          "value": "moonshotai/kimi-k2.7-code"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2.7 Code HighSpeed",
          "value": "moonshotai/kimi-k2.7-code-highspeed"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2 0711",
          "value": "moonshotai-cn/kimi-k2-0711-preview"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2 0905",
          "value": "moonshotai-cn/kimi-k2-0905-preview"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2 Thinking",
          "value": "moonshotai-cn/kimi-k2-thinking"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2 Thinking Turbo",
          "value": "moonshotai-cn/kimi-k2-thinking-turbo"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2 Turbo",
          "value": "moonshotai-cn/kimi-k2-turbo-preview"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2.5",
          "value": "moonshotai-cn/kimi-k2.5"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2.6",
          "value": "moonshotai-cn/kimi-k2.6"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2.7 Code",
          "value": "moonshotai-cn/kimi-k2.7-code"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2.7 Code HighSpeed",
          "value": "moonshotai-cn/kimi-k2.7-code-highspeed"
        },
        {
          "description": null,
          "name": "openai/GPT-4",
          "value": "openai/gpt-4"
        },
        {
          "description": null,
          "name": "openai/GPT-4 Turbo",
          "value": "openai/gpt-4-turbo"
        },
        {
          "description": null,
          "name": "openai/GPT-4.1",
          "value": "openai/gpt-4.1"
        },
        {
          "description": null,
          "name": "openai/GPT-4.1 mini",
          "value": "openai/gpt-4.1-mini"
        },
        {
          "description": null,
          "name": "openai/GPT-4.1 nano",
          "value": "openai/gpt-4.1-nano"
        },
        {
          "description": null,
          "name": "openai/GPT-4o",
          "value": "openai/gpt-4o"
        },
        {
          "description": null,
          "name": "openai/GPT-4o (2024-05-13)",
          "value": "openai/gpt-4o-2024-05-13"
        },
        {
          "description": null,
          "name": "openai/GPT-4o (2024-08-06)",
          "value": "openai/gpt-4o-2024-08-06"
        },
        {
          "description": null,
          "name": "openai/GPT-4o (2024-11-20)",
          "value": "openai/gpt-4o-2024-11-20"
        },
        {
          "description": null,
          "name": "openai/GPT-4o mini",
          "value": "openai/gpt-4o-mini"
        },
        {
          "description": null,
          "name": "openai/GPT-5",
          "value": "openai/gpt-5"
        },
        {
          "description": null,
          "name": "openai/GPT-5 Chat Latest",
          "value": "openai/gpt-5-chat-latest"
        },
        {
          "description": null,
          "name": "openai/GPT-5-Codex",
          "value": "openai/gpt-5-codex"
        },
        {
          "description": null,
          "name": "openai/GPT-5 Mini",
          "value": "openai/gpt-5-mini"
        },
        {
          "description": null,
          "name": "openai/GPT-5 Nano",
          "value": "openai/gpt-5-nano"
        },
        {
          "description": null,
          "name": "openai/GPT-5 Pro",
          "value": "openai/gpt-5-pro"
        },
        {
          "description": null,
          "name": "openai/GPT-5.1",
          "value": "openai/gpt-5.1"
        },
        {
          "description": null,
          "name": "openai/GPT-5.1 Chat",
          "value": "openai/gpt-5.1-chat-latest"
        },
        {
          "description": null,
          "name": "openai/GPT-5.1 Codex",
          "value": "openai/gpt-5.1-codex"
        },
        {
          "description": null,
          "name": "openai/GPT-5.1 Codex Max",
          "value": "openai/gpt-5.1-codex-max"
        },
        {
          "description": null,
          "name": "openai/GPT-5.1 Codex mini",
          "value": "openai/gpt-5.1-codex-mini"
        },
        {
          "description": null,
          "name": "openai/GPT-5.2",
          "value": "openai/gpt-5.2"
        },
        {
          "description": null,
          "name": "openai/GPT-5.2 Chat",
          "value": "openai/gpt-5.2-chat-latest"
        },
        {
          "description": null,
          "name": "openai/GPT-5.2 Codex",
          "value": "openai/gpt-5.2-codex"
        },
        {
          "description": null,
          "name": "openai/GPT-5.2 Pro",
          "value": "openai/gpt-5.2-pro"
        },
        {
          "description": null,
          "name": "openai/GPT-5.3 Chat (latest)",
          "value": "openai/gpt-5.3-chat-latest"
        },
        {
          "description": null,
          "name": "openai/GPT-5.3 Codex",
          "value": "openai/gpt-5.3-codex"
        },
        {
          "description": null,
          "name": "openai/GPT-5.3 Codex Spark",
          "value": "openai/gpt-5.3-codex-spark"
        },
        {
          "description": null,
          "name": "openai/GPT-5.4",
          "value": "openai/gpt-5.4"
        },
        {
          "description": null,
          "name": "openai/GPT-5.4 mini",
          "value": "openai/gpt-5.4-mini"
        },
        {
          "description": null,
          "name": "openai/GPT-5.4 nano",
          "value": "openai/gpt-5.4-nano"
        },
        {
          "description": null,
          "name": "openai/GPT-5.4 Pro",
          "value": "openai/gpt-5.4-pro"
        },
        {
          "description": null,
          "name": "openai/GPT-5.5",
          "value": "openai/gpt-5.5"
        },
        {
          "description": null,
          "name": "openai/GPT-5.5 Pro",
          "value": "openai/gpt-5.5-pro"
        },
        {
          "description": null,
          "name": "openai/o1",
          "value": "openai/o1"
        },
        {
          "description": null,
          "name": "openai/o1-pro",
          "value": "openai/o1-pro"
        },
        {
          "description": null,
          "name": "openai/o3",
          "value": "openai/o3"
        },
        {
          "description": null,
          "name": "openai/o3-deep-research",
          "value": "openai/o3-deep-research"
        },
        {
          "description": null,
          "name": "openai/o3-mini",
          "value": "openai/o3-mini"
        },
        {
          "description": null,
          "name": "openai/o3-pro",
          "value": "openai/o3-pro"
        },
        {
          "description": null,
          "name": "openai/o4-mini",
          "value": "openai/o4-mini"
        },
        {
          "description": null,
          "name": "openai/o4-mini-deep-research",
          "value": "openai/o4-mini-deep-research"
        },
        {
          "description": null,
          "name": "xai/Grok 3",
          "value": "xai/grok-3"
        },
        {
          "description": null,
          "name": "xai/Grok 3 Fast",
          "value": "xai/grok-3-fast"
        },
        {
          "description": null,
          "name": "xai/Grok 4.20 (Non-Reasoning)",
          "value": "xai/grok-4.20-0309-non-reasoning"
        },
        {
          "description": null,
          "name": "xai/Grok 4.20 (Reasoning)",
          "value": "xai/grok-4.20-0309-reasoning"
        },
        {
          "description": null,
          "name": "xai/Grok 4.3",
          "value": "xai/grok-4.3"
        },
        {
          "description": null,
          "name": "xai/Grok Build 0.1",
          "value": "xai/grok-build-0.1"
        },
        {
          "description": null,
          "name": "xai/Grok Code Fast 1",
          "value": "xai/grok-code-fast-1"
        },
        {
          "description": null,
          "name": "zai/GLM-4.5-Air",
          "value": "zai/glm-4.5-air"
        },
        {
          "description": null,
          "name": "zai/GLM-4.7",
          "value": "zai/glm-4.7"
        },
        {
          "description": null,
          "name": "zai/GLM-5-Turbo",
          "value": "zai/glm-5-turbo"
        },
        {
          "description": null,
          "name": "zai/GLM-5.1",
          "value": "zai/glm-5.1"
        },
        {
          "description": null,
          "name": "zai/GLM-5.2",
          "value": "zai/glm-5.2"
        },
        {
          "description": null,
          "name": "zai/GLM-5V-Turbo",
          "value": "zai/glm-5v-turbo"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "medium",
      "description": "Set the reasoning effort for this session",
      "id": "thought_level",
      "name": "Thinking",
      "options": [
        {
          "description": null,
          "name": "Thinking: off",
          "value": "off"
        },
        {
          "description": null,
          "name": "Thinking: minimal",
          "value": "minimal"
        },
        {
          "description": null,
          "name": "Thinking: low",
          "value": "low"
        },
        {
          "description": null,
          "name": "Thinking: medium",
          "value": "medium"
        },
        {
          "description": null,
          "name": "Thinking: high",
          "value": "high"
        },
        {
          "description": null,
          "name": "Thinking: xhigh",
          "value": "xhigh"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "medium",
  "id": "pi-acp",
  "modes": [
    {
      "description": null,
      "id": "off",
      "name": "Thinking: off"
    },
    {
      "description": null,
      "id": "minimal",
      "name": "Thinking: minimal"
    },
    {
      "description": null,
      "id": "low",
      "name": "Thinking: low"
    },
    {
      "description": null,
      "id": "medium",
      "name": "Thinking: medium"
    },
    {
      "description": null,
      "id": "high",
      "name": "Thinking: high"
    },
    {
      "description": null,
      "id": "xhigh",
      "name": "Thinking: xhigh"
    }
  ],
  "name": "pi ACP",
  "protocolVersion": 1,
  "version": "0.0.31"
};
