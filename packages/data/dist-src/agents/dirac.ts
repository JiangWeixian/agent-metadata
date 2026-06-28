import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "loadSession": true,
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    }
  },
  "agentInfo": {
    "name": "dirac",
    "version": "0.4.9"
  },
  "authMethods": [
    {
      "description": "Authenticate with your ChatGPT Plus/Pro/Team subscription",
      "id": "openai-codex-oauth",
      "name": "Sign in with ChatGPT"
    }
  ],
  "commands": [
    {
      "description": "Create a new task with context from the current task",
      "input": {
        "hint": "Create a new task with context from the current task"
      },
      "name": "newtask"
    },
    {
      "description": "Condenses your current context window",
      "input": {
        "hint": "Condenses your current context window"
      },
      "name": "smol"
    },
    {
      "description": "Create a new Dirac rule based on your conversation",
      "input": {
        "hint": "Create a new Dirac rule based on your conversation"
      },
      "name": "newrule"
    },
    {
      "description": "Create a Github issue with Dirac",
      "input": {
        "hint": "Create a Github issue with Dirac"
      },
      "name": "reportbug"
    },
    {
      "description": "Get help with Dirac's internal workings and source code",
      "input": {
        "hint": "Get help with Dirac's internal workings and source code"
      },
      "name": "askDirac"
    },
    {
      "description": "Learn how to use Dirac CLI",
      "input": {
        "hint": "Learn how to use Dirac CLI"
      },
      "name": "help"
    },
    {
      "description": "Reload custom tools from disk",
      "input": {
        "hint": "Reload custom tools from disk"
      },
      "name": "reloadtools"
    },
    {
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "input": {
        "hint": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim."
      },
      "name": "artifact-static-site"
    },
    {
      "description": "Multi Agents Looping — a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "input": {
        "hint": "Multi Agents Looping — a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents."
      },
      "name": "deep-investigate"
    },
    {
      "description": "Use when asked to analyze code and add explanatory code annotations, file headers, doc comments, inline comments, or JSX-safe comments.",
      "input": {
        "hint": "Use when asked to analyze code and add explanatory code annotations, file headers, doc comments, inline comments, or JSX-safe comments."
      },
      "name": "docs-code"
    },
    {
      "description": "Docs-driven delivery workflow. Use when splitting design docs into tasks, creating implementation plans under docs/plan, executing develop/verify/merge cycles, maintaining design doc consistency, or writing UI layout documentation with ASCII diagrams.",
      "input": {
        "hint": "Docs-driven delivery workflow. Use when splitting design docs into tasks, creating implementation plans under docs/plan, executing develop/verify/merge cycles, maintaining design doc consistency, or writing UI layout documentation with ASCII diagrams."
      },
      "name": "docs-sprint"
    },
    {
      "description": "Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document — including when they say \"write a report\", \"draft a proposal\", \"make a contract\", \"fill in this form\", \"reformat to match this template\", or any task whose final output is a .docx file. Even if the user doesn't mention \"docx\" explicitly, if the task implies a printable/formal document, use this skill.\n",
      "input": {
        "hint": "Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document — including when they say \"write a report\", \"draft a proposal\", \"make a contract\", \"fill in this form\", \"reformat to match this template\", or any task whose final output is a .docx file. Even if the user doesn't mention \"docx\" explicitly, if the task implies a printable/formal document, use this skill.\n"
      },
      "name": "docx"
    },
    {
      "description": "Helps users discover and install agent skills when they ask questions like \"how do I do X\", \"find a skill for X\", \"is there a skill that can...\", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.",
      "input": {
        "hint": "Helps users discover and install agent skills when they ask questions like \"how do I do X\", \"find a skill for X\", \"is there a skill that can...\", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill."
      },
      "name": "find-skills"
    },
    {
      "description": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing.",
      "input": {
        "hint": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing."
      },
      "name": "gpt-taste"
    },
    {
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "input": {
        "hint": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic."
      },
      "name": "high-end-visual-design"
    },
    {
      "description": "Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): \"make a PDF\", \"generate a report\", \"write a proposal\", \"create a resume\", \"beautiful PDF\", \"professional document\", \"cover page\", \"polished PDF\", \"client-ready document\". FILL (complete form fields): \"fill in the form\", \"fill out this PDF\", \"complete the form fields\", \"write values into PDF\", \"what fields does this PDF have\". REFORMAT (apply design to an existing doc): \"reformat this document\", \"apply our style\", \"convert this Markdown/text to PDF\", \"make this doc look good\", \"re-style this PDF\". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n",
      "input": {
        "hint": "Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): \"make a PDF\", \"generate a report\", \"write a proposal\", \"create a resume\", \"beautiful PDF\", \"professional document\", \"cover page\", \"polished PDF\", \"client-ready document\". FILL (complete form fields): \"fill in the form\", \"fill out this PDF\", \"complete the form fields\", \"write values into PDF\", \"what fields does this PDF have\". REFORMAT (apply design to an existing doc): \"reformat this document\", \"apply our style\", \"convert this Markdown/text to PDF\", \"make this doc look good\", \"re-style this PDF\". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n"
      },
      "name": "pdf"
    },
    {
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "input": {
        "hint": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides."
      },
      "name": "pptx-generator"
    },
    {
      "description": "Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Codex's capabilities with specialized knowledge, workflows, or tool integrations.",
      "input": {
        "hint": "Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Codex's capabilities with specialized knowledge, workflows, or tool integrations."
      },
      "name": "skill-creator"
    },
    {
      "description": "Install Agents skills into $AGENTS_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos).",
      "input": {
        "hint": "Install Agents skills into $AGENTS_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos)."
      },
      "name": "skill-installer"
    },
    {
      "description": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format.",
      "input": {
        "hint": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format."
      },
      "name": "xlsx"
    },
    {
      "description": "Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to \"auto review\", \"autoplan\", \"run all reviews\", \"review this plan\nautomatically\", or \"make the decisions for me\".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): \"auto plan\", \"automatic review\".\n",
      "input": {
        "hint": "Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to \"auto review\", \"autoplan\", \"run all reviews\", \"review this plan\nautomatically\", or \"make the decisions for me\".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): \"auto plan\", \"automatic review\".\n"
      },
      "name": "autoplan"
    },
    {
      "description": "Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: \"performance\", \"benchmark\", \"page speed\", \"lighthouse\", \"web vitals\",\n\"bundle size\", \"load time\". (gstack)\nVoice triggers (speech-to-text aliases): \"speed test\", \"check performance\".\n",
      "input": {
        "hint": "Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: \"performance\", \"benchmark\", \"page speed\", \"lighthouse\", \"web vitals\",\n\"bundle size\", \"load time\". (gstack)\nVoice triggers (speech-to-text aliases): \"speed test\", \"check performance\".\n"
      },
      "name": "benchmark"
    },
    {
      "description": "Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side — compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers \"which model is actually best\nfor this skill?\" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: \"benchmark models\", \"compare models\",\n\"which model is best for X\", \"cross-model comparison\", \"model shootout\". (gstack)\nVoice triggers (speech-to-text aliases): \"compare models\", \"model shootout\", \"which model is best\".\n",
      "input": {
        "hint": "Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side — compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers \"which model is actually best\nfor this skill?\" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: \"benchmark models\", \"compare models\",\n\"which model is best for X\", \"cross-model comparison\", \"model shootout\". (gstack)\nVoice triggers (speech-to-text aliases): \"compare models\", \"model shootout\", \"which model is best\".\n"
      },
      "name": "benchmark-models"
    },
    {
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to \"open in browser\", \"test the\nsite\", \"take a screenshot\", or \"dogfood this\". (gstack)\n",
      "input": {
        "hint": "Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to \"open in browser\", \"test the\nsite\", \"take a screenshot\", or \"dogfood this\". (gstack)\n"
      },
      "name": "browse"
    },
    {
      "description": "Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: \"monitor deploy\", \"canary\", \"post-deploy check\",\n\"watch production\", \"verify deploy\". (gstack)\n",
      "input": {
        "hint": "Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: \"monitor deploy\", \"canary\", \"post-deploy check\",\n\"watch production\", \"verify deploy\". (gstack)\n"
      },
      "name": "canary"
    },
    {
      "description": "Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to \"be careful\", \"safety mode\",\n\"prod mode\", or \"careful mode\". (gstack)\n",
      "input": {
        "hint": "Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to \"be careful\", \"safety mode\",\n\"prod mode\", or \"careful mode\". (gstack)\n"
      },
      "name": "careful"
    },
    {
      "description": "OpenAI Codex CLI wrapper — three modes. Code review: independent diff review via\ncodex review with pass/fail gate. Challenge: adversarial mode that tries to break\nyour code. Consult: ask codex anything with session continuity for follow-ups.\nThe \"200 IQ autistic developer\" second opinion. Use when asked to \"codex review\",\n\"codex challenge\", \"ask codex\", \"second opinion\", or \"consult codex\". (gstack)\nVoice triggers (speech-to-text aliases): \"code x\", \"code ex\", \"get another opinion\".\n",
      "input": {
        "hint": "OpenAI Codex CLI wrapper — three modes. Code review: independent diff review via\ncodex review with pass/fail gate. Challenge: adversarial mode that tries to break\nyour code. Consult: ask codex anything with session continuity for follow-ups.\nThe \"200 IQ autistic developer\" second opinion. Use when asked to \"codex review\",\n\"codex challenge\", \"ask codex\", \"second opinion\", or \"consult codex\". (gstack)\nVoice triggers (speech-to-text aliases): \"code x\", \"code ex\", \"get another opinion\".\n"
      },
      "name": "codex"
    },
    {
      "description": "Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off — even across Conductor workspace handoffs.\nUse when asked to \"resume\", \"restore context\", \"where was I\", or\n\"pick up where I left off\". Pair with /context-save.\nFormerly /checkpoint resume — renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack)\n",
      "input": {
        "hint": "Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off — even across Conductor workspace handoffs.\nUse when asked to \"resume\", \"restore context\", \"where was I\", or\n\"pick up where I left off\". Pair with /context-save.\nFormerly /checkpoint resume — renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack)\n"
      },
      "name": "context-restore"
    },
    {
      "description": "Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to \"save progress\", \"save state\", \"context save\", or\n\"save my work\". Pair with /context-restore to resume later.\nFormerly /checkpoint — renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack)\n",
      "input": {
        "hint": "Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to \"save progress\", \"save state\", \"context save\", or\n\"save my work\". Pair with /context-restore to resume later.\nFormerly /checkpoint — renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack)\n"
      },
      "name": "context-save"
    },
    {
      "description": "Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: \"security audit\", \"threat model\", \"pentest review\", \"OWASP\", \"CSO review\". (gstack)\nVoice triggers (speech-to-text aliases): \"see-so\", \"see so\", \"security review\", \"security check\", \"vulnerability scan\", \"run security\".\n",
      "input": {
        "hint": "Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: \"security audit\", \"threat model\", \"pentest review\", \"OWASP\", \"CSO review\". (gstack)\nVoice triggers (speech-to-text aliases): \"see-so\", \"see so\", \"security review\", \"security check\", \"vulnerability scan\", \"run security\".\n"
      },
      "name": "cso"
    },
    {
      "description": "Design consultation: understands your product, researches the landscape, proposes a\ncomplete design system (aesthetic, typography, color, layout, spacing, motion), and\ngenerates font+color preview pages. Creates DESIGN.md as your project's design source\nof truth. For existing sites, use /plan-design-review to infer the system instead.\nUse when asked to \"design system\", \"brand guidelines\", or \"create DESIGN.md\".\nProactively suggest when starting a new project's UI with no existing\ndesign system or DESIGN.md. (gstack)\n",
      "input": {
        "hint": "Design consultation: understands your product, researches the landscape, proposes a\ncomplete design system (aesthetic, typography, color, layout, spacing, motion), and\ngenerates font+color preview pages. Creates DESIGN.md as your project's design source\nof truth. For existing sites, use /plan-design-review to infer the system instead.\nUse when asked to \"design system\", \"brand guidelines\", or \"create DESIGN.md\".\nProactively suggest when starting a new project's UI with no existing\ndesign system or DESIGN.md. (gstack)\n"
      },
      "name": "design-consultation"
    },
    {
      "description": "Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: \"finalize this design\", \"turn this into HTML\",\n\"build me a page\", \"implement this design\", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): \"build the design\", \"code the mockup\", \"make it real\".\n",
      "input": {
        "hint": "Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: \"finalize this design\", \"turn this into HTML\",\n\"build me a page\", \"implement this design\", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): \"build the design\", \"code the mockup\", \"make it real\".\n"
      },
      "name": "design-html"
    },
    {
      "description": "Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,\nAI slop patterns, and slow interactions — then fixes them. Iteratively fixes issues\nin source code, committing each fix atomically and re-verifying with before/after\nscreenshots. For plan-mode design review (before implementation), use /plan-design-review.\nUse when asked to \"audit the design\", \"visual QA\", \"check if it looks good\", or \"design polish\".\nProactively suggest when the user mentions visual inconsistencies or\nwants to polish the look of a live site. (gstack)\n",
      "input": {
        "hint": "Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,\nAI slop patterns, and slow interactions — then fixes them. Iteratively fixes issues\nin source code, committing each fix atomically and re-verifying with before/after\nscreenshots. For plan-mode design review (before implementation), use /plan-design-review.\nUse when asked to \"audit the design\", \"visual QA\", \"check if it looks good\", or \"design polish\".\nProactively suggest when the user mentions visual inconsistencies or\nwants to polish the look of a live site. (gstack)\n"
      },
      "name": "design-review"
    },
    {
      "description": "Design shotgun: generate multiple AI design variants, open a comparison board,\ncollect structured feedback, and iterate. Standalone design exploration you can\nrun anytime. Use when: \"explore designs\", \"show me options\", \"design variants\",\n\"visual brainstorm\", or \"I don't like how this looks\".\nProactively suggest when the user describes a UI feature but hasn't seen\nwhat it could look like. (gstack)\n",
      "input": {
        "hint": "Design shotgun: generate multiple AI design variants, open a comparison board,\ncollect structured feedback, and iterate. Standalone design exploration you can\nrun anytime. Use when: \"explore designs\", \"show me options\", \"design variants\",\n\"visual brainstorm\", or \"I don't like how this looks\".\nProactively suggest when the user describes a UI feature but hasn't seen\nwhat it could look like. (gstack)\n"
      },
      "name": "design-shotgun"
    },
    {
      "description": "Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n\"test the DX\", \"DX audit\", \"developer experience test\", or \"try the\nonboarding\". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): \"dx audit\", \"test the developer experience\", \"try the onboarding\", \"developer experience test\".\n",
      "input": {
        "hint": "Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n\"test the DX\", \"DX audit\", \"developer experience test\", or \"try the\nonboarding\". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): \"dx audit\", \"test the developer experience\", \"try the onboarding\", \"developer experience test\".\n"
      },
      "name": "devex-review"
    },
    {
      "description": "Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to \"update the docs\", \"sync documentation\", or \"post-ship docs\".\nProactively suggest after a PR is merged or code is shipped. (gstack)\n",
      "input": {
        "hint": "Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to \"update the docs\", \"sync documentation\", or \"post-ship docs\".\nProactively suggest after a PR is merged or code is shipped. (gstack)\n"
      },
      "name": "document-release"
    },
    {
      "description": "Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n\"fixing\" unrelated code, or when you want to scope changes to one module.\nUse when asked to \"freeze\", \"restrict edits\", \"only edit this folder\",\nor \"lock down edits\". (gstack)\n",
      "input": {
        "hint": "Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n\"fixing\" unrelated code, or when you want to scope changes to one module.\nUse when asked to \"freeze\", \"restrict edits\", \"only edit this folder\",\nor \"lock down edits\". (gstack)\n"
      },
      "name": "freeze"
    },
    {
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate pages, interact with\nelements, verify state, diff before/after, take annotated screenshots, test responsive\nlayouts, forms, uploads, dialogs, and capture bug evidence. Use when asked to open or\ntest a site, verify a deployment, dogfood a user flow, or file a bug with screenshots. (gstack)\n",
      "input": {
        "hint": "Fast headless browser for QA testing and site dogfooding. Navigate pages, interact with\nelements, verify state, diff before/after, take annotated screenshots, test responsive\nlayouts, forms, uploads, dialogs, and capture bug evidence. Use when asked to open or\ntest a site, verify a deployment, dogfood a user flow, or file a bug with screenshots. (gstack)\n"
      },
      "name": "gstack"
    },
    {
      "description": "Upgrade gstack to the latest version. Detects global vs vendored install,\nruns the upgrade, and shows what's new. Use when asked to \"upgrade gstack\",\n\"update gstack\", or \"get latest version\".\nVoice triggers (speech-to-text aliases): \"upgrade the tools\", \"update the tools\", \"gee stack upgrade\", \"g stack upgrade\".\n",
      "input": {
        "hint": "Upgrade gstack to the latest version. Detects global vs vendored install,\nruns the upgrade, and shows what's new. Use when asked to \"upgrade gstack\",\n\"update gstack\", or \"get latest version\".\nVoice triggers (speech-to-text aliases): \"upgrade the tools\", \"update the tools\", \"gee stack upgrade\", \"g stack upgrade\".\n"
      },
      "name": "gstack-upgrade"
    },
    {
      "description": "Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to \"guard mode\",\n\"full safety\", \"lock it down\", or \"maximum safety\". (gstack)\n",
      "input": {
        "hint": "Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to \"guard mode\",\n\"full safety\", \"lock it down\", or \"maximum safety\". (gstack)\n"
      },
      "name": "guard"
    },
    {
      "description": "Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: \"health check\",\n\"code quality\", \"how healthy is the codebase\", \"run all checks\",\n\"quality score\". (gstack)\n",
      "input": {
        "hint": "Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: \"health check\",\n\"code quality\", \"how healthy is the codebase\", \"run all checks\",\n\"quality score\". (gstack)\n"
      },
      "name": "health"
    },
    {
      "description": "Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to \"debug this\", \"fix this bug\", \"why is this broken\",\n\"investigate this error\", or \"root cause analysis\".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, \"it was working\nyesterday\", or is troubleshooting why something stopped working. (gstack)\n",
      "input": {
        "hint": "Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to \"debug this\", \"fix this bug\", \"why is this broken\",\n\"investigate this error\", or \"root cause analysis\".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, \"it was working\nyesterday\", or is troubleshooting why something stopped working. (gstack)\n"
      },
      "name": "investigate"
    },
    {
      "description": "Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: \"merge\", \"land\", \"deploy\", \"merge and verify\",\n\"land it\", \"ship it to production\". (gstack)\n",
      "input": {
        "hint": "Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: \"merge\", \"land\", \"deploy\", \"merge and verify\",\n\"land it\", \"ship it to production\". (gstack)\n"
      },
      "name": "land-and-deploy"
    },
    {
      "description": "Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots\nare currently claimed by open PRs, which sibling Conductor workspaces have\nWIP work likely to ship soon, and what slot /ship would pick next. No\nmutations — just a snapshot. Use when asked to \"landing report\", \"what's in\nthe queue\", \"show me open PRs\", or \"which version do I claim next\". (gstack)\n",
      "input": {
        "hint": "Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots\nare currently claimed by open PRs, which sibling Conductor workspaces have\nWIP work likely to ship soon, and what slot /ship would pick next. No\nmutations — just a snapshot. Use when asked to \"landing report\", \"what's in\nthe queue\", \"show me open PRs\", or \"which version do I claim next\". (gstack)\n"
      },
      "name": "landing-report"
    },
    {
      "description": "Manage project learnings. Review, search, prune, and export what gstack\nhas learned across sessions. Use when asked to \"what have we learned\",\n\"show learnings\", \"prune stale learnings\", or \"export learnings\".\nProactively suggest when the user asks about past patterns or wonders\n\"didn't we fix this before?\"\n",
      "input": {
        "hint": "Manage project learnings. Review, search, prune, and export what gstack\nhas learned across sessions. Use when asked to \"what have we learned\",\n\"show learnings\", \"prune stale learnings\", or \"export learnings\".\nProactively suggest when the user asks about past patterns or wonders\n\"didn't we fix this before?\"\n"
      },
      "name": "learn"
    },
    {
      "description": "Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact — a finished artifact. Use when asked to \"make a PDF\", \"export to\nPDF\", \"turn this markdown into a PDF\", or \"generate a document\". (gstack)\nVoice triggers (speech-to-text aliases): \"make this a pdf\", \"make it a pdf\", \"export to pdf\", \"turn this into a pdf\", \"turn this markdown into a pdf\", \"generate a pdf\", \"make a pdf from\", \"pdf this markdown\".\n",
      "input": {
        "hint": "Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact — a finished artifact. Use when asked to \"make a PDF\", \"export to\nPDF\", \"turn this markdown into a PDF\", or \"generate a document\". (gstack)\nVoice triggers (speech-to-text aliases): \"make this a pdf\", \"make it a pdf\", \"export to pdf\", \"turn this into a pdf\", \"turn this markdown into a pdf\", \"generate a pdf\", \"make a pdf from\", \"pdf this markdown\".\n"
      },
      "name": "make-pdf"
    },
    {
      "description": "YC Office Hours — two modes. Startup mode: six forcing questions that expose\ndemand reality, status quo, desperate specificity, narrowest wedge, observation,\nand future-fit. Builder mode: design thinking brainstorming for side projects,\nhackathons, learning, and open source. Saves a design doc.\nUse when asked to \"brainstorm this\", \"I have an idea\", \"help me think through\nthis\", \"office hours\", or \"is this worth building\".\nProactively invoke this skill (do NOT answer directly) when the user describes\na new product idea, asks whether something is worth building, wants to think\nthrough design decisions for something that doesn't exist yet, or is exploring\na concept before any code is written.\nUse before /plan-ceo-review or /plan-eng-review. (gstack)\n",
      "input": {
        "hint": "YC Office Hours — two modes. Startup mode: six forcing questions that expose\ndemand reality, status quo, desperate specificity, narrowest wedge, observation,\nand future-fit. Builder mode: design thinking brainstorming for side projects,\nhackathons, learning, and open source. Saves a design doc.\nUse when asked to \"brainstorm this\", \"I have an idea\", \"help me think through\nthis\", \"office hours\", or \"is this worth building\".\nProactively invoke this skill (do NOT answer directly) when the user describes\na new product idea, asks whether something is worth building, wants to think\nthrough design decisions for something that doesn't exist yet, or is exploring\na concept before any code is written.\nUse before /plan-ceo-review or /plan-eng-review. (gstack)\n"
      },
      "name": "office-hours"
    },
    {
      "description": "Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to \"open gstack browser\", \"launch browser\", \"connect chrome\",\n\"open chrome\", \"real browser\", \"launch chrome\", \"side panel\", or \"control my browser\".\nVoice triggers (speech-to-text aliases): \"show me the browser\".\n",
      "input": {
        "hint": "Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to \"open gstack browser\", \"launch browser\", \"connect chrome\",\n\"open chrome\", \"real browser\", \"launch chrome\", \"side panel\", or \"control my browser\".\nVoice triggers (speech-to-text aliases): \"show me the browser\".\n"
      },
      "name": "open-gstack-browser"
    },
    {
      "description": "Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to \"pair agent\", \"connect agent\", \"share browser\", \"remote browser\",\n\"let another agent use my browser\", or \"give browser access\". (gstack)\nVoice triggers (speech-to-text aliases): \"pair agent\", \"connect agent\", \"share my browser\", \"remote browser access\".\n",
      "input": {
        "hint": "Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to \"pair agent\", \"connect agent\", \"share browser\", \"remote browser\",\n\"let another agent use my browser\", or \"give browser access\". (gstack)\nVoice triggers (speech-to-text aliases): \"pair agent\", \"connect agent\", \"share my browser\", \"remote browser access\".\n"
      },
      "name": "pair-agent"
    },
    {
      "description": "CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to \"think bigger\", \"expand scope\", \"strategy review\", \"rethink this\",\nor \"is this ambitious enough\".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack)\n",
      "input": {
        "hint": "CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to \"think bigger\", \"expand scope\", \"strategy review\", \"rethink this\",\nor \"is this ambitious enough\".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack)\n"
      },
      "name": "plan-ceo-review"
    },
    {
      "description": "Designer's eye plan review — interactive, like CEO and Eng review.\nRates each design dimension 0-10, explains what would make it a 10,\nthen fixes the plan to get there. Works in plan mode. For live site\nvisual audits, use /design-review. Use when asked to \"review the design plan\"\nor \"design critique\".\nProactively suggest when the user has a plan with UI/UX components that\nshould be reviewed before implementation. (gstack)\n",
      "input": {
        "hint": "Designer's eye plan review — interactive, like CEO and Eng review.\nRates each design dimension 0-10, explains what would make it a 10,\nthen fixes the plan to get there. Works in plan mode. For live site\nvisual audits, use /design-review. Use when asked to \"review the design plan\"\nor \"design critique\".\nProactively suggest when the user has a plan with UI/UX components that\nshould be reviewed before implementation. (gstack)\n"
      },
      "name": "plan-design-review"
    },
    {
      "description": "Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to \"DX review\", \"developer experience audit\", \"devex review\",\nor \"API design review\".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): \"dx review\", \"developer experience review\", \"devex review\", \"devex audit\", \"API design review\", \"onboarding review\".\n",
      "input": {
        "hint": "Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to \"DX review\", \"developer experience audit\", \"devex review\",\nor \"API design review\".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): \"dx review\", \"developer experience review\", \"devex review\", \"devex audit\", \"API design review\", \"onboarding review\".\n"
      },
      "name": "plan-devex-review"
    },
    {
      "description": "Eng manager-mode plan review. Lock in the execution plan — architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n\"review the architecture\", \"engineering review\", or \"lock in the plan\".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding — to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): \"tech review\", \"technical review\", \"plan engineering review\".\n",
      "input": {
        "hint": "Eng manager-mode plan review. Lock in the execution plan — architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n\"review the architecture\", \"engineering review\", or \"lock in the plan\".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding — to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): \"tech review\", \"technical review\", \"plan engineering review\".\n"
      },
      "name": "plan-eng-review"
    },
    {
      "description": "Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface — no CLI syntax required.\n\nUse when asked to \"tune questions\", \"stop asking me that\", \"too many questions\",\n\"show my profile\", \"what questions have I been asked\", \"show my vibe\",\n\"developer profile\", or \"turn off question tuning\". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time.\n",
      "input": {
        "hint": "Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface — no CLI syntax required.\n\nUse when asked to \"tune questions\", \"stop asking me that\", \"too many questions\",\n\"show my profile\", \"what questions have I been asked\", \"show my vibe\",\n\"developer profile\", or \"turn off question tuning\". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time.\n"
      },
      "name": "plan-tune"
    },
    {
      "description": "Systematically QA test a web application and fix bugs found. Runs QA testing,\nthen iteratively fixes bugs in source code, committing each fix atomically and\nre-verifying. Use when asked to \"qa\", \"QA\", \"test this site\", \"find bugs\",\n\"test and fix\", or \"fix what's broken\".\nProactively suggest when the user says a feature is ready for testing\nor asks \"does this work?\". Three tiers: Quick (critical/high only),\nStandard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,\nfix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)\nVoice triggers (speech-to-text aliases): \"quality check\", \"test the app\", \"run QA\".\n",
      "input": {
        "hint": "Systematically QA test a web application and fix bugs found. Runs QA testing,\nthen iteratively fixes bugs in source code, committing each fix atomically and\nre-verifying. Use when asked to \"qa\", \"QA\", \"test this site\", \"find bugs\",\n\"test and fix\", or \"fix what's broken\".\nProactively suggest when the user says a feature is ready for testing\nor asks \"does this work?\". Three tiers: Quick (critical/high only),\nStandard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,\nfix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)\nVoice triggers (speech-to-text aliases): \"quality check\", \"test the app\", \"run QA\".\n"
      },
      "name": "qa"
    },
    {
      "description": "Report-only QA testing. Systematically tests a web application and produces a\nstructured report with health score, screenshots, and repro steps — but never\nfixes anything. Use when asked to \"just report bugs\", \"qa report only\", or\n\"test but don't fix\". For the full test-fix-verify loop, use /qa instead.\nProactively suggest when the user wants a bug report without any code changes. (gstack)\nVoice triggers (speech-to-text aliases): \"bug report\", \"just check for bugs\".\n",
      "input": {
        "hint": "Report-only QA testing. Systematically tests a web application and produces a\nstructured report with health score, screenshots, and repro steps — but never\nfixes anything. Use when asked to \"just report bugs\", \"qa report only\", or\n\"test but don't fix\". For the full test-fix-verify loop, use /qa instead.\nProactively suggest when the user wants a bug report without any code changes. (gstack)\nVoice triggers (speech-to-text aliases): \"bug report\", \"just check for bugs\".\n"
      },
      "name": "qa-only"
    },
    {
      "description": "Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to \"weekly retro\", \"what did we ship\", or \"engineering retrospective\".\nProactively suggest at the end of a work week or sprint. (gstack)\n",
      "input": {
        "hint": "Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to \"weekly retro\", \"what did we ship\", or \"engineering retrospective\".\nProactively suggest at the end of a work week or sprint. (gstack)\n"
      },
      "name": "retro"
    },
    {
      "description": "Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust\nboundary violations, conditional side effects, and other structural issues. Use when\nasked to \"review this PR\", \"code review\", \"pre-landing review\", or \"check my diff\".\nProactively suggest when the user is about to merge or land code changes. (gstack)\n",
      "input": {
        "hint": "Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust\nboundary violations, conditional side effects, and other structural issues. Use when\nasked to \"review this PR\", \"code review\", \"pre-landing review\", or \"check my diff\".\nProactively suggest when the user is about to merge or land code changes. (gstack)\n"
      },
      "name": "review"
    },
    {
      "description": "Pull data from a web page. First call on a new intent prototypes the flow\nvia $B primitives and returns JSON. Subsequent calls on a matching intent\nroute to a codified browser-skill and return in ~200ms. Read-only — for\nmutating flows (form fills, clicks, submissions), use /automate.\nUse when asked to \"scrape\", \"get data from\", \"pull\", \"extract from\", or\n\"what's on\" a page. (gstack)\n",
      "input": {
        "hint": "Pull data from a web page. First call on a new intent prototypes the flow\nvia $B primitives and returns JSON. Subsequent calls on a matching intent\nroute to a codified browser-skill and return in ~200ms. Read-only — for\nmutating flows (form fills, clicks, submissions), use /automate.\nUse when asked to \"scrape\", \"get data from\", \"pull\", \"extract from\", or\n\"what's on\" a page. (gstack)\n"
      },
      "name": "scrape"
    },
    {
      "description": "Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to \"import cookies\",\n\"login to the site\", or \"authenticate the browser\". (gstack)\n",
      "input": {
        "hint": "Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to \"import cookies\",\n\"login to the site\", or \"authenticate the browser\". (gstack)\n"
      },
      "name": "setup-browser-cookies"
    },
    {
      "description": "Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: \"setup deploy\", \"configure deployment\", \"set up land-and-deploy\",\n\"how do I deploy with gstack\", \"add deploy config\".\n",
      "input": {
        "hint": "Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: \"setup deploy\", \"configure deployment\", \"set up land-and-deploy\",\n\"how do I deploy with gstack\", \"add deploy config\".\n"
      },
      "name": "setup-deploy"
    },
    {
      "description": "Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to \"gbrain is running, and this agent\ncan call it.\" Use when: \"setup gbrain\", \"connect gbrain\", \"start\ngbrain\", \"install gbrain\", \"configure gbrain for this machine\". (gstack)\n",
      "input": {
        "hint": "Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to \"gbrain is running, and this agent\ncan call it.\" Use when: \"setup gbrain\", \"connect gbrain\", \"start\ngbrain\", \"install gbrain\", \"configure gbrain for this machine\". (gstack)\n"
      },
      "name": "setup-gbrain"
    },
    {
      "description": "Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to \"ship\", \"deploy\",\n\"push to main\", \"create a PR\", \"merge and push\", or \"get it deployed\".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)\n",
      "input": {
        "hint": "Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to \"ship\", \"deploy\",\n\"push to main\", \"create a PR\", \"merge and push\", or \"get it deployed\".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)\n"
      },
      "name": "ship"
    },
    {
      "description": "Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to \"skillify\", \"codify\", \"save this scrape\", or\n\"make this permanent\". (gstack)\n",
      "input": {
        "hint": "Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to \"skillify\", \"codify\", \"save this scrape\", or\n\"make this permanent\". (gstack)\n"
      },
      "name": "skillify"
    },
    {
      "description": "Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to \"unfreeze\", \"unlock edits\", \"remove freeze\", or\n\"allow all edits\". (gstack)\n",
      "input": {
        "hint": "Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to \"unfreeze\", \"unlock edits\", \"remove freeze\", or\n\"allow all edits\". (gstack)\n"
      },
      "name": "unfreeze"
    },
    {
      "description": "Create a new custom tool for Dirac through an interactive interview",
      "input": {
        "hint": "Create a new custom tool for Dirac through an interactive interview"
      },
      "name": "new-tool"
    },
    {
      "description": "Delete a local user-defined custom tool from global or workspace scope",
      "input": {
        "hint": "Delete a local user-defined custom tool from global or workspace scope"
      },
      "name": "delete-tool"
    },
    {
      "description": "Review uncommitted working tree changes",
      "input": {
        "hint": "Optional review instructions"
      },
      "name": "/review"
    },
    {
      "description": "Review changes against the merge-base with a branch",
      "input": {
        "hint": "<branch> [optional review instructions]"
      },
      "name": "/review-branch"
    },
    {
      "description": "Review a single commit",
      "input": {
        "hint": "<commit> [optional review instructions]"
      },
      "name": "/review-commit"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "act",
      "description": "Session operating mode",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "description": "Gather information and create a detailed plan",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Execute actions, asking permission for each tool call",
          "name": "Act",
          "value": "act"
        },
        {
          "description": "Execute actions, auto-approving all tool calls",
          "name": "Auto-approve",
          "value": "auto"
        },
        {
          "description": "Execute actions with no safety prompts",
          "name": "YOLO",
          "value": "yolo"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "openrouter",
      "description": "API provider",
      "id": "provider",
      "name": "Provider",
      "options": [
        {
          "name": "ChatGPT Subscription",
          "value": "openai-codex"
        },
        {
          "name": "Google Gemini",
          "value": "gemini"
        },
        {
          "name": "OpenAI Compatible",
          "value": "openai"
        },
        {
          "name": "Anthropic",
          "value": "anthropic"
        },
        {
          "name": "Amazon Bedrock",
          "value": "bedrock"
        },
        {
          "name": "DeepSeek",
          "value": "deepseek"
        },
        {
          "name": "OpenAI",
          "value": "openai-native"
        },
        {
          "name": "OpenRouter",
          "value": "openrouter"
        },
        {
          "name": "GCP Vertex AI",
          "value": "vertex"
        },
        {
          "name": "LiteLLM",
          "value": "litellm"
        },
        {
          "name": "Claude Code",
          "value": "claude-code"
        },
        {
          "name": "GitHub Copilot (Native)",
          "value": "github-copilot"
        },
        {
          "name": "Mistral",
          "value": "mistral"
        },
        {
          "name": "Z AI",
          "value": "zai"
        },
        {
          "name": "Groq",
          "value": "groq"
        },
        {
          "name": "Cerebras",
          "value": "cerebras"
        },
        {
          "name": "Vercel AI Gateway",
          "value": "vercel-ai-gateway"
        },
        {
          "name": "Baseten",
          "value": "baseten"
        },
        {
          "name": "Requesty",
          "value": "requesty"
        },
        {
          "name": "Fireworks AI",
          "value": "fireworks"
        },
        {
          "name": "Together",
          "value": "together"
        },
        {
          "name": "Alibaba Qwen",
          "value": "qwen"
        },
        {
          "name": "Qwen Code",
          "value": "qwen-code"
        },
        {
          "name": "Bytedance Doubao",
          "value": "doubao"
        },
        {
          "name": "LM Studio",
          "value": "lmstudio"
        },
        {
          "name": "Moonshot",
          "value": "moonshot"
        },
        {
          "name": "Hugging Face",
          "value": "huggingface"
        },
        {
          "name": "Nebius AI Studio",
          "value": "nebius"
        },
        {
          "name": "xAI",
          "value": "xai"
        },
        {
          "name": "SambaNova",
          "value": "sambanova"
        },
        {
          "name": "Huawei Cloud MaaS",
          "value": "huawei-cloud-maas"
        },
        {
          "name": "Dify.ai",
          "value": "dify"
        },
        {
          "name": "Oracle Code Assist",
          "value": "oca"
        },
        {
          "name": "MiniMax",
          "value": "minimax"
        },
        {
          "name": "AIhubmix",
          "value": "aihubmix"
        },
        {
          "name": "NousResearch",
          "value": "nousResearch"
        },
        {
          "name": "W&B Inference by CoreWeave",
          "value": "wandb"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "anthropic/claude-sonnet-4.5",
      "description": "Model for the current mode",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "name": "~anthropic/claude-fable-latest",
          "value": "~anthropic/claude-fable-latest"
        },
        {
          "name": "~anthropic/claude-haiku-latest",
          "value": "~anthropic/claude-haiku-latest"
        },
        {
          "name": "~anthropic/claude-opus-latest",
          "value": "~anthropic/claude-opus-latest"
        },
        {
          "name": "~anthropic/claude-sonnet-latest",
          "value": "~anthropic/claude-sonnet-latest"
        },
        {
          "name": "~google/gemini-flash-latest",
          "value": "~google/gemini-flash-latest"
        },
        {
          "name": "~google/gemini-pro-latest",
          "value": "~google/gemini-pro-latest"
        },
        {
          "name": "~moonshotai/kimi-latest",
          "value": "~moonshotai/kimi-latest"
        },
        {
          "name": "~openai/gpt-latest",
          "value": "~openai/gpt-latest"
        },
        {
          "name": "~openai/gpt-mini-latest",
          "value": "~openai/gpt-mini-latest"
        },
        {
          "name": "ai21/jamba-large-1.7",
          "value": "ai21/jamba-large-1.7"
        },
        {
          "name": "aion-labs/aion-1.0",
          "value": "aion-labs/aion-1.0"
        },
        {
          "name": "aion-labs/aion-1.0-mini",
          "value": "aion-labs/aion-1.0-mini"
        },
        {
          "name": "aion-labs/aion-2.0",
          "value": "aion-labs/aion-2.0"
        },
        {
          "name": "aion-labs/aion-rp-llama-3.1-8b",
          "value": "aion-labs/aion-rp-llama-3.1-8b"
        },
        {
          "name": "allenai/olmo-3-32b-think",
          "value": "allenai/olmo-3-32b-think"
        },
        {
          "name": "amazon/nova-2-lite-v1",
          "value": "amazon/nova-2-lite-v1"
        },
        {
          "name": "amazon/nova-lite-v1",
          "value": "amazon/nova-lite-v1"
        },
        {
          "name": "amazon/nova-micro-v1",
          "value": "amazon/nova-micro-v1"
        },
        {
          "name": "amazon/nova-premier-v1",
          "value": "amazon/nova-premier-v1"
        },
        {
          "name": "amazon/nova-pro-v1",
          "value": "amazon/nova-pro-v1"
        },
        {
          "name": "anthracite-org/magnum-v4-72b",
          "value": "anthracite-org/magnum-v4-72b"
        },
        {
          "name": "anthropic/claude-3-haiku",
          "value": "anthropic/claude-3-haiku"
        },
        {
          "name": "anthropic/claude-fable-5",
          "value": "anthropic/claude-fable-5"
        },
        {
          "name": "anthropic/claude-haiku-4.5",
          "value": "anthropic/claude-haiku-4.5"
        },
        {
          "name": "anthropic/claude-opus-4",
          "value": "anthropic/claude-opus-4"
        },
        {
          "name": "anthropic/claude-opus-4.1",
          "value": "anthropic/claude-opus-4.1"
        },
        {
          "name": "anthropic/claude-opus-4.5",
          "value": "anthropic/claude-opus-4.5"
        },
        {
          "name": "anthropic/claude-opus-4.6",
          "value": "anthropic/claude-opus-4.6"
        },
        {
          "name": "anthropic/claude-opus-4.6-fast",
          "value": "anthropic/claude-opus-4.6-fast"
        },
        {
          "name": "anthropic/claude-opus-4.7",
          "value": "anthropic/claude-opus-4.7"
        },
        {
          "name": "anthropic/claude-opus-4.7-fast",
          "value": "anthropic/claude-opus-4.7-fast"
        },
        {
          "name": "anthropic/claude-opus-4.8",
          "value": "anthropic/claude-opus-4.8"
        },
        {
          "name": "anthropic/claude-opus-4.8-fast",
          "value": "anthropic/claude-opus-4.8-fast"
        },
        {
          "name": "anthropic/claude-sonnet-4",
          "value": "anthropic/claude-sonnet-4"
        },
        {
          "name": "anthropic/claude-sonnet-4.5",
          "value": "anthropic/claude-sonnet-4.5"
        },
        {
          "name": "anthropic/claude-sonnet-4.6",
          "value": "anthropic/claude-sonnet-4.6"
        },
        {
          "name": "arcee-ai/coder-large",
          "value": "arcee-ai/coder-large"
        },
        {
          "name": "arcee-ai/trinity-large-thinking",
          "value": "arcee-ai/trinity-large-thinking"
        },
        {
          "name": "arcee-ai/trinity-mini",
          "value": "arcee-ai/trinity-mini"
        },
        {
          "name": "arcee-ai/virtuoso-large",
          "value": "arcee-ai/virtuoso-large"
        },
        {
          "name": "baidu/ernie-4.5-vl-424b-a47b",
          "value": "baidu/ernie-4.5-vl-424b-a47b"
        },
        {
          "name": "bytedance-seed/seed-1.6",
          "value": "bytedance-seed/seed-1.6"
        },
        {
          "name": "bytedance-seed/seed-1.6-flash",
          "value": "bytedance-seed/seed-1.6-flash"
        },
        {
          "name": "bytedance-seed/seed-2.0-lite",
          "value": "bytedance-seed/seed-2.0-lite"
        },
        {
          "name": "bytedance-seed/seed-2.0-mini",
          "value": "bytedance-seed/seed-2.0-mini"
        },
        {
          "name": "bytedance/ui-tars-1.5-7b",
          "value": "bytedance/ui-tars-1.5-7b"
        },
        {
          "name": "cognitivecomputations/dolphin-mistral-24b-venice-edition:free",
          "value": "cognitivecomputations/dolphin-mistral-24b-venice-edition:free"
        },
        {
          "name": "cohere/command-a",
          "value": "cohere/command-a"
        },
        {
          "name": "cohere/command-r-08-2024",
          "value": "cohere/command-r-08-2024"
        },
        {
          "name": "cohere/command-r-plus-08-2024",
          "value": "cohere/command-r-plus-08-2024"
        },
        {
          "name": "cohere/command-r7b-12-2024",
          "value": "cohere/command-r7b-12-2024"
        },
        {
          "name": "cohere/north-mini-code:free",
          "value": "cohere/north-mini-code:free"
        },
        {
          "name": "deepcogito/cogito-v2.1-671b",
          "value": "deepcogito/cogito-v2.1-671b"
        },
        {
          "name": "deepseek/deepseek-chat",
          "value": "deepseek/deepseek-chat"
        },
        {
          "name": "deepseek/deepseek-chat-v3-0324",
          "value": "deepseek/deepseek-chat-v3-0324"
        },
        {
          "name": "deepseek/deepseek-chat-v3.1",
          "value": "deepseek/deepseek-chat-v3.1"
        },
        {
          "name": "deepseek/deepseek-r1",
          "value": "deepseek/deepseek-r1"
        },
        {
          "name": "deepseek/deepseek-r1-0528",
          "value": "deepseek/deepseek-r1-0528"
        },
        {
          "name": "deepseek/deepseek-r1-distill-llama-70b",
          "value": "deepseek/deepseek-r1-distill-llama-70b"
        },
        {
          "name": "deepseek/deepseek-v3.1-terminus",
          "value": "deepseek/deepseek-v3.1-terminus"
        },
        {
          "name": "deepseek/deepseek-v3.2",
          "value": "deepseek/deepseek-v3.2"
        },
        {
          "name": "deepseek/deepseek-v3.2-exp",
          "value": "deepseek/deepseek-v3.2-exp"
        },
        {
          "name": "deepseek/deepseek-v4-flash",
          "value": "deepseek/deepseek-v4-flash"
        },
        {
          "name": "deepseek/deepseek-v4-pro",
          "value": "deepseek/deepseek-v4-pro"
        },
        {
          "name": "google/gemini-2.5-flash",
          "value": "google/gemini-2.5-flash"
        },
        {
          "name": "google/gemini-2.5-flash-image",
          "value": "google/gemini-2.5-flash-image"
        },
        {
          "name": "google/gemini-2.5-flash-lite",
          "value": "google/gemini-2.5-flash-lite"
        },
        {
          "name": "google/gemini-2.5-flash-lite-preview-09-2025",
          "value": "google/gemini-2.5-flash-lite-preview-09-2025"
        },
        {
          "name": "google/gemini-2.5-pro",
          "value": "google/gemini-2.5-pro"
        },
        {
          "name": "google/gemini-2.5-pro-preview",
          "value": "google/gemini-2.5-pro-preview"
        },
        {
          "name": "google/gemini-2.5-pro-preview-05-06",
          "value": "google/gemini-2.5-pro-preview-05-06"
        },
        {
          "name": "google/gemini-3-flash-preview",
          "value": "google/gemini-3-flash-preview"
        },
        {
          "name": "google/gemini-3-pro-image",
          "value": "google/gemini-3-pro-image"
        },
        {
          "name": "google/gemini-3-pro-image-preview",
          "value": "google/gemini-3-pro-image-preview"
        },
        {
          "name": "google/gemini-3.1-flash-image",
          "value": "google/gemini-3.1-flash-image"
        },
        {
          "name": "google/gemini-3.1-flash-image-preview",
          "value": "google/gemini-3.1-flash-image-preview"
        },
        {
          "name": "google/gemini-3.1-flash-lite",
          "value": "google/gemini-3.1-flash-lite"
        },
        {
          "name": "google/gemini-3.1-flash-lite-preview",
          "value": "google/gemini-3.1-flash-lite-preview"
        },
        {
          "name": "google/gemini-3.1-pro-preview",
          "value": "google/gemini-3.1-pro-preview"
        },
        {
          "name": "google/gemini-3.1-pro-preview-customtools",
          "value": "google/gemini-3.1-pro-preview-customtools"
        },
        {
          "name": "google/gemini-3.5-flash",
          "value": "google/gemini-3.5-flash"
        },
        {
          "name": "google/gemma-2-27b-it",
          "value": "google/gemma-2-27b-it"
        },
        {
          "name": "google/gemma-3-12b-it",
          "value": "google/gemma-3-12b-it"
        },
        {
          "name": "google/gemma-3-27b-it",
          "value": "google/gemma-3-27b-it"
        },
        {
          "name": "google/gemma-3-4b-it",
          "value": "google/gemma-3-4b-it"
        },
        {
          "name": "google/gemma-3n-e4b-it",
          "value": "google/gemma-3n-e4b-it"
        },
        {
          "name": "google/gemma-4-26b-a4b-it",
          "value": "google/gemma-4-26b-a4b-it"
        },
        {
          "name": "google/gemma-4-26b-a4b-it:free",
          "value": "google/gemma-4-26b-a4b-it:free"
        },
        {
          "name": "google/gemma-4-31b-it",
          "value": "google/gemma-4-31b-it"
        },
        {
          "name": "google/gemma-4-31b-it:free",
          "value": "google/gemma-4-31b-it:free"
        },
        {
          "name": "google/lyria-3-clip-preview",
          "value": "google/lyria-3-clip-preview"
        },
        {
          "name": "google/lyria-3-pro-preview",
          "value": "google/lyria-3-pro-preview"
        },
        {
          "name": "gryphe/mythomax-l2-13b",
          "value": "gryphe/mythomax-l2-13b"
        },
        {
          "name": "ibm-granite/granite-4.0-h-micro",
          "value": "ibm-granite/granite-4.0-h-micro"
        },
        {
          "name": "ibm-granite/granite-4.1-8b",
          "value": "ibm-granite/granite-4.1-8b"
        },
        {
          "name": "inception/mercury-2",
          "value": "inception/mercury-2"
        },
        {
          "name": "inclusionai/ling-2.6-1t",
          "value": "inclusionai/ling-2.6-1t"
        },
        {
          "name": "inclusionai/ling-2.6-flash",
          "value": "inclusionai/ling-2.6-flash"
        },
        {
          "name": "inclusionai/ring-2.6-1t",
          "value": "inclusionai/ring-2.6-1t"
        },
        {
          "name": "inflection/inflection-3-pi",
          "value": "inflection/inflection-3-pi"
        },
        {
          "name": "inflection/inflection-3-productivity",
          "value": "inflection/inflection-3-productivity"
        },
        {
          "name": "kwaipilot/kat-coder-pro-v2",
          "value": "kwaipilot/kat-coder-pro-v2"
        },
        {
          "name": "liquid/lfm-2-24b-a2b",
          "value": "liquid/lfm-2-24b-a2b"
        },
        {
          "name": "liquid/lfm-2.5-1.2b-instruct:free",
          "value": "liquid/lfm-2.5-1.2b-instruct:free"
        },
        {
          "name": "liquid/lfm-2.5-1.2b-thinking:free",
          "value": "liquid/lfm-2.5-1.2b-thinking:free"
        },
        {
          "name": "mancer/weaver",
          "value": "mancer/weaver"
        },
        {
          "name": "meta-llama/llama-3-8b-instruct",
          "value": "meta-llama/llama-3-8b-instruct"
        },
        {
          "name": "meta-llama/llama-3.1-70b-instruct",
          "value": "meta-llama/llama-3.1-70b-instruct"
        },
        {
          "name": "meta-llama/llama-3.1-8b-instruct",
          "value": "meta-llama/llama-3.1-8b-instruct"
        },
        {
          "name": "meta-llama/llama-3.2-11b-vision-instruct",
          "value": "meta-llama/llama-3.2-11b-vision-instruct"
        },
        {
          "name": "meta-llama/llama-3.2-1b-instruct",
          "value": "meta-llama/llama-3.2-1b-instruct"
        },
        {
          "name": "meta-llama/llama-3.2-3b-instruct",
          "value": "meta-llama/llama-3.2-3b-instruct"
        },
        {
          "name": "meta-llama/llama-3.2-3b-instruct:free",
          "value": "meta-llama/llama-3.2-3b-instruct:free"
        },
        {
          "name": "meta-llama/llama-3.3-70b-instruct",
          "value": "meta-llama/llama-3.3-70b-instruct"
        },
        {
          "name": "meta-llama/llama-3.3-70b-instruct:free",
          "value": "meta-llama/llama-3.3-70b-instruct:free"
        },
        {
          "name": "meta-llama/llama-4-maverick",
          "value": "meta-llama/llama-4-maverick"
        },
        {
          "name": "meta-llama/llama-4-scout",
          "value": "meta-llama/llama-4-scout"
        },
        {
          "name": "meta-llama/llama-guard-4-12b",
          "value": "meta-llama/llama-guard-4-12b"
        },
        {
          "name": "microsoft/phi-4",
          "value": "microsoft/phi-4"
        },
        {
          "name": "microsoft/phi-4-mini-instruct",
          "value": "microsoft/phi-4-mini-instruct"
        },
        {
          "name": "microsoft/wizardlm-2-8x22b",
          "value": "microsoft/wizardlm-2-8x22b"
        },
        {
          "name": "minimax/minimax-01",
          "value": "minimax/minimax-01"
        },
        {
          "name": "minimax/minimax-m1",
          "value": "minimax/minimax-m1"
        },
        {
          "name": "minimax/minimax-m2",
          "value": "minimax/minimax-m2"
        },
        {
          "name": "minimax/minimax-m2-her",
          "value": "minimax/minimax-m2-her"
        },
        {
          "name": "minimax/minimax-m2.1",
          "value": "minimax/minimax-m2.1"
        },
        {
          "name": "minimax/minimax-m2.5",
          "value": "minimax/minimax-m2.5"
        },
        {
          "name": "minimax/minimax-m2.7",
          "value": "minimax/minimax-m2.7"
        },
        {
          "name": "minimax/minimax-m3",
          "value": "minimax/minimax-m3"
        },
        {
          "name": "mistralai/codestral-2508",
          "value": "mistralai/codestral-2508"
        },
        {
          "name": "mistralai/devstral-2512",
          "value": "mistralai/devstral-2512"
        },
        {
          "name": "mistralai/ministral-14b-2512",
          "value": "mistralai/ministral-14b-2512"
        },
        {
          "name": "mistralai/ministral-3b-2512",
          "value": "mistralai/ministral-3b-2512"
        },
        {
          "name": "mistralai/ministral-8b-2512",
          "value": "mistralai/ministral-8b-2512"
        },
        {
          "name": "mistralai/mistral-large",
          "value": "mistralai/mistral-large"
        },
        {
          "name": "mistralai/mistral-large-2407",
          "value": "mistralai/mistral-large-2407"
        },
        {
          "name": "mistralai/mistral-large-2512",
          "value": "mistralai/mistral-large-2512"
        },
        {
          "name": "mistralai/mistral-medium-3",
          "value": "mistralai/mistral-medium-3"
        },
        {
          "name": "mistralai/mistral-medium-3-5",
          "value": "mistralai/mistral-medium-3-5"
        },
        {
          "name": "mistralai/mistral-medium-3.1",
          "value": "mistralai/mistral-medium-3.1"
        },
        {
          "name": "mistralai/mistral-nemo",
          "value": "mistralai/mistral-nemo"
        },
        {
          "name": "mistralai/mistral-saba",
          "value": "mistralai/mistral-saba"
        },
        {
          "name": "mistralai/mistral-small-24b-instruct-2501",
          "value": "mistralai/mistral-small-24b-instruct-2501"
        },
        {
          "name": "mistralai/mistral-small-2603",
          "value": "mistralai/mistral-small-2603"
        },
        {
          "name": "mistralai/mistral-small-3.1-24b-instruct",
          "value": "mistralai/mistral-small-3.1-24b-instruct"
        },
        {
          "name": "mistralai/mistral-small-3.2-24b-instruct",
          "value": "mistralai/mistral-small-3.2-24b-instruct"
        },
        {
          "name": "mistralai/mixtral-8x22b-instruct",
          "value": "mistralai/mixtral-8x22b-instruct"
        },
        {
          "name": "mistralai/voxtral-small-24b-2507",
          "value": "mistralai/voxtral-small-24b-2507"
        },
        {
          "name": "moonshotai/kimi-k2",
          "value": "moonshotai/kimi-k2"
        },
        {
          "name": "moonshotai/kimi-k2-0905",
          "value": "moonshotai/kimi-k2-0905"
        },
        {
          "name": "moonshotai/kimi-k2-thinking",
          "value": "moonshotai/kimi-k2-thinking"
        },
        {
          "name": "moonshotai/kimi-k2.5",
          "value": "moonshotai/kimi-k2.5"
        },
        {
          "name": "moonshotai/kimi-k2.6",
          "value": "moonshotai/kimi-k2.6"
        },
        {
          "name": "moonshotai/kimi-k2.7-code",
          "value": "moonshotai/kimi-k2.7-code"
        },
        {
          "name": "morph/morph-v3-fast",
          "value": "morph/morph-v3-fast"
        },
        {
          "name": "morph/morph-v3-large",
          "value": "morph/morph-v3-large"
        },
        {
          "name": "nex-agi/nex-n2-pro",
          "value": "nex-agi/nex-n2-pro"
        },
        {
          "name": "nousresearch/hermes-3-llama-3.1-405b",
          "value": "nousresearch/hermes-3-llama-3.1-405b"
        },
        {
          "name": "nousresearch/hermes-3-llama-3.1-405b:free",
          "value": "nousresearch/hermes-3-llama-3.1-405b:free"
        },
        {
          "name": "nousresearch/hermes-3-llama-3.1-70b",
          "value": "nousresearch/hermes-3-llama-3.1-70b"
        },
        {
          "name": "nousresearch/hermes-4-405b",
          "value": "nousresearch/hermes-4-405b"
        },
        {
          "name": "nousresearch/hermes-4-70b",
          "value": "nousresearch/hermes-4-70b"
        },
        {
          "name": "nvidia/llama-3.3-nemotron-super-49b-v1.5",
          "value": "nvidia/llama-3.3-nemotron-super-49b-v1.5"
        },
        {
          "name": "nvidia/nemotron-3-nano-30b-a3b",
          "value": "nvidia/nemotron-3-nano-30b-a3b"
        },
        {
          "name": "nvidia/nemotron-3-nano-30b-a3b:free",
          "value": "nvidia/nemotron-3-nano-30b-a3b:free"
        },
        {
          "name": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
          "value": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free"
        },
        {
          "name": "nvidia/nemotron-3-super-120b-a12b",
          "value": "nvidia/nemotron-3-super-120b-a12b"
        },
        {
          "name": "nvidia/nemotron-3-super-120b-a12b:free",
          "value": "nvidia/nemotron-3-super-120b-a12b:free"
        },
        {
          "name": "nvidia/nemotron-3-ultra-550b-a55b",
          "value": "nvidia/nemotron-3-ultra-550b-a55b"
        },
        {
          "name": "nvidia/nemotron-3-ultra-550b-a55b:free",
          "value": "nvidia/nemotron-3-ultra-550b-a55b:free"
        },
        {
          "name": "nvidia/nemotron-3.5-content-safety:free",
          "value": "nvidia/nemotron-3.5-content-safety:free"
        },
        {
          "name": "nvidia/nemotron-nano-12b-v2-vl:free",
          "value": "nvidia/nemotron-nano-12b-v2-vl:free"
        },
        {
          "name": "nvidia/nemotron-nano-9b-v2:free",
          "value": "nvidia/nemotron-nano-9b-v2:free"
        },
        {
          "name": "openai/gpt-3.5-turbo",
          "value": "openai/gpt-3.5-turbo"
        },
        {
          "name": "openai/gpt-3.5-turbo-0613",
          "value": "openai/gpt-3.5-turbo-0613"
        },
        {
          "name": "openai/gpt-3.5-turbo-16k",
          "value": "openai/gpt-3.5-turbo-16k"
        },
        {
          "name": "openai/gpt-3.5-turbo-instruct",
          "value": "openai/gpt-3.5-turbo-instruct"
        },
        {
          "name": "openai/gpt-4",
          "value": "openai/gpt-4"
        },
        {
          "name": "openai/gpt-4-turbo",
          "value": "openai/gpt-4-turbo"
        },
        {
          "name": "openai/gpt-4-turbo-preview",
          "value": "openai/gpt-4-turbo-preview"
        },
        {
          "name": "openai/gpt-4.1",
          "value": "openai/gpt-4.1"
        },
        {
          "name": "openai/gpt-4.1-mini",
          "value": "openai/gpt-4.1-mini"
        },
        {
          "name": "openai/gpt-4.1-nano",
          "value": "openai/gpt-4.1-nano"
        },
        {
          "name": "openai/gpt-4o",
          "value": "openai/gpt-4o"
        },
        {
          "name": "openai/gpt-4o-2024-05-13",
          "value": "openai/gpt-4o-2024-05-13"
        },
        {
          "name": "openai/gpt-4o-2024-08-06",
          "value": "openai/gpt-4o-2024-08-06"
        },
        {
          "name": "openai/gpt-4o-2024-11-20",
          "value": "openai/gpt-4o-2024-11-20"
        },
        {
          "name": "openai/gpt-4o-mini",
          "value": "openai/gpt-4o-mini"
        },
        {
          "name": "openai/gpt-4o-mini-2024-07-18",
          "value": "openai/gpt-4o-mini-2024-07-18"
        },
        {
          "name": "openai/gpt-4o-mini-search-preview",
          "value": "openai/gpt-4o-mini-search-preview"
        },
        {
          "name": "openai/gpt-4o-search-preview",
          "value": "openai/gpt-4o-search-preview"
        },
        {
          "name": "openai/gpt-5",
          "value": "openai/gpt-5"
        },
        {
          "name": "openai/gpt-5-chat",
          "value": "openai/gpt-5-chat"
        },
        {
          "name": "openai/gpt-5-codex",
          "value": "openai/gpt-5-codex"
        },
        {
          "name": "openai/gpt-5-image",
          "value": "openai/gpt-5-image"
        },
        {
          "name": "openai/gpt-5-image-mini",
          "value": "openai/gpt-5-image-mini"
        },
        {
          "name": "openai/gpt-5-mini",
          "value": "openai/gpt-5-mini"
        },
        {
          "name": "openai/gpt-5-nano",
          "value": "openai/gpt-5-nano"
        },
        {
          "name": "openai/gpt-5-pro",
          "value": "openai/gpt-5-pro"
        },
        {
          "name": "openai/gpt-5.1",
          "value": "openai/gpt-5.1"
        },
        {
          "name": "openai/gpt-5.1-chat",
          "value": "openai/gpt-5.1-chat"
        },
        {
          "name": "openai/gpt-5.1-codex",
          "value": "openai/gpt-5.1-codex"
        },
        {
          "name": "openai/gpt-5.1-codex-max",
          "value": "openai/gpt-5.1-codex-max"
        },
        {
          "name": "openai/gpt-5.1-codex-mini",
          "value": "openai/gpt-5.1-codex-mini"
        },
        {
          "name": "openai/gpt-5.2",
          "value": "openai/gpt-5.2"
        },
        {
          "name": "openai/gpt-5.2-chat",
          "value": "openai/gpt-5.2-chat"
        },
        {
          "name": "openai/gpt-5.2-codex",
          "value": "openai/gpt-5.2-codex"
        },
        {
          "name": "openai/gpt-5.2-pro",
          "value": "openai/gpt-5.2-pro"
        },
        {
          "name": "openai/gpt-5.3-chat",
          "value": "openai/gpt-5.3-chat"
        },
        {
          "name": "openai/gpt-5.3-codex",
          "value": "openai/gpt-5.3-codex"
        },
        {
          "name": "openai/gpt-5.4",
          "value": "openai/gpt-5.4"
        },
        {
          "name": "openai/gpt-5.4-image-2",
          "value": "openai/gpt-5.4-image-2"
        },
        {
          "name": "openai/gpt-5.4-mini",
          "value": "openai/gpt-5.4-mini"
        },
        {
          "name": "openai/gpt-5.4-nano",
          "value": "openai/gpt-5.4-nano"
        },
        {
          "name": "openai/gpt-5.4-pro",
          "value": "openai/gpt-5.4-pro"
        },
        {
          "name": "openai/gpt-5.5",
          "value": "openai/gpt-5.5"
        },
        {
          "name": "openai/gpt-5.5-pro",
          "value": "openai/gpt-5.5-pro"
        },
        {
          "name": "openai/gpt-audio",
          "value": "openai/gpt-audio"
        },
        {
          "name": "openai/gpt-audio-mini",
          "value": "openai/gpt-audio-mini"
        },
        {
          "name": "openai/gpt-chat-latest",
          "value": "openai/gpt-chat-latest"
        },
        {
          "name": "openai/gpt-oss-120b",
          "value": "openai/gpt-oss-120b"
        },
        {
          "name": "openai/gpt-oss-120b:free",
          "value": "openai/gpt-oss-120b:free"
        },
        {
          "name": "openai/gpt-oss-20b",
          "value": "openai/gpt-oss-20b"
        },
        {
          "name": "openai/gpt-oss-20b:free",
          "value": "openai/gpt-oss-20b:free"
        },
        {
          "name": "openai/gpt-oss-safeguard-20b",
          "value": "openai/gpt-oss-safeguard-20b"
        },
        {
          "name": "openai/o1",
          "value": "openai/o1"
        },
        {
          "name": "openai/o1-pro",
          "value": "openai/o1-pro"
        },
        {
          "name": "openai/o3",
          "value": "openai/o3"
        },
        {
          "name": "openai/o3-deep-research",
          "value": "openai/o3-deep-research"
        },
        {
          "name": "openai/o3-mini",
          "value": "openai/o3-mini"
        },
        {
          "name": "openai/o3-mini-high",
          "value": "openai/o3-mini-high"
        },
        {
          "name": "openai/o3-pro",
          "value": "openai/o3-pro"
        },
        {
          "name": "openai/o4-mini",
          "value": "openai/o4-mini"
        },
        {
          "name": "openai/o4-mini-deep-research",
          "value": "openai/o4-mini-deep-research"
        },
        {
          "name": "openai/o4-mini-high",
          "value": "openai/o4-mini-high"
        },
        {
          "name": "openrouter/auto",
          "value": "openrouter/auto"
        },
        {
          "name": "openrouter/bodybuilder",
          "value": "openrouter/bodybuilder"
        },
        {
          "name": "openrouter/free",
          "value": "openrouter/free"
        },
        {
          "name": "openrouter/fusion",
          "value": "openrouter/fusion"
        },
        {
          "name": "openrouter/owl-alpha",
          "value": "openrouter/owl-alpha"
        },
        {
          "name": "openrouter/pareto-code",
          "value": "openrouter/pareto-code"
        },
        {
          "name": "perceptron/perceptron-mk1",
          "value": "perceptron/perceptron-mk1"
        },
        {
          "name": "perplexity/sonar",
          "value": "perplexity/sonar"
        },
        {
          "name": "perplexity/sonar-deep-research",
          "value": "perplexity/sonar-deep-research"
        },
        {
          "name": "perplexity/sonar-pro",
          "value": "perplexity/sonar-pro"
        },
        {
          "name": "perplexity/sonar-pro-search",
          "value": "perplexity/sonar-pro-search"
        },
        {
          "name": "perplexity/sonar-reasoning-pro",
          "value": "perplexity/sonar-reasoning-pro"
        },
        {
          "name": "poolside/laguna-m.1",
          "value": "poolside/laguna-m.1"
        },
        {
          "name": "poolside/laguna-m.1:free",
          "value": "poolside/laguna-m.1:free"
        },
        {
          "name": "poolside/laguna-xs.2",
          "value": "poolside/laguna-xs.2"
        },
        {
          "name": "poolside/laguna-xs.2:free",
          "value": "poolside/laguna-xs.2:free"
        },
        {
          "name": "qwen/qwen-2.5-72b-instruct",
          "value": "qwen/qwen-2.5-72b-instruct"
        },
        {
          "name": "qwen/qwen-2.5-7b-instruct",
          "value": "qwen/qwen-2.5-7b-instruct"
        },
        {
          "name": "qwen/qwen-2.5-coder-32b-instruct",
          "value": "qwen/qwen-2.5-coder-32b-instruct"
        },
        {
          "name": "qwen/qwen-plus",
          "value": "qwen/qwen-plus"
        },
        {
          "name": "qwen/qwen-plus-2025-07-28",
          "value": "qwen/qwen-plus-2025-07-28"
        },
        {
          "name": "qwen/qwen-plus-2025-07-28:thinking",
          "value": "qwen/qwen-plus-2025-07-28:thinking"
        },
        {
          "name": "qwen/qwen2.5-vl-72b-instruct",
          "value": "qwen/qwen2.5-vl-72b-instruct"
        },
        {
          "name": "qwen/qwen3-14b",
          "value": "qwen/qwen3-14b"
        },
        {
          "name": "qwen/qwen3-235b-a22b",
          "value": "qwen/qwen3-235b-a22b"
        },
        {
          "name": "qwen/qwen3-235b-a22b-2507",
          "value": "qwen/qwen3-235b-a22b-2507"
        },
        {
          "name": "qwen/qwen3-235b-a22b-thinking-2507",
          "value": "qwen/qwen3-235b-a22b-thinking-2507"
        },
        {
          "name": "qwen/qwen3-30b-a3b",
          "value": "qwen/qwen3-30b-a3b"
        },
        {
          "name": "qwen/qwen3-30b-a3b-instruct-2507",
          "value": "qwen/qwen3-30b-a3b-instruct-2507"
        },
        {
          "name": "qwen/qwen3-30b-a3b-thinking-2507",
          "value": "qwen/qwen3-30b-a3b-thinking-2507"
        },
        {
          "name": "qwen/qwen3-32b",
          "value": "qwen/qwen3-32b"
        },
        {
          "name": "qwen/qwen3-8b",
          "value": "qwen/qwen3-8b"
        },
        {
          "name": "qwen/qwen3-coder",
          "value": "qwen/qwen3-coder"
        },
        {
          "name": "qwen/qwen3-coder-30b-a3b-instruct",
          "value": "qwen/qwen3-coder-30b-a3b-instruct"
        },
        {
          "name": "qwen/qwen3-coder-flash",
          "value": "qwen/qwen3-coder-flash"
        },
        {
          "name": "qwen/qwen3-coder-next",
          "value": "qwen/qwen3-coder-next"
        },
        {
          "name": "qwen/qwen3-coder-plus",
          "value": "qwen/qwen3-coder-plus"
        },
        {
          "name": "qwen/qwen3-coder:free",
          "value": "qwen/qwen3-coder:free"
        },
        {
          "name": "qwen/qwen3-max",
          "value": "qwen/qwen3-max"
        },
        {
          "name": "qwen/qwen3-max-thinking",
          "value": "qwen/qwen3-max-thinking"
        },
        {
          "name": "qwen/qwen3-next-80b-a3b-instruct",
          "value": "qwen/qwen3-next-80b-a3b-instruct"
        },
        {
          "name": "qwen/qwen3-next-80b-a3b-instruct:free",
          "value": "qwen/qwen3-next-80b-a3b-instruct:free"
        },
        {
          "name": "qwen/qwen3-next-80b-a3b-thinking",
          "value": "qwen/qwen3-next-80b-a3b-thinking"
        },
        {
          "name": "qwen/qwen3-vl-235b-a22b-instruct",
          "value": "qwen/qwen3-vl-235b-a22b-instruct"
        },
        {
          "name": "qwen/qwen3-vl-235b-a22b-thinking",
          "value": "qwen/qwen3-vl-235b-a22b-thinking"
        },
        {
          "name": "qwen/qwen3-vl-30b-a3b-instruct",
          "value": "qwen/qwen3-vl-30b-a3b-instruct"
        },
        {
          "name": "qwen/qwen3-vl-30b-a3b-thinking",
          "value": "qwen/qwen3-vl-30b-a3b-thinking"
        },
        {
          "name": "qwen/qwen3-vl-32b-instruct",
          "value": "qwen/qwen3-vl-32b-instruct"
        },
        {
          "name": "qwen/qwen3-vl-8b-instruct",
          "value": "qwen/qwen3-vl-8b-instruct"
        },
        {
          "name": "qwen/qwen3-vl-8b-thinking",
          "value": "qwen/qwen3-vl-8b-thinking"
        },
        {
          "name": "qwen/qwen3.5-122b-a10b",
          "value": "qwen/qwen3.5-122b-a10b"
        },
        {
          "name": "qwen/qwen3.5-27b",
          "value": "qwen/qwen3.5-27b"
        },
        {
          "name": "qwen/qwen3.5-35b-a3b",
          "value": "qwen/qwen3.5-35b-a3b"
        },
        {
          "name": "qwen/qwen3.5-397b-a17b",
          "value": "qwen/qwen3.5-397b-a17b"
        },
        {
          "name": "qwen/qwen3.5-9b",
          "value": "qwen/qwen3.5-9b"
        },
        {
          "name": "qwen/qwen3.5-flash-02-23",
          "value": "qwen/qwen3.5-flash-02-23"
        },
        {
          "name": "qwen/qwen3.5-plus-02-15",
          "value": "qwen/qwen3.5-plus-02-15"
        },
        {
          "name": "qwen/qwen3.5-plus-20260420",
          "value": "qwen/qwen3.5-plus-20260420"
        },
        {
          "name": "qwen/qwen3.6-27b",
          "value": "qwen/qwen3.6-27b"
        },
        {
          "name": "qwen/qwen3.6-35b-a3b",
          "value": "qwen/qwen3.6-35b-a3b"
        },
        {
          "name": "qwen/qwen3.6-flash",
          "value": "qwen/qwen3.6-flash"
        },
        {
          "name": "qwen/qwen3.6-max-preview",
          "value": "qwen/qwen3.6-max-preview"
        },
        {
          "name": "qwen/qwen3.6-plus",
          "value": "qwen/qwen3.6-plus"
        },
        {
          "name": "qwen/qwen3.7-max",
          "value": "qwen/qwen3.7-max"
        },
        {
          "name": "qwen/qwen3.7-plus",
          "value": "qwen/qwen3.7-plus"
        },
        {
          "name": "rekaai/reka-edge",
          "value": "rekaai/reka-edge"
        },
        {
          "name": "rekaai/reka-flash-3",
          "value": "rekaai/reka-flash-3"
        },
        {
          "name": "relace/relace-apply-3",
          "value": "relace/relace-apply-3"
        },
        {
          "name": "relace/relace-search",
          "value": "relace/relace-search"
        },
        {
          "name": "sakana/fugu-ultra",
          "value": "sakana/fugu-ultra"
        },
        {
          "name": "sao10k/l3-lunaris-8b",
          "value": "sao10k/l3-lunaris-8b"
        },
        {
          "name": "sao10k/l3.1-70b-hanami-x1",
          "value": "sao10k/l3.1-70b-hanami-x1"
        },
        {
          "name": "sao10k/l3.1-euryale-70b",
          "value": "sao10k/l3.1-euryale-70b"
        },
        {
          "name": "sao10k/l3.3-euryale-70b",
          "value": "sao10k/l3.3-euryale-70b"
        },
        {
          "name": "stepfun/step-3.5-flash",
          "value": "stepfun/step-3.5-flash"
        },
        {
          "name": "stepfun/step-3.7-flash",
          "value": "stepfun/step-3.7-flash"
        },
        {
          "name": "switchpoint/router",
          "value": "switchpoint/router"
        },
        {
          "name": "tencent/hunyuan-a13b-instruct",
          "value": "tencent/hunyuan-a13b-instruct"
        },
        {
          "name": "tencent/hy3-preview",
          "value": "tencent/hy3-preview"
        },
        {
          "name": "thedrummer/cydonia-24b-v4.1",
          "value": "thedrummer/cydonia-24b-v4.1"
        },
        {
          "name": "thedrummer/rocinante-12b",
          "value": "thedrummer/rocinante-12b"
        },
        {
          "name": "thedrummer/skyfall-36b-v2",
          "value": "thedrummer/skyfall-36b-v2"
        },
        {
          "name": "thedrummer/unslopnemo-12b",
          "value": "thedrummer/unslopnemo-12b"
        },
        {
          "name": "undi95/remm-slerp-l2-13b",
          "value": "undi95/remm-slerp-l2-13b"
        },
        {
          "name": "upstage/solar-pro-3",
          "value": "upstage/solar-pro-3"
        },
        {
          "name": "writer/palmyra-x5",
          "value": "writer/palmyra-x5"
        },
        {
          "name": "x-ai/grok-4.20",
          "value": "x-ai/grok-4.20"
        },
        {
          "name": "x-ai/grok-4.20-multi-agent",
          "value": "x-ai/grok-4.20-multi-agent"
        },
        {
          "name": "x-ai/grok-4.3",
          "value": "x-ai/grok-4.3"
        },
        {
          "name": "x-ai/grok-build-0.1",
          "value": "x-ai/grok-build-0.1"
        },
        {
          "name": "xiaomi/mimo-v2.5",
          "value": "xiaomi/mimo-v2.5"
        },
        {
          "name": "xiaomi/mimo-v2.5-pro",
          "value": "xiaomi/mimo-v2.5-pro"
        },
        {
          "name": "z-ai/glm-4.5",
          "value": "z-ai/glm-4.5"
        },
        {
          "name": "z-ai/glm-4.5-air",
          "value": "z-ai/glm-4.5-air"
        },
        {
          "name": "z-ai/glm-4.5v",
          "value": "z-ai/glm-4.5v"
        },
        {
          "name": "z-ai/glm-4.6",
          "value": "z-ai/glm-4.6"
        },
        {
          "name": "z-ai/glm-4.6v",
          "value": "z-ai/glm-4.6v"
        },
        {
          "name": "z-ai/glm-4.7",
          "value": "z-ai/glm-4.7"
        },
        {
          "name": "z-ai/glm-4.7-flash",
          "value": "z-ai/glm-4.7-flash"
        },
        {
          "name": "z-ai/glm-5",
          "value": "z-ai/glm-5"
        },
        {
          "name": "z-ai/glm-5-turbo",
          "value": "z-ai/glm-5-turbo"
        },
        {
          "name": "z-ai/glm-5.1",
          "value": "z-ai/glm-5.1"
        },
        {
          "name": "z-ai/glm-5.2",
          "value": "z-ai/glm-5.2"
        },
        {
          "name": "z-ai/glm-5v-turbo",
          "value": "z-ai/glm-5v-turbo"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "medium",
      "description": "Reasoning effort for models that support it",
      "id": "reasoning_effort",
      "name": "Reasoning Effort",
      "options": [
        {
          "name": "None",
          "value": "none"
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
          "name": "Extra high",
          "value": "xhigh"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "0",
      "description": "Extended thinking budget for models that support it",
      "id": "thinking_budget",
      "name": "Thinking Budget",
      "options": [
        {
          "name": "Off",
          "value": "0"
        },
        {
          "name": "1,024 tokens",
          "value": "1024"
        },
        {
          "name": "4,096 tokens",
          "value": "4096"
        },
        {
          "name": "8,192 tokens",
          "value": "8192"
        },
        {
          "name": "16,384 tokens",
          "value": "16384"
        },
        {
          "name": "32,768 tokens",
          "value": "32768"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "act",
  "id": "dirac",
  "modes": [
    {
      "description": "Gather information and create a detailed plan",
      "id": "plan",
      "name": "Plan"
    },
    {
      "description": "Execute actions, asking permission for each tool call",
      "id": "act",
      "name": "Act"
    },
    {
      "description": "Execute actions, auto-approving all tool calls",
      "id": "auto",
      "name": "Auto-approve"
    },
    {
      "description": "Execute actions with no safety prompts",
      "id": "yolo",
      "name": "YOLO"
    }
  ],
  "name": "Dirac",
  "protocolVersion": 1,
  "version": "0.4.9"
};
