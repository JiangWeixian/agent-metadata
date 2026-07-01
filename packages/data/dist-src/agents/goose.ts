import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "auth": {},
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": false
    },
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "close": {},
      "list": {}
    }
  },
  "agentInfo": {
    "name": "goose",
    "version": "1.39.0"
  },
  "authMethods": [
    {
      "description": "Run `goose configure` to set up your AI provider and API key",
      "id": "goose-provider",
      "name": "Configure Provider"
    }
  ],
  "commands": [
    {
      "description": "List available prompts, optionally filtered by extension",
      "name": "prompts"
    },
    {
      "description": "Execute a prompt or show its info with --info",
      "name": "prompt"
    },
    {
      "description": "Compact the conversation history",
      "name": "compact"
    },
    {
      "description": "Clear the conversation history",
      "name": "clear"
    },
    {
      "description": "List installed skills and other available sources",
      "name": "skills"
    },
    {
      "description": "Check that your Goose setup is working",
      "name": "doctor"
    },
    {
      "description": "Set a goal the agent must satisfy before finishing, or clear with /goal off",
      "name": "goal"
    },
    {
      "description": "Set a goal the agent pursues relentlessly until max_turns, or clear with /grind off",
      "name": "grind"
    },
    {
      "description": "Show session status: model, provider, mode, and token usage",
      "name": "status"
    },
    {
      "description": "Reference goose documentation to create, configure, or explain goose-specific features like recipes, extensions, sessions, and providers. You MUST fetch relevant goose docs before answering. You MUST NOT rely on training data or assumptions for any goose-specific fields, values, names, syntax, or commands.",
      "name": "goose-doc-guide"
    }
  ],
  "configOptions": [
    {
      "currentValue": "openai",
      "id": "provider",
      "name": "Provider",
      "options": [
        {
          "name": "Goose (Default)",
          "value": "goose"
        },
        {
          "name": "Alibaba (Qwen)",
          "value": "alibaba"
        },
        {
          "name": "Amp",
          "value": "amp-acp"
        },
        {
          "name": "Anthropic",
          "value": "anthropic"
        },
        {
          "name": "Atomic Chat",
          "value": "atomic_chat"
        },
        {
          "name": "Avian",
          "value": "avian"
        },
        {
          "name": "Amazon Bedrock",
          "value": "aws_bedrock"
        },
        {
          "name": "Azure OpenAI",
          "value": "azure_openai"
        },
        {
          "name": "Cerebras",
          "value": "cerebras"
        },
        {
          "name": "ChatGPT Codex",
          "value": "chatgpt_codex"
        },
        {
          "name": "Claude Code",
          "value": "claude-acp"
        },
        {
          "name": "Claude Code CLI",
          "value": "claude-code"
        },
        {
          "name": "OpenAI Codex CLI",
          "value": "codex"
        },
        {
          "name": "Codex CLI",
          "value": "codex-acp"
        },
        {
          "name": "GitHub Copilot CLI (ACP)",
          "value": "copilot-acp"
        },
        {
          "name": "Cursor Agent",
          "value": "cursor-agent"
        },
        {
          "name": "DeepSeek",
          "value": "custom_deepseek"
        },
        {
          "name": "Tensorix",
          "value": "custom_tensorix"
        },
        {
          "name": "Databricks",
          "value": "databricks"
        },
        {
          "name": "Databricks AI Gateway",
          "value": "databricks_v2"
        },
        {
          "name": "EmpirioLabs",
          "value": "empiriolabs"
        },
        {
          "name": "FuturMix",
          "value": "futurmix"
        },
        {
          "name": "GCP Vertex AI",
          "value": "gcp_vertex_ai"
        },
        {
          "name": "Gemini CLI",
          "value": "gemini-cli"
        },
        {
          "name": "Gemini",
          "value": "gemini_oauth"
        },
        {
          "name": "GitHub Copilot",
          "value": "github_copilot"
        },
        {
          "name": "Google Gemini (API Key)",
          "value": "google"
        },
        {
          "name": "Groq (d)",
          "value": "groq"
        },
        {
          "name": "Hugging Face",
          "value": "huggingface"
        },
        {
          "name": "Inception",
          "value": "inception"
        },
        {
          "name": "Kimi Code",
          "value": "kimi_code"
        },
        {
          "name": "LiteLLM",
          "value": "litellm"
        },
        {
          "name": "Llama Swap",
          "value": "llama_swap"
        },
        {
          "name": "LM Studio",
          "value": "lmstudio"
        },
        {
          "name": "Local Inference",
          "value": "local"
        },
        {
          "name": "MiniMax",
          "value": "minimax"
        },
        {
          "name": "Mistral AI",
          "value": "mistral"
        },
        {
          "name": "Moonshot",
          "value": "moonshot"
        },
        {
          "name": "NanoGPT",
          "value": "nano-gpt"
        },
        {
          "name": "NEAR AI Cloud",
          "value": "nearai"
        },
        {
          "name": "Novita AI",
          "value": "novita"
        },
        {
          "name": "NVIDIA",
          "value": "nvidia"
        },
        {
          "name": "Ollama",
          "value": "ollama"
        },
        {
          "name": "Ollama Cloud",
          "value": "ollama_cloud"
        },
        {
          "name": "oMLX",
          "value": "omlx"
        },
        {
          "name": "OpenAI",
          "value": "openai"
        },
        {
          "name": "OpenCode Go",
          "value": "opencode_go"
        },
        {
          "name": "OpenRouter",
          "value": "openrouter"
        },
        {
          "name": "OrcaRouter",
          "value": "orcarouter"
        },
        {
          "name": "OVHcloud",
          "value": "ovhcloud"
        },
        {
          "name": "Perplexity",
          "value": "perplexity"
        },
        {
          "name": "Pi",
          "value": "pi-acp"
        },
        {
          "name": "Routstr",
          "value": "routstr"
        },
        {
          "name": "Amazon SageMaker TGI",
          "value": "sagemaker_tgi"
        },
        {
          "name": "SaladCloud AI Gateway",
          "value": "saladcloud"
        },
        {
          "name": "Scaleway",
          "value": "scaleway"
        },
        {
          "name": "Snowflake",
          "value": "snowflake"
        },
        {
          "name": "VMware Tanzu Platform",
          "value": "tanzu_ai"
        },
        {
          "name": "Tetrate Agent Router Service",
          "value": "tetrate"
        },
        {
          "name": "Together AI",
          "value": "together"
        },
        {
          "name": "Venice.ai",
          "value": "venice"
        },
        {
          "name": "Vercel AI Gateway",
          "value": "vercel_ai_gateway"
        },
        {
          "name": "xAI",
          "value": "xai"
        },
        {
          "name": "xAI (SuperGrok Subscription)",
          "value": "xai_oauth"
        },
        {
          "name": "Z.AI",
          "value": "zai"
        },
        {
          "name": "Zhipu AI",
          "value": "zhipu"
        }
      ],
      "type": "select"
    },
    {
      "category": "mode",
      "currentValue": "auto",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "description": "Automatically approve tool calls",
          "name": "auto",
          "value": "auto"
        },
        {
          "description": "Ask before every tool call",
          "name": "approve",
          "value": "approve"
        },
        {
          "description": "Ask only for sensitive tool calls",
          "name": "smart_approve",
          "value": "smart_approve"
        },
        {
          "description": "Chat only, no tool calls",
          "name": "chat",
          "value": "chat"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "probe-dummy-model",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "name": "probe-dummy-model",
          "value": "probe-dummy-model"
        },
        {
          "name": "GPT-4o",
          "value": "gpt-4o"
        },
        {
          "name": "GPT-4o mini",
          "value": "gpt-4o-mini"
        },
        {
          "name": "GPT-4.1",
          "value": "gpt-4.1"
        },
        {
          "name": "GPT-4.1 mini",
          "value": "gpt-4.1-mini"
        },
        {
          "name": "o1",
          "value": "o1"
        },
        {
          "name": "o3",
          "value": "o3"
        },
        {
          "name": "GPT-3.5-turbo",
          "value": "gpt-3.5-turbo"
        },
        {
          "name": "GPT-4 Turbo",
          "value": "gpt-4-turbo"
        },
        {
          "name": "o4-mini",
          "value": "o4-mini"
        },
        {
          "name": "GPT-5",
          "value": "gpt-5"
        },
        {
          "name": "GPT-5 Mini",
          "value": "gpt-5-mini"
        },
        {
          "name": "GPT-5 Nano",
          "value": "gpt-5-nano"
        },
        {
          "name": "GPT-5 Pro",
          "value": "gpt-5-pro"
        },
        {
          "name": "GPT-5-Codex",
          "value": "gpt-5-codex"
        },
        {
          "name": "GPT-5.1",
          "value": "gpt-5.1"
        },
        {
          "name": "GPT-5.1 Codex",
          "value": "gpt-5.1-codex"
        },
        {
          "name": "GPT-5.2",
          "value": "gpt-5.2"
        },
        {
          "name": "GPT-5.2 Codex",
          "value": "gpt-5.2-codex"
        },
        {
          "name": "GPT-5.2 Pro",
          "value": "gpt-5.2-pro"
        },
        {
          "name": "GPT-5.3 Codex",
          "value": "gpt-5.3-codex"
        },
        {
          "name": "GPT-5.4",
          "value": "gpt-5.4"
        },
        {
          "name": "GPT-5.4 mini",
          "value": "gpt-5.4-mini"
        },
        {
          "name": "GPT-5.4 nano",
          "value": "gpt-5.4-nano"
        },
        {
          "name": "GPT-5.4 Pro",
          "value": "gpt-5.4-pro"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "off",
      "description": "Controls reasoning effort for models that support extended thinking.",
      "id": "thinking_effort",
      "name": "Thinking effort",
      "options": [
        {
          "name": "off",
          "value": "off"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "auto",
  "currentModelId": "probe-dummy-model",
  "currentReasoningEffortId": "off",
  "id": "goose",
  "models": [
    {
      "id": "probe-dummy-model",
      "name": "probe-dummy-model"
    },
    {
      "id": "gpt-4o",
      "name": "GPT-4o"
    },
    {
      "id": "gpt-4o-mini",
      "name": "GPT-4o mini"
    },
    {
      "id": "gpt-4.1",
      "name": "GPT-4.1"
    },
    {
      "id": "gpt-4.1-mini",
      "name": "GPT-4.1 mini"
    },
    {
      "id": "o1",
      "name": "o1"
    },
    {
      "id": "o3",
      "name": "o3"
    },
    {
      "id": "gpt-3.5-turbo",
      "name": "GPT-3.5-turbo"
    },
    {
      "id": "gpt-4-turbo",
      "name": "GPT-4 Turbo"
    },
    {
      "id": "o4-mini",
      "name": "o4-mini"
    },
    {
      "id": "gpt-5",
      "name": "GPT-5"
    },
    {
      "id": "gpt-5-mini",
      "name": "GPT-5 Mini"
    },
    {
      "id": "gpt-5-nano",
      "name": "GPT-5 Nano"
    },
    {
      "id": "gpt-5-pro",
      "name": "GPT-5 Pro"
    },
    {
      "id": "gpt-5-codex",
      "name": "GPT-5-Codex"
    },
    {
      "id": "gpt-5.1",
      "name": "GPT-5.1"
    },
    {
      "id": "gpt-5.1-codex",
      "name": "GPT-5.1 Codex"
    },
    {
      "id": "gpt-5.2",
      "name": "GPT-5.2"
    },
    {
      "id": "gpt-5.2-codex",
      "name": "GPT-5.2 Codex"
    },
    {
      "id": "gpt-5.2-pro",
      "name": "GPT-5.2 Pro"
    },
    {
      "id": "gpt-5.3-codex",
      "name": "GPT-5.3 Codex"
    },
    {
      "id": "gpt-5.4",
      "name": "GPT-5.4"
    },
    {
      "id": "gpt-5.4-mini",
      "name": "GPT-5.4 mini"
    },
    {
      "id": "gpt-5.4-nano",
      "name": "GPT-5.4 nano"
    },
    {
      "id": "gpt-5.4-pro",
      "name": "GPT-5.4 Pro"
    }
  ],
  "modes": [
    {
      "description": "Automatically approve tool calls",
      "id": "auto",
      "name": "auto"
    },
    {
      "description": "Ask before every tool call",
      "id": "approve",
      "name": "approve"
    },
    {
      "description": "Ask only for sensitive tool calls",
      "id": "smart_approve",
      "name": "smart_approve"
    },
    {
      "description": "Chat only, no tool calls",
      "id": "chat",
      "name": "chat"
    }
  ],
  "name": "goose",
  "protocolVersion": 1,
  "reasoningEfforts": [
    {
      "id": "off",
      "name": "off"
    }
  ],
  "version": "1.39.0"
};
