import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "loadSession": true,
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "close": {},
      "fork": {},
      "list": {}
    }
  },
  "agentInfo": {
    "name": "@mistralai/mistral-vibe",
    "title": "Mistral Vibe",
    "version": "2.18.0"
  },
  "authMethods": [
    {
      "description": "Sign into Mistral Vibe through your Mistral AI Studio account.",
      "id": "browser-auth",
      "name": "Sign in through Mistral AI Studio"
    }
  ],
  "commands": [
    {
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "artifact-static-site"
    },
    {
      "description": "Compact conversation history by summarizing. Optionally pass instructions to guide the summary",
      "input": {
        "hint": "Optional instructions to guide the compaction summary"
      },
      "name": "compact"
    },
    {
      "description": "Show data retention information",
      "name": "data-retention"
    },
    {
      "description": "Multi Agents Looping — a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "deep-investigate"
    },
    {
      "description": "Use when asked to analyze code and add explanatory code annotations, file headers, doc comments, inline comments, or JSX-safe comments.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "docs-code"
    },
    {
      "description": "Docs-driven delivery workflow. Use when splitting design docs into tasks, creating implementation plans under docs/plan, executing develop/verify/merge cycles, maintaining design doc consistency, or writing UI layout documentation with ASCII diagrams.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "docs-sprint"
    },
    {
      "description": "Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document — including when they say \"write a report\", \"draft a proposal\", \"make a contract\", \"fill in this form\", \"reformat to match this template\", or any task whose final output is a .docx file. Even if the user doesn't mention \"docx\" explicitly, if the task implies a printable/formal document, use this skill.\n",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "docx"
    },
    {
      "description": "Helps users discover and install agent skills when they ask questions like \"how do I do X\", \"find a skill for X\", \"is there a skill that can...\", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "find-skills"
    },
    {
      "description": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "gpt-taste"
    },
    {
      "description": "Show available commands and keyboard shortcuts",
      "name": "help"
    },
    {
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "high-end-visual-design"
    },
    {
      "description": "Install the Lean 4 agent (leanstral)",
      "name": "leanstall"
    },
    {
      "description": "Show path to current session log directory",
      "name": "log"
    },
    {
      "description": "Show MCP OAuth status, login guidance, or log out an OAuth MCP server",
      "input": {
        "hint": "status | login <alias> | logout <alias>"
      },
      "name": "mcp"
    },
    {
      "description": "Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): \"make a PDF\", \"generate a report\", \"write a proposal\", \"create a resume\", \"beautiful PDF\", \"professional document\", \"cover page\", \"polished PDF\", \"client-ready document\". FILL (complete form fields): \"fill in the form\", \"fill out this PDF\", \"complete the form fields\", \"write values into PDF\", \"what fields does this PDF have\". REFORMAT (apply design to an existing doc): \"reformat this document\", \"apply our style\", \"convert this Markdown/text to PDF\", \"make this doc look good\", \"re-style this PDF\". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "pdf"
    },
    {
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "pptx-generator"
    },
    {
      "description": "Configure proxy and SSL certificate settings",
      "input": {
        "hint": "KEY value to set, KEY to unset, or empty for help"
      },
      "name": "proxy-setup"
    },
    {
      "description": "Reload configuration, agent instructions, and skills from disk",
      "name": "reload"
    },
    {
      "description": "Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Codex's capabilities with specialized knowledge, workflows, or tool integrations.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "skill-creator"
    },
    {
      "description": "Install Agents skills into $AGENTS_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos).",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "skill-installer"
    },
    {
      "description": "Teleport session to Vibe Code Web",
      "name": "teleport"
    },
    {
      "description": "Uninstall the Lean 4 agent",
      "name": "unleanstall"
    },
    {
      "description": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "xlsx"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "default",
      "id": "mode",
      "name": "Session Mode",
      "options": [
        {
          "description": "Requires approval for tool executions",
          "name": "Default",
          "value": "default"
        },
        {
          "description": "Read-only agent for exploration and planning",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Auto-approves file edits only",
          "name": "Accept Edits",
          "value": "accept-edits"
        },
        {
          "description": "Auto-approves all tool executions",
          "name": "Auto Approve",
          "value": "auto-approve"
        },
        {
          "description": "Read-only conversational mode for questions and discussions",
          "name": "Chat",
          "value": "chat"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "mistral-medium-3.5",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "description": "mistral-vibe-cli-latest",
          "name": "mistral-medium-3.5",
          "value": "mistral-medium-3.5"
        },
        {
          "description": "devstral-small-latest",
          "name": "devstral-small",
          "value": "devstral-small"
        },
        {
          "description": "devstral",
          "name": "local",
          "value": "local"
        }
      ],
      "type": "select"
    },
    {
      "category": "thinking",
      "currentValue": "high",
      "id": "thinking",
      "name": "Thinking",
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
          "name": "Max",
          "value": "max"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "default",
  "id": "mistral-vibe",
  "modes": [
    {
      "description": "Requires approval for tool executions",
      "id": "default",
      "name": "Default"
    },
    {
      "description": "Read-only agent for exploration and planning",
      "id": "plan",
      "name": "Plan"
    },
    {
      "description": "Auto-approves file edits only",
      "id": "accept-edits",
      "name": "Accept Edits"
    },
    {
      "description": "Auto-approves all tool executions",
      "id": "auto-approve",
      "name": "Auto Approve"
    },
    {
      "description": "Read-only conversational mode for questions and discussions",
      "id": "chat",
      "name": "Chat"
    }
  ],
  "name": "Mistral Vibe",
  "protocolVersion": 1,
  "version": "2.18.0"
};
