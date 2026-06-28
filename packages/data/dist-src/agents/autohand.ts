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
      "fork": {},
      "list": {},
      "resume": {}
    }
  },
  "agentInfo": {
    "name": "@autohandai/autohand-acp",
    "title": "Autohand CLI",
    "version": "0.2.1"
  },
  "authMethods": [],
  "commands": [
    {
      "description": "Show available commands",
      "name": "help"
    },
    {
      "description": "Start a new conversation",
      "name": "new"
    },
    {
      "description": "Select or change the model",
      "name": "model"
    },
    {
      "description": "Select or change the mode",
      "name": "mode"
    },
    {
      "description": "Resume a previous session",
      "name": "resume"
    },
    {
      "description": "Show and switch between sessions",
      "name": "threads"
    },
    {
      "description": "List recent sessions",
      "name": "sessions"
    },
    {
      "description": "Show current session info",
      "name": "session"
    },
    {
      "description": "Show Autohand status",
      "name": "status"
    },
    {
      "description": "Undo the last file change",
      "name": "undo"
    },
    {
      "description": "Create AGENTS.md file",
      "name": "init"
    },
    {
      "description": "Manage conversation memory",
      "name": "memory"
    },
    {
      "description": "List available skills",
      "name": "skills"
    },
    {
      "description": "Export conversation",
      "name": "export"
    },
    {
      "description": "Manage tool permissions",
      "name": "permissions"
    },
    {
      "description": "Send feedback to Autohand",
      "name": "feedback"
    },
    {
      "description": "List available agents",
      "name": "agents"
    },
    {
      "description": "Manage lifecycle hooks",
      "name": "hooks"
    },
    {
      "description": "Toggle autonomous agent loop",
      "name": "automode"
    },
    {
      "description": "Add additional working directory",
      "name": "add-dir"
    },
    {
      "description": "Remove additional working directory",
      "name": "remove-dir"
    },
    {
      "description": "Share session transcript",
      "name": "share"
    },
    {
      "description": "Manage code formatters",
      "name": "formatters"
    },
    {
      "description": "Run code linting",
      "name": "lint"
    }
  ],
  "configOptions": [
    {
      "currentValue": "normal",
      "description": "Reasoning depth for complex tasks",
      "id": "thinking_level",
      "name": "Thinking",
      "options": [
        {
          "description": "Direct responses, no reasoning",
          "name": "None",
          "value": "none"
        },
        {
          "description": "Standard reasoning",
          "name": "Normal",
          "value": "normal"
        },
        {
          "description": "Deep reasoning for complex tasks",
          "name": "Extended",
          "value": "extended"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": "disabled",
      "description": "Automatically commit changes",
      "id": "auto_commit",
      "name": "Auto-commit",
      "options": [
        {
          "description": "Manual commits only",
          "name": "Disabled",
          "value": "disabled"
        },
        {
          "description": "Auto-commit after changes",
          "name": "Enabled",
          "value": "enabled"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": "disabled",
      "description": "Include conversation history in prompts",
      "id": "include_history",
      "name": "Include History",
      "options": [
        {
          "description": "Start fresh each prompt",
          "name": "Disabled",
          "value": "disabled"
        },
        {
          "description": "Carry context forward",
          "name": "Enabled",
          "value": "enabled"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": "disabled",
      "description": "Autonomous development loop (switches to Unrestricted mode)",
      "id": "auto_mode",
      "name": "Auto-Mode",
      "options": [
        {
          "description": "Interactive mode",
          "name": "Disabled",
          "value": "disabled"
        },
        {
          "description": "Autonomous agent loop",
          "name": "Enabled",
          "value": "enabled"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": "50",
      "description": "Maximum iterations for auto-mode",
      "id": "auto_mode_max_iterations",
      "name": "Max Iterations",
      "options": [
        {
          "description": "Light tasks",
          "name": "25",
          "value": "25"
        },
        {
          "description": "Standard tasks (default)",
          "name": "50",
          "value": "50"
        },
        {
          "description": "Complex tasks",
          "name": "100",
          "value": "100"
        },
        {
          "description": "Extended tasks",
          "name": "200",
          "value": "200"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": "120",
      "description": "Maximum runtime in minutes for auto-mode",
      "id": "auto_mode_max_runtime",
      "name": "Max Runtime",
      "options": [
        {
          "description": "Quick tasks",
          "name": "30 min",
          "value": "30"
        },
        {
          "description": "Standard tasks",
          "name": "1 hour",
          "value": "60"
        },
        {
          "description": "Extended tasks (default)",
          "name": "2 hours",
          "value": "120"
        },
        {
          "description": "Long-running tasks",
          "name": "4 hours",
          "value": "240"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": "10",
      "description": "Maximum cost in dollars for auto-mode",
      "id": "auto_mode_max_cost",
      "name": "Max Cost",
      "options": [
        {
          "description": "Budget limit",
          "name": "$5",
          "value": "5"
        },
        {
          "description": "Standard limit (default)",
          "name": "$10",
          "value": "10"
        },
        {
          "description": "Extended limit",
          "name": "$25",
          "value": "25"
        },
        {
          "description": "High limit",
          "name": "$50",
          "value": "50"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": "0.7",
      "description": "Controls randomness in responses (lower = more focused)",
      "id": "temperature",
      "name": "Temperature",
      "options": [
        {
          "description": "Deterministic, most focused",
          "name": "0.0",
          "value": "0"
        },
        {
          "description": "Low creativity",
          "name": "0.3",
          "value": "0.3"
        },
        {
          "description": "Balanced (default)",
          "name": "0.7",
          "value": "0.7"
        },
        {
          "description": "High creativity",
          "name": "1.0",
          "value": "1.0"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": "enabled",
      "description": "Stream responses in real-time",
      "id": "stream_output",
      "name": "Stream Output",
      "options": [
        {
          "description": "Show responses as they generate",
          "name": "Enabled",
          "value": "enabled"
        },
        {
          "description": "Wait for complete response",
          "name": "Disabled",
          "value": "disabled"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "interactive",
  "id": "autohand",
  "modes": [
    {
      "description": "Ask before each action",
      "id": "interactive",
      "name": "Interactive"
    },
    {
      "description": "Allow all actions",
      "id": "full-access",
      "name": "Full access"
    },
    {
      "description": "Skip all approval prompts",
      "id": "unrestricted",
      "name": "Unrestricted"
    },
    {
      "description": "Autonomous agent loop",
      "id": "auto-mode",
      "name": "Auto-mode"
    },
    {
      "description": "Block dangerous actions",
      "id": "restricted",
      "name": "Restricted"
    },
    {
      "description": "Preview without executing",
      "id": "dry-run",
      "name": "Dry run"
    }
  ],
  "name": "Autohand Code",
  "protocolVersion": 1,
  "version": "0.2.1"
};
