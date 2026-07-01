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
      "embeddedContext": false,
      "image": true
    },
    "sessionCapabilities": {
      "list": {}
    }
  },
  "agentInfo": {
    "name": "cursor",
    "version": "2026.06.24"
  },
  "authMethods": [
    {
      "description": "Authenticate using existing Cursor login credentials. Run 'agent login' first if not logged in.",
      "id": "cursor_login",
      "name": "Cursor Login"
    }
  ],
  "commands": [
    {
      "description": "Copy the last request ID to clipboard",
      "name": "copy-request-id"
    },
    {
      "description": "Pick models via ask_question (multi-select), then parallel Task reviewers (global)",
      "name": "multi-model-review"
    },
    {
      "description": "Find low-info comments, one-off helpers, perf issues, and reuse opportunities. (global)",
      "name": "simplify"
    },
    {
      "description": "Create a detached-head git worktree (optional `branch=<name>` to start from a specific ref); after `/worktree`, keep using each repo's mapped path for the rest of the chat (multi-root: one shared table, first-touch create per repo). Merge with `/apply-worktree`; remove with `/delete-worktree`. (global)",
      "name": "worktree"
    },
    {
      "description": "Apply changes from a detached-head git worktree back into the main worktree as unstaged modifications. Use when the user wants to bring worktree changes back to main. (global)",
      "name": "apply-worktree"
    },
    {
      "description": "Delete a detached-head git worktree. Use when the user wants to remove or clean up a worktree. (global)",
      "name": "delete-worktree"
    },
    {
      "description": "Fan out one task across multiple models and compare results only. Do not apply any run to main. Example: \"/best-of-n opus,codex <task>\". (global)",
      "name": "best-of-n"
    },
    {
      "description": "Keep a PR merge-ready by triaging comments, resolving clear conflicts, and fixing CI in a loop. (builtin skill)",
      "name": "babysit"
    },
    {
      "description": "Create Cursor hooks. Use when you want to create a hook, write hooks.json, add hook scripts, or automate behavior around agent events. (builtin skill)",
      "name": "create-hook"
    },
    {
      "description": "Create Cursor rules for persistent AI guidance. Use when you want to create a rule, add coding standards, set up project conventions, configure file-specific patterns, create RULE.md files, or asks about .cursor/rules/ or AGENTS.md. (builtin skill)",
      "name": "create-rule"
    },
    {
      "description": "Create Cursor Agent Skills. Use when authoring a new skill or asking about SKILL.md structure. (builtin skill)",
      "name": "create-skill"
    },
    {
      "description": "Create custom subagents for specialized AI tasks. Use when you want to create a new type of subagent, set up task-specific agents, configure code reviewers, debuggers, or domain-specific assistants with custom prompts. (builtin skill)",
      "name": "create-subagent"
    },
    {
      "description": "Run a prompt or skill in this session on a recurring or variable interval (e.g. /loop 5m /foo). (builtin skill)",
      "name": "loop"
    },
    {
      "description": "Convert 'Applied intelligently' Cursor rules (.cursor/rules/*.mdc) and slash commands (.cursor/commands/*.md) to Agent Skills format (.cursor/skills/). Use when you want to migrate rules or commands to skills, convert .mdc rules to SKILL.md format, or consolidate commands into the skills directory. (builtin skill)",
      "name": "migrate-to-skills"
    },
    {
      "description": "Guide users building apps, scripts, CI pipelines, or automations on top of the Cursor SDK - TypeScript (`@cursor/sdk`) or Python (`cursor-sdk` / `cursor_sdk`). Use when the user mentions integrating, installing, or writing code against the Cursor SDK; says `Agent.create`, `Agent.prompt`, `Agent.resume`, `agent.send`, `run.stream`, `run.messages`, `CursorAgentError`, `@cursor/sdk`, `cursor-sdk`, or `cursor_sdk`; asks to run Cursor agents programmatically from a script, CI/CD pipeline, GitHub Action, backend service, or other code outside the Cursor IDE; wants to pick between local and cloud runtime, configure MCP servers for an SDK agent, or handle streaming, cancellation, or errors; or is wiring Cursor into an automation, bot, or REST `/v1/agents` migration. Use eagerly rather than answering from memory; the SDK surface evolves and this skill is the source of truth for the external packages. (builtin skill)",
      "name": "sdk"
    },
    {
      "description": "Runs the rest of a /shell request as a literal shell command. Use only when the user explicitly invokes /shell and wants the following text executed directly in the terminal. (builtin skill)",
      "name": "shell"
    },
    {
      "description": "Split current work into small reviewable PRs. Use when the user asks to split a chat, set of changes, branch, or PR. (builtin skill)",
      "name": "split-to-prs"
    },
    {
      "description": "Configure a custom status line in the CLI. Use when the user mentions status line, statusline, statusLine, CLI status bar, prompt footer customization, or wants to add session context above the prompt. (builtin skill)",
      "name": "statusline"
    },
    {
      "description": "View and modify Cursor CLI configuration settings in ~/.cursor/cli-config.json. Use when the user wants to change CLI settings, configure permissions, switch approval mode, enable vim mode, toggle display options, configure sandbox, or manage any CLI preferences. (builtin skill)",
      "name": "update-cli-config"
    },
    {
      "description": "Use when asked to add a Changesets release note, create a .changeset markdown file, choose semver impact, or satisfy a missing changeset check before a pull request. (project skill)",
      "name": "changeset"
    },
    {
      "description": "Automated setup of developer-experience tooling: ESLint, clippy, rustfmt, changesets, husky, lint-staged, GitHub workflows, templates, and commitizen. Supports JS, Rust, Mixed, and Tauri projects. (project skill)",
      "name": "ci"
    },
    {
      "description": "Use when creating a GitHub pull request or merge request from the current branch, especially when a project PR template may exist. Creates the PR with GitHub CLI, verifies it, and arranges a scheduled CI monitor so the MR/PR is followed until required checks pass or a failure needs repair. (project skill)",
      "name": "create-mr"
    },
    {
      "description": "Use when asked to quickly stage all current changes and commit them with an automatically selected commit message. (project skill)",
      "name": "fast-commit"
    },
    {
      "description": "Use when asked to inspect, debug, fix, push, or monitor failing GitHub CI for a pull request or merge request. Fetches PR/MR CI jobs with GitHub CLI (`gh`), applies `superpowers:systematic-debugging` before changing code, verifies the fix locally, pushes the branch, and creates an automation to watch reruns and repeat the fetch/fix/push loop when CI is still failing. (project skill)",
      "name": "fix-ci"
    },
    {
      "description": "Use when asked to create, rewrite, audit, or maintain README, ARCHITECTURE, CONTRIBUTING, TUTORIAL, docs navigation, project options, badges, or documentation signatures. (project skill)",
      "name": "write-docs"
    },
    {
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate pages, interact with\nelements, verify state, diff before/after, take annotated screenshots, test responsive\nlayouts, forms, uploads, dialogs, and capture bug evidence. Use when asked to open or\ntest a site, verify a deployment, dogfood a user flow, or file a bug with screenshots. (gstack)\n (user skill)",
      "name": "gstack"
    },
    {
      "description": "Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to \"auto review\", \"autoplan\", \"run all reviews\", \"review this plan\nautomatically\", or \"make the decisions for me\".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): \"auto plan\", \"automatic review\".\n (user skill)",
      "name": "gstack-autoplan"
    },
    {
      "description": "Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side — compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers \"which model is actually best\nfor this skill?\" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: \"benchmark models\", \"compare models\",\n\"which model is best for X\", \"cross-model comparison\", \"model shootout\". (gstack)\nVoice triggers (speech-to-text aliases): \"compare models\", \"model shootout\", \"which model is best\".\n (user skill)",
      "name": "gstack-benchmark-models"
    },
    {
      "description": "Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: \"performance\", \"benchmark\", \"page speed\", \"lighthouse\", \"web vitals\",\n\"bundle size\", \"load time\". (gstack)\nVoice triggers (speech-to-text aliases): \"speed test\", \"check performance\".\n (user skill)",
      "name": "gstack-benchmark"
    },
    {
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to \"open in browser\", \"test the\nsite\", \"take a screenshot\", or \"dogfood this\". (gstack)\n (user skill)",
      "name": "gstack-browse"
    },
    {
      "description": "Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: \"monitor deploy\", \"canary\", \"post-deploy check\",\n\"watch production\", \"verify deploy\". (gstack)\n (user skill)",
      "name": "gstack-canary"
    },
    {
      "description": "Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to \"be careful\", \"safety mode\",\n\"prod mode\", or \"careful mode\". (gstack)\n (user skill)",
      "name": "gstack-careful"
    },
    {
      "description": "Claude Code CLI wrapper for non-Claude hosts - three modes. Review: independent\ndiff review via claude -p. Challenge: adversarial failure-mode review. Consult:\nask Claude about the repo with read-only file tools. Use when asked for \"claude\nreview\", \"claude challenge\", \"ask claude\", \"second opinion from claude\", or\n\"outside voice\". (gstack)\n (user skill)",
      "name": "gstack-claude"
    },
    {
      "description": "Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off — even across Conductor workspace handoffs.\nUse when asked to \"resume\", \"restore context\", \"where was I\", or\n\"pick up where I left off\". Pair with /context-save.\nFormerly /checkpoint resume — renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack)\n (user skill)",
      "name": "gstack-context-restore"
    },
    {
      "description": "Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to \"save progress\", \"save state\", \"context save\", or\n\"save my work\". Pair with /context-restore to resume later.\nFormerly /checkpoint — renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack)\n (user skill)",
      "name": "gstack-context-save"
    },
    {
      "description": "Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: \"security audit\", \"threat model\", \"pentest review\", \"OWASP\", \"CSO review\". (gstack)\nVoice triggers (speech-to-text aliases): \"see-so\", \"see so\", \"security review\", \"security check\", \"vulnerability scan\", \"run security\".\n (user skill)",
      "name": "gstack-cso"
    },
    {
      "description": "Design consultation: understands your product, researches the landscape, proposes a\ncomplete design system (aesthetic, typography, color, layout, spacing, motion), and\ngenerates font+color preview pages. Creates DESIGN.md as your project's design source\nof truth. For existing sites, use /plan-design-review to infer the system instead.\nUse when asked to \"design system\", \"brand guidelines\", or \"create DESIGN.md\".\nProactively suggest when starting a new project's UI with no existing\ndesign system or DESIGN.md. (gstack)\n (user skill)",
      "name": "gstack-design-consultation"
    },
    {
      "description": "Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: \"finalize this design\", \"turn this into HTML\",\n\"build me a page\", \"implement this design\", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): \"build the design\", \"code the mockup\", \"make it real\".\n (user skill)",
      "name": "gstack-design-html"
    },
    {
      "description": "Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,\nAI slop patterns, and slow interactions — then fixes them. Iteratively fixes issues\nin source code, committing each fix atomically and re-verifying with before/after\nscreenshots. For plan-mode design review (before implementation), use /plan-design-review.\nUse when asked to \"audit the design\", \"visual QA\", \"check if it looks good\", or \"design polish\".\nProactively suggest when the user mentions visual inconsistencies or\nwants to polish the look of a live site. (gstack)\n (user skill)",
      "name": "gstack-design-review"
    },
    {
      "description": "Design shotgun: generate multiple AI design variants, open a comparison board,\ncollect structured feedback, and iterate. Standalone design exploration you can\nrun anytime. Use when: \"explore designs\", \"show me options\", \"design variants\",\n\"visual brainstorm\", or \"I don't like how this looks\".\nProactively suggest when the user describes a UI feature but hasn't seen\nwhat it could look like. (gstack)\n (user skill)",
      "name": "gstack-design-shotgun"
    },
    {
      "description": "Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n\"test the DX\", \"DX audit\", \"developer experience test\", or \"try the\nonboarding\". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): \"dx audit\", \"test the developer experience\", \"try the onboarding\", \"developer experience test\".\n (user skill)",
      "name": "gstack-devex-review"
    },
    {
      "description": "Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to \"update the docs\", \"sync documentation\", or \"post-ship docs\".\nProactively suggest after a PR is merged or code is shipped. (gstack)\n (user skill)",
      "name": "gstack-document-release"
    },
    {
      "description": "Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n\"fixing\" unrelated code, or when you want to scope changes to one module.\nUse when asked to \"freeze\", \"restrict edits\", \"only edit this folder\",\nor \"lock down edits\". (gstack)\n (user skill)",
      "name": "gstack-freeze"
    },
    {
      "description": "Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to \"guard mode\",\n\"full safety\", \"lock it down\", or \"maximum safety\". (gstack)\n (user skill)",
      "name": "gstack-guard"
    },
    {
      "description": "Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: \"health check\",\n\"code quality\", \"how healthy is the codebase\", \"run all checks\",\n\"quality score\". (gstack)\n (user skill)",
      "name": "gstack-health"
    },
    {
      "description": "Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to \"debug this\", \"fix this bug\", \"why is this broken\",\n\"investigate this error\", or \"root cause analysis\".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, \"it was working\nyesterday\", or is troubleshooting why something stopped working. (gstack)\n (user skill)",
      "name": "gstack-investigate"
    },
    {
      "description": "Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: \"merge\", \"land\", \"deploy\", \"merge and verify\",\n\"land it\", \"ship it to production\". (gstack)\n (user skill)",
      "name": "gstack-land-and-deploy"
    },
    {
      "description": "Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots\nare currently claimed by open PRs, which sibling Conductor workspaces have\nWIP work likely to ship soon, and what slot /ship would pick next. No\nmutations — just a snapshot. Use when asked to \"landing report\", \"what's in\nthe queue\", \"show me open PRs\", or \"which version do I claim next\". (gstack)\n (user skill)",
      "name": "gstack-landing-report"
    },
    {
      "description": "Manage project learnings. Review, search, prune, and export what gstack\nhas learned across sessions. Use when asked to \"what have we learned\",\n\"show learnings\", \"prune stale learnings\", or \"export learnings\".\nProactively suggest when the user asks about past patterns or wonders\n\"didn't we fix this before?\"\n (user skill)",
      "name": "gstack-learn"
    },
    {
      "description": "Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact — a finished artifact. Use when asked to \"make a PDF\", \"export to\nPDF\", \"turn this markdown into a PDF\", or \"generate a document\". (gstack)\nVoice triggers (speech-to-text aliases): \"make this a pdf\", \"make it a pdf\", \"export to pdf\", \"turn this into a pdf\", \"turn this markdown into a pdf\", \"generate a pdf\", \"make a pdf from\", \"pdf this markdown\".\n (user skill)",
      "name": "gstack-make-pdf"
    },
    {
      "description": "YC Office Hours — two modes. Startup mode: six forcing questions that expose\ndemand reality, status quo, desperate specificity, narrowest wedge, observation,\nand future-fit. Builder mode: design thinking brainstorming for side projects,\nhackathons, learning, and open source. Saves a design doc.\nUse when asked to \"brainstorm this\", \"I have an idea\", \"help me think through\nthis\", \"office hours\", or \"is this worth building\".\nProactively invoke this skill (do NOT answer directly) when the user describes\na new product idea, asks whether something is worth building, wants to think\nthrough design decisions for something that doesn't exist yet, or is exploring\na concept before any code is written.\nUse before /plan-ceo-review or /plan-eng-review. (gstack)\n (user skill)",
      "name": "gstack-office-hours"
    },
    {
      "description": "Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to \"open gstack browser\", \"launch browser\", \"connect chrome\",\n\"open chrome\", \"real browser\", \"launch chrome\", \"side panel\", or \"control my browser\".\nVoice triggers (speech-to-text aliases): \"show me the browser\".\n (user skill)",
      "name": "gstack-open-gstack-browser"
    },
    {
      "description": "Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to \"pair agent\", \"connect agent\", \"share browser\", \"remote browser\",\n\"let another agent use my browser\", or \"give browser access\". (gstack)\nVoice triggers (speech-to-text aliases): \"pair agent\", \"connect agent\", \"share my browser\", \"remote browser access\".\n (user skill)",
      "name": "gstack-pair-agent"
    },
    {
      "description": "CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to \"think bigger\", \"expand scope\", \"strategy review\", \"rethink this\",\nor \"is this ambitious enough\".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack)\n (user skill)",
      "name": "gstack-plan-ceo-review"
    },
    {
      "description": "Designer's eye plan review — interactive, like CEO and Eng review.\nRates each design dimension 0-10, explains what would make it a 10,\nthen fixes the plan to get there. Works in plan mode. For live site\nvisual audits, use /design-review. Use when asked to \"review the design plan\"\nor \"design critique\".\nProactively suggest when the user has a plan with UI/UX components that\nshould be reviewed before implementation. (gstack)\n (user skill)",
      "name": "gstack-plan-design-review"
    },
    {
      "description": "Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to \"DX review\", \"developer experience audit\", \"devex review\",\nor \"API design review\".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): \"dx review\", \"developer experience review\", \"devex review\", \"devex audit\", \"API design review\", \"onboarding review\".\n (user skill)",
      "name": "gstack-plan-devex-review"
    },
    {
      "description": "Eng manager-mode plan review. Lock in the execution plan — architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n\"review the architecture\", \"engineering review\", or \"lock in the plan\".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding — to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): \"tech review\", \"technical review\", \"plan engineering review\".\n (user skill)",
      "name": "gstack-plan-eng-review"
    },
    {
      "description": "Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface — no CLI syntax required.\n\nUse when asked to \"tune questions\", \"stop asking me that\", \"too many questions\",\n\"show my profile\", \"what questions have I been asked\", \"show my vibe\",\n\"developer profile\", or \"turn off question tuning\". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time.\n (user skill)",
      "name": "gstack-plan-tune"
    },
    {
      "description": "Report-only QA testing. Systematically tests a web application and produces a\nstructured report with health score, screenshots, and repro steps — but never\nfixes anything. Use when asked to \"just report bugs\", \"qa report only\", or\n\"test but don't fix\". For the full test-fix-verify loop, use /qa instead.\nProactively suggest when the user wants a bug report without any code changes. (gstack)\nVoice triggers (speech-to-text aliases): \"bug report\", \"just check for bugs\".\n (user skill)",
      "name": "gstack-qa-only"
    },
    {
      "description": "Systematically QA test a web application and fix bugs found. Runs QA testing,\nthen iteratively fixes bugs in source code, committing each fix atomically and\nre-verifying. Use when asked to \"qa\", \"QA\", \"test this site\", \"find bugs\",\n\"test and fix\", or \"fix what's broken\".\nProactively suggest when the user says a feature is ready for testing\nor asks \"does this work?\". Three tiers: Quick (critical/high only),\nStandard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,\nfix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)\nVoice triggers (speech-to-text aliases): \"quality check\", \"test the app\", \"run QA\".\n (user skill)",
      "name": "gstack-qa"
    },
    {
      "description": "Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to \"weekly retro\", \"what did we ship\", or \"engineering retrospective\".\nProactively suggest at the end of a work week or sprint. (gstack)\n (user skill)",
      "name": "gstack-retro"
    },
    {
      "description": "Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust\nboundary violations, conditional side effects, and other structural issues. Use when\nasked to \"review this PR\", \"code review\", \"pre-landing review\", or \"check my diff\".\nProactively suggest when the user is about to merge or land code changes. (gstack)\n (user skill)",
      "name": "gstack-review"
    },
    {
      "description": "Pull data from a web page. First call on a new intent prototypes the flow\nvia $B primitives and returns JSON. Subsequent calls on a matching intent\nroute to a codified browser-skill and return in ~200ms. Read-only — for\nmutating flows (form fills, clicks, submissions), use /automate.\nUse when asked to \"scrape\", \"get data from\", \"pull\", \"extract from\", or\n\"what's on\" a page. (gstack)\n (user skill)",
      "name": "gstack-scrape"
    },
    {
      "description": "Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to \"import cookies\",\n\"login to the site\", or \"authenticate the browser\". (gstack)\n (user skill)",
      "name": "gstack-setup-browser-cookies"
    },
    {
      "description": "Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: \"setup deploy\", \"configure deployment\", \"set up land-and-deploy\",\n\"how do I deploy with gstack\", \"add deploy config\".\n (user skill)",
      "name": "gstack-setup-deploy"
    },
    {
      "description": "Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to \"gbrain is running, and this agent\ncan call it.\" Use when: \"setup gbrain\", \"connect gbrain\", \"start\ngbrain\", \"install gbrain\", \"configure gbrain for this machine\". (gstack)\n (user skill)",
      "name": "gstack-setup-gbrain"
    },
    {
      "description": "Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to \"ship\", \"deploy\",\n\"push to main\", \"create a PR\", \"merge and push\", or \"get it deployed\".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)\n (user skill)",
      "name": "gstack-ship"
    },
    {
      "description": "Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to \"skillify\", \"codify\", \"save this scrape\", or\n\"make this permanent\". (gstack)\n (user skill)",
      "name": "gstack-skillify"
    },
    {
      "description": "Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to \"unfreeze\", \"unlock edits\", \"remove freeze\", or\n\"allow all edits\". (gstack)\n (user skill)",
      "name": "gstack-unfreeze"
    },
    {
      "description": "Upgrade gstack to the latest version. Detects global vs vendored install,\nruns the upgrade, and shows what's new. Use when asked to \"upgrade gstack\",\n\"update gstack\", or \"get latest version\".\nVoice triggers (speech-to-text aliases): \"upgrade the tools\", \"update the tools\", \"gee stack upgrade\", \"g stack upgrade\".\n (user skill)",
      "name": "gstack-upgrade"
    },
    {
      "description": "Create, repair, validate, visually QA, and package Codex-compatible animated pets and pet spritesheets from character art, generated images, company or prospect brand cues, or visual references. Use when a user wants a lightweight-worker Codex pet workflow, a non-pixel custom pet style, a prospect or company mascot pet, or a full 8x9 animated pet atlas with transparent unused cells, QA contact sheets, and pet.json packaging. This skill composes the installed $imagegen system skill for visual generation and uses bundled scripts for deterministic spritesheet assembly. (user skill)",
      "name": "hatch-pet"
    },
    {
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim. (user skill)",
      "name": "artifact-static-site"
    },
    {
      "description": "Multi Agents Looping — a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents. (user skill)",
      "name": "deep-investigate"
    },
    {
      "description": "Use when asked to analyze code and add explanatory code annotations, file headers, doc comments, inline comments, or JSX-safe comments. (user skill)",
      "name": "docs-code"
    },
    {
      "description": "Docs-driven delivery workflow. Use when splitting design docs into tasks, creating implementation plans under docs/plan, executing develop/verify/merge cycles, maintaining design doc consistency, or writing UI layout documentation with ASCII diagrams. (user skill)",
      "name": "docs-sprint"
    },
    {
      "description": "Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document — including when they say \"write a report\", \"draft a proposal\", \"make a contract\", \"fill in this form\", \"reformat to match this template\", or any task whose final output is a .docx file. Even if the user doesn't mention \"docx\" explicitly, if the task implies a printable/formal document, use this skill.\n (user skill)",
      "name": "docx"
    },
    {
      "description": "Helps users discover and install agent skills when they ask questions like \"how do I do X\", \"find a skill for X\", \"is there a skill that can...\", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill. (user skill)",
      "name": "find-skills"
    },
    {
      "description": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing. (user skill)",
      "name": "gpt-taste"
    },
    {
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic. (user skill)",
      "name": "high-end-visual-design"
    },
    {
      "description": "Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): \"make a PDF\", \"generate a report\", \"write a proposal\", \"create a resume\", \"beautiful PDF\", \"professional document\", \"cover page\", \"polished PDF\", \"client-ready document\". FILL (complete form fields): \"fill in the form\", \"fill out this PDF\", \"complete the form fields\", \"write values into PDF\", \"what fields does this PDF have\". REFORMAT (apply design to an existing doc): \"reformat this document\", \"apply our style\", \"convert this Markdown/text to PDF\", \"make this doc look good\", \"re-style this PDF\". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n (user skill)",
      "name": "pdf"
    },
    {
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides. (user skill)",
      "name": "pptx-generator"
    },
    {
      "description": "Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Codex's capabilities with specialized knowledge, workflows, or tool integrations. (user skill)",
      "name": "skill-creator"
    },
    {
      "description": "Install Agents skills into $AGENTS_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos). (user skill)",
      "name": "skill-installer"
    },
    {
      "description": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format. (user skill)",
      "name": "xlsx"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "agent",
      "description": "Controls how the agent executes tasks",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "description": "Full agent capabilities with tool access",
          "name": "Agent",
          "value": "agent"
        },
        {
          "description": "Read-only mode for planning and designing before implementation",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Q&A mode - no edits or command execution",
          "name": "Ask",
          "value": "ask"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "claude-opus-4-7[thinking=true,context=300k,effort=xhigh,fast=false]",
      "description": "Controls which model variant is used for responses",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "name": "Auto",
          "value": "default[]"
        },
        {
          "name": "composer-2.5",
          "value": "composer-2.5[fast=true]"
        },
        {
          "name": "claude-opus-4-8",
          "value": "claude-opus-4-8[thinking=true,context=300k,effort=high,fast=false]"
        },
        {
          "name": "gpt-5.5",
          "value": "gpt-5.5[context=272k,reasoning=medium,fast=false]"
        },
        {
          "name": "claude-sonnet-4-6",
          "value": "claude-sonnet-4-6[thinking=true,context=200k,effort=medium]"
        },
        {
          "name": "gpt-5.3-codex",
          "value": "gpt-5.3-codex[reasoning=medium,fast=false]"
        },
        {
          "name": "claude-opus-4-7",
          "value": "claude-opus-4-7[thinking=true,context=300k,effort=xhigh,fast=false]"
        },
        {
          "name": "grok-build-0.1",
          "value": "grok-build-0.1[context=200k]"
        },
        {
          "name": "gpt-5.4",
          "value": "gpt-5.4[context=272k,reasoning=medium,fast=false]"
        },
        {
          "name": "claude-opus-4-6",
          "value": "claude-opus-4-6[thinking=true,context=200k,effort=high]"
        },
        {
          "name": "claude-opus-4-5",
          "value": "claude-opus-4-5[thinking=true]"
        },
        {
          "name": "gpt-5.2",
          "value": "gpt-5.2[reasoning=medium,fast=false]"
        },
        {
          "name": "gemini-3.1-pro",
          "value": "gemini-3.1-pro[]"
        },
        {
          "name": "gpt-5.4-mini",
          "value": "gpt-5.4-mini[reasoning=medium]"
        },
        {
          "name": "gpt-5.4-nano",
          "value": "gpt-5.4-nano[reasoning=medium]"
        },
        {
          "name": "claude-haiku-4-5",
          "value": "claude-haiku-4-5[thinking=true]"
        },
        {
          "name": "grok-4.3",
          "value": "grok-4.3[context=200k]"
        },
        {
          "name": "claude-sonnet-4-5",
          "value": "claude-sonnet-4-5[thinking=true,context=200k]"
        },
        {
          "name": "gpt-5.2-codex",
          "value": "gpt-5.2-codex[reasoning=medium,fast=false]"
        },
        {
          "name": "gpt-5.1-codex-max",
          "value": "gpt-5.1-codex-max[reasoning=medium,fast=false]"
        },
        {
          "name": "gpt-5.1",
          "value": "gpt-5.1[reasoning=medium]"
        },
        {
          "name": "gemini-3-flash",
          "value": "gemini-3-flash[]"
        },
        {
          "name": "gemini-3.5-flash",
          "value": "gemini-3.5-flash[]"
        },
        {
          "name": "gpt-5.1-codex-mini",
          "value": "gpt-5.1-codex-mini[reasoning=medium]"
        },
        {
          "name": "claude-sonnet-4",
          "value": "claude-sonnet-4[thinking=false,context=200k]"
        },
        {
          "name": "gpt-5-mini",
          "value": "gpt-5-mini[]"
        },
        {
          "name": "gemini-2.5-flash",
          "value": "gemini-2.5-flash[]"
        },
        {
          "name": "kimi-k2.5",
          "value": "kimi-k2.5[]"
        },
        {
          "name": "glm-5.2",
          "value": "glm-5.2[reasoning=high]"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "agent",
  "currentModelId": "claude-opus-4-7[thinking=true,context=300k,effort=xhigh,fast=false]",
  "currentReasoningEffortId": null,
  "id": "cursor",
  "models": [
    {
      "id": "default[]",
      "name": "Auto"
    },
    {
      "id": "composer-2.5[fast=true]",
      "name": "composer-2.5"
    },
    {
      "id": "claude-opus-4-8[thinking=true,context=300k,effort=high,fast=false]",
      "name": "claude-opus-4-8"
    },
    {
      "id": "gpt-5.5[context=272k,reasoning=medium,fast=false]",
      "name": "gpt-5.5"
    },
    {
      "id": "claude-sonnet-4-6[thinking=true,context=200k,effort=medium]",
      "name": "claude-sonnet-4-6"
    },
    {
      "id": "gpt-5.3-codex[reasoning=medium,fast=false]",
      "name": "gpt-5.3-codex"
    },
    {
      "id": "claude-opus-4-7[thinking=true,context=300k,effort=xhigh,fast=false]",
      "name": "claude-opus-4-7"
    },
    {
      "id": "grok-build-0.1[context=200k]",
      "name": "grok-build-0.1"
    },
    {
      "id": "gpt-5.4[context=272k,reasoning=medium,fast=false]",
      "name": "gpt-5.4"
    },
    {
      "id": "claude-opus-4-6[thinking=true,context=200k,effort=high]",
      "name": "claude-opus-4-6"
    },
    {
      "id": "claude-opus-4-5[thinking=true]",
      "name": "claude-opus-4-5"
    },
    {
      "id": "gpt-5.2[reasoning=medium,fast=false]",
      "name": "gpt-5.2"
    },
    {
      "id": "gemini-3.1-pro[]",
      "name": "gemini-3.1-pro"
    },
    {
      "id": "gpt-5.4-mini[reasoning=medium]",
      "name": "gpt-5.4-mini"
    },
    {
      "id": "gpt-5.4-nano[reasoning=medium]",
      "name": "gpt-5.4-nano"
    },
    {
      "id": "claude-haiku-4-5[thinking=true]",
      "name": "claude-haiku-4-5"
    },
    {
      "id": "grok-4.3[context=200k]",
      "name": "grok-4.3"
    },
    {
      "id": "claude-sonnet-4-5[thinking=true,context=200k]",
      "name": "claude-sonnet-4-5"
    },
    {
      "id": "gpt-5.2-codex[reasoning=medium,fast=false]",
      "name": "gpt-5.2-codex"
    },
    {
      "id": "gpt-5.1-codex-max[reasoning=medium,fast=false]",
      "name": "gpt-5.1-codex-max"
    },
    {
      "id": "gpt-5.1[reasoning=medium]",
      "name": "gpt-5.1"
    },
    {
      "id": "gemini-3-flash[]",
      "name": "gemini-3-flash"
    },
    {
      "id": "gemini-3.5-flash[]",
      "name": "gemini-3.5-flash"
    },
    {
      "id": "gpt-5.1-codex-mini[reasoning=medium]",
      "name": "gpt-5.1-codex-mini"
    },
    {
      "id": "claude-sonnet-4[thinking=false,context=200k]",
      "name": "claude-sonnet-4"
    },
    {
      "id": "gpt-5-mini[]",
      "name": "gpt-5-mini"
    },
    {
      "id": "gemini-2.5-flash[]",
      "name": "gemini-2.5-flash"
    },
    {
      "id": "kimi-k2.5[]",
      "name": "kimi-k2.5"
    },
    {
      "id": "glm-5.2[reasoning=high]",
      "name": "glm-5.2"
    }
  ],
  "modes": [
    {
      "description": "Full agent capabilities with tool access",
      "id": "agent",
      "name": "Agent"
    },
    {
      "description": "Read-only mode for planning and designing before implementation",
      "id": "plan",
      "name": "Plan"
    },
    {
      "description": "Q&A mode - no edits or command execution",
      "id": "ask",
      "name": "Ask"
    }
  ],
  "name": "Cursor",
  "protocolVersion": 1,
  "reasoningEfforts": [],
  "version": "2026.06.24"
};
