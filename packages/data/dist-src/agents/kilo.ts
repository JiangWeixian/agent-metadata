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
    "name": "Kilo",
    "version": "7.3.54"
  },
  "authMethods": [
    {
      "description": "Run `kilo auth login` in the terminal",
      "id": "kilo-login",
      "name": "Login with Kilo"
    }
  ],
  "commands": [
    {
      "description": "guided AGENTS.md setup",
      "name": "init"
    },
    {
      "description": "Guide for Kilo configuration: config paths, kilo.json fields, commands, agents, skills, permissions, MCPs, providers, TUI settings, plus Agent Manager worktree setup/run scripts, workflows, and state. Use for Kilo config questions, locating loaded config, changing settings, or Agent Manager questions about run/setup scripts, worktree setup/workflows, apply/merge/PR/conflicts, missing sessions/worktrees, and agent-manager.json recovery.",
      "name": "kilo-config"
    },
    {
      "description": "local review (current branch, optional base or instructions)",
      "name": "local-review"
    },
    {
      "description": "local review (uncommitted changes)",
      "name": "local-review-uncommitted"
    },
    {
      "description": "review changes [commit|branch|pr], defaults to uncommitted",
      "name": "review"
    }
  ],
  "configOptions": [
    {
      "category": "model",
      "currentValue": "kilo/stealth/claude-sonnet-4.6",
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
          "name": "Kilo Gateway/AI21: Jamba Large 1.7",
          "value": "kilo/ai21/jamba-large-1.7"
        },
        {
          "name": "Kilo Gateway/Amazon: Nova 2 Lite",
          "value": "kilo/amazon/nova-2-lite-v1"
        },
        {
          "name": "Kilo Gateway/Amazon: Nova Lite 1.0",
          "value": "kilo/amazon/nova-lite-v1"
        },
        {
          "name": "Kilo Gateway/Amazon: Nova Micro 1.0",
          "value": "kilo/amazon/nova-micro-v1"
        },
        {
          "name": "Kilo Gateway/Amazon: Nova Premier 1.0",
          "value": "kilo/amazon/nova-premier-v1"
        },
        {
          "name": "Kilo Gateway/Amazon: Nova Pro 1.0",
          "value": "kilo/amazon/nova-pro-v1"
        },
        {
          "name": "Kilo Gateway/Anthropic Claude Haiku Latest",
          "value": "kilo/~anthropic/claude-haiku-latest"
        },
        {
          "name": "Kilo Gateway/Anthropic Claude Sonnet Latest",
          "value": "kilo/~anthropic/claude-sonnet-latest"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude 3 Haiku",
          "value": "kilo/anthropic/claude-3-haiku"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Haiku 4.5",
          "value": "kilo/anthropic/claude-haiku-4.5"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4 ($$$$)",
          "value": "kilo/anthropic/claude-opus-4"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4.1 ($$$$)",
          "value": "kilo/anthropic/claude-opus-4.1"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4.5",
          "value": "kilo/anthropic/claude-opus-4.5"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4.6",
          "value": "kilo/anthropic/claude-opus-4.6"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4.6 (Fast) ($$$$)",
          "value": "kilo/anthropic/claude-opus-4.6-fast"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4.7",
          "value": "kilo/anthropic/claude-opus-4.7"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4.7 (Fast) ($$$$)",
          "value": "kilo/anthropic/claude-opus-4.7-fast"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4.8",
          "value": "kilo/anthropic/claude-opus-4.8"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4.8 (Fast) ($$$$)",
          "value": "kilo/anthropic/claude-opus-4.8-fast"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus Latest",
          "value": "kilo/~anthropic/claude-opus-latest"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Sonnet 4",
          "value": "kilo/anthropic/claude-sonnet-4"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Sonnet 4.5",
          "value": "kilo/anthropic/claude-sonnet-4.5"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Sonnet 4.6",
          "value": "kilo/anthropic/claude-sonnet-4.6"
        },
        {
          "name": "Kilo Gateway/Arcee AI: Trinity Large Thinking",
          "value": "kilo/arcee-ai/trinity-large-thinking"
        },
        {
          "name": "Kilo Gateway/Arcee AI: Trinity Mini",
          "value": "kilo/arcee-ai/trinity-mini"
        },
        {
          "name": "Kilo Gateway/Arcee AI: Virtuoso Large",
          "value": "kilo/arcee-ai/virtuoso-large"
        },
        {
          "name": "Kilo Gateway/Auto Balanced",
          "value": "kilo/kilo-auto/balanced"
        },
        {
          "name": "Kilo Gateway/Auto Efficient",
          "value": "kilo/kilo-auto/efficient"
        },
        {
          "name": "Kilo Gateway/Auto Free",
          "value": "kilo/kilo-auto/free"
        },
        {
          "name": "Kilo Gateway/Auto Frontier",
          "value": "kilo/kilo-auto/frontier"
        },
        {
          "name": "Kilo Gateway/Auto Small",
          "value": "kilo/kilo-auto/small"
        },
        {
          "name": "Kilo Gateway/ByteDance Seed: Seed 1.6",
          "value": "kilo/bytedance-seed/seed-1.6"
        },
        {
          "name": "Kilo Gateway/ByteDance Seed: Seed 1.6 Flash",
          "value": "kilo/bytedance-seed/seed-1.6-flash"
        },
        {
          "name": "Kilo Gateway/ByteDance Seed: Seed-2.0-Lite",
          "value": "kilo/bytedance-seed/seed-2.0-lite"
        },
        {
          "name": "Kilo Gateway/ByteDance Seed: Seed-2.0-Mini",
          "value": "kilo/bytedance-seed/seed-2.0-mini"
        },
        {
          "name": "Kilo Gateway/Cohere: Command R (08-2024)",
          "value": "kilo/cohere/command-r-08-2024"
        },
        {
          "name": "Kilo Gateway/Cohere: Command R+ (08-2024)",
          "value": "kilo/cohere/command-r-plus-08-2024"
        },
        {
          "name": "Kilo Gateway/Cohere: North Mini Code (free)",
          "value": "kilo/cohere/north-mini-code:free"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V3",
          "value": "kilo/deepseek/deepseek-chat"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V3 0324",
          "value": "kilo/deepseek/deepseek-chat-v3-0324"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V3.1",
          "value": "kilo/deepseek/deepseek-chat-v3.1"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V3.1 Terminus",
          "value": "kilo/deepseek/deepseek-v3.1-terminus"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V3.2",
          "value": "kilo/deepseek/deepseek-v3.2"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V3.2 Exp",
          "value": "kilo/deepseek/deepseek-v3.2-exp"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V4 Flash",
          "value": "kilo/deepseek/deepseek-v4-flash"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V4 Flash (>40% off)",
          "value": "kilo/deepseek/deepseek-v4-flash:discounted"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V4 Pro",
          "value": "kilo/deepseek/deepseek-v4-pro"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V4 Pro (>80% off)",
          "value": "kilo/deepseek/deepseek-v4-pro:discounted"
        },
        {
          "name": "Kilo Gateway/DeepSeek: R1",
          "value": "kilo/deepseek/deepseek-r1"
        },
        {
          "name": "Kilo Gateway/DeepSeek: R1 0528",
          "value": "kilo/deepseek/deepseek-r1-0528"
        },
        {
          "name": "Kilo Gateway/Free Models Router",
          "value": "kilo/openrouter/free"
        },
        {
          "name": "Kilo Gateway/Google Gemini Flash Latest",
          "value": "kilo/~google/gemini-flash-latest"
        },
        {
          "name": "Kilo Gateway/Google Gemini Pro Latest",
          "value": "kilo/~google/gemini-pro-latest"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 2.5 Flash",
          "value": "kilo/google/gemini-2.5-flash"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 2.5 Flash Lite",
          "value": "kilo/google/gemini-2.5-flash-lite"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 2.5 Flash Lite Preview 09-2025",
          "value": "kilo/google/gemini-2.5-flash-lite-preview-09-2025"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 2.5 Pro",
          "value": "kilo/google/gemini-2.5-pro"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 2.5 Pro Preview 05-06",
          "value": "kilo/google/gemini-2.5-pro-preview-05-06"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 2.5 Pro Preview 06-05",
          "value": "kilo/google/gemini-2.5-pro-preview"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 3 Flash Preview",
          "value": "kilo/google/gemini-3-flash-preview"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 3.1 Flash Lite",
          "value": "kilo/google/gemini-3.1-flash-lite"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 3.1 Flash Lite Preview",
          "value": "kilo/google/gemini-3.1-flash-lite-preview"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 3.1 Pro Preview",
          "value": "kilo/google/gemini-3.1-pro-preview"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 3.1 Pro Preview Custom Tools",
          "value": "kilo/google/gemini-3.1-pro-preview-customtools"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 3.5 Flash",
          "value": "kilo/google/gemini-3.5-flash"
        },
        {
          "name": "Kilo Gateway/Google: Gemma 3 12B",
          "value": "kilo/google/gemma-3-12b-it"
        },
        {
          "name": "Kilo Gateway/Google: Gemma 3 27B",
          "value": "kilo/google/gemma-3-27b-it"
        },
        {
          "name": "Kilo Gateway/Google: Gemma 4 26B A4B ",
          "value": "kilo/google/gemma-4-26b-a4b-it"
        },
        {
          "name": "Kilo Gateway/Google: Gemma 4 31B",
          "value": "kilo/google/gemma-4-31b-it"
        },
        {
          "name": "Kilo Gateway/IBM: Granite 4.1 8B",
          "value": "kilo/ibm-granite/granite-4.1-8b"
        },
        {
          "name": "Kilo Gateway/Inception: Mercury 2",
          "value": "kilo/inception/mercury-2"
        },
        {
          "name": "Kilo Gateway/inclusionAI: Ling-2.6-1T",
          "value": "kilo/inclusionai/ling-2.6-1t"
        },
        {
          "name": "Kilo Gateway/inclusionAI: Ling-2.6-flash",
          "value": "kilo/inclusionai/ling-2.6-flash"
        },
        {
          "name": "Kilo Gateway/inclusionAI: Ring-2.6-1T",
          "value": "kilo/inclusionai/ring-2.6-1t"
        },
        {
          "name": "Kilo Gateway/Kwaipilot: KAT-Coder-Pro V2",
          "value": "kilo/kwaipilot/kat-coder-pro-v2"
        },
        {
          "name": "Kilo Gateway/Meta: Llama 3.1 70B Instruct",
          "value": "kilo/meta-llama/llama-3.1-70b-instruct"
        },
        {
          "name": "Kilo Gateway/Meta: Llama 3.1 8B Instruct",
          "value": "kilo/meta-llama/llama-3.1-8b-instruct"
        },
        {
          "name": "Kilo Gateway/Meta: Llama 3.3 70B Instruct",
          "value": "kilo/meta-llama/llama-3.3-70b-instruct"
        },
        {
          "name": "Kilo Gateway/Meta: Llama 4 Maverick",
          "value": "kilo/meta-llama/llama-4-maverick"
        },
        {
          "name": "Kilo Gateway/Meta: Llama 4 Scout",
          "value": "kilo/meta-llama/llama-4-scout"
        },
        {
          "name": "Kilo Gateway/MiniMax: MiniMax M1",
          "value": "kilo/minimax/minimax-m1"
        },
        {
          "name": "Kilo Gateway/MiniMax: MiniMax M2",
          "value": "kilo/minimax/minimax-m2"
        },
        {
          "name": "Kilo Gateway/MiniMax: MiniMax M2.1",
          "value": "kilo/minimax/minimax-m2.1"
        },
        {
          "name": "Kilo Gateway/MiniMax: MiniMax M2.5",
          "value": "kilo/minimax/minimax-m2.5"
        },
        {
          "name": "Kilo Gateway/MiniMax: MiniMax M2.7",
          "value": "kilo/minimax/minimax-m2.7"
        },
        {
          "name": "Kilo Gateway/MiniMax: MiniMax M3",
          "value": "kilo/minimax/minimax-m3"
        },
        {
          "name": "Kilo Gateway/Mistral Large",
          "value": "kilo/mistralai/mistral-large"
        },
        {
          "name": "Kilo Gateway/Mistral Large 2407",
          "value": "kilo/mistralai/mistral-large-2407"
        },
        {
          "name": "Kilo Gateway/Mistral: Codestral 2508",
          "value": "kilo/mistralai/codestral-2508"
        },
        {
          "name": "Kilo Gateway/Mistral: Devstral 2 2512",
          "value": "kilo/mistralai/devstral-2512"
        },
        {
          "name": "Kilo Gateway/Mistral: Ministral 3 14B 2512",
          "value": "kilo/mistralai/ministral-14b-2512"
        },
        {
          "name": "Kilo Gateway/Mistral: Ministral 3 3B 2512",
          "value": "kilo/mistralai/ministral-3b-2512"
        },
        {
          "name": "Kilo Gateway/Mistral: Ministral 3 8B 2512",
          "value": "kilo/mistralai/ministral-8b-2512"
        },
        {
          "name": "Kilo Gateway/Mistral: Mistral Large 3 2512",
          "value": "kilo/mistralai/mistral-large-2512"
        },
        {
          "name": "Kilo Gateway/Mistral: Mistral Medium 3",
          "value": "kilo/mistralai/mistral-medium-3"
        },
        {
          "name": "Kilo Gateway/Mistral: Mistral Medium 3.1",
          "value": "kilo/mistralai/mistral-medium-3.1"
        },
        {
          "name": "Kilo Gateway/Mistral: Mistral Medium 3.5",
          "value": "kilo/mistralai/mistral-medium-3-5"
        },
        {
          "name": "Kilo Gateway/Mistral: Mistral Nemo",
          "value": "kilo/mistralai/mistral-nemo"
        },
        {
          "name": "Kilo Gateway/Mistral: Mistral Small 3.2 24B",
          "value": "kilo/mistralai/mistral-small-3.2-24b-instruct"
        },
        {
          "name": "Kilo Gateway/Mistral: Mistral Small 4",
          "value": "kilo/mistralai/mistral-small-2603"
        },
        {
          "name": "Kilo Gateway/Mistral: Mixtral 8x22B Instruct",
          "value": "kilo/mistralai/mixtral-8x22b-instruct"
        },
        {
          "name": "Kilo Gateway/Mistral: Saba",
          "value": "kilo/mistralai/mistral-saba"
        },
        {
          "name": "Kilo Gateway/Mistral: Voxtral Small 24B 2507",
          "value": "kilo/mistralai/voxtral-small-24b-2507"
        },
        {
          "name": "Kilo Gateway/MoonshotAI Kimi Latest",
          "value": "kilo/~moonshotai/kimi-latest"
        },
        {
          "name": "Kilo Gateway/MoonshotAI: Kimi K2 0711",
          "value": "kilo/moonshotai/kimi-k2"
        },
        {
          "name": "Kilo Gateway/MoonshotAI: Kimi K2 0905",
          "value": "kilo/moonshotai/kimi-k2-0905"
        },
        {
          "name": "Kilo Gateway/MoonshotAI: Kimi K2 Thinking",
          "value": "kilo/moonshotai/kimi-k2-thinking"
        },
        {
          "name": "Kilo Gateway/MoonshotAI: Kimi K2.5",
          "value": "kilo/moonshotai/kimi-k2.5"
        },
        {
          "name": "Kilo Gateway/MoonshotAI: Kimi K2.6",
          "value": "kilo/moonshotai/kimi-k2.6"
        },
        {
          "name": "Kilo Gateway/MoonshotAI: Kimi K2.7 Code",
          "value": "kilo/moonshotai/kimi-k2.7-code"
        },
        {
          "name": "Kilo Gateway/NVIDIA: Llama 3.3 Nemotron Super 49B V1.5",
          "value": "kilo/nvidia/llama-3.3-nemotron-super-49b-v1.5"
        },
        {
          "name": "Kilo Gateway/NVIDIA: Nemotron 3 Nano 30B A3B",
          "value": "kilo/nvidia/nemotron-3-nano-30b-a3b"
        },
        {
          "name": "Kilo Gateway/NVIDIA: Nemotron 3 Nano Omni (free)",
          "value": "kilo/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free"
        },
        {
          "name": "Kilo Gateway/NVIDIA: Nemotron 3 Super",
          "value": "kilo/nvidia/nemotron-3-super-120b-a12b"
        },
        {
          "name": "Kilo Gateway/NVIDIA: Nemotron 3 Super (free)",
          "value": "kilo/nvidia/nemotron-3-super-120b-a12b:free"
        },
        {
          "name": "Kilo Gateway/NVIDIA: Nemotron 3 Ultra",
          "value": "kilo/nvidia/nemotron-3-ultra-550b-a55b"
        },
        {
          "name": "Kilo Gateway/NVIDIA: Nemotron 3 Ultra (free)",
          "value": "kilo/nvidia/nemotron-3-ultra-550b-a55b:free"
        },
        {
          "name": "Kilo Gateway/OpenAI GPT Latest",
          "value": "kilo/~openai/gpt-latest"
        },
        {
          "name": "Kilo Gateway/OpenAI GPT Mini Latest",
          "value": "kilo/~openai/gpt-mini-latest"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT Audio",
          "value": "kilo/openai/gpt-audio"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT Audio Mini",
          "value": "kilo/openai/gpt-audio-mini"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT Chat Latest",
          "value": "kilo/openai/gpt-chat-latest"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-3.5 Turbo",
          "value": "kilo/openai/gpt-3.5-turbo"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-3.5 Turbo (older v0613)",
          "value": "kilo/openai/gpt-3.5-turbo-0613"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-3.5 Turbo 16k",
          "value": "kilo/openai/gpt-3.5-turbo-16k"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4 ($$$$)",
          "value": "kilo/openai/gpt-4"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4 Turbo ($$$$)",
          "value": "kilo/openai/gpt-4-turbo"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4 Turbo Preview ($$$$)",
          "value": "kilo/openai/gpt-4-turbo-preview"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4.1",
          "value": "kilo/openai/gpt-4.1"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4.1 Mini",
          "value": "kilo/openai/gpt-4.1-mini"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4.1 Nano",
          "value": "kilo/openai/gpt-4.1-nano"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4o",
          "value": "kilo/openai/gpt-4o"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4o (2024-05-13)",
          "value": "kilo/openai/gpt-4o-2024-05-13"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4o (2024-08-06)",
          "value": "kilo/openai/gpt-4o-2024-08-06"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4o (2024-11-20)",
          "value": "kilo/openai/gpt-4o-2024-11-20"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4o-mini",
          "value": "kilo/openai/gpt-4o-mini"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4o-mini (2024-07-18)",
          "value": "kilo/openai/gpt-4o-mini-2024-07-18"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5",
          "value": "kilo/openai/gpt-5"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5 Codex",
          "value": "kilo/openai/gpt-5-codex"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5 Mini",
          "value": "kilo/openai/gpt-5-mini"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5 Nano",
          "value": "kilo/openai/gpt-5-nano"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5 Pro ($$$$)",
          "value": "kilo/openai/gpt-5-pro"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.1",
          "value": "kilo/openai/gpt-5.1"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.1 Chat",
          "value": "kilo/openai/gpt-5.1-chat"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.1-Codex",
          "value": "kilo/openai/gpt-5.1-codex"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.1-Codex-Max",
          "value": "kilo/openai/gpt-5.1-codex-max"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.1-Codex-Mini",
          "value": "kilo/openai/gpt-5.1-codex-mini"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.2",
          "value": "kilo/openai/gpt-5.2"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.2 Chat",
          "value": "kilo/openai/gpt-5.2-chat"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.2 Pro ($$$$)",
          "value": "kilo/openai/gpt-5.2-pro"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.2-Codex",
          "value": "kilo/openai/gpt-5.2-codex"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.3 Chat",
          "value": "kilo/openai/gpt-5.3-chat"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.3-Codex",
          "value": "kilo/openai/gpt-5.3-codex"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.4",
          "value": "kilo/openai/gpt-5.4"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.4 Mini",
          "value": "kilo/openai/gpt-5.4-mini"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.4 Nano",
          "value": "kilo/openai/gpt-5.4-nano"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.4 Pro ($$$$)",
          "value": "kilo/openai/gpt-5.4-pro"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.5",
          "value": "kilo/openai/gpt-5.5"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.5 Pro ($$$$)",
          "value": "kilo/openai/gpt-5.5-pro"
        },
        {
          "name": "Kilo Gateway/OpenAI: gpt-oss-120b",
          "value": "kilo/openai/gpt-oss-120b"
        },
        {
          "name": "Kilo Gateway/OpenAI: gpt-oss-20b",
          "value": "kilo/openai/gpt-oss-20b"
        },
        {
          "name": "Kilo Gateway/OpenAI: gpt-oss-safeguard-20b",
          "value": "kilo/openai/gpt-oss-safeguard-20b"
        },
        {
          "name": "Kilo Gateway/OpenAI: o1 ($$$$)",
          "value": "kilo/openai/o1"
        },
        {
          "name": "Kilo Gateway/OpenAI: o3",
          "value": "kilo/openai/o3"
        },
        {
          "name": "Kilo Gateway/OpenAI: o3 Deep Research ($$$$)",
          "value": "kilo/openai/o3-deep-research"
        },
        {
          "name": "Kilo Gateway/OpenAI: o3 Mini",
          "value": "kilo/openai/o3-mini"
        },
        {
          "name": "Kilo Gateway/OpenAI: o3 Mini High",
          "value": "kilo/openai/o3-mini-high"
        },
        {
          "name": "Kilo Gateway/OpenAI: o3 Pro ($$$$)",
          "value": "kilo/openai/o3-pro"
        },
        {
          "name": "Kilo Gateway/OpenAI: o4 Mini",
          "value": "kilo/openai/o4-mini"
        },
        {
          "name": "Kilo Gateway/OpenAI: o4 Mini Deep Research",
          "value": "kilo/openai/o4-mini-deep-research"
        },
        {
          "name": "Kilo Gateway/OpenAI: o4 Mini High",
          "value": "kilo/openai/o4-mini-high"
        },
        {
          "name": "Kilo Gateway/Owl Alpha",
          "value": "kilo/openrouter/owl-alpha"
        },
        {
          "name": "Kilo Gateway/Poolside: Laguna M.1",
          "value": "kilo/poolside/laguna-m.1"
        },
        {
          "name": "Kilo Gateway/Poolside: Laguna M.1 (free)",
          "value": "kilo/poolside/laguna-m.1:free"
        },
        {
          "name": "Kilo Gateway/Poolside: Laguna XS.2",
          "value": "kilo/poolside/laguna-xs.2"
        },
        {
          "name": "Kilo Gateway/Poolside: Laguna XS.2 (free)",
          "value": "kilo/poolside/laguna-xs.2:free"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen Plus 0728",
          "value": "kilo/qwen/qwen-plus-2025-07-28"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen Plus 0728 (thinking)",
          "value": "kilo/qwen/qwen-plus-2025-07-28:thinking"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen-Plus",
          "value": "kilo/qwen/qwen-plus"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen2.5 7B Instruct",
          "value": "kilo/qwen/qwen-2.5-7b-instruct"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 14B",
          "value": "kilo/qwen/qwen3-14b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 235B A22B",
          "value": "kilo/qwen/qwen3-235b-a22b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 235B A22B Instruct 2507",
          "value": "kilo/qwen/qwen3-235b-a22b-2507"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 235B A22B Thinking 2507",
          "value": "kilo/qwen/qwen3-235b-a22b-thinking-2507"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 30B A3B",
          "value": "kilo/qwen/qwen3-30b-a3b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 30B A3B Instruct 2507",
          "value": "kilo/qwen/qwen3-30b-a3b-instruct-2507"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 30B A3B Thinking 2507",
          "value": "kilo/qwen/qwen3-30b-a3b-thinking-2507"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 32B",
          "value": "kilo/qwen/qwen3-32b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 8B",
          "value": "kilo/qwen/qwen3-8b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Coder 30B A3B Instruct",
          "value": "kilo/qwen/qwen3-coder-30b-a3b-instruct"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Coder 480B A35B",
          "value": "kilo/qwen/qwen3-coder"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Coder Flash",
          "value": "kilo/qwen/qwen3-coder-flash"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Coder Next",
          "value": "kilo/qwen/qwen3-coder-next"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Coder Plus",
          "value": "kilo/qwen/qwen3-coder-plus"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Max",
          "value": "kilo/qwen/qwen3-max"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Max Thinking",
          "value": "kilo/qwen/qwen3-max-thinking"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Next 80B A3B Instruct",
          "value": "kilo/qwen/qwen3-next-80b-a3b-instruct"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Next 80B A3B Thinking",
          "value": "kilo/qwen/qwen3-next-80b-a3b-thinking"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 VL 235B A22B Instruct",
          "value": "kilo/qwen/qwen3-vl-235b-a22b-instruct"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 VL 235B A22B Thinking",
          "value": "kilo/qwen/qwen3-vl-235b-a22b-thinking"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 VL 30B A3B Instruct",
          "value": "kilo/qwen/qwen3-vl-30b-a3b-instruct"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 VL 30B A3B Thinking",
          "value": "kilo/qwen/qwen3-vl-30b-a3b-thinking"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 VL 32B Instruct",
          "value": "kilo/qwen/qwen3-vl-32b-instruct"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 VL 8B Instruct",
          "value": "kilo/qwen/qwen3-vl-8b-instruct"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 VL 8B Thinking",
          "value": "kilo/qwen/qwen3-vl-8b-thinking"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.5 397B A17B",
          "value": "kilo/qwen/qwen3.5-397b-a17b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.5 Plus 2026-02-15",
          "value": "kilo/qwen/qwen3.5-plus-02-15"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.5 Plus 2026-04-20",
          "value": "kilo/qwen/qwen3.5-plus-20260420"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.5-122B-A10B",
          "value": "kilo/qwen/qwen3.5-122b-a10b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.5-27B",
          "value": "kilo/qwen/qwen3.5-27b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.5-35B-A3B",
          "value": "kilo/qwen/qwen3.5-35b-a3b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.5-9B",
          "value": "kilo/qwen/qwen3.5-9b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.5-Flash",
          "value": "kilo/qwen/qwen3.5-flash-02-23"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.6 27B",
          "value": "kilo/qwen/qwen3.6-27b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.6 35B A3B",
          "value": "kilo/qwen/qwen3.6-35b-a3b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.6 Flash",
          "value": "kilo/qwen/qwen3.6-flash"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.6 Max Preview",
          "value": "kilo/qwen/qwen3.6-max-preview"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.6 Plus",
          "value": "kilo/qwen/qwen3.6-plus"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.7 Max (50% off)",
          "value": "kilo/qwen/qwen3.7-max"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.7 Plus (20% off)",
          "value": "kilo/qwen/qwen3.7-plus"
        },
        {
          "name": "Kilo Gateway/Qwen2.5 72B Instruct",
          "value": "kilo/qwen/qwen-2.5-72b-instruct"
        },
        {
          "name": "Kilo Gateway/Reka Edge",
          "value": "kilo/rekaai/reka-edge"
        },
        {
          "name": "Kilo Gateway/Relace: Relace Search",
          "value": "kilo/relace/relace-search"
        },
        {
          "name": "Kilo Gateway/Sao10K: Llama 3.1 Euryale 70B v2.2",
          "value": "kilo/sao10k/l3.1-euryale-70b"
        },
        {
          "name": "Kilo Gateway/Stealth: Claude Opus 4.6 (20% off)",
          "value": "kilo/stealth/claude-opus-4.6"
        },
        {
          "name": "Kilo Gateway/Stealth: Claude Opus 4.7 (20% off)",
          "value": "kilo/stealth/claude-opus-4.7"
        },
        {
          "name": "Kilo Gateway/Stealth: Claude Opus 4.8 (20% off)",
          "value": "kilo/stealth/claude-opus-4.8"
        },
        {
          "name": "Kilo Gateway/Stealth: Claude Sonnet 4.6 (20% off)",
          "value": "kilo/stealth/claude-sonnet-4.6"
        },
        {
          "name": "Kilo Gateway/Stealth: Qwen3.6 Plus (50% off)",
          "value": "kilo/stealth/qwen3.6-plus"
        },
        {
          "name": "Kilo Gateway/StepFun: Step 3.5 Flash (retires Jun 29)",
          "value": "kilo/stepfun/step-3.5-flash"
        },
        {
          "name": "Kilo Gateway/StepFun: Step 3.7 Flash",
          "value": "kilo/stepfun/step-3.7-flash"
        },
        {
          "name": "Kilo Gateway/StepFun: Step 3.7 Flash (free)",
          "value": "kilo/stepfun/step-3.7-flash:free"
        },
        {
          "name": "Kilo Gateway/Tencent: Hy3 preview",
          "value": "kilo/tencent/hy3-preview"
        },
        {
          "name": "Kilo Gateway/TheDrummer: UnslopNemo 12B",
          "value": "kilo/thedrummer/unslopnemo-12b"
        },
        {
          "name": "Kilo Gateway/Upstage: Solar Pro 3",
          "value": "kilo/upstage/solar-pro-3"
        },
        {
          "name": "Kilo Gateway/xAI: Grok 4.20",
          "value": "kilo/x-ai/grok-4.20"
        },
        {
          "name": "Kilo Gateway/xAI: Grok 4.3",
          "value": "kilo/x-ai/grok-4.3"
        },
        {
          "name": "Kilo Gateway/xAI: Grok Build 0.1",
          "value": "kilo/x-ai/grok-build-0.1"
        },
        {
          "name": "Kilo Gateway/Xiaomi: MiMo-V2.5",
          "value": "kilo/xiaomi/mimo-v2.5"
        },
        {
          "name": "Kilo Gateway/Xiaomi: MiMo-V2.5-Pro",
          "value": "kilo/xiaomi/mimo-v2.5-pro"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 4.5",
          "value": "kilo/z-ai/glm-4.5"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 4.5 Air",
          "value": "kilo/z-ai/glm-4.5-air"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 4.5V",
          "value": "kilo/z-ai/glm-4.5v"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 4.6",
          "value": "kilo/z-ai/glm-4.6"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 4.6V",
          "value": "kilo/z-ai/glm-4.6v"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 4.7",
          "value": "kilo/z-ai/glm-4.7"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 4.7 Flash",
          "value": "kilo/z-ai/glm-4.7-flash"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 5",
          "value": "kilo/z-ai/glm-5"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 5 Turbo",
          "value": "kilo/z-ai/glm-5-turbo"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 5.1",
          "value": "kilo/z-ai/glm-5.1"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 5.2",
          "value": "kilo/z-ai/glm-5.2"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 5V Turbo",
          "value": "kilo/z-ai/glm-5v-turbo"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "none",
      "description": "Available effort levels for this model",
      "id": "effort",
      "name": "Effort",
      "options": [
        {
          "name": "None",
          "value": "none"
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
    },
    {
      "category": "mode",
      "currentValue": "code",
      "id": "mode",
      "name": "Session Mode",
      "options": [
        {
          "description": "The default agent. Executes tools based on configured permissions.",
          "name": "code",
          "value": "code"
        },
        {
          "description": "Get answers and explanations without making changes to the codebase.",
          "name": "ask",
          "value": "ask"
        },
        {
          "description": "Diagnose and fix software issues with systematic debugging methodology.",
          "name": "debug",
          "value": "debug"
        },
        {
          "description": "Coordinate complex tasks by delegating to specialized agents in parallel.",
          "name": "orchestrator",
          "value": "orchestrator"
        },
        {
          "description": "Plan mode. Can only edit plan files; all other filesystem mutations are denied.",
          "name": "plan",
          "value": "plan"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": null,
  "id": "kilo",
  "modes": [],
  "name": "Kilo",
  "protocolVersion": 1,
  "version": "7.3.54"
};
