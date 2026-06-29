import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": true
    },
    "promptCapabilities": {
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "close": {},
      "fork": {},
      "list": {},
      "resume": {}
    }
  },
  "agentInfo": {
    "name": "OpenCode",
    "version": "1.17.11"
  },
  "authMethods": [
    {
      "description": "Run `opencode auth login` in the terminal",
      "id": "opencode-login",
      "name": "Login with opencode"
    }
  ],
  "commands": [
    {
      "description": "Use ONLY when the user is editing or creating opencode's own configuration: opencode.json, opencode.jsonc, files under .opencode/, or files under ~/.config/opencode/. Also use when creating or fixing opencode agents, subagents, skills, plugins, MCP servers, or permission rules. Do not use for the user's own application code, or for any project that is not configuring opencode itself.",
      "name": "customize-opencode"
    },
    {
      "description": "guided AGENTS.md setup",
      "name": "init"
    },
    {
      "description": "review changes [commit|branch|pr], defaults to uncommitted",
      "name": "review"
    }
  ],
  "configOptions": [
    {
      "category": "model",
      "currentValue": "opencode/big-pickle",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "name": "xAI/Grok 4.20 (Non-Reasoning)",
          "value": "xai/grok-4.20-0309-non-reasoning"
        },
        {
          "name": "xAI/Grok 4.20 (Reasoning)",
          "value": "xai/grok-4.20-0309-reasoning"
        },
        {
          "name": "xAI/Grok 4.20 Multi-Agent",
          "value": "xai/grok-4.20-multi-agent-0309"
        },
        {
          "name": "xAI/Grok 4.3",
          "value": "xai/grok-4.3"
        },
        {
          "name": "xAI/Grok Build 0.1",
          "value": "xai/grok-build-0.1"
        },
        {
          "name": "xAI/Grok Imagine Image",
          "value": "xai/grok-imagine-image"
        },
        {
          "name": "xAI/Grok Imagine Image Quality",
          "value": "xai/grok-imagine-image-quality"
        },
        {
          "name": "xAI/Grok Imagine Video",
          "value": "xai/grok-imagine-video"
        },
        {
          "name": "Moonshot AI/Kimi K2 0711",
          "value": "moonshotai/kimi-k2-0711-preview"
        },
        {
          "name": "Moonshot AI/Kimi K2 0905",
          "value": "moonshotai/kimi-k2-0905-preview"
        },
        {
          "name": "Moonshot AI/Kimi K2 Thinking",
          "value": "moonshotai/kimi-k2-thinking"
        },
        {
          "name": "Moonshot AI/Kimi K2 Thinking Turbo",
          "value": "moonshotai/kimi-k2-thinking-turbo"
        },
        {
          "name": "Moonshot AI/Kimi K2 Turbo",
          "value": "moonshotai/kimi-k2-turbo-preview"
        },
        {
          "name": "Moonshot AI/Kimi K2.5",
          "value": "moonshotai/kimi-k2.5"
        },
        {
          "name": "Moonshot AI/Kimi K2.6",
          "value": "moonshotai/kimi-k2.6"
        },
        {
          "name": "Moonshot AI/Kimi K2.7 Code",
          "value": "moonshotai/kimi-k2.7-code"
        },
        {
          "name": "Moonshot AI/Kimi K2.7 Code HighSpeed",
          "value": "moonshotai/kimi-k2.7-code-highspeed"
        },
        {
          "name": "Mistral/Codestral (latest)",
          "value": "mistral/codestral-latest"
        },
        {
          "name": "Mistral/Magistral Medium (latest)",
          "value": "mistral/magistral-medium-latest"
        },
        {
          "name": "Mistral/Magistral Small",
          "value": "mistral/magistral-small"
        },
        {
          "name": "Mistral/Ministral 3B (latest)",
          "value": "mistral/ministral-3b-latest"
        },
        {
          "name": "Mistral/Ministral 8B (latest)",
          "value": "mistral/ministral-8b-latest"
        },
        {
          "name": "Mistral/Mistral 7B",
          "value": "mistral/open-mistral-7b"
        },
        {
          "name": "Mistral/Mistral Embed",
          "value": "mistral/mistral-embed"
        },
        {
          "name": "Mistral/Mistral Large (latest)",
          "value": "mistral/mistral-large-latest"
        },
        {
          "name": "Mistral/Mistral Large 2.1",
          "value": "mistral/mistral-large-2411"
        },
        {
          "name": "Mistral/Mistral Large 3",
          "value": "mistral/mistral-large-2512"
        },
        {
          "name": "Mistral/Mistral Medium (latest)",
          "value": "mistral/mistral-medium-latest"
        },
        {
          "name": "Mistral/Mistral Medium 3",
          "value": "mistral/mistral-medium-2505"
        },
        {
          "name": "Mistral/Mistral Medium 3.1",
          "value": "mistral/mistral-medium-2508"
        },
        {
          "name": "Mistral/Mistral Medium 3.5",
          "value": "mistral/mistral-medium-2604"
        },
        {
          "name": "Mistral/Mistral Nemo",
          "value": "mistral/mistral-nemo"
        },
        {
          "name": "Mistral/Mistral Small (latest)",
          "value": "mistral/mistral-small-latest"
        },
        {
          "name": "Mistral/Mistral Small 3.2",
          "value": "mistral/mistral-small-2506"
        },
        {
          "name": "Mistral/Mistral Small 4",
          "value": "mistral/mistral-small-2603"
        },
        {
          "name": "Mistral/Mixtral 8x22B",
          "value": "mistral/open-mixtral-8x22b"
        },
        {
          "name": "Mistral/Mixtral 8x7B",
          "value": "mistral/open-mixtral-8x7b"
        },
        {
          "name": "Mistral/Pixtral 12B",
          "value": "mistral/pixtral-12b"
        },
        {
          "name": "Mistral/Pixtral Large (latest)",
          "value": "mistral/pixtral-large-latest"
        },
        {
          "name": "Google/Gemini 2.5 Flash",
          "value": "google/gemini-2.5-flash"
        },
        {
          "name": "Google/Gemini 2.5 Flash Preview TTS",
          "value": "google/gemini-2.5-flash-preview-tts"
        },
        {
          "name": "Google/Gemini 2.5 Flash-Lite",
          "value": "google/gemini-2.5-flash-lite"
        },
        {
          "name": "Google/Gemini 2.5 Pro",
          "value": "google/gemini-2.5-pro"
        },
        {
          "name": "Google/Gemini 2.5 Pro Preview TTS",
          "value": "google/gemini-2.5-pro-preview-tts"
        },
        {
          "name": "Google/Gemini 3 Flash Preview",
          "value": "google/gemini-3-flash-preview"
        },
        {
          "name": "Google/Gemini 3.1 Flash Lite",
          "value": "google/gemini-3.1-flash-lite"
        },
        {
          "name": "Google/Gemini 3.1 Pro Preview",
          "value": "google/gemini-3.1-pro-preview"
        },
        {
          "name": "Google/Gemini 3.1 Pro Preview Custom Tools",
          "value": "google/gemini-3.1-pro-preview-customtools"
        },
        {
          "name": "Google/Gemini 3.5 Flash",
          "value": "google/gemini-3.5-flash"
        },
        {
          "name": "Google/Gemini Embedding 001",
          "value": "google/gemini-embedding-001"
        },
        {
          "name": "Google/Gemini Flash Latest",
          "value": "google/gemini-flash-latest"
        },
        {
          "name": "Google/Gemini Flash-Lite Latest",
          "value": "google/gemini-flash-lite-latest"
        },
        {
          "name": "Google/Gemma 4 26B A4B IT",
          "value": "google/gemma-4-26b-a4b-it"
        },
        {
          "name": "Google/Gemma 4 31B IT",
          "value": "google/gemma-4-31b-it"
        },
        {
          "name": "Google/Nano Banana",
          "value": "google/gemini-2.5-flash-image"
        },
        {
          "name": "Google/Nano Banana 2",
          "value": "google/gemini-3.1-flash-image-preview"
        },
        {
          "name": "Google/Nano Banana Pro",
          "value": "google/gemini-3-pro-image-preview"
        },
        {
          "name": "OpenAI/chatgpt-image-latest",
          "value": "openai/chatgpt-image-latest"
        },
        {
          "name": "OpenAI/GPT-3.5-turbo",
          "value": "openai/gpt-3.5-turbo"
        },
        {
          "name": "OpenAI/GPT-4",
          "value": "openai/gpt-4"
        },
        {
          "name": "OpenAI/GPT-4 Turbo",
          "value": "openai/gpt-4-turbo"
        },
        {
          "name": "OpenAI/GPT-4.1",
          "value": "openai/gpt-4.1"
        },
        {
          "name": "OpenAI/GPT-4.1 mini",
          "value": "openai/gpt-4.1-mini"
        },
        {
          "name": "OpenAI/GPT-4.1 nano",
          "value": "openai/gpt-4.1-nano"
        },
        {
          "name": "OpenAI/GPT-4o",
          "value": "openai/gpt-4o"
        },
        {
          "name": "OpenAI/GPT-4o (2024-05-13)",
          "value": "openai/gpt-4o-2024-05-13"
        },
        {
          "name": "OpenAI/GPT-4o (2024-08-06)",
          "value": "openai/gpt-4o-2024-08-06"
        },
        {
          "name": "OpenAI/GPT-4o (2024-11-20)",
          "value": "openai/gpt-4o-2024-11-20"
        },
        {
          "name": "OpenAI/GPT-4o mini",
          "value": "openai/gpt-4o-mini"
        },
        {
          "name": "OpenAI/GPT-5",
          "value": "openai/gpt-5"
        },
        {
          "name": "OpenAI/GPT-5 Mini",
          "value": "openai/gpt-5-mini"
        },
        {
          "name": "OpenAI/GPT-5 Nano",
          "value": "openai/gpt-5-nano"
        },
        {
          "name": "OpenAI/GPT-5 Pro",
          "value": "openai/gpt-5-pro"
        },
        {
          "name": "OpenAI/GPT-5-Codex",
          "value": "openai/gpt-5-codex"
        },
        {
          "name": "OpenAI/GPT-5.1",
          "value": "openai/gpt-5.1"
        },
        {
          "name": "OpenAI/GPT-5.1 Chat",
          "value": "openai/gpt-5.1-chat-latest"
        },
        {
          "name": "OpenAI/GPT-5.1 Codex",
          "value": "openai/gpt-5.1-codex"
        },
        {
          "name": "OpenAI/GPT-5.1 Codex Max",
          "value": "openai/gpt-5.1-codex-max"
        },
        {
          "name": "OpenAI/GPT-5.1 Codex mini",
          "value": "openai/gpt-5.1-codex-mini"
        },
        {
          "name": "OpenAI/GPT-5.2",
          "value": "openai/gpt-5.2"
        },
        {
          "name": "OpenAI/GPT-5.2 Chat",
          "value": "openai/gpt-5.2-chat-latest"
        },
        {
          "name": "OpenAI/GPT-5.2 Codex",
          "value": "openai/gpt-5.2-codex"
        },
        {
          "name": "OpenAI/GPT-5.2 Pro",
          "value": "openai/gpt-5.2-pro"
        },
        {
          "name": "OpenAI/GPT-5.3 Chat (latest)",
          "value": "openai/gpt-5.3-chat-latest"
        },
        {
          "name": "OpenAI/GPT-5.3 Codex",
          "value": "openai/gpt-5.3-codex"
        },
        {
          "name": "OpenAI/GPT-5.3 Codex Spark",
          "value": "openai/gpt-5.3-codex-spark"
        },
        {
          "name": "OpenAI/GPT-5.4",
          "value": "openai/gpt-5.4"
        },
        {
          "name": "OpenAI/GPT-5.4 Fast",
          "value": "openai/gpt-5.4-fast"
        },
        {
          "name": "OpenAI/GPT-5.4 mini",
          "value": "openai/gpt-5.4-mini"
        },
        {
          "name": "OpenAI/GPT-5.4 mini Fast",
          "value": "openai/gpt-5.4-mini-fast"
        },
        {
          "name": "OpenAI/GPT-5.4 nano",
          "value": "openai/gpt-5.4-nano"
        },
        {
          "name": "OpenAI/GPT-5.4 Pro",
          "value": "openai/gpt-5.4-pro"
        },
        {
          "name": "OpenAI/GPT-5.5",
          "value": "openai/gpt-5.5"
        },
        {
          "name": "OpenAI/GPT-5.5 Fast",
          "value": "openai/gpt-5.5-fast"
        },
        {
          "name": "OpenAI/GPT-5.5 Pro",
          "value": "openai/gpt-5.5-pro"
        },
        {
          "name": "OpenAI/gpt-image-1",
          "value": "openai/gpt-image-1"
        },
        {
          "name": "OpenAI/gpt-image-1-mini",
          "value": "openai/gpt-image-1-mini"
        },
        {
          "name": "OpenAI/gpt-image-1.5",
          "value": "openai/gpt-image-1.5"
        },
        {
          "name": "OpenAI/gpt-image-2",
          "value": "openai/gpt-image-2"
        },
        {
          "name": "OpenAI/o1",
          "value": "openai/o1"
        },
        {
          "name": "OpenAI/o1-pro",
          "value": "openai/o1-pro"
        },
        {
          "name": "OpenAI/o3",
          "value": "openai/o3"
        },
        {
          "name": "OpenAI/o3-deep-research",
          "value": "openai/o3-deep-research"
        },
        {
          "name": "OpenAI/o3-mini",
          "value": "openai/o3-mini"
        },
        {
          "name": "OpenAI/o3-pro",
          "value": "openai/o3-pro"
        },
        {
          "name": "OpenAI/o4-mini",
          "value": "openai/o4-mini"
        },
        {
          "name": "OpenAI/o4-mini-deep-research",
          "value": "openai/o4-mini-deep-research"
        },
        {
          "name": "OpenAI/text-embedding-3-large",
          "value": "openai/text-embedding-3-large"
        },
        {
          "name": "OpenAI/text-embedding-3-small",
          "value": "openai/text-embedding-3-small"
        },
        {
          "name": "OpenAI/text-embedding-ada-002",
          "value": "openai/text-embedding-ada-002"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2 0711",
          "value": "moonshotai-cn/kimi-k2-0711-preview"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2 0905",
          "value": "moonshotai-cn/kimi-k2-0905-preview"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2 Thinking",
          "value": "moonshotai-cn/kimi-k2-thinking"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2 Thinking Turbo",
          "value": "moonshotai-cn/kimi-k2-thinking-turbo"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2 Turbo",
          "value": "moonshotai-cn/kimi-k2-turbo-preview"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2.5",
          "value": "moonshotai-cn/kimi-k2.5"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2.6",
          "value": "moonshotai-cn/kimi-k2.6"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2.7 Code",
          "value": "moonshotai-cn/kimi-k2.7-code"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2.7 Code HighSpeed",
          "value": "moonshotai-cn/kimi-k2.7-code-highspeed"
        },
        {
          "name": "Anthropic/Claude Fable 5",
          "value": "anthropic/claude-fable-5"
        },
        {
          "name": "Anthropic/Claude Haiku 4.5",
          "value": "anthropic/claude-haiku-4-5-20251001"
        },
        {
          "name": "Anthropic/Claude Haiku 4.5 (latest)",
          "value": "anthropic/claude-haiku-4-5"
        },
        {
          "name": "Anthropic/Claude Opus 4",
          "value": "anthropic/claude-opus-4-20250514"
        },
        {
          "name": "Anthropic/Claude Opus 4 (latest)",
          "value": "anthropic/claude-opus-4-0"
        },
        {
          "name": "Anthropic/Claude Opus 4.1",
          "value": "anthropic/claude-opus-4-1-20250805"
        },
        {
          "name": "Anthropic/Claude Opus 4.1 (latest)",
          "value": "anthropic/claude-opus-4-1"
        },
        {
          "name": "Anthropic/Claude Opus 4.5",
          "value": "anthropic/claude-opus-4-5-20251101"
        },
        {
          "name": "Anthropic/Claude Opus 4.5 (latest)",
          "value": "anthropic/claude-opus-4-5"
        },
        {
          "name": "Anthropic/Claude Opus 4.6",
          "value": "anthropic/claude-opus-4-6"
        },
        {
          "name": "Anthropic/Claude Opus 4.6 Fast",
          "value": "anthropic/claude-opus-4-6-fast"
        },
        {
          "name": "Anthropic/Claude Opus 4.7",
          "value": "anthropic/claude-opus-4-7"
        },
        {
          "name": "Anthropic/Claude Opus 4.7 Fast",
          "value": "anthropic/claude-opus-4-7-fast"
        },
        {
          "name": "Anthropic/Claude Opus 4.8",
          "value": "anthropic/claude-opus-4-8"
        },
        {
          "name": "Anthropic/Claude Opus 4.8 Fast",
          "value": "anthropic/claude-opus-4-8-fast"
        },
        {
          "name": "Anthropic/Claude Sonnet 4",
          "value": "anthropic/claude-sonnet-4-20250514"
        },
        {
          "name": "Anthropic/Claude Sonnet 4 (latest)",
          "value": "anthropic/claude-sonnet-4-0"
        },
        {
          "name": "Anthropic/Claude Sonnet 4.5",
          "value": "anthropic/claude-sonnet-4-5-20250929"
        },
        {
          "name": "Anthropic/Claude Sonnet 4.5 (latest)",
          "value": "anthropic/claude-sonnet-4-5"
        },
        {
          "name": "Anthropic/Claude Sonnet 4.6",
          "value": "anthropic/claude-sonnet-4-6"
        },
        {
          "name": "DeepSeek/DeepSeek Chat",
          "value": "deepseek/deepseek-chat"
        },
        {
          "name": "DeepSeek/DeepSeek Reasoner",
          "value": "deepseek/deepseek-reasoner"
        },
        {
          "name": "DeepSeek/DeepSeek V4 Flash",
          "value": "deepseek/deepseek-v4-flash"
        },
        {
          "name": "DeepSeek/DeepSeek V4 Pro",
          "value": "deepseek/deepseek-v4-pro"
        },
        {
          "name": "OpenCode Zen/Big Pickle",
          "value": "opencode/big-pickle"
        },
        {
          "name": "OpenCode Zen/DeepSeek V4 Flash Free",
          "value": "opencode/deepseek-v4-flash-free"
        },
        {
          "name": "OpenCode Zen/MiMo V2.5 Free",
          "value": "opencode/mimo-v2.5-free"
        },
        {
          "name": "OpenCode Zen/Nemotron 3 Ultra Free",
          "value": "opencode/nemotron-3-ultra-free"
        },
        {
          "name": "OpenCode Zen/North Mini Code Free",
          "value": "opencode/north-mini-code-free"
        }
      ],
      "type": "select"
    },
    {
      "category": "mode",
      "currentValue": "build",
      "id": "mode",
      "name": "Session Mode",
      "options": [
        {
          "description": "The default agent. Executes tools based on configured permissions.",
          "name": "build",
          "value": "build"
        },
        {
          "description": "Plan mode. Disallows all edit tools.",
          "name": "plan",
          "value": "plan"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": null,
  "id": "opencode",
  "modes": [],
  "name": "OpenCode",
  "protocolVersion": 1,
  "version": "1.17.11"
};
