import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": true
    },
    "promptCapabilities": {
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "close": {},
      "fork": {},
      "list": {},
      "resume": {}
    }
  },
  "agentInfo": {
    "name": "Kilo",
    "version": "7.3.54"
  },
  "authMethods": [
    {
      "description": "Run `kilo auth login` in the terminal",
      "id": "kilo-login",
      "name": "Login with Kilo"
    }
  ],
  "commands": [
    {
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "name": "artifact-static-site"
    },
    {
      "description": "Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to \"auto review\", \"autoplan\", \"run all reviews\", \"review this plan\nautomatically\", or \"make the decisions for me\".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): \"auto plan\", \"automatic review\".\n",
      "name": "autoplan"
    },
    {
      "description": "Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: \"performance\", \"benchmark\", \"page speed\", \"lighthouse\", \"web vitals\",\n\"bundle size\", \"load time\". (gstack)\nVoice triggers (speech-to-text aliases): \"speed test\", \"check performance\".\n",
      "name": "benchmark"
    },
    {
      "description": "Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side — compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers \"which model is actually best\nfor this skill?\" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: \"benchmark models\", \"compare models\",\n\"which model is best for X\", \"cross-model comparison\", \"model shootout\". (gstack)\nVoice triggers (speech-to-text aliases): \"compare models\", \"model shootout\", \"which model is best\".\n",
      "name": "benchmark-models"
    },
    {
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to \"open in browser\", \"test the\nsite\", \"take a screenshot\", or \"dogfood this\". (gstack)\n",
      "name": "browse"
    },
    {
      "description": "Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: \"monitor deploy\", \"canary\", \"post-deploy check\",\n\"watch production\", \"verify deploy\". (gstack)\n",
      "name": "canary"
    },
    {
      "description": "Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to \"be careful\", \"safety mode\",\n\"prod mode\", or \"careful mode\". (gstack)\n",
      "name": "careful"
    },
    {
      "description": "Claude Code CLI wrapper for non-Claude hosts - three modes. Review: independent\ndiff review via claude -p. Challenge: adversarial failure-mode review. Consult:\nask Claude about the repo with read-only file tools. Use when asked for \"claude\nreview\", \"claude challenge\", \"ask claude\", \"second opinion from claude\", or\n\"outside voice\". (gstack)\n",
      "name": "claude"
    },
    {
      "description": "OpenAI Codex CLI wrapper — three modes. Code review: independent diff review via\ncodex review with pass/fail gate. Challenge: adversarial mode that tries to break\nyour code. Consult: ask codex anything with session continuity for follow-ups.\nThe \"200 IQ autistic developer\" second opinion. Use when asked to \"codex review\",\n\"codex challenge\", \"ask codex\", \"second opinion\", or \"consult codex\". (gstack)\nVoice triggers (speech-to-text aliases): \"code x\", \"code ex\", \"get another opinion\".\n",
      "name": "codex"
    },
    {
      "description": "Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off — even across Conductor workspace handoffs.\nUse when asked to \"resume\", \"restore context\", \"where was I\", or\n\"pick up where I left off\". Pair with /context-save.\nFormerly /checkpoint resume — renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack)\n",
      "name": "context-restore"
    },
    {
      "description": "Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to \"save progress\", \"save state\", \"context save\", or\n\"save my work\". Pair with /context-restore to resume later.\nFormerly /checkpoint — renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack)\n",
      "name": "context-save"
    },
    {
      "description": "Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: \"security audit\", \"threat model\", \"pentest review\", \"OWASP\", \"CSO review\". (gstack)\nVoice triggers (speech-to-text aliases): \"see-so\", \"see so\", \"security review\", \"security check\", \"vulnerability scan\", \"run security\".\n",
      "name": "cso"
    },
    {
      "description": "Multi Agents Looping — a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "name": "deep-investigate"
    },
    {
      "description": "Design consultation: understands your product, researches the landscape, proposes a\ncomplete design system (aesthetic, typography, color, layout, spacing, motion), and\ngenerates font+color preview pages. Creates DESIGN.md as your project's design source\nof truth. For existing sites, use /plan-design-review to infer the system instead.\nUse when asked to \"design system\", \"brand guidelines\", or \"create DESIGN.md\".\nProactively suggest when starting a new project's UI with no existing\ndesign system or DESIGN.md. (gstack)\n",
      "name": "design-consultation"
    },
    {
      "description": "Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: \"finalize this design\", \"turn this into HTML\",\n\"build me a page\", \"implement this design\", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): \"build the design\", \"code the mockup\", \"make it real\".\n",
      "name": "design-html"
    },
    {
      "description": "Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,\nAI slop patterns, and slow interactions — then fixes them. Iteratively fixes issues\nin source code, committing each fix atomically and re-verifying with before/after\nscreenshots. For plan-mode design review (before implementation), use /plan-design-review.\nUse when asked to \"audit the design\", \"visual QA\", \"check if it looks good\", or \"design polish\".\nProactively suggest when the user mentions visual inconsistencies or\nwants to polish the look of a live site. (gstack)\n",
      "name": "design-review"
    },
    {
      "description": "Design shotgun: generate multiple AI design variants, open a comparison board,\ncollect structured feedback, and iterate. Standalone design exploration you can\nrun anytime. Use when: \"explore designs\", \"show me options\", \"design variants\",\n\"visual brainstorm\", or \"I don't like how this looks\".\nProactively suggest when the user describes a UI feature but hasn't seen\nwhat it could look like. (gstack)\n",
      "name": "design-shotgun"
    },
    {
      "description": "Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n\"test the DX\", \"DX audit\", \"developer experience test\", or \"try the\nonboarding\". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): \"dx audit\", \"test the developer experience\", \"try the onboarding\", \"developer experience test\".\n",
      "name": "devex-review"
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
      "description": "Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to \"update the docs\", \"sync documentation\", or \"post-ship docs\".\nProactively suggest after a PR is merged or code is shipped. (gstack)\n",
      "name": "document-release"
    },
    {
      "description": "Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document — including when they say \"write a report\", \"draft a proposal\", \"make a contract\", \"fill in this form\", \"reformat to match this template\", or any task whose final output is a .docx file. Even if the user doesn't mention \"docx\" explicitly, if the task implies a printable/formal document, use this skill.\n",
      "name": "docx"
    },
    {
      "description": "Helps users discover and install agent skills when they ask questions like \"how do I do X\", \"find a skill for X\", \"is there a skill that can...\", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.",
      "name": "find-skills"
    },
    {
      "description": "Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n\"fixing\" unrelated code, or when you want to scope changes to one module.\nUse when asked to \"freeze\", \"restrict edits\", \"only edit this folder\",\nor \"lock down edits\". (gstack)\n",
      "name": "freeze"
    },
    {
      "description": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing.",
      "name": "gpt-taste"
    },
    {
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate pages, interact with\nelements, verify state, diff before/after, take annotated screenshots, test responsive\nlayouts, forms, uploads, dialogs, and capture bug evidence. Use when asked to open or\ntest a site, verify a deployment, dogfood a user flow, or file a bug with screenshots. (gstack)\n",
      "name": "gstack"
    },
    {
      "description": "Use when asked to review a plan, challenge a proposal, run a CEO review, poke holes in an approach, think bigger about scope, or decide whether to expand or reduce the plan.",
      "name": "gstack-openclaw-ceo-review"
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
      "description": "Weekly engineering retrospective. Analyzes commit history, work patterns, and code quality metrics with persistent history and trend tracking. Team-aware with per-person contributions, praise, and growth areas. Use when asked for weekly retro, what shipped this week, or engineering retrospective.",
      "name": "gstack-openclaw-retro"
    },
    {
      "description": "Upgrade gstack to the latest version. Detects global vs vendored install,\nruns the upgrade, and shows what's new. Use when asked to \"upgrade gstack\",\n\"update gstack\", or \"get latest version\".\nVoice triggers (speech-to-text aliases): \"upgrade the tools\", \"update the tools\", \"gee stack upgrade\", \"g stack upgrade\".\n",
      "name": "gstack-upgrade"
    },
    {
      "description": "Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to \"guard mode\",\n\"full safety\", \"lock it down\", or \"maximum safety\". (gstack)\n",
      "name": "guard"
    },
    {
      "description": "Scrape the Hacker News front page (titles, points, comment counts).",
      "name": "hackernews-frontpage"
    },
    {
      "description": "Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: \"health check\",\n\"code quality\", \"how healthy is the codebase\", \"run all checks\",\n\"quality score\". (gstack)\n",
      "name": "health"
    },
    {
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "name": "high-end-visual-design"
    },
    {
      "description": "guided AGENTS.md setup",
      "name": "init"
    },
    {
      "description": "Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to \"debug this\", \"fix this bug\", \"why is this broken\",\n\"investigate this error\", or \"root cause analysis\".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, \"it was working\nyesterday\", or is troubleshooting why something stopped working. (gstack)\n",
      "name": "investigate"
    },
    {
      "description": "Guide for Kilo configuration: config paths, kilo.json fields, commands, agents, skills, permissions, MCPs, providers, TUI settings, plus Agent Manager worktree setup/run scripts, workflows, and state. Use for Kilo config questions, locating loaded config, changing settings, or Agent Manager questions about run/setup scripts, worktree setup/workflows, apply/merge/PR/conflicts, missing sessions/worktrees, and agent-manager.json recovery.",
      "name": "kilo-config"
    },
    {
      "description": "Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: \"merge\", \"land\", \"deploy\", \"merge and verify\",\n\"land it\", \"ship it to production\". (gstack)\n",
      "name": "land-and-deploy"
    },
    {
      "description": "Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots\nare currently claimed by open PRs, which sibling Conductor workspaces have\nWIP work likely to ship soon, and what slot /ship would pick next. No\nmutations — just a snapshot. Use when asked to \"landing report\", \"what's in\nthe queue\", \"show me open PRs\", or \"which version do I claim next\". (gstack)\n",
      "name": "landing-report"
    },
    {
      "description": "Manage project learnings. Review, search, prune, and export what gstack\nhas learned across sessions. Use when asked to \"what have we learned\",\n\"show learnings\", \"prune stale learnings\", or \"export learnings\".\nProactively suggest when the user asks about past patterns or wonders\n\"didn't we fix this before?\"\n",
      "name": "learn"
    },
    {
      "description": "local review (current branch, optional base or instructions)",
      "name": "local-review"
    },
    {
      "description": "local review (uncommitted changes)",
      "name": "local-review-uncommitted"
    },
    {
      "description": "Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact — a finished artifact. Use when asked to \"make a PDF\", \"export to\nPDF\", \"turn this markdown into a PDF\", or \"generate a document\". (gstack)\nVoice triggers (speech-to-text aliases): \"make this a pdf\", \"make it a pdf\", \"export to pdf\", \"turn this into a pdf\", \"turn this markdown into a pdf\", \"generate a pdf\", \"make a pdf from\", \"pdf this markdown\".\n",
      "name": "make-pdf"
    },
    {
      "description": "YC Office Hours — two modes. Startup mode: six forcing questions that expose\ndemand reality, status quo, desperate specificity, narrowest wedge, observation,\nand future-fit. Builder mode: design thinking brainstorming for side projects,\nhackathons, learning, and open source. Saves a design doc.\nUse when asked to \"brainstorm this\", \"I have an idea\", \"help me think through\nthis\", \"office hours\", or \"is this worth building\".\nProactively invoke this skill (do NOT answer directly) when the user describes\na new product idea, asks whether something is worth building, wants to think\nthrough design decisions for something that doesn't exist yet, or is exploring\na concept before any code is written.\nUse before /plan-ceo-review or /plan-eng-review. (gstack)\n",
      "name": "office-hours"
    },
    {
      "description": "Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to \"open gstack browser\", \"launch browser\", \"connect chrome\",\n\"open chrome\", \"real browser\", \"launch chrome\", \"side panel\", or \"control my browser\".\nVoice triggers (speech-to-text aliases): \"show me the browser\".\n",
      "name": "open-gstack-browser"
    },
    {
      "description": "Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to \"pair agent\", \"connect agent\", \"share browser\", \"remote browser\",\n\"let another agent use my browser\", or \"give browser access\". (gstack)\nVoice triggers (speech-to-text aliases): \"pair agent\", \"connect agent\", \"share my browser\", \"remote browser access\".\n",
      "name": "pair-agent"
    },
    {
      "description": "Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): \"make a PDF\", \"generate a report\", \"write a proposal\", \"create a resume\", \"beautiful PDF\", \"professional document\", \"cover page\", \"polished PDF\", \"client-ready document\". FILL (complete form fields): \"fill in the form\", \"fill out this PDF\", \"complete the form fields\", \"write values into PDF\", \"what fields does this PDF have\". REFORMAT (apply design to an existing doc): \"reformat this document\", \"apply our style\", \"convert this Markdown/text to PDF\", \"make this doc look good\", \"re-style this PDF\". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n",
      "name": "pdf"
    },
    {
      "description": "CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to \"think bigger\", \"expand scope\", \"strategy review\", \"rethink this\",\nor \"is this ambitious enough\".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack)\n",
      "name": "plan-ceo-review"
    },
    {
      "description": "Designer's eye plan review — interactive, like CEO and Eng review.\nRates each design dimension 0-10, explains what would make it a 10,\nthen fixes the plan to get there. Works in plan mode. For live site\nvisual audits, use /design-review. Use when asked to \"review the design plan\"\nor \"design critique\".\nProactively suggest when the user has a plan with UI/UX components that\nshould be reviewed before implementation. (gstack)\n",
      "name": "plan-design-review"
    },
    {
      "description": "Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to \"DX review\", \"developer experience audit\", \"devex review\",\nor \"API design review\".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): \"dx review\", \"developer experience review\", \"devex review\", \"devex audit\", \"API design review\", \"onboarding review\".\n",
      "name": "plan-devex-review"
    },
    {
      "description": "Eng manager-mode plan review. Lock in the execution plan — architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n\"review the architecture\", \"engineering review\", or \"lock in the plan\".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding — to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): \"tech review\", \"technical review\", \"plan engineering review\".\n",
      "name": "plan-eng-review"
    },
    {
      "description": "Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface — no CLI syntax required.\n\nUse when asked to \"tune questions\", \"stop asking me that\", \"too many questions\",\n\"show my profile\", \"what questions have I been asked\", \"show my vibe\",\n\"developer profile\", or \"turn off question tuning\". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time.\n",
      "name": "plan-tune"
    },
    {
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "name": "pptx-generator"
    },
    {
      "description": "Systematically QA test a web application and fix bugs found. Runs QA testing,\nthen iteratively fixes bugs in source code, committing each fix atomically and\nre-verifying. Use when asked to \"qa\", \"QA\", \"test this site\", \"find bugs\",\n\"test and fix\", or \"fix what's broken\".\nProactively suggest when the user says a feature is ready for testing\nor asks \"does this work?\". Three tiers: Quick (critical/high only),\nStandard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,\nfix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)\nVoice triggers (speech-to-text aliases): \"quality check\", \"test the app\", \"run QA\".\n",
      "name": "qa"
    },
    {
      "description": "Report-only QA testing. Systematically tests a web application and produces a\nstructured report with health score, screenshots, and repro steps — but never\nfixes anything. Use when asked to \"just report bugs\", \"qa report only\", or\n\"test but don't fix\". For the full test-fix-verify loop, use /qa instead.\nProactively suggest when the user wants a bug report without any code changes. (gstack)\nVoice triggers (speech-to-text aliases): \"bug report\", \"just check for bugs\".\n",
      "name": "qa-only"
    },
    {
      "description": "Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to \"weekly retro\", \"what did we ship\", or \"engineering retrospective\".\nProactively suggest at the end of a work week or sprint. (gstack)\n",
      "name": "retro"
    },
    {
      "description": "review changes [commit|branch|pr], defaults to uncommitted",
      "name": "review"
    },
    {
      "description": "Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust\nboundary violations, conditional side effects, and other structural issues. Use when\nasked to \"review this PR\", \"code review\", \"pre-landing review\", or \"check my diff\".\nProactively suggest when the user is about to merge or land code changes. (gstack)\n",
      "name": "review"
    },
    {
      "description": "Pull data from a web page. First call on a new intent prototypes the flow\nvia $B primitives and returns JSON. Subsequent calls on a matching intent\nroute to a codified browser-skill and return in ~200ms. Read-only — for\nmutating flows (form fills, clicks, submissions), use /automate.\nUse when asked to \"scrape\", \"get data from\", \"pull\", \"extract from\", or\n\"what's on\" a page. (gstack)\n",
      "name": "scrape"
    },
    {
      "description": "Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to \"import cookies\",\n\"login to the site\", or \"authenticate the browser\". (gstack)\n",
      "name": "setup-browser-cookies"
    },
    {
      "description": "Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: \"setup deploy\", \"configure deployment\", \"set up land-and-deploy\",\n\"how do I deploy with gstack\", \"add deploy config\".\n",
      "name": "setup-deploy"
    },
    {
      "description": "Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to \"gbrain is running, and this agent\ncan call it.\" Use when: \"setup gbrain\", \"connect gbrain\", \"start\ngbrain\", \"install gbrain\", \"configure gbrain for this machine\". (gstack)\n",
      "name": "setup-gbrain"
    },
    {
      "description": "Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to \"ship\", \"deploy\",\n\"push to main\", \"create a PR\", \"merge and push\", or \"get it deployed\".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)\n",
      "name": "ship"
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
      "description": "Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to \"skillify\", \"codify\", \"save this scrape\", or\n\"make this permanent\". (gstack)\n",
      "name": "skillify"
    },
    {
      "description": "Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to \"unfreeze\", \"unlock edits\", \"remove freeze\", or\n\"allow all edits\". (gstack)\n",
      "name": "unfreeze"
    },
    {
      "description": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format.",
      "name": "xlsx"
    }
  ],
  "configOptions": [
    {
      "category": "model",
      "currentValue": "kilo/stealth/claude-sonnet-4.6",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "name": "xAI/Grok 4.20 (Non-Reasoning)",
          "value": "xai/grok-4.20-0309-non-reasoning"
        },
        {
          "name": "xAI/Grok 4.20 (Reasoning)",
          "value": "xai/grok-4.20-0309-reasoning"
        },
        {
          "name": "xAI/Grok 4.20 Multi-Agent",
          "value": "xai/grok-4.20-multi-agent-0309"
        },
        {
          "name": "xAI/Grok 4.3",
          "value": "xai/grok-4.3"
        },
        {
          "name": "xAI/Grok Build 0.1",
          "value": "xai/grok-build-0.1"
        },
        {
          "name": "xAI/Grok Imagine Image",
          "value": "xai/grok-imagine-image"
        },
        {
          "name": "xAI/Grok Imagine Image Quality",
          "value": "xai/grok-imagine-image-quality"
        },
        {
          "name": "xAI/Grok Imagine Video",
          "value": "xai/grok-imagine-video"
        },
        {
          "name": "Moonshot AI/Kimi K2 0711",
          "value": "moonshotai/kimi-k2-0711-preview"
        },
        {
          "name": "Moonshot AI/Kimi K2 0905",
          "value": "moonshotai/kimi-k2-0905-preview"
        },
        {
          "name": "Moonshot AI/Kimi K2 Thinking",
          "value": "moonshotai/kimi-k2-thinking"
        },
        {
          "name": "Moonshot AI/Kimi K2 Thinking Turbo",
          "value": "moonshotai/kimi-k2-thinking-turbo"
        },
        {
          "name": "Moonshot AI/Kimi K2 Turbo",
          "value": "moonshotai/kimi-k2-turbo-preview"
        },
        {
          "name": "Moonshot AI/Kimi K2.5",
          "value": "moonshotai/kimi-k2.5"
        },
        {
          "name": "Moonshot AI/Kimi K2.6",
          "value": "moonshotai/kimi-k2.6"
        },
        {
          "name": "Moonshot AI/Kimi K2.7 Code",
          "value": "moonshotai/kimi-k2.7-code"
        },
        {
          "name": "Moonshot AI/Kimi K2.7 Code HighSpeed",
          "value": "moonshotai/kimi-k2.7-code-highspeed"
        },
        {
          "name": "Mistral/Codestral (latest)",
          "value": "mistral/codestral-latest"
        },
        {
          "name": "Mistral/Magistral Medium (latest)",
          "value": "mistral/magistral-medium-latest"
        },
        {
          "name": "Mistral/Magistral Small",
          "value": "mistral/magistral-small"
        },
        {
          "name": "Mistral/Ministral 3B (latest)",
          "value": "mistral/ministral-3b-latest"
        },
        {
          "name": "Mistral/Ministral 8B (latest)",
          "value": "mistral/ministral-8b-latest"
        },
        {
          "name": "Mistral/Mistral 7B",
          "value": "mistral/open-mistral-7b"
        },
        {
          "name": "Mistral/Mistral Embed",
          "value": "mistral/mistral-embed"
        },
        {
          "name": "Mistral/Mistral Large (latest)",
          "value": "mistral/mistral-large-latest"
        },
        {
          "name": "Mistral/Mistral Large 2.1",
          "value": "mistral/mistral-large-2411"
        },
        {
          "name": "Mistral/Mistral Large 3",
          "value": "mistral/mistral-large-2512"
        },
        {
          "name": "Mistral/Mistral Medium (latest)",
          "value": "mistral/mistral-medium-latest"
        },
        {
          "name": "Mistral/Mistral Medium 3",
          "value": "mistral/mistral-medium-2505"
        },
        {
          "name": "Mistral/Mistral Medium 3.1",
          "value": "mistral/mistral-medium-2508"
        },
        {
          "name": "Mistral/Mistral Medium 3.5",
          "value": "mistral/mistral-medium-2604"
        },
        {
          "name": "Mistral/Mistral Nemo",
          "value": "mistral/mistral-nemo"
        },
        {
          "name": "Mistral/Mistral Small (latest)",
          "value": "mistral/mistral-small-latest"
        },
        {
          "name": "Mistral/Mistral Small 3.2",
          "value": "mistral/mistral-small-2506"
        },
        {
          "name": "Mistral/Mistral Small 4",
          "value": "mistral/mistral-small-2603"
        },
        {
          "name": "Mistral/Mixtral 8x22B",
          "value": "mistral/open-mixtral-8x22b"
        },
        {
          "name": "Mistral/Mixtral 8x7B",
          "value": "mistral/open-mixtral-8x7b"
        },
        {
          "name": "Mistral/Pixtral 12B",
          "value": "mistral/pixtral-12b"
        },
        {
          "name": "Mistral/Pixtral Large (latest)",
          "value": "mistral/pixtral-large-latest"
        },
        {
          "name": "Google/Gemini 2.5 Flash",
          "value": "google/gemini-2.5-flash"
        },
        {
          "name": "Google/Gemini 2.5 Flash Preview TTS",
          "value": "google/gemini-2.5-flash-preview-tts"
        },
        {
          "name": "Google/Gemini 2.5 Flash-Lite",
          "value": "google/gemini-2.5-flash-lite"
        },
        {
          "name": "Google/Gemini 2.5 Pro",
          "value": "google/gemini-2.5-pro"
        },
        {
          "name": "Google/Gemini 2.5 Pro Preview TTS",
          "value": "google/gemini-2.5-pro-preview-tts"
        },
        {
          "name": "Google/Gemini 3 Flash Preview",
          "value": "google/gemini-3-flash-preview"
        },
        {
          "name": "Google/Gemini 3.1 Flash Lite",
          "value": "google/gemini-3.1-flash-lite"
        },
        {
          "name": "Google/Gemini 3.1 Pro Preview",
          "value": "google/gemini-3.1-pro-preview"
        },
        {
          "name": "Google/Gemini 3.1 Pro Preview Custom Tools",
          "value": "google/gemini-3.1-pro-preview-customtools"
        },
        {
          "name": "Google/Gemini 3.5 Flash",
          "value": "google/gemini-3.5-flash"
        },
        {
          "name": "Google/Gemini Embedding 001",
          "value": "google/gemini-embedding-001"
        },
        {
          "name": "Google/Gemini Flash Latest",
          "value": "google/gemini-flash-latest"
        },
        {
          "name": "Google/Gemini Flash-Lite Latest",
          "value": "google/gemini-flash-lite-latest"
        },
        {
          "name": "Google/Gemma 4 26B A4B IT",
          "value": "google/gemma-4-26b-a4b-it"
        },
        {
          "name": "Google/Gemma 4 31B IT",
          "value": "google/gemma-4-31b-it"
        },
        {
          "name": "Google/Nano Banana",
          "value": "google/gemini-2.5-flash-image"
        },
        {
          "name": "Google/Nano Banana 2",
          "value": "google/gemini-3.1-flash-image-preview"
        },
        {
          "name": "Google/Nano Banana Pro",
          "value": "google/gemini-3-pro-image-preview"
        },
        {
          "name": "OpenAI/chatgpt-image-latest",
          "value": "openai/chatgpt-image-latest"
        },
        {
          "name": "OpenAI/GPT-3.5-turbo",
          "value": "openai/gpt-3.5-turbo"
        },
        {
          "name": "OpenAI/GPT-4",
          "value": "openai/gpt-4"
        },
        {
          "name": "OpenAI/GPT-4 Turbo",
          "value": "openai/gpt-4-turbo"
        },
        {
          "name": "OpenAI/GPT-4.1",
          "value": "openai/gpt-4.1"
        },
        {
          "name": "OpenAI/GPT-4.1 mini",
          "value": "openai/gpt-4.1-mini"
        },
        {
          "name": "OpenAI/GPT-4.1 nano",
          "value": "openai/gpt-4.1-nano"
        },
        {
          "name": "OpenAI/GPT-4o",
          "value": "openai/gpt-4o"
        },
        {
          "name": "OpenAI/GPT-4o (2024-05-13)",
          "value": "openai/gpt-4o-2024-05-13"
        },
        {
          "name": "OpenAI/GPT-4o (2024-08-06)",
          "value": "openai/gpt-4o-2024-08-06"
        },
        {
          "name": "OpenAI/GPT-4o (2024-11-20)",
          "value": "openai/gpt-4o-2024-11-20"
        },
        {
          "name": "OpenAI/GPT-4o mini",
          "value": "openai/gpt-4o-mini"
        },
        {
          "name": "OpenAI/GPT-5",
          "value": "openai/gpt-5"
        },
        {
          "name": "OpenAI/GPT-5 Mini",
          "value": "openai/gpt-5-mini"
        },
        {
          "name": "OpenAI/GPT-5 Nano",
          "value": "openai/gpt-5-nano"
        },
        {
          "name": "OpenAI/GPT-5 Pro",
          "value": "openai/gpt-5-pro"
        },
        {
          "name": "OpenAI/GPT-5-Codex",
          "value": "openai/gpt-5-codex"
        },
        {
          "name": "OpenAI/GPT-5.1",
          "value": "openai/gpt-5.1"
        },
        {
          "name": "OpenAI/GPT-5.1 Chat",
          "value": "openai/gpt-5.1-chat-latest"
        },
        {
          "name": "OpenAI/GPT-5.1 Codex",
          "value": "openai/gpt-5.1-codex"
        },
        {
          "name": "OpenAI/GPT-5.1 Codex Max",
          "value": "openai/gpt-5.1-codex-max"
        },
        {
          "name": "OpenAI/GPT-5.1 Codex mini",
          "value": "openai/gpt-5.1-codex-mini"
        },
        {
          "name": "OpenAI/GPT-5.2",
          "value": "openai/gpt-5.2"
        },
        {
          "name": "OpenAI/GPT-5.2 Chat",
          "value": "openai/gpt-5.2-chat-latest"
        },
        {
          "name": "OpenAI/GPT-5.2 Codex",
          "value": "openai/gpt-5.2-codex"
        },
        {
          "name": "OpenAI/GPT-5.2 Pro",
          "value": "openai/gpt-5.2-pro"
        },
        {
          "name": "OpenAI/GPT-5.3 Chat (latest)",
          "value": "openai/gpt-5.3-chat-latest"
        },
        {
          "name": "OpenAI/GPT-5.3 Codex",
          "value": "openai/gpt-5.3-codex"
        },
        {
          "name": "OpenAI/GPT-5.3 Codex Spark",
          "value": "openai/gpt-5.3-codex-spark"
        },
        {
          "name": "OpenAI/GPT-5.4",
          "value": "openai/gpt-5.4"
        },
        {
          "name": "OpenAI/GPT-5.4 Fast",
          "value": "openai/gpt-5.4-fast"
        },
        {
          "name": "OpenAI/GPT-5.4 mini",
          "value": "openai/gpt-5.4-mini"
        },
        {
          "name": "OpenAI/GPT-5.4 mini Fast",
          "value": "openai/gpt-5.4-mini-fast"
        },
        {
          "name": "OpenAI/GPT-5.4 nano",
          "value": "openai/gpt-5.4-nano"
        },
        {
          "name": "OpenAI/GPT-5.4 Pro",
          "value": "openai/gpt-5.4-pro"
        },
        {
          "name": "OpenAI/GPT-5.5",
          "value": "openai/gpt-5.5"
        },
        {
          "name": "OpenAI/GPT-5.5 Fast",
          "value": "openai/gpt-5.5-fast"
        },
        {
          "name": "OpenAI/GPT-5.5 Pro",
          "value": "openai/gpt-5.5-pro"
        },
        {
          "name": "OpenAI/gpt-image-1",
          "value": "openai/gpt-image-1"
        },
        {
          "name": "OpenAI/gpt-image-1-mini",
          "value": "openai/gpt-image-1-mini"
        },
        {
          "name": "OpenAI/gpt-image-1.5",
          "value": "openai/gpt-image-1.5"
        },
        {
          "name": "OpenAI/gpt-image-2",
          "value": "openai/gpt-image-2"
        },
        {
          "name": "OpenAI/o1",
          "value": "openai/o1"
        },
        {
          "name": "OpenAI/o1-pro",
          "value": "openai/o1-pro"
        },
        {
          "name": "OpenAI/o3",
          "value": "openai/o3"
        },
        {
          "name": "OpenAI/o3-deep-research",
          "value": "openai/o3-deep-research"
        },
        {
          "name": "OpenAI/o3-mini",
          "value": "openai/o3-mini"
        },
        {
          "name": "OpenAI/o3-pro",
          "value": "openai/o3-pro"
        },
        {
          "name": "OpenAI/o4-mini",
          "value": "openai/o4-mini"
        },
        {
          "name": "OpenAI/o4-mini-deep-research",
          "value": "openai/o4-mini-deep-research"
        },
        {
          "name": "OpenAI/text-embedding-3-large",
          "value": "openai/text-embedding-3-large"
        },
        {
          "name": "OpenAI/text-embedding-3-small",
          "value": "openai/text-embedding-3-small"
        },
        {
          "name": "OpenAI/text-embedding-ada-002",
          "value": "openai/text-embedding-ada-002"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2 0711",
          "value": "moonshotai-cn/kimi-k2-0711-preview"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2 0905",
          "value": "moonshotai-cn/kimi-k2-0905-preview"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2 Thinking",
          "value": "moonshotai-cn/kimi-k2-thinking"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2 Thinking Turbo",
          "value": "moonshotai-cn/kimi-k2-thinking-turbo"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2 Turbo",
          "value": "moonshotai-cn/kimi-k2-turbo-preview"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2.5",
          "value": "moonshotai-cn/kimi-k2.5"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2.6",
          "value": "moonshotai-cn/kimi-k2.6"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2.7 Code",
          "value": "moonshotai-cn/kimi-k2.7-code"
        },
        {
          "name": "Moonshot AI (China)/Kimi K2.7 Code HighSpeed",
          "value": "moonshotai-cn/kimi-k2.7-code-highspeed"
        },
        {
          "name": "Anthropic/Claude Fable 5",
          "value": "anthropic/claude-fable-5"
        },
        {
          "name": "Anthropic/Claude Haiku 4.5",
          "value": "anthropic/claude-haiku-4-5-20251001"
        },
        {
          "name": "Anthropic/Claude Haiku 4.5 (latest)",
          "value": "anthropic/claude-haiku-4-5"
        },
        {
          "name": "Anthropic/Claude Opus 4",
          "value": "anthropic/claude-opus-4-20250514"
        },
        {
          "name": "Anthropic/Claude Opus 4 (latest)",
          "value": "anthropic/claude-opus-4-0"
        },
        {
          "name": "Anthropic/Claude Opus 4.1",
          "value": "anthropic/claude-opus-4-1-20250805"
        },
        {
          "name": "Anthropic/Claude Opus 4.1 (latest)",
          "value": "anthropic/claude-opus-4-1"
        },
        {
          "name": "Anthropic/Claude Opus 4.5",
          "value": "anthropic/claude-opus-4-5-20251101"
        },
        {
          "name": "Anthropic/Claude Opus 4.5 (latest)",
          "value": "anthropic/claude-opus-4-5"
        },
        {
          "name": "Anthropic/Claude Opus 4.6",
          "value": "anthropic/claude-opus-4-6"
        },
        {
          "name": "Anthropic/Claude Opus 4.6 Fast",
          "value": "anthropic/claude-opus-4-6-fast"
        },
        {
          "name": "Anthropic/Claude Opus 4.7",
          "value": "anthropic/claude-opus-4-7"
        },
        {
          "name": "Anthropic/Claude Opus 4.7 Fast",
          "value": "anthropic/claude-opus-4-7-fast"
        },
        {
          "name": "Anthropic/Claude Opus 4.8",
          "value": "anthropic/claude-opus-4-8"
        },
        {
          "name": "Anthropic/Claude Opus 4.8 Fast",
          "value": "anthropic/claude-opus-4-8-fast"
        },
        {
          "name": "Anthropic/Claude Sonnet 4",
          "value": "anthropic/claude-sonnet-4-20250514"
        },
        {
          "name": "Anthropic/Claude Sonnet 4 (latest)",
          "value": "anthropic/claude-sonnet-4-0"
        },
        {
          "name": "Anthropic/Claude Sonnet 4.5",
          "value": "anthropic/claude-sonnet-4-5-20250929"
        },
        {
          "name": "Anthropic/Claude Sonnet 4.5 (latest)",
          "value": "anthropic/claude-sonnet-4-5"
        },
        {
          "name": "Anthropic/Claude Sonnet 4.6",
          "value": "anthropic/claude-sonnet-4-6"
        },
        {
          "name": "DeepSeek/DeepSeek Chat",
          "value": "deepseek/deepseek-chat"
        },
        {
          "name": "DeepSeek/DeepSeek Reasoner",
          "value": "deepseek/deepseek-reasoner"
        },
        {
          "name": "DeepSeek/DeepSeek V4 Flash",
          "value": "deepseek/deepseek-v4-flash"
        },
        {
          "name": "DeepSeek/DeepSeek V4 Pro",
          "value": "deepseek/deepseek-v4-pro"
        },
        {
          "name": "Kilo Gateway/AI21: Jamba Large 1.7",
          "value": "kilo/ai21/jamba-large-1.7"
        },
        {
          "name": "Kilo Gateway/Amazon: Nova 2 Lite",
          "value": "kilo/amazon/nova-2-lite-v1"
        },
        {
          "name": "Kilo Gateway/Amazon: Nova Lite 1.0",
          "value": "kilo/amazon/nova-lite-v1"
        },
        {
          "name": "Kilo Gateway/Amazon: Nova Micro 1.0",
          "value": "kilo/amazon/nova-micro-v1"
        },
        {
          "name": "Kilo Gateway/Amazon: Nova Premier 1.0",
          "value": "kilo/amazon/nova-premier-v1"
        },
        {
          "name": "Kilo Gateway/Amazon: Nova Pro 1.0",
          "value": "kilo/amazon/nova-pro-v1"
        },
        {
          "name": "Kilo Gateway/Anthropic Claude Haiku Latest",
          "value": "kilo/~anthropic/claude-haiku-latest"
        },
        {
          "name": "Kilo Gateway/Anthropic Claude Sonnet Latest",
          "value": "kilo/~anthropic/claude-sonnet-latest"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude 3 Haiku",
          "value": "kilo/anthropic/claude-3-haiku"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Haiku 4.5",
          "value": "kilo/anthropic/claude-haiku-4.5"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4 ($$$$)",
          "value": "kilo/anthropic/claude-opus-4"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4.1 ($$$$)",
          "value": "kilo/anthropic/claude-opus-4.1"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4.5",
          "value": "kilo/anthropic/claude-opus-4.5"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4.6",
          "value": "kilo/anthropic/claude-opus-4.6"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4.6 (Fast) ($$$$)",
          "value": "kilo/anthropic/claude-opus-4.6-fast"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4.7",
          "value": "kilo/anthropic/claude-opus-4.7"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4.7 (Fast) ($$$$)",
          "value": "kilo/anthropic/claude-opus-4.7-fast"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4.8",
          "value": "kilo/anthropic/claude-opus-4.8"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus 4.8 (Fast) ($$$$)",
          "value": "kilo/anthropic/claude-opus-4.8-fast"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Opus Latest",
          "value": "kilo/~anthropic/claude-opus-latest"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Sonnet 4",
          "value": "kilo/anthropic/claude-sonnet-4"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Sonnet 4.5",
          "value": "kilo/anthropic/claude-sonnet-4.5"
        },
        {
          "name": "Kilo Gateway/Anthropic: Claude Sonnet 4.6",
          "value": "kilo/anthropic/claude-sonnet-4.6"
        },
        {
          "name": "Kilo Gateway/Arcee AI: Trinity Large Thinking",
          "value": "kilo/arcee-ai/trinity-large-thinking"
        },
        {
          "name": "Kilo Gateway/Arcee AI: Trinity Mini",
          "value": "kilo/arcee-ai/trinity-mini"
        },
        {
          "name": "Kilo Gateway/Arcee AI: Virtuoso Large",
          "value": "kilo/arcee-ai/virtuoso-large"
        },
        {
          "name": "Kilo Gateway/Auto Balanced",
          "value": "kilo/kilo-auto/balanced"
        },
        {
          "name": "Kilo Gateway/Auto Efficient",
          "value": "kilo/kilo-auto/efficient"
        },
        {
          "name": "Kilo Gateway/Auto Free",
          "value": "kilo/kilo-auto/free"
        },
        {
          "name": "Kilo Gateway/Auto Frontier",
          "value": "kilo/kilo-auto/frontier"
        },
        {
          "name": "Kilo Gateway/Auto Small",
          "value": "kilo/kilo-auto/small"
        },
        {
          "name": "Kilo Gateway/ByteDance Seed: Seed 1.6",
          "value": "kilo/bytedance-seed/seed-1.6"
        },
        {
          "name": "Kilo Gateway/ByteDance Seed: Seed 1.6 Flash",
          "value": "kilo/bytedance-seed/seed-1.6-flash"
        },
        {
          "name": "Kilo Gateway/ByteDance Seed: Seed-2.0-Lite",
          "value": "kilo/bytedance-seed/seed-2.0-lite"
        },
        {
          "name": "Kilo Gateway/ByteDance Seed: Seed-2.0-Mini",
          "value": "kilo/bytedance-seed/seed-2.0-mini"
        },
        {
          "name": "Kilo Gateway/Cohere: Command R (08-2024)",
          "value": "kilo/cohere/command-r-08-2024"
        },
        {
          "name": "Kilo Gateway/Cohere: Command R+ (08-2024)",
          "value": "kilo/cohere/command-r-plus-08-2024"
        },
        {
          "name": "Kilo Gateway/Cohere: North Mini Code (free)",
          "value": "kilo/cohere/north-mini-code:free"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V3",
          "value": "kilo/deepseek/deepseek-chat"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V3 0324",
          "value": "kilo/deepseek/deepseek-chat-v3-0324"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V3.1",
          "value": "kilo/deepseek/deepseek-chat-v3.1"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V3.1 Terminus",
          "value": "kilo/deepseek/deepseek-v3.1-terminus"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V3.2",
          "value": "kilo/deepseek/deepseek-v3.2"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V3.2 Exp",
          "value": "kilo/deepseek/deepseek-v3.2-exp"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V4 Flash",
          "value": "kilo/deepseek/deepseek-v4-flash"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V4 Flash (>40% off)",
          "value": "kilo/deepseek/deepseek-v4-flash:discounted"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V4 Pro",
          "value": "kilo/deepseek/deepseek-v4-pro"
        },
        {
          "name": "Kilo Gateway/DeepSeek: DeepSeek V4 Pro (>80% off)",
          "value": "kilo/deepseek/deepseek-v4-pro:discounted"
        },
        {
          "name": "Kilo Gateway/DeepSeek: R1",
          "value": "kilo/deepseek/deepseek-r1"
        },
        {
          "name": "Kilo Gateway/DeepSeek: R1 0528",
          "value": "kilo/deepseek/deepseek-r1-0528"
        },
        {
          "name": "Kilo Gateway/Free Models Router",
          "value": "kilo/openrouter/free"
        },
        {
          "name": "Kilo Gateway/Google Gemini Flash Latest",
          "value": "kilo/~google/gemini-flash-latest"
        },
        {
          "name": "Kilo Gateway/Google Gemini Pro Latest",
          "value": "kilo/~google/gemini-pro-latest"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 2.5 Flash",
          "value": "kilo/google/gemini-2.5-flash"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 2.5 Flash Lite",
          "value": "kilo/google/gemini-2.5-flash-lite"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 2.5 Flash Lite Preview 09-2025",
          "value": "kilo/google/gemini-2.5-flash-lite-preview-09-2025"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 2.5 Pro",
          "value": "kilo/google/gemini-2.5-pro"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 2.5 Pro Preview 05-06",
          "value": "kilo/google/gemini-2.5-pro-preview-05-06"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 2.5 Pro Preview 06-05",
          "value": "kilo/google/gemini-2.5-pro-preview"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 3 Flash Preview",
          "value": "kilo/google/gemini-3-flash-preview"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 3.1 Flash Lite",
          "value": "kilo/google/gemini-3.1-flash-lite"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 3.1 Flash Lite Preview",
          "value": "kilo/google/gemini-3.1-flash-lite-preview"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 3.1 Pro Preview",
          "value": "kilo/google/gemini-3.1-pro-preview"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 3.1 Pro Preview Custom Tools",
          "value": "kilo/google/gemini-3.1-pro-preview-customtools"
        },
        {
          "name": "Kilo Gateway/Google: Gemini 3.5 Flash",
          "value": "kilo/google/gemini-3.5-flash"
        },
        {
          "name": "Kilo Gateway/Google: Gemma 3 12B",
          "value": "kilo/google/gemma-3-12b-it"
        },
        {
          "name": "Kilo Gateway/Google: Gemma 3 27B",
          "value": "kilo/google/gemma-3-27b-it"
        },
        {
          "name": "Kilo Gateway/Google: Gemma 4 26B A4B ",
          "value": "kilo/google/gemma-4-26b-a4b-it"
        },
        {
          "name": "Kilo Gateway/Google: Gemma 4 31B",
          "value": "kilo/google/gemma-4-31b-it"
        },
        {
          "name": "Kilo Gateway/IBM: Granite 4.1 8B",
          "value": "kilo/ibm-granite/granite-4.1-8b"
        },
        {
          "name": "Kilo Gateway/Inception: Mercury 2",
          "value": "kilo/inception/mercury-2"
        },
        {
          "name": "Kilo Gateway/inclusionAI: Ling-2.6-1T",
          "value": "kilo/inclusionai/ling-2.6-1t"
        },
        {
          "name": "Kilo Gateway/inclusionAI: Ling-2.6-flash",
          "value": "kilo/inclusionai/ling-2.6-flash"
        },
        {
          "name": "Kilo Gateway/inclusionAI: Ring-2.6-1T",
          "value": "kilo/inclusionai/ring-2.6-1t"
        },
        {
          "name": "Kilo Gateway/Kwaipilot: KAT-Coder-Pro V2",
          "value": "kilo/kwaipilot/kat-coder-pro-v2"
        },
        {
          "name": "Kilo Gateway/Meta: Llama 3.1 70B Instruct",
          "value": "kilo/meta-llama/llama-3.1-70b-instruct"
        },
        {
          "name": "Kilo Gateway/Meta: Llama 3.1 8B Instruct",
          "value": "kilo/meta-llama/llama-3.1-8b-instruct"
        },
        {
          "name": "Kilo Gateway/Meta: Llama 3.3 70B Instruct",
          "value": "kilo/meta-llama/llama-3.3-70b-instruct"
        },
        {
          "name": "Kilo Gateway/Meta: Llama 4 Maverick",
          "value": "kilo/meta-llama/llama-4-maverick"
        },
        {
          "name": "Kilo Gateway/Meta: Llama 4 Scout",
          "value": "kilo/meta-llama/llama-4-scout"
        },
        {
          "name": "Kilo Gateway/MiniMax: MiniMax M1",
          "value": "kilo/minimax/minimax-m1"
        },
        {
          "name": "Kilo Gateway/MiniMax: MiniMax M2",
          "value": "kilo/minimax/minimax-m2"
        },
        {
          "name": "Kilo Gateway/MiniMax: MiniMax M2.1",
          "value": "kilo/minimax/minimax-m2.1"
        },
        {
          "name": "Kilo Gateway/MiniMax: MiniMax M2.5",
          "value": "kilo/minimax/minimax-m2.5"
        },
        {
          "name": "Kilo Gateway/MiniMax: MiniMax M2.7",
          "value": "kilo/minimax/minimax-m2.7"
        },
        {
          "name": "Kilo Gateway/MiniMax: MiniMax M3",
          "value": "kilo/minimax/minimax-m3"
        },
        {
          "name": "Kilo Gateway/Mistral Large",
          "value": "kilo/mistralai/mistral-large"
        },
        {
          "name": "Kilo Gateway/Mistral Large 2407",
          "value": "kilo/mistralai/mistral-large-2407"
        },
        {
          "name": "Kilo Gateway/Mistral: Codestral 2508",
          "value": "kilo/mistralai/codestral-2508"
        },
        {
          "name": "Kilo Gateway/Mistral: Devstral 2 2512",
          "value": "kilo/mistralai/devstral-2512"
        },
        {
          "name": "Kilo Gateway/Mistral: Ministral 3 14B 2512",
          "value": "kilo/mistralai/ministral-14b-2512"
        },
        {
          "name": "Kilo Gateway/Mistral: Ministral 3 3B 2512",
          "value": "kilo/mistralai/ministral-3b-2512"
        },
        {
          "name": "Kilo Gateway/Mistral: Ministral 3 8B 2512",
          "value": "kilo/mistralai/ministral-8b-2512"
        },
        {
          "name": "Kilo Gateway/Mistral: Mistral Large 3 2512",
          "value": "kilo/mistralai/mistral-large-2512"
        },
        {
          "name": "Kilo Gateway/Mistral: Mistral Medium 3",
          "value": "kilo/mistralai/mistral-medium-3"
        },
        {
          "name": "Kilo Gateway/Mistral: Mistral Medium 3.1",
          "value": "kilo/mistralai/mistral-medium-3.1"
        },
        {
          "name": "Kilo Gateway/Mistral: Mistral Medium 3.5",
          "value": "kilo/mistralai/mistral-medium-3-5"
        },
        {
          "name": "Kilo Gateway/Mistral: Mistral Nemo",
          "value": "kilo/mistralai/mistral-nemo"
        },
        {
          "name": "Kilo Gateway/Mistral: Mistral Small 3.2 24B",
          "value": "kilo/mistralai/mistral-small-3.2-24b-instruct"
        },
        {
          "name": "Kilo Gateway/Mistral: Mistral Small 4",
          "value": "kilo/mistralai/mistral-small-2603"
        },
        {
          "name": "Kilo Gateway/Mistral: Mixtral 8x22B Instruct",
          "value": "kilo/mistralai/mixtral-8x22b-instruct"
        },
        {
          "name": "Kilo Gateway/Mistral: Saba",
          "value": "kilo/mistralai/mistral-saba"
        },
        {
          "name": "Kilo Gateway/Mistral: Voxtral Small 24B 2507",
          "value": "kilo/mistralai/voxtral-small-24b-2507"
        },
        {
          "name": "Kilo Gateway/MoonshotAI Kimi Latest",
          "value": "kilo/~moonshotai/kimi-latest"
        },
        {
          "name": "Kilo Gateway/MoonshotAI: Kimi K2 0711",
          "value": "kilo/moonshotai/kimi-k2"
        },
        {
          "name": "Kilo Gateway/MoonshotAI: Kimi K2 0905",
          "value": "kilo/moonshotai/kimi-k2-0905"
        },
        {
          "name": "Kilo Gateway/MoonshotAI: Kimi K2 Thinking",
          "value": "kilo/moonshotai/kimi-k2-thinking"
        },
        {
          "name": "Kilo Gateway/MoonshotAI: Kimi K2.5",
          "value": "kilo/moonshotai/kimi-k2.5"
        },
        {
          "name": "Kilo Gateway/MoonshotAI: Kimi K2.6",
          "value": "kilo/moonshotai/kimi-k2.6"
        },
        {
          "name": "Kilo Gateway/MoonshotAI: Kimi K2.7 Code",
          "value": "kilo/moonshotai/kimi-k2.7-code"
        },
        {
          "name": "Kilo Gateway/NVIDIA: Llama 3.3 Nemotron Super 49B V1.5",
          "value": "kilo/nvidia/llama-3.3-nemotron-super-49b-v1.5"
        },
        {
          "name": "Kilo Gateway/NVIDIA: Nemotron 3 Nano 30B A3B",
          "value": "kilo/nvidia/nemotron-3-nano-30b-a3b"
        },
        {
          "name": "Kilo Gateway/NVIDIA: Nemotron 3 Nano Omni (free)",
          "value": "kilo/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free"
        },
        {
          "name": "Kilo Gateway/NVIDIA: Nemotron 3 Super",
          "value": "kilo/nvidia/nemotron-3-super-120b-a12b"
        },
        {
          "name": "Kilo Gateway/NVIDIA: Nemotron 3 Super (free)",
          "value": "kilo/nvidia/nemotron-3-super-120b-a12b:free"
        },
        {
          "name": "Kilo Gateway/NVIDIA: Nemotron 3 Ultra",
          "value": "kilo/nvidia/nemotron-3-ultra-550b-a55b"
        },
        {
          "name": "Kilo Gateway/NVIDIA: Nemotron 3 Ultra (free)",
          "value": "kilo/nvidia/nemotron-3-ultra-550b-a55b:free"
        },
        {
          "name": "Kilo Gateway/OpenAI GPT Latest",
          "value": "kilo/~openai/gpt-latest"
        },
        {
          "name": "Kilo Gateway/OpenAI GPT Mini Latest",
          "value": "kilo/~openai/gpt-mini-latest"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT Audio",
          "value": "kilo/openai/gpt-audio"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT Audio Mini",
          "value": "kilo/openai/gpt-audio-mini"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT Chat Latest",
          "value": "kilo/openai/gpt-chat-latest"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-3.5 Turbo",
          "value": "kilo/openai/gpt-3.5-turbo"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-3.5 Turbo (older v0613)",
          "value": "kilo/openai/gpt-3.5-turbo-0613"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-3.5 Turbo 16k",
          "value": "kilo/openai/gpt-3.5-turbo-16k"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4 ($$$$)",
          "value": "kilo/openai/gpt-4"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4 Turbo ($$$$)",
          "value": "kilo/openai/gpt-4-turbo"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4 Turbo Preview ($$$$)",
          "value": "kilo/openai/gpt-4-turbo-preview"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4.1",
          "value": "kilo/openai/gpt-4.1"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4.1 Mini",
          "value": "kilo/openai/gpt-4.1-mini"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4.1 Nano",
          "value": "kilo/openai/gpt-4.1-nano"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4o",
          "value": "kilo/openai/gpt-4o"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4o (2024-05-13)",
          "value": "kilo/openai/gpt-4o-2024-05-13"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4o (2024-08-06)",
          "value": "kilo/openai/gpt-4o-2024-08-06"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4o (2024-11-20)",
          "value": "kilo/openai/gpt-4o-2024-11-20"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4o-mini",
          "value": "kilo/openai/gpt-4o-mini"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-4o-mini (2024-07-18)",
          "value": "kilo/openai/gpt-4o-mini-2024-07-18"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5",
          "value": "kilo/openai/gpt-5"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5 Codex",
          "value": "kilo/openai/gpt-5-codex"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5 Mini",
          "value": "kilo/openai/gpt-5-mini"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5 Nano",
          "value": "kilo/openai/gpt-5-nano"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5 Pro ($$$$)",
          "value": "kilo/openai/gpt-5-pro"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.1",
          "value": "kilo/openai/gpt-5.1"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.1 Chat",
          "value": "kilo/openai/gpt-5.1-chat"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.1-Codex",
          "value": "kilo/openai/gpt-5.1-codex"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.1-Codex-Max",
          "value": "kilo/openai/gpt-5.1-codex-max"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.1-Codex-Mini",
          "value": "kilo/openai/gpt-5.1-codex-mini"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.2",
          "value": "kilo/openai/gpt-5.2"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.2 Chat",
          "value": "kilo/openai/gpt-5.2-chat"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.2 Pro ($$$$)",
          "value": "kilo/openai/gpt-5.2-pro"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.2-Codex",
          "value": "kilo/openai/gpt-5.2-codex"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.3 Chat",
          "value": "kilo/openai/gpt-5.3-chat"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.3-Codex",
          "value": "kilo/openai/gpt-5.3-codex"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.4",
          "value": "kilo/openai/gpt-5.4"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.4 Mini",
          "value": "kilo/openai/gpt-5.4-mini"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.4 Nano",
          "value": "kilo/openai/gpt-5.4-nano"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.4 Pro ($$$$)",
          "value": "kilo/openai/gpt-5.4-pro"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.5",
          "value": "kilo/openai/gpt-5.5"
        },
        {
          "name": "Kilo Gateway/OpenAI: GPT-5.5 Pro ($$$$)",
          "value": "kilo/openai/gpt-5.5-pro"
        },
        {
          "name": "Kilo Gateway/OpenAI: gpt-oss-120b",
          "value": "kilo/openai/gpt-oss-120b"
        },
        {
          "name": "Kilo Gateway/OpenAI: gpt-oss-20b",
          "value": "kilo/openai/gpt-oss-20b"
        },
        {
          "name": "Kilo Gateway/OpenAI: gpt-oss-safeguard-20b",
          "value": "kilo/openai/gpt-oss-safeguard-20b"
        },
        {
          "name": "Kilo Gateway/OpenAI: o1 ($$$$)",
          "value": "kilo/openai/o1"
        },
        {
          "name": "Kilo Gateway/OpenAI: o3",
          "value": "kilo/openai/o3"
        },
        {
          "name": "Kilo Gateway/OpenAI: o3 Deep Research ($$$$)",
          "value": "kilo/openai/o3-deep-research"
        },
        {
          "name": "Kilo Gateway/OpenAI: o3 Mini",
          "value": "kilo/openai/o3-mini"
        },
        {
          "name": "Kilo Gateway/OpenAI: o3 Mini High",
          "value": "kilo/openai/o3-mini-high"
        },
        {
          "name": "Kilo Gateway/OpenAI: o3 Pro ($$$$)",
          "value": "kilo/openai/o3-pro"
        },
        {
          "name": "Kilo Gateway/OpenAI: o4 Mini",
          "value": "kilo/openai/o4-mini"
        },
        {
          "name": "Kilo Gateway/OpenAI: o4 Mini Deep Research",
          "value": "kilo/openai/o4-mini-deep-research"
        },
        {
          "name": "Kilo Gateway/OpenAI: o4 Mini High",
          "value": "kilo/openai/o4-mini-high"
        },
        {
          "name": "Kilo Gateway/Owl Alpha",
          "value": "kilo/openrouter/owl-alpha"
        },
        {
          "name": "Kilo Gateway/Poolside: Laguna M.1",
          "value": "kilo/poolside/laguna-m.1"
        },
        {
          "name": "Kilo Gateway/Poolside: Laguna M.1 (free)",
          "value": "kilo/poolside/laguna-m.1:free"
        },
        {
          "name": "Kilo Gateway/Poolside: Laguna XS.2",
          "value": "kilo/poolside/laguna-xs.2"
        },
        {
          "name": "Kilo Gateway/Poolside: Laguna XS.2 (free)",
          "value": "kilo/poolside/laguna-xs.2:free"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen Plus 0728",
          "value": "kilo/qwen/qwen-plus-2025-07-28"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen Plus 0728 (thinking)",
          "value": "kilo/qwen/qwen-plus-2025-07-28:thinking"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen-Plus",
          "value": "kilo/qwen/qwen-plus"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen2.5 7B Instruct",
          "value": "kilo/qwen/qwen-2.5-7b-instruct"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 14B",
          "value": "kilo/qwen/qwen3-14b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 235B A22B",
          "value": "kilo/qwen/qwen3-235b-a22b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 235B A22B Instruct 2507",
          "value": "kilo/qwen/qwen3-235b-a22b-2507"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 235B A22B Thinking 2507",
          "value": "kilo/qwen/qwen3-235b-a22b-thinking-2507"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 30B A3B",
          "value": "kilo/qwen/qwen3-30b-a3b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 30B A3B Instruct 2507",
          "value": "kilo/qwen/qwen3-30b-a3b-instruct-2507"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 30B A3B Thinking 2507",
          "value": "kilo/qwen/qwen3-30b-a3b-thinking-2507"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 32B",
          "value": "kilo/qwen/qwen3-32b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 8B",
          "value": "kilo/qwen/qwen3-8b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Coder 30B A3B Instruct",
          "value": "kilo/qwen/qwen3-coder-30b-a3b-instruct"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Coder 480B A35B",
          "value": "kilo/qwen/qwen3-coder"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Coder Flash",
          "value": "kilo/qwen/qwen3-coder-flash"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Coder Next",
          "value": "kilo/qwen/qwen3-coder-next"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Coder Plus",
          "value": "kilo/qwen/qwen3-coder-plus"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Max",
          "value": "kilo/qwen/qwen3-max"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Max Thinking",
          "value": "kilo/qwen/qwen3-max-thinking"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Next 80B A3B Instruct",
          "value": "kilo/qwen/qwen3-next-80b-a3b-instruct"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 Next 80B A3B Thinking",
          "value": "kilo/qwen/qwen3-next-80b-a3b-thinking"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 VL 235B A22B Instruct",
          "value": "kilo/qwen/qwen3-vl-235b-a22b-instruct"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 VL 235B A22B Thinking",
          "value": "kilo/qwen/qwen3-vl-235b-a22b-thinking"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 VL 30B A3B Instruct",
          "value": "kilo/qwen/qwen3-vl-30b-a3b-instruct"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 VL 30B A3B Thinking",
          "value": "kilo/qwen/qwen3-vl-30b-a3b-thinking"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 VL 32B Instruct",
          "value": "kilo/qwen/qwen3-vl-32b-instruct"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 VL 8B Instruct",
          "value": "kilo/qwen/qwen3-vl-8b-instruct"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3 VL 8B Thinking",
          "value": "kilo/qwen/qwen3-vl-8b-thinking"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.5 397B A17B",
          "value": "kilo/qwen/qwen3.5-397b-a17b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.5 Plus 2026-02-15",
          "value": "kilo/qwen/qwen3.5-plus-02-15"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.5 Plus 2026-04-20",
          "value": "kilo/qwen/qwen3.5-plus-20260420"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.5-122B-A10B",
          "value": "kilo/qwen/qwen3.5-122b-a10b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.5-27B",
          "value": "kilo/qwen/qwen3.5-27b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.5-35B-A3B",
          "value": "kilo/qwen/qwen3.5-35b-a3b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.5-9B",
          "value": "kilo/qwen/qwen3.5-9b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.5-Flash",
          "value": "kilo/qwen/qwen3.5-flash-02-23"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.6 27B",
          "value": "kilo/qwen/qwen3.6-27b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.6 35B A3B",
          "value": "kilo/qwen/qwen3.6-35b-a3b"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.6 Flash",
          "value": "kilo/qwen/qwen3.6-flash"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.6 Max Preview",
          "value": "kilo/qwen/qwen3.6-max-preview"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.6 Plus",
          "value": "kilo/qwen/qwen3.6-plus"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.7 Max (50% off)",
          "value": "kilo/qwen/qwen3.7-max"
        },
        {
          "name": "Kilo Gateway/Qwen: Qwen3.7 Plus (20% off)",
          "value": "kilo/qwen/qwen3.7-plus"
        },
        {
          "name": "Kilo Gateway/Qwen2.5 72B Instruct",
          "value": "kilo/qwen/qwen-2.5-72b-instruct"
        },
        {
          "name": "Kilo Gateway/Reka Edge",
          "value": "kilo/rekaai/reka-edge"
        },
        {
          "name": "Kilo Gateway/Relace: Relace Search",
          "value": "kilo/relace/relace-search"
        },
        {
          "name": "Kilo Gateway/Sao10K: Llama 3.1 Euryale 70B v2.2",
          "value": "kilo/sao10k/l3.1-euryale-70b"
        },
        {
          "name": "Kilo Gateway/Stealth: Claude Opus 4.6 (20% off)",
          "value": "kilo/stealth/claude-opus-4.6"
        },
        {
          "name": "Kilo Gateway/Stealth: Claude Opus 4.7 (20% off)",
          "value": "kilo/stealth/claude-opus-4.7"
        },
        {
          "name": "Kilo Gateway/Stealth: Claude Opus 4.8 (20% off)",
          "value": "kilo/stealth/claude-opus-4.8"
        },
        {
          "name": "Kilo Gateway/Stealth: Claude Sonnet 4.6 (20% off)",
          "value": "kilo/stealth/claude-sonnet-4.6"
        },
        {
          "name": "Kilo Gateway/Stealth: Qwen3.6 Plus (50% off)",
          "value": "kilo/stealth/qwen3.6-plus"
        },
        {
          "name": "Kilo Gateway/StepFun: Step 3.5 Flash (retires Jun 29)",
          "value": "kilo/stepfun/step-3.5-flash"
        },
        {
          "name": "Kilo Gateway/StepFun: Step 3.7 Flash",
          "value": "kilo/stepfun/step-3.7-flash"
        },
        {
          "name": "Kilo Gateway/StepFun: Step 3.7 Flash (free)",
          "value": "kilo/stepfun/step-3.7-flash:free"
        },
        {
          "name": "Kilo Gateway/Tencent: Hy3 preview",
          "value": "kilo/tencent/hy3-preview"
        },
        {
          "name": "Kilo Gateway/TheDrummer: UnslopNemo 12B",
          "value": "kilo/thedrummer/unslopnemo-12b"
        },
        {
          "name": "Kilo Gateway/Upstage: Solar Pro 3",
          "value": "kilo/upstage/solar-pro-3"
        },
        {
          "name": "Kilo Gateway/xAI: Grok 4.20",
          "value": "kilo/x-ai/grok-4.20"
        },
        {
          "name": "Kilo Gateway/xAI: Grok 4.3",
          "value": "kilo/x-ai/grok-4.3"
        },
        {
          "name": "Kilo Gateway/xAI: Grok Build 0.1",
          "value": "kilo/x-ai/grok-build-0.1"
        },
        {
          "name": "Kilo Gateway/Xiaomi: MiMo-V2.5",
          "value": "kilo/xiaomi/mimo-v2.5"
        },
        {
          "name": "Kilo Gateway/Xiaomi: MiMo-V2.5-Pro",
          "value": "kilo/xiaomi/mimo-v2.5-pro"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 4.5",
          "value": "kilo/z-ai/glm-4.5"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 4.5 Air",
          "value": "kilo/z-ai/glm-4.5-air"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 4.5V",
          "value": "kilo/z-ai/glm-4.5v"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 4.6",
          "value": "kilo/z-ai/glm-4.6"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 4.6V",
          "value": "kilo/z-ai/glm-4.6v"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 4.7",
          "value": "kilo/z-ai/glm-4.7"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 4.7 Flash",
          "value": "kilo/z-ai/glm-4.7-flash"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 5",
          "value": "kilo/z-ai/glm-5"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 5 Turbo",
          "value": "kilo/z-ai/glm-5-turbo"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 5.1",
          "value": "kilo/z-ai/glm-5.1"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 5.2",
          "value": "kilo/z-ai/glm-5.2"
        },
        {
          "name": "Kilo Gateway/Z.ai: GLM 5V Turbo",
          "value": "kilo/z-ai/glm-5v-turbo"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "none",
      "description": "Available effort levels for this model",
      "id": "effort",
      "name": "Effort",
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
          "name": "Max",
          "value": "max"
        }
      ],
      "type": "select"
    },
    {
      "category": "mode",
      "currentValue": "code",
      "id": "mode",
      "name": "Session Mode",
      "options": [
        {
          "description": "The default agent. Executes tools based on configured permissions.",
          "name": "code",
          "value": "code"
        },
        {
          "description": "Get answers and explanations without making changes to the codebase.",
          "name": "ask",
          "value": "ask"
        },
        {
          "description": "Diagnose and fix software issues with systematic debugging methodology.",
          "name": "debug",
          "value": "debug"
        },
        {
          "description": "Coordinate complex tasks by delegating to specialized agents in parallel.",
          "name": "orchestrator",
          "value": "orchestrator"
        },
        {
          "description": "Plan mode. Can only edit plan files; all other filesystem mutations are denied.",
          "name": "plan",
          "value": "plan"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": null,
  "id": "kilo",
  "modes": [],
  "name": "Kilo",
  "protocolVersion": 1,
  "version": "7.3.54"
};
