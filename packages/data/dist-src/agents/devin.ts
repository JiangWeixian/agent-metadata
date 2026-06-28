import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "_meta": {
      "cognition.ai/documentLifecycle": true,
      "cognition.ai/multiRootWorkspace": true,
      "cognition.ai/sessionRename": true,
      "cognition.ai/terminalLifecycle": true
    },
    "loadSession": true,
    "mcpCapabilities": {
      "http": false,
      "sse": false
    },
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "additionalDirectories": {},
      "list": {}
    }
  },
  "agentInfo": {
    "name": "affogato",
    "title": "Affogato Agent",
    "version": "0.0.0-dev"
  },
  "authMethods": [
    {
      "description": "Authenticate with your API key",
      "id": "windsurf-api-key",
      "name": "API Key"
    }
  ],
  "commands": [
    {
      "description": "Authenticate with an API key",
      "input": {
        "hint": "[api-key]"
      },
      "name": "login"
    },
    {
      "description": "Clear authentication",
      "name": "logout"
    },
    {
      "description": "Check authentication status",
      "name": "status"
    },
    {
      "description": "List workspace directories",
      "name": "workspace"
    },
    {
      "description": "Add additional workspace directory",
      "input": {
        "hint": "<path>"
      },
      "name": "add-dir"
    },
    {
      "description": "Remove a workspace directory",
      "input": {
        "hint": "<path>"
      },
      "name": "undo-add-dir"
    },
    {
      "description": "Switch to Ask mode (read-only)",
      "input": {
        "hint": "[question]"
      },
      "name": "ask"
    },
    {
      "description": "Force conversation compaction",
      "name": "compact"
    },
    {
      "description": "Show context window usage",
      "name": "context"
    },
    {
      "description": "Show session statistics",
      "name": "session-stats"
    },
    {
      "description": "Report a bug to the Devin CLI developers",
      "input": {
        "hint": "<description>"
      },
      "name": "bug"
    },
    {
      "description": "Show available commands",
      "name": "help"
    },
    {
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "name": "artifact-static-site"
    },
    {
      "description": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format.",
      "name": "xlsx"
    },
    {
      "description": "Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Codex's capabilities with specialized knowledge, workflows, or tool integrations.",
      "name": "skill-creator"
    },
    {
      "description": "Helps users discover and install agent skills when they ask questions like \"how do I do X\", \"find a skill for X\", \"is there a skill that can...\", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.",
      "name": "find-skills"
    },
    {
      "description": "Multi Agents Looping — a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "name": "deep-investigate"
    },
    {
      "description": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing.",
      "name": "gpt-taste"
    },
    {
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "name": "pptx-generator"
    },
    {
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "name": "high-end-visual-design"
    },
    {
      "description": "Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): \"make a PDF\", \"generate a report\", \"write a proposal\", \"create a resume\", \"beautiful PDF\", \"professional document\", \"cover page\", \"polished PDF\", \"client-ready document\". FILL (complete form fields): \"fill in the form\", \"fill out this PDF\", \"complete the form fields\", \"write values into PDF\", \"what fields does this PDF have\". REFORMAT (apply design to an existing doc): \"reformat this document\", \"apply our style\", \"convert this Markdown/text to PDF\", \"make this doc look good\", \"re-style this PDF\". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n",
      "name": "pdf"
    },
    {
      "description": "Use when asked to analyze code and add explanatory code annotations, file headers, doc comments, inline comments, or JSX-safe comments.",
      "name": "docs-code"
    },
    {
      "description": "Install Agents skills into $AGENTS_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos).",
      "name": "skill-installer"
    },
    {
      "description": "Docs-driven delivery workflow. Use when splitting design docs into tasks, creating implementation plans under docs/plan, executing develop/verify/merge cycles, maintaining design doc consistency, or writing UI layout documentation with ASCII diagrams.",
      "name": "docs-sprint"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "accept-edits",
      "id": "mode",
      "name": "Session Mode",
      "options": [
        {
          "_meta": {
            "cognition.ai/icon": "code"
          },
          "description": "Write and edit code",
          "name": "Code",
          "value": "accept-edits"
        },
        {
          "_meta": {
            "cognition.ai/icon": "message-circle"
          },
          "description": "Answer questions without code changes",
          "name": "Ask",
          "value": "ask"
        },
        {
          "_meta": {
            "cognition.ai/icon": "file-text"
          },
          "description": "Plan changes before implementing",
          "name": "Plan",
          "value": "plan"
        },
        {
          "_meta": {
            "cognition.ai/icon": "shield-off"
          },
          "description": "Auto-approve all tool calls",
          "name": "Bypass Permissions",
          "value": "bypass"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "accept-edits",
  "id": "devin",
  "modes": [
    {
      "id": "accept-edits",
      "name": "Code"
    },
    {
      "id": "ask",
      "name": "Ask"
    },
    {
      "id": "plan",
      "name": "Plan"
    },
    {
      "id": "bypass",
      "name": "Bypass Permissions"
    }
  ],
  "name": "Devin",
  "protocolVersion": 1,
  "version": "2026.8.18"
};
