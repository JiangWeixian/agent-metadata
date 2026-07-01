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
    "name": "dirac",
    "version": "0.4.10"
  },
  "authMethods": [
    {
      "description": "Authenticate with your ChatGPT Plus/Pro/Team subscription",
      "id": "openai-codex-oauth",
      "name": "Sign in with ChatGPT"
    }
  ],
  "commands": [
    {
      "description": "Create a new task with context from the current task",
      "input": {
        "hint": "Create a new task with context from the current task"
      },
      "name": "newtask"
    },
    {
      "description": "Condenses your current context window",
      "input": {
        "hint": "Condenses your current context window"
      },
      "name": "smol"
    },
    {
      "description": "Create a new Dirac rule based on your conversation",
      "input": {
        "hint": "Create a new Dirac rule based on your conversation"
      },
      "name": "newrule"
    },
    {
      "description": "Create a Github issue with Dirac",
      "input": {
        "hint": "Create a Github issue with Dirac"
      },
      "name": "reportbug"
    },
    {
      "description": "Get help with Dirac's internal workings and source code",
      "input": {
        "hint": "Get help with Dirac's internal workings and source code"
      },
      "name": "askDirac"
    },
    {
      "description": "Learn how to use Dirac CLI",
      "input": {
        "hint": "Learn how to use Dirac CLI"
      },
      "name": "help"
    },
    {
      "description": "Reload custom tools from disk",
      "input": {
        "hint": "Reload custom tools from disk"
      },
      "name": "reloadtools"
    },
    {
      "description": "Create a new custom tool for Dirac through an interactive interview",
      "input": {
        "hint": "Create a new custom tool for Dirac through an interactive interview"
      },
      "name": "new-tool"
    },
    {
      "description": "Delete a local user-defined custom tool from global or workspace scope",
      "input": {
        "hint": "Delete a local user-defined custom tool from global or workspace scope"
      },
      "name": "delete-tool"
    },
    {
      "description": "Review uncommitted working tree changes",
      "input": {
        "hint": "Optional review instructions"
      },
      "name": "/review"
    },
    {
      "description": "Review changes against the merge-base with a branch",
      "input": {
        "hint": "<branch> [optional review instructions]"
      },
      "name": "/review-branch"
    },
    {
      "description": "Review a single commit",
      "input": {
        "hint": "<commit> [optional review instructions]"
      },
      "name": "/review-commit"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "act",
      "description": "Session operating mode",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "description": "Gather information and create a detailed plan",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Execute actions, asking permission for each tool call",
          "name": "Act",
          "value": "act"
        },
        {
          "description": "Execute actions, auto-approving all tool calls",
          "name": "Auto-approve",
          "value": "auto"
        },
        {
          "description": "Execute actions with no safety prompts",
          "name": "YOLO",
          "value": "yolo"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "openrouter",
      "description": "API provider",
      "id": "provider",
      "name": "Provider",
      "options": [
        {
          "name": "ChatGPT Subscription",
          "value": "openai-codex"
        },
        {
          "name": "Google Gemini",
          "value": "gemini"
        },
        {
          "name": "OpenAI Compatible",
          "value": "openai"
        },
        {
          "name": "Anthropic",
          "value": "anthropic"
        },
        {
          "name": "Amazon Bedrock",
          "value": "bedrock"
        },
        {
          "name": "DeepSeek",
          "value": "deepseek"
        },
        {
          "name": "OpenAI",
          "value": "openai-native"
        },
        {
          "name": "OpenRouter",
          "value": "openrouter"
        },
        {
          "name": "GCP Vertex AI",
          "value": "vertex"
        },
        {
          "name": "LiteLLM",
          "value": "litellm"
        },
        {
          "name": "Claude Code",
          "value": "claude-code"
        },
        {
          "name": "GitHub Copilot (Native)",
          "value": "github-copilot"
        },
        {
          "name": "Mistral",
          "value": "mistral"
        },
        {
          "name": "Z AI",
          "value": "zai"
        },
        {
          "name": "Groq",
          "value": "groq"
        },
        {
          "name": "Cerebras",
          "value": "cerebras"
        },
        {
          "name": "Vercel AI Gateway",
          "value": "vercel-ai-gateway"
        },
        {
          "name": "Baseten",
          "value": "baseten"
        },
        {
          "name": "Requesty",
          "value": "requesty"
        },
        {
          "name": "Fireworks AI",
          "value": "fireworks"
        },
        {
          "name": "Together",
          "value": "together"
        },
        {
          "name": "Alibaba Qwen",
          "value": "qwen"
        },
        {
          "name": "Qwen Code",
          "value": "qwen-code"
        },
        {
          "name": "Bytedance Doubao",
          "value": "doubao"
        },
        {
          "name": "LM Studio",
          "value": "lmstudio"
        },
        {
          "name": "Moonshot",
          "value": "moonshot"
        },
        {
          "name": "Hugging Face",
          "value": "huggingface"
        },
        {
          "name": "Nebius AI Studio",
          "value": "nebius"
        },
        {
          "name": "xAI",
          "value": "xai"
        },
        {
          "name": "SambaNova",
          "value": "sambanova"
        },
        {
          "name": "Huawei Cloud MaaS",
          "value": "huawei-cloud-maas"
        },
        {
          "name": "Dify.ai",
          "value": "dify"
        },
        {
          "name": "Oracle Code Assist",
          "value": "oca"
        },
        {
          "name": "MiniMax",
          "value": "minimax"
        },
        {
          "name": "AIhubmix",
          "value": "aihubmix"
        },
        {
          "name": "NousResearch",
          "value": "nousResearch"
        },
        {
          "name": "W&B Inference by CoreWeave",
          "value": "wandb"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "anthropic/claude-sonnet-4.5",
      "description": "Model for the current mode",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "name": "~anthropic/claude-fable-latest",
          "value": "~anthropic/claude-fable-latest"
        },
        {
          "name": "~anthropic/claude-haiku-latest",
          "value": "~anthropic/claude-haiku-latest"
        },
        {
          "name": "~anthropic/claude-opus-latest",
          "value": "~anthropic/claude-opus-latest"
        },
        {
          "name": "~anthropic/claude-sonnet-latest",
          "value": "~anthropic/claude-sonnet-latest"
        },
        {
          "name": "~google/gemini-flash-latest",
          "value": "~google/gemini-flash-latest"
        },
        {
          "name": "~google/gemini-pro-latest",
          "value": "~google/gemini-pro-latest"
        },
        {
          "name": "~moonshotai/kimi-latest",
          "value": "~moonshotai/kimi-latest"
        },
        {
          "name": "~openai/gpt-latest",
          "value": "~openai/gpt-latest"
        },
        {
          "name": "~openai/gpt-mini-latest",
          "value": "~openai/gpt-mini-latest"
        },
        {
          "name": "ai21/jamba-large-1.7",
          "value": "ai21/jamba-large-1.7"
        },
        {
          "name": "aion-labs/aion-1.0",
          "value": "aion-labs/aion-1.0"
        },
        {
          "name": "aion-labs/aion-1.0-mini",
          "value": "aion-labs/aion-1.0-mini"
        },
        {
          "name": "aion-labs/aion-2.0",
          "value": "aion-labs/aion-2.0"
        },
        {
          "name": "aion-labs/aion-rp-llama-3.1-8b",
          "value": "aion-labs/aion-rp-llama-3.1-8b"
        },
        {
          "name": "allenai/olmo-3-32b-think",
          "value": "allenai/olmo-3-32b-think"
        },
        {
          "name": "amazon/nova-2-lite-v1",
          "value": "amazon/nova-2-lite-v1"
        },
        {
          "name": "amazon/nova-lite-v1",
          "value": "amazon/nova-lite-v1"
        },
        {
          "name": "amazon/nova-micro-v1",
          "value": "amazon/nova-micro-v1"
        },
        {
          "name": "amazon/nova-premier-v1",
          "value": "amazon/nova-premier-v1"
        },
        {
          "name": "amazon/nova-pro-v1",
          "value": "amazon/nova-pro-v1"
        },
        {
          "name": "anthracite-org/magnum-v4-72b",
          "value": "anthracite-org/magnum-v4-72b"
        },
        {
          "name": "anthropic/claude-3-haiku",
          "value": "anthropic/claude-3-haiku"
        },
        {
          "name": "anthropic/claude-fable-5",
          "value": "anthropic/claude-fable-5"
        },
        {
          "name": "anthropic/claude-haiku-4.5",
          "value": "anthropic/claude-haiku-4.5"
        },
        {
          "name": "anthropic/claude-opus-4",
          "value": "anthropic/claude-opus-4"
        },
        {
          "name": "anthropic/claude-opus-4.1",
          "value": "anthropic/claude-opus-4.1"
        },
        {
          "name": "anthropic/claude-opus-4.5",
          "value": "anthropic/claude-opus-4.5"
        },
        {
          "name": "anthropic/claude-opus-4.6",
          "value": "anthropic/claude-opus-4.6"
        },
        {
          "name": "anthropic/claude-opus-4.6-fast",
          "value": "anthropic/claude-opus-4.6-fast"
        },
        {
          "name": "anthropic/claude-opus-4.7",
          "value": "anthropic/claude-opus-4.7"
        },
        {
          "name": "anthropic/claude-opus-4.7-fast",
          "value": "anthropic/claude-opus-4.7-fast"
        },
        {
          "name": "anthropic/claude-opus-4.8",
          "value": "anthropic/claude-opus-4.8"
        },
        {
          "name": "anthropic/claude-opus-4.8-fast",
          "value": "anthropic/claude-opus-4.8-fast"
        },
        {
          "name": "anthropic/claude-sonnet-4",
          "value": "anthropic/claude-sonnet-4"
        },
        {
          "name": "anthropic/claude-sonnet-4.5",
          "value": "anthropic/claude-sonnet-4.5"
        },
        {
          "name": "anthropic/claude-sonnet-4.6",
          "value": "anthropic/claude-sonnet-4.6"
        },
        {
          "name": "arcee-ai/coder-large",
          "value": "arcee-ai/coder-large"
        },
        {
          "name": "arcee-ai/trinity-large-thinking",
          "value": "arcee-ai/trinity-large-thinking"
        },
        {
          "name": "arcee-ai/trinity-mini",
          "value": "arcee-ai/trinity-mini"
        },
        {
          "name": "arcee-ai/virtuoso-large",
          "value": "arcee-ai/virtuoso-large"
        },
        {
          "name": "baidu/ernie-4.5-vl-424b-a47b",
          "value": "baidu/ernie-4.5-vl-424b-a47b"
        },
        {
          "name": "bytedance-seed/seed-1.6",
          "value": "bytedance-seed/seed-1.6"
        },
        {
          "name": "bytedance-seed/seed-1.6-flash",
          "value": "bytedance-seed/seed-1.6-flash"
        },
        {
          "name": "bytedance-seed/seed-2.0-lite",
          "value": "bytedance-seed/seed-2.0-lite"
        },
        {
          "name": "bytedance-seed/seed-2.0-mini",
          "value": "bytedance-seed/seed-2.0-mini"
        },
        {
          "name": "bytedance/ui-tars-1.5-7b",
          "value": "bytedance/ui-tars-1.5-7b"
        },
        {
          "name": "cognitivecomputations/dolphin-mistral-24b-venice-edition:free",
          "value": "cognitivecomputations/dolphin-mistral-24b-venice-edition:free"
        },
        {
          "name": "cohere/command-a",
          "value": "cohere/command-a"
        },
        {
          "name": "cohere/command-r-08-2024",
          "value": "cohere/command-r-08-2024"
        },
        {
          "name": "cohere/command-r-plus-08-2024",
          "value": "cohere/command-r-plus-08-2024"
        },
        {
          "name": "cohere/command-r7b-12-2024",
          "value": "cohere/command-r7b-12-2024"
        },
        {
          "name": "cohere/north-mini-code:free",
          "value": "cohere/north-mini-code:free"
        },
        {
          "name": "deepcogito/cogito-v2.1-671b",
          "value": "deepcogito/cogito-v2.1-671b"
        },
        {
          "name": "deepseek/deepseek-chat",
          "value": "deepseek/deepseek-chat"
        },
        {
          "name": "deepseek/deepseek-chat-v3-0324",
          "value": "deepseek/deepseek-chat-v3-0324"
        },
        {
          "name": "deepseek/deepseek-chat-v3.1",
          "value": "deepseek/deepseek-chat-v3.1"
        },
        {
          "name": "deepseek/deepseek-r1",
          "value": "deepseek/deepseek-r1"
        },
        {
          "name": "deepseek/deepseek-r1-0528",
          "value": "deepseek/deepseek-r1-0528"
        },
        {
          "name": "deepseek/deepseek-r1-distill-llama-70b",
          "value": "deepseek/deepseek-r1-distill-llama-70b"
        },
        {
          "name": "deepseek/deepseek-v3.1-terminus",
          "value": "deepseek/deepseek-v3.1-terminus"
        },
        {
          "name": "deepseek/deepseek-v3.2",
          "value": "deepseek/deepseek-v3.2"
        },
        {
          "name": "deepseek/deepseek-v3.2-exp",
          "value": "deepseek/deepseek-v3.2-exp"
        },
        {
          "name": "deepseek/deepseek-v4-flash",
          "value": "deepseek/deepseek-v4-flash"
        },
        {
          "name": "deepseek/deepseek-v4-pro",
          "value": "deepseek/deepseek-v4-pro"
        },
        {
          "name": "google/gemini-2.5-flash",
          "value": "google/gemini-2.5-flash"
        },
        {
          "name": "google/gemini-2.5-flash-image",
          "value": "google/gemini-2.5-flash-image"
        },
        {
          "name": "google/gemini-2.5-flash-lite",
          "value": "google/gemini-2.5-flash-lite"
        },
        {
          "name": "google/gemini-2.5-flash-lite-preview-09-2025",
          "value": "google/gemini-2.5-flash-lite-preview-09-2025"
        },
        {
          "name": "google/gemini-2.5-pro",
          "value": "google/gemini-2.5-pro"
        },
        {
          "name": "google/gemini-2.5-pro-preview",
          "value": "google/gemini-2.5-pro-preview"
        },
        {
          "name": "google/gemini-2.5-pro-preview-05-06",
          "value": "google/gemini-2.5-pro-preview-05-06"
        },
        {
          "name": "google/gemini-3-flash-preview",
          "value": "google/gemini-3-flash-preview"
        },
        {
          "name": "google/gemini-3-pro-image",
          "value": "google/gemini-3-pro-image"
        },
        {
          "name": "google/gemini-3-pro-image-preview",
          "value": "google/gemini-3-pro-image-preview"
        },
        {
          "name": "google/gemini-3.1-flash-image",
          "value": "google/gemini-3.1-flash-image"
        },
        {
          "name": "google/gemini-3.1-flash-image-preview",
          "value": "google/gemini-3.1-flash-image-preview"
        },
        {
          "name": "google/gemini-3.1-flash-lite",
          "value": "google/gemini-3.1-flash-lite"
        },
        {
          "name": "google/gemini-3.1-flash-lite-preview",
          "value": "google/gemini-3.1-flash-lite-preview"
        },
        {
          "name": "google/gemini-3.1-pro-preview",
          "value": "google/gemini-3.1-pro-preview"
        },
        {
          "name": "google/gemini-3.1-pro-preview-customtools",
          "value": "google/gemini-3.1-pro-preview-customtools"
        },
        {
          "name": "google/gemini-3.5-flash",
          "value": "google/gemini-3.5-flash"
        },
        {
          "name": "google/gemma-2-27b-it",
          "value": "google/gemma-2-27b-it"
        },
        {
          "name": "google/gemma-3-12b-it",
          "value": "google/gemma-3-12b-it"
        },
        {
          "name": "google/gemma-3-27b-it",
          "value": "google/gemma-3-27b-it"
        },
        {
          "name": "google/gemma-3-4b-it",
          "value": "google/gemma-3-4b-it"
        },
        {
          "name": "google/gemma-3n-e4b-it",
          "value": "google/gemma-3n-e4b-it"
        },
        {
          "name": "google/gemma-4-26b-a4b-it",
          "value": "google/gemma-4-26b-a4b-it"
        },
        {
          "name": "google/gemma-4-26b-a4b-it:free",
          "value": "google/gemma-4-26b-a4b-it:free"
        },
        {
          "name": "google/gemma-4-31b-it",
          "value": "google/gemma-4-31b-it"
        },
        {
          "name": "google/gemma-4-31b-it:free",
          "value": "google/gemma-4-31b-it:free"
        },
        {
          "name": "google/lyria-3-clip-preview",
          "value": "google/lyria-3-clip-preview"
        },
        {
          "name": "google/lyria-3-pro-preview",
          "value": "google/lyria-3-pro-preview"
        },
        {
          "name": "gryphe/mythomax-l2-13b",
          "value": "gryphe/mythomax-l2-13b"
        },
        {
          "name": "ibm-granite/granite-4.0-h-micro",
          "value": "ibm-granite/granite-4.0-h-micro"
        },
        {
          "name": "ibm-granite/granite-4.1-8b",
          "value": "ibm-granite/granite-4.1-8b"
        },
        {
          "name": "inception/mercury-2",
          "value": "inception/mercury-2"
        },
        {
          "name": "inclusionai/ling-2.6-1t",
          "value": "inclusionai/ling-2.6-1t"
        },
        {
          "name": "inclusionai/ling-2.6-flash",
          "value": "inclusionai/ling-2.6-flash"
        },
        {
          "name": "inclusionai/ring-2.6-1t",
          "value": "inclusionai/ring-2.6-1t"
        },
        {
          "name": "inflection/inflection-3-pi",
          "value": "inflection/inflection-3-pi"
        },
        {
          "name": "inflection/inflection-3-productivity",
          "value": "inflection/inflection-3-productivity"
        },
        {
          "name": "kwaipilot/kat-coder-pro-v2",
          "value": "kwaipilot/kat-coder-pro-v2"
        },
        {
          "name": "liquid/lfm-2-24b-a2b",
          "value": "liquid/lfm-2-24b-a2b"
        },
        {
          "name": "liquid/lfm-2.5-1.2b-instruct:free",
          "value": "liquid/lfm-2.5-1.2b-instruct:free"
        },
        {
          "name": "liquid/lfm-2.5-1.2b-thinking:free",
          "value": "liquid/lfm-2.5-1.2b-thinking:free"
        },
        {
          "name": "mancer/weaver",
          "value": "mancer/weaver"
        },
        {
          "name": "meta-llama/llama-3-8b-instruct",
          "value": "meta-llama/llama-3-8b-instruct"
        },
        {
          "name": "meta-llama/llama-3.1-70b-instruct",
          "value": "meta-llama/llama-3.1-70b-instruct"
        },
        {
          "name": "meta-llama/llama-3.1-8b-instruct",
          "value": "meta-llama/llama-3.1-8b-instruct"
        },
        {
          "name": "meta-llama/llama-3.2-11b-vision-instruct",
          "value": "meta-llama/llama-3.2-11b-vision-instruct"
        },
        {
          "name": "meta-llama/llama-3.2-1b-instruct",
          "value": "meta-llama/llama-3.2-1b-instruct"
        },
        {
          "name": "meta-llama/llama-3.2-3b-instruct",
          "value": "meta-llama/llama-3.2-3b-instruct"
        },
        {
          "name": "meta-llama/llama-3.2-3b-instruct:free",
          "value": "meta-llama/llama-3.2-3b-instruct:free"
        },
        {
          "name": "meta-llama/llama-3.3-70b-instruct",
          "value": "meta-llama/llama-3.3-70b-instruct"
        },
        {
          "name": "meta-llama/llama-3.3-70b-instruct:free",
          "value": "meta-llama/llama-3.3-70b-instruct:free"
        },
        {
          "name": "meta-llama/llama-4-maverick",
          "value": "meta-llama/llama-4-maverick"
        },
        {
          "name": "meta-llama/llama-4-scout",
          "value": "meta-llama/llama-4-scout"
        },
        {
          "name": "meta-llama/llama-guard-4-12b",
          "value": "meta-llama/llama-guard-4-12b"
        },
        {
          "name": "microsoft/phi-4",
          "value": "microsoft/phi-4"
        },
        {
          "name": "microsoft/phi-4-mini-instruct",
          "value": "microsoft/phi-4-mini-instruct"
        },
        {
          "name": "microsoft/wizardlm-2-8x22b",
          "value": "microsoft/wizardlm-2-8x22b"
        },
        {
          "name": "minimax/minimax-01",
          "value": "minimax/minimax-01"
        },
        {
          "name": "minimax/minimax-m1",
          "value": "minimax/minimax-m1"
        },
        {
          "name": "minimax/minimax-m2",
          "value": "minimax/minimax-m2"
        },
        {
          "name": "minimax/minimax-m2-her",
          "value": "minimax/minimax-m2-her"
        },
        {
          "name": "minimax/minimax-m2.1",
          "value": "minimax/minimax-m2.1"
        },
        {
          "name": "minimax/minimax-m2.5",
          "value": "minimax/minimax-m2.5"
        },
        {
          "name": "minimax/minimax-m2.7",
          "value": "minimax/minimax-m2.7"
        },
        {
          "name": "minimax/minimax-m3",
          "value": "minimax/minimax-m3"
        },
        {
          "name": "mistralai/codestral-2508",
          "value": "mistralai/codestral-2508"
        },
        {
          "name": "mistralai/devstral-2512",
          "value": "mistralai/devstral-2512"
        },
        {
          "name": "mistralai/ministral-14b-2512",
          "value": "mistralai/ministral-14b-2512"
        },
        {
          "name": "mistralai/ministral-3b-2512",
          "value": "mistralai/ministral-3b-2512"
        },
        {
          "name": "mistralai/ministral-8b-2512",
          "value": "mistralai/ministral-8b-2512"
        },
        {
          "name": "mistralai/mistral-large",
          "value": "mistralai/mistral-large"
        },
        {
          "name": "mistralai/mistral-large-2407",
          "value": "mistralai/mistral-large-2407"
        },
        {
          "name": "mistralai/mistral-large-2512",
          "value": "mistralai/mistral-large-2512"
        },
        {
          "name": "mistralai/mistral-medium-3",
          "value": "mistralai/mistral-medium-3"
        },
        {
          "name": "mistralai/mistral-medium-3-5",
          "value": "mistralai/mistral-medium-3-5"
        },
        {
          "name": "mistralai/mistral-medium-3.1",
          "value": "mistralai/mistral-medium-3.1"
        },
        {
          "name": "mistralai/mistral-nemo",
          "value": "mistralai/mistral-nemo"
        },
        {
          "name": "mistralai/mistral-saba",
          "value": "mistralai/mistral-saba"
        },
        {
          "name": "mistralai/mistral-small-24b-instruct-2501",
          "value": "mistralai/mistral-small-24b-instruct-2501"
        },
        {
          "name": "mistralai/mistral-small-2603",
          "value": "mistralai/mistral-small-2603"
        },
        {
          "name": "mistralai/mistral-small-3.1-24b-instruct",
          "value": "mistralai/mistral-small-3.1-24b-instruct"
        },
        {
          "name": "mistralai/mistral-small-3.2-24b-instruct",
          "value": "mistralai/mistral-small-3.2-24b-instruct"
        },
        {
          "name": "mistralai/mixtral-8x22b-instruct",
          "value": "mistralai/mixtral-8x22b-instruct"
        },
        {
          "name": "mistralai/voxtral-small-24b-2507",
          "value": "mistralai/voxtral-small-24b-2507"
        },
        {
          "name": "moonshotai/kimi-k2",
          "value": "moonshotai/kimi-k2"
        },
        {
          "name": "moonshotai/kimi-k2-0905",
          "value": "moonshotai/kimi-k2-0905"
        },
        {
          "name": "moonshotai/kimi-k2-thinking",
          "value": "moonshotai/kimi-k2-thinking"
        },
        {
          "name": "moonshotai/kimi-k2.5",
          "value": "moonshotai/kimi-k2.5"
        },
        {
          "name": "moonshotai/kimi-k2.6",
          "value": "moonshotai/kimi-k2.6"
        },
        {
          "name": "moonshotai/kimi-k2.7-code",
          "value": "moonshotai/kimi-k2.7-code"
        },
        {
          "name": "morph/morph-v3-fast",
          "value": "morph/morph-v3-fast"
        },
        {
          "name": "morph/morph-v3-large",
          "value": "morph/morph-v3-large"
        },
        {
          "name": "nex-agi/nex-n2-pro",
          "value": "nex-agi/nex-n2-pro"
        },
        {
          "name": "nousresearch/hermes-3-llama-3.1-405b",
          "value": "nousresearch/hermes-3-llama-3.1-405b"
        },
        {
          "name": "nousresearch/hermes-3-llama-3.1-405b:free",
          "value": "nousresearch/hermes-3-llama-3.1-405b:free"
        },
        {
          "name": "nousresearch/hermes-3-llama-3.1-70b",
          "value": "nousresearch/hermes-3-llama-3.1-70b"
        },
        {
          "name": "nousresearch/hermes-4-405b",
          "value": "nousresearch/hermes-4-405b"
        },
        {
          "name": "nousresearch/hermes-4-70b",
          "value": "nousresearch/hermes-4-70b"
        },
        {
          "name": "nvidia/llama-3.3-nemotron-super-49b-v1.5",
          "value": "nvidia/llama-3.3-nemotron-super-49b-v1.5"
        },
        {
          "name": "nvidia/nemotron-3-nano-30b-a3b",
          "value": "nvidia/nemotron-3-nano-30b-a3b"
        },
        {
          "name": "nvidia/nemotron-3-nano-30b-a3b:free",
          "value": "nvidia/nemotron-3-nano-30b-a3b:free"
        },
        {
          "name": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
          "value": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free"
        },
        {
          "name": "nvidia/nemotron-3-super-120b-a12b",
          "value": "nvidia/nemotron-3-super-120b-a12b"
        },
        {
          "name": "nvidia/nemotron-3-super-120b-a12b:free",
          "value": "nvidia/nemotron-3-super-120b-a12b:free"
        },
        {
          "name": "nvidia/nemotron-3-ultra-550b-a55b",
          "value": "nvidia/nemotron-3-ultra-550b-a55b"
        },
        {
          "name": "nvidia/nemotron-3-ultra-550b-a55b:free",
          "value": "nvidia/nemotron-3-ultra-550b-a55b:free"
        },
        {
          "name": "nvidia/nemotron-3.5-content-safety:free",
          "value": "nvidia/nemotron-3.5-content-safety:free"
        },
        {
          "name": "nvidia/nemotron-nano-12b-v2-vl:free",
          "value": "nvidia/nemotron-nano-12b-v2-vl:free"
        },
        {
          "name": "nvidia/nemotron-nano-9b-v2:free",
          "value": "nvidia/nemotron-nano-9b-v2:free"
        },
        {
          "name": "openai/gpt-3.5-turbo",
          "value": "openai/gpt-3.5-turbo"
        },
        {
          "name": "openai/gpt-3.5-turbo-0613",
          "value": "openai/gpt-3.5-turbo-0613"
        },
        {
          "name": "openai/gpt-3.5-turbo-16k",
          "value": "openai/gpt-3.5-turbo-16k"
        },
        {
          "name": "openai/gpt-3.5-turbo-instruct",
          "value": "openai/gpt-3.5-turbo-instruct"
        },
        {
          "name": "openai/gpt-4",
          "value": "openai/gpt-4"
        },
        {
          "name": "openai/gpt-4-turbo",
          "value": "openai/gpt-4-turbo"
        },
        {
          "name": "openai/gpt-4-turbo-preview",
          "value": "openai/gpt-4-turbo-preview"
        },
        {
          "name": "openai/gpt-4.1",
          "value": "openai/gpt-4.1"
        },
        {
          "name": "openai/gpt-4.1-mini",
          "value": "openai/gpt-4.1-mini"
        },
        {
          "name": "openai/gpt-4.1-nano",
          "value": "openai/gpt-4.1-nano"
        },
        {
          "name": "openai/gpt-4o",
          "value": "openai/gpt-4o"
        },
        {
          "name": "openai/gpt-4o-2024-05-13",
          "value": "openai/gpt-4o-2024-05-13"
        },
        {
          "name": "openai/gpt-4o-2024-08-06",
          "value": "openai/gpt-4o-2024-08-06"
        },
        {
          "name": "openai/gpt-4o-2024-11-20",
          "value": "openai/gpt-4o-2024-11-20"
        },
        {
          "name": "openai/gpt-4o-mini",
          "value": "openai/gpt-4o-mini"
        },
        {
          "name": "openai/gpt-4o-mini-2024-07-18",
          "value": "openai/gpt-4o-mini-2024-07-18"
        },
        {
          "name": "openai/gpt-4o-mini-search-preview",
          "value": "openai/gpt-4o-mini-search-preview"
        },
        {
          "name": "openai/gpt-4o-search-preview",
          "value": "openai/gpt-4o-search-preview"
        },
        {
          "name": "openai/gpt-5",
          "value": "openai/gpt-5"
        },
        {
          "name": "openai/gpt-5-chat",
          "value": "openai/gpt-5-chat"
        },
        {
          "name": "openai/gpt-5-codex",
          "value": "openai/gpt-5-codex"
        },
        {
          "name": "openai/gpt-5-image",
          "value": "openai/gpt-5-image"
        },
        {
          "name": "openai/gpt-5-image-mini",
          "value": "openai/gpt-5-image-mini"
        },
        {
          "name": "openai/gpt-5-mini",
          "value": "openai/gpt-5-mini"
        },
        {
          "name": "openai/gpt-5-nano",
          "value": "openai/gpt-5-nano"
        },
        {
          "name": "openai/gpt-5-pro",
          "value": "openai/gpt-5-pro"
        },
        {
          "name": "openai/gpt-5.1",
          "value": "openai/gpt-5.1"
        },
        {
          "name": "openai/gpt-5.1-chat",
          "value": "openai/gpt-5.1-chat"
        },
        {
          "name": "openai/gpt-5.1-codex",
          "value": "openai/gpt-5.1-codex"
        },
        {
          "name": "openai/gpt-5.1-codex-max",
          "value": "openai/gpt-5.1-codex-max"
        },
        {
          "name": "openai/gpt-5.1-codex-mini",
          "value": "openai/gpt-5.1-codex-mini"
        },
        {
          "name": "openai/gpt-5.2",
          "value": "openai/gpt-5.2"
        },
        {
          "name": "openai/gpt-5.2-chat",
          "value": "openai/gpt-5.2-chat"
        },
        {
          "name": "openai/gpt-5.2-codex",
          "value": "openai/gpt-5.2-codex"
        },
        {
          "name": "openai/gpt-5.2-pro",
          "value": "openai/gpt-5.2-pro"
        },
        {
          "name": "openai/gpt-5.3-chat",
          "value": "openai/gpt-5.3-chat"
        },
        {
          "name": "openai/gpt-5.3-codex",
          "value": "openai/gpt-5.3-codex"
        },
        {
          "name": "openai/gpt-5.4",
          "value": "openai/gpt-5.4"
        },
        {
          "name": "openai/gpt-5.4-image-2",
          "value": "openai/gpt-5.4-image-2"
        },
        {
          "name": "openai/gpt-5.4-mini",
          "value": "openai/gpt-5.4-mini"
        },
        {
          "name": "openai/gpt-5.4-nano",
          "value": "openai/gpt-5.4-nano"
        },
        {
          "name": "openai/gpt-5.4-pro",
          "value": "openai/gpt-5.4-pro"
        },
        {
          "name": "openai/gpt-5.5",
          "value": "openai/gpt-5.5"
        },
        {
          "name": "openai/gpt-5.5-pro",
          "value": "openai/gpt-5.5-pro"
        },
        {
          "name": "openai/gpt-audio",
          "value": "openai/gpt-audio"
        },
        {
          "name": "openai/gpt-audio-mini",
          "value": "openai/gpt-audio-mini"
        },
        {
          "name": "openai/gpt-chat-latest",
          "value": "openai/gpt-chat-latest"
        },
        {
          "name": "openai/gpt-oss-120b",
          "value": "openai/gpt-oss-120b"
        },
        {
          "name": "openai/gpt-oss-120b:free",
          "value": "openai/gpt-oss-120b:free"
        },
        {
          "name": "openai/gpt-oss-20b",
          "value": "openai/gpt-oss-20b"
        },
        {
          "name": "openai/gpt-oss-20b:free",
          "value": "openai/gpt-oss-20b:free"
        },
        {
          "name": "openai/gpt-oss-safeguard-20b",
          "value": "openai/gpt-oss-safeguard-20b"
        },
        {
          "name": "openai/o1",
          "value": "openai/o1"
        },
        {
          "name": "openai/o1-pro",
          "value": "openai/o1-pro"
        },
        {
          "name": "openai/o3",
          "value": "openai/o3"
        },
        {
          "name": "openai/o3-deep-research",
          "value": "openai/o3-deep-research"
        },
        {
          "name": "openai/o3-mini",
          "value": "openai/o3-mini"
        },
        {
          "name": "openai/o3-mini-high",
          "value": "openai/o3-mini-high"
        },
        {
          "name": "openai/o3-pro",
          "value": "openai/o3-pro"
        },
        {
          "name": "openai/o4-mini",
          "value": "openai/o4-mini"
        },
        {
          "name": "openai/o4-mini-deep-research",
          "value": "openai/o4-mini-deep-research"
        },
        {
          "name": "openai/o4-mini-high",
          "value": "openai/o4-mini-high"
        },
        {
          "name": "openrouter/auto",
          "value": "openrouter/auto"
        },
        {
          "name": "openrouter/bodybuilder",
          "value": "openrouter/bodybuilder"
        },
        {
          "name": "openrouter/free",
          "value": "openrouter/free"
        },
        {
          "name": "openrouter/fusion",
          "value": "openrouter/fusion"
        },
        {
          "name": "openrouter/owl-alpha",
          "value": "openrouter/owl-alpha"
        },
        {
          "name": "openrouter/pareto-code",
          "value": "openrouter/pareto-code"
        },
        {
          "name": "perceptron/perceptron-mk1",
          "value": "perceptron/perceptron-mk1"
        },
        {
          "name": "perplexity/sonar",
          "value": "perplexity/sonar"
        },
        {
          "name": "perplexity/sonar-deep-research",
          "value": "perplexity/sonar-deep-research"
        },
        {
          "name": "perplexity/sonar-pro",
          "value": "perplexity/sonar-pro"
        },
        {
          "name": "perplexity/sonar-pro-search",
          "value": "perplexity/sonar-pro-search"
        },
        {
          "name": "perplexity/sonar-reasoning-pro",
          "value": "perplexity/sonar-reasoning-pro"
        },
        {
          "name": "poolside/laguna-m.1",
          "value": "poolside/laguna-m.1"
        },
        {
          "name": "poolside/laguna-m.1:free",
          "value": "poolside/laguna-m.1:free"
        },
        {
          "name": "poolside/laguna-xs.2",
          "value": "poolside/laguna-xs.2"
        },
        {
          "name": "poolside/laguna-xs.2:free",
          "value": "poolside/laguna-xs.2:free"
        },
        {
          "name": "qwen/qwen-2.5-72b-instruct",
          "value": "qwen/qwen-2.5-72b-instruct"
        },
        {
          "name": "qwen/qwen-2.5-7b-instruct",
          "value": "qwen/qwen-2.5-7b-instruct"
        },
        {
          "name": "qwen/qwen-2.5-coder-32b-instruct",
          "value": "qwen/qwen-2.5-coder-32b-instruct"
        },
        {
          "name": "qwen/qwen-plus",
          "value": "qwen/qwen-plus"
        },
        {
          "name": "qwen/qwen-plus-2025-07-28",
          "value": "qwen/qwen-plus-2025-07-28"
        },
        {
          "name": "qwen/qwen-plus-2025-07-28:thinking",
          "value": "qwen/qwen-plus-2025-07-28:thinking"
        },
        {
          "name": "qwen/qwen2.5-vl-72b-instruct",
          "value": "qwen/qwen2.5-vl-72b-instruct"
        },
        {
          "name": "qwen/qwen3-14b",
          "value": "qwen/qwen3-14b"
        },
        {
          "name": "qwen/qwen3-235b-a22b",
          "value": "qwen/qwen3-235b-a22b"
        },
        {
          "name": "qwen/qwen3-235b-a22b-2507",
          "value": "qwen/qwen3-235b-a22b-2507"
        },
        {
          "name": "qwen/qwen3-235b-a22b-thinking-2507",
          "value": "qwen/qwen3-235b-a22b-thinking-2507"
        },
        {
          "name": "qwen/qwen3-30b-a3b",
          "value": "qwen/qwen3-30b-a3b"
        },
        {
          "name": "qwen/qwen3-30b-a3b-instruct-2507",
          "value": "qwen/qwen3-30b-a3b-instruct-2507"
        },
        {
          "name": "qwen/qwen3-30b-a3b-thinking-2507",
          "value": "qwen/qwen3-30b-a3b-thinking-2507"
        },
        {
          "name": "qwen/qwen3-32b",
          "value": "qwen/qwen3-32b"
        },
        {
          "name": "qwen/qwen3-8b",
          "value": "qwen/qwen3-8b"
        },
        {
          "name": "qwen/qwen3-coder",
          "value": "qwen/qwen3-coder"
        },
        {
          "name": "qwen/qwen3-coder-30b-a3b-instruct",
          "value": "qwen/qwen3-coder-30b-a3b-instruct"
        },
        {
          "name": "qwen/qwen3-coder-flash",
          "value": "qwen/qwen3-coder-flash"
        },
        {
          "name": "qwen/qwen3-coder-next",
          "value": "qwen/qwen3-coder-next"
        },
        {
          "name": "qwen/qwen3-coder-plus",
          "value": "qwen/qwen3-coder-plus"
        },
        {
          "name": "qwen/qwen3-coder:free",
          "value": "qwen/qwen3-coder:free"
        },
        {
          "name": "qwen/qwen3-max",
          "value": "qwen/qwen3-max"
        },
        {
          "name": "qwen/qwen3-max-thinking",
          "value": "qwen/qwen3-max-thinking"
        },
        {
          "name": "qwen/qwen3-next-80b-a3b-instruct",
          "value": "qwen/qwen3-next-80b-a3b-instruct"
        },
        {
          "name": "qwen/qwen3-next-80b-a3b-instruct:free",
          "value": "qwen/qwen3-next-80b-a3b-instruct:free"
        },
        {
          "name": "qwen/qwen3-next-80b-a3b-thinking",
          "value": "qwen/qwen3-next-80b-a3b-thinking"
        },
        {
          "name": "qwen/qwen3-vl-235b-a22b-instruct",
          "value": "qwen/qwen3-vl-235b-a22b-instruct"
        },
        {
          "name": "qwen/qwen3-vl-235b-a22b-thinking",
          "value": "qwen/qwen3-vl-235b-a22b-thinking"
        },
        {
          "name": "qwen/qwen3-vl-30b-a3b-instruct",
          "value": "qwen/qwen3-vl-30b-a3b-instruct"
        },
        {
          "name": "qwen/qwen3-vl-30b-a3b-thinking",
          "value": "qwen/qwen3-vl-30b-a3b-thinking"
        },
        {
          "name": "qwen/qwen3-vl-32b-instruct",
          "value": "qwen/qwen3-vl-32b-instruct"
        },
        {
          "name": "qwen/qwen3-vl-8b-instruct",
          "value": "qwen/qwen3-vl-8b-instruct"
        },
        {
          "name": "qwen/qwen3-vl-8b-thinking",
          "value": "qwen/qwen3-vl-8b-thinking"
        },
        {
          "name": "qwen/qwen3.5-122b-a10b",
          "value": "qwen/qwen3.5-122b-a10b"
        },
        {
          "name": "qwen/qwen3.5-27b",
          "value": "qwen/qwen3.5-27b"
        },
        {
          "name": "qwen/qwen3.5-35b-a3b",
          "value": "qwen/qwen3.5-35b-a3b"
        },
        {
          "name": "qwen/qwen3.5-397b-a17b",
          "value": "qwen/qwen3.5-397b-a17b"
        },
        {
          "name": "qwen/qwen3.5-9b",
          "value": "qwen/qwen3.5-9b"
        },
        {
          "name": "qwen/qwen3.5-flash-02-23",
          "value": "qwen/qwen3.5-flash-02-23"
        },
        {
          "name": "qwen/qwen3.5-plus-02-15",
          "value": "qwen/qwen3.5-plus-02-15"
        },
        {
          "name": "qwen/qwen3.5-plus-20260420",
          "value": "qwen/qwen3.5-plus-20260420"
        },
        {
          "name": "qwen/qwen3.6-27b",
          "value": "qwen/qwen3.6-27b"
        },
        {
          "name": "qwen/qwen3.6-35b-a3b",
          "value": "qwen/qwen3.6-35b-a3b"
        },
        {
          "name": "qwen/qwen3.6-flash",
          "value": "qwen/qwen3.6-flash"
        },
        {
          "name": "qwen/qwen3.6-max-preview",
          "value": "qwen/qwen3.6-max-preview"
        },
        {
          "name": "qwen/qwen3.6-plus",
          "value": "qwen/qwen3.6-plus"
        },
        {
          "name": "qwen/qwen3.7-max",
          "value": "qwen/qwen3.7-max"
        },
        {
          "name": "qwen/qwen3.7-plus",
          "value": "qwen/qwen3.7-plus"
        },
        {
          "name": "rekaai/reka-edge",
          "value": "rekaai/reka-edge"
        },
        {
          "name": "rekaai/reka-flash-3",
          "value": "rekaai/reka-flash-3"
        },
        {
          "name": "relace/relace-apply-3",
          "value": "relace/relace-apply-3"
        },
        {
          "name": "relace/relace-search",
          "value": "relace/relace-search"
        },
        {
          "name": "sakana/fugu-ultra",
          "value": "sakana/fugu-ultra"
        },
        {
          "name": "sao10k/l3-lunaris-8b",
          "value": "sao10k/l3-lunaris-8b"
        },
        {
          "name": "sao10k/l3.1-70b-hanami-x1",
          "value": "sao10k/l3.1-70b-hanami-x1"
        },
        {
          "name": "sao10k/l3.1-euryale-70b",
          "value": "sao10k/l3.1-euryale-70b"
        },
        {
          "name": "sao10k/l3.3-euryale-70b",
          "value": "sao10k/l3.3-euryale-70b"
        },
        {
          "name": "stepfun/step-3.5-flash",
          "value": "stepfun/step-3.5-flash"
        },
        {
          "name": "stepfun/step-3.7-flash",
          "value": "stepfun/step-3.7-flash"
        },
        {
          "name": "switchpoint/router",
          "value": "switchpoint/router"
        },
        {
          "name": "tencent/hunyuan-a13b-instruct",
          "value": "tencent/hunyuan-a13b-instruct"
        },
        {
          "name": "tencent/hy3-preview",
          "value": "tencent/hy3-preview"
        },
        {
          "name": "thedrummer/cydonia-24b-v4.1",
          "value": "thedrummer/cydonia-24b-v4.1"
        },
        {
          "name": "thedrummer/rocinante-12b",
          "value": "thedrummer/rocinante-12b"
        },
        {
          "name": "thedrummer/skyfall-36b-v2",
          "value": "thedrummer/skyfall-36b-v2"
        },
        {
          "name": "thedrummer/unslopnemo-12b",
          "value": "thedrummer/unslopnemo-12b"
        },
        {
          "name": "undi95/remm-slerp-l2-13b",
          "value": "undi95/remm-slerp-l2-13b"
        },
        {
          "name": "upstage/solar-pro-3",
          "value": "upstage/solar-pro-3"
        },
        {
          "name": "writer/palmyra-x5",
          "value": "writer/palmyra-x5"
        },
        {
          "name": "x-ai/grok-4.20",
          "value": "x-ai/grok-4.20"
        },
        {
          "name": "x-ai/grok-4.20-multi-agent",
          "value": "x-ai/grok-4.20-multi-agent"
        },
        {
          "name": "x-ai/grok-4.3",
          "value": "x-ai/grok-4.3"
        },
        {
          "name": "x-ai/grok-build-0.1",
          "value": "x-ai/grok-build-0.1"
        },
        {
          "name": "xiaomi/mimo-v2.5",
          "value": "xiaomi/mimo-v2.5"
        },
        {
          "name": "xiaomi/mimo-v2.5-pro",
          "value": "xiaomi/mimo-v2.5-pro"
        },
        {
          "name": "z-ai/glm-4.5",
          "value": "z-ai/glm-4.5"
        },
        {
          "name": "z-ai/glm-4.5-air",
          "value": "z-ai/glm-4.5-air"
        },
        {
          "name": "z-ai/glm-4.5v",
          "value": "z-ai/glm-4.5v"
        },
        {
          "name": "z-ai/glm-4.6",
          "value": "z-ai/glm-4.6"
        },
        {
          "name": "z-ai/glm-4.6v",
          "value": "z-ai/glm-4.6v"
        },
        {
          "name": "z-ai/glm-4.7",
          "value": "z-ai/glm-4.7"
        },
        {
          "name": "z-ai/glm-4.7-flash",
          "value": "z-ai/glm-4.7-flash"
        },
        {
          "name": "z-ai/glm-5",
          "value": "z-ai/glm-5"
        },
        {
          "name": "z-ai/glm-5-turbo",
          "value": "z-ai/glm-5-turbo"
        },
        {
          "name": "z-ai/glm-5.1",
          "value": "z-ai/glm-5.1"
        },
        {
          "name": "z-ai/glm-5.2",
          "value": "z-ai/glm-5.2"
        },
        {
          "name": "z-ai/glm-5v-turbo",
          "value": "z-ai/glm-5v-turbo"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "medium",
      "description": "Reasoning effort for models that support it",
      "id": "reasoning_effort",
      "name": "Reasoning Effort",
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
          "name": "Extra high",
          "value": "xhigh"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "0",
      "description": "Extended thinking budget for models that support it",
      "id": "thinking_budget",
      "name": "Thinking Budget",
      "options": [
        {
          "name": "Off",
          "value": "0"
        },
        {
          "name": "1,024 tokens",
          "value": "1024"
        },
        {
          "name": "4,096 tokens",
          "value": "4096"
        },
        {
          "name": "8,192 tokens",
          "value": "8192"
        },
        {
          "name": "16,384 tokens",
          "value": "16384"
        },
        {
          "name": "32,768 tokens",
          "value": "32768"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "act",
  "currentModelId": "anthropic/claude-sonnet-4.5",
  "currentReasoningEffortId": "0",
  "id": "dirac",
  "models": [
    {
      "id": "~anthropic/claude-fable-latest",
      "name": "~anthropic/claude-fable-latest"
    },
    {
      "id": "~anthropic/claude-haiku-latest",
      "name": "~anthropic/claude-haiku-latest"
    },
    {
      "id": "~anthropic/claude-opus-latest",
      "name": "~anthropic/claude-opus-latest"
    },
    {
      "id": "~anthropic/claude-sonnet-latest",
      "name": "~anthropic/claude-sonnet-latest"
    },
    {
      "id": "~google/gemini-flash-latest",
      "name": "~google/gemini-flash-latest"
    },
    {
      "id": "~google/gemini-pro-latest",
      "name": "~google/gemini-pro-latest"
    },
    {
      "id": "~moonshotai/kimi-latest",
      "name": "~moonshotai/kimi-latest"
    },
    {
      "id": "~openai/gpt-latest",
      "name": "~openai/gpt-latest"
    },
    {
      "id": "~openai/gpt-mini-latest",
      "name": "~openai/gpt-mini-latest"
    },
    {
      "id": "ai21/jamba-large-1.7",
      "name": "ai21/jamba-large-1.7"
    },
    {
      "id": "aion-labs/aion-1.0",
      "name": "aion-labs/aion-1.0"
    },
    {
      "id": "aion-labs/aion-1.0-mini",
      "name": "aion-labs/aion-1.0-mini"
    },
    {
      "id": "aion-labs/aion-2.0",
      "name": "aion-labs/aion-2.0"
    },
    {
      "id": "aion-labs/aion-rp-llama-3.1-8b",
      "name": "aion-labs/aion-rp-llama-3.1-8b"
    },
    {
      "id": "allenai/olmo-3-32b-think",
      "name": "allenai/olmo-3-32b-think"
    },
    {
      "id": "amazon/nova-2-lite-v1",
      "name": "amazon/nova-2-lite-v1"
    },
    {
      "id": "amazon/nova-lite-v1",
      "name": "amazon/nova-lite-v1"
    },
    {
      "id": "amazon/nova-micro-v1",
      "name": "amazon/nova-micro-v1"
    },
    {
      "id": "amazon/nova-premier-v1",
      "name": "amazon/nova-premier-v1"
    },
    {
      "id": "amazon/nova-pro-v1",
      "name": "amazon/nova-pro-v1"
    },
    {
      "id": "anthracite-org/magnum-v4-72b",
      "name": "anthracite-org/magnum-v4-72b"
    },
    {
      "id": "anthropic/claude-3-haiku",
      "name": "anthropic/claude-3-haiku"
    },
    {
      "id": "anthropic/claude-fable-5",
      "name": "anthropic/claude-fable-5"
    },
    {
      "id": "anthropic/claude-haiku-4.5",
      "name": "anthropic/claude-haiku-4.5"
    },
    {
      "id": "anthropic/claude-opus-4",
      "name": "anthropic/claude-opus-4"
    },
    {
      "id": "anthropic/claude-opus-4.1",
      "name": "anthropic/claude-opus-4.1"
    },
    {
      "id": "anthropic/claude-opus-4.5",
      "name": "anthropic/claude-opus-4.5"
    },
    {
      "id": "anthropic/claude-opus-4.6",
      "name": "anthropic/claude-opus-4.6"
    },
    {
      "id": "anthropic/claude-opus-4.6-fast",
      "name": "anthropic/claude-opus-4.6-fast"
    },
    {
      "id": "anthropic/claude-opus-4.7",
      "name": "anthropic/claude-opus-4.7"
    },
    {
      "id": "anthropic/claude-opus-4.7-fast",
      "name": "anthropic/claude-opus-4.7-fast"
    },
    {
      "id": "anthropic/claude-opus-4.8",
      "name": "anthropic/claude-opus-4.8"
    },
    {
      "id": "anthropic/claude-opus-4.8-fast",
      "name": "anthropic/claude-opus-4.8-fast"
    },
    {
      "id": "anthropic/claude-sonnet-4",
      "name": "anthropic/claude-sonnet-4"
    },
    {
      "id": "anthropic/claude-sonnet-4.5",
      "name": "anthropic/claude-sonnet-4.5"
    },
    {
      "id": "anthropic/claude-sonnet-4.6",
      "name": "anthropic/claude-sonnet-4.6"
    },
    {
      "id": "arcee-ai/coder-large",
      "name": "arcee-ai/coder-large"
    },
    {
      "id": "arcee-ai/trinity-large-thinking",
      "name": "arcee-ai/trinity-large-thinking"
    },
    {
      "id": "arcee-ai/trinity-mini",
      "name": "arcee-ai/trinity-mini"
    },
    {
      "id": "arcee-ai/virtuoso-large",
      "name": "arcee-ai/virtuoso-large"
    },
    {
      "id": "baidu/ernie-4.5-vl-424b-a47b",
      "name": "baidu/ernie-4.5-vl-424b-a47b"
    },
    {
      "id": "bytedance-seed/seed-1.6",
      "name": "bytedance-seed/seed-1.6"
    },
    {
      "id": "bytedance-seed/seed-1.6-flash",
      "name": "bytedance-seed/seed-1.6-flash"
    },
    {
      "id": "bytedance-seed/seed-2.0-lite",
      "name": "bytedance-seed/seed-2.0-lite"
    },
    {
      "id": "bytedance-seed/seed-2.0-mini",
      "name": "bytedance-seed/seed-2.0-mini"
    },
    {
      "id": "bytedance/ui-tars-1.5-7b",
      "name": "bytedance/ui-tars-1.5-7b"
    },
    {
      "id": "cognitivecomputations/dolphin-mistral-24b-venice-edition:free",
      "name": "cognitivecomputations/dolphin-mistral-24b-venice-edition:free"
    },
    {
      "id": "cohere/command-a",
      "name": "cohere/command-a"
    },
    {
      "id": "cohere/command-r-08-2024",
      "name": "cohere/command-r-08-2024"
    },
    {
      "id": "cohere/command-r-plus-08-2024",
      "name": "cohere/command-r-plus-08-2024"
    },
    {
      "id": "cohere/command-r7b-12-2024",
      "name": "cohere/command-r7b-12-2024"
    },
    {
      "id": "cohere/north-mini-code:free",
      "name": "cohere/north-mini-code:free"
    },
    {
      "id": "deepcogito/cogito-v2.1-671b",
      "name": "deepcogito/cogito-v2.1-671b"
    },
    {
      "id": "deepseek/deepseek-chat",
      "name": "deepseek/deepseek-chat"
    },
    {
      "id": "deepseek/deepseek-chat-v3-0324",
      "name": "deepseek/deepseek-chat-v3-0324"
    },
    {
      "id": "deepseek/deepseek-chat-v3.1",
      "name": "deepseek/deepseek-chat-v3.1"
    },
    {
      "id": "deepseek/deepseek-r1",
      "name": "deepseek/deepseek-r1"
    },
    {
      "id": "deepseek/deepseek-r1-0528",
      "name": "deepseek/deepseek-r1-0528"
    },
    {
      "id": "deepseek/deepseek-r1-distill-llama-70b",
      "name": "deepseek/deepseek-r1-distill-llama-70b"
    },
    {
      "id": "deepseek/deepseek-v3.1-terminus",
      "name": "deepseek/deepseek-v3.1-terminus"
    },
    {
      "id": "deepseek/deepseek-v3.2",
      "name": "deepseek/deepseek-v3.2"
    },
    {
      "id": "deepseek/deepseek-v3.2-exp",
      "name": "deepseek/deepseek-v3.2-exp"
    },
    {
      "id": "deepseek/deepseek-v4-flash",
      "name": "deepseek/deepseek-v4-flash"
    },
    {
      "id": "deepseek/deepseek-v4-pro",
      "name": "deepseek/deepseek-v4-pro"
    },
    {
      "id": "google/gemini-2.5-flash",
      "name": "google/gemini-2.5-flash"
    },
    {
      "id": "google/gemini-2.5-flash-image",
      "name": "google/gemini-2.5-flash-image"
    },
    {
      "id": "google/gemini-2.5-flash-lite",
      "name": "google/gemini-2.5-flash-lite"
    },
    {
      "id": "google/gemini-2.5-flash-lite-preview-09-2025",
      "name": "google/gemini-2.5-flash-lite-preview-09-2025"
    },
    {
      "id": "google/gemini-2.5-pro",
      "name": "google/gemini-2.5-pro"
    },
    {
      "id": "google/gemini-2.5-pro-preview",
      "name": "google/gemini-2.5-pro-preview"
    },
    {
      "id": "google/gemini-2.5-pro-preview-05-06",
      "name": "google/gemini-2.5-pro-preview-05-06"
    },
    {
      "id": "google/gemini-3-flash-preview",
      "name": "google/gemini-3-flash-preview"
    },
    {
      "id": "google/gemini-3-pro-image",
      "name": "google/gemini-3-pro-image"
    },
    {
      "id": "google/gemini-3-pro-image-preview",
      "name": "google/gemini-3-pro-image-preview"
    },
    {
      "id": "google/gemini-3.1-flash-image",
      "name": "google/gemini-3.1-flash-image"
    },
    {
      "id": "google/gemini-3.1-flash-image-preview",
      "name": "google/gemini-3.1-flash-image-preview"
    },
    {
      "id": "google/gemini-3.1-flash-lite",
      "name": "google/gemini-3.1-flash-lite"
    },
    {
      "id": "google/gemini-3.1-flash-lite-preview",
      "name": "google/gemini-3.1-flash-lite-preview"
    },
    {
      "id": "google/gemini-3.1-pro-preview",
      "name": "google/gemini-3.1-pro-preview"
    },
    {
      "id": "google/gemini-3.1-pro-preview-customtools",
      "name": "google/gemini-3.1-pro-preview-customtools"
    },
    {
      "id": "google/gemini-3.5-flash",
      "name": "google/gemini-3.5-flash"
    },
    {
      "id": "google/gemma-2-27b-it",
      "name": "google/gemma-2-27b-it"
    },
    {
      "id": "google/gemma-3-12b-it",
      "name": "google/gemma-3-12b-it"
    },
    {
      "id": "google/gemma-3-27b-it",
      "name": "google/gemma-3-27b-it"
    },
    {
      "id": "google/gemma-3-4b-it",
      "name": "google/gemma-3-4b-it"
    },
    {
      "id": "google/gemma-3n-e4b-it",
      "name": "google/gemma-3n-e4b-it"
    },
    {
      "id": "google/gemma-4-26b-a4b-it",
      "name": "google/gemma-4-26b-a4b-it"
    },
    {
      "id": "google/gemma-4-26b-a4b-it:free",
      "name": "google/gemma-4-26b-a4b-it:free"
    },
    {
      "id": "google/gemma-4-31b-it",
      "name": "google/gemma-4-31b-it"
    },
    {
      "id": "google/gemma-4-31b-it:free",
      "name": "google/gemma-4-31b-it:free"
    },
    {
      "id": "google/lyria-3-clip-preview",
      "name": "google/lyria-3-clip-preview"
    },
    {
      "id": "google/lyria-3-pro-preview",
      "name": "google/lyria-3-pro-preview"
    },
    {
      "id": "gryphe/mythomax-l2-13b",
      "name": "gryphe/mythomax-l2-13b"
    },
    {
      "id": "ibm-granite/granite-4.0-h-micro",
      "name": "ibm-granite/granite-4.0-h-micro"
    },
    {
      "id": "ibm-granite/granite-4.1-8b",
      "name": "ibm-granite/granite-4.1-8b"
    },
    {
      "id": "inception/mercury-2",
      "name": "inception/mercury-2"
    },
    {
      "id": "inclusionai/ling-2.6-1t",
      "name": "inclusionai/ling-2.6-1t"
    },
    {
      "id": "inclusionai/ling-2.6-flash",
      "name": "inclusionai/ling-2.6-flash"
    },
    {
      "id": "inclusionai/ring-2.6-1t",
      "name": "inclusionai/ring-2.6-1t"
    },
    {
      "id": "inflection/inflection-3-pi",
      "name": "inflection/inflection-3-pi"
    },
    {
      "id": "inflection/inflection-3-productivity",
      "name": "inflection/inflection-3-productivity"
    },
    {
      "id": "kwaipilot/kat-coder-pro-v2",
      "name": "kwaipilot/kat-coder-pro-v2"
    },
    {
      "id": "liquid/lfm-2-24b-a2b",
      "name": "liquid/lfm-2-24b-a2b"
    },
    {
      "id": "liquid/lfm-2.5-1.2b-instruct:free",
      "name": "liquid/lfm-2.5-1.2b-instruct:free"
    },
    {
      "id": "liquid/lfm-2.5-1.2b-thinking:free",
      "name": "liquid/lfm-2.5-1.2b-thinking:free"
    },
    {
      "id": "mancer/weaver",
      "name": "mancer/weaver"
    },
    {
      "id": "meta-llama/llama-3-8b-instruct",
      "name": "meta-llama/llama-3-8b-instruct"
    },
    {
      "id": "meta-llama/llama-3.1-70b-instruct",
      "name": "meta-llama/llama-3.1-70b-instruct"
    },
    {
      "id": "meta-llama/llama-3.1-8b-instruct",
      "name": "meta-llama/llama-3.1-8b-instruct"
    },
    {
      "id": "meta-llama/llama-3.2-11b-vision-instruct",
      "name": "meta-llama/llama-3.2-11b-vision-instruct"
    },
    {
      "id": "meta-llama/llama-3.2-1b-instruct",
      "name": "meta-llama/llama-3.2-1b-instruct"
    },
    {
      "id": "meta-llama/llama-3.2-3b-instruct",
      "name": "meta-llama/llama-3.2-3b-instruct"
    },
    {
      "id": "meta-llama/llama-3.2-3b-instruct:free",
      "name": "meta-llama/llama-3.2-3b-instruct:free"
    },
    {
      "id": "meta-llama/llama-3.3-70b-instruct",
      "name": "meta-llama/llama-3.3-70b-instruct"
    },
    {
      "id": "meta-llama/llama-3.3-70b-instruct:free",
      "name": "meta-llama/llama-3.3-70b-instruct:free"
    },
    {
      "id": "meta-llama/llama-4-maverick",
      "name": "meta-llama/llama-4-maverick"
    },
    {
      "id": "meta-llama/llama-4-scout",
      "name": "meta-llama/llama-4-scout"
    },
    {
      "id": "meta-llama/llama-guard-4-12b",
      "name": "meta-llama/llama-guard-4-12b"
    },
    {
      "id": "microsoft/phi-4",
      "name": "microsoft/phi-4"
    },
    {
      "id": "microsoft/phi-4-mini-instruct",
      "name": "microsoft/phi-4-mini-instruct"
    },
    {
      "id": "microsoft/wizardlm-2-8x22b",
      "name": "microsoft/wizardlm-2-8x22b"
    },
    {
      "id": "minimax/minimax-01",
      "name": "minimax/minimax-01"
    },
    {
      "id": "minimax/minimax-m1",
      "name": "minimax/minimax-m1"
    },
    {
      "id": "minimax/minimax-m2",
      "name": "minimax/minimax-m2"
    },
    {
      "id": "minimax/minimax-m2-her",
      "name": "minimax/minimax-m2-her"
    },
    {
      "id": "minimax/minimax-m2.1",
      "name": "minimax/minimax-m2.1"
    },
    {
      "id": "minimax/minimax-m2.5",
      "name": "minimax/minimax-m2.5"
    },
    {
      "id": "minimax/minimax-m2.7",
      "name": "minimax/minimax-m2.7"
    },
    {
      "id": "minimax/minimax-m3",
      "name": "minimax/minimax-m3"
    },
    {
      "id": "mistralai/codestral-2508",
      "name": "mistralai/codestral-2508"
    },
    {
      "id": "mistralai/devstral-2512",
      "name": "mistralai/devstral-2512"
    },
    {
      "id": "mistralai/ministral-14b-2512",
      "name": "mistralai/ministral-14b-2512"
    },
    {
      "id": "mistralai/ministral-3b-2512",
      "name": "mistralai/ministral-3b-2512"
    },
    {
      "id": "mistralai/ministral-8b-2512",
      "name": "mistralai/ministral-8b-2512"
    },
    {
      "id": "mistralai/mistral-large",
      "name": "mistralai/mistral-large"
    },
    {
      "id": "mistralai/mistral-large-2407",
      "name": "mistralai/mistral-large-2407"
    },
    {
      "id": "mistralai/mistral-large-2512",
      "name": "mistralai/mistral-large-2512"
    },
    {
      "id": "mistralai/mistral-medium-3",
      "name": "mistralai/mistral-medium-3"
    },
    {
      "id": "mistralai/mistral-medium-3-5",
      "name": "mistralai/mistral-medium-3-5"
    },
    {
      "id": "mistralai/mistral-medium-3.1",
      "name": "mistralai/mistral-medium-3.1"
    },
    {
      "id": "mistralai/mistral-nemo",
      "name": "mistralai/mistral-nemo"
    },
    {
      "id": "mistralai/mistral-saba",
      "name": "mistralai/mistral-saba"
    },
    {
      "id": "mistralai/mistral-small-24b-instruct-2501",
      "name": "mistralai/mistral-small-24b-instruct-2501"
    },
    {
      "id": "mistralai/mistral-small-2603",
      "name": "mistralai/mistral-small-2603"
    },
    {
      "id": "mistralai/mistral-small-3.1-24b-instruct",
      "name": "mistralai/mistral-small-3.1-24b-instruct"
    },
    {
      "id": "mistralai/mistral-small-3.2-24b-instruct",
      "name": "mistralai/mistral-small-3.2-24b-instruct"
    },
    {
      "id": "mistralai/mixtral-8x22b-instruct",
      "name": "mistralai/mixtral-8x22b-instruct"
    },
    {
      "id": "mistralai/voxtral-small-24b-2507",
      "name": "mistralai/voxtral-small-24b-2507"
    },
    {
      "id": "moonshotai/kimi-k2",
      "name": "moonshotai/kimi-k2"
    },
    {
      "id": "moonshotai/kimi-k2-0905",
      "name": "moonshotai/kimi-k2-0905"
    },
    {
      "id": "moonshotai/kimi-k2-thinking",
      "name": "moonshotai/kimi-k2-thinking"
    },
    {
      "id": "moonshotai/kimi-k2.5",
      "name": "moonshotai/kimi-k2.5"
    },
    {
      "id": "moonshotai/kimi-k2.6",
      "name": "moonshotai/kimi-k2.6"
    },
    {
      "id": "moonshotai/kimi-k2.7-code",
      "name": "moonshotai/kimi-k2.7-code"
    },
    {
      "id": "morph/morph-v3-fast",
      "name": "morph/morph-v3-fast"
    },
    {
      "id": "morph/morph-v3-large",
      "name": "morph/morph-v3-large"
    },
    {
      "id": "nex-agi/nex-n2-pro",
      "name": "nex-agi/nex-n2-pro"
    },
    {
      "id": "nousresearch/hermes-3-llama-3.1-405b",
      "name": "nousresearch/hermes-3-llama-3.1-405b"
    },
    {
      "id": "nousresearch/hermes-3-llama-3.1-405b:free",
      "name": "nousresearch/hermes-3-llama-3.1-405b:free"
    },
    {
      "id": "nousresearch/hermes-3-llama-3.1-70b",
      "name": "nousresearch/hermes-3-llama-3.1-70b"
    },
    {
      "id": "nousresearch/hermes-4-405b",
      "name": "nousresearch/hermes-4-405b"
    },
    {
      "id": "nousresearch/hermes-4-70b",
      "name": "nousresearch/hermes-4-70b"
    },
    {
      "id": "nvidia/llama-3.3-nemotron-super-49b-v1.5",
      "name": "nvidia/llama-3.3-nemotron-super-49b-v1.5"
    },
    {
      "id": "nvidia/nemotron-3-nano-30b-a3b",
      "name": "nvidia/nemotron-3-nano-30b-a3b"
    },
    {
      "id": "nvidia/nemotron-3-nano-30b-a3b:free",
      "name": "nvidia/nemotron-3-nano-30b-a3b:free"
    },
    {
      "id": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
      "name": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free"
    },
    {
      "id": "nvidia/nemotron-3-super-120b-a12b",
      "name": "nvidia/nemotron-3-super-120b-a12b"
    },
    {
      "id": "nvidia/nemotron-3-super-120b-a12b:free",
      "name": "nvidia/nemotron-3-super-120b-a12b:free"
    },
    {
      "id": "nvidia/nemotron-3-ultra-550b-a55b",
      "name": "nvidia/nemotron-3-ultra-550b-a55b"
    },
    {
      "id": "nvidia/nemotron-3-ultra-550b-a55b:free",
      "name": "nvidia/nemotron-3-ultra-550b-a55b:free"
    },
    {
      "id": "nvidia/nemotron-3.5-content-safety:free",
      "name": "nvidia/nemotron-3.5-content-safety:free"
    },
    {
      "id": "nvidia/nemotron-nano-12b-v2-vl:free",
      "name": "nvidia/nemotron-nano-12b-v2-vl:free"
    },
    {
      "id": "nvidia/nemotron-nano-9b-v2:free",
      "name": "nvidia/nemotron-nano-9b-v2:free"
    },
    {
      "id": "openai/gpt-3.5-turbo",
      "name": "openai/gpt-3.5-turbo"
    },
    {
      "id": "openai/gpt-3.5-turbo-0613",
      "name": "openai/gpt-3.5-turbo-0613"
    },
    {
      "id": "openai/gpt-3.5-turbo-16k",
      "name": "openai/gpt-3.5-turbo-16k"
    },
    {
      "id": "openai/gpt-3.5-turbo-instruct",
      "name": "openai/gpt-3.5-turbo-instruct"
    },
    {
      "id": "openai/gpt-4",
      "name": "openai/gpt-4"
    },
    {
      "id": "openai/gpt-4-turbo",
      "name": "openai/gpt-4-turbo"
    },
    {
      "id": "openai/gpt-4-turbo-preview",
      "name": "openai/gpt-4-turbo-preview"
    },
    {
      "id": "openai/gpt-4.1",
      "name": "openai/gpt-4.1"
    },
    {
      "id": "openai/gpt-4.1-mini",
      "name": "openai/gpt-4.1-mini"
    },
    {
      "id": "openai/gpt-4.1-nano",
      "name": "openai/gpt-4.1-nano"
    },
    {
      "id": "openai/gpt-4o",
      "name": "openai/gpt-4o"
    },
    {
      "id": "openai/gpt-4o-2024-05-13",
      "name": "openai/gpt-4o-2024-05-13"
    },
    {
      "id": "openai/gpt-4o-2024-08-06",
      "name": "openai/gpt-4o-2024-08-06"
    },
    {
      "id": "openai/gpt-4o-2024-11-20",
      "name": "openai/gpt-4o-2024-11-20"
    },
    {
      "id": "openai/gpt-4o-mini",
      "name": "openai/gpt-4o-mini"
    },
    {
      "id": "openai/gpt-4o-mini-2024-07-18",
      "name": "openai/gpt-4o-mini-2024-07-18"
    },
    {
      "id": "openai/gpt-4o-mini-search-preview",
      "name": "openai/gpt-4o-mini-search-preview"
    },
    {
      "id": "openai/gpt-4o-search-preview",
      "name": "openai/gpt-4o-search-preview"
    },
    {
      "id": "openai/gpt-5",
      "name": "openai/gpt-5"
    },
    {
      "id": "openai/gpt-5-chat",
      "name": "openai/gpt-5-chat"
    },
    {
      "id": "openai/gpt-5-codex",
      "name": "openai/gpt-5-codex"
    },
    {
      "id": "openai/gpt-5-image",
      "name": "openai/gpt-5-image"
    },
    {
      "id": "openai/gpt-5-image-mini",
      "name": "openai/gpt-5-image-mini"
    },
    {
      "id": "openai/gpt-5-mini",
      "name": "openai/gpt-5-mini"
    },
    {
      "id": "openai/gpt-5-nano",
      "name": "openai/gpt-5-nano"
    },
    {
      "id": "openai/gpt-5-pro",
      "name": "openai/gpt-5-pro"
    },
    {
      "id": "openai/gpt-5.1",
      "name": "openai/gpt-5.1"
    },
    {
      "id": "openai/gpt-5.1-chat",
      "name": "openai/gpt-5.1-chat"
    },
    {
      "id": "openai/gpt-5.1-codex",
      "name": "openai/gpt-5.1-codex"
    },
    {
      "id": "openai/gpt-5.1-codex-max",
      "name": "openai/gpt-5.1-codex-max"
    },
    {
      "id": "openai/gpt-5.1-codex-mini",
      "name": "openai/gpt-5.1-codex-mini"
    },
    {
      "id": "openai/gpt-5.2",
      "name": "openai/gpt-5.2"
    },
    {
      "id": "openai/gpt-5.2-chat",
      "name": "openai/gpt-5.2-chat"
    },
    {
      "id": "openai/gpt-5.2-codex",
      "name": "openai/gpt-5.2-codex"
    },
    {
      "id": "openai/gpt-5.2-pro",
      "name": "openai/gpt-5.2-pro"
    },
    {
      "id": "openai/gpt-5.3-chat",
      "name": "openai/gpt-5.3-chat"
    },
    {
      "id": "openai/gpt-5.3-codex",
      "name": "openai/gpt-5.3-codex"
    },
    {
      "id": "openai/gpt-5.4",
      "name": "openai/gpt-5.4"
    },
    {
      "id": "openai/gpt-5.4-image-2",
      "name": "openai/gpt-5.4-image-2"
    },
    {
      "id": "openai/gpt-5.4-mini",
      "name": "openai/gpt-5.4-mini"
    },
    {
      "id": "openai/gpt-5.4-nano",
      "name": "openai/gpt-5.4-nano"
    },
    {
      "id": "openai/gpt-5.4-pro",
      "name": "openai/gpt-5.4-pro"
    },
    {
      "id": "openai/gpt-5.5",
      "name": "openai/gpt-5.5"
    },
    {
      "id": "openai/gpt-5.5-pro",
      "name": "openai/gpt-5.5-pro"
    },
    {
      "id": "openai/gpt-audio",
      "name": "openai/gpt-audio"
    },
    {
      "id": "openai/gpt-audio-mini",
      "name": "openai/gpt-audio-mini"
    },
    {
      "id": "openai/gpt-chat-latest",
      "name": "openai/gpt-chat-latest"
    },
    {
      "id": "openai/gpt-oss-120b",
      "name": "openai/gpt-oss-120b"
    },
    {
      "id": "openai/gpt-oss-120b:free",
      "name": "openai/gpt-oss-120b:free"
    },
    {
      "id": "openai/gpt-oss-20b",
      "name": "openai/gpt-oss-20b"
    },
    {
      "id": "openai/gpt-oss-20b:free",
      "name": "openai/gpt-oss-20b:free"
    },
    {
      "id": "openai/gpt-oss-safeguard-20b",
      "name": "openai/gpt-oss-safeguard-20b"
    },
    {
      "id": "openai/o1",
      "name": "openai/o1"
    },
    {
      "id": "openai/o1-pro",
      "name": "openai/o1-pro"
    },
    {
      "id": "openai/o3",
      "name": "openai/o3"
    },
    {
      "id": "openai/o3-deep-research",
      "name": "openai/o3-deep-research"
    },
    {
      "id": "openai/o3-mini",
      "name": "openai/o3-mini"
    },
    {
      "id": "openai/o3-mini-high",
      "name": "openai/o3-mini-high"
    },
    {
      "id": "openai/o3-pro",
      "name": "openai/o3-pro"
    },
    {
      "id": "openai/o4-mini",
      "name": "openai/o4-mini"
    },
    {
      "id": "openai/o4-mini-deep-research",
      "name": "openai/o4-mini-deep-research"
    },
    {
      "id": "openai/o4-mini-high",
      "name": "openai/o4-mini-high"
    },
    {
      "id": "openrouter/auto",
      "name": "openrouter/auto"
    },
    {
      "id": "openrouter/bodybuilder",
      "name": "openrouter/bodybuilder"
    },
    {
      "id": "openrouter/free",
      "name": "openrouter/free"
    },
    {
      "id": "openrouter/fusion",
      "name": "openrouter/fusion"
    },
    {
      "id": "openrouter/owl-alpha",
      "name": "openrouter/owl-alpha"
    },
    {
      "id": "openrouter/pareto-code",
      "name": "openrouter/pareto-code"
    },
    {
      "id": "perceptron/perceptron-mk1",
      "name": "perceptron/perceptron-mk1"
    },
    {
      "id": "perplexity/sonar",
      "name": "perplexity/sonar"
    },
    {
      "id": "perplexity/sonar-deep-research",
      "name": "perplexity/sonar-deep-research"
    },
    {
      "id": "perplexity/sonar-pro",
      "name": "perplexity/sonar-pro"
    },
    {
      "id": "perplexity/sonar-pro-search",
      "name": "perplexity/sonar-pro-search"
    },
    {
      "id": "perplexity/sonar-reasoning-pro",
      "name": "perplexity/sonar-reasoning-pro"
    },
    {
      "id": "poolside/laguna-m.1",
      "name": "poolside/laguna-m.1"
    },
    {
      "id": "poolside/laguna-m.1:free",
      "name": "poolside/laguna-m.1:free"
    },
    {
      "id": "poolside/laguna-xs.2",
      "name": "poolside/laguna-xs.2"
    },
    {
      "id": "poolside/laguna-xs.2:free",
      "name": "poolside/laguna-xs.2:free"
    },
    {
      "id": "qwen/qwen-2.5-72b-instruct",
      "name": "qwen/qwen-2.5-72b-instruct"
    },
    {
      "id": "qwen/qwen-2.5-7b-instruct",
      "name": "qwen/qwen-2.5-7b-instruct"
    },
    {
      "id": "qwen/qwen-2.5-coder-32b-instruct",
      "name": "qwen/qwen-2.5-coder-32b-instruct"
    },
    {
      "id": "qwen/qwen-plus",
      "name": "qwen/qwen-plus"
    },
    {
      "id": "qwen/qwen-plus-2025-07-28",
      "name": "qwen/qwen-plus-2025-07-28"
    },
    {
      "id": "qwen/qwen-plus-2025-07-28:thinking",
      "name": "qwen/qwen-plus-2025-07-28:thinking"
    },
    {
      "id": "qwen/qwen2.5-vl-72b-instruct",
      "name": "qwen/qwen2.5-vl-72b-instruct"
    },
    {
      "id": "qwen/qwen3-14b",
      "name": "qwen/qwen3-14b"
    },
    {
      "id": "qwen/qwen3-235b-a22b",
      "name": "qwen/qwen3-235b-a22b"
    },
    {
      "id": "qwen/qwen3-235b-a22b-2507",
      "name": "qwen/qwen3-235b-a22b-2507"
    },
    {
      "id": "qwen/qwen3-235b-a22b-thinking-2507",
      "name": "qwen/qwen3-235b-a22b-thinking-2507"
    },
    {
      "id": "qwen/qwen3-30b-a3b",
      "name": "qwen/qwen3-30b-a3b"
    },
    {
      "id": "qwen/qwen3-30b-a3b-instruct-2507",
      "name": "qwen/qwen3-30b-a3b-instruct-2507"
    },
    {
      "id": "qwen/qwen3-30b-a3b-thinking-2507",
      "name": "qwen/qwen3-30b-a3b-thinking-2507"
    },
    {
      "id": "qwen/qwen3-32b",
      "name": "qwen/qwen3-32b"
    },
    {
      "id": "qwen/qwen3-8b",
      "name": "qwen/qwen3-8b"
    },
    {
      "id": "qwen/qwen3-coder",
      "name": "qwen/qwen3-coder"
    },
    {
      "id": "qwen/qwen3-coder-30b-a3b-instruct",
      "name": "qwen/qwen3-coder-30b-a3b-instruct"
    },
    {
      "id": "qwen/qwen3-coder-flash",
      "name": "qwen/qwen3-coder-flash"
    },
    {
      "id": "qwen/qwen3-coder-next",
      "name": "qwen/qwen3-coder-next"
    },
    {
      "id": "qwen/qwen3-coder-plus",
      "name": "qwen/qwen3-coder-plus"
    },
    {
      "id": "qwen/qwen3-coder:free",
      "name": "qwen/qwen3-coder:free"
    },
    {
      "id": "qwen/qwen3-max",
      "name": "qwen/qwen3-max"
    },
    {
      "id": "qwen/qwen3-max-thinking",
      "name": "qwen/qwen3-max-thinking"
    },
    {
      "id": "qwen/qwen3-next-80b-a3b-instruct",
      "name": "qwen/qwen3-next-80b-a3b-instruct"
    },
    {
      "id": "qwen/qwen3-next-80b-a3b-instruct:free",
      "name": "qwen/qwen3-next-80b-a3b-instruct:free"
    },
    {
      "id": "qwen/qwen3-next-80b-a3b-thinking",
      "name": "qwen/qwen3-next-80b-a3b-thinking"
    },
    {
      "id": "qwen/qwen3-vl-235b-a22b-instruct",
      "name": "qwen/qwen3-vl-235b-a22b-instruct"
    },
    {
      "id": "qwen/qwen3-vl-235b-a22b-thinking",
      "name": "qwen/qwen3-vl-235b-a22b-thinking"
    },
    {
      "id": "qwen/qwen3-vl-30b-a3b-instruct",
      "name": "qwen/qwen3-vl-30b-a3b-instruct"
    },
    {
      "id": "qwen/qwen3-vl-30b-a3b-thinking",
      "name": "qwen/qwen3-vl-30b-a3b-thinking"
    },
    {
      "id": "qwen/qwen3-vl-32b-instruct",
      "name": "qwen/qwen3-vl-32b-instruct"
    },
    {
      "id": "qwen/qwen3-vl-8b-instruct",
      "name": "qwen/qwen3-vl-8b-instruct"
    },
    {
      "id": "qwen/qwen3-vl-8b-thinking",
      "name": "qwen/qwen3-vl-8b-thinking"
    },
    {
      "id": "qwen/qwen3.5-122b-a10b",
      "name": "qwen/qwen3.5-122b-a10b"
    },
    {
      "id": "qwen/qwen3.5-27b",
      "name": "qwen/qwen3.5-27b"
    },
    {
      "id": "qwen/qwen3.5-35b-a3b",
      "name": "qwen/qwen3.5-35b-a3b"
    },
    {
      "id": "qwen/qwen3.5-397b-a17b",
      "name": "qwen/qwen3.5-397b-a17b"
    },
    {
      "id": "qwen/qwen3.5-9b",
      "name": "qwen/qwen3.5-9b"
    },
    {
      "id": "qwen/qwen3.5-flash-02-23",
      "name": "qwen/qwen3.5-flash-02-23"
    },
    {
      "id": "qwen/qwen3.5-plus-02-15",
      "name": "qwen/qwen3.5-plus-02-15"
    },
    {
      "id": "qwen/qwen3.5-plus-20260420",
      "name": "qwen/qwen3.5-plus-20260420"
    },
    {
      "id": "qwen/qwen3.6-27b",
      "name": "qwen/qwen3.6-27b"
    },
    {
      "id": "qwen/qwen3.6-35b-a3b",
      "name": "qwen/qwen3.6-35b-a3b"
    },
    {
      "id": "qwen/qwen3.6-flash",
      "name": "qwen/qwen3.6-flash"
    },
    {
      "id": "qwen/qwen3.6-max-preview",
      "name": "qwen/qwen3.6-max-preview"
    },
    {
      "id": "qwen/qwen3.6-plus",
      "name": "qwen/qwen3.6-plus"
    },
    {
      "id": "qwen/qwen3.7-max",
      "name": "qwen/qwen3.7-max"
    },
    {
      "id": "qwen/qwen3.7-plus",
      "name": "qwen/qwen3.7-plus"
    },
    {
      "id": "rekaai/reka-edge",
      "name": "rekaai/reka-edge"
    },
    {
      "id": "rekaai/reka-flash-3",
      "name": "rekaai/reka-flash-3"
    },
    {
      "id": "relace/relace-apply-3",
      "name": "relace/relace-apply-3"
    },
    {
      "id": "relace/relace-search",
      "name": "relace/relace-search"
    },
    {
      "id": "sakana/fugu-ultra",
      "name": "sakana/fugu-ultra"
    },
    {
      "id": "sao10k/l3-lunaris-8b",
      "name": "sao10k/l3-lunaris-8b"
    },
    {
      "id": "sao10k/l3.1-70b-hanami-x1",
      "name": "sao10k/l3.1-70b-hanami-x1"
    },
    {
      "id": "sao10k/l3.1-euryale-70b",
      "name": "sao10k/l3.1-euryale-70b"
    },
    {
      "id": "sao10k/l3.3-euryale-70b",
      "name": "sao10k/l3.3-euryale-70b"
    },
    {
      "id": "stepfun/step-3.5-flash",
      "name": "stepfun/step-3.5-flash"
    },
    {
      "id": "stepfun/step-3.7-flash",
      "name": "stepfun/step-3.7-flash"
    },
    {
      "id": "switchpoint/router",
      "name": "switchpoint/router"
    },
    {
      "id": "tencent/hunyuan-a13b-instruct",
      "name": "tencent/hunyuan-a13b-instruct"
    },
    {
      "id": "tencent/hy3-preview",
      "name": "tencent/hy3-preview"
    },
    {
      "id": "thedrummer/cydonia-24b-v4.1",
      "name": "thedrummer/cydonia-24b-v4.1"
    },
    {
      "id": "thedrummer/rocinante-12b",
      "name": "thedrummer/rocinante-12b"
    },
    {
      "id": "thedrummer/skyfall-36b-v2",
      "name": "thedrummer/skyfall-36b-v2"
    },
    {
      "id": "thedrummer/unslopnemo-12b",
      "name": "thedrummer/unslopnemo-12b"
    },
    {
      "id": "undi95/remm-slerp-l2-13b",
      "name": "undi95/remm-slerp-l2-13b"
    },
    {
      "id": "upstage/solar-pro-3",
      "name": "upstage/solar-pro-3"
    },
    {
      "id": "writer/palmyra-x5",
      "name": "writer/palmyra-x5"
    },
    {
      "id": "x-ai/grok-4.20",
      "name": "x-ai/grok-4.20"
    },
    {
      "id": "x-ai/grok-4.20-multi-agent",
      "name": "x-ai/grok-4.20-multi-agent"
    },
    {
      "id": "x-ai/grok-4.3",
      "name": "x-ai/grok-4.3"
    },
    {
      "id": "x-ai/grok-build-0.1",
      "name": "x-ai/grok-build-0.1"
    },
    {
      "id": "xiaomi/mimo-v2.5",
      "name": "xiaomi/mimo-v2.5"
    },
    {
      "id": "xiaomi/mimo-v2.5-pro",
      "name": "xiaomi/mimo-v2.5-pro"
    },
    {
      "id": "z-ai/glm-4.5",
      "name": "z-ai/glm-4.5"
    },
    {
      "id": "z-ai/glm-4.5-air",
      "name": "z-ai/glm-4.5-air"
    },
    {
      "id": "z-ai/glm-4.5v",
      "name": "z-ai/glm-4.5v"
    },
    {
      "id": "z-ai/glm-4.6",
      "name": "z-ai/glm-4.6"
    },
    {
      "id": "z-ai/glm-4.6v",
      "name": "z-ai/glm-4.6v"
    },
    {
      "id": "z-ai/glm-4.7",
      "name": "z-ai/glm-4.7"
    },
    {
      "id": "z-ai/glm-4.7-flash",
      "name": "z-ai/glm-4.7-flash"
    },
    {
      "id": "z-ai/glm-5",
      "name": "z-ai/glm-5"
    },
    {
      "id": "z-ai/glm-5-turbo",
      "name": "z-ai/glm-5-turbo"
    },
    {
      "id": "z-ai/glm-5.1",
      "name": "z-ai/glm-5.1"
    },
    {
      "id": "z-ai/glm-5.2",
      "name": "z-ai/glm-5.2"
    },
    {
      "id": "z-ai/glm-5v-turbo",
      "name": "z-ai/glm-5v-turbo"
    }
  ],
  "modes": [
    {
      "description": "Gather information and create a detailed plan",
      "id": "plan",
      "name": "Plan"
    },
    {
      "description": "Execute actions, asking permission for each tool call",
      "id": "act",
      "name": "Act"
    },
    {
      "description": "Execute actions, auto-approving all tool calls",
      "id": "auto",
      "name": "Auto-approve"
    },
    {
      "description": "Execute actions with no safety prompts",
      "id": "yolo",
      "name": "YOLO"
    }
  ],
  "name": "Dirac",
  "protocolVersion": 1,
  "reasoningEfforts": [
    {
      "id": "none",
      "name": "None"
    },
    {
      "id": "low",
      "name": "Low"
    },
    {
      "id": "medium",
      "name": "Medium"
    },
    {
      "id": "high",
      "name": "High"
    },
    {
      "id": "xhigh",
      "name": "Extra high"
    },
    {
      "id": "0",
      "name": "Off"
    },
    {
      "id": "1024",
      "name": "1,024 tokens"
    },
    {
      "id": "4096",
      "name": "4,096 tokens"
    },
    {
      "id": "8192",
      "name": "8,192 tokens"
    },
    {
      "id": "16384",
      "name": "16,384 tokens"
    },
    {
      "id": "32768",
      "name": "32,768 tokens"
    }
  ],
  "version": "0.4.10"
};
