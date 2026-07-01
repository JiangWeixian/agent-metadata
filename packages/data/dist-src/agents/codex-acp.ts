import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
  "agentCapabilities": {
    "auth": {
      "logout": {}
    },
    "loadSession": true,
    "mcpCapabilities": {
      "acp": false,
      "http": true,
      "sse": false
    },
    "promptCapabilities": {
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "additionalDirectories": {},
      "close": {},
      "delete": {},
      "list": {},
      "resume": {}
    }
  },
  "agentInfo": {
    "name": "@agentclientprotocol/codex-acp",
    "title": "Codex",
    "version": "1.0.1"
  },
  "authMethods": [
    {
      "_meta": {
        "api-key": {
          "provider": "openai"
        }
      },
      "description": "Use an API key to authenticate",
      "id": "api-key",
      "name": "API Key"
    },
    {
      "description": "Use ChatGPT to authenticate",
      "id": "chat-gpt",
      "name": "ChatGPT"
    }
  ],
  "commands": [
    {
      "description": "List configured Model Context Protocol (MCP) tools.",
      "input": null,
      "name": "mcp"
    },
    {
      "description": "List available skills.",
      "input": null,
      "name": "skills"
    },
    {
      "description": "Display session configuration and token usage.",
      "input": null,
      "name": "status"
    },
    {
      "description": "Review uncommitted changes, or review with custom instructions.",
      "input": {
        "hint": "optional review instructions"
      },
      "name": "review"
    },
    {
      "description": "Review changes relative to a base branch.",
      "input": {
        "hint": "branch name"
      },
      "name": "review-branch"
    },
    {
      "description": "Review a specific commit.",
      "input": {
        "hint": "commit sha"
      },
      "name": "review-commit"
    },
    {
      "description": "Summarize conversation to avoid hitting the context limit.",
      "input": null,
      "name": "compact"
    },
    {
      "description": "Sign out of Codex. This option is available when you are logged in via ChatGPT.",
      "input": null,
      "name": "logout"
    },
    {
      "description": "Use when asked to add a Changesets release note, create a .changeset markdown file, choose semver impact, or satisfy a missing changeset check before a pull request.",
      "input": null,
      "name": "$changeset"
    },
    {
      "description": "Automated setup of developer-experience tooling: ESLint, clippy, rustfmt, changesets, husky, lint-staged, GitHub workflows, templates, and commitizen. Supports JS, Rust, Mixed, and Tauri projects.",
      "input": null,
      "name": "$ci"
    },
    {
      "description": "Use when creating a GitHub pull request or merge request from the current branch, especially when a project PR template may exist. Creates the PR with GitHub CLI, verifies it, and arranges a scheduled CI monitor so the MR/PR is followed until required checks pass or a failure needs repair.",
      "input": null,
      "name": "$create-mr"
    },
    {
      "description": "Use when asked to quickly stage all current changes and commit them with an automatically selected commit message.",
      "input": null,
      "name": "$fast-commit"
    },
    {
      "description": "Use when asked to inspect, debug, fix, push, or monitor failing GitHub CI for a pull request or merge request. Fetches PR/MR CI jobs with GitHub CLI (`gh`), applies `superpowers:systematic-debugging` before changing code, verifies the fix locally, pushes the branch, and creates an automation to watch reruns and repeat the fetch/fix/push loop when CI is still failing.",
      "input": null,
      "name": "$fix-ci"
    },
    {
      "description": "Use when asked to create, rewrite, audit, or maintain README, ARCHITECTURE, CONTRIBUTING, TUTORIAL, docs navigation, project options, badges, or documentation signatures.",
      "input": null,
      "name": "$write-docs"
    },
    {
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "input": null,
      "name": "$artifact-static-site"
    },
    {
      "description": "Auto-review pipeline — reads the full CEO, design, eng, and DX review skills from disk and runs them sequentially with auto-decisions using 6 decision principles. Surfaces taste decisions (close approaches, borderline scope, codex disagreements) at a final approval gate. One command, fully reviewed plan out. Use when asked to \"auto review\", \"autoplan\", \"run all reviews\", \"review this plan automatically\", or \"make the decisions for me\". Proactively suggest when the user has a plan file and wants to run the full review gauntlet without answering 15-30 intermediate questions. (gstack) Voice triggers (speech-to-text aliases): \"auto plan\", \"automatic review\".",
      "input": null,
      "name": "$autoplan"
    },
    {
      "description": "Performance regression detection using the browse daemon. Establishes baselines for page load times, Core Web Vitals, and resource sizes. Compares before/after on every PR. Tracks performance trends over time. Use when: \"performance\", \"benchmark\", \"page speed\", \"lighthouse\", \"web vitals\", \"bundle size\", \"load time\". (gstack) Voice triggers (speech-to-text aliases): \"speed test\", \"check performance\".",
      "input": null,
      "name": "$benchmark"
    },
    {
      "description": "Cross-model benchmark for gstack skills. Runs the same prompt through Claude, GPT (via Codex CLI), and Gemini side-by-side — compares latency, tokens, cost, and optionally quality via LLM judge. Answers \"which model is actually best for this skill?\" with data instead of vibes. Separate from /benchmark, which measures web page performance. Use when: \"benchmark models\", \"compare models\", \"which model is best for X\", \"cross-model comparison\", \"model shootout\". (gstack) Voice triggers (speech-to-text aliases): \"compare models\", \"model shootout\", \"which model is best\".",
      "input": null,
      "name": "$benchmark-models"
    },
    {
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with elements, verify page state, diff before/after actions, take annotated screenshots, check responsive layouts, test forms and uploads, handle dialogs, and assert element states. ~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a user flow, or file a bug with evidence. Use when asked to \"open in browser\", \"test the site\", \"take a screenshot\", or \"dogfood this\". (gstack)",
      "input": null,
      "name": "$browse"
    },
    {
      "description": "Control the in-app Browser. Use to open, navigate, inspect, test, click, type, screenshot, or verify local targets such as localhost, 127.0.0.1, ::1, file://, the current in-app browser tab, and websites shown side by side inside Codex.",
      "input": null,
      "name": "$browser:control-in-app-browser"
    },
    {
      "description": "Post-deploy canary monitoring. Watches the live app for console errors, performance regressions, and page failures using the browse daemon. Takes periodic screenshots, compares against pre-deploy baselines, and alerts on anomalies. Use when: \"monitor deploy\", \"canary\", \"post-deploy check\", \"watch production\", \"verify deploy\". (gstack)",
      "input": null,
      "name": "$canary"
    },
    {
      "description": "Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE, force-push, git reset --hard, kubectl delete, and similar destructive operations. User can override each warning. Use when touching prod, debugging live systems, or working in a shared environment. Use when asked to \"be careful\", \"safety mode\", \"prod mode\", or \"careful mode\". (gstack)",
      "input": null,
      "name": "$careful"
    },
    {
      "description": "Claude Code CLI wrapper for non-Claude hosts - three modes. Review: independent diff review via claude -p. Challenge: adversarial failure-mode review. Consult: ask Claude about the repo with read-only file tools. Use when asked for \"claude review\", \"claude challenge\", \"ask claude\", \"second opinion from claude\", or \"outside voice\". (gstack)",
      "input": null,
      "name": "$claude"
    },
    {
      "description": "Restore working context saved earlier by /context-save. Loads the most recent saved state (across all branches by default) so you can pick up where you left off — even across Conductor workspace handoffs. Use when asked to \"resume\", \"restore context\", \"where was I\", or \"pick up where I left off\". Pair with /context-save. Formerly /checkpoint resume — renamed because Claude Code treats /checkpoint as a native rewind alias in current environments. (gstack)",
      "input": null,
      "name": "$context-restore"
    },
    {
      "description": "Save working context. Captures git state, decisions made, and remaining work so any future session can pick up without losing a beat. Use when asked to \"save progress\", \"save state\", \"context save\", or \"save my work\". Pair with /context-restore to resume later. Formerly /checkpoint — renamed because Claude Code treats /checkpoint as a native rewind alias in current environments, which was shadowing this skill. (gstack)",
      "input": null,
      "name": "$context-save"
    },
    {
      "description": "Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology, dependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain scanning, plus OWASP Top 10, STRIDE threat modeling, and active verification. Two modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep scan, 2/10 bar). Trend tracking across audit runs. Use when: \"security audit\", \"threat model\", \"pentest review\", \"OWASP\", \"CSO review\". (gstack) Voice triggers (speech-to-text aliases): \"see-so\", \"see so\", \"security review\", \"security check\", \"vulnerability scan\", \"run security\".",
      "input": null,
      "name": "$cso"
    },
    {
      "description": "Multi Agents Looping — a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "input": null,
      "name": "$deep-investigate"
    },
    {
      "description": "Design consultation: understands your product, researches the landscape, proposes a complete design system (aesthetic, typography, color, layout, spacing, motion), and generates font+color preview pages. Creates DESIGN.md as your project's design source of truth. For existing sites, use /plan-design-review to infer the system instead. Use when asked to \"design system\", \"brand guidelines\", or \"create DESIGN.md\". Proactively suggest when starting a new project's UI with no existing design system or DESIGN.md. (gstack)",
      "input": null,
      "name": "$design-consultation"
    },
    {
      "description": "Design finalization: generates production-quality Pretext-native HTML/CSS. Works with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review, design review context from /plan-design-review, or from scratch with a user description. Text actually reflows, heights are computed, layouts are dynamic. 30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns for each design type. Use when: \"finalize this design\", \"turn this into HTML\", \"build me a page\", \"implement this design\", or after any planning skill. Proactively suggest when user has approved a design or has a plan ready. (gstack) Voice triggers (speech-to-text aliases): \"build the design\", \"code the mockup\", \"make it real\".",
      "input": null,
      "name": "$design-html"
    },
    {
      "description": "Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems, AI slop patterns, and slow interactions — then fixes them. Iteratively fixes issues in source code, committing each fix atomically and re-verifying with before/after screenshots. For plan-mode design review (before implementation), use /plan-design-review. Use when asked to \"audit the design\", \"visual QA\", \"check if it looks good\", or \"design polish\". Proactively suggest when the user mentions visual inconsistencies or wants to polish the look of a live site. (gstack)",
      "input": null,
      "name": "$design-review"
    },
    {
      "description": "Design shotgun: generate multiple AI design variants, open a comparison board, collect structured feedback, and iterate. Standalone design exploration you can run anytime. Use when: \"explore designs\", \"show me options\", \"design variants\", \"visual brainstorm\", or \"I don't like how this looks\". Proactively suggest when the user describes a UI feature but hasn't seen what it could look like. (gstack)",
      "input": null,
      "name": "$design-shotgun"
    },
    {
      "description": "Live developer experience audit. Uses the browse tool to actually TEST the developer experience: navigates docs, tries the getting started flow, times TTHW, screenshots error messages, evaluates CLI help text. Produces a DX scorecard with evidence. Compares against /plan-devex-review scores if they exist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to \"test the DX\", \"DX audit\", \"developer experience test\", or \"try the onboarding\". Proactively suggest after shipping a developer-facing feature. (gstack) Voice triggers (speech-to-text aliases): \"dx audit\", \"test the developer experience\", \"try the onboarding\", \"developer experience test\".",
      "input": null,
      "name": "$devex-review"
    },
    {
      "description": "Use when asked to analyze code and add explanatory code annotations, file headers, doc comments, inline comments, or JSX-safe comments.",
      "input": null,
      "name": "$docs-code"
    },
    {
      "description": "Docs-driven delivery workflow. Use when splitting design docs into tasks, creating implementation plans under docs/plan, executing develop/verify/merge cycles, maintaining design doc consistency, or writing UI layout documentation with ASCII diagrams.",
      "input": null,
      "name": "$docs-sprint"
    },
    {
      "description": "Post-ship documentation update. Reads all project docs, cross-references the diff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped, polishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when asked to \"update the docs\", \"sync documentation\", or \"post-ship docs\". Proactively suggest after a PR is merged or code is shipped. (gstack)",
      "input": null,
      "name": "$document-release"
    },
    {
      "description": "Create, edit, redline, and comment on `.docx`, Word, and Google Docs-targeted document artifacts inside the container, with a strict render-and-verify workflow. Use `render_docx.py` to generate page PNGs (and optional PDF) for visual QA, then iterate until layout is flawless before delivering the final document.",
      "input": null,
      "name": "$documents:documents"
    },
    {
      "description": "Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document — including when they say \"write a report\", \"draft a proposal\", \"make a contract\", \"fill in this form\", \"reformat to match this template\", or any task whose final output is a .docx file. Even if the user doesn't mention \"docx\" explicitly, if the task implies a printable/formal document, use this skill.",
      "input": null,
      "name": "$docx"
    },
    {
      "description": "Creates and maintains Figma Code Connect template files that map Figma components to code snippets. Use when the user mentions Code Connect, Figma component mapping, design-to-code translation, or asks to create/update .figma.ts or .figma.js files.",
      "input": null,
      "name": "$figma:figma-code-connect"
    },
    {
      "description": "**MANDATORY prerequisite** — you MUST invoke this skill BEFORE every `create_new_file` tool call. NEVER call `create_new_file` directly without loading this skill first. Trigger whenever the user wants a new blank Figma file — a new design, FigJam, or Slides file — or when you need a fresh file before calling `use_figma`. Usage — /figma-create-new-file [editorType] [fileName] (e.g. /figma-create-new-file figjam My Whiteboard, /figma-create-new-file slides Q3 Review)",
      "input": null,
      "name": "$figma:figma-create-new-file"
    },
    {
      "description": "Use this skill alongside figma-use when the task involves translating an application page, view, or multi-section layout into Figma. Triggers: 'write to Figma', 'create in Figma from code', 'push page to Figma', 'take this app/page and build it in Figma', 'create a screen', 'build a landing page in Figma', 'update the Figma screen to match code', 'convert this modal/dialog/drawer/panel to Figma'. This is the preferred workflow skill whenever the user wants to build or update a full page, modal, dialog, drawer, sidebar, panel, or any composed multi-section view in Figma from code or a description. Discovers design system components, variables, and styles from Code Connect files, existing screens, and library search, then imports them and assembles views incrementally section-by-section using design system tokens instead of hardcoded values.",
      "input": null,
      "name": "$figma:figma-generate-design"
    },
    {
      "description": "MANDATORY prerequisite — load this skill BEFORE every `generate_diagram` tool call. NEVER call `generate_diagram` directly without loading this skill first. Trigger whenever the user asks to create, generate, draw, render, sketch, or build a diagram — flowchart, architecture diagram, sequence diagram, ERD or entity-relationship diagram, state diagram or state machine, gantt chart, or timeline. Also trigger when the user mentions Mermaid syntax or wants a system architecture, decision tree, dependency graph, API call flow, auth handshake, schema, or pipeline visualized in FigJam. Routes to type-specific guidance, sets universal Mermaid constraints, and tells you when to use a different diagram type or skip the tool entirely (mindmaps, pie charts, class diagrams, etc.).",
      "input": null,
      "name": "$figma:figma-generate-diagram"
    },
    {
      "description": "Build or update a professional-grade design system in Figma from a codebase. Use when the user wants to create variables/tokens, build component libraries, create individual components with proper variant sets and variable bindings, set up theming (light/dark modes), document foundations, or reconcile gaps between code and Figma. Also use when the user asks to create or generate any component in Figma — even a single one — since components require proper variable foundations, variant states, and design token bindings to be production-quality. This skill teaches WHAT to build and in WHAT ORDER — it complements the `figma-use` skill which teaches HOW to call the Plugin API. Both skills should be loaded together.",
      "input": null,
      "name": "$figma:figma-generate-library"
    },
    {
      "description": "Translates Figma motion and animations into production-ready application code. Use when implementing animation/motion from a Figma design — user mentions \"implement this motion\", \"add animation from Figma\", \"animate this component\", provides a Figma URL whose node is animated, or when `get_design_context` returns motion data or instructs you to call `get_motion_context`.",
      "input": null,
      "name": "$figma:figma-implement-motion"
    },
    {
      "description": "SwiftUI ↔ Figma translation. Use whenever the user mentions Swift, SwiftUI, iOS, iPhone, or iPad — in EITHER direction — translating a Figma design into SwiftUI (design → code), or pushing SwiftUI views / screens / tokens back into a Figma file (code → design). Triggers on phrases like 'implement this Figma design in SwiftUI', 'build this screen in Swift', 'push this SwiftUI view to Figma', 'mirror my Swift code in a Figma file', or whenever a Figma URL appears alongside `.swift` files / an `.xcodeproj`. Routes to a direction-specific reference doc; loads alongside `figma-use` for the code → design path.",
      "input": null,
      "name": "$figma:figma-swiftui"
    },
    {
      "description": "**MANDATORY prerequisite** — you MUST invoke this skill BEFORE every `use_figma` tool call. NEVER call `use_figma` directly without loading this skill first. Skipping it causes common, hard-to-debug failures. Trigger whenever the user wants to perform a write action or a unique read action that requires JavaScript execution in the Figma file context — e.g. create/edit/delete nodes, set up variables or tokens, build components and variants, modify auto-layout or fills, bind variables to properties, or inspect file structure programmatically.",
      "input": null,
      "name": "$figma:figma-use"
    },
    {
      "description": "This skill helps agents use Figma's use_figma MCP tool in the FigJam context. Can be used alongside figma-use which has foundational context for using the use_figma tool.",
      "input": null,
      "name": "$figma:figma-use-figjam"
    },
    {
      "description": "Motion / animation context for the `use_figma` MCP tool — animating Figma nodes via manual keyframes, animation styles, easing, and timeline duration. Load alongside figma-use whenever a task involves adding, editing, or inspecting animation on a node.",
      "input": null,
      "name": "$figma:figma-use-motion"
    },
    {
      "description": "This skill helps agents use Figma's use_figma MCP tool in the Slides context. Can be used alongside figma-use which has foundational context for using the use_figma tool.",
      "input": null,
      "name": "$figma:figma-use-slides"
    },
    {
      "description": "Helps users discover and install agent skills when they ask questions like \"how do I do X\", \"find a skill for X\", \"is there a skill that can...\", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.",
      "input": null,
      "name": "$find-skills"
    },
    {
      "description": "Restrict file edits to a specific directory for the session. Blocks Edit and Write outside the allowed path. Use when debugging to prevent accidentally \"fixing\" unrelated code, or when you want to scope changes to one module. Use when asked to \"freeze\", \"restrict edits\", \"only edit this folder\", or \"lock down edits\". (gstack)",
      "input": null,
      "name": "$freeze"
    },
    {
      "description": "Address actionable GitHub pull request review feedback. Use when the user wants to inspect unresolved review threads, requested changes, or inline review comments on a PR, then implement selected fixes. Use the GitHub app for PR metadata and flat comment reads, and use the bundled GraphQL script via `gh` whenever thread-level state, resolution status, or inline review context matters.",
      "input": null,
      "name": "$github:gh-address-comments"
    },
    {
      "description": "Use when a user asks to debug or fix failing GitHub PR checks that run in GitHub Actions. Use the GitHub app from this plugin for PR metadata and patch context, and use `gh` for Actions check and log inspection before implementing any approved fix.",
      "input": null,
      "name": "$github:gh-fix-ci"
    },
    {
      "description": "Triage and orient GitHub repository, pull request, and issue work through the connected GitHub app. Use when the user asks for general GitHub help, wants PR or issue summaries, or needs repository context before choosing a more specific GitHub workflow.",
      "input": null,
      "name": "$github:github"
    },
    {
      "description": "Publish local changes to GitHub by confirming scope, committing intentionally, pushing the branch, and opening a draft PR through the GitHub app from this plugin, with `gh` used only as a fallback where connector coverage is insufficient.",
      "input": null,
      "name": "$github:yeet"
    },
    {
      "description": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing.",
      "input": null,
      "name": "$gpt-taste"
    },
    {
      "description": "Upgrade gstack to the latest version. Detects global vs vendored install, runs the upgrade, and shows what's new. Use when asked to \"upgrade gstack\", \"update gstack\", or \"get latest version\". Voice triggers (speech-to-text aliases): \"upgrade the tools\", \"update the tools\", \"gee stack upgrade\", \"g stack upgrade\".",
      "input": null,
      "name": "$gstack-upgrade"
    },
    {
      "description": "Full safety mode: destructive command warnings + directory-scoped edits. Combines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with /freeze (blocks edits outside a specified directory). Use for maximum safety when touching prod or debugging live systems. Use when asked to \"guard mode\", \"full safety\", \"lock it down\", or \"maximum safety\". (gstack)",
      "input": null,
      "name": "$guard"
    },
    {
      "description": "Create, repair, validate, visually QA, and package Codex-compatible animated pets and pet spritesheets from character art, generated images, company or prospect brand cues, or visual references. Use when a user wants a lightweight-worker Codex pet workflow, a non-pixel custom pet style, a prospect or company mascot pet, or a full 8x9 animated pet atlas with transparent unused cells, QA contact sheets, and pet.json packaging. This skill composes the installed $imagegen system skill for visual generation and uses bundled scripts for deterministic spritesheet assembly.",
      "input": null,
      "name": "$hatch-pet"
    },
    {
      "description": "Code quality dashboard. Wraps existing project tools (type checker, linter, test runner, dead code detector, shell linter), computes a weighted composite 0-10 score, and tracks trends over time. Use when: \"health check\", \"code quality\", \"how healthy is the codebase\", \"run all checks\", \"quality score\". (gstack)",
      "input": null,
      "name": "$health"
    },
    {
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "input": null,
      "name": "$high-end-visual-design"
    },
    {
      "description": "Systematic debugging with root cause investigation. Four phases: investigate, analyze, hypothesize, implement. Iron Law: no fixes without root cause. Use when asked to \"debug this\", \"fix this bug\", \"why is this broken\", \"investigate this error\", or \"root cause analysis\". Proactively invoke this skill (do NOT debug directly) when the user reports errors, 500 errors, stack traces, unexpected behavior, \"it was working yesterday\", or is troubleshooting why something stopped working. (gstack)",
      "input": null,
      "name": "$investigate"
    },
    {
      "description": "Land and deploy workflow. Merges the PR, waits for CI and deploy, verifies production health via canary checks. Takes over after /ship creates the PR. Use when: \"merge\", \"land\", \"deploy\", \"merge and verify\", \"land it\", \"ship it to production\". (gstack)",
      "input": null,
      "name": "$land-and-deploy"
    },
    {
      "description": "Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots are currently claimed by open PRs, which sibling Conductor workspaces have WIP work likely to ship soon, and what slot /ship would pick next. No mutations — just a snapshot. Use when asked to \"landing report\", \"what's in the queue\", \"show me open PRs\", or \"which version do I claim next\". (gstack)",
      "input": null,
      "name": "$landing-report"
    },
    {
      "description": "Manage project learnings. Review, search, prune, and export what gstack has learned across sessions. Use when asked to \"what have we learned\", \"show learnings\", \"prune stale learnings\", or \"export learnings\". Proactively suggest when the user asks about past patterns or wonders \"didn't we fix this before?\"",
      "input": null,
      "name": "$learn"
    },
    {
      "description": "Turn any markdown file into a publication-quality PDF. Proper 1in margins, intelligent page breaks, page numbers, cover pages, running headers, curly quotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft artifact — a finished artifact. Use when asked to \"make a PDF\", \"export to PDF\", \"turn this markdown into a PDF\", or \"generate a document\". (gstack) Voice triggers (speech-to-text aliases): \"make this a pdf\", \"make it a pdf\", \"export to pdf\", \"turn this into a pdf\", \"turn this markdown into a pdf\", \"generate a pdf\", \"make a pdf from\", \"pdf this markdown\".",
      "input": null,
      "name": "$make-pdf"
    },
    {
      "description": "YC Office Hours — two modes. Startup mode: six forcing questions that expose demand reality, status quo, desperate specificity, narrowest wedge, observation, and future-fit. Builder mode: design thinking brainstorming for side projects, hackathons, learning, and open source. Saves a design doc. Use when asked to \"brainstorm this\", \"I have an idea\", \"help me think through this\", \"office hours\", or \"is this worth building\". Proactively invoke this skill (do NOT answer directly) when the user describes a new product idea, asks whether something is worth building, wants to think through design decisions for something that doesn't exist yet, or is exploring a concept before any code is written. Use before /plan-ceo-review or /plan-eng-review. (gstack)",
      "input": null,
      "name": "$office-hours"
    },
    {
      "description": "Launch GStack Browser — AI-controlled Chromium with the sidebar extension baked in. Opens a visible browser window where you can watch every action in real time. The sidebar shows a live activity feed and chat. Anti-bot stealth built in. Use when asked to \"open gstack browser\", \"launch browser\", \"connect chrome\", \"open chrome\", \"real browser\", \"launch chrome\", \"side panel\", or \"control my browser\". Voice triggers (speech-to-text aliases): \"show me the browser\".",
      "input": null,
      "name": "$open-gstack-browser"
    },
    {
      "description": "Pair a remote AI agent with your browser. One command generates a setup key and prints instructions the other agent can follow to connect. Works with OpenClaw, Hermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent gets its own tab with scoped access (read+write by default, admin on request). Use when asked to \"pair agent\", \"connect agent\", \"share browser\", \"remote browser\", \"let another agent use my browser\", or \"give browser access\". (gstack) Voice triggers (speech-to-text aliases): \"pair agent\", \"connect agent\", \"share my browser\", \"remote browser access\".",
      "input": null,
      "name": "$pair-agent"
    },
    {
      "description": "Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): \"make a PDF\", \"generate a report\", \"write a proposal\", \"create a resume\", \"beautiful PDF\", \"professional document\", \"cover page\", \"polished PDF\", \"client-ready document\". FILL (complete form fields): \"fill in the form\", \"fill out this PDF\", \"complete the form fields\", \"write values into PDF\", \"what fields does this PDF have\". REFORMAT (apply design to an existing doc): \"reformat this document\", \"apply our style\", \"convert this Markdown/text to PDF\", \"make this doc look good\", \"re-style this PDF\". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.",
      "input": null,
      "name": "$pdf"
    },
    {
      "description": "Read, create, inspect, render, and verify PDF files where visual layout matters. Use Poppler rendering plus Python tools such as reportlab, pdfplumber, and pypdf for generation and extraction.",
      "input": null,
      "name": "$pdf:pdf"
    },
    {
      "description": "CEO/founder-mode plan review. Rethink the problem, find the 10-star product, challenge premises, expand scope when it creates a better product. Four modes: SCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick expansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials). Use when asked to \"think bigger\", \"expand scope\", \"strategy review\", \"rethink this\", or \"is this ambitious enough\". Proactively suggest when the user is questioning scope or ambition of a plan, or when the plan feels like it could be thinking bigger. (gstack)",
      "input": null,
      "name": "$plan-ceo-review"
    },
    {
      "description": "Designer's eye plan review — interactive, like CEO and Eng review. Rates each design dimension 0-10, explains what would make it a 10, then fixes the plan to get there. Works in plan mode. For live site visual audits, use /design-review. Use when asked to \"review the design plan\" or \"design critique\". Proactively suggest when the user has a plan with UI/UX components that should be reviewed before implementation. (gstack)",
      "input": null,
      "name": "$plan-design-review"
    },
    {
      "description": "Interactive developer experience plan review. Explores developer personas, benchmarks against competitors, designs magical moments, and traces friction points before scoring. Three modes: DX EXPANSION (competitive advantage), DX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only). Use when asked to \"DX review\", \"developer experience audit\", \"devex review\", or \"API design review\". Proactively suggest when the user has a plan for developer-facing products (APIs, CLIs, SDKs, libraries, platforms, docs). (gstack) Voice triggers (speech-to-text aliases): \"dx review\", \"developer experience review\", \"devex review\", \"devex audit\", \"API design review\", \"onboarding review\".",
      "input": null,
      "name": "$plan-devex-review"
    },
    {
      "description": "Eng manager-mode plan review. Lock in the execution plan — architecture, data flow, diagrams, edge cases, test coverage, performance. Walks through issues interactively with opinionated recommendations. Use when asked to \"review the architecture\", \"engineering review\", or \"lock in the plan\". Proactively suggest when the user has a plan or design doc and is about to start coding — to catch architecture issues before implementation. (gstack) Voice triggers (speech-to-text aliases): \"tech review\", \"technical review\", \"plan engineering review\".",
      "input": null,
      "name": "$plan-eng-review"
    },
    {
      "description": "Self-tuning question sensitivity + developer psychographic for gstack (v1: observational). Review which AskUserQuestion prompts fire across gstack skills, set per-question preferences (never-ask / always-ask / ask-only-for-one-way), inspect the dual-track profile (what you declared vs what your behavior suggests), and enable/disable question tuning. Conversational interface — no CLI syntax required. Use when asked to \"tune questions\", \"stop asking me that\", \"too many questions\", \"show my profile\", \"what questions have I been asked\", \"show my vibe\", \"developer profile\", or \"turn off question tuning\". (gstack) Proactively suggest when the user says the same gstack question has come up before, or when they explicitly override a recommendation for the Nth time.",
      "input": null,
      "name": "$plan-tune"
    },
    {
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "input": null,
      "name": "$pptx-generator"
    },
    {
      "description": "Create or edit PowerPoint or Google Slides decks",
      "input": null,
      "name": "$presentations:Presentations"
    },
    {
      "description": "Systematically QA test a web application and fix bugs found. Runs QA testing, then iteratively fixes bugs in source code, committing each fix atomically and re-verifying. Use when asked to \"qa\", \"QA\", \"test this site\", \"find bugs\", \"test and fix\", or \"fix what's broken\". Proactively suggest when the user says a feature is ready for testing or asks \"does this work?\". Three tiers: Quick (critical/high only), Standard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores, fix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack) Voice triggers (speech-to-text aliases): \"quality check\", \"test the app\", \"run QA\".",
      "input": null,
      "name": "$qa"
    },
    {
      "description": "Report-only QA testing. Systematically tests a web application and produces a structured report with health score, screenshots, and repro steps — but never fixes anything. Use when asked to \"just report bugs\", \"qa report only\", or \"test but don't fix\". For the full test-fix-verify loop, use /qa instead. Proactively suggest when the user wants a bug report without any code changes. (gstack) Voice triggers (speech-to-text aliases): \"bug report\", \"just check for bugs\".",
      "input": null,
      "name": "$qa-only"
    },
    {
      "description": "Weekly engineering retrospective. Analyzes commit history, work patterns, and code quality metrics with persistent history and trend tracking. Team-aware: breaks down per-person contributions with praise and growth areas. Use when asked to \"weekly retro\", \"what did we ship\", or \"engineering retrospective\". Proactively suggest at the end of a work week or sprint. (gstack)",
      "input": null,
      "name": "$retro"
    },
    {
      "description": "Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust boundary violations, conditional side effects, and other structural issues. Use when asked to \"review this PR\", \"code review\", \"pre-landing review\", or \"check my diff\". Proactively suggest when the user is about to merge or land code changes. (gstack)",
      "input": null,
      "name": "$review"
    },
    {
      "description": "Pull data from a web page. First call on a new intent prototypes the flow via $B primitives and returns JSON. Subsequent calls on a matching intent route to a codified browser-skill and return in ~200ms. Read-only — for mutating flows (form fills, clicks, submissions), use /automate. Use when asked to \"scrape\", \"get data from\", \"pull\", \"extract from\", or \"what's on\" a page. (gstack)",
      "input": null,
      "name": "$scrape"
    },
    {
      "description": "Import cookies from your real Chromium browser into the headless browse session. Opens an interactive picker UI where you select which cookie domains to import. Use before QA testing authenticated pages. Use when asked to \"import cookies\", \"login to the site\", or \"authenticate the browser\". (gstack)",
      "input": null,
      "name": "$setup-browser-cookies"
    },
    {
      "description": "Configure deployment settings for /land-and-deploy. Detects your deploy platform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom), production URL, health check endpoints, and deploy status commands. Writes the configuration to CLAUDE.md so all future deploys are automatic. Use when: \"setup deploy\", \"configure deployment\", \"set up land-and-deploy\", \"how do I deploy with gstack\", \"add deploy config\".",
      "input": null,
      "name": "$setup-deploy"
    },
    {
      "description": "Set up gbrain for this coding agent: install the CLI, initialize a local PGLite or Supabase brain, register MCP, capture per-remote trust policy. One command from zero to \"gbrain is running, and this agent can call it.\" Use when: \"setup gbrain\", \"connect gbrain\", \"start gbrain\", \"install gbrain\", \"configure gbrain for this machine\". (gstack)",
      "input": null,
      "name": "$setup-gbrain"
    },
    {
      "description": "Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION, update CHANGELOG, commit, push, create PR. Use when asked to \"ship\", \"deploy\", \"push to main\", \"create a PR\", \"merge and push\", or \"get it deployed\". Proactively invoke this skill (do NOT push/PR directly) when the user says code is ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)",
      "input": null,
      "name": "$ship"
    },
    {
      "description": "Create or update a skill",
      "input": null,
      "name": "$skill-creator"
    },
    {
      "description": "Install curated skills from openai/skills or other repos",
      "input": null,
      "name": "$skill-installer"
    },
    {
      "description": "Codify the most recent successful /scrape flow into a permanent browser-skill on disk. Future /scrape calls with the same intent run the codified script in ~200ms instead of re-driving the page. Walks back through the conversation, synthesizes script.ts + script.test.ts + fixture, runs the test in a temp dir, and asks before committing. Use when asked to \"skillify\", \"codify\", \"save this scrape\", or \"make this permanent\". (gstack)",
      "input": null,
      "name": "$skillify"
    },
    {
      "description": "Use this skill when a user requests to create, modify, analyze, visualize, or work with spreadsheet files (`.xlsx`, `.xls`, `.csv`, `.tsv`) or Google Sheets-targeted spreadsheet artifacts with formulas, formatting, charts, tables, and recalculation.",
      "input": null,
      "name": "$spreadsheets:Spreadsheets"
    },
    {
      "description": "You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation.",
      "input": null,
      "name": "$superpowers:brainstorming"
    },
    {
      "description": "Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies",
      "input": null,
      "name": "$superpowers:dispatching-parallel-agents"
    },
    {
      "description": "Use when you have a written implementation plan to execute in a separate session with review checkpoints",
      "input": null,
      "name": "$superpowers:executing-plans"
    },
    {
      "description": "Use when implementation is complete, all tests pass, and you need to decide how to integrate the work - guides completion of development work by presenting structured options for merge, PR, or cleanup",
      "input": null,
      "name": "$superpowers:finishing-a-development-branch"
    },
    {
      "description": "Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation",
      "input": null,
      "name": "$superpowers:receiving-code-review"
    },
    {
      "description": "Use when completing tasks, implementing major features, or before merging to verify work meets requirements",
      "input": null,
      "name": "$superpowers:requesting-code-review"
    },
    {
      "description": "Use when executing implementation plans with independent tasks in the current session",
      "input": null,
      "name": "$superpowers:subagent-driven-development"
    },
    {
      "description": "Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes",
      "input": null,
      "name": "$superpowers:systematic-debugging"
    },
    {
      "description": "Use when implementing any feature or bugfix, before writing implementation code",
      "input": null,
      "name": "$superpowers:test-driven-development"
    },
    {
      "description": "Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback",
      "input": null,
      "name": "$superpowers:using-git-worktrees"
    },
    {
      "description": "Use when starting any conversation - establishes how to find and use skills, requiring Skill tool invocation before ANY response including clarifying questions",
      "input": null,
      "name": "$superpowers:using-superpowers"
    },
    {
      "description": "Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always",
      "input": null,
      "name": "$superpowers:verification-before-completion"
    },
    {
      "description": "Use when you have a spec or requirements for a multi-step task, before touching code",
      "input": null,
      "name": "$superpowers:writing-plans"
    },
    {
      "description": "Use when creating new skills, editing existing skills, or verifying skills work before deployment",
      "input": null,
      "name": "$superpowers:writing-skills"
    },
    {
      "description": "Create or update a reusable personal Codex artifact-template skill. Use when the user invokes $template-creator or asks in natural language to create a template using, from, or based on an attached Word document, PowerPoint presentation, or Excel workbook, or explicitly asks to edit or update a passed artifact-template skill. Do not use for one-off artifact creation from an existing template.",
      "input": null,
      "name": "$template-creator:template-creator"
    },
    {
      "description": "Clear the freeze boundary set by /freeze, allowing edits to all directories again. Use when you want to widen edit scope without ending the session. Use when asked to \"unfreeze\", \"unlock edits\", \"remove freeze\", or \"allow all edits\". (gstack)",
      "input": null,
      "name": "$unfreeze"
    },
    {
      "description": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format.",
      "input": null,
      "name": "$xlsx"
    },
    {
      "description": "Generate or edit raster images when the task benefits from AI-created bitmap visuals such as photos, illustrations, textures, sprites, mockups, or transparent-background cutouts. Use when Codex should create a brand-new image, transform an existing image, or derive visual variants from references, and the output should be a bitmap asset rather than repo-native code or vector. Do not use when the task is better handled by editing existing SVG/vector/code-native assets, extending an established icon or logo system, or building the visual directly in HTML/CSS/canvas.",
      "input": null,
      "name": "$imagegen"
    },
    {
      "description": "Use when the user asks how to build with OpenAI products or APIs, asks about Codex itself or choosing Codex surfaces, needs up-to-date official documentation with citations, help choosing the latest model for a use case, or model upgrade and prompt-upgrade guidance; use OpenAI docs MCP tools for non-Codex docs questions, use the Codex manual helper first for broad Codex self-knowledge, and restrict fallback browsing to official OpenAI domains.",
      "input": null,
      "name": "$openai-docs"
    },
    {
      "description": "Create and scaffold plugin directories for Codex with a required `.codex-plugin/plugin.json`, optional plugin folders/files, valid manifest defaults, and personal-marketplace entries by default. Use when Codex needs to create a new personal plugin, add optional plugin structure, generate or update marketplace entries for plugin ordering and availability metadata, or update an existing local plugin during development with the CLI-driven cachebuster and reinstall flow.",
      "input": null,
      "name": "$plugin-creator"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "agent",
      "description": "Approval and sandboxing preset for the session",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "description": "Requires approval to edit files and run commands.",
          "name": "Read-only",
          "value": "read-only"
        },
        {
          "description": "Read and edit files, and run commands.",
          "name": "Agent",
          "value": "agent"
        },
        {
          "description": "Codex can edit files outside this workspace and run commands with network access. Exercise caution when using.",
          "name": "Agent (full access)",
          "value": "agent-full-access"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "gpt-5.5",
      "description": "Model Codex uses for the session",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "description": "Frontier model for complex coding, research, and real-world work.",
          "name": "GPT-5.5",
          "value": "gpt-5.5"
        },
        {
          "description": "Strong model for everyday coding.",
          "name": "GPT-5.4",
          "value": "gpt-5.4"
        },
        {
          "description": "Small, fast, and cost-efficient model for simpler coding tasks.",
          "name": "GPT-5.4-Mini",
          "value": "gpt-5.4-mini"
        },
        {
          "description": "Ultra-fast coding model.",
          "name": "GPT-5.3-Codex-Spark",
          "value": "gpt-5.3-codex-spark"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "high",
      "description": "How much reasoning effort the model should use",
      "id": "reasoning_effort",
      "name": "Reasoning effort",
      "options": [
        {
          "description": "Fast responses with lighter reasoning",
          "name": "low",
          "value": "low"
        },
        {
          "description": "Balances speed and reasoning depth for everyday tasks",
          "name": "medium",
          "value": "medium"
        },
        {
          "description": "Greater reasoning depth for complex problems",
          "name": "high",
          "value": "high"
        },
        {
          "description": "Extra high reasoning depth for complex problems",
          "name": "xhigh",
          "value": "xhigh"
        }
      ],
      "type": "select"
    },
    {
      "category": "fast-mode",
      "currentValue": "off",
      "description": "1.5x speed, increased usage",
      "id": "fast-mode",
      "name": "Fast mode",
      "options": [
        {
          "description": "Default speed, normal usage",
          "name": "Off",
          "value": "off"
        },
        {
          "description": "1.5x speed, increased usage",
          "name": "On",
          "value": "on"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "agent",
  "currentModelId": "gpt-5.5",
  "currentReasoningEffortId": "high",
  "id": "codex-acp",
  "models": [
    {
      "description": "Frontier model for complex coding, research, and real-world work.",
      "id": "gpt-5.5",
      "name": "GPT-5.5"
    },
    {
      "description": "Strong model for everyday coding.",
      "id": "gpt-5.4",
      "name": "GPT-5.4"
    },
    {
      "description": "Small, fast, and cost-efficient model for simpler coding tasks.",
      "id": "gpt-5.4-mini",
      "name": "GPT-5.4-Mini"
    },
    {
      "description": "Ultra-fast coding model.",
      "id": "gpt-5.3-codex-spark",
      "name": "GPT-5.3-Codex-Spark"
    }
  ],
  "modes": [
    {
      "description": "Requires approval to edit files and run commands.",
      "id": "read-only",
      "name": "Read-only"
    },
    {
      "description": "Read and edit files, and run commands.",
      "id": "agent",
      "name": "Agent"
    },
    {
      "description": "Codex can edit files outside this workspace and run commands with network access. Exercise caution when using.",
      "id": "agent-full-access",
      "name": "Agent (full access)"
    }
  ],
  "name": "Codex",
  "protocolVersion": 1,
  "reasoningEfforts": [
    {
      "description": "Fast responses with lighter reasoning",
      "id": "low",
      "name": "low"
    },
    {
      "description": "Balances speed and reasoning depth for everyday tasks",
      "id": "medium",
      "name": "medium"
    },
    {
      "description": "Greater reasoning depth for complex problems",
      "id": "high",
      "name": "high"
    },
    {
      "description": "Extra high reasoning depth for complex problems",
      "id": "xhigh",
      "name": "xhigh"
    }
  ],
  "version": "1.0.1"
};
