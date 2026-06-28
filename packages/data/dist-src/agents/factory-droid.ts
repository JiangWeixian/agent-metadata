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
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "name": "artifact-static-site"
    },
    {
      "description": "Multi Agents Looping — a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "name": "deep-investigate"
    },
    {
      "description": "Use when asked to analyze code and add explanatory code annotations, file headers, doc comments, inline comments, or JSX-safe comments.",
      "name": "docs-code"
    },
    {
      "description": "Docs-driven delivery workflow. Use when splitting design docs into tasks, creating implementation plans under docs/plan, executing develop/verify/merge cycles, maintaining design doc consistency, or writing UI layout documentation with ASCII diagrams.",
      "name": "docs-sprint"
    },
    {
      "description": "Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document — including when they say \"write a report\", \"draft a proposal\", \"make a contract\", \"fill in this form\", \"reformat to match this template\", or any task whose final output is a .docx file. Even if the user doesn't mention \"docx\" explicitly, if the task implies a printable/formal document, use this skill.\n",
      "name": "docx"
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
      "description": "Helps users discover and install agent skills when they ask questions like \"how do I do X\", \"find a skill for X\", \"is there a skill that can...\", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.",
      "name": "find-skills"
    },
    {
      "description": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing.",
      "name": "gpt-taste"
    },
    {
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "name": "high-end-visual-design"
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
      "description": "Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): \"make a PDF\", \"generate a report\", \"write a proposal\", \"create a resume\", \"beautiful PDF\", \"professional document\", \"cover page\", \"polished PDF\", \"client-ready document\". FILL (complete form fields): \"fill in the form\", \"fill out this PDF\", \"complete the form fields\", \"write values into PDF\", \"what fields does this PDF have\". REFORMAT (apply design to an existing doc): \"reformat this document\", \"apply our style\", \"convert this Markdown/text to PDF\", \"make this doc look good\", \"re-style this PDF\". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n",
      "name": "pdf"
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
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "name": "pptx-generator"
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
      "description": "Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Codex's capabilities with specialized knowledge, workflows, or tool integrations.",
      "name": "skill-creator"
    },
    {
      "description": "Install Agents skills into $AGENTS_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos).",
      "name": "skill-installer"
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
    },
    {
      "description": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format.",
      "name": "xlsx"
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
  "id": "factory-droid",
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
  "version": "0.159.1"
};
