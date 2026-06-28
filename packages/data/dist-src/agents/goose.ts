import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "auth": {},
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": false
    },
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "close": {},
      "list": {}
    }
  },
  "agentInfo": {
    "name": "goose",
    "version": "1.39.0"
  },
  "authMethods": [
    {
      "description": "Run `goose configure` to set up your AI provider and API key",
      "id": "goose-provider",
      "name": "Configure Provider"
    }
  ],
  "commands": [
    {
      "description": "List available prompts, optionally filtered by extension",
      "name": "prompts"
    },
    {
      "description": "Execute a prompt or show its info with --info",
      "name": "prompt"
    },
    {
      "description": "Compact the conversation history",
      "name": "compact"
    },
    {
      "description": "Clear the conversation history",
      "name": "clear"
    },
    {
      "description": "List installed skills and other available sources",
      "name": "skills"
    },
    {
      "description": "Check that your Goose setup is working",
      "name": "doctor"
    },
    {
      "description": "Set a goal the agent must satisfy before finishing, or clear with /goal off",
      "name": "goal"
    },
    {
      "description": "Set a goal the agent pursues relentlessly until max_turns, or clear with /grind off",
      "name": "grind"
    },
    {
      "description": "Show session status: model, provider, mode, and token usage",
      "name": "status"
    },
    {
      "description": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format.",
      "name": "xlsx"
    },
    {
      "description": "Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): \"make a PDF\", \"generate a report\", \"write a proposal\", \"create a resume\", \"beautiful PDF\", \"professional document\", \"cover page\", \"polished PDF\", \"client-ready document\". FILL (complete form fields): \"fill in the form\", \"fill out this PDF\", \"complete the form fields\", \"write values into PDF\", \"what fields does this PDF have\". REFORMAT (apply design to an existing doc): \"reformat this document\", \"apply our style\", \"convert this Markdown/text to PDF\", \"make this doc look good\", \"re-style this PDF\". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n",
      "name": "pdf"
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
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "name": "artifact-static-site"
    },
    {
      "description": "Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Codex's capabilities with specialized knowledge, workflows, or tool integrations.",
      "name": "skill-creator"
    },
    {
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "name": "pptx-generator"
    },
    {
      "description": "Install Agents skills into $AGENTS_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos).",
      "name": "skill-installer"
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
      "description": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing.",
      "name": "gpt-taste"
    },
    {
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "name": "high-end-visual-design"
    },
    {
      "description": "Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document — including when they say \"write a report\", \"draft a proposal\", \"make a contract\", \"fill in this form\", \"reformat to match this template\", or any task whose final output is a .docx file. Even if the user doesn't mention \"docx\" explicitly, if the task implies a printable/formal document, use this skill.\n",
      "name": "docx"
    },
    {
      "description": "Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to \"pair agent\", \"connect agent\", \"share browser\", \"remote browser\",\n\"let another agent use my browser\", or \"give browser access\". (gstack)\nVoice triggers (speech-to-text aliases): \"pair agent\", \"connect agent\", \"share my browser\", \"remote browser access\".\n",
      "name": "pair-agent"
    },
    {
      "description": "Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: \"performance\", \"benchmark\", \"page speed\", \"lighthouse\", \"web vitals\",\n\"bundle size\", \"load time\". (gstack)\nVoice triggers (speech-to-text aliases): \"speed test\", \"check performance\".\n",
      "name": "benchmark"
    },
    {
      "description": "Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: \"finalize this design\", \"turn this into HTML\",\n\"build me a page\", \"implement this design\", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): \"build the design\", \"code the mockup\", \"make it real\".\n",
      "name": "design-html"
    },
    {
      "description": "Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface — no CLI syntax required.\n\nUse when asked to \"tune questions\", \"stop asking me that\", \"too many questions\",\n\"show my profile\", \"what questions have I been asked\", \"show my vibe\",\n\"developer profile\", or \"turn off question tuning\". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time.\n",
      "name": "plan-tune"
    },
    {
      "description": "Design shotgun: generate multiple AI design variants, open a comparison board,\ncollect structured feedback, and iterate. Standalone design exploration you can\nrun anytime. Use when: \"explore designs\", \"show me options\", \"design variants\",\n\"visual brainstorm\", or \"I don't like how this looks\".\nProactively suggest when the user describes a UI feature but hasn't seen\nwhat it could look like. (gstack)\n",
      "name": "design-shotgun"
    },
    {
      "description": "Designer's eye plan review — interactive, like CEO and Eng review.\nRates each design dimension 0-10, explains what would make it a 10,\nthen fixes the plan to get there. Works in plan mode. For live site\nvisual audits, use /design-review. Use when asked to \"review the design plan\"\nor \"design critique\".\nProactively suggest when the user has a plan with UI/UX components that\nshould be reviewed before implementation. (gstack)\n",
      "name": "plan-design-review"
    },
    {
      "description": "Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to \"auto review\", \"autoplan\", \"run all reviews\", \"review this plan\nautomatically\", or \"make the decisions for me\".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): \"auto plan\", \"automatic review\".\n",
      "name": "autoplan"
    },
    {
      "description": "Design consultation: understands your product, researches the landscape, proposes a\ncomplete design system (aesthetic, typography, color, layout, spacing, motion), and\ngenerates font+color preview pages. Creates DESIGN.md as your project's design source\nof truth. For existing sites, use /plan-design-review to infer the system instead.\nUse when asked to \"design system\", \"brand guidelines\", or \"create DESIGN.md\".\nProactively suggest when starting a new project's UI with no existing\ndesign system or DESIGN.md. (gstack)\n",
      "name": "design-consultation"
    },
    {
      "description": "Manage project learnings. Review, search, prune, and export what gstack\nhas learned across sessions. Use when asked to \"what have we learned\",\n\"show learnings\", \"prune stale learnings\", or \"export learnings\".\nProactively suggest when the user asks about past patterns or wonders\n\"didn't we fix this before?\"\n",
      "name": "learn"
    },
    {
      "description": "Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n\"fixing\" unrelated code, or when you want to scope changes to one module.\nUse when asked to \"freeze\", \"restrict edits\", \"only edit this folder\",\nor \"lock down edits\". (gstack)\n",
      "name": "freeze"
    },
    {
      "description": "Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to \"be careful\", \"safety mode\",\n\"prod mode\", or \"careful mode\". (gstack)\n",
      "name": "careful"
    },
    {
      "description": "Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: \"security audit\", \"threat model\", \"pentest review\", \"OWASP\", \"CSO review\". (gstack)\nVoice triggers (speech-to-text aliases): \"see-so\", \"see so\", \"security review\", \"security check\", \"vulnerability scan\", \"run security\".\n",
      "name": "cso"
    },
    {
      "description": "Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: \"monitor deploy\", \"canary\", \"post-deploy check\",\n\"watch production\", \"verify deploy\". (gstack)\n",
      "name": "canary"
    },
    {
      "description": "Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to \"open gstack browser\", \"launch browser\", \"connect chrome\",\n\"open chrome\", \"real browser\", \"launch chrome\", \"side panel\", or \"control my browser\".\nVoice triggers (speech-to-text aliases): \"show me the browser\".\n",
      "name": "open-gstack-browser"
    },
    {
      "description": "Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to \"debug this\", \"fix this bug\", \"why is this broken\",\n\"investigate this error\", or \"root cause analysis\".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, \"it was working\nyesterday\", or is troubleshooting why something stopped working. (gstack)\n",
      "name": "investigate"
    },
    {
      "description": "Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off — even across Conductor workspace handoffs.\nUse when asked to \"resume\", \"restore context\", \"where was I\", or\n\"pick up where I left off\". Pair with /context-save.\nFormerly /checkpoint resume — renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack)\n",
      "name": "context-restore"
    },
    {
      "description": "Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to \"update the docs\", \"sync documentation\", or \"post-ship docs\".\nProactively suggest after a PR is merged or code is shipped. (gstack)\n",
      "name": "document-release"
    },
    {
      "description": "Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: \"health check\",\n\"code quality\", \"how healthy is the codebase\", \"run all checks\",\n\"quality score\". (gstack)\n",
      "name": "health"
    },
    {
      "description": "Upgrade gstack to the latest version. Detects global vs vendored install,\nruns the upgrade, and shows what's new. Use when asked to \"upgrade gstack\",\n\"update gstack\", or \"get latest version\".\nVoice triggers (speech-to-text aliases): \"upgrade the tools\", \"update the tools\", \"gee stack upgrade\", \"g stack upgrade\".\n",
      "name": "gstack-upgrade"
    },
    {
      "description": "Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: \"merge\", \"land\", \"deploy\", \"merge and verify\",\n\"land it\", \"ship it to production\". (gstack)\n",
      "name": "land-and-deploy"
    },
    {
      "description": "OpenAI Codex CLI wrapper — three modes. Code review: independent diff review via\ncodex review with pass/fail gate. Challenge: adversarial mode that tries to break\nyour code. Consult: ask codex anything with session continuity for follow-ups.\nThe \"200 IQ autistic developer\" second opinion. Use when asked to \"codex review\",\n\"codex challenge\", \"ask codex\", \"second opinion\", or \"consult codex\". (gstack)\nVoice triggers (speech-to-text aliases): \"code x\", \"code ex\", \"get another opinion\".\n",
      "name": "codex"
    },
    {
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to \"open in browser\", \"test the\nsite\", \"take a screenshot\", or \"dogfood this\". (gstack)",
      "name": "browse"
    },
    {
      "description": "Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to \"guard mode\",\n\"full safety\", \"lock it down\", or \"maximum safety\". (gstack)",
      "name": "guard"
    },
    {
      "description": "CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to \"think bigger\", \"expand scope\", \"strategy review\", \"rethink this\",\nor \"is this ambitious enough\".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack)",
      "name": "plan-ceo-review"
    },
    {
      "description": "Report-only QA testing. Systematically tests a web application and produces a\nstructured report with health score, screenshots, and repro steps — but never\nfixes anything. Use when asked to \"just report bugs\", \"qa report only\", or\n\"test but don't fix\". For the full test-fix-verify loop, use /qa instead.\nProactively suggest when the user wants a bug report without any code changes. (gstack)\nVoice triggers (speech-to-text aliases): \"bug report\", \"just check for bugs\".",
      "name": "qa-only"
    },
    {
      "description": "Eng manager-mode plan review. Lock in the execution plan — architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n\"review the architecture\", \"engineering review\", or \"lock in the plan\".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding — to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): \"tech review\", \"technical review\", \"plan engineering review\".",
      "name": "plan-eng-review"
    },
    {
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate pages, interact with\nelements, verify state, diff before/after, take annotated screenshots, test responsive\nlayouts, forms, uploads, dialogs, and capture bug evidence. Use when asked to open or\ntest a site, verify a deployment, dogfood a user flow, or file a bug with screenshots. (gstack)",
      "name": "gstack"
    },
    {
      "description": "Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust\nboundary violations, conditional side effects, and other structural issues. Use when\nasked to \"review this PR\", \"code review\", \"pre-landing review\", or \"check my diff\".\nProactively suggest when the user is about to merge or land code changes. (gstack)",
      "name": "review"
    },
    {
      "description": "Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,\nAI slop patterns, and slow interactions — then fixes them. Iteratively fixes issues\nin source code, committing each fix atomically and re-verifying with before/after\nscreenshots. For plan-mode design review (before implementation), use /plan-design-review.\nUse when asked to \"audit the design\", \"visual QA\", \"check if it looks good\", or \"design polish\".\nProactively suggest when the user mentions visual inconsistencies or\nwants to polish the look of a live site. (gstack)",
      "name": "design-review"
    },
    {
      "description": "Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to \"weekly retro\", \"what did we ship\", or \"engineering retrospective\".\nProactively suggest at the end of a work week or sprint. (gstack)",
      "name": "retro"
    },
    {
      "description": "Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side — compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers \"which model is actually best\nfor this skill?\" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: \"benchmark models\", \"compare models\",\n\"which model is best for X\", \"cross-model comparison\", \"model shootout\". (gstack)\nVoice triggers (speech-to-text aliases): \"compare models\", \"model shootout\", \"which model is best\".",
      "name": "benchmark-models"
    },
    {
      "description": "Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to \"unfreeze\", \"unlock edits\", \"remove freeze\", or\n\"allow all edits\". (gstack)",
      "name": "unfreeze"
    },
    {
      "description": "Claude Code CLI wrapper for non-Claude hosts - three modes. Review: independent\ndiff review via claude -p. Challenge: adversarial failure-mode review. Consult:\nask Claude about the repo with read-only file tools. Use when asked for \"claude\nreview\", \"claude challenge\", \"ask claude\", \"second opinion from claude\", or\n\"outside voice\". (gstack)",
      "name": "claude"
    },
    {
      "description": "Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to \"ship\", \"deploy\",\n\"push to main\", \"create a PR\", \"merge and push\", or \"get it deployed\".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)",
      "name": "ship"
    },
    {
      "description": "Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact — a finished artifact. Use when asked to \"make a PDF\", \"export to\nPDF\", \"turn this markdown into a PDF\", or \"generate a document\". (gstack)\nVoice triggers (speech-to-text aliases): \"make this a pdf\", \"make it a pdf\", \"export to pdf\", \"turn this into a pdf\", \"turn this markdown into a pdf\", \"generate a pdf\", \"make a pdf from\", \"pdf this markdown\".",
      "name": "make-pdf"
    },
    {
      "description": "Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: \"setup deploy\", \"configure deployment\", \"set up land-and-deploy\",\n\"how do I deploy with gstack\", \"add deploy config\".",
      "name": "setup-deploy"
    },
    {
      "description": "Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to \"save progress\", \"save state\", \"context save\", or\n\"save my work\". Pair with /context-restore to resume later.\nFormerly /checkpoint — renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack)",
      "name": "context-save"
    },
    {
      "description": "Pull data from a web page. First call on a new intent prototypes the flow\nvia $B primitives and returns JSON. Subsequent calls on a matching intent\nroute to a codified browser-skill and return in ~200ms. Read-only — for\nmutating flows (form fills, clicks, submissions), use /automate.\nUse when asked to \"scrape\", \"get data from\", \"pull\", \"extract from\", or\n\"what's on\" a page. (gstack)",
      "name": "scrape"
    },
    {
      "description": "Systematically QA test a web application and fix bugs found. Runs QA testing,\nthen iteratively fixes bugs in source code, committing each fix atomically and\nre-verifying. Use when asked to \"qa\", \"QA\", \"test this site\", \"find bugs\",\n\"test and fix\", or \"fix what's broken\".\nProactively suggest when the user says a feature is ready for testing\nor asks \"does this work?\". Three tiers: Quick (critical/high only),\nStandard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,\nfix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)\nVoice triggers (speech-to-text aliases): \"quality check\", \"test the app\", \"run QA\".",
      "name": "qa"
    },
    {
      "description": "Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to \"import cookies\",\n\"login to the site\", or \"authenticate the browser\". (gstack)",
      "name": "setup-browser-cookies"
    },
    {
      "description": "Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n\"test the DX\", \"DX audit\", \"developer experience test\", or \"try the\nonboarding\". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): \"dx audit\", \"test the developer experience\", \"try the onboarding\", \"developer experience test\".",
      "name": "devex-review"
    },
    {
      "description": "Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots\nare currently claimed by open PRs, which sibling Conductor workspaces have\nWIP work likely to ship soon, and what slot /ship would pick next. No\nmutations — just a snapshot. Use when asked to \"landing report\", \"what's in\nthe queue\", \"show me open PRs\", or \"which version do I claim next\". (gstack)",
      "name": "landing-report"
    },
    {
      "description": "YC Office Hours — two modes. Startup mode: six forcing questions that expose\ndemand reality, status quo, desperate specificity, narrowest wedge, observation,\nand future-fit. Builder mode: design thinking brainstorming for side projects,\nhackathons, learning, and open source. Saves a design doc.\nUse when asked to \"brainstorm this\", \"I have an idea\", \"help me think through\nthis\", \"office hours\", or \"is this worth building\".\nProactively invoke this skill (do NOT answer directly) when the user describes\na new product idea, asks whether something is worth building, wants to think\nthrough design decisions for something that doesn't exist yet, or is exploring\na concept before any code is written.\nUse before /plan-ceo-review or /plan-eng-review. (gstack)",
      "name": "office-hours"
    },
    {
      "description": "Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to \"DX review\", \"developer experience audit\", \"devex review\",\nor \"API design review\".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): \"dx review\", \"developer experience review\", \"devex review\", \"devex audit\", \"API design review\", \"onboarding review\".",
      "name": "plan-devex-review"
    },
    {
      "description": "Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to \"gbrain is running, and this agent\ncan call it.\" Use when: \"setup gbrain\", \"connect gbrain\", \"start\ngbrain\", \"install gbrain\", \"configure gbrain for this machine\". (gstack)",
      "name": "setup-gbrain"
    },
    {
      "description": "Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to \"skillify\", \"codify\", \"save this scrape\", or\n\"make this permanent\". (gstack)",
      "name": "skillify"
    },
    {
      "description": "Use when asked to debug, fix a bug, investigate an error, or do root cause analysis, and when users report errors, stack traces, unexpected behavior, or say something stopped working.",
      "name": "gstack-openclaw-investigate"
    },
    {
      "description": "Use when asked to brainstorm, evaluate whether an idea is worth building, run office hours, or think through a new product idea or design direction before any code is written.",
      "name": "gstack-openclaw-office-hours"
    },
    {
      "description": "Use when asked to review a plan, challenge a proposal, run a CEO review, poke holes in an approach, think bigger about scope, or decide whether to expand or reduce the plan.",
      "name": "gstack-openclaw-ceo-review"
    },
    {
      "description": "Weekly engineering retrospective. Analyzes commit history, work patterns, and code quality metrics with persistent history and trend tracking. Team-aware with per-person contributions, praise, and growth areas. Use when asked for weekly retro, what shipped this week, or engineering retrospective.",
      "name": "gstack-openclaw-retro"
    },
    {
      "description": "Scrape the Hacker News front page (titles, points, comment counts).",
      "name": "hackernews-frontpage"
    },
    {
      "description": "Reference goose documentation to create, configure, or explain goose-specific features like recipes, extensions, sessions, and providers. You MUST fetch relevant goose docs before answering. You MUST NOT rely on training data or assumptions for any goose-specific fields, values, names, syntax, or commands.",
      "name": "goose-doc-guide"
    }
  ],
  "configOptions": [
    {
      "currentValue": "openai",
      "id": "provider",
      "name": "Provider",
      "options": [
        {
          "name": "Goose (Default)",
          "value": "goose"
        },
        {
          "name": "Alibaba (Qwen)",
          "value": "alibaba"
        },
        {
          "name": "Amp",
          "value": "amp-acp"
        },
        {
          "name": "Anthropic",
          "value": "anthropic"
        },
        {
          "name": "Atomic Chat",
          "value": "atomic_chat"
        },
        {
          "name": "Avian",
          "value": "avian"
        },
        {
          "name": "Amazon Bedrock",
          "value": "aws_bedrock"
        },
        {
          "name": "Azure OpenAI",
          "value": "azure_openai"
        },
        {
          "name": "Cerebras",
          "value": "cerebras"
        },
        {
          "name": "ChatGPT Codex",
          "value": "chatgpt_codex"
        },
        {
          "name": "Claude Code",
          "value": "claude-acp"
        },
        {
          "name": "Claude Code CLI",
          "value": "claude-code"
        },
        {
          "name": "OpenAI Codex CLI",
          "value": "codex"
        },
        {
          "name": "Codex CLI",
          "value": "codex-acp"
        },
        {
          "name": "GitHub Copilot CLI (ACP)",
          "value": "copilot-acp"
        },
        {
          "name": "Cursor Agent",
          "value": "cursor-agent"
        },
        {
          "name": "DeepSeek",
          "value": "custom_deepseek"
        },
        {
          "name": "Tensorix",
          "value": "custom_tensorix"
        },
        {
          "name": "Databricks",
          "value": "databricks"
        },
        {
          "name": "Databricks AI Gateway",
          "value": "databricks_v2"
        },
        {
          "name": "EmpirioLabs",
          "value": "empiriolabs"
        },
        {
          "name": "FuturMix",
          "value": "futurmix"
        },
        {
          "name": "GCP Vertex AI",
          "value": "gcp_vertex_ai"
        },
        {
          "name": "Gemini CLI",
          "value": "gemini-cli"
        },
        {
          "name": "Gemini",
          "value": "gemini_oauth"
        },
        {
          "name": "GitHub Copilot",
          "value": "github_copilot"
        },
        {
          "name": "Google Gemini (API Key)",
          "value": "google"
        },
        {
          "name": "Groq (d)",
          "value": "groq"
        },
        {
          "name": "Hugging Face",
          "value": "huggingface"
        },
        {
          "name": "Inception",
          "value": "inception"
        },
        {
          "name": "Kimi Code",
          "value": "kimi_code"
        },
        {
          "name": "LiteLLM",
          "value": "litellm"
        },
        {
          "name": "Llama Swap",
          "value": "llama_swap"
        },
        {
          "name": "LM Studio",
          "value": "lmstudio"
        },
        {
          "name": "Local Inference",
          "value": "local"
        },
        {
          "name": "MiniMax",
          "value": "minimax"
        },
        {
          "name": "Mistral AI",
          "value": "mistral"
        },
        {
          "name": "Moonshot",
          "value": "moonshot"
        },
        {
          "name": "NanoGPT",
          "value": "nano-gpt"
        },
        {
          "name": "NEAR AI Cloud",
          "value": "nearai"
        },
        {
          "name": "Novita AI",
          "value": "novita"
        },
        {
          "name": "NVIDIA",
          "value": "nvidia"
        },
        {
          "name": "Ollama",
          "value": "ollama"
        },
        {
          "name": "Ollama Cloud",
          "value": "ollama_cloud"
        },
        {
          "name": "oMLX",
          "value": "omlx"
        },
        {
          "name": "OpenAI",
          "value": "openai"
        },
        {
          "name": "OpenCode Go",
          "value": "opencode_go"
        },
        {
          "name": "OpenRouter",
          "value": "openrouter"
        },
        {
          "name": "OrcaRouter",
          "value": "orcarouter"
        },
        {
          "name": "OVHcloud",
          "value": "ovhcloud"
        },
        {
          "name": "Perplexity",
          "value": "perplexity"
        },
        {
          "name": "Pi",
          "value": "pi-acp"
        },
        {
          "name": "Routstr",
          "value": "routstr"
        },
        {
          "name": "Amazon SageMaker TGI",
          "value": "sagemaker_tgi"
        },
        {
          "name": "SaladCloud AI Gateway",
          "value": "saladcloud"
        },
        {
          "name": "Scaleway",
          "value": "scaleway"
        },
        {
          "name": "Snowflake",
          "value": "snowflake"
        },
        {
          "name": "VMware Tanzu Platform",
          "value": "tanzu_ai"
        },
        {
          "name": "Tetrate Agent Router Service",
          "value": "tetrate"
        },
        {
          "name": "Together AI",
          "value": "together"
        },
        {
          "name": "Venice.ai",
          "value": "venice"
        },
        {
          "name": "Vercel AI Gateway",
          "value": "vercel_ai_gateway"
        },
        {
          "name": "xAI",
          "value": "xai"
        },
        {
          "name": "xAI (SuperGrok Subscription)",
          "value": "xai_oauth"
        },
        {
          "name": "Z.AI",
          "value": "zai"
        },
        {
          "name": "Zhipu AI",
          "value": "zhipu"
        }
      ],
      "type": "select"
    },
    {
      "category": "mode",
      "currentValue": "auto",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "description": "Automatically approve tool calls",
          "name": "auto",
          "value": "auto"
        },
        {
          "description": "Ask before every tool call",
          "name": "approve",
          "value": "approve"
        },
        {
          "description": "Ask only for sensitive tool calls",
          "name": "smart_approve",
          "value": "smart_approve"
        },
        {
          "description": "Chat only, no tool calls",
          "name": "chat",
          "value": "chat"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "probe-dummy-model",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "name": "probe-dummy-model",
          "value": "probe-dummy-model"
        },
        {
          "name": "GPT-4o",
          "value": "gpt-4o"
        },
        {
          "name": "GPT-4o mini",
          "value": "gpt-4o-mini"
        },
        {
          "name": "GPT-4.1",
          "value": "gpt-4.1"
        },
        {
          "name": "GPT-4.1 mini",
          "value": "gpt-4.1-mini"
        },
        {
          "name": "o1",
          "value": "o1"
        },
        {
          "name": "o3",
          "value": "o3"
        },
        {
          "name": "GPT-3.5-turbo",
          "value": "gpt-3.5-turbo"
        },
        {
          "name": "GPT-4 Turbo",
          "value": "gpt-4-turbo"
        },
        {
          "name": "o4-mini",
          "value": "o4-mini"
        },
        {
          "name": "GPT-5",
          "value": "gpt-5"
        },
        {
          "name": "GPT-5 Mini",
          "value": "gpt-5-mini"
        },
        {
          "name": "GPT-5 Nano",
          "value": "gpt-5-nano"
        },
        {
          "name": "GPT-5 Pro",
          "value": "gpt-5-pro"
        },
        {
          "name": "GPT-5-Codex",
          "value": "gpt-5-codex"
        },
        {
          "name": "GPT-5.1",
          "value": "gpt-5.1"
        },
        {
          "name": "GPT-5.1 Codex",
          "value": "gpt-5.1-codex"
        },
        {
          "name": "GPT-5.2",
          "value": "gpt-5.2"
        },
        {
          "name": "GPT-5.2 Codex",
          "value": "gpt-5.2-codex"
        },
        {
          "name": "GPT-5.2 Pro",
          "value": "gpt-5.2-pro"
        },
        {
          "name": "GPT-5.3 Codex",
          "value": "gpt-5.3-codex"
        },
        {
          "name": "GPT-5.4",
          "value": "gpt-5.4"
        },
        {
          "name": "GPT-5.4 mini",
          "value": "gpt-5.4-mini"
        },
        {
          "name": "GPT-5.4 nano",
          "value": "gpt-5.4-nano"
        },
        {
          "name": "GPT-5.4 Pro",
          "value": "gpt-5.4-pro"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "off",
      "description": "Controls reasoning effort for models that support extended thinking.",
      "id": "thinking_effort",
      "name": "Thinking effort",
      "options": [
        {
          "name": "off",
          "value": "off"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "auto",
  "id": "goose",
  "modes": [
    {
      "description": "Automatically approve tool calls",
      "id": "auto",
      "name": "auto"
    },
    {
      "description": "Ask before every tool call",
      "id": "approve",
      "name": "approve"
    },
    {
      "description": "Ask only for sensitive tool calls",
      "id": "smart_approve",
      "name": "smart_approve"
    },
    {
      "description": "Chat only, no tool calls",
      "id": "chat",
      "name": "chat"
    }
  ],
  "name": "goose",
  "protocolVersion": 1,
  "version": "1.39.0"
};
