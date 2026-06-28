import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "loadSession": true,
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": false,
      "image": true
    }
  },
  "agentInfo": {
    "name": "cline",
    "version": "3.0.31"
  },
  "authMethods": [
    {
      "id": "cline",
      "name": "Sign in with Cline"
    },
    {
      "id": "openai-codex",
      "name": "Sign in with ChatGPT Subscription"
    }
  ],
  "commands": [],
  "configOptions": [
    {
      "category": "model",
      "currentValue": "cline",
      "description": "The authentication provider to use",
      "id": "provider",
      "name": "Provider",
      "options": [
        {
          "name": "Cline",
          "value": "cline"
        },
        {
          "name": "OpenAI ChatGPT Subscription",
          "value": "openai-codex"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "anthropic/claude-sonnet-4.6",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "name": "Fugu Ultra",
          "value": "sakana/fugu-ultra"
        },
        {
          "name": "Nano Banana Pro (Gemini 3 Pro Image)",
          "value": "google/gemini-3-pro-image"
        },
        {
          "name": "North Mini Code (free)",
          "value": "cohere/north-mini-code:free"
        },
        {
          "name": "Kimi K2.7 Code",
          "value": "moonshotai/kimi-k2.7-code"
        },
        {
          "name": "Claude Fable Latest",
          "value": "~anthropic/claude-fable-latest"
        },
        {
          "name": "Nemotron 3 Ultra 550B A55B",
          "value": "nvidia/nemotron-3-ultra-550b-a55b"
        },
        {
          "name": "Nemotron 3 Ultra (free)",
          "value": "nvidia/nemotron-3-ultra-550b-a55b:free"
        },
        {
          "name": "Qwen3.7 Plus",
          "value": "qwen/qwen3.7-plus"
        },
        {
          "name": "MiniMax-M3",
          "value": "minimax/minimax-m3"
        },
        {
          "name": "Step 3.7 Flash",
          "value": "stepfun/step-3.7-flash"
        },
        {
          "name": "Claude Opus 4.8",
          "value": "anthropic/claude-opus-4.8"
        },
        {
          "name": "Claude Opus 4.8 (Fast)",
          "value": "anthropic/claude-opus-4.8-fast"
        },
        {
          "name": "Qwen3.7 Max",
          "value": "qwen/qwen3.7-max"
        },
        {
          "name": "Gemini 3.5 Flash",
          "value": "google/gemini-3.5-flash"
        },
        {
          "name": "Claude Opus 4.7 (Fast)",
          "value": "anthropic/claude-opus-4.7-fast"
        },
        {
          "name": "Ring-2.6-1T",
          "value": "inclusionai/ring-2.6-1t"
        },
        {
          "name": "Gemini 3.1 Flash Lite",
          "value": "google/gemini-3.1-flash-lite"
        },
        {
          "name": "GPT Chat Latest",
          "value": "openai/gpt-chat-latest"
        },
        {
          "name": "Granite 4.1 8B",
          "value": "ibm-granite/granite-4.1-8b"
        },
        {
          "name": "Mistral Medium 3.5",
          "value": "mistralai/mistral-medium-3-5"
        },
        {
          "name": "Nemotron 3 Nano Omni (free)",
          "value": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free"
        },
        {
          "name": "Owl Alpha",
          "value": "openrouter/owl-alpha"
        },
        {
          "name": "Laguna M.1",
          "value": "poolside/laguna-m.1"
        },
        {
          "name": "Laguna M.1 (free)",
          "value": "poolside/laguna-m.1:free"
        },
        {
          "name": "Laguna XS.2",
          "value": "poolside/laguna-xs.2"
        },
        {
          "name": "Laguna XS.2 (free)",
          "value": "poolside/laguna-xs.2:free"
        },
        {
          "name": "Anthropic Claude Haiku Latest",
          "value": "~anthropic/claude-haiku-latest"
        },
        {
          "name": "Anthropic Claude Sonnet Latest",
          "value": "~anthropic/claude-sonnet-latest"
        },
        {
          "name": "Google Gemini Flash Latest",
          "value": "~google/gemini-flash-latest"
        },
        {
          "name": "Google Gemini Pro Latest",
          "value": "~google/gemini-pro-latest"
        },
        {
          "name": "MoonshotAI Kimi Latest",
          "value": "~moonshotai/kimi-latest"
        },
        {
          "name": "OpenAI GPT Latest",
          "value": "~openai/gpt-latest"
        },
        {
          "name": "OpenAI GPT Mini Latest",
          "value": "~openai/gpt-mini-latest"
        },
        {
          "name": "Qwen3.5 Plus 2026-04-20",
          "value": "qwen/qwen3.5-plus-20260420"
        },
        {
          "name": "Qwen3.6 Flash",
          "value": "qwen/qwen3.6-flash"
        },
        {
          "name": "DeepSeek V4 Flash",
          "value": "deepseek/deepseek-v4-flash"
        },
        {
          "name": "DeepSeek V4 Pro",
          "value": "deepseek/deepseek-v4-pro"
        },
        {
          "name": "Ling-2.6-1T",
          "value": "inclusionai/ling-2.6-1t"
        },
        {
          "name": "GPT-5.5",
          "value": "openai/gpt-5.5"
        },
        {
          "name": "GPT-5.5 Pro",
          "value": "openai/gpt-5.5-pro"
        },
        {
          "name": "Qwen3.6 27B",
          "value": "qwen/qwen3.6-27b"
        },
        {
          "name": "MiMo-V2.5",
          "value": "xiaomi/mimo-v2.5"
        },
        {
          "name": "MiMo-V2.5-Pro",
          "value": "xiaomi/mimo-v2.5-pro"
        },
        {
          "name": "Claude Opus Latest",
          "value": "~anthropic/claude-opus-latest"
        },
        {
          "name": "Ling-2.6-flash",
          "value": "inclusionai/ling-2.6-flash"
        },
        {
          "name": "Kimi K2.6",
          "value": "moonshotai/kimi-k2.6"
        },
        {
          "name": "Qwen3.6 Max Preview",
          "value": "qwen/qwen3.6-max-preview"
        },
        {
          "name": "Hy3 preview",
          "value": "tencent/hy3-preview"
        },
        {
          "name": "Qwen3.6 35B-A3B",
          "value": "qwen/qwen3.6-35b-a3b"
        },
        {
          "name": "Grok 4.3",
          "value": "x-ai/grok-4.3"
        },
        {
          "name": "Claude Opus 4.7",
          "value": "anthropic/claude-opus-4.7"
        },
        {
          "name": "Grok Build 0.1",
          "value": "x-ai/grok-build-0.1"
        },
        {
          "name": "Claude Opus 4.6 (Fast)",
          "value": "anthropic/claude-opus-4.6-fast"
        },
        {
          "name": "Gemma 4 26B A4B IT",
          "value": "google/gemma-4-26b-a4b-it"
        },
        {
          "name": "Gemma 4 26B A4B  (free)",
          "value": "google/gemma-4-26b-a4b-it:free"
        },
        {
          "name": "Gemma 4 31B IT",
          "value": "google/gemma-4-31b-it"
        },
        {
          "name": "Gemma 4 31B (free)",
          "value": "google/gemma-4-31b-it:free"
        },
        {
          "name": "Qwen3.6 Plus",
          "value": "qwen/qwen3.6-plus"
        },
        {
          "name": "Trinity Large Thinking",
          "value": "arcee-ai/trinity-large-thinking"
        },
        {
          "name": "Grok 4.20",
          "value": "x-ai/grok-4.20"
        },
        {
          "name": "KAT-Coder-Pro V2",
          "value": "kwaipilot/kat-coder-pro-v2"
        },
        {
          "name": "Reka Edge",
          "value": "rekaai/reka-edge"
        },
        {
          "name": "MiniMax-M2.7",
          "value": "minimax/minimax-m2.7"
        },
        {
          "name": "GPT-5.4 mini",
          "value": "openai/gpt-5.4-mini"
        },
        {
          "name": "GPT-5.4 nano",
          "value": "openai/gpt-5.4-nano"
        },
        {
          "name": "Mistral Small 4",
          "value": "mistralai/mistral-small-2603"
        },
        {
          "name": "Nemotron 3 Super 120B A12B",
          "value": "nvidia/nemotron-3-super-120b-a12b"
        },
        {
          "name": "Nemotron 3 Super (free)",
          "value": "nvidia/nemotron-3-super-120b-a12b:free"
        },
        {
          "name": "Seed-2.0-Lite",
          "value": "bytedance-seed/seed-2.0-lite"
        },
        {
          "name": "GPT-5.4",
          "value": "openai/gpt-5.4"
        },
        {
          "name": "GPT-5.4 Pro",
          "value": "openai/gpt-5.4-pro"
        },
        {
          "name": "Mercury 2",
          "value": "inception/mercury-2"
        },
        {
          "name": "Gemini 3.1 Flash Lite Preview",
          "value": "google/gemini-3.1-flash-lite-preview"
        },
        {
          "name": "GPT-5.3 Chat",
          "value": "openai/gpt-5.3-chat"
        },
        {
          "name": "Seed-2.0-Mini",
          "value": "bytedance-seed/seed-2.0-mini"
        },
        {
          "name": "Qwen3.5-Flash",
          "value": "qwen/qwen3.5-flash-02-23"
        },
        {
          "name": "Qwen3.5 122B-A10B",
          "value": "qwen/qwen3.5-122b-a10b"
        },
        {
          "name": "Qwen3.5 27B",
          "value": "qwen/qwen3.5-27b"
        },
        {
          "name": "Qwen3.5 35B-A3B",
          "value": "qwen/qwen3.5-35b-a3b"
        },
        {
          "name": "Qwen3.5 9B",
          "value": "qwen/qwen3.5-9b"
        },
        {
          "name": "Gemini 3.1 Pro Preview",
          "value": "google/gemini-3.1-pro-preview"
        },
        {
          "name": "Gemini 3.1 Pro Preview Custom Tools",
          "value": "google/gemini-3.1-pro-preview-customtools"
        },
        {
          "name": "Claude Sonnet 4.6",
          "value": "anthropic/claude-sonnet-4.6"
        },
        {
          "name": "Qwen3.5 Plus 2026-02-15",
          "value": "qwen/qwen3.5-plus-02-15"
        },
        {
          "name": "Qwen3.5 397B-A17B",
          "value": "qwen/qwen3.5-397b-a17b"
        },
        {
          "name": "MiniMax-M2.5",
          "value": "minimax/minimax-m2.5"
        },
        {
          "name": "Qwen3 Max Thinking",
          "value": "qwen/qwen3-max-thinking"
        },
        {
          "name": "Claude Opus 4.6",
          "value": "anthropic/claude-opus-4.6"
        },
        {
          "name": "GPT-5.3 Codex",
          "value": "openai/gpt-5.3-codex"
        },
        {
          "name": "Qwen3 Coder Next",
          "value": "qwen/qwen3-coder-next"
        },
        {
          "name": "Free Models Router",
          "value": "openrouter/free"
        },
        {
          "name": "Step 3.5 Flash",
          "value": "stepfun/step-3.5-flash"
        },
        {
          "name": "Solar Pro 3",
          "value": "upstage/solar-pro-3"
        },
        {
          "name": "LFM2.5-1.2B-Thinking (free)",
          "value": "liquid/lfm-2.5-1.2b-thinking:free"
        },
        {
          "name": "GPT Audio",
          "value": "openai/gpt-audio"
        },
        {
          "name": "GPT Audio Mini",
          "value": "openai/gpt-audio-mini"
        },
        {
          "name": "Kimi K2.5",
          "value": "moonshotai/kimi-k2.5"
        },
        {
          "name": "Seed 1.6",
          "value": "bytedance-seed/seed-1.6"
        },
        {
          "name": "Seed 1.6 Flash",
          "value": "bytedance-seed/seed-1.6-flash"
        },
        {
          "name": "MiniMax-M2.1",
          "value": "minimax/minimax-m2.1"
        },
        {
          "name": "Gemini 3 Flash Preview",
          "value": "google/gemini-3-flash-preview"
        },
        {
          "name": "Nemotron 3 Nano 30B A3B",
          "value": "nvidia/nemotron-3-nano-30b-a3b"
        },
        {
          "name": "Nemotron 3 Nano 30B A3B (free)",
          "value": "nvidia/nemotron-3-nano-30b-a3b:free"
        },
        {
          "name": "GPT-5.2",
          "value": "openai/gpt-5.2"
        },
        {
          "name": "GPT-5.2 Codex",
          "value": "openai/gpt-5.2-codex"
        },
        {
          "name": "GPT-5.2 Pro",
          "value": "openai/gpt-5.2-pro"
        },
        {
          "name": "GPT-5.2 Chat",
          "value": "openai/gpt-5.2-chat"
        },
        {
          "name": "Relace Search",
          "value": "relace/relace-search"
        },
        {
          "name": "Nova 2 Lite",
          "value": "amazon/nova-2-lite-v1"
        },
        {
          "name": "Ministral 3 14B 2512",
          "value": "mistralai/ministral-14b-2512"
        },
        {
          "name": "Ministral 3 3B 2512",
          "value": "mistralai/ministral-3b-2512"
        },
        {
          "name": "Ministral 3 8B 2512",
          "value": "mistralai/ministral-8b-2512"
        },
        {
          "name": "Trinity Mini",
          "value": "arcee-ai/trinity-mini"
        },
        {
          "name": "DeepSeek Chat",
          "value": "deepseek/deepseek-chat"
        },
        {
          "name": "DeepSeek V3.2",
          "value": "deepseek/deepseek-v3.2"
        },
        {
          "name": "Claude Opus 4.5 (latest)",
          "value": "anthropic/claude-opus-4.5"
        },
        {
          "name": "GPT-5.1",
          "value": "openai/gpt-5.1"
        },
        {
          "name": "GPT-5.1 Chat",
          "value": "openai/gpt-5.1-chat"
        },
        {
          "name": "GPT-5.1 Codex",
          "value": "openai/gpt-5.1-codex"
        },
        {
          "name": "GPT-5.1 Codex Max",
          "value": "openai/gpt-5.1-codex-max"
        },
        {
          "name": "GPT-5.1 Codex mini",
          "value": "openai/gpt-5.1-codex-mini"
        },
        {
          "name": "Kimi K2 Thinking",
          "value": "moonshotai/kimi-k2-thinking"
        },
        {
          "name": "Nova Premier 1.0",
          "value": "amazon/nova-premier-v1"
        },
        {
          "name": "Voxtral Small 24B 2507",
          "value": "mistralai/voxtral-small-24b-2507"
        },
        {
          "name": "gpt-oss-safeguard-20b",
          "value": "openai/gpt-oss-safeguard-20b"
        },
        {
          "name": "Nemotron Nano 12B 2 VL (free)",
          "value": "nvidia/nemotron-nano-12b-v2-vl:free"
        },
        {
          "name": "MiniMax-M2",
          "value": "minimax/minimax-m2"
        },
        {
          "name": "Qwen3 VL 32B Instruct",
          "value": "qwen/qwen3-vl-32b-instruct"
        },
        {
          "name": "Claude Haiku 4.5 (latest)",
          "value": "anthropic/claude-haiku-4.5"
        },
        {
          "name": "Qwen3 VL 8B Instruct",
          "value": "qwen/qwen3-vl-8b-instruct"
        },
        {
          "name": "Qwen3 VL 8B Thinking",
          "value": "qwen/qwen3-vl-8b-thinking"
        },
        {
          "name": "GPT-5 Pro",
          "value": "openai/gpt-5-pro"
        },
        {
          "name": "Qwen3 VL 30B A3B Instruct",
          "value": "qwen/qwen3-vl-30b-a3b-instruct"
        },
        {
          "name": "Qwen3 VL 30B A3B Thinking",
          "value": "qwen/qwen3-vl-30b-a3b-thinking"
        },
        {
          "name": "Claude Sonnet 4.5 (latest)",
          "value": "anthropic/claude-sonnet-4.5"
        },
        {
          "name": "DeepSeek V3.2 Exp",
          "value": "deepseek/deepseek-v3.2-exp"
        },
        {
          "name": "Gemini 2.5 Flash Lite Preview 09-2025",
          "value": "google/gemini-2.5-flash-lite-preview-09-2025"
        },
        {
          "name": "Qwen3 Max",
          "value": "qwen/qwen3-max"
        },
        {
          "name": "Qwen3 VL 235B A22B Instruct",
          "value": "qwen/qwen3-vl-235b-a22b-instruct"
        },
        {
          "name": "Qwen3 VL 235B A22B Thinking",
          "value": "qwen/qwen3-vl-235b-a22b-thinking"
        },
        {
          "name": "DeepSeek V3.1 Terminus",
          "value": "deepseek/deepseek-v3.1-terminus"
        },
        {
          "name": "GPT-5-Codex",
          "value": "openai/gpt-5-codex"
        },
        {
          "name": "Qwen Plus 0728",
          "value": "qwen/qwen-plus-2025-07-28"
        },
        {
          "name": "Qwen Plus 0728 (thinking)",
          "value": "qwen/qwen-plus-2025-07-28:thinking"
        },
        {
          "name": "Kimi K2 0905",
          "value": "moonshotai/kimi-k2-0905"
        },
        {
          "name": "Qwen3-Next 80B-A3B Instruct",
          "value": "qwen/qwen3-next-80b-a3b-instruct"
        },
        {
          "name": "Qwen3 Next 80B A3B Instruct (free)",
          "value": "qwen/qwen3-next-80b-a3b-instruct:free"
        },
        {
          "name": "Qwen3-Next 80B-A3B (Thinking)",
          "value": "qwen/qwen3-next-80b-a3b-thinking"
        },
        {
          "name": "Qwen3 30B A3B Thinking 2507",
          "value": "qwen/qwen3-30b-a3b-thinking-2507"
        },
        {
          "name": "DeepSeek V3.1",
          "value": "deepseek/deepseek-chat-v3.1"
        },
        {
          "name": "Nemotron Nano 9B V2 (free)",
          "value": "nvidia/nemotron-nano-9b-v2:free"
        },
        {
          "name": "Mistral Medium 3.1",
          "value": "mistralai/mistral-medium-3.1"
        },
        {
          "name": "Jamba Large 1.7",
          "value": "ai21/jamba-large-1.7"
        },
        {
          "name": "GPT-5",
          "value": "openai/gpt-5"
        },
        {
          "name": "GPT-5 Mini",
          "value": "openai/gpt-5-mini"
        },
        {
          "name": "GPT-5 Nano",
          "value": "openai/gpt-5-nano"
        },
        {
          "name": "Claude Opus 4.1 (latest)",
          "value": "anthropic/claude-opus-4.1"
        },
        {
          "name": "gpt-oss-120b",
          "value": "openai/gpt-oss-120b"
        },
        {
          "name": "gpt-oss-120b (free)",
          "value": "openai/gpt-oss-120b:free"
        },
        {
          "name": "gpt-oss-20b",
          "value": "openai/gpt-oss-20b"
        },
        {
          "name": "gpt-oss-20b (free)",
          "value": "openai/gpt-oss-20b:free"
        },
        {
          "name": "Codestral 2508",
          "value": "mistralai/codestral-2508"
        },
        {
          "name": "Qwen3 30B A3B Instruct 2507",
          "value": "qwen/qwen3-30b-a3b-instruct-2507"
        },
        {
          "name": "Qwen3 Coder Flash",
          "value": "qwen/qwen3-coder-flash"
        },
        {
          "name": "Llama 3.3 Nemotron Super 49B v1.5",
          "value": "nvidia/llama-3.3-nemotron-super-49b-v1.5"
        },
        {
          "name": "Qwen3 235B A22B Thinking 2507",
          "value": "qwen/qwen3-235b-a22b-thinking-2507"
        },
        {
          "name": "Qwen3 Coder 480B A35B",
          "value": "qwen/qwen3-coder"
        },
        {
          "name": "Qwen3 Coder Plus",
          "value": "qwen/qwen3-coder-plus"
        },
        {
          "name": "Qwen3 Coder 480B A35B (free)",
          "value": "qwen/qwen3-coder:free"
        },
        {
          "name": "Qwen3 235B A22B Instruct 2507",
          "value": "qwen/qwen3-235b-a22b-2507"
        },
        {
          "name": "Kimi K2 0711",
          "value": "moonshotai/kimi-k2"
        },
        {
          "name": "Mistral Small 3.2 24B",
          "value": "mistralai/mistral-small-3.2-24b-instruct"
        },
        {
          "name": "Gemini 2.5 Flash",
          "value": "google/gemini-2.5-flash"
        },
        {
          "name": "Gemini 2.5 Flash-Lite",
          "value": "google/gemini-2.5-flash-lite"
        },
        {
          "name": "Gemini 2.5 Pro",
          "value": "google/gemini-2.5-pro"
        },
        {
          "name": "MiniMax M1",
          "value": "minimax/minimax-m1"
        },
        {
          "name": "o3-pro",
          "value": "openai/o3-pro"
        },
        {
          "name": "Gemini 2.5 Pro Preview 06-05",
          "value": "google/gemini-2.5-pro-preview"
        },
        {
          "name": "R1 0528",
          "value": "deepseek/deepseek-r1-0528"
        },
        {
          "name": "Claude Opus 4",
          "value": "anthropic/claude-opus-4"
        },
        {
          "name": "Claude Sonnet 4",
          "value": "anthropic/claude-sonnet-4"
        },
        {
          "name": "Gemini 2.5 Pro Preview 05-06",
          "value": "google/gemini-2.5-pro-preview-05-06"
        },
        {
          "name": "Mistral Medium 3",
          "value": "mistralai/mistral-medium-3"
        },
        {
          "name": "Virtuoso Large",
          "value": "arcee-ai/virtuoso-large"
        },
        {
          "name": "Qwen3 14B",
          "value": "qwen/qwen3-14b"
        },
        {
          "name": "Qwen3 30B A3B",
          "value": "qwen/qwen3-30b-a3b"
        },
        {
          "name": "Qwen3 8B",
          "value": "qwen/qwen3-8b"
        },
        {
          "name": "o3",
          "value": "openai/o3"
        },
        {
          "name": "o4-mini",
          "value": "openai/o4-mini"
        },
        {
          "name": "o4 Mini High",
          "value": "openai/o4-mini-high"
        },
        {
          "name": "GPT-4.1",
          "value": "openai/gpt-4.1"
        },
        {
          "name": "GPT-4.1 mini",
          "value": "openai/gpt-4.1-mini"
        },
        {
          "name": "GPT-4.1 nano",
          "value": "openai/gpt-4.1-nano"
        },
        {
          "name": "Llama 4 Maverick",
          "value": "meta-llama/llama-4-maverick"
        },
        {
          "name": "Llama 4 Scout",
          "value": "meta-llama/llama-4-scout"
        },
        {
          "name": "Qwen3 235B-A22B",
          "value": "qwen/qwen3-235b-a22b"
        },
        {
          "name": "Qwen3 32B",
          "value": "qwen/qwen3-32b"
        },
        {
          "name": "Qwen3-Coder 30B-A3B Instruct",
          "value": "qwen/qwen3-coder-30b-a3b-instruct"
        },
        {
          "name": "DeepSeek V3 0324",
          "value": "deepseek/deepseek-chat-v3-0324"
        },
        {
          "name": "Gemma 3 12B",
          "value": "google/gemma-3-12b-it"
        },
        {
          "name": "Gemma 3 27B",
          "value": "google/gemma-3-27b-it"
        },
        {
          "name": "Saba",
          "value": "mistralai/mistral-saba"
        },
        {
          "name": "o3 Mini High",
          "value": "openai/o3-mini-high"
        },
        {
          "name": "DeepSeek-R1",
          "value": "deepseek/deepseek-r1"
        },
        {
          "name": "o3-mini",
          "value": "openai/o3-mini"
        },
        {
          "name": "Llama-3.3-70B-Instruct",
          "value": "meta-llama/llama-3.3-70b-instruct"
        },
        {
          "name": "Llama 3.3 70B Instruct (free)",
          "value": "meta-llama/llama-3.3-70b-instruct:free"
        },
        {
          "name": "Nova Lite 1.0",
          "value": "amazon/nova-lite-v1"
        },
        {
          "name": "Nova Micro 1.0",
          "value": "amazon/nova-micro-v1"
        },
        {
          "name": "Nova Pro 1.0",
          "value": "amazon/nova-pro-v1"
        },
        {
          "name": "o1",
          "value": "openai/o1"
        },
        {
          "name": "GPT-4o (2024-11-20)",
          "value": "openai/gpt-4o-2024-11-20"
        },
        {
          "name": "Mistral Large 2407",
          "value": "mistralai/mistral-large-2407"
        },
        {
          "name": "UnslopNemo 12B",
          "value": "thedrummer/unslopnemo-12b"
        },
        {
          "name": "Mistral Large 3",
          "value": "mistralai/mistral-large-2512"
        },
        {
          "name": "Qwen2.5 7B Instruct",
          "value": "qwen/qwen-2.5-7b-instruct"
        },
        {
          "name": "Qwen2.5 72B Instruct",
          "value": "qwen/qwen-2.5-72b-instruct"
        },
        {
          "name": "Command R",
          "value": "cohere/command-r-08-2024"
        },
        {
          "name": "Command R+",
          "value": "cohere/command-r-plus-08-2024"
        },
        {
          "name": "Llama 3.1 Euryale 70B v2.2",
          "value": "sao10k/l3.1-euryale-70b"
        },
        {
          "name": "GPT-4o (2024-08-06)",
          "value": "openai/gpt-4o-2024-08-06"
        },
        {
          "name": "Llama 3.1 70B Instruct",
          "value": "meta-llama/llama-3.1-70b-instruct"
        },
        {
          "name": "Llama 3.1 8B Instruct",
          "value": "meta-llama/llama-3.1-8b-instruct"
        },
        {
          "name": "GPT-4o mini",
          "value": "openai/gpt-4o-mini"
        },
        {
          "name": "GPT-4o-mini (2024-07-18)",
          "value": "openai/gpt-4o-mini-2024-07-18"
        },
        {
          "name": "Mistral Nemo",
          "value": "mistralai/mistral-nemo"
        },
        {
          "name": "o3-deep-research",
          "value": "openai/o3-deep-research"
        },
        {
          "name": "o4-mini-deep-research",
          "value": "openai/o4-mini-deep-research"
        },
        {
          "name": "GPT-4o",
          "value": "openai/gpt-4o"
        },
        {
          "name": "GPT-4o (2024-05-13)",
          "value": "openai/gpt-4o-2024-05-13"
        },
        {
          "name": "Mixtral 8x22B Instruct",
          "value": "mistralai/mixtral-8x22b-instruct"
        },
        {
          "name": "Claude 3 Haiku",
          "value": "anthropic/claude-3-haiku"
        },
        {
          "name": "Mistral Large",
          "value": "mistralai/mistral-large"
        },
        {
          "name": "GPT-3.5 Turbo (older v0613)",
          "value": "openai/gpt-3.5-turbo-0613"
        },
        {
          "name": "GPT-4 Turbo Preview",
          "value": "openai/gpt-4-turbo-preview"
        },
        {
          "name": "Qwen Plus",
          "value": "qwen/qwen-plus"
        },
        {
          "name": "Auto Router",
          "value": "openrouter/auto"
        },
        {
          "name": "GPT-4",
          "value": "openai/gpt-4"
        },
        {
          "name": "GPT-4 Turbo",
          "value": "openai/gpt-4-turbo"
        },
        {
          "name": "GPT-3.5 Turbo 16k",
          "value": "openai/gpt-3.5-turbo-16k"
        },
        {
          "name": "GPT-3.5-turbo",
          "value": "openai/gpt-3.5-turbo"
        },
        {
          "name": "GLM 5.2",
          "value": "zai/glm-5.2"
        },
        {
          "name": "GLM 5.2 Fast",
          "value": "zai/glm-5.2-fast"
        },
        {
          "name": "GLM 5.1",
          "value": "zai/glm-5.1"
        },
        {
          "name": "GLM 5V Turbo",
          "value": "zai/glm-5v-turbo"
        },
        {
          "name": "GLM 5 Turbo",
          "value": "zai/glm-5-turbo"
        },
        {
          "name": "GLM-5",
          "value": "zai/glm-5"
        },
        {
          "name": "GLM 4.7 Flash",
          "value": "zai/glm-4.7-flash"
        },
        {
          "name": "GLM 4.7 FlashX",
          "value": "zai/glm-4.7-flashx"
        },
        {
          "name": "GLM 4.7",
          "value": "zai/glm-4.7"
        },
        {
          "name": "GLM 4.6",
          "value": "zai/glm-4.6"
        },
        {
          "name": "GLM-4.6V",
          "value": "zai/glm-4.6v"
        },
        {
          "name": "GLM-4.6V-Flash",
          "value": "zai/glm-4.6v-flash"
        },
        {
          "name": "GLM 4.5V",
          "value": "zai/glm-4.5v"
        },
        {
          "name": "GLM 4.5",
          "value": "zai/glm-4.5"
        },
        {
          "name": "GLM 4.5 Air",
          "value": "zai/glm-4.5-air"
        }
      ],
      "type": "select"
    },
    {
      "category": "mode",
      "currentValue": "act",
      "description": "Controls whether the agent can modify files",
      "id": "mode",
      "name": "Session Mode",
      "options": [
        {
          "description": "Explore the codebase and plan changes without modifying files",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Make changes to the codebase",
          "name": "Act",
          "value": "act"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "act",
  "id": "cline",
  "modes": [
    {
      "description": "Explore the codebase and plan changes without modifying files",
      "id": "plan",
      "name": "Plan"
    },
    {
      "description": "Make changes to the codebase",
      "id": "act",
      "name": "Act"
    }
  ],
  "name": "Cline",
  "protocolVersion": 1,
  "version": "3.0.31"
};
