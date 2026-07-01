import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "_meta": {
      "terminal-auth": true,
      "terminal_output": true
    },
    "loadSession": true,
    "promptCapabilities": {
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "list": {},
      "resume": {}
    }
  },
  "agentInfo": {
    "name": "@factory/cli",
    "title": "Factory Droid (Daemon)",
    "version": "0.159.1"
  },
  "authMethods": [
    {
      "description": "Authenticate with Factory using a device pairing code in your browser.",
      "id": "device-pairing",
      "name": "Login"
    },
    {
      "description": "Authenticate using a Factory API key set in the FACTORY_API_KEY environment variable.",
      "id": "factory-api-key",
      "name": "Factory API Key"
    }
  ],
  "commands": [
    {
      "description": "Automates browsers and Electron desktop apps (VS Code, Slack, Discord, Figma, Notion, Spotify, etc.) for testing, form filling, screenshots, and data extraction. Use when the user needs to navigate, interact with, test, or extract data from any website or Electron desktop app.",
      "name": "agent-browser"
    },
    {
      "description": "Produce polished Excel spreadsheets (reports, budgets, data exports, any \"export to Excel\" deliverable). Use whenever the user asks for an Excel file, a spreadsheet, or an .xlsx deliverable.",
      "name": "excel"
    },
    {
      "description": "Promote and assist with Figma MCP integration. ACTIVATE when the user shares a Figma URL (figma.com), mentions Figma designs or components, shares PNG images that may originate from Figma, or when Figma MCP tools are already connected and being used. Handles installation encouragement, conversational promotion, and push-back-to-Figma flows.",
      "name": "figma-mcp-helper"
    },
    {
      "description": "RCA runbook for alerts. Given an alert link (or prompted to provide one), identifies the alert type, verifies tooling/auth, and walks through root cause analysis using deep research. Persists learnings to incident-guidelines for future reuse.",
      "name": "incident"
    },
    {
      "description": "Initialize a new repository with contributor guidelines. Use when:\n- User asks to create a contributor guide, AGENTS.md, or repo guidelines\n- User wants to set up documentation for AI assistants working on the repo\n- Starting a new project that needs repository documentation\n",
      "name": "init"
    },
    {
      "description": "Install and configure Factory Droid for automated code review on GitHub or GitLab. Supports single-repo setup or org/group-wide rollout across hundreds of repos. Use when a user wants to set up Droid review on their repositories.\n",
      "name": "install-code-review"
    },
    {
      "description": "Set up automated QA testing for this project. Performs deep codebase analysis, asks targeted questions, and generates a modular QA skill with sub-skills per app, a GitHub Actions workflow, and a report template. This is a complex, multi-phase process -- quality assurance is foundational and we take the time to get it right.\n",
      "name": "install-qa"
    },
    {
      "description": "Scaffold a scheduled Slack triage automation, generalized to any company. Sets up a Python tool layer (run_triage.py) plus a HEARTBEAT.md agent loop that scans configured Slack channels for actionable messages, dedupes against a ticketing system (Linear or Jira), files tickets, and posts a run summary. Use when the user wants to stand up an automated triage bot.\n",
      "name": "install-triage"
    },
    {
      "description": "Install a CI action that automatically refreshes the Factory Wiki on each push to the default branch.\nUse when the user wants to set up automated wiki generation, install wiki CI, or configure wiki refresh.\n",
      "name": "install-wiki"
    },
    {
      "description": "Produce polished PDF documents (reports, invoices, resumes, letters, flyers, certificates, any \"export to PDF\" deliverable). Use whenever the user asks for a PDF or a printable document.",
      "name": "pdf-document"
    },
    {
      "description": "Produce polished PowerPoint presentations (decks, slide shows, pitch decks, any \"export to PowerPoint\" deliverable). Use whenever the user asks for a PowerPoint, a slide deck, or a presentation.",
      "name": "powerpoint"
    },
    {
      "description": "Review code changes and identify high-confidence, actionable bugs. Use when the user wants to:\n- Review a pull request or branch diff\n- Find bugs, security issues, or correctness problems in code changes\n- Get a structured summary of review findings\n",
      "name": "review"
    },
    {
      "description": "Security-focused code review using STRIDE, OWASP Top 10, OWASP LLM Top 10, and supply chain analysis. Use when:\n- Reviewing a PR for security vulnerabilities\n- Performing a security audit of code changes\n- Identifying injection, auth, data exposure, and other security issues\n- Running a full-project security audit reviewing every source file\n",
      "name": "security-review"
    },
    {
      "description": "Navigate, search, and manage Droid sessions. Use when the user wants to:\n- List recent sessions\n- Search session history for specific topics or patterns\n- Resume a previous session\n- Get details about what was accomplished in a session\n- Find sessions by project, date, or content\n",
      "name": "session-navigation"
    },
    {
      "description": "Review changed code for reuse, quality, and efficiency, then fix any issues found.",
      "name": "simplify"
    },
    {
      "description": "Automates terminal user interface (TUI) testing. Use when you need to launch, interact with, test, or debug terminal applications, capture TUI snapshots, or automate terminal inputs.",
      "name": "tuistory"
    },
    {
      "description": "Generate comprehensive codebase documentation for a repository.\nUploads the wiki to view in the Factory app.\n",
      "name": "wiki"
    },
    {
      "description": "Generate Factory-branded HyperFrames video overviews for repository wikis.\nUse when wiki generation reaches Phase 3.6, or when the user asks for a narrated repository overview video.\n",
      "name": "wiki-video-gen"
    },
    {
      "description": "Produce polished Word documents (reports, letters, proposals, printable docs, any .docx deliverable). Use whenever the user asks for a Word document or a .docx file.",
      "name": "word-document"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "normal",
      "description": "Which tool actions the agent may run without confirmation.",
      "id": "autonomy_level",
      "name": "Autonomy Level",
      "options": [
        {
          "name": "Auto (Off)",
          "value": "normal"
        },
        {
          "name": "Spec",
          "value": "spec"
        },
        {
          "name": "Auto (Low)",
          "value": "auto-low"
        },
        {
          "name": "Auto (Medium)",
          "value": "auto-medium"
        },
        {
          "name": "Auto (High)",
          "value": "auto-high"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "claude-opus-4-8",
      "description": "The model used for this session. Changing this may also change the available Reasoning Effort options.",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "description": "2x Factory token rate",
          "name": "Claude Opus 4.8",
          "value": "claude-opus-4-8"
        },
        {
          "description": "4x Factory token rate",
          "name": "Claude Opus 4.8 Fast Mode",
          "value": "claude-opus-4-8-fast"
        },
        {
          "description": "2x Factory token rate",
          "name": "Claude Opus 4.7",
          "value": "claude-opus-4-7"
        },
        {
          "description": "12x Factory token rate",
          "name": "Claude Opus 4.7 Fast Mode",
          "value": "claude-opus-4-7-fast"
        },
        {
          "description": "2x Factory token rate",
          "name": "Claude Opus 4.6",
          "value": "claude-opus-4-6"
        },
        {
          "description": "12x Factory token rate",
          "name": "Claude Opus 4.6 Fast Mode",
          "value": "claude-opus-4-6-fast"
        },
        {
          "description": "2x Factory token rate",
          "name": "Claude Opus 4.5",
          "value": "claude-opus-4-5-20251101"
        },
        {
          "description": "1.2x Factory token rate",
          "name": "Claude Sonnet 4.6",
          "value": "claude-sonnet-4-6"
        },
        {
          "description": "1.2x Factory token rate",
          "name": "Claude Sonnet 4.5",
          "value": "claude-sonnet-4-5-20250929"
        },
        {
          "description": "0.4x Factory token rate",
          "name": "Claude Haiku 4.5",
          "value": "claude-haiku-4-5-20251001"
        },
        {
          "description": "2x Factory token rate",
          "name": "GPT-5.5",
          "value": "gpt-5.5"
        },
        {
          "description": "5x Factory token rate",
          "name": "GPT-5.5 Fast Mode",
          "value": "gpt-5.5-fast"
        },
        {
          "description": "12x Factory token rate",
          "name": "GPT-5.5 Pro",
          "value": "gpt-5.5-pro"
        },
        {
          "description": "1x Factory token rate",
          "name": "GPT-5.4",
          "value": "gpt-5.4"
        },
        {
          "description": "2x Factory token rate",
          "name": "GPT-5.4 Fast Mode",
          "value": "gpt-5.4-fast"
        },
        {
          "description": "0.3x Factory token rate",
          "name": "GPT-5.4 Mini",
          "value": "gpt-5.4-mini"
        },
        {
          "description": "0.7x Factory token rate",
          "name": "GPT-5.3-Codex",
          "value": "gpt-5.3-codex"
        },
        {
          "description": "1.4x Factory token rate",
          "name": "GPT-5.3-Codex Fast Mode",
          "value": "gpt-5.3-codex-fast"
        },
        {
          "description": "0.7x Factory token rate",
          "name": "GPT-5.2",
          "value": "gpt-5.2"
        },
        {
          "description": "0.8x Factory token rate",
          "name": "Gemini 3.1 Pro",
          "value": "gemini-3.1-pro-preview"
        },
        {
          "description": "0.6x Factory token rate",
          "name": "Gemini 3.5 Flash",
          "value": "gemini-3.5-flash"
        },
        {
          "description": "0.2x Factory token rate",
          "name": "Gemini 3 Flash",
          "value": "gemini-3-flash-preview"
        },
        {
          "description": "0.55x Factory token rate",
          "name": "Droid Core (GLM-5.2)",
          "value": "glm-5.2"
        },
        {
          "description": "0.55x Factory token rate",
          "name": "Droid Core (GLM-5.1)",
          "value": "glm-5.1"
        },
        {
          "description": "0.38x Factory token rate",
          "name": "Droid Core (Kimi K2.7 Code)",
          "value": "kimi-k2.7-code"
        },
        {
          "description": "0.4x Factory token rate",
          "name": "Droid Core (Kimi K2.6)",
          "value": "kimi-k2.6"
        },
        {
          "description": "0.4x Factory token rate",
          "name": "Droid Core (Nemotron 3 Ultra)",
          "value": "nemotron-3-ultra"
        },
        {
          "description": "0.7x Factory token rate",
          "name": "Droid Core (DeepSeek V4 Pro)",
          "value": "deepseek-v4-pro"
        },
        {
          "description": "0.12x Factory token rate",
          "name": "Droid Core (MiniMax M3)",
          "value": "minimax-m3"
        },
        {
          "description": "0.12x Factory token rate",
          "name": "Droid Core (MiniMax M2.7)",
          "value": "minimax-m2.7"
        },
        {
          "description": "0.12x Factory token rate",
          "name": "Droid Core (MiniMax M2.5)",
          "value": "minimax-m2.5"
        },
        {
          "description": "0.7x Factory token rate",
          "name": "GPT-5.2-Codex [Deprecated]",
          "value": "gpt-5.2-codex"
        },
        {
          "description": "0.5x Factory token rate",
          "name": "GPT-5.1-Codex-Max [Deprecated]",
          "value": "gpt-5.1-codex-max"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "high",
      "description": "Controls how much thinking the model performs before responding. The available options depend on the selected model.",
      "id": "reasoning_effort",
      "name": "Reasoning Effort",
      "options": [
        {
          "name": "Off",
          "value": "off"
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
          "name": "Extra High",
          "value": "xhigh"
        },
        {
          "name": "Maximum",
          "value": "max"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "normal",
  "currentModelId": "claude-opus-4-8",
  "currentReasoningEffortId": "high",
  "id": "factory-droid",
  "models": [
    {
      "description": "2x Factory token rate",
      "id": "claude-opus-4-8",
      "name": "Claude Opus 4.8"
    },
    {
      "description": "4x Factory token rate",
      "id": "claude-opus-4-8-fast",
      "name": "Claude Opus 4.8 Fast Mode"
    },
    {
      "description": "2x Factory token rate",
      "id": "claude-opus-4-7",
      "name": "Claude Opus 4.7"
    },
    {
      "description": "12x Factory token rate",
      "id": "claude-opus-4-7-fast",
      "name": "Claude Opus 4.7 Fast Mode"
    },
    {
      "description": "2x Factory token rate",
      "id": "claude-opus-4-6",
      "name": "Claude Opus 4.6"
    },
    {
      "description": "12x Factory token rate",
      "id": "claude-opus-4-6-fast",
      "name": "Claude Opus 4.6 Fast Mode"
    },
    {
      "description": "2x Factory token rate",
      "id": "claude-opus-4-5-20251101",
      "name": "Claude Opus 4.5"
    },
    {
      "description": "1.2x Factory token rate",
      "id": "claude-sonnet-4-6",
      "name": "Claude Sonnet 4.6"
    },
    {
      "description": "1.2x Factory token rate",
      "id": "claude-sonnet-4-5-20250929",
      "name": "Claude Sonnet 4.5"
    },
    {
      "description": "0.4x Factory token rate",
      "id": "claude-haiku-4-5-20251001",
      "name": "Claude Haiku 4.5"
    },
    {
      "description": "2x Factory token rate",
      "id": "gpt-5.5",
      "name": "GPT-5.5"
    },
    {
      "description": "5x Factory token rate",
      "id": "gpt-5.5-fast",
      "name": "GPT-5.5 Fast Mode"
    },
    {
      "description": "12x Factory token rate",
      "id": "gpt-5.5-pro",
      "name": "GPT-5.5 Pro"
    },
    {
      "description": "1x Factory token rate",
      "id": "gpt-5.4",
      "name": "GPT-5.4"
    },
    {
      "description": "2x Factory token rate",
      "id": "gpt-5.4-fast",
      "name": "GPT-5.4 Fast Mode"
    },
    {
      "description": "0.3x Factory token rate",
      "id": "gpt-5.4-mini",
      "name": "GPT-5.4 Mini"
    },
    {
      "description": "0.7x Factory token rate",
      "id": "gpt-5.3-codex",
      "name": "GPT-5.3-Codex"
    },
    {
      "description": "1.4x Factory token rate",
      "id": "gpt-5.3-codex-fast",
      "name": "GPT-5.3-Codex Fast Mode"
    },
    {
      "description": "0.7x Factory token rate",
      "id": "gpt-5.2",
      "name": "GPT-5.2"
    },
    {
      "description": "0.8x Factory token rate",
      "id": "gemini-3.1-pro-preview",
      "name": "Gemini 3.1 Pro"
    },
    {
      "description": "0.6x Factory token rate",
      "id": "gemini-3.5-flash",
      "name": "Gemini 3.5 Flash"
    },
    {
      "description": "0.2x Factory token rate",
      "id": "gemini-3-flash-preview",
      "name": "Gemini 3 Flash"
    },
    {
      "description": "0.55x Factory token rate",
      "id": "glm-5.2",
      "name": "Droid Core (GLM-5.2)"
    },
    {
      "description": "0.55x Factory token rate",
      "id": "glm-5.1",
      "name": "Droid Core (GLM-5.1)"
    },
    {
      "description": "0.38x Factory token rate",
      "id": "kimi-k2.7-code",
      "name": "Droid Core (Kimi K2.7 Code)"
    },
    {
      "description": "0.4x Factory token rate",
      "id": "kimi-k2.6",
      "name": "Droid Core (Kimi K2.6)"
    },
    {
      "description": "0.4x Factory token rate",
      "id": "nemotron-3-ultra",
      "name": "Droid Core (Nemotron 3 Ultra)"
    },
    {
      "description": "0.7x Factory token rate",
      "id": "deepseek-v4-pro",
      "name": "Droid Core (DeepSeek V4 Pro)"
    },
    {
      "description": "0.12x Factory token rate",
      "id": "minimax-m3",
      "name": "Droid Core (MiniMax M3)"
    },
    {
      "description": "0.12x Factory token rate",
      "id": "minimax-m2.7",
      "name": "Droid Core (MiniMax M2.7)"
    },
    {
      "description": "0.12x Factory token rate",
      "id": "minimax-m2.5",
      "name": "Droid Core (MiniMax M2.5)"
    },
    {
      "description": "0.7x Factory token rate",
      "id": "gpt-5.2-codex",
      "name": "GPT-5.2-Codex [Deprecated]"
    },
    {
      "description": "0.5x Factory token rate",
      "id": "gpt-5.1-codex-max",
      "name": "GPT-5.1-Codex-Max [Deprecated]"
    }
  ],
  "modes": [
    {
      "description": "Auto-approves only read operations",
      "id": "normal",
      "name": "Auto (Off)"
    },
    {
      "description": "Build feature specs (read-only)",
      "id": "spec",
      "name": "Spec"
    },
    {
      "description": "Auto-approves file edits and low-risk actions during the session",
      "id": "auto-low",
      "name": "Auto (Low)"
    },
    {
      "description": "Auto-approves medium-risk actions during the session",
      "id": "auto-medium",
      "name": "Auto (Medium)"
    },
    {
      "description": "Auto-approves all actions",
      "id": "auto-high",
      "name": "Auto (High)"
    }
  ],
  "name": "Factory Droid",
  "protocolVersion": 1,
  "reasoningEfforts": [
    {
      "id": "off",
      "name": "Off"
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
      "name": "Extra High"
    },
    {
      "id": "max",
      "name": "Maximum"
    }
  ],
  "version": "0.159.1"
};
