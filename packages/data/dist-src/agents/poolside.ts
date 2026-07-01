import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "_meta": {
      "poolside/compaction_update": true,
      "poolside/early_session_config_options": true,
      "poolside/mcp_settings": true,
      "poolside/rewind": true,
      "poolside/session_delete": true,
      "poolside/session_move": true
    },
    "auth": {
      "logout": {}
    },
    "loadSession": true,
    "mcpCapabilities": {},
    "promptCapabilities": {
      "image": true
    },
    "sessionCapabilities": {
      "close": {},
      "list": {}
    }
  },
  "agentInfo": {
    "name": "pool-acp",
    "title": "Poolside",
    "version": "1.0.7"
  },
  "authMethods": [],
  "commands": [
    {
      "description": "Get a shareable trajectory reference for the current agent session",
      "name": "share"
    },
    {
      "description": "Refresh and list available skills",
      "name": "skills"
    },
    {
      "description": "Show session token usage and context window state",
      "name": "usage"
    },
    {
      "description": "Show local sandbox configuration",
      "name": "sandbox"
    },
    {
      "description": "Manually compact session to free up context. Optional: /compact [guidance]",
      "name": "compact"
    },
    {
      "description": "Show MCP servers, connection status, and tools",
      "name": "mcp"
    },
    {
      "description": "Rename the current session",
      "input": {
        "hint": "new title"
      },
      "name": "rename"
    },
    {
      "description": "Switch to plan mode",
      "name": "plan"
    },
    {
      "_meta": {
        "poolside/slash_command_category": "skill"
      },
      "description": "Guide users through configuring local sandboxing in workspace and/or global settings YAML. Use when users ask to enable sandboxing, configure sandboxing, choose read-only vs read-write sandboxing, set network policy, inspect sandbox settings, or update .poolside/settings.local.yaml or global settings.",
      "name": "configure-sandbox"
    },
    {
      "_meta": {
        "poolside/slash_command_category": "skill"
      },
      "description": "Answer questions about the Poolside `pool` CLI itself — installation, interactive (TUI) mode, automated (`pool exec`) mode, editor integration (`pool acp`), slash commands, keyboard shortcuts, configuration, log locations, managing MCP/ACP servers, login, and update. Triggers on questions like \"how do I install pool\", \"what slash commands do you support\", \"how do I add an MCP server\", \"where are my logs\", \"how do I run pool non-interactively\", \"how do I use pool from Zed/JetBrains/Neovim\".",
      "name": "pool-product-reference"
    },
    {
      "_meta": {
        "poolside/slash_command_category": "skill"
      },
      "description": "Guide for creating skills. Use when the user wants to create (or update) a skill to extend the agent's capabilities with specialized knowledge, workflows, or tool integrations.",
      "name": "skill-creator"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "default",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "description": "Prompts for permission on first use of each tool",
          "name": "Always ask",
          "value": "default"
        },
        {
          "description": "Auto-approves workspace file reads and writes, prompts for everything else",
          "name": "Accept edits",
          "value": "accept-edits"
        },
        {
          "description": "Plan changes without modifying the codebase",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Automatically approves all tool calls without prompting",
          "name": "Allow all",
          "value": "always-allow"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "default",
      "id": "thought_level",
      "name": "Thought level",
      "options": [
        {
          "name": "Default",
          "value": "default"
        },
        {
          "name": "Extra high",
          "value": "xhigh"
        },
        {
          "name": "High",
          "value": "high"
        },
        {
          "name": "Medium",
          "value": "medium"
        },
        {
          "name": "Low",
          "value": "low"
        },
        {
          "name": "Minimal",
          "value": "minimal"
        },
        {
          "name": "None",
          "value": "none"
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
          "description": "probe-dummy-model",
          "name": "probe-dummy-model",
          "value": "probe-dummy-model"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "default",
  "currentModelId": "probe-dummy-model",
  "currentReasoningEffortId": "default",
  "id": "poolside",
  "models": [
    {
      "description": "probe-dummy-model",
      "id": "probe-dummy-model",
      "name": "probe-dummy-model"
    }
  ],
  "modes": [
    {
      "description": "Prompts for permission on first use of each tool",
      "id": "default",
      "name": "Always ask"
    },
    {
      "description": "Auto-approves workspace file reads and writes, prompts for everything else",
      "id": "accept-edits",
      "name": "Accept edits"
    },
    {
      "description": "Plan changes without modifying the codebase",
      "id": "plan",
      "name": "Plan"
    },
    {
      "description": "Automatically approves all tool calls without prompting",
      "id": "always-allow",
      "name": "Allow all"
    }
  ],
  "name": "Poolside",
  "protocolVersion": 1,
  "reasoningEfforts": [
    {
      "id": "default",
      "name": "Default"
    },
    {
      "id": "xhigh",
      "name": "Extra high"
    },
    {
      "id": "high",
      "name": "High"
    },
    {
      "id": "medium",
      "name": "Medium"
    },
    {
      "id": "low",
      "name": "Low"
    },
    {
      "id": "minimal",
      "name": "Minimal"
    },
    {
      "id": "none",
      "name": "None"
    }
  ],
  "version": "1.0.7"
};
