import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "loadSession": true,
    "sessionCapabilities": {
      "list": {}
    }
  },
  "agentInfo": {
    "name": "Cortex Code",
    "version": "1.0.0"
  },
  "authMethods": [],
  "commands": [
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to \"auto review\", \"autoplan\", \"run all reviews\", \"review this plan\nautomatically\", or \"make the decisions for me\".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): \"auto plan\", \"automatic review\".",
      "name": "autoplan"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: \"performance\", \"benchmark\", \"page speed\", \"lighthouse\", \"web vitals\",\n\"bundle size\", \"load time\". (gstack)\nVoice triggers (speech-to-text aliases): \"speed test\", \"check performance\".",
      "name": "benchmark"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side — compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers \"which model is actually best\nfor this skill?\" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: \"benchmark models\", \"compare models\",\n\"which model is best for X\", \"cross-model comparison\", \"model shootout\". (gstack)\nVoice triggers (speech-to-text aliases): \"compare models\", \"model shootout\", \"which model is best\".",
      "name": "benchmark-models"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to \"open in browser\", \"test the\nsite\", \"take a screenshot\", or \"dogfood this\". (gstack)",
      "name": "browse"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: \"monitor deploy\", \"canary\", \"post-deploy check\",\n\"watch production\", \"verify deploy\". (gstack)",
      "name": "canary"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to \"be careful\", \"safety mode\",\n\"prod mode\", or \"careful mode\". (gstack)",
      "name": "careful"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "OpenAI Codex CLI wrapper — three modes. Code review: independent diff review via\ncodex review with pass/fail gate. Challenge: adversarial mode that tries to break\nyour code. Consult: ask codex anything with session continuity for follow-ups.\nThe \"200 IQ autistic developer\" second opinion. Use when asked to \"codex review\",\n\"codex challenge\", \"ask codex\", \"second opinion\", or \"consult codex\". (gstack)\nVoice triggers (speech-to-text aliases): \"code x\", \"code ex\", \"get another opinion\".",
      "name": "codex"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to \"open gstack browser\", \"launch browser\", \"connect chrome\",\n\"open chrome\", \"real browser\", \"launch chrome\", \"side panel\", or \"control my browser\".\nVoice triggers (speech-to-text aliases): \"show me the browser\".",
      "name": "open-gstack-browser"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off — even across Conductor workspace handoffs.\nUse when asked to \"resume\", \"restore context\", \"where was I\", or\n\"pick up where I left off\". Pair with /context-save.\nFormerly /checkpoint resume — renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack)",
      "name": "context-restore"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to \"save progress\", \"save state\", \"context save\", or\n\"save my work\". Pair with /context-restore to resume later.\nFormerly /checkpoint — renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack)",
      "name": "context-save"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: \"security audit\", \"threat model\", \"pentest review\", \"OWASP\", \"CSO review\". (gstack)\nVoice triggers (speech-to-text aliases): \"see-so\", \"see so\", \"security review\", \"security check\", \"vulnerability scan\", \"run security\".",
      "name": "cso"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Design consultation: understands your product, researches the landscape, proposes a\ncomplete design system (aesthetic, typography, color, layout, spacing, motion), and\ngenerates font+color preview pages. Creates DESIGN.md as your project's design source\nof truth. For existing sites, use /plan-design-review to infer the system instead.\nUse when asked to \"design system\", \"brand guidelines\", or \"create DESIGN.md\".\nProactively suggest when starting a new project's UI with no existing\ndesign system or DESIGN.md. (gstack)",
      "name": "design-consultation"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: \"finalize this design\", \"turn this into HTML\",\n\"build me a page\", \"implement this design\", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): \"build the design\", \"code the mockup\", \"make it real\".",
      "name": "design-html"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,\nAI slop patterns, and slow interactions — then fixes them. Iteratively fixes issues\nin source code, committing each fix atomically and re-verifying with before/after\nscreenshots. For plan-mode design review (before implementation), use /plan-design-review.\nUse when asked to \"audit the design\", \"visual QA\", \"check if it looks good\", or \"design polish\".\nProactively suggest when the user mentions visual inconsistencies or\nwants to polish the look of a live site. (gstack)",
      "name": "design-review"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Design shotgun: generate multiple AI design variants, open a comparison board,\ncollect structured feedback, and iterate. Standalone design exploration you can\nrun anytime. Use when: \"explore designs\", \"show me options\", \"design variants\",\n\"visual brainstorm\", or \"I don't like how this looks\".\nProactively suggest when the user describes a UI feature but hasn't seen\nwhat it could look like. (gstack)",
      "name": "design-shotgun"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n\"test the DX\", \"DX audit\", \"developer experience test\", or \"try the\nonboarding\". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): \"dx audit\", \"test the developer experience\", \"try the onboarding\", \"developer experience test\".",
      "name": "devex-review"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to \"update the docs\", \"sync documentation\", or \"post-ship docs\".\nProactively suggest after a PR is merged or code is shipped. (gstack)",
      "name": "document-release"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n\"fixing\" unrelated code, or when you want to scope changes to one module.\nUse when asked to \"freeze\", \"restrict edits\", \"only edit this folder\",\nor \"lock down edits\". (gstack)",
      "name": "freeze"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate pages, interact with\nelements, verify state, diff before/after, take annotated screenshots, test responsive\nlayouts, forms, uploads, dialogs, and capture bug evidence. Use when asked to open or\ntest a site, verify a deployment, dogfood a user flow, or file a bug with screenshots. (gstack)",
      "name": "gstack"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Upgrade gstack to the latest version. Detects global vs vendored install,\nruns the upgrade, and shows what's new. Use when asked to \"upgrade gstack\",\n\"update gstack\", or \"get latest version\".\nVoice triggers (speech-to-text aliases): \"upgrade the tools\", \"update the tools\", \"gee stack upgrade\", \"g stack upgrade\".",
      "name": "gstack-upgrade"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to \"guard mode\",\n\"full safety\", \"lock it down\", or \"maximum safety\". (gstack)",
      "name": "guard"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: \"health check\",\n\"code quality\", \"how healthy is the codebase\", \"run all checks\",\n\"quality score\". (gstack)",
      "name": "health"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to \"debug this\", \"fix this bug\", \"why is this broken\",\n\"investigate this error\", or \"root cause analysis\".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, \"it was working\nyesterday\", or is troubleshooting why something stopped working. (gstack)",
      "name": "investigate"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: \"merge\", \"land\", \"deploy\", \"merge and verify\",\n\"land it\", \"ship it to production\". (gstack)",
      "name": "land-and-deploy"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots\nare currently claimed by open PRs, which sibling Conductor workspaces have\nWIP work likely to ship soon, and what slot /ship would pick next. No\nmutations — just a snapshot. Use when asked to \"landing report\", \"what's in\nthe queue\", \"show me open PRs\", or \"which version do I claim next\". (gstack)",
      "name": "landing-report"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Manage project learnings. Review, search, prune, and export what gstack\nhas learned across sessions. Use when asked to \"what have we learned\",\n\"show learnings\", \"prune stale learnings\", or \"export learnings\".\nProactively suggest when the user asks about past patterns or wonders\n\"didn't we fix this before?\"",
      "name": "learn"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact — a finished artifact. Use when asked to \"make a PDF\", \"export to\nPDF\", \"turn this markdown into a PDF\", or \"generate a document\". (gstack)\nVoice triggers (speech-to-text aliases): \"make this a pdf\", \"make it a pdf\", \"export to pdf\", \"turn this into a pdf\", \"turn this markdown into a pdf\", \"generate a pdf\", \"make a pdf from\", \"pdf this markdown\".",
      "name": "make-pdf"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "YC Office Hours — two modes. Startup mode: six forcing questions that expose\ndemand reality, status quo, desperate specificity, narrowest wedge, observation,\nand future-fit. Builder mode: design thinking brainstorming for side projects,\nhackathons, learning, and open source. Saves a design doc.\nUse when asked to \"brainstorm this\", \"I have an idea\", \"help me think through\nthis\", \"office hours\", or \"is this worth building\".\nProactively invoke this skill (do NOT answer directly) when the user describes\na new product idea, asks whether something is worth building, wants to think\nthrough design decisions for something that doesn't exist yet, or is exploring\na concept before any code is written.\nUse before /plan-ceo-review or /plan-eng-review. (gstack)",
      "name": "office-hours"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to \"pair agent\", \"connect agent\", \"share browser\", \"remote browser\",\n\"let another agent use my browser\", or \"give browser access\". (gstack)\nVoice triggers (speech-to-text aliases): \"pair agent\", \"connect agent\", \"share my browser\", \"remote browser access\".",
      "name": "pair-agent"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to \"think bigger\", \"expand scope\", \"strategy review\", \"rethink this\",\nor \"is this ambitious enough\".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack)",
      "name": "plan-ceo-review"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Designer's eye plan review — interactive, like CEO and Eng review.\nRates each design dimension 0-10, explains what would make it a 10,\nthen fixes the plan to get there. Works in plan mode. For live site\nvisual audits, use /design-review. Use when asked to \"review the design plan\"\nor \"design critique\".\nProactively suggest when the user has a plan with UI/UX components that\nshould be reviewed before implementation. (gstack)",
      "name": "plan-design-review"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to \"DX review\", \"developer experience audit\", \"devex review\",\nor \"API design review\".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): \"dx review\", \"developer experience review\", \"devex review\", \"devex audit\", \"API design review\", \"onboarding review\".",
      "name": "plan-devex-review"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Eng manager-mode plan review. Lock in the execution plan — architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n\"review the architecture\", \"engineering review\", or \"lock in the plan\".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding — to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): \"tech review\", \"technical review\", \"plan engineering review\".",
      "name": "plan-eng-review"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface — no CLI syntax required.\n\nUse when asked to \"tune questions\", \"stop asking me that\", \"too many questions\",\n\"show my profile\", \"what questions have I been asked\", \"show my vibe\",\n\"developer profile\", or \"turn off question tuning\". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time.",
      "name": "plan-tune"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Systematically QA test a web application and fix bugs found. Runs QA testing,\nthen iteratively fixes bugs in source code, committing each fix atomically and\nre-verifying. Use when asked to \"qa\", \"QA\", \"test this site\", \"find bugs\",\n\"test and fix\", or \"fix what's broken\".\nProactively suggest when the user says a feature is ready for testing\nor asks \"does this work?\". Three tiers: Quick (critical/high only),\nStandard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,\nfix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)\nVoice triggers (speech-to-text aliases): \"quality check\", \"test the app\", \"run QA\".",
      "name": "qa"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Report-only QA testing. Systematically tests a web application and produces a\nstructured report with health score, screenshots, and repro steps — but never\nfixes anything. Use when asked to \"just report bugs\", \"qa report only\", or\n\"test but don't fix\". For the full test-fix-verify loop, use /qa instead.\nProactively suggest when the user wants a bug report without any code changes. (gstack)\nVoice triggers (speech-to-text aliases): \"bug report\", \"just check for bugs\".",
      "name": "qa-only"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to \"weekly retro\", \"what did we ship\", or \"engineering retrospective\".\nProactively suggest at the end of a work week or sprint. (gstack)",
      "name": "retro"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust\nboundary violations, conditional side effects, and other structural issues. Use when\nasked to \"review this PR\", \"code review\", \"pre-landing review\", or \"check my diff\".\nProactively suggest when the user is about to merge or land code changes. (gstack)",
      "name": "review"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Pull data from a web page. First call on a new intent prototypes the flow\nvia $B primitives and returns JSON. Subsequent calls on a matching intent\nroute to a codified browser-skill and return in ~200ms. Read-only — for\nmutating flows (form fills, clicks, submissions), use /automate.\nUse when asked to \"scrape\", \"get data from\", \"pull\", \"extract from\", or\n\"what's on\" a page. (gstack)",
      "name": "scrape"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to \"import cookies\",\n\"login to the site\", or \"authenticate the browser\". (gstack)",
      "name": "setup-browser-cookies"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: \"setup deploy\", \"configure deployment\", \"set up land-and-deploy\",\n\"how do I deploy with gstack\", \"add deploy config\".",
      "name": "setup-deploy"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to \"gbrain is running, and this agent\ncan call it.\" Use when: \"setup gbrain\", \"connect gbrain\", \"start\ngbrain\", \"install gbrain\", \"configure gbrain for this machine\". (gstack)",
      "name": "setup-gbrain"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to \"ship\", \"deploy\",\n\"push to main\", \"create a PR\", \"merge and push\", or \"get it deployed\".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)",
      "name": "ship"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to \"skillify\", \"codify\", \"save this scrape\", or\n\"make this permanent\". (gstack)",
      "name": "skillify"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to \"unfreeze\", \"unlock edits\", \"remove freeze\", or\n\"allow all edits\". (gstack)",
      "name": "unfreeze"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "**[REQUIRED]** Use for **ALL** declarative sharing and application packages with TYPE=DATA, (i.e data apps). Share data products across Snowflake accounts with versioning. Default choice when user wants to share data with another account. Also use when converting an existing data share to declarative sharing. Triggers: declarative, data product, native app, data app, data application, share, sharing, another account, cross account, cross region, application package, manifest, marketplace, listing, publish, share a table, share data, manifest from share, share to manifest, generate manifest from share, inspect share, share to yaml, introspect share, convert share, migrate share, existing share, secure share to declarative, upgrade share, future-proof share, multiple shares, combine shares, merge shares, multiple data shares",
      "name": "declarative-sharing"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Attach AI products to Snowflake shares. Use when: adding semantic views, cortex agents, or cortex search services to a share. Triggers: share semantic view, share agent, share cortex search. Invoke this skill to add AI products to a share as a step of sharing AI products or creating a listing to share an AI product.",
      "name": "attach-ai-products-to-share"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Use for **ALL** requests that mention: create, build, set up, debug, fix, troubleshoot, optimize, improve, evaluate, or analyze a DCM project. This is the **REQUIRED** entry point - even if the request seems simple. DO NOT attempt to create DCM projects manually or search for DCM documentation - always invoke this skill first. This skill guides users through creating, auditing, evaluating, and debugging workflows for DCM (Database Change Management) projects. Triggers: DCM, DCM project, Database Change Management, snow dcm, manifest.yml with DEFINE, infrastructure-as-code, three-tier role pattern, database roles, DEFINE TABLE, DEFINE SCHEMA.",
      "name": "dcm"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Set up Single Sign-On (SSO) for Snowflake with your Identity Provider (IdP).\nSupports Microsoft Entra ID (Azure AD), Okta, and other SAML 2.0 providers including\nOneLogin, Ping Identity, Google Workspace, Auth0, Duo, JumpCloud, and more.\nIncludes advanced scenarios: Allowed Interfaces, Auto Redirect, and Snowflake Intelligence tile setup.",
      "name": "setup-snowflake-sso"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Snowflake SQL query execution analysis via ACCOUNT_USAGE views. Triggers: spilling, partition pruning, cache hit rates, clustering keys, search optimization (SOS) candidates, query acceleration (QAS) eligibility, predicate column analysis for clustering/SOS, per-warehouse spill/prune/cache metrics, slow SQL query diagnosis. Not for: cost/credits (cost-intelligence), access audit (data-governance), writing or debugging user SQL.",
      "name": "workload-performance-analysis"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Router for Snowflake notification skills. Routes to integration creation/management, content formatting, or sending. Triggers: notification, notification integration, email notification, webhook, slack, teams, pagerduty, send notification, notification content.",
      "name": "notification"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "**[REQUIRED]** Use for ALL Streamlit tasks: creating, editing, debugging, beautifying, styling, theming, optimizing, or deploying Streamlit applications. Also required for building custom components (inline or packaged), using st.components.v2, or any HTML/JS/CSS component work. Triggers: streamlit, st., dashboard, app.py, beautify, style, CSS, color, background, theme, button, widget styling, custom component, st.components, packaged component, pyproject.toml, asset_dir, CCv2, HTML/JS component.",
      "name": "developing-with-streamlit"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Snowflake alert management - create, alter, suspend, resume alerts. Use when: user wants to create a new alert, modify an existing alert, set up monitoring, suspend or resume alerts. Triggers: create alert, new alert, add alert, alter alert, modify alert, change alert, suspend alert, resume alert, monitor with alert, set up alert, alert condition.",
      "name": "alert"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Snowflake organization management — accounts, org users, org insights, org spending, org security, globalorgadmin. ORGANIZATION_USAGE views, cross-account analytics, org-wide metrics. Use when the user asks about: 30 day summary of my organization, 30-day summary, 30 day summary, accounts in my organization, list accounts, how many accounts, account editions, account regions, account inventory, organization users, organization user groups, executive summary of my org, org overview, org spending, org cost, org security posture, org reliability, org auth posture, org hub, org usage views, trust center, MFA readiness, login failures, warehouse credits, storage trends, edition distribution, who has globalorgadmin, what is globalorgadmin, globalorgadmin role, orgadmin role, organization administrator, org admin, enable orgadmin, disable orgadmin, org admin permissions, account admins, ORGANIZATION_USAGE, org-level, cross-account, org-wide.",
      "name": "organization-management"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Multi-phase team orchestration for feature implementation. Supports two entry paths: explicit user request for teammates, or autonomous complexity-based assessment after entering plan mode. HIGHEST PRIORITY — must be loaded FIRST (before any domain skills) when user asks to use teammates, teams, or parallel agents. Triggers: use teammates, use a team, work in parallel with agents, delegate to teammates, swarm this, swarm, team up on this, team up, orchestrate with subagents, subagent-orchestrated, gated workflow, multi-phase workflow, coordinate agents, spawn workers, worker/verifier, parallel agents, run as a team, investigate with agents, research with agents, explore with agents.",
      "name": "ctx-workflow"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Schema-level data quality monitoring, table comparison, dataset popularity analysis, ad-hoc column quality assessment using Snowflake Data Metric Functions (DMFs) and Access History, and LLM prompt quality scoring and rewriting. Use when user asks about: data quality, schema health, DMF results, quality score, trust my data, quality regression, quality trends, SLA alerting, data metric functions, failing metrics, quality issues, compare tables, data diff, validate migration, table comparison, popular tables, most used tables, unused data, dataset usage, table popularity, listing quality, listing health, listing freshness, provider data quality, consumer data quality, one-time quality check, quick quality scan, check data quality without DMFs, recommend monitors, what should I monitor, DQ coverage gaps, unmonitored tables, DMF coverage report, monitoring health, noisy monitors, silent monitors, misconfigured monitors, DMF cost optimization, investigate DQ incident, why did freshness drop, why did row count drop, correlate violation, multi-dimensional root cause, circuit breaker, pause pipeline on violation, halt bad data propagation, custom DMF, format validation DMF, email format check, value range check, DMF expectations, set threshold, tune DMF threshold, DMF expectation management, attach DMFs, set up DMFs for first time, DMF setup wizard, accepted values, ACCEPTED_VALUES, validate column values, allowed values check, value in set, categorical validation, referential integrity, REFERENTIAL_INTEGRITY_COUNT, orphaned rows, foreign key validation, FK check, cross-table integrity, prompt quality, score my prompt, prompt score, improve prompt, rewrite prompt, prompt linter, prompt engineering, prompt regression, compare prompts, prompt scoring dimensions.",
      "name": "data-quality"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "**[REQUIRED]** Use for ALL requests that mention agents: list, show, create, build, set up, edit, modify, update, delete, drop, remove, download, export, debug, fix, troubleshoot, optimize, improve, evaluate, or analyze a (Cortex) agent. Also use when user wants to: chat with, talk to, converse with, send messages to, have a conversation with an agent, or run a lite/objectless agent. Also use when debugging Snowflake Intelligence with a request ID (SI is powered by Cortex Agents). This is the REQUIRED entry point - even if the request seems simple. DO NOT attempt to manage (Cortex) agents manually - always invoke this skill first.",
      "name": "cortex-agent"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Openflow data integration operations. Openflow is a Snowflake NiFi-based product for data replication and transformation. Use for connector deployment, configuration, diagnostics, and custom flows.",
      "name": "openflow"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Assess, enable, monitor, and manage Error Tables (DML Error Logging) across your Snowflake account. Use when: error tables, error logging, ERROR_TABLE, DML errors, which tables should I enable, which tables have error logging, analyze errors, error table storage, error table retention, clean up errors, monitor errors, error table health, error table report, set up alerting, failed DML queries, string truncation, NOT NULL violation, numeric overflow, check constraint violation, constraint failed.",
      "name": "error-tables-ops"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "ONLY for dbt projects deployed INTO Snowflake as native objects via the `snow dbt` CLI, OR for authoring dbt models using Snowflake-native features (e.g., semantic_view materialization via dbt_semantic_view package). NOT for normal dbt development. Invoke ONLY when the user explicitly mentions: `snow dbt` commands (deploy, execute, list), `EXECUTE DBT PROJECT` SQL, a deployed dbt project object (e.g., DB.SCHEMA.MY_PROJECT), `ALTER/DROP/DESCRIBE/SHOW DBT PROJECT` SQL, scheduling a deployed dbt project with CREATE TASK, generating documentation/catalog/lineage for a deployed project, OR authoring Snowflake-specific dbt materializations (semantic_view, dbt_semantic_view), OR adding a semantic view to an existing dbt project. Do NOT invoke for standard dbt workflows: dbt run, dbt build, dbt test, dbt seed, dbt init, dbt compile, dbt debug, dbt snapshot, dbt deps, dbt clean, dbt retry, dbt ls, profiles.yml, dbt_project.yml, model editing, source freshness, Jinja/macro development, CI/CD pipelines, or any dbt command run from a terminal. The key distinction: this skill is about dbt-as-a-Snowflake-object (snow dbt deploy), not dbt-as-a-CLI-tool (dbt run). Triggers: snow dbt, snow dbt deploy, snow dbt execute, snow dbt list, EXECUTE DBT PROJECT, deployed dbt project, ALTER DBT PROJECT, DROP DBT PROJECT, DESCRIBE DBT PROJECT, SHOW DBT PROJECTS, VERSION$, external-access-integration, dbt project object, migrate, prepare for snowflake, docs generate deployed, documentation deployed project, data catalog deployed, lineage deployed project, generate documentation for deployed, semantic_view materialization, dbt_semantic_view, semantic view in dbt project, add semantic view to dbt, dbt project semantic view, analytical access dbt project.",
      "name": "dbt-projects-on-snowflake"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "**[REQUIRED]** Use for **ALL** requests involving Snowpark Python — writing pipelines, transforming data, loading files, deploying stored procedures/UDFs, OR observability. MUST invoke this skill even for seemingly simple tasks because Snowflake DataFrame semantics differ from Pandas in ways that silently produce wrong results (NULL handling, division by zero, GREATEST, datediff, type casting). Always load this skill BEFORE writing any Snowpark code. Triggers: Snowpark, Python, DataFrame, pipeline, ETL, ingest, transform, load data, CSV, Parquet, JSON, XML, join, aggregate, window function, UDF, UDTF, UDAF, Stored Procedure, deploy, snow snowpark CLI, DBAPI, JDBC, external database, pull data, event table, logging, tracing, trace events, profiler, debug UDF, debug procedure, observability, telemetry, slow procedure, alert on error, monitor.",
      "name": "snowpark-python"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Use for **ALL** Snowflake Native App Framework tasks: creating app packages, writing manifest files, writing setup scripts, sharing data, testing, versioning, publishing, configuring telemetry and health status reporting, monitoring app health and lifecycle events, setting up event sharing, and debugging apps. Also use for **ALL** SPCS (Snowpark Container Services) work within native apps: adding containers, upgrading container services, building and pushing images, writing service specs, configuring compute pools, and managing service lifecycle. This is the **REQUIRED** entry point for any native app work. DO NOT attempt native app development manually - invoke this skill first. Triggers: native app, app package, application package, manifest.yml, setup script, CREATE APPLICATION, Snowflake marketplace, listing, native app framework, build native app, walk me through, guide me, get started, add version, register version, add patch, release channel, release directive, publish app, publish version, upgrade consumers, telemetry, health status, SYSTEM$REPORT_HEALTH_STATUS, log_level, trace_level, event definitions, event sharing, APPLICATION_STATE, lifecycle events, monitor app, debug app, observability, add streamlit, streamlit dashboard, add dashboard, streamlit UI, add UI to native app, native app streamlit, streamlit frontend, get_active_session, default_streamlit, SPCS native app, container native app, native app containers, native app SPCS, add containers, container_services, grant_callback, specification file, version_initializer.",
      "name": "native-app-provider"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Comprehensive Snowflake security investigation and threat detection. Use for: login anomalies, IP analysis, brute force detection, impossible travel, data exfiltration, bulk exports, unauthorized sharing, privilege escalation, RBAC violations, suspicious grants, backdoor accounts. This is the REQUIRED entry point for all security investigations. Routes to specialized sub-skills for focused analysis.",
      "name": "security-investigation"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Use for **ALL** Iceberg table requests in Snowflake. This is the **REQUIRED** entry point for catalog integrations, catalog-linked databases, external volumes, auto-refresh issues, and Snowflake Intelligence. DO NOT work with Iceberg manually - invoke this skill first. Triggers: iceberg, iceberg table, apache iceberg, catalog integration, REST catalog, ICEBERG_REST, glue, AWS glue, glue IRC, lake formation, unity catalog, databricks, polaris, opencatalog, open catalog, onelake, OneLake, microsoft fabric, fabric, fabric lakehouse, onelake REST, SAP, SAP BDC, SAP Business Data Cloud, CLD, catalog-linked database, linked catalog, auto-discover tables, sync tables, LINKED_CATALOG, external volume, storage access, S3, Azure blob, GCS, IAM role, trust policy, Access Denied, 403 error, ALLOW_WRITES, storage permissions, auto-refresh, autorefresh, stale data, refresh stuck, delta direct, snowflake intelligence, text-to-SQL iceberg, query iceberg natural language.",
      "name": "iceberg"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Use for ALL requests that mention: create, build, debug, fix, troubleshoot, optimize, improve, or analyze a semantic view — AND for requests about VQR suggestions, verified queries, verified query representations, seeding/generating queries, suggesting metrics, suggesting filters, recommending metrics/filters/facts, or enriching a semantic view. This is the entry point - even if the request seems simple. DO NOT attempt to create, debug, or generate suggestions for semantic views manually - always invoke this skill first. This skill guides users through creation, setup, auditing, VQR suggestion generation, filter & metric suggestions, and SQL generation debugging workflows for semantic views with Cortex Analyst.",
      "name": "semantic-view"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "End-to-end database migration to Snowflake. Installs the migration plugin and orchestrates the full migration lifecycle. Triggers: migrate, migration, migrate to snowflake, end to end migration, full migration, migration assessment, snowconvert, migrate ETL, migrate data to Snowflake",
      "name": "migration-guide"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Create, replace, alter, drop, describe, and show Snowflake integrations. Covers API, catalog, external access, notification, security, and storage integration types. Use when the user wants to manage integrations or asks about integration SQL commands.",
      "name": "integrations"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Make a listing or data share AI-Ready. Use when: creating semantic views for listings, creating cortex agents for data shares, making data AI-ready. Triggers: AI-ready listing, share agent, data share semantic view, marketplace AI.",
      "name": "ai-data-share"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "**[REQUIRED]** for all Snowflake data governance tasks. Routes to six sub-skills: (1) horizon-catalog — access history, users, roles, grants, permissions, query history, compliance, catalog; (2) data-policy — [REQUIRED] masking, row access, projection policies, tag-based masking, protect sensitive data, column/TIMESTAMP masking; (3) sensitive-data-classification — [REQUIRED for ALL classification] PII, classify, data classification, manual/automatic classification, Classification Profile, auto_tag, custom classifiers, regex, semantic/privacy category, IDENTIFIER, QUASI_IDENTIFIER, SENSITIVE, SYSTEM$CLASSIFY, DATA_CLASSIFICATION_LATEST, GDPR/CCPA/PCI; (4) governance-maturity-score — governance posture, maturity score, assessment, recommendations; (5) observability-maturity-score — data observability, DMF coverage, quality monitoring maturity, lineage usage, observability assessment; (6) object-contacts — [REQUIRED] assign data steward, create contact, object contact, contact report, who owns this table, SET CONTACT, data stewardship. MUST be used for classification or masking tasks — do not answer from general knowledge. horizon-catalog is the fallback. Triggers: governance, access history, permissions, grants, roles, audit, compliance, catalog, masking policy, row access policy, PII, sensitive data, classification, run classification, SYSTEM$CLASSIFY, classifier, classification profile, DATA_CLASSIFICATION_LATEST, detect PII, GDPR, CCPA, PCI, tag sensitive columns, governance maturity score, governance posture, how well governed, data observability, observability maturity, DMF coverage, lineage usage, observability assessment, data steward, object contact, assign contact, who owns this table, contact report, SET CONTACT.",
      "name": "data-governance"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Deploy containerized apps to Snowpark Container Services. Use when: deploying Docker apps, creating SPCS services, pushing images to Snowflake registry, granting role access to SPCS service endpoints. Triggers: SPCS, Snowpark Container Services, deploy to Snowflake, container deployment, grant access to service, grant role access, service role, consumer access, SPCS service, service endpoints.",
      "name": "deploy-to-spcs"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Analyze data lineage and dependencies in Snowflake. Use for: impact analysis, root cause debugging, data discovery, column-level tracing. Triggers: 'what depends on', 'what breaks', 'where does this come from', 'is this trustworthy', 'column lineage'. For quality issues (missing data, wrong values, DMF failures) use the data_quality skill first, then this skill to trace upstream.",
      "name": "lineage"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Use for ANY task that involves writing, running, or debugging SQL against Snowflake tables. Helps find the right table, verify columns exist, avoid timeouts on large tables, and validate joins. Triggers: write a query, sql for, query this table, author sql, build a query, fix this query, how many, how much, show me data, explore this table, describe table, select from.",
      "name": "sql-author"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Build React/Next.js apps with Snowflake data. Use when: building dashboards, creating data apps, making analytics tools.",
      "name": "build-react-app"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "MUST consult whenever any command needs a credential, secret, API key, token, or password — whether discovered from an error, source code, --help output, or any other signal. MUST also consult when the user shares, pastes, or includes a secret value directly in their message. Also use when: the user asks about /secrets, storing credentials, secret scopes, or consent modes. Triggers: secret, secrets, /secrets, API key, credential, token, password, authentication, unauthorized, 401, 403, forbidden, EACCES, permission denied, access denied, missing key, invalid token, auth error, connection refused, login failed, .env, environment variable, env var, keychain, export SECRET, cortex secret list, inline secret injection, pasted secret, shared secret, my key is, my password is, my token is, here is my, use it to.",
      "name": "cortex-secrets"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Use Snowflake Cortex AI Functions for text/image analytics. Use when: classifying content, extracting entities, sentiment analysis, summarizing text, translating, filtering, embedding, parsing documents, redacting PII, aggregating data, document intelligence workflows, content insight workflows, fine-tuning arctic-extract for domain-specific extraction. Triggers: AI_CLASSIFY, AI_COMPLETE, AI_EXTRACT, AI_FILTER, AI_SENTIMENT, AI_SUMMARIZE, AI_TRANSLATE, AI_EMBED, AI_AGG, AI_REDACT, AI_PARSE_DOCUMENT, classify text, data, documents, extract from text, extract text from document, extract text from PDF, extract text from image, extracting, invoices, sentiment, summarize, translate, which AI function, cortex function, process documents, label content, analyze text, OCR, read PDF, read document, get text from PDF, get text from document, pull text from file, extract data from files, extract from my files, process my files, my files, my documents, read my documents, get data from document, file extraction, document processing, file processing, get information from documents, analyze files, parse files, data from PDF, invoice processing, contract extraction, receipt extraction, form extraction, extract fields, document data, file data, stage files, files on stage, PDF extraction, image extraction, document OCR, scan documents, digitize documents, fine-tune, fine-tuning, custom model, train arctic-extract, improve extraction accuracy, domain-specific extraction, FINETUNE, better extraction results.",
      "name": "cortex-ai-functions"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Complete reference guide for Cortex Code (CoCo) CLI. Use when: learning cortex features, understanding commands, troubleshooting setup, exploring Snowflake tools, managing sessions, configuring agents, keyboard shortcuts, MCP integration. Triggers: how to use cortex, cortex guide, cortex help, cortex commands, getting started, snowflake tools, #table syntax, subagents, sessions, resume, fork, rewind, compact, /agents, configuration.",
      "name": "cortex-code-guide"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "**[REQUIRED]** Use for **ALL** Snowflake Interactive Table and Interactive Warehouse operations. Triggers: interactive table, interactive warehouse, low-latency queries, high-concurrency dashboard, TARGET_LAG for interactive.",
      "name": "snowflake-interactive"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Create organizational listings to share data products via Internal Marketplace. Triggers: create data product, share to internal marketplace, publish to internal marketplace, share to other accounts, share with other accounts, organization listing, org listing, share across accounts, internal marketplace, cross-account sharing, share my agent to other accounts.\nWHEN TO USE THIS SKILL: - User wants to share with OTHER ACCOUNTS → Use this skill - User mentions \"internal marketplace\" or \"data product\" (even for same account) → Use this skill\nWHEN TO USE RBAC INSTEAD (not this skill): - User wants to share with roles in SAME account only - User does NOT mention \"internal marketplace\" or \"data product\" or \"listing\" - Example: \"share this table with ANALYST role\" → Use GRANT, not this skill\nWHEN NOT TO USE THIS SKILL: - User wants to migrate an EXISTING direct share to an org listing → Use the direct-share-to-org-listing-migration skill instead - User wants to migrate an EXISTING personalized listing to an org listing → Use the personalized-listing-to-org-listing-migration skill instead - User wants to migrate an EXISTING private data exchange (PDX) listing to an org listing → Use the pdx-listing-to-org-listing-migration skill instead\nKEY: If user says \"share via internal marketplace\" or \"as a data product\" even for same-account roles, use this skill. Otherwise, same-account = regular RBAC grants.",
      "name": "internal-marketplace-org-listing"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Use for **ALL** requests that mention Tri-Secret Secure, customer-managed key operations, or periodic data rekeying in Snowflake. Handles CMK status checks, registration, activation (standard, Postgres, private connectivity), deactivation, key rotation, change history, and periodic data rekeying. DO NOT attempt TSS, CMK, or periodic rekeying operations manually - invoke this skill first. Triggers: tri-secret secure, TSS, CMK, BYOK, encryption key, key rotation, CMK history, activate CMK, deactivate CMK, periodic rekeying, periodic data rekeying, PERIODIC_DATA_REKEYING, data rekey, enable rekeying, disable rekeying.",
      "name": "key-and-secret-management"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "**[REQUIRED]** Use for **ALL** Snowflake Dynamic Table operations: creating, optimizing, monitoring, troubleshooting, and pipeline diagnostics. This is the required entry point for any dynamic table related tasks (DT is an acronym for dynamic table). Triggers: dynamic table, data pipeline, incremental pipeline, DT pipeline, incremental refresh, target lag, UPSTREAM_FAILED, refresh failing, full refresh instead of incremental, DT health, create DT, debug DT, pipeline timeline, Gantt chart, why was DT skipped, trace pipeline, critical path, why was DT skipped.",
      "name": "dynamic-tables"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "**[REQUIRED]** for ALL Snowflake Native App consumer tasks: installing apps from listings as a consumer, configuring installed apps (granting privileges, approving specifications, reviewing references), managing maintenance policies, understanding native app cost and credit usage, adding native apps to budgets. Triggers: native app, install native app, configure native app, approve spec, decline spec, maintenance policy, maintenance window, upgrade schedule, control upgrades, app cost, app budget, app spending, native app cost, native app credits, how much does my app cost.",
      "name": "native-app-consumer"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Create, document, or audit skills for Cortex Code. Use when: creating new skills, capturing session work as skills, reviewing skills. Triggers: create skill, build skill, new skill, summarize session, capture workflow, audit skill, review skill.",
      "name": "skill-development"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Recommend, evaluate, and migrate Snowflake network policies using built-in security procedures. Use when: generating network policy recommendations from access history, evaluating candidate policies before deployment, migrating existing policies to use Snowflake-managed SaaS rules, creating hybrid policies combining custom rules with SaaS rules. Triggers: recommend network policy, evaluate network policy, candidate policy, migrate policy, SaaS rules, hybrid policy.",
      "name": "network-security"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Warehouse configuration, DDL, Gen2 creation/conversion, performance tuning, DML optimization, ETL workloads, sizing, credit-per-hour rates from Credit Consumption Table. Resume behavior, region availability, Snowpark-optimized limitations. Not for cost analytics or historical warehouse spend (cost-intelligence) or org billing (billing).",
      "name": "warehouse"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "**[REQUIRED]** For **ALL** data science and machine learning tasks. This skill should ALWAYS be loaded in even if only a portion of the workflow is related to machine learning. Use when: analyzing data, training models, deploying models to Snowflake, registering models, working with ML workflows, running ML jobs on Snowflake compute, model registry, model service, model inference, log model, deploy pickle file, experiment tracking, model monitoring, ML observability, tracking drift, model performance analysis, distributed training, XGBoost, LightGBM, PyTorch, DPF, distributed partition function, many model training, hyperparameter tuning, HPO, compute pools, train at scale, feature store, feature views, entities, training datasets, online features, pipeline orchestration, DAG, task graph, schedule training, datasets, dataset versioning, DataConnector, ML lineage, model lineage, GET_LINEAGE, trace lineage, forecast, forecasting, time series, anomaly detection, outlier, predict, predictions, backtest, classify, classification, regression, clustering, build a model, create a model, sklearn, scikit-learn, tensorflow, ML, mlops, ray, GPU, deep learning, neural network, explain model, SHAP, Shapley, feature importance, model explainability, interpret model, preprocessing, preprocessor, scaling, encoding, imputation, normalize, transform data before training, preprocessing pipeline. Routes to specialized sub-skills.",
      "name": "machine-learning"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Use for ALL Snowflake Trust Center requests: security findings, scanner analysis, scanner management, finding remediation, severity distribution, CIS benchmarks, Security Essentials, Threat Intelligence, enable/disable scanners, scanner schedules, notifications, webhook, notification integration, at-risk entities, security posture, vulnerability analysis, detection analysis, remediation guidance.",
      "name": "trust-center"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Use for ALL requests related to Snowflake Data Clean Rooms (DCR): clean room, cleanroom, DCR, collaboration(s), view/list collaborations, join/review collaboration, invitation, data offering(s), template(s), register, share table, run analysis, run activation, audience overlap, activation, export segment, create collaboration, create cleanroom, measure overlap. Covers browsing, joining, registering, running analysis/activation, and creating collaborations via the DCR Collaboration API.",
      "name": "data-cleanrooms"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Debug authorization and permission issues in Snowflake. Use when: access denied, insufficient privileges, permission errors,  role issues, missing grants, privilege analysis, least-privilege role creation, find authorizing roles. Triggers: access denied, insufficient privileges, permission error, authorization failed, can't access, missing permission, grant needed, role recommendation, SQL access control error, does not exist or not authorized, EXPLAIN_PRIVILEGES, SYSTEM$ANALYZE_ROLE_ACCESS, SYSTEM$SUGGEST_ROLE_GRANTS.",
      "name": "access-troubleshooter"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Create and edit Workspace notebooks (.ipynb files) for Snowflake. Use when: creating workspace notebooks, editing notebooks, debugging notebook issues, converting code to notebooks, multi-step workflows that combine SQL queries with Python code execution and visualization, step-by-step data analysis requiring both SQL and Python, interactive data exploration with code and charts. Do NOT use for: static SQL-only dashboards (use dashboard skill), Streamlit apps, standalone Python scripts, or stored procedures. Triggers: notebook, .ipynb, snowflake notebook, workspace notebook, create notebook, edit notebook, jupyter, ipynb file, notebook cell, SQL cell, step-by-step analysis with SQL and Python, data exploration with code and visualization, combine SQL and Python.",
      "name": "snowflake-notebooks"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "**[REQUIRED]** Use for **ALL** requests involving Snowflake Postgres, and for general help working with any PostgreSQL database through standard PG tooling (psql, ~/.pg_service.conf, ~/.pgpass, pg_doctor diagnostics). Triggers: 'postgres', 'postgresql', 'pg', 'psql', 'create postgres instance', 'show postgres instances', 'suspend postgres', 'resume postgres', 'reset postgres credentials', 'rotate postgres password', 'import postgres connection', 'postgres network policy', 'postgres health check', 'pg_doctor', 'pg_lake', 'postgres iceberg', 'pg iceberg', 'postgres slow queries', 'cache hit', 'bloat', 'vacuum', 'dead rows', 'postgres locks', 'blocking queries', 'postgres disk usage', 'active postgres queries', 'postgres connection count', 'neon', 'supabase', 'rds postgres', 'aurora postgres', 'azure postgres', 'crunchy bridge', 'external postgres', 'my postgres'. Do NOT use for generic Iceberg / catalog integration / storage integration / data lake requests — those are owned by the `iceberg` skill. Only handle Iceberg when it is scoped to pg_lake (Postgres-resident Iceberg tables).",
      "name": "snowflake-postgres"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Org-level spend in currency via SNOWFLAKE.ORGANIZATION_USAGE. Covers USAGE_IN_CURRENCY_DAILY, REMAINING_BALANCE_DAILY, CONTRACT_ITEMS, RATE_SHEET_DAILY. Invoices, charges, contracts, balance, reconciliation, rate comparison, spend by account. Not for single-account credit analytics (cost-intelligence) or warehouse config (warehouse).",
      "name": "billing"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Account-level cost analytics via SNOWFLAKE.ACCOUNT_USAGE. Credit usage by warehouse, user, service. Budgets, spending limits, custom budgets. Resource monitors, credit quotas, suspend triggers. Anomaly detection, Cortex AI costs, chargeback, storage, serverless, containers, data transfer, top user spend, query cost grouping. Not for org-wide currency spend or multi-account billing (billing/organization-management) or warehouse DDL (warehouse).",
      "name": "cost-intelligence"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Manage Snowflake event tables and telemetry configuration. Use when: viewing/configuring event tables, checking telemetry setup, getting/setting telemetry levels, querying event table data, understanding telemetry formats. Triggers: event table, get event table, show event table, current event table, event table setup, event table configuration, telemetry, telemetry setup, telemetry configuration, telemetry levels, get telemetry, show telemetry, check telemetry, log level, trace level, metric level, logging setup, tracing setup, observability setup, event table format, telemetry format, log format, trace format, metric format.",
      "name": "event-table"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "standard",
      "description": "Controls the agent's operating mode",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "description": "Normal coding mode",
          "name": "Standard",
          "value": "standard"
        },
        {
          "description": "Plan before making changes",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Auto-approve all tool calls",
          "name": "Bypass",
          "value": "bypass"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": null,
  "id": "cortex-code",
  "modes": [],
  "name": "Cortex Code",
  "protocolVersion": 1,
  "version": "1.0.73"
};
