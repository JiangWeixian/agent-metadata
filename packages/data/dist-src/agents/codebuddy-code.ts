import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "delegateToolsSupport": true,
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": true
    },
    "promptCapabilities": {
      "embeddedContext": true,
      "image": true
    }
  },
  "agentInfo": {
    "name": "codebuddy-code",
    "version": "2.106.7"
  },
  "authMethods": [
    {
      "description": null,
      "id": "iOA",
      "name": "Login with iOA"
    },
    {
      "description": null,
      "id": "external",
      "name": "Login with Google/Github"
    },
    {
      "description": null,
      "id": "internal",
      "name": "Login with WeChat"
    },
    {
      "description": null,
      "id": "selfhosted",
      "name": "Login with Enterprise Domain"
    }
  ],
  "commands": [
    {
      "description": "Create a branch of the current conversation at this point",
      "input": {
        "hint": "[name]"
      },
      "name": "branch"
    },
    {
      "description": "Ask a quick side question without interrupting the main Agent work",
      "input": {
        "hint": "<question>"
      },
      "name": "btw"
    },
    {
      "description": "Start a fresh conversation (previous chats remain accessible via /resume)",
      "name": "clear"
    },
    {
      "description": "Calculate and display context token distribution",
      "name": "context"
    },
    {
      "description": "Show the total cost and duration of the current session",
      "name": "cost"
    },
    {
      "description": "Diagnose and verify your CodeBuddy installation and settings",
      "name": "doctor"
    },
    {
      "description": "Open the issue feedback page to report bugs or suggest features",
      "name": "feedback"
    },
    {
      "description": "Create a branch of the current conversation at this point (alias for /branch)",
      "input": {
        "hint": "[name]"
      },
      "name": "fork"
    },
    {
      "description": "Manage the remote control gateway. Subcommands: \"status\" to show current status, \"stop\" to stop the gateway, \"token\" to regenerate access token, \"tunnel\" to start with tunnel",
      "name": "gateway"
    },
    {
      "description": "Keep working until a condition is met. Use \"/goal clear\" to stop early. Example: /goal all tests pass",
      "input": {
        "hint": "<condition> | clear"
      },
      "name": "goal"
    },
    {
      "description": "Manage remote control long connection clients (start, stop, status, list)",
      "name": "remote-control"
    },
    {
      "description": "Open keybindings configuration",
      "name": "keybindings"
    },
    {
      "description": "Switch Tencent Cloud CodeBuddy accounts",
      "name": "login"
    },
    {
      "description": "Sign out from your Tencent Cloud CodeBuddy account",
      "name": "logout"
    },
    {
      "description": "Preview the current plan file content",
      "name": "plan"
    },
    {
      "description": "Get comments from a GitHub pull request",
      "name": "pr-comments"
    },
    {
      "description": "View release notes",
      "name": "release-notes"
    },
    {
      "description": "Review a pull request",
      "name": "review"
    },
    {
      "description": "List available skills",
      "name": "skills"
    },
    {
      "description": "Display the current session's todo list",
      "name": "todos"
    },
    {
      "description": "Reload all plugins, skills, agents, hooks, and MCP/LSP servers without restarting",
      "name": "reload-plugins"
    },
    {
      "description": "Validate a plugin directory structure and manifest",
      "input": {
        "hint": "[path]"
      },
      "name": "plugin-validate"
    },
    {
      "description": "List running and saved Dynamic Workflows",
      "name": "workflows"
    },
    {
      "description": "Set the model effort level (low, medium, high, xhigh, max, ultracode)",
      "input": {
        "hint": "[low | medium | high | xhigh | max | ultracode]"
      },
      "name": "effort"
    },
    {
      "description": "[dynamic workflow] Deep research harness — fan-out web searches, fetch sources, adversarially verify claims, synthesize a cited report.",
      "input": {
        "hint": "[args...]"
      },
      "name": "deep-research"
    },
    {
      "description": "Set or list text-to-video models. Use \"list\" to show available models, or specify a model id to switch",
      "input": {
        "hint": "[list | model-id]"
      },
      "name": "model:text-to-video"
    },
    {
      "description": "Set or list image-to-video models. Use \"list\" to show available models, or specify a model id to switch",
      "input": {
        "hint": "[list | model-id]"
      },
      "name": "model:image-to-video"
    },
    {
      "description": "init is analyzing your codebase…",
      "name": "init"
    },
    {
      "description": "Clear conversation history but keep a summary in context. Optional: /compact [instructions for summarization]",
      "name": "compact"
    },
    {
      "description": "Clear conversation history but keep a summary in context. Optional: /compact [instructions for summarization]",
      "name": "_compact"
    },
    {
      "description": "Set up Codebuddy Code's status line UI",
      "name": "statusline"
    },
    {
      "description": "Complete a security review of the pending changes on the current branch",
      "name": "security-review"
    },
    {
      "description": "Create a git commit",
      "name": "commit"
    },
    {
      "description": "Commit, push, and open a PR",
      "name": "commit-push-pr"
    },
    {
      "description": "Generate AI-powered insights about your CodeBuddy Code usage patterns and activity",
      "name": "insights"
    },
    {
      "_meta": {
        "source": "bundled",
        "type": "skill"
      },
      "description": "Run a prompt or slash command on a recurring interval (e.g. /loop 5m /foo, defaults to 10m)",
      "name": "loop"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "default",
      "description": "Controls how the agent requests permission before making changes",
      "id": "mode",
      "name": "Permission Mode",
      "options": [
        {
          "description": "Prompts for permission on first use of each tool",
          "name": "Always Ask",
          "value": "default"
        },
        {
          "description": "Automatically accepts file edit permissions for the session",
          "name": "Accept Edits",
          "value": "acceptEdits"
        },
        {
          "description": "Agent can analyze but not modify files or execute commands",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Skips all permission prompts",
          "name": "Bypass Permissions",
          "value": "bypassPermissions"
        },
        {
          "description": "Skips ALL permission checks including dangerous commands for all agents",
          "name": "Full Access",
          "value": "fullAccess"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "default-model",
      "description": "Select the AI model to use for this session",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "description": "x2.00 credits",
          "name": "Default",
          "value": "default-model"
        },
        {
          "description": "x1.32 credits",
          "name": "Gemini-3.1-Pro",
          "value": "gemini-3.1-pro"
        },
        {
          "description": "x0.33 credits",
          "name": "Gemini-3.0-Flash",
          "value": "gemini-3.0-flash"
        },
        {
          "description": "x0.99 credits",
          "name": "Gemini-3.5-Flash",
          "value": "gemini-3.5-flash"
        },
        {
          "description": "x0.90 credits",
          "name": "Gemini-2.5-Pro",
          "value": "gemini-2.5-pro"
        },
        {
          "description": "x0.22 credits",
          "name": "Gemini-2.5-Flash",
          "value": "gemini-2.5-flash"
        },
        {
          "description": "x0.17 credits",
          "name": "Gemini-3.1-flash-lite",
          "value": "gemini-3.1-flash-lite"
        },
        {
          "description": "x3.31 credits",
          "name": "GPT-5.5",
          "value": "gpt-5.5"
        },
        {
          "description": "x1.65 credits",
          "name": "GPT-5.4",
          "value": "gpt-5.4"
        },
        {
          "description": "x1.25 credits",
          "name": "GPT-5.3-Codex",
          "value": "gpt-5.3-codex"
        },
        {
          "description": "x0.90 credits",
          "name": "GPT-5.1-Codex",
          "value": "gpt-5.1-codex"
        },
        {
          "description": "x0.18 credits",
          "name": "GPT-5.1-Codex-Mini",
          "value": "gpt-5.1-codex-mini"
        },
        {
          "description": "x0.29 credits",
          "name": "DeepSeek-V3.2",
          "value": "deepseek-v3-2-volc"
        },
        {
          "description": "x0.80 credits",
          "name": "GLM-5.0",
          "value": "glm-5.0"
        },
        {
          "description": "x0.45 credits",
          "name": "Kimi-K2.5",
          "value": "kimi-k2.5"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "enabled",
      "description": "Choose reasoning effort level for this session",
      "id": "thought_level",
      "name": "Deep Thinking",
      "options": [
        {
          "description": "Standard response without extended thinking",
          "name": "Off",
          "value": "disabled"
        },
        {
          "description": "Briefest reasoning",
          "name": "Minimal",
          "value": "minimal"
        },
        {
          "description": "Light reasoning",
          "name": "Low",
          "value": "low"
        },
        {
          "description": "Balanced reasoning",
          "name": "Medium",
          "value": "medium"
        },
        {
          "description": "Deep reasoning",
          "name": "High",
          "value": "high"
        },
        {
          "description": "Very deep reasoning",
          "name": "X-High",
          "value": "xhigh"
        },
        {
          "description": "Maximum reasoning effort",
          "name": "Max",
          "value": "max"
        },
        {
          "description": "Use the model default effort",
          "name": "On (default)",
          "value": "enabled"
        }
      ],
      "type": "select"
    },
    {
      "category": "sandbox",
      "currentValue": "false",
      "description": "Run shell commands inside the sandbox-cli isolation layer",
      "id": "sandbox",
      "name": "Sandbox",
      "options": [
        {
          "description": "Bash/PowerShell commands run inside the sandbox and require escalation to touch the host",
          "name": "Sandbox Environment",
          "value": "true"
        },
        {
          "description": "Commands run with full user permissions (no sandbox isolation)",
          "name": "Local Environment",
          "value": "false"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "default",
  "currentModelId": "default-model",
  "currentReasoningEffortId": "enabled",
  "id": "codebuddy-code",
  "models": [
    {
      "description": "x2.00 credits",
      "id": "default-model",
      "name": "Default"
    },
    {
      "description": "x1.32 credits",
      "id": "gemini-3.1-pro",
      "name": "Gemini-3.1-Pro"
    },
    {
      "description": "x0.33 credits",
      "id": "gemini-3.0-flash",
      "name": "Gemini-3.0-Flash"
    },
    {
      "description": "x0.99 credits",
      "id": "gemini-3.5-flash",
      "name": "Gemini-3.5-Flash"
    },
    {
      "description": "x0.90 credits",
      "id": "gemini-2.5-pro",
      "name": "Gemini-2.5-Pro"
    },
    {
      "description": "x0.22 credits",
      "id": "gemini-2.5-flash",
      "name": "Gemini-2.5-Flash"
    },
    {
      "description": "x0.17 credits",
      "id": "gemini-3.1-flash-lite",
      "name": "Gemini-3.1-flash-lite"
    },
    {
      "description": "x3.31 credits",
      "id": "gpt-5.5",
      "name": "GPT-5.5"
    },
    {
      "description": "x1.65 credits",
      "id": "gpt-5.4",
      "name": "GPT-5.4"
    },
    {
      "description": "x1.25 credits",
      "id": "gpt-5.3-codex",
      "name": "GPT-5.3-Codex"
    },
    {
      "description": "x0.90 credits",
      "id": "gpt-5.1-codex",
      "name": "GPT-5.1-Codex"
    },
    {
      "description": "x0.18 credits",
      "id": "gpt-5.1-codex-mini",
      "name": "GPT-5.1-Codex-Mini"
    },
    {
      "description": "x0.29 credits",
      "id": "deepseek-v3-2-volc",
      "name": "DeepSeek-V3.2"
    },
    {
      "description": "x0.80 credits",
      "id": "glm-5.0",
      "name": "GLM-5.0"
    },
    {
      "description": "x0.45 credits",
      "id": "kimi-k2.5",
      "name": "Kimi-K2.5"
    }
  ],
  "modes": [
    {
      "description": "Prompts for permission on first use of each tool",
      "id": "default",
      "name": "Always Ask"
    },
    {
      "description": "Automatically accepts file edit permissions for the session",
      "id": "acceptEdits",
      "name": "Accept Edits"
    },
    {
      "description": "Claude can analyze but not modify files or execute commands",
      "id": "plan",
      "name": "Plan"
    },
    {
      "description": "Skips all permission prompts",
      "id": "bypassPermissions",
      "name": "Bypass Permissions"
    }
  ],
  "name": "Codebuddy Code",
  "protocolVersion": 1,
  "reasoningEfforts": [
    {
      "description": "Standard response without extended thinking",
      "id": "disabled",
      "name": "Off"
    },
    {
      "description": "Briefest reasoning",
      "id": "minimal",
      "name": "Minimal"
    },
    {
      "description": "Light reasoning",
      "id": "low",
      "name": "Low"
    },
    {
      "description": "Balanced reasoning",
      "id": "medium",
      "name": "Medium"
    },
    {
      "description": "Deep reasoning",
      "id": "high",
      "name": "High"
    },
    {
      "description": "Very deep reasoning",
      "id": "xhigh",
      "name": "X-High"
    },
    {
      "description": "Maximum reasoning effort",
      "id": "max",
      "name": "Max"
    },
    {
      "description": "Use the model default effort",
      "id": "enabled",
      "name": "On (default)"
    }
  ],
  "version": "2.106.7"
};
