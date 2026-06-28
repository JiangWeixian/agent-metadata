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
    "version": "0.2.72"
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
      "description": "Manage plugins (list, reload, trust, add, remove)",
      "input": {
        "hint": "list | reload | trust <path> | add <path> | remove <path>"
      },
      "name": "plugins"
    },
    {
      "description": "Reload plugins from disk (alias for /plugins reload)",
      "input": null,
      "name": "reload-plugins"
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
        "path": "/Volumes/ORICO/Users/jiangwei/.grok/skills/code-review/SKILL.md",
        "scope": "user"
      },
      "description": "Run an extremely strict maintainability review for abstraction quality, giant files, and spaghetti-condition growth. Use for a deep code quality audit or an especially harsh maintainability review.",
      "input": null,
      "name": "code-review"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.grok/skills/xlsx/SKILL.md",
        "scope": "user"
      },
      "description": "Use this skill any time a spreadsheet file is the primary input or output. This means any task where the user wants to: open, read, edit, or fix an existing .xlsx, .xlsm, .csv, or .tsv file (e.g., adding columns, computing formulas, formatting, charting, cleaning messy data); create a new spreadsheet from scratch or from other data sources; or convert between tabular file formats. Trigger especially when the user references a spreadsheet file by name or path — even casually (like \"the xlsx in my downloads\") — and wants something done to it or produced from it. Also trigger for cleaning or restructuring messy tabular data files (malformed rows, misplaced headers, junk data) into proper spreadsheets. The deliverable must be a spreadsheet file. Do NOT trigger when the primary deliverable is a Word document, HTML report, standalone Python script, database pipeline, or Google Sheets API integration, even if tabular data is involved.",
      "input": null,
      "name": "xlsx"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.grok/skills/create-skill/SKILL.md",
        "scope": "user"
      },
      "description": "Create a new Grok skill",
      "input": null,
      "name": "create-skill"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.grok/skills/pptx/SKILL.md",
        "scope": "user"
      },
      "description": "Use this skill any time a .pptx file is involved in any way — as input, output, or both. This includes: creating slide decks, pitch decks, or presentations; reading, parsing, or extracting text from any .pptx file (even if the extracted content will be used elsewhere, like in an email or summary); editing, modifying, or updating existing presentations; combining or splitting slide files; working with templates, layouts, speaker notes, or comments. Trigger whenever the user mentions \"deck,\" \"slides,\" \"presentation,\" or references a .pptx filename, regardless of what they plan to do with the content afterward. If a .pptx file needs to be opened, created, or touched, use this skill.",
      "input": null,
      "name": "pptx"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.grok/skills/check-work/SKILL.md",
        "scope": "user"
      },
      "description": "Verify changes with a subagent",
      "input": null,
      "name": "check-work"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.grok/skills/docx/SKILL.md",
        "scope": "user"
      },
      "description": "Use this skill whenever the user wants to create, read, edit, or manipulate Word documents (.docx files). Triggers include: any mention of 'Word doc', 'word document', '.docx', or requests to produce professional documents with formatting like tables of contents, headings, page numbers, or letterheads. Also use when extracting or reorganizing content from .docx files, inserting or replacing images in documents, performing find-and-replace in Word files, working with tracked changes or comments, or converting content into a polished Word document. If the user asks for a 'report', 'memo', 'letter', 'template', or similar deliverable as a Word or .docx file, use this skill. Do NOT use for PDFs, spreadsheets, Google Docs, or general coding tasks unrelated to document generation.",
      "input": null,
      "name": "docx"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.grok/skills/imagine/SKILL.md",
        "scope": "user"
      },
      "description": "Prompting and workflow guidance for Imagine image tools",
      "input": null,
      "name": "imagine"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.grok/skills/help/SKILL.md",
        "scope": "user"
      },
      "description": "Grok docs — config, MCP, auth, skills, commands",
      "input": null,
      "name": "help"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.agents/skills/pdf/SKILL.md",
        "scope": "user"
      },
      "description": "Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): \"make a PDF\", \"generate a report\", \"write a proposal\", \"create a resume\", \"beautiful PDF\", \"professional document\", \"cover page\", \"polished PDF\", \"client-ready document\". FILL (complete form fields): \"fill in the form\", \"fill out this PDF\", \"complete the form fields\", \"write values into PDF\", \"what fields does this PDF have\". REFORMAT (apply design to an existing doc): \"reformat this document\", \"apply our style\", \"convert this Markdown/text to PDF\", \"make this doc look good\", \"re-style this PDF\". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.",
      "input": null,
      "name": "pdf"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.agents/skills/find-skills/SKILL.md",
        "scope": "user"
      },
      "description": "Helps users discover and install agent skills when they ask questions like \"how do I do X\", \"find a skill for X\", \"is there a skill that can...\", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.",
      "input": null,
      "name": "find-skills"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.agents/skills/deep-investigate/SKILL.md",
        "scope": "user"
      },
      "description": "Multi Agents Looping — a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "input": null,
      "name": "deep-investigate"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.agents/skills/artifact-static-site/SKILL.md",
        "scope": "user"
      },
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "input": null,
      "name": "artifact-static-site"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.agents/skills/skill-creator/SKILL.md",
        "scope": "user"
      },
      "description": "Create or update a skill",
      "input": null,
      "name": "skill-creator"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.agents/skills/pptx-generator/SKILL.md",
        "scope": "user"
      },
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "input": null,
      "name": "pptx-generator"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.agents/skills/skill-installer/SKILL.md",
        "scope": "user"
      },
      "description": "Install curated skills from openai/skills or other repos",
      "input": null,
      "name": "skill-installer"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.agents/skills/docs-code/SKILL.md",
        "scope": "user"
      },
      "description": "Use when asked to analyze code and add explanatory code annotations, file headers, doc comments, inline comments, or JSX-safe comments.",
      "input": null,
      "name": "docs-code"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.agents/skills/docs-sprint/SKILL.md",
        "scope": "user"
      },
      "description": "Docs-driven delivery workflow. Use when splitting design docs into tasks, creating implementation plans under docs/plan, executing develop/verify/merge cycles, maintaining design doc consistency, or writing UI layout documentation with ASCII diagrams.",
      "input": null,
      "name": "docs-sprint"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.agents/skills/gpt-taste/SKILL.md",
        "scope": "user"
      },
      "description": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing.",
      "input": null,
      "name": "gpt-taste"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.agents/skills/high-end-visual-design/SKILL.md",
        "scope": "user"
      },
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "input": null,
      "name": "high-end-visual-design"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/pair-agent/SKILL.md",
        "scope": "user"
      },
      "description": "Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to \"pair agent\", \"connect agent\", \"share browser\", \"remote browser\",\n\"let another agent use my browser\", or \"give browser access\". (gstack)\nVoice triggers (speech-to-text aliases): \"pair agent\", \"connect agent\", \"share my browser\", \"remote browser access\".",
      "input": null,
      "name": "pair-agent"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/benchmark/SKILL.md",
        "scope": "user"
      },
      "description": "Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: \"performance\", \"benchmark\", \"page speed\", \"lighthouse\", \"web vitals\",\n\"bundle size\", \"load time\". (gstack)\nVoice triggers (speech-to-text aliases): \"speed test\", \"check performance\".",
      "input": null,
      "name": "benchmark"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/design-html/SKILL.md",
        "scope": "user"
      },
      "description": "Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: \"finalize this design\", \"turn this into HTML\",\n\"build me a page\", \"implement this design\", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): \"build the design\", \"code the mockup\", \"make it real\".",
      "input": null,
      "name": "design-html"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/plan-tune/SKILL.md",
        "scope": "user"
      },
      "description": "Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface — no CLI syntax required.\n\nUse when asked to \"tune questions\", \"stop asking me that\", \"too many questions\",\n\"show my profile\", \"what questions have I been asked\", \"show my vibe\",\n\"developer profile\", or \"turn off question tuning\". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time.",
      "input": null,
      "name": "plan-tune"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/design-shotgun/SKILL.md",
        "scope": "user"
      },
      "description": "Design shotgun: generate multiple AI design variants, open a comparison board,\ncollect structured feedback, and iterate. Standalone design exploration you can\nrun anytime. Use when: \"explore designs\", \"show me options\", \"design variants\",\n\"visual brainstorm\", or \"I don't like how this looks\".\nProactively suggest when the user describes a UI feature but hasn't seen\nwhat it could look like. (gstack)",
      "input": null,
      "name": "design-shotgun"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/plan-design-review/SKILL.md",
        "scope": "user"
      },
      "description": "Designer's eye plan review — interactive, like CEO and Eng review.\nRates each design dimension 0-10, explains what would make it a 10,\nthen fixes the plan to get there. Works in plan mode. For live site\nvisual audits, use /design-review. Use when asked to \"review the design plan\"\nor \"design critique\".\nProactively suggest when the user has a plan with UI/UX components that\nshould be reviewed before implementation. (gstack)",
      "input": null,
      "name": "plan-design-review"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/autoplan/SKILL.md",
        "scope": "user"
      },
      "description": "Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to \"auto review\", \"autoplan\", \"run all reviews\", \"review this plan\nautomatically\", or \"make the decisions for me\".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): \"auto plan\", \"automatic review\".",
      "input": null,
      "name": "autoplan"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/design-consultation/SKILL.md",
        "scope": "user"
      },
      "description": "Design consultation: understands your product, researches the landscape, proposes a\ncomplete design system (aesthetic, typography, color, layout, spacing, motion), and\ngenerates font+color preview pages. Creates DESIGN.md as your project's design source\nof truth. For existing sites, use /plan-design-review to infer the system instead.\nUse when asked to \"design system\", \"brand guidelines\", or \"create DESIGN.md\".\nProactively suggest when starting a new project's UI with no existing\ndesign system or DESIGN.md. (gstack)",
      "input": null,
      "name": "design-consultation"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/learn/SKILL.md",
        "scope": "user"
      },
      "description": "Manage project learnings. Review, search, prune, and export what gstack\nhas learned across sessions. Use when asked to \"what have we learned\",\n\"show learnings\", \"prune stale learnings\", or \"export learnings\".\nProactively suggest when the user asks about past patterns or wonders\n\"didn't we fix this before?\"",
      "input": null,
      "name": "learn"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/freeze/SKILL.md",
        "scope": "user"
      },
      "description": "Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n\"fixing\" unrelated code, or when you want to scope changes to one module.\nUse when asked to \"freeze\", \"restrict edits\", \"only edit this folder\",\nor \"lock down edits\". (gstack)",
      "input": null,
      "name": "freeze"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/careful/SKILL.md",
        "scope": "user"
      },
      "description": "Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to \"be careful\", \"safety mode\",\n\"prod mode\", or \"careful mode\". (gstack)",
      "input": null,
      "name": "careful"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/cso/SKILL.md",
        "scope": "user"
      },
      "description": "Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: \"security audit\", \"threat model\", \"pentest review\", \"OWASP\", \"CSO review\". (gstack)\nVoice triggers (speech-to-text aliases): \"see-so\", \"see so\", \"security review\", \"security check\", \"vulnerability scan\", \"run security\".",
      "input": null,
      "name": "cso"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/canary/SKILL.md",
        "scope": "user"
      },
      "description": "Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: \"monitor deploy\", \"canary\", \"post-deploy check\",\n\"watch production\", \"verify deploy\". (gstack)",
      "input": null,
      "name": "canary"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/open-gstack-browser/SKILL.md",
        "scope": "user"
      },
      "description": "Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to \"open gstack browser\", \"launch browser\", \"connect chrome\",\n\"open chrome\", \"real browser\", \"launch chrome\", \"side panel\", or \"control my browser\".\nVoice triggers (speech-to-text aliases): \"show me the browser\".",
      "input": null,
      "name": "open-gstack-browser"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/investigate/SKILL.md",
        "scope": "user"
      },
      "description": "Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to \"debug this\", \"fix this bug\", \"why is this broken\",\n\"investigate this error\", or \"root cause analysis\".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, \"it was working\nyesterday\", or is troubleshooting why something stopped working. (gstack)",
      "input": null,
      "name": "investigate"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/context-restore/SKILL.md",
        "scope": "user"
      },
      "description": "Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off — even across Conductor workspace handoffs.\nUse when asked to \"resume\", \"restore context\", \"where was I\", or\n\"pick up where I left off\". Pair with /context-save.\nFormerly /checkpoint resume — renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack)",
      "input": null,
      "name": "context-restore"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/document-release/SKILL.md",
        "scope": "user"
      },
      "description": "Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to \"update the docs\", \"sync documentation\", or \"post-ship docs\".\nProactively suggest after a PR is merged or code is shipped. (gstack)",
      "input": null,
      "name": "document-release"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/health/SKILL.md",
        "scope": "user"
      },
      "description": "Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: \"health check\",\n\"code quality\", \"how healthy is the codebase\", \"run all checks\",\n\"quality score\". (gstack)",
      "input": null,
      "name": "health"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack-upgrade/SKILL.md",
        "scope": "user"
      },
      "description": "Upgrade gstack to the latest version. Detects global vs vendored install,\nruns the upgrade, and shows what's new. Use when asked to \"upgrade gstack\",\n\"update gstack\", or \"get latest version\".\nVoice triggers (speech-to-text aliases): \"upgrade the tools\", \"update the tools\", \"gee stack upgrade\", \"g stack upgrade\".",
      "input": null,
      "name": "gstack-upgrade"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/land-and-deploy/SKILL.md",
        "scope": "user"
      },
      "description": "Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: \"merge\", \"land\", \"deploy\", \"merge and verify\",\n\"land it\", \"ship it to production\". (gstack)",
      "input": null,
      "name": "land-and-deploy"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/codex/SKILL.md",
        "scope": "user"
      },
      "description": "OpenAI Codex CLI wrapper — three modes. Code review: independent diff review via\ncodex review with pass/fail gate. Challenge: adversarial mode that tries to break\nyour code. Consult: ask codex anything with session continuity for follow-ups.\nThe \"200 IQ autistic developer\" second opinion. Use when asked to \"codex review\",\n\"codex challenge\", \"ask codex\", \"second opinion\", or \"consult codex\". (gstack)\nVoice triggers (speech-to-text aliases): \"code x\", \"code ex\", \"get another opinion\".",
      "input": null,
      "name": "codex"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/SKILL.md",
        "scope": "user"
      },
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate pages, interact with\nelements, verify state, diff before/after, take annotated screenshots, test responsive\nlayouts, forms, uploads, dialogs, and capture bug evidence. Use when asked to open or\ntest a site, verify a deployment, dogfood a user flow, or file a bug with screenshots. (gstack)",
      "input": null,
      "name": "gstack"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-browse/SKILL.md",
        "scope": "user"
      },
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to \"open in browser\", \"test the\nsite\", \"take a screenshot\", or \"dogfood this\". (gstack)",
      "input": null,
      "name": "browse"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-guard/SKILL.md",
        "scope": "user"
      },
      "description": "Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to \"guard mode\",\n\"full safety\", \"lock it down\", or \"maximum safety\". (gstack)",
      "input": null,
      "name": "guard"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-plan-ceo-review/SKILL.md",
        "scope": "user"
      },
      "description": "CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to \"think bigger\", \"expand scope\", \"strategy review\", \"rethink this\",\nor \"is this ambitious enough\".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack)",
      "input": null,
      "name": "plan-ceo-review"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-qa-only/SKILL.md",
        "scope": "user"
      },
      "description": "Report-only QA testing. Systematically tests a web application and produces a\nstructured report with health score, screenshots, and repro steps — but never\nfixes anything. Use when asked to \"just report bugs\", \"qa report only\", or\n\"test but don't fix\". For the full test-fix-verify loop, use /qa instead.\nProactively suggest when the user wants a bug report without any code changes. (gstack)\nVoice triggers (speech-to-text aliases): \"bug report\", \"just check for bugs\".",
      "input": null,
      "name": "qa-only"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-plan-eng-review/SKILL.md",
        "scope": "user"
      },
      "description": "Eng manager-mode plan review. Lock in the execution plan — architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n\"review the architecture\", \"engineering review\", or \"lock in the plan\".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding — to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): \"tech review\", \"technical review\", \"plan engineering review\".",
      "input": null,
      "name": "plan-eng-review"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-review/SKILL.md",
        "scope": "user"
      },
      "description": "Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust\nboundary violations, conditional side effects, and other structural issues. Use when\nasked to \"review this PR\", \"code review\", \"pre-landing review\", or \"check my diff\".\nProactively suggest when the user is about to merge or land code changes. (gstack)",
      "input": null,
      "name": "review"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-design-review/SKILL.md",
        "scope": "user"
      },
      "description": "Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,\nAI slop patterns, and slow interactions — then fixes them. Iteratively fixes issues\nin source code, committing each fix atomically and re-verifying with before/after\nscreenshots. For plan-mode design review (before implementation), use /plan-design-review.\nUse when asked to \"audit the design\", \"visual QA\", \"check if it looks good\", or \"design polish\".\nProactively suggest when the user mentions visual inconsistencies or\nwants to polish the look of a live site. (gstack)",
      "input": null,
      "name": "design-review"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-retro/SKILL.md",
        "scope": "user"
      },
      "description": "Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to \"weekly retro\", \"what did we ship\", or \"engineering retrospective\".\nProactively suggest at the end of a work week or sprint. (gstack)",
      "input": null,
      "name": "retro"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-benchmark-models/SKILL.md",
        "scope": "user"
      },
      "description": "Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side — compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers \"which model is actually best\nfor this skill?\" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: \"benchmark models\", \"compare models\",\n\"which model is best for X\", \"cross-model comparison\", \"model shootout\". (gstack)\nVoice triggers (speech-to-text aliases): \"compare models\", \"model shootout\", \"which model is best\".",
      "input": null,
      "name": "benchmark-models"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-unfreeze/SKILL.md",
        "scope": "user"
      },
      "description": "Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to \"unfreeze\", \"unlock edits\", \"remove freeze\", or\n\"allow all edits\". (gstack)",
      "input": null,
      "name": "unfreeze"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-claude/SKILL.md",
        "scope": "user"
      },
      "description": "Claude Code CLI wrapper for non-Claude hosts - three modes. Review: independent\ndiff review via claude -p. Challenge: adversarial failure-mode review. Consult:\nask Claude about the repo with read-only file tools. Use when asked for \"claude\nreview\", \"claude challenge\", \"ask claude\", \"second opinion from claude\", or\n\"outside voice\". (gstack)",
      "input": null,
      "name": "claude"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-ship/SKILL.md",
        "scope": "user"
      },
      "description": "Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to \"ship\", \"deploy\",\n\"push to main\", \"create a PR\", \"merge and push\", or \"get it deployed\".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)",
      "input": null,
      "name": "ship"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-make-pdf/SKILL.md",
        "scope": "user"
      },
      "description": "Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact — a finished artifact. Use when asked to \"make a PDF\", \"export to\nPDF\", \"turn this markdown into a PDF\", or \"generate a document\". (gstack)\nVoice triggers (speech-to-text aliases): \"make this a pdf\", \"make it a pdf\", \"export to pdf\", \"turn this into a pdf\", \"turn this markdown into a pdf\", \"generate a pdf\", \"make a pdf from\", \"pdf this markdown\".",
      "input": null,
      "name": "make-pdf"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-setup-deploy/SKILL.md",
        "scope": "user"
      },
      "description": "Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: \"setup deploy\", \"configure deployment\", \"set up land-and-deploy\",\n\"how do I deploy with gstack\", \"add deploy config\".",
      "input": null,
      "name": "setup-deploy"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-context-save/SKILL.md",
        "scope": "user"
      },
      "description": "Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to \"save progress\", \"save state\", \"context save\", or\n\"save my work\". Pair with /context-restore to resume later.\nFormerly /checkpoint — renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack)",
      "input": null,
      "name": "context-save"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-scrape/SKILL.md",
        "scope": "user"
      },
      "description": "Pull data from a web page. First call on a new intent prototypes the flow\nvia $B primitives and returns JSON. Subsequent calls on a matching intent\nroute to a codified browser-skill and return in ~200ms. Read-only — for\nmutating flows (form fills, clicks, submissions), use /automate.\nUse when asked to \"scrape\", \"get data from\", \"pull\", \"extract from\", or\n\"what's on\" a page. (gstack)",
      "input": null,
      "name": "scrape"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-qa/SKILL.md",
        "scope": "user"
      },
      "description": "Systematically QA test a web application and fix bugs found. Runs QA testing,\nthen iteratively fixes bugs in source code, committing each fix atomically and\nre-verifying. Use when asked to \"qa\", \"QA\", \"test this site\", \"find bugs\",\n\"test and fix\", or \"fix what's broken\".\nProactively suggest when the user says a feature is ready for testing\nor asks \"does this work?\". Three tiers: Quick (critical/high only),\nStandard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,\nfix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)\nVoice triggers (speech-to-text aliases): \"quality check\", \"test the app\", \"run QA\".",
      "input": null,
      "name": "qa"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-setup-browser-cookies/SKILL.md",
        "scope": "user"
      },
      "description": "Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to \"import cookies\",\n\"login to the site\", or \"authenticate the browser\". (gstack)",
      "input": null,
      "name": "setup-browser-cookies"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-devex-review/SKILL.md",
        "scope": "user"
      },
      "description": "Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n\"test the DX\", \"DX audit\", \"developer experience test\", or \"try the\nonboarding\". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): \"dx audit\", \"test the developer experience\", \"try the onboarding\", \"developer experience test\".",
      "input": null,
      "name": "devex-review"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-landing-report/SKILL.md",
        "scope": "user"
      },
      "description": "Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots\nare currently claimed by open PRs, which sibling Conductor workspaces have\nWIP work likely to ship soon, and what slot /ship would pick next. No\nmutations — just a snapshot. Use when asked to \"landing report\", \"what's in\nthe queue\", \"show me open PRs\", or \"which version do I claim next\". (gstack)",
      "input": null,
      "name": "landing-report"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-office-hours/SKILL.md",
        "scope": "user"
      },
      "description": "YC Office Hours — two modes. Startup mode: six forcing questions that expose\ndemand reality, status quo, desperate specificity, narrowest wedge, observation,\nand future-fit. Builder mode: design thinking brainstorming for side projects,\nhackathons, learning, and open source. Saves a design doc.\nUse when asked to \"brainstorm this\", \"I have an idea\", \"help me think through\nthis\", \"office hours\", or \"is this worth building\".\nProactively invoke this skill (do NOT answer directly) when the user describes\na new product idea, asks whether something is worth building, wants to think\nthrough design decisions for something that doesn't exist yet, or is exploring\na concept before any code is written.\nUse before /plan-ceo-review or /plan-eng-review. (gstack)",
      "input": null,
      "name": "office-hours"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-plan-devex-review/SKILL.md",
        "scope": "user"
      },
      "description": "Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to \"DX review\", \"developer experience audit\", \"devex review\",\nor \"API design review\".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): \"dx review\", \"developer experience review\", \"devex review\", \"devex audit\", \"API design review\", \"onboarding review\".",
      "input": null,
      "name": "plan-devex-review"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-setup-gbrain/SKILL.md",
        "scope": "user"
      },
      "description": "Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to \"gbrain is running, and this agent\ncan call it.\" Use when: \"setup gbrain\", \"connect gbrain\", \"start\ngbrain\", \"install gbrain\", \"configure gbrain for this machine\". (gstack)",
      "input": null,
      "name": "setup-gbrain"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-skillify/SKILL.md",
        "scope": "user"
      },
      "description": "Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to \"skillify\", \"codify\", \"save this scrape\", or\n\"make this permanent\". (gstack)",
      "input": null,
      "name": "skillify"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/openclaw/skills/gstack-openclaw-investigate/SKILL.md",
        "scope": "user"
      },
      "description": "Use when asked to debug, fix a bug, investigate an error, or do root cause analysis, and when users report errors, stack traces, unexpected behavior, or say something stopped working.",
      "input": null,
      "name": "gstack-openclaw-investigate"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/openclaw/skills/gstack-openclaw-office-hours/SKILL.md",
        "scope": "user"
      },
      "description": "Use when asked to brainstorm, evaluate whether an idea is worth building, run office hours, or think through a new product idea or design direction before any code is written.",
      "input": null,
      "name": "gstack-openclaw-office-hours"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/openclaw/skills/gstack-openclaw-ceo-review/SKILL.md",
        "scope": "user"
      },
      "description": "Use when asked to review a plan, challenge a proposal, run a CEO review, poke holes in an approach, think bigger about scope, or decide whether to expand or reduce the plan.",
      "input": null,
      "name": "gstack-openclaw-ceo-review"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/openclaw/skills/gstack-openclaw-retro/SKILL.md",
        "scope": "user"
      },
      "description": "Weekly engineering retrospective. Analyzes commit history, work patterns, and code quality metrics with persistent history and trend tracking. Team-aware with per-person contributions, praise, and growth areas. Use when asked for weekly retro, what shipped this week, or engineering retrospective.",
      "input": null,
      "name": "gstack-openclaw-retro"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/browser-skills/hackernews-frontpage/SKILL.md",
        "scope": "user"
      },
      "description": "Scrape the Hacker News front page (titles, points, comment counts).",
      "input": null,
      "name": "hackernews-frontpage"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/plugins/cache/obsidian-skills/obsidian/1.0.1/skills/defuddle/SKILL.md",
        "scope": "user"
      },
      "description": "Extract clean markdown content from web pages using Defuddle CLI, removing clutter and navigation to save tokens. Use instead of WebFetch when the user provides a URL to read or analyze, for online documentation, articles, blog posts, or any standard web page. Do NOT use for URLs ending in .md — those are already markdown, use WebFetch directly.",
      "input": null,
      "name": "defuddle"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/plugins/cache/obsidian-skills/obsidian/1.0.1/skills/obsidian-markdown/SKILL.md",
        "scope": "user"
      },
      "description": "Create and edit Obsidian Flavored Markdown with wikilinks, embeds, callouts, properties, and other Obsidian-specific syntax. Use when working with .md files in Obsidian, or when the user mentions wikilinks, callouts, frontmatter, tags, embeds, or Obsidian notes.",
      "input": null,
      "name": "obsidian-markdown"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/plugins/cache/obsidian-skills/obsidian/1.0.1/skills/obsidian-bases/SKILL.md",
        "scope": "user"
      },
      "description": "Create and edit Obsidian Bases (.base files) with views, filters, formulas, and summaries. Use when working with .base files, creating database-like views of notes, or when the user mentions Bases, table views, card views, filters, or formulas in Obsidian.",
      "input": null,
      "name": "obsidian-bases"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/plugins/cache/obsidian-skills/obsidian/1.0.1/skills/obsidian-cli/SKILL.md",
        "scope": "user"
      },
      "description": "Interact with Obsidian vaults using the Obsidian CLI to read, create, search, and manage notes, tasks, properties, and more. Also supports plugin and theme development with commands to reload plugins, run JavaScript, capture errors, take screenshots, and inspect the DOM. Use when the user asks to interact with their Obsidian vault, manage notes, search vault content, perform vault operations from the command line, or develop and debug Obsidian plugins and themes.",
      "input": null,
      "name": "obsidian-cli"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/plugins/cache/obsidian-skills/obsidian/1.0.1/skills/json-canvas/SKILL.md",
        "scope": "user"
      },
      "description": "Create and edit JSON Canvas files (.canvas) with nodes, edges, groups, and connections. Use when working with .canvas files, creating visual canvases, mind maps, flowcharts, or when the user mentions Canvas files in Obsidian.",
      "input": null,
      "name": "json-canvas"
    }
  ],
  "configOptions": [],
  "currentModeId": null,
  "id": "grok-build",
  "modes": [],
  "name": "Grok Build",
  "protocolVersion": 1,
  "version": "0.2.72"
};
