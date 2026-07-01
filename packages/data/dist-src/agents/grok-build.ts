import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "_meta": {
      "x.ai/fs_notify": true,
      "x.ai/hooks": {
        "blockingEvents": [
          "pre_tool_use"
        ],
        "decisions": [
          "deny"
        ]
      }
    },
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": true
    },
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": false
    }
  },
  "agentInfo": {
    "name": "grok-build",
    "version": "0.2.73"
  },
  "authMethods": [
    {
      "description": "XAI_API_KEY or api_key/env_key in config.toml",
      "id": "xai.api_key",
      "name": "xai.api_key"
    },
    {
      "description": "Sign in with Grok",
      "id": "grok.com",
      "name": "Grok"
    }
  ],
  "commands": [
    {
      "description": "Compress conversation history to save context window",
      "input": {
        "hint": "optional context about what to preserve"
      },
      "name": "compact"
    },
    {
      "description": "Toggle always-approve mode (skip all permission prompts)",
      "input": {
        "hint": "on|off"
      },
      "name": "always-approve"
    },
    {
      "description": "Show context window usage and session stats",
      "input": null,
      "name": "context"
    },
    {
      "description": "Show session details (model, turns, context usage)",
      "input": null,
      "name": "session-info"
    },
    {
      "description": "Send feedback about the current session",
      "input": {
        "hint": "feedback text"
      },
      "name": "feedback"
    },
    {
      "description": "Run a prompt on a recurring interval",
      "input": {
        "hint": "[interval] <prompt>"
      },
      "name": "loop"
    },
    {
      "_meta": {
        "path": "/home/runner/.grok/skills/create-skill/SKILL.md",
        "scope": "user"
      },
      "description": "Create a new Grok skill",
      "input": null,
      "name": "create-skill"
    },
    {
      "_meta": {
        "path": "/home/runner/.grok/skills/help/SKILL.md",
        "scope": "user"
      },
      "description": "Grok docs — config, MCP, auth, skills, commands",
      "input": null,
      "name": "help"
    },
    {
      "_meta": {
        "path": "/home/runner/.grok/skills/check-work/SKILL.md",
        "scope": "user"
      },
      "description": "Verify changes with a subagent",
      "input": null,
      "name": "check-work"
    },
    {
      "_meta": {
        "path": "/home/runner/.grok/skills/imagine/SKILL.md",
        "scope": "user"
      },
      "description": "Prompting and workflow guidance for Imagine image tools",
      "input": null,
      "name": "imagine"
    },
    {
      "_meta": {
        "path": "/home/runner/.grok/skills/code-review/SKILL.md",
        "scope": "user"
      },
      "description": "Run an extremely strict maintainability review for abstraction quality, giant files, and spaghetti-condition growth. Use for a deep code quality audit or an especially harsh maintainability review.",
      "input": null,
      "name": "code-review"
    },
    {
      "_meta": {
        "path": "/home/runner/.grok/skills/docx/SKILL.md",
        "scope": "user"
      },
      "description": "Use this skill whenever the user wants to create, read, edit, or manipulate Word documents (.docx files). Triggers include: any mention of 'Word doc', 'word document', '.docx', or requests to produce professional documents with formatting like tables of contents, headings, page numbers, or letterheads. Also use when extracting or reorganizing content from .docx files, inserting or replacing images in documents, performing find-and-replace in Word files, working with tracked changes or comments, or converting content into a polished Word document. If the user asks for a 'report', 'memo', 'letter', 'template', or similar deliverable as a Word or .docx file, use this skill. Do NOT use for PDFs, spreadsheets, Google Docs, or general coding tasks unrelated to document generation.",
      "input": null,
      "name": "docx"
    },
    {
      "_meta": {
        "path": "/home/runner/.grok/skills/xlsx/SKILL.md",
        "scope": "user"
      },
      "description": "Use this skill any time a spreadsheet file is the primary input or output. This means any task where the user wants to: open, read, edit, or fix an existing .xlsx, .xlsm, .csv, or .tsv file (e.g., adding columns, computing formulas, formatting, charting, cleaning messy data); create a new spreadsheet from scratch or from other data sources; or convert between tabular file formats. Trigger especially when the user references a spreadsheet file by name or path — even casually (like \"the xlsx in my downloads\") — and wants something done to it or produced from it. Also trigger for cleaning or restructuring messy tabular data files (malformed rows, misplaced headers, junk data) into proper spreadsheets. The deliverable must be a spreadsheet file. Do NOT trigger when the primary deliverable is a Word document, HTML report, standalone Python script, database pipeline, or Google Sheets API integration, even if tabular data is involved.",
      "input": null,
      "name": "xlsx"
    },
    {
      "_meta": {
        "path": "/home/runner/.grok/skills/pptx/SKILL.md",
        "scope": "user"
      },
      "description": "Use this skill any time a .pptx file is involved in any way — as input, output, or both. This includes: creating slide decks, pitch decks, or presentations; reading, parsing, or extracting text from any .pptx file (even if the extracted content will be used elsewhere, like in an email or summary); editing, modifying, or updating existing presentations; combining or splitting slide files; working with templates, layouts, speaker notes, or comments. Trigger whenever the user mentions \"deck,\" \"slides,\" \"presentation,\" or references a .pptx filename, regardless of what they plan to do with the content afterward. If a .pptx file needs to be opened, created, or touched, use this skill.",
      "input": null,
      "name": "pptx"
    }
  ],
  "configOptions": [],
  "currentModeId": null,
  "currentModelId": null,
  "currentReasoningEffortId": null,
  "id": "grok-build",
  "models": [],
  "modes": [],
  "name": "Grok Build",
  "protocolVersion": 1,
  "reasoningEfforts": [],
  "version": "0.2.73"
};
