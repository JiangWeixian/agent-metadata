import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": true
    },
    "promptCapabilities": {
      "audio": true,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "list": {},
      "resume": {}
    }
  },
  "agentInfo": {
    "name": "qwen-code",
    "title": "Qwen Code",
    "version": "0.19.3"
  },
  "authMethods": [
    {
      "_meta": {
        "args": [
          "--auth-type=openai"
        ],
        "type": "terminal"
      },
      "description": "Requires setting the `OPENAI_API_KEY` environment variable",
      "id": "openai",
      "name": "Use OpenAI API key"
    }
  ],
  "commands": [
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [
          "paths"
        ],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "show version info",
      "input": {
        "hint": ""
      },
      "name": "status"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "List background tasks (text dump — interactive dialog opens via the footer pill)",
      "input": null,
      "name": "tasks"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Connect an LLM provider",
      "input": null,
      "name": "auth"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "acp"
        ]
      },
      "description": "Ask a quick side question without affecting the main conversation",
      "input": null,
      "name": "btw"
    },
    {
      "_meta": {
        "argumentHint": "<description>",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "submit a bug report",
      "input": {
        "hint": "<description>"
      },
      "name": "bug"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Clear conversation history and free up context",
      "input": null,
      "name": "clear"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Compresses the context by replacing it with a summary.",
      "input": null,
      "name": "compress"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Fast context compression without AI. Strips old tool outputs and thinking parts.",
      "input": null,
      "name": "compress-fast"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [
          "detail"
        ],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Show context window usage breakdown. Use \"/context detail\" for per-item breakdown.",
      "input": {
        "hint": ""
      },
      "name": "context"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Show working-tree change stats versus HEAD",
      "input": null,
      "name": "diff"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "open full Qwen Code documentation in your browser",
      "input": null,
      "name": "docs"
    },
    {
      "_meta": {
        "argumentHint": "[memory|cpu-profile|rollback] [--sample] [--snapshot] [--duration]",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [
          "memory",
          "cpu-profile",
          "rollback"
        ],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Run installation and environment diagnostics",
      "input": {
        "hint": "[memory|cpu-profile|rollback] [--sample] [--snapshot] [--duration]"
      },
      "name": "doctor"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [
          "add",
          "show"
        ],
        "supportedModes": [
          "interactive",
          "acp"
        ]
      },
      "description": "Manage workspace directories",
      "input": {
        "hint": ""
      },
      "name": "directory"
    },
    {
      "_meta": {
        "argumentHint": "[md|html|json|jsonl] [path]",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [
          "html",
          "md",
          "json",
          "jsonl"
        ],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Export current session message history to a file",
      "input": {
        "hint": "[md|html|json|jsonl] [path]"
      },
      "name": "export"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [
          "list",
          "manage",
          "install",
          "explore"
        ],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Manage extensions",
      "input": {
        "hint": ""
      },
      "name": "extensions"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Manage Qwen Code hooks",
      "input": null,
      "name": "hooks"
    },
    {
      "_meta": {
        "argumentHint": "[all|claude-code|claude-desktop] [--scope user|project]",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Import MCP servers from Claude configs",
      "input": {
        "hint": "[all|claude-code|claude-desktop] [--scope user|project]"
      },
      "name": "import-config"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Analyzes the project and creates a tailored QWEN.md file.",
      "input": null,
      "name": "init"
    },
    {
      "_meta": {
        "argumentHint": "ui|output <language>",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [
          "ui",
          "output"
        ],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "View or change the language setting",
      "input": {
        "hint": "ui|output <language>"
      },
      "name": "language"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "acp"
        ]
      },
      "description": "Consolidate managed auto-memory topic files.",
      "input": null,
      "name": "dream"
    },
    {
      "_meta": {
        "argumentHint": "<memory text to remove>",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "acp"
        ]
      },
      "description": "Remove matching entries from managed auto-memory.",
      "input": {
        "hint": "<memory text to remove>"
      },
      "name": "forget"
    },
    {
      "_meta": {
        "argumentHint": "[<condition> | clear]",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Set a goal — keep working until the condition is met",
      "input": {
        "hint": "[<condition> | clear]"
      },
      "name": "goal"
    },
    {
      "_meta": {
        "argumentHint": "[--fast|--voice|--vision] [<model-id>]",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Switch the model for this session (--fast for suggestion model, --voice for voice transcription model, --vision for the vision bridge model, [model-id] to switch immediately).",
      "input": {
        "hint": "[--fast|--voice|--vision] [<model-id>]"
      },
      "name": "model"
    },
    {
      "_meta": {
        "argumentHint": "<text to remember>",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "acp"
        ]
      },
      "description": "Save a durable memory to the memory system.",
      "input": {
        "hint": "<text to remember>"
      },
      "name": "remember"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "acp"
        ]
      },
      "description": "Open the skills panel (browse, search, toggle, pick).",
      "input": null,
      "name": "skills"
    },
    {
      "_meta": {
        "argumentHint": "[model|tools|skills|daily|monthly|export]",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [
          "model",
          "tools",
          "skills",
          "daily",
          "monthly",
          "export"
        ],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Show usage statistics dashboard.",
      "input": {
        "hint": "[model|tools|skills|daily|monthly|export]"
      },
      "name": "stats"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Generate a project summary and save it to .qwen/PROJECT_SUMMARY.md",
      "input": null,
      "name": "summary"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "generate personalized programming insights from your chat history",
      "input": null,
      "name": "insight"
    },
    {
      "_meta": {
        "argumentHint": "<operation> <file-pattern>",
        "modelInvocable": true,
        "source": "bundled-skill",
        "sourceLabel": "Skill",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Execute batch operations on multiple files in parallel. Automatically discovers files, splits into chunks, and processes with parallel worker agents. Use `/batch` followed by operation and file pattern.",
      "input": {
        "hint": "<operation> <file-pattern>"
      },
      "name": "batch"
    },
    {
      "_meta": {
        "argumentHint": "<extension-path> [template]",
        "modelInvocable": true,
        "source": "bundled-skill",
        "sourceLabel": "Skill",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Create, scaffold, customize, validate, and locally test Qwen Code extensions. Use when the user wants a new Qwen Code extension, needs help choosing an extension template, wants to add QWEN.md context, commands, skills, agents, MCP servers, settings, hooks, channels, or LSP servers, or asks how to link and test an extension locally. Invoke with `/extension-creator` followed by an extension path and optional template name.",
      "input": {
        "hint": "<extension-path> [template]"
      },
      "name": "extension-creator"
    },
    {
      "_meta": {
        "argumentHint": "[interval] [prompt] | list | clear",
        "modelInvocable": true,
        "source": "bundled-skill",
        "sourceLabel": "Skill",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Create a loop that runs a prompt now and follows up either on a fixed schedule or through self-paced wakeups. Usage - /loop check the build, /loop 5m check the build, /loop check the PR every 30m. /loop list to show jobs, /loop clear to cancel all.",
      "input": {
        "hint": "[interval] [prompt] | list | clear"
      },
      "name": "loop"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "bundled-skill",
        "sourceLabel": "Skill",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Workflow for creating new applications from scratch. Covers requirements gathering, tech stack selection, scaffolding, implementation, and delivery of a functional prototype.",
      "input": {
        "hint": ""
      },
      "name": "new-app"
    },
    {
      "_meta": {
        "argumentHint": "<question>",
        "modelInvocable": true,
        "source": "bundled-skill",
        "sourceLabel": "Skill",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Answer any question about Qwen Code usage, features, configuration, and troubleshooting by referencing the official user documentation. Also helps users view or modify their settings.json. Invoke with `/qc-helper` followed by a question, e.g. `/qc-helper how do I configure MCP servers?` or `/qc-helper change approval mode to yolo`.",
      "input": {
        "hint": "<question>"
      },
      "name": "qc-helper"
    },
    {
      "_meta": {
        "argumentHint": "[pr-number|file-path] [--comment]",
        "modelInvocable": true,
        "source": "bundled-skill",
        "sourceLabel": "Skill",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Review changed code for correctness, security, code quality, and performance. Use when the user asks to review code changes, a PR, or specific files. Invoke with `/review`, `/review <pr-number>`, `/review <file-path>`, or `/review <pr-number> --comment` to post inline comments on the PR.",
      "input": {
        "hint": "[pr-number|file-path] [--comment]"
      },
      "name": "review"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "bundled-skill",
        "sourceLabel": "Skill",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Review recent code changes for reuse, code quality, and efficiency, then directly apply straightforward cleanup improvements. Use when the user wants a post-implementation cleanup pass, pre-PR polish, or asks to simplify/refine recent changes. Invoke with `/simplify` or `/simplify <focus>`.",
      "input": {
        "hint": ""
      },
      "name": "simplify"
    },
    {
      "_meta": {
        "argumentHint": "[PID or symptom]",
        "modelInvocable": true,
        "source": "bundled-skill",
        "sourceLabel": "Skill",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Diagnose frozen, stuck, or slow Qwen Code sessions on this machine. Scans for problematic processes, high CPU/memory usage, hung subprocesses, and debug logs. Use /stuck or /stuck <PID> to focus on a specific process.",
      "input": {
        "hint": "[PID or symptom]"
      },
      "name": "stuck"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "default",
      "description": "Session permission mode",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "description": "Analyze only, do not modify files or execute commands",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Require approval for file edits or shell commands",
          "name": "Default",
          "value": "default"
        },
        {
          "description": "Automatically approve file edits",
          "name": "Auto Edit",
          "value": "auto-edit"
        },
        {
          "description": "LLM classifier auto-approves safe actions, blocks risky ones",
          "name": "Auto",
          "value": "auto"
        },
        {
          "description": "Automatically approve all tools",
          "name": "YOLO",
          "value": "yolo"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "$runtime|openai|probe-dummy-model(openai)",
      "description": "AI model to use",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "description": "Qwen 3.6 Plus — efficient hybrid model with leading coding performance",
          "name": "coder-model",
          "value": "coder-model(qwen-oauth)"
        },
        {
          "description": "",
          "name": "probe-dummy-model",
          "value": "$runtime|openai|probe-dummy-model(openai)"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "default",
  "id": "qwen-code",
  "modes": [
    {
      "description": "Analyze only, do not modify files or execute commands",
      "id": "plan",
      "name": "Plan"
    },
    {
      "description": "Require approval for file edits or shell commands",
      "id": "default",
      "name": "Default"
    },
    {
      "description": "Automatically approve file edits",
      "id": "auto-edit",
      "name": "Auto Edit"
    },
    {
      "description": "LLM classifier auto-approves safe actions, blocks risky ones",
      "id": "auto",
      "name": "Auto"
    },
    {
      "description": "Automatically approve all tools",
      "id": "yolo",
      "name": "YOLO"
    }
  ],
  "name": "Qwen Code",
  "protocolVersion": 1,
  "version": "0.19.3"
};
