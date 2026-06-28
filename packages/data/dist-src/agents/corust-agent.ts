import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "loadSession": false,
    "mcpCapabilities": {
      "http": false,
      "sse": false
    },
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": false,
      "image": true
    },
    "sessionCapabilities": {}
  },
  "agentInfo": {
    "name": "corust-acp",
    "title": "Corust Agent",
    "version": "0.1.0"
  },
  "authMethods": [],
  "commands": [
    {
      "description": "create an AGENTS.md file with instructions for Corust",
      "input": null,
      "name": "init"
    },
    {
      "description": "show your token usage",
      "input": null,
      "name": "usage"
    },
    {
      "description": "view pricing plans and subscribe to Pro or Enterprise",
      "input": null,
      "name": "subscribe"
    },
    {
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "input": null,
      "name": "artifact-static-site"
    },
    {
      "description": "Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from diskand runs them sequentially with auto-decisions using 6 decision principles. Surfacestaste decisions (close approaches, borderline scope, codex disagreements) at a finalapproval gate. One command, fully reviewed plan out.Use when asked to \"auto review\", \"autoplan\", \"run all reviews\", \"review this planautomatically\", or \"make the decisions for me\".Proactively suggest when the user has a plan file and wants to run the full reviewgauntlet without answering 15-30 intermediate questions. (gstack)Voice triggers (speech-to-text aliases): \"auto plan\", \"automatic review\".",
      "input": null,
      "name": "autoplan"
    },
    {
      "description": "Performance regression detection using the browse daemon. Establishesbaselines for page load times, Core Web Vitals, and resource sizes.Compares before/after on every PR. Tracks performance trends over time.Use when: \"performance\", \"benchmark\", \"page speed\", \"lighthouse\", \"web vitals\",\"bundle size\", \"load time\". (gstack)Voice triggers (speech-to-text aliases): \"speed test\", \"check performance\".",
      "input": null,
      "name": "benchmark"
    },
    {
      "description": "Cross-model benchmark for gstack skills. Runs the same prompt through Claude,GPT (via Codex CLI), and Gemini side-by-side — compares latency, tokens, cost,and optionally quality via LLM judge. Answers \"which model is actually bestfor this skill?\" with data instead of vibes. Separate from /benchmark, whichmeasures web page performance. Use when: \"benchmark models\", \"compare models\",\"which model is best for X\", \"cross-model comparison\", \"model shootout\". (gstack)Voice triggers (speech-to-text aliases): \"compare models\", \"model shootout\", \"which model is best\".",
      "input": null,
      "name": "benchmark-models"
    },
    {
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact withelements, verify page state, diff before/after actions, take annotated screenshots, checkresponsive layouts, test forms and uploads, handle dialogs, and assert element states.~100ms per command. Use when you need to test a feature, verify a deployment, dogfood auser flow, or file a bug with evidence. Use when asked to \"open in browser\", \"test thesite\", \"take a screenshot\", or \"dogfood this\". (gstack)",
      "input": null,
      "name": "browse"
    },
    {
      "description": "Post-deploy canary monitoring. Watches the live app for console errors,performance regressions, and page failures using the browse daemon. Takesperiodic screenshots, compares against pre-deploy baselines, and alertson anomalies. Use when: \"monitor deploy\", \"canary\", \"post-deploy check\",\"watch production\", \"verify deploy\". (gstack)",
      "input": null,
      "name": "canary"
    },
    {
      "description": "Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,force-push, git reset --hard, kubectl delete, and similar destructive operations.User can override each warning. Use when touching prod, debugging live systems,or working in a shared environment. Use when asked to \"be careful\", \"safety mode\",\"prod mode\", or \"careful mode\". (gstack)",
      "input": null,
      "name": "careful"
    },
    {
      "description": "OpenAI Codex CLI wrapper — three modes. Code review: independent diff review viacodex review with pass/fail gate. Challenge: adversarial mode that tries to breakyour code. Consult: ask codex anything with session continuity for follow-ups.The \"200 IQ autistic developer\" second opinion. Use when asked to \"codex review\",\"codex challenge\", \"ask codex\", \"second opinion\", or \"consult codex\". (gstack)Voice triggers (speech-to-text aliases): \"code x\", \"code ex\", \"get another opinion\".",
      "input": null,
      "name": "codex"
    },
    {
      "description": "Restore working context saved earlier by /context-save. Loads the most recentsaved state (across all branches by default) so you can pick up where youleft off — even across Conductor workspace handoffs.Use when asked to \"resume\", \"restore context\", \"where was I\", or\"pick up where I left off\". Pair with /context-save.Formerly /checkpoint resume — renamed because Claude Code treats /checkpointas a native rewind alias in current environments. (gstack)",
      "input": null,
      "name": "context-restore"
    },
    {
      "description": "Save working context. Captures git state, decisions made, and remaining workso any future session can pick up without losing a beat.Use when asked to \"save progress\", \"save state\", \"context save\", or\"save my work\". Pair with /context-restore to resume later.Formerly /checkpoint — renamed because Claude Code treats /checkpoint as anative rewind alias in current environments, which was shadowing this skill.(gstack)",
      "input": null,
      "name": "context-save"
    },
    {
      "description": "Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,dependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chainscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.Two modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deepscan, 2/10 bar). Trend tracking across audit runs.Use when: \"security audit\", \"threat model\", \"pentest review\", \"OWASP\", \"CSO review\". (gstack)Voice triggers (speech-to-text aliases): \"see-so\", \"see so\", \"security review\", \"security check\", \"vulnerability scan\", \"run security\".",
      "input": null,
      "name": "cso"
    },
    {
      "description": "Multi Agents Looping — a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "input": null,
      "name": "deep-investigate"
    },
    {
      "description": "Design consultation: understands your product, researches the landscape, proposes acomplete design system (aesthetic, typography, color, layout, spacing, motion), andgenerates font+color preview pages. Creates DESIGN.md as your project's design sourceof truth. For existing sites, use /plan-design-review to infer the system instead.Use when asked to \"design system\", \"brand guidelines\", or \"create DESIGN.md\".Proactively suggest when starting a new project's UI with no existingdesign system or DESIGN.md. (gstack)",
      "input": null,
      "name": "design-consultation"
    },
    {
      "description": "Design finalization: generates production-quality Pretext-native HTML/CSS.Works with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,design review context from /plan-design-review, or from scratch with a userdescription. Text actually reflows, heights are computed, layouts are dynamic.30KB overhead, zero deps. Smart API routing: picks the right Pretext patternsfor each design type. Use when: \"finalize this design\", \"turn this into HTML\",\"build me a page\", \"implement this design\", or after any planning skill.Proactively suggest when user has approved a design or has a plan ready. (gstack)Voice triggers (speech-to-text aliases): \"build the design\", \"code the mockup\", \"make it real\".",
      "input": null,
      "name": "design-html"
    },
    {
      "description": "Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,AI slop patterns, and slow interactions — then fixes them. Iteratively fixes issuesin source code, committing each fix atomically and re-verifying with before/afterscreenshots. For plan-mode design review (before implementation), use /plan-design-review.Use when asked to \"audit the design\", \"visual QA\", \"check if it looks good\", or \"design polish\".Proactively suggest when the user mentions visual inconsistencies orwants to polish the look of a live site. (gstack)",
      "input": null,
      "name": "design-review"
    },
    {
      "description": "Design shotgun: generate multiple AI design variants, open a comparison board,collect structured feedback, and iterate. Standalone design exploration you canrun anytime. Use when: \"explore designs\", \"show me options\", \"design variants\",\"visual brainstorm\", or \"I don't like how this looks\".Proactively suggest when the user describes a UI feature but hasn't seenwhat it could look like. (gstack)",
      "input": null,
      "name": "design-shotgun"
    },
    {
      "description": "Live developer experience audit. Uses the browse tool to actually TEST thedeveloper experience: navigates docs, tries the getting started flow, timesTTHW, screenshots error messages, evaluates CLI help text. Produces a DXscorecard with evidence. Compares against /plan-devex-review scores if theyexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\"test the DX\", \"DX audit\", \"developer experience test\", or \"try theonboarding\". Proactively suggest after shipping a developer-facing feature. (gstack)Voice triggers (speech-to-text aliases): \"dx audit\", \"test the developer experience\", \"try the onboarding\", \"developer experience test\".",
      "input": null,
      "name": "devex-review"
    },
    {
      "description": "Use when asked to analyze code and add explanatory code annotations, file headers, doc comments, inline comments, or JSX-safe comments.",
      "input": null,
      "name": "docs-code"
    },
    {
      "description": "Docs-driven delivery workflow. Use when splitting design docs into tasks, creating implementation plans under docs/plan, executing develop/verify/merge cycles, maintaining design doc consistency, or writing UI layout documentation with ASCII diagrams.",
      "input": null,
      "name": "docs-sprint"
    },
    {
      "description": "Post-ship documentation update. Reads all project docs, cross-references thediff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,polishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use whenasked to \"update the docs\", \"sync documentation\", or \"post-ship docs\".Proactively suggest after a PR is merged or code is shipped. (gstack)",
      "input": null,
      "name": "document-release"
    },
    {
      "description": "Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document — including when they say \"write a report\", \"draft a proposal\", \"make a contract\", \"fill in this form\", \"reformat to match this template\", or any task whose final output is a .docx file. Even if the user doesn't mention \"docx\" explicitly, if the task implies a printable/formal document, use this skill.",
      "input": null,
      "name": "docx"
    },
    {
      "description": "Helps users discover and install agent skills when they ask questions like \"how do I do X\", \"find a skill for X\", \"is there a skill that can...\", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.",
      "input": null,
      "name": "find-skills"
    },
    {
      "description": "Restrict file edits to a specific directory for the session. Blocks Edit andWrite outside the allowed path. Use when debugging to prevent accidentally\"fixing\" unrelated code, or when you want to scope changes to one module.Use when asked to \"freeze\", \"restrict edits\", \"only edit this folder\",or \"lock down edits\". (gstack)",
      "input": null,
      "name": "freeze"
    },
    {
      "description": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing.",
      "input": null,
      "name": "gpt-taste"
    },
    {
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate pages, interact withelements, verify state, diff before/after, take annotated screenshots, test responsivelayouts, forms, uploads, dialogs, and capture bug evidence. Use when asked to open ortest a site, verify a deployment, dogfood a user flow, or file a bug with screenshots. (gstack)",
      "input": null,
      "name": "gstack"
    },
    {
      "description": "Use when asked to review a plan, challenge a proposal, run a CEO review, poke holes in an approach, think bigger about scope, or decide whether to expand or reduce the plan.",
      "input": null,
      "name": "gstack-openclaw-ceo-review"
    },
    {
      "description": "Use when asked to debug, fix a bug, investigate an error, or do root cause analysis, and when users report errors, stack traces, unexpected behavior, or say something stopped working.",
      "input": null,
      "name": "gstack-openclaw-investigate"
    },
    {
      "description": "Use when asked to brainstorm, evaluate whether an idea is worth building, run office hours, or think through a new product idea or design direction before any code is written.",
      "input": null,
      "name": "gstack-openclaw-office-hours"
    },
    {
      "description": "Weekly engineering retrospective. Analyzes commit history, work patterns, and code quality metrics with persistent history and trend tracking. Team-aware with per-person contributions, praise, and growth areas. Use when asked for weekly retro, what shipped this week, or engineering retrospective.",
      "input": null,
      "name": "gstack-openclaw-retro"
    },
    {
      "description": "Upgrade gstack to the latest version. Detects global vs vendored install,runs the upgrade, and shows what's new. Use when asked to \"upgrade gstack\",\"update gstack\", or \"get latest version\".Voice triggers (speech-to-text aliases): \"upgrade the tools\", \"update the tools\", \"gee stack upgrade\", \"g stack upgrade\".",
      "input": null,
      "name": "gstack-upgrade"
    },
    {
      "description": "Full safety mode: destructive command warnings + directory-scoped edits.Combines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with/freeze (blocks edits outside a specified directory). Use for maximum safetywhen touching prod or debugging live systems. Use when asked to \"guard mode\",\"full safety\", \"lock it down\", or \"maximum safety\". (gstack)",
      "input": null,
      "name": "guard"
    },
    {
      "description": "Scrape the Hacker News front page (titles, points, comment counts).",
      "input": null,
      "name": "hackernews-frontpage"
    },
    {
      "description": "Code quality dashboard. Wraps existing project tools (type checker, linter,test runner, dead code detector, shell linter), computes a weighted composite0-10 score, and tracks trends over time. Use when: \"health check\",\"code quality\", \"how healthy is the codebase\", \"run all checks\",\"quality score\". (gstack)",
      "input": null,
      "name": "health"
    },
    {
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "input": null,
      "name": "high-end-visual-design"
    },
    {
      "description": "Systematic debugging with root cause investigation. Four phases: investigate,analyze, hypothesize, implement. Iron Law: no fixes without root cause.Use when asked to \"debug this\", \"fix this bug\", \"why is this broken\",\"investigate this error\", or \"root cause analysis\".Proactively invoke this skill (do NOT debug directly) when the user reportserrors, 500 errors, stack traces, unexpected behavior, \"it was workingyesterday\", or is troubleshooting why something stopped working. (gstack)",
      "input": null,
      "name": "investigate"
    },
    {
      "description": "Land and deploy workflow. Merges the PR, waits for CI and deploy,verifies production health via canary checks. Takes over after /shipcreates the PR. Use when: \"merge\", \"land\", \"deploy\", \"merge and verify\",\"land it\", \"ship it to production\". (gstack)",
      "input": null,
      "name": "land-and-deploy"
    },
    {
      "description": "Read-only queue dashboard for workspace-aware ship. Shows which VERSION slotsare currently claimed by open PRs, which sibling Conductor workspaces haveWIP work likely to ship soon, and what slot /ship would pick next. Nomutations — just a snapshot. Use when asked to \"landing report\", \"what's inthe queue\", \"show me open PRs\", or \"which version do I claim next\". (gstack)",
      "input": null,
      "name": "landing-report"
    },
    {
      "description": "Manage project learnings. Review, search, prune, and export what gstackhas learned across sessions. Use when asked to \"what have we learned\",\"show learnings\", \"prune stale learnings\", or \"export learnings\".Proactively suggest when the user asks about past patterns or wonders\"didn't we fix this before?\"",
      "input": null,
      "name": "learn"
    },
    {
      "description": "Turn any markdown file into a publication-quality PDF. Proper 1in margins,intelligent page breaks, page numbers, cover pages, running headers, curlyquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draftartifact — a finished artifact. Use when asked to \"make a PDF\", \"export toPDF\", \"turn this markdown into a PDF\", or \"generate a document\". (gstack)Voice triggers (speech-to-text aliases): \"make this a pdf\", \"make it a pdf\", \"export to pdf\", \"turn this into a pdf\", \"turn this markdown into a pdf\", \"generate a pdf\", \"make a pdf from\", \"pdf this markdown\".",
      "input": null,
      "name": "make-pdf"
    },
    {
      "description": "YC Office Hours — two modes. Startup mode: six forcing questions that exposedemand reality, status quo, desperate specificity, narrowest wedge, observation,and future-fit. Builder mode: design thinking brainstorming for side projects,hackathons, learning, and open source. Saves a design doc.Use when asked to \"brainstorm this\", \"I have an idea\", \"help me think throughthis\", \"office hours\", or \"is this worth building\".Proactively invoke this skill (do NOT answer directly) when the user describesa new product idea, asks whether something is worth building, wants to thinkthrough design decisions for something that doesn't exist yet, or is exploringa concept before any code is written.Use before /plan-ceo-review or /plan-eng-review. (gstack)",
      "input": null,
      "name": "office-hours"
    },
    {
      "description": "Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in.Opens a visible browser window where you can watch every action in real time.The sidebar shows a live activity feed and chat. Anti-bot stealth built in.Use when asked to \"open gstack browser\", \"launch browser\", \"connect chrome\",\"open chrome\", \"real browser\", \"launch chrome\", \"side panel\", or \"control my browser\".Voice triggers (speech-to-text aliases): \"show me the browser\".",
      "input": null,
      "name": "open-gstack-browser"
    },
    {
      "description": "Pair a remote AI agent with your browser. One command generates a setup key andprints instructions the other agent can follow to connect. Works with OpenClaw,Hermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agentgets its own tab with scoped access (read+write by default, admin on request).Use when asked to \"pair agent\", \"connect agent\", \"share browser\", \"remote browser\",\"let another agent use my browser\", or \"give browser access\". (gstack)Voice triggers (speech-to-text aliases): \"pair agent\", \"connect agent\", \"share my browser\", \"remote browser access\".",
      "input": null,
      "name": "pair-agent"
    },
    {
      "description": "Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): \"make a PDF\", \"generate a report\", \"write a proposal\", \"create a resume\", \"beautiful PDF\", \"professional document\", \"cover page\", \"polished PDF\", \"client-ready document\". FILL (complete form fields): \"fill in the form\", \"fill out this PDF\", \"complete the form fields\", \"write values into PDF\", \"what fields does this PDF have\". REFORMAT (apply design to an existing doc): \"reformat this document\", \"apply our style\", \"convert this Markdown/text to PDF\", \"make this doc look good\", \"re-style this PDF\". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.",
      "input": null,
      "name": "pdf"
    },
    {
      "description": "CEO/founder-mode plan review. Rethink the problem, find the 10-star product,challenge premises, expand scope when it creates a better product. Four modes:SCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pickexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).Use when asked to \"think bigger\", \"expand scope\", \"strategy review\", \"rethink this\",or \"is this ambitious enough\".Proactively suggest when the user is questioning scope or ambition of a plan,or when the plan feels like it could be thinking bigger. (gstack)",
      "input": null,
      "name": "plan-ceo-review"
    },
    {
      "description": "Designer's eye plan review — interactive, like CEO and Eng review.Rates each design dimension 0-10, explains what would make it a 10,then fixes the plan to get there. Works in plan mode. For live sitevisual audits, use /design-review. Use when asked to \"review the design plan\"or \"design critique\".Proactively suggest when the user has a plan with UI/UX components thatshould be reviewed before implementation. (gstack)",
      "input": null,
      "name": "plan-design-review"
    },
    {
      "description": "Interactive developer experience plan review. Explores developer personas,benchmarks against competitors, designs magical moments, and traces frictionpoints before scoring. Three modes: DX EXPANSION (competitive advantage),DX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).Use when asked to \"DX review\", \"developer experience audit\", \"devex review\",or \"API design review\".Proactively suggest when the user has a plan for developer-facing products(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)Voice triggers (speech-to-text aliases): \"dx review\", \"developer experience review\", \"devex review\", \"devex audit\", \"API design review\", \"onboarding review\".",
      "input": null,
      "name": "plan-devex-review"
    },
    {
      "description": "Eng manager-mode plan review. Lock in the execution plan — architecture,data flow, diagrams, edge cases, test coverage, performance. Walks throughissues interactively with opinionated recommendations. Use when asked to\"review the architecture\", \"engineering review\", or \"lock in the plan\".Proactively suggest when the user has a plan or design doc and is about tostart coding — to catch architecture issues before implementation. (gstack)Voice triggers (speech-to-text aliases): \"tech review\", \"technical review\", \"plan engineering review\".",
      "input": null,
      "name": "plan-eng-review"
    },
    {
      "description": "Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).Review which AskUserQuestion prompts fire across gstack skills, set per-question preferences(never-ask / always-ask / ask-only-for-one-way), inspect the dual-trackprofile (what you declared vs what your behavior suggests), and enable/disablequestion tuning. Conversational interface — no CLI syntax required.Use when asked to \"tune questions\", \"stop asking me that\", \"too many questions\",\"show my profile\", \"what questions have I been asked\", \"show my vibe\",\"developer profile\", or \"turn off question tuning\". (gstack)Proactively suggest when the user says the same gstack question has come up before,or when they explicitly override a recommendation for the Nth time.",
      "input": null,
      "name": "plan-tune"
    },
    {
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "input": null,
      "name": "pptx-generator"
    },
    {
      "description": "Systematically QA test a web application and fix bugs found. Runs QA testing,then iteratively fixes bugs in source code, committing each fix atomically andre-verifying. Use when asked to \"qa\", \"QA\", \"test this site\", \"find bugs\",\"test and fix\", or \"fix what's broken\".Proactively suggest when the user says a feature is ready for testingor asks \"does this work?\". Three tiers: Quick (critical/high only),Standard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,fix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)Voice triggers (speech-to-text aliases): \"quality check\", \"test the app\", \"run QA\".",
      "input": null,
      "name": "qa"
    },
    {
      "description": "Report-only QA testing. Systematically tests a web application and produces astructured report with health score, screenshots, and repro steps — but neverfixes anything. Use when asked to \"just report bugs\", \"qa report only\", or\"test but don't fix\". For the full test-fix-verify loop, use /qa instead.Proactively suggest when the user wants a bug report without any code changes. (gstack)Voice triggers (speech-to-text aliases): \"bug report\", \"just check for bugs\".",
      "input": null,
      "name": "qa-only"
    },
    {
      "description": "Weekly engineering retrospective. Analyzes commit history, work patterns,and code quality metrics with persistent history and trend tracking.Team-aware: breaks down per-person contributions with praise and growth areas.Use when asked to \"weekly retro\", \"what did we ship\", or \"engineering retrospective\".Proactively suggest at the end of a work week or sprint. (gstack)",
      "input": null,
      "name": "retro"
    },
    {
      "description": "Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trustboundary violations, conditional side effects, and other structural issues. Use whenasked to \"review this PR\", \"code review\", \"pre-landing review\", or \"check my diff\".Proactively suggest when the user is about to merge or land code changes. (gstack)",
      "input": null,
      "name": "review"
    },
    {
      "description": "Pull data from a web page. First call on a new intent prototypes the flowvia $B primitives and returns JSON. Subsequent calls on a matching intentroute to a codified browser-skill and return in ~200ms. Read-only — formutating flows (form fills, clicks, submissions), use /automate.Use when asked to \"scrape\", \"get data from\", \"pull\", \"extract from\", or\"what's on\" a page. (gstack)",
      "input": null,
      "name": "scrape"
    },
    {
      "description": "Import cookies from your real Chromium browser into the headless browse session.Opens an interactive picker UI where you select which cookie domains to import.Use before QA testing authenticated pages. Use when asked to \"import cookies\",\"login to the site\", or \"authenticate the browser\". (gstack)",
      "input": null,
      "name": "setup-browser-cookies"
    },
    {
      "description": "Configure deployment settings for /land-and-deploy. Detects your deployplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),production URL, health check endpoints, and deploy status commands. Writesthe configuration to CLAUDE.md so all future deploys are automatic.Use when: \"setup deploy\", \"configure deployment\", \"set up land-and-deploy\",\"how do I deploy with gstack\", \"add deploy config\".",
      "input": null,
      "name": "setup-deploy"
    },
    {
      "description": "Set up gbrain for this coding agent: install the CLI, initialize alocal PGLite or Supabase brain, register MCP, capture per-remote trustpolicy. One command from zero to \"gbrain is running, and this agentcan call it.\" Use when: \"setup gbrain\", \"connect gbrain\", \"startgbrain\", \"install gbrain\", \"configure gbrain for this machine\". (gstack)",
      "input": null,
      "name": "setup-gbrain"
    },
    {
      "description": "Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,update CHANGELOG, commit, push, create PR. Use when asked to \"ship\", \"deploy\",\"push to main\", \"create a PR\", \"merge and push\", or \"get it deployed\".Proactively invoke this skill (do NOT push/PR directly) when the user says codeis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)",
      "input": null,
      "name": "ship"
    },
    {
      "description": "Create, write, or improve a skill for corust-agent. Use this skill whenever the user wants to make a new skill, edit an existing skill's SKILL.md, improve a skill's description, add bundled scripts or references to a skill, figure out where to install a skill, or understand how skills work in corust. Also trigger when the user asks \"how do I add a skill\", \"can you turn this workflow into a skill\", \"what should go in SKILL.md\", or \"my skill isn't triggering correctly\".",
      "input": null,
      "name": "skill-creator"
    },
    {
      "description": "Install Agents skills into $AGENTS_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos).",
      "input": null,
      "name": "skill-installer"
    },
    {
      "description": "Codify the most recent successful /scrape flow into a permanentbrowser-skill on disk. Future /scrape calls with the same intent runthe codified script in ~200ms instead of re-driving the page. Walksback through the conversation, synthesizes script.ts + script.test.ts+ fixture, runs the test in a temp dir, and asks before committing.Use when asked to \"skillify\", \"codify\", \"save this scrape\", or\"make this permanent\". (gstack)",
      "input": null,
      "name": "skillify"
    },
    {
      "description": "Clear the freeze boundary set by /freeze, allowing edits to all directoriesagain. Use when you want to widen edit scope without ending the session.Use when asked to \"unfreeze\", \"unlock edits\", \"remove freeze\", or\"allow all edits\". (gstack)",
      "input": null,
      "name": "unfreeze"
    },
    {
      "description": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format.",
      "input": null,
      "name": "xlsx"
    }
  ],
  "configOptions": [],
  "currentModeId": "default",
  "id": "corust-agent",
  "modes": [
    {
      "description": "Current behavior: follow permission prompts and workspace rules.",
      "id": "default",
      "name": "Default"
    },
    {
      "description": "Auto-reject every action that requires permission.",
      "id": "readonly",
      "name": "Readonly"
    },
    {
      "description": "Auto-allow every action that requires permission.",
      "id": "yolo",
      "name": "Yolo"
    }
  ],
  "name": "Corust Agent",
  "protocolVersion": 1,
  "version": "0.6.0"
};
