import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "_meta": {
      "claudeCode": {
        "promptQueueing": true
      }
    },
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
      "additionalDirectories": {},
      "close": {},
      "delete": {},
      "fork": {},
      "list": {},
      "resume": {}
    }
  },
  "agentInfo": {
    "name": "@agentclientprotocol/claude-agent-acp",
    "title": "Claude Agent",
    "version": "0.52.0"
  },
  "authMethods": [],
  "commands": [
    {
      "description": "Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to \"auto review\", \"autoplan\", \"run all reviews\", \"review this plan\nautomatically\", or \"make the decisions for me\".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): \"auto plan\", \"automatic review\". (user)",
      "input": null,
      "name": "autoplan"
    },
    {
      "description": "Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: \"performance\", \"benchmark\", \"page speed\", \"lighthouse\", \"web vitals\",\n\"bundle size\", \"load time\". (gstack)\nVoice triggers (speech-to-text aliases): \"speed test\", \"check performance\". (user)",
      "input": null,
      "name": "benchmark"
    },
    {
      "description": "Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side — compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers \"which model is actually best\nfor this skill?\" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: \"benchmark models\", \"compare models\",\n\"which model is best for X\", \"cross-model comparison\", \"model shootout\". (gstack)\nVoice triggers (speech-to-text aliases): \"compare models\", \"model shootout\", \"which model is best\". (user)",
      "input": null,
      "name": "benchmark-models"
    },
    {
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to \"open in browser\", \"test the\nsite\", \"take a screenshot\", or \"dogfood this\". (gstack) (user)",
      "input": null,
      "name": "browse"
    },
    {
      "description": "Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: \"monitor deploy\", \"canary\", \"post-deploy check\",\n\"watch production\", \"verify deploy\". (gstack) (user)",
      "input": null,
      "name": "canary"
    },
    {
      "description": "Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to \"be careful\", \"safety mode\",\n\"prod mode\", or \"careful mode\". (gstack) (user)",
      "input": null,
      "name": "careful"
    },
    {
      "description": "OpenAI Codex CLI wrapper — three modes. Code review: independent diff review via\ncodex review with pass/fail gate. Challenge: adversarial mode that tries to break\nyour code. Consult: ask codex anything with session continuity for follow-ups.\nThe \"200 IQ autistic developer\" second opinion. Use when asked to \"codex review\",\n\"codex challenge\", \"ask codex\", \"second opinion\", or \"consult codex\". (gstack)\nVoice triggers (speech-to-text aliases): \"code x\", \"code ex\", \"get another opinion\". (user)",
      "input": null,
      "name": "codex"
    },
    {
      "description": "Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to \"open gstack browser\", \"launch browser\", \"connect chrome\",\n\"open chrome\", \"real browser\", \"launch chrome\", \"side panel\", or \"control my browser\".\nVoice triggers (speech-to-text aliases): \"show me the browser\". (user)",
      "input": null,
      "name": "open-gstack-browser"
    },
    {
      "description": "Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off — even across Conductor workspace handoffs.\nUse when asked to \"resume\", \"restore context\", \"where was I\", or\n\"pick up where I left off\". Pair with /context-save.\nFormerly /checkpoint resume — renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack) (user)",
      "input": null,
      "name": "context-restore"
    },
    {
      "description": "Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to \"save progress\", \"save state\", \"context save\", or\n\"save my work\". Pair with /context-restore to resume later.\nFormerly /checkpoint — renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack) (user)",
      "input": null,
      "name": "context-save"
    },
    {
      "description": "Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: \"security audit\", \"threat model\", \"pentest review\", \"OWASP\", \"CSO review\". (gstack)\nVoice triggers (speech-to-text aliases): \"see-so\", \"see so\", \"security review\", \"security check\", \"vulnerability scan\", \"run security\". (user)",
      "input": null,
      "name": "cso"
    },
    {
      "description": "Design consultation: understands your product, researches the landscape, proposes a\ncomplete design system (aesthetic, typography, color, layout, spacing, motion), and\ngenerates font+color preview pages. Creates DESIGN.md as your project's design source\nof truth. For existing sites, use /plan-design-review to infer the system instead.\nUse when asked to \"design system\", \"brand guidelines\", or \"create DESIGN.md\".\nProactively suggest when starting a new project's UI with no existing\ndesign system or DESIGN.md. (gstack) (user)",
      "input": null,
      "name": "design-consultation"
    },
    {
      "description": "Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: \"finalize this design\", \"turn this into HTML\",\n\"build me a page\", \"implement this design\", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): \"build the design\", \"code the mockup\", \"make it real\". (user)",
      "input": null,
      "name": "design-html"
    },
    {
      "description": "Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,\nAI slop patterns, and slow interactions — then fixes them. Iteratively fixes issues\nin source code, committing each fix atomically and re-verifying with before/after\nscreenshots. For plan-mode design review (before implementation), use /plan-design-review.\nUse when asked to \"audit the design\", \"visual QA\", \"check if it looks good\", or \"design polish\".\nProactively suggest when the user mentions visual inconsistencies or\nwants to polish the look of a live site. (gstack) (user)",
      "input": null,
      "name": "design-review"
    },
    {
      "description": "Design shotgun: generate multiple AI design variants, open a comparison board,\ncollect structured feedback, and iterate. Standalone design exploration you can\nrun anytime. Use when: \"explore designs\", \"show me options\", \"design variants\",\n\"visual brainstorm\", or \"I don't like how this looks\".\nProactively suggest when the user describes a UI feature but hasn't seen\nwhat it could look like. (gstack) (user)",
      "input": null,
      "name": "design-shotgun"
    },
    {
      "description": "Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n\"test the DX\", \"DX audit\", \"developer experience test\", or \"try the\nonboarding\". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): \"dx audit\", \"test the developer experience\", \"try the onboarding\", \"developer experience test\". (user)",
      "input": null,
      "name": "devex-review"
    },
    {
      "description": "Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to \"update the docs\", \"sync documentation\", or \"post-ship docs\".\nProactively suggest after a PR is merged or code is shipped. (gstack) (user)",
      "input": null,
      "name": "document-release"
    },
    {
      "description": "Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n\"fixing\" unrelated code, or when you want to scope changes to one module.\nUse when asked to \"freeze\", \"restrict edits\", \"only edit this folder\",\nor \"lock down edits\". (gstack) (user)",
      "input": null,
      "name": "freeze"
    },
    {
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate pages, interact with\nelements, verify state, diff before/after, take annotated screenshots, test responsive\nlayouts, forms, uploads, dialogs, and capture bug evidence. Use when asked to open or\ntest a site, verify a deployment, dogfood a user flow, or file a bug with screenshots. (gstack) (user)",
      "input": null,
      "name": "gstack"
    },
    {
      "description": "Upgrade gstack to the latest version. Detects global vs vendored install,\nruns the upgrade, and shows what's new. Use when asked to \"upgrade gstack\",\n\"update gstack\", or \"get latest version\".\nVoice triggers (speech-to-text aliases): \"upgrade the tools\", \"update the tools\", \"gee stack upgrade\", \"g stack upgrade\". (user)",
      "input": null,
      "name": "gstack-upgrade"
    },
    {
      "description": "Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to \"guard mode\",\n\"full safety\", \"lock it down\", or \"maximum safety\". (gstack) (user)",
      "input": null,
      "name": "guard"
    },
    {
      "description": "Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: \"health check\",\n\"code quality\", \"how healthy is the codebase\", \"run all checks\",\n\"quality score\". (gstack) (user)",
      "input": null,
      "name": "health"
    },
    {
      "description": "Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to \"debug this\", \"fix this bug\", \"why is this broken\",\n\"investigate this error\", or \"root cause analysis\".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, \"it was working\nyesterday\", or is troubleshooting why something stopped working. (gstack) (user)",
      "input": null,
      "name": "investigate"
    },
    {
      "description": "Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: \"merge\", \"land\", \"deploy\", \"merge and verify\",\n\"land it\", \"ship it to production\". (gstack) (user)",
      "input": null,
      "name": "land-and-deploy"
    },
    {
      "description": "Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots\nare currently claimed by open PRs, which sibling Conductor workspaces have\nWIP work likely to ship soon, and what slot /ship would pick next. No\nmutations — just a snapshot. Use when asked to \"landing report\", \"what's in\nthe queue\", \"show me open PRs\", or \"which version do I claim next\". (gstack) (user)",
      "input": null,
      "name": "landing-report"
    },
    {
      "description": "Manage project learnings. Review, search, prune, and export what gstack\nhas learned across sessions. Use when asked to \"what have we learned\",\n\"show learnings\", \"prune stale learnings\", or \"export learnings\".\nProactively suggest when the user asks about past patterns or wonders\n\"didn't we fix this before?\" (user)",
      "input": null,
      "name": "learn"
    },
    {
      "description": "Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact — a finished artifact. Use when asked to \"make a PDF\", \"export to\nPDF\", \"turn this markdown into a PDF\", or \"generate a document\". (gstack)\nVoice triggers (speech-to-text aliases): \"make this a pdf\", \"make it a pdf\", \"export to pdf\", \"turn this into a pdf\", \"turn this markdown into a pdf\", \"generate a pdf\", \"make a pdf from\", \"pdf this markdown\". (user)",
      "input": null,
      "name": "make-pdf"
    },
    {
      "description": "YC Office Hours — two modes. Startup mode: six forcing questions that expose\ndemand reality, status quo, desperate specificity, narrowest wedge, observation,\nand future-fit. Builder mode: design thinking brainstorming for side projects,\nhackathons, learning, and open source. Saves a design doc.\nUse when asked to \"brainstorm this\", \"I have an idea\", \"help me think through\nthis\", \"office hours\", or \"is this worth building\".\nProactively invoke this skill (do NOT answer directly) when the user describes\na new product idea, asks whether something is worth building, wants to think\nthrough design decisions for something that doesn't exist yet, or is exploring\na concept before any code is written.\nUse before /plan-ceo-review or /plan-eng-review. (gstack) (user)",
      "input": null,
      "name": "office-hours"
    },
    {
      "description": "Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to \"pair agent\", \"connect agent\", \"share browser\", \"remote browser\",\n\"let another agent use my browser\", or \"give browser access\". (gstack)\nVoice triggers (speech-to-text aliases): \"pair agent\", \"connect agent\", \"share my browser\", \"remote browser access\". (user)",
      "input": null,
      "name": "pair-agent"
    },
    {
      "description": "CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to \"think bigger\", \"expand scope\", \"strategy review\", \"rethink this\",\nor \"is this ambitious enough\".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack) (user)",
      "input": null,
      "name": "plan-ceo-review"
    },
    {
      "description": "Designer's eye plan review — interactive, like CEO and Eng review.\nRates each design dimension 0-10, explains what would make it a 10,\nthen fixes the plan to get there. Works in plan mode. For live site\nvisual audits, use /design-review. Use when asked to \"review the design plan\"\nor \"design critique\".\nProactively suggest when the user has a plan with UI/UX components that\nshould be reviewed before implementation. (gstack) (user)",
      "input": null,
      "name": "plan-design-review"
    },
    {
      "description": "Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to \"DX review\", \"developer experience audit\", \"devex review\",\nor \"API design review\".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): \"dx review\", \"developer experience review\", \"devex review\", \"devex audit\", \"API design review\", \"onboarding review\". (user)",
      "input": null,
      "name": "plan-devex-review"
    },
    {
      "description": "Eng manager-mode plan review. Lock in the execution plan — architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n\"review the architecture\", \"engineering review\", or \"lock in the plan\".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding — to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): \"tech review\", \"technical review\", \"plan engineering review\". (user)",
      "input": null,
      "name": "plan-eng-review"
    },
    {
      "description": "Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface — no CLI syntax required.\n\nUse when asked to \"tune questions\", \"stop asking me that\", \"too many questions\",\n\"show my profile\", \"what questions have I been asked\", \"show my vibe\",\n\"developer profile\", or \"turn off question tuning\". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time. (user)",
      "input": null,
      "name": "plan-tune"
    },
    {
      "description": "Systematically QA test a web application and fix bugs found. Runs QA testing,\nthen iteratively fixes bugs in source code, committing each fix atomically and\nre-verifying. Use when asked to \"qa\", \"QA\", \"test this site\", \"find bugs\",\n\"test and fix\", or \"fix what's broken\".\nProactively suggest when the user says a feature is ready for testing\nor asks \"does this work?\". Three tiers: Quick (critical/high only),\nStandard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,\nfix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)\nVoice triggers (speech-to-text aliases): \"quality check\", \"test the app\", \"run QA\". (user)",
      "input": null,
      "name": "qa"
    },
    {
      "description": "Report-only QA testing. Systematically tests a web application and produces a\nstructured report with health score, screenshots, and repro steps — but never\nfixes anything. Use when asked to \"just report bugs\", \"qa report only\", or\n\"test but don't fix\". For the full test-fix-verify loop, use /qa instead.\nProactively suggest when the user wants a bug report without any code changes. (gstack)\nVoice triggers (speech-to-text aliases): \"bug report\", \"just check for bugs\". (user)",
      "input": null,
      "name": "qa-only"
    },
    {
      "description": "Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to \"weekly retro\", \"what did we ship\", or \"engineering retrospective\".\nProactively suggest at the end of a work week or sprint. (gstack) (user)",
      "input": null,
      "name": "retro"
    },
    {
      "description": "Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust\nboundary violations, conditional side effects, and other structural issues. Use when\nasked to \"review this PR\", \"code review\", \"pre-landing review\", or \"check my diff\".\nProactively suggest when the user is about to merge or land code changes. (gstack) (user)",
      "input": null,
      "name": "review"
    },
    {
      "description": "Pull data from a web page. First call on a new intent prototypes the flow\nvia $B primitives and returns JSON. Subsequent calls on a matching intent\nroute to a codified browser-skill and return in ~200ms. Read-only — for\nmutating flows (form fills, clicks, submissions), use /automate.\nUse when asked to \"scrape\", \"get data from\", \"pull\", \"extract from\", or\n\"what's on\" a page. (gstack) (user)",
      "input": null,
      "name": "scrape"
    },
    {
      "description": "Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to \"import cookies\",\n\"login to the site\", or \"authenticate the browser\". (gstack) (user)",
      "input": null,
      "name": "setup-browser-cookies"
    },
    {
      "description": "Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: \"setup deploy\", \"configure deployment\", \"set up land-and-deploy\",\n\"how do I deploy with gstack\", \"add deploy config\". (user)",
      "input": null,
      "name": "setup-deploy"
    },
    {
      "description": "Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to \"gbrain is running, and this agent\ncan call it.\" Use when: \"setup gbrain\", \"connect gbrain\", \"start\ngbrain\", \"install gbrain\", \"configure gbrain for this machine\". (gstack) (user)",
      "input": null,
      "name": "setup-gbrain"
    },
    {
      "description": "Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to \"ship\", \"deploy\",\n\"push to main\", \"create a PR\", \"merge and push\", or \"get it deployed\".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack) (user)",
      "input": null,
      "name": "ship"
    },
    {
      "description": "Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to \"skillify\", \"codify\", \"save this scrape\", or\n\"make this permanent\". (gstack) (user)",
      "input": null,
      "name": "skillify"
    },
    {
      "description": "Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to \"unfreeze\", \"unlock edits\", \"remove freeze\", or\n\"allow all edits\". (gstack) (user)",
      "input": null,
      "name": "unfreeze"
    },
    {
      "description": "Deep research harness — fan-out web searches, fetch sources, adversarially verify claims, synthesize a cited report. (dynamic workflow)",
      "input": null,
      "name": "deep-research"
    },
    {
      "description": "(obsidian) Extract clean markdown content from web pages using Defuddle CLI, removing clutter and navigation to save tokens. Use instead of WebFetch when the user provides a URL to read or analyze, for online documentation, articles, blog posts, or any standard web page. Do NOT use for URLs ending in .md — those are already markdown, use WebFetch directly.",
      "input": null,
      "name": "defuddle"
    },
    {
      "description": "(obsidian) Create and edit JSON Canvas files (.canvas) with nodes, edges, groups, and connections. Use when working with .canvas files, creating visual canvases, mind maps, flowcharts, or when the user mentions Canvas files in Obsidian.",
      "input": null,
      "name": "json-canvas"
    },
    {
      "description": "(obsidian) Create and edit Obsidian Bases (.base files) with views, filters, formulas, and summaries. Use when working with .base files, creating database-like views of notes, or when the user mentions Bases, table views, card views, filters, or formulas in Obsidian.",
      "input": null,
      "name": "obsidian-bases"
    },
    {
      "description": "(obsidian) Interact with Obsidian vaults using the Obsidian CLI to read, create, search, and manage notes, tasks, properties, and more. Also supports plugin and theme development with commands to reload plugins, run JavaScript, capture errors, take screenshots, and inspect the DOM. Use when the user asks to interact with their Obsidian vault, manage notes, search vault content, perform vault operations from the command line, or develop and debug Obsidian plugins and themes.",
      "input": null,
      "name": "obsidian-cli"
    },
    {
      "description": "(obsidian) Create and edit Obsidian Flavored Markdown with wikilinks, embeds, callouts, properties, and other Obsidian-specific syntax. Use when working with .md files in Obsidian, or when the user mentions wikilinks, callouts, frontmatter, tags, embeds, or Obsidian notes.",
      "input": null,
      "name": "obsidian-markdown"
    },
    {
      "description": "Push a React design system to claude.ai/design. This runs a converter that bundles the real component code (from Storybook or a bare package) and uploads it. Use when the user runs /design-sync or says \"sync my design system to Claude Design\".",
      "input": {
        "hint": "[<project hint, e.g. \"Acme DS\">]"
      },
      "name": "design-sync"
    },
    {
      "description": "Use this skill to configure the Claude Code harness via settings.json. Automated behaviors (\"from now on when X\", \"each time X\", \"whenever X\", \"before/after X\") require hooks configured in settings.json - the harness executes these, not Claude, so memory/preferences cannot fulfill them. Also use for: permissions (\"allow X\", \"add permission\", \"move permission to\"), env vars (\"set X=Y\"), hook troubleshooting, or any changes to settings.json/settings.local.json files. Examples: \"allow npm commands\", \"add bq permission to global settings\", \"move permission to user settings\", \"set DEBUG=true\", \"when claude stops show X\". For simple settings like theme/model, suggest the /config command.",
      "input": null,
      "name": "update-config"
    },
    {
      "description": "Verify that a code change actually does what it's supposed to by running the app and observing behavior. Use when asked to verify a PR, confirm a fix works, test a change manually, check that a feature works, or validate local changes before pushing.",
      "input": null,
      "name": "verify"
    },
    {
      "description": "Enable debug logging for this session and help diagnose issues",
      "input": {
        "hint": "[issue description]"
      },
      "name": "debug"
    },
    {
      "description": "Review the current diff for correctness bugs and reuse/simplification/efficiency cleanups at the given effort level (low/medium: fewer, high-confidence findings; high→max: broader coverage, may include uncertain findings; ultra: deep multi-agent review in the cloud (requires claude.ai account access)). Pass --comment to post findings as inline PR comments, or --fix to apply the findings to the working tree after the review.",
      "input": {
        "hint": "[low|medium|high|xhigh|max|ultra] [--fix] [--comment] [<target>]"
      },
      "name": "code-review"
    },
    {
      "description": "Review the changed code for reuse, simplification, efficiency, and altitude cleanups, then apply the fixes. Quality only — it does not hunt for bugs; use /code-review for that.",
      "input": {
        "hint": "[<target>]"
      },
      "name": "simplify"
    },
    {
      "description": "Research and plan a large-scale change, then execute it in parallel across 5–30 isolated worktree agents that each open a PR.",
      "input": {
        "hint": "<instruction>"
      },
      "name": "batch"
    },
    {
      "description": "Scan your transcripts for common read-only Bash and MCP tool calls, then add a prioritized allowlist to project .claude/settings.json to reduce permission prompts.",
      "input": null,
      "name": "fewer-permission-prompts"
    },
    {
      "description": "Run a prompt or slash command on a recurring interval (e.g. /loop 5m /foo). Omit the interval to let the model self-pace.",
      "input": {
        "hint": "[interval] [prompt]"
      },
      "name": "loop"
    },
    {
      "description": "Reference for the Claude API / Anthropic SDK — model ids, pricing, params, streaming, tool use, MCP, agents, caching, token counting, model migration.\nTRIGGER — read BEFORE opening the target file; don't skip because it \"looks like a one-liner\" — whenever: the prompt names Claude/Anthropic in any form (Claude, Anthropic, Fable, Opus, Sonnet, Haiku, `anthropic`, `@anthropic-ai`, `claude-*`, `us.anthropic.*`, `[1m]`); the user asks about an LLM (pricing/model choice/limits/caching) — never answer from memory; OR the task is LLM-shaped with provider unstated (agent/MCP/tool-definition/multi-agent/RAG/LLM-judge/computer-use; generate/summarize/extract/classify/rewrite/converse over NL; debugging refusals/cutoffs/streaming/tool-calls/tokens).\nSKIP only when another provider is being worked on (overrides all triggers): OpenAI/GPT/Gemini/Llama/Mistral/Cohere/Ollama named in the query; OR `grep -rE 'openai|langchain_openai|google.generativeai|genai|mistralai|cohere|ollama'` over the project hits (run this grep FIRST if no provider named — don't Read the file).",
      "input": null,
      "name": "claude-api"
    },
    {
      "description": "Launch and drive this project's app to see a change working. Use when asked to run, start, or screenshot the app, or to confirm a change works in the real app (not just tests). First looks for a project skill that already covers launching the app; otherwise falls back to built-in patterns per project type (CLI, server, TUI, Electron, browser-driven, library).",
      "input": null,
      "name": "run"
    },
    {
      "description": "Author or improve the run-<unit> skill — a per-project skill that tells agents how to build, launch, and drive this project's app. Use when the user asks to set up the project, get it running, write run instructions, or verify build/run steps work from a clean environment.",
      "input": null,
      "name": "run-skill-generator"
    },
    {
      "description": "Free up context by summarizing the conversation so far",
      "input": {
        "hint": "<optional custom summarization instructions>"
      },
      "name": "compact"
    },
    {
      "description": "Set a setting by key",
      "input": {
        "hint": "key=value"
      },
      "name": "config"
    },
    {
      "description": "Show current context usage",
      "input": null,
      "name": "context"
    },
    {
      "description": "Dump the JS heap to ~/Desktop",
      "input": null,
      "name": "heapdump"
    },
    {
      "description": "Initialize a new CLAUDE.md file with codebase documentation",
      "input": null,
      "name": "init"
    },
    {
      "description": "Pick up skills added or changed on disk during this session",
      "input": null,
      "name": "reload-skills"
    },
    {
      "description": "Review a GitHub pull request; for your working diff use /code-review",
      "input": {
        "hint": "[pr number]"
      },
      "name": "review"
    },
    {
      "description": "Complete a security review of the pending changes on the current branch",
      "input": null,
      "name": "security-review"
    },
    {
      "description": "Show session cost, plan usage, and what's contributing to your limits",
      "input": null,
      "name": "usage"
    },
    {
      "description": "Generate a report analyzing your Claude Code sessions",
      "input": null,
      "name": "insights"
    },
    {
      "description": "Set a goal — keep working until the condition is met",
      "input": null,
      "name": "goal"
    },
    {
      "description": "Help teammates ramp on Claude Code with a guide from your usage",
      "input": null,
      "name": "team-onboarding"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "default",
      "description": "Session permission mode",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "description": "Use a model classifier to approve/deny permission prompts",
          "name": "Auto",
          "value": "auto"
        },
        {
          "description": "Standard behavior, prompts for dangerous operations",
          "name": "Default",
          "value": "default"
        },
        {
          "description": "Auto-accept file edit operations",
          "name": "Accept Edits",
          "value": "acceptEdits"
        },
        {
          "description": "Planning mode, no actual tool execution",
          "name": "Plan Mode",
          "value": "plan"
        },
        {
          "description": "Don't prompt for permissions, deny if not pre-approved",
          "name": "Don't Ask",
          "value": "dontAsk"
        },
        {
          "description": "Bypass all permission checks",
          "name": "Bypass Permissions",
          "value": "bypassPermissions"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "default",
      "description": "AI model to use",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "description": "Use the default model (currently Opus 4.8 (1M context)) · $5/$25 per Mtok",
          "name": "Default (recommended)",
          "value": "default"
        },
        {
          "description": "Opus 4.8 with 1M context · Best for everyday, complex tasks · $5/$25 per Mtok",
          "name": "Opus",
          "value": "opus[1m]"
        },
        {
          "description": "Sonnet 4.6 · Efficient for routine tasks · $3/$15 per Mtok",
          "name": "Sonnet",
          "value": "sonnet"
        },
        {
          "description": "Sonnet 4.6 for long sessions · $3/$15 per Mtok",
          "name": "Sonnet (1M context)",
          "value": "sonnet[1m]"
        },
        {
          "description": "Haiku 4.5 · Fastest for quick answers · $1/$5 per Mtok",
          "name": "Haiku",
          "value": "haiku"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "high",
      "description": "Available effort levels for this model",
      "id": "effort",
      "name": "Effort",
      "options": [
        {
          "name": "Default",
          "value": "default"
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
          "name": "Xhigh",
          "value": "xhigh"
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
  "id": "claude-acp",
  "modes": [
    {
      "description": "Use a model classifier to approve/deny permission prompts",
      "id": "auto",
      "name": "Auto"
    },
    {
      "description": "Standard behavior, prompts for dangerous operations",
      "id": "default",
      "name": "Default"
    },
    {
      "description": "Auto-accept file edit operations",
      "id": "acceptEdits",
      "name": "Accept Edits"
    },
    {
      "description": "Planning mode, no actual tool execution",
      "id": "plan",
      "name": "Plan Mode"
    },
    {
      "description": "Don't prompt for permissions, deny if not pre-approved",
      "id": "dontAsk",
      "name": "Don't Ask"
    },
    {
      "description": "Bypass all permission checks",
      "id": "bypassPermissions",
      "name": "Bypass Permissions"
    }
  ],
  "name": "Claude Agent",
  "protocolVersion": 1,
  "version": "0.52.0"
};
