import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": true
    },
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "list": {}
    }
  },
  "agentInfo": {
    "name": "Copilot",
    "title": "Copilot",
    "version": "1.0.65"
  },
  "authMethods": [
    {
      "_meta": {
        "terminal-auth": {
          "args": [
            "login"
          ],
          "command": "/Volumes/ORICO/Users/jiangwei/.npm/_npx/a6df615aaf41884e/node_modules/@github/copilot-darwin-arm64/copilot",
          "label": "Copilot Login"
        }
      },
      "description": "Run `copilot login` in the terminal",
      "id": "copilot-login",
      "name": "Log in with Copilot CLI"
    }
  ],
  "commands": [
    {
      "description": "Add a directory to the allowed list for file access",
      "input": {
        "hint": "directory"
      },
      "name": "add-dir"
    },
    {
      "description": "Enable all permissions",
      "input": {
        "hint": "[on|off|show]"
      },
      "name": "allow-all"
    },
    {
      "description": "Toggle autopilot mode",
      "input": {
        "hint": "[on|off]"
      },
      "name": "autopilot"
    },
    {
      "description": "Summarize conversation history to reduce context window usage. Optionally provide focus instructions.",
      "input": {
        "hint": "focus instructions"
      },
      "name": "compact"
    },
    {
      "description": "Session history tools and insights",
      "input": {
        "hint": "standup|search|tips|cost-tips|improve|reindex"
      },
      "name": "chronicle"
    },
    {
      "description": "Show context window token usage and visualization",
      "name": "context"
    },
    {
      "description": "Change working directory or show current directory",
      "input": {
        "hint": "directory"
      },
      "name": "cwd"
    },
    {
      "description": "Show loaded environment details (instructions, MCP servers, skills, agents, hooks, plugins, LSPs, extensions)",
      "name": "env"
    },
    {
      "description": "Schedule a recurring prompt or skill for this session",
      "input": {
        "hint": "<interval> <prompt>"
      },
      "name": "every"
    },
    {
      "description": "Schedule a one-shot prompt or skill for this session",
      "input": {
        "hint": "<delay> <prompt>"
      },
      "name": "after"
    },
    {
      "description": "Enable fleet mode for parallel subagent execution",
      "input": {
        "hint": "prompt"
      },
      "name": "fleet"
    },
    {
      "description": "Initialize Copilot instructions for this repository",
      "input": {
        "hint": "[suppress]"
      },
      "name": "init"
    },
    {
      "description": "Display all allowed directories for file access",
      "name": "list-dirs"
    },
    {
      "description": "Manage MCP server configuration",
      "input": {
        "hint": "list|show|enable|disable|reload"
      },
      "name": "mcp"
    },
    {
      "description": "Show memory status, or enable/disable memory across sessions",
      "input": {
        "hint": "[on|off|show]"
      },
      "name": "memory"
    },
    {
      "description": "Select AI model to use",
      "input": {
        "hint": "model"
      },
      "name": "model"
    },
    {
      "description": "Create an implementation plan before coding",
      "input": {
        "hint": "prompt"
      },
      "name": "plan"
    },
    {
      "description": "Manage plugins and plugin marketplaces",
      "input": {
        "hint": "list"
      },
      "name": "plugin"
    },
    {
      "description": "Rename the current session",
      "input": {
        "hint": "name"
      },
      "name": "rename"
    },
    {
      "description": "Run deep research investigation using GitHub search and web sources",
      "input": {
        "hint": "topic"
      },
      "name": "research"
    },
    {
      "description": "Show remote status or toggle remote control from GitHub web and mobile",
      "input": {
        "hint": "[on|off|show]"
      },
      "name": "remote"
    },
    {
      "description": "Reset the list of allowed tools",
      "name": "reset-allowed-tools"
    },
    {
      "description": "Run code review agent to analyze changes",
      "input": {
        "hint": "additional instructions"
      },
      "name": "review"
    },
    {
      "description": "Get an independent critique of your current work from the rubber duck agent",
      "input": {
        "hint": "additional instructions"
      },
      "name": "rubber-duck"
    },
    {
      "description": "Configure sandbox modes",
      "input": {
        "hint": "[enable|disable]"
      },
      "name": "sandbox"
    },
    {
      "description": "Analyze staged and unstaged changes for security vulnerabilities.",
      "input": {
        "hint": "additional instructions"
      },
      "name": "security-review"
    },
    {
      "description": "View and manage sessions",
      "input": {
        "hint": "info|checkpoints|files|plan|rename"
      },
      "name": "session"
    },
    {
      "description": "Manage skills for enhanced capabilities",
      "input": {
        "hint": "list|info|reload"
      },
      "name": "skills"
    },
    {
      "description": "Manage Copilot Subconscious memory consolidation",
      "input": {
        "hint": "run"
      },
      "name": "subconscious"
    },
    {
      "description": "Display session usage metrics and statistics",
      "name": "usage"
    },
    {
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "artifact-static-site"
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
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "high-end-visual-design"
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
      "currentValue": "https://agentclientprotocol.com/protocol/session-modes#agent",
      "description": "Controls how Copilot responds: a conversational agent, planning multi-step work, or autonomous autopilot.",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "description": "Default agent mode for conversational interactions",
          "name": "Agent",
          "value": "https://agentclientprotocol.com/protocol/session-modes#agent"
        },
        {
          "description": "Plan mode for creating and executing multi-step plans",
          "name": "Plan",
          "value": "https://agentclientprotocol.com/protocol/session-modes#plan"
        },
        {
          "description": "Autonomous mode that enables allow-all and runs until task completion without user interaction (experimental)",
          "name": "Autopilot",
          "value": "https://agentclientprotocol.com/protocol/session-modes#autopilot"
        }
      ],
      "type": "select"
    },
    {
      "category": "permissions",
      "currentValue": "off",
      "description": "Controls whether Copilot prompts for approval before using tools, accessing paths, or fetching URLs.",
      "id": "allow_all",
      "name": "Allow All",
      "options": [
        {
          "description": "Automatically approve all tool, path, and URL requests",
          "name": "On",
          "value": "on"
        },
        {
          "description": "Require approval for tool, path, and URL requests",
          "name": "Off",
          "value": "off"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "https://agentclientprotocol.com/protocol/session-modes#agent",
  "currentModelId": null,
  "currentReasoningEffortId": null,
  "id": "github-copilot-cli",
  "models": [],
  "modes": [
    {
      "description": "Default agent mode for conversational interactions",
      "id": "https://agentclientprotocol.com/protocol/session-modes#agent",
      "name": "Agent"
    },
    {
      "description": "Plan mode for creating and executing multi-step plans",
      "id": "https://agentclientprotocol.com/protocol/session-modes#plan",
      "name": "Plan"
    },
    {
      "description": "Autonomous mode that enables allow-all and runs until task completion without user interaction (experimental)",
      "id": "https://agentclientprotocol.com/protocol/session-modes#autopilot",
      "name": "Autopilot"
    }
  ],
  "name": "GitHub Copilot",
  "protocolVersion": 1,
  "reasoningEfforts": [],
  "version": "1.0.65"
};
