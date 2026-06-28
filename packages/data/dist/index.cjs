"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// dist-src/index.ts
var index_exports = {};
__export(index_exports, {
  agents: () => agents
});
module.exports = __toCommonJS(index_exports);

// dist-src/agents/amp-acp.ts
var agent = {
  "agentCapabilities": {
    "mcpCapabilities": {
      "http": true,
      "sse": true
    },
    "promptCapabilities": {
      "embeddedContext": true,
      "image": true
    }
  },
  "agentInfo": {
    "name": "amp-acp",
    "title": "Amp ACP Agent",
    "version": "0.8.1"
  },
  "authMethods": [
    {
      "_meta": {
        "terminal-auth": {
          "args": [
            "--setup"
          ],
          "command": "/Volumes/ORICO/Users/jiangwei/projects/agent-metadata/packages/probe/.acp-cache/amp-acp@0.8.1/amp-acp",
          "label": "Amp API Key Setup"
        }
      },
      "description": "Run interactive setup to configure your Amp API key",
      "id": "setup",
      "name": "Amp API Key Setup"
    }
  ],
  "commands": [
    {
      "description": "Generate an AGENTS.md file for the project",
      "name": "init"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "default",
      "description": "Controls whether Amp uses configured permissions or force-allows tool calls.",
      "id": "permission",
      "name": "Permissions",
      "options": [
        {
          "description": "Use Amp's configured behavior. As of Amp Neo, tools run without prompts unless you've opted into permissions.",
          "name": "Default",
          "value": "default"
        },
        {
          "description": "Force-allow every tool call, overriding any configured permissions plugin.",
          "name": "Bypass",
          "value": "bypass"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "smart",
      "description": "Select the Amp SDK execution mode.",
      "id": "amp-mode",
      "name": "Amp Mode",
      "options": [
        {
          "description": "Amp smart mode: maximum capability and autonomy for general coding tasks.",
          "name": "Smart",
          "value": "smart"
        },
        {
          "description": "Amp deep mode: extended reasoning for complex tasks.",
          "name": "Deep",
          "value": "deep"
        },
        {
          "description": "Amp rush mode: fast responses for small, well-defined tasks.",
          "name": "Rush",
          "value": "rush"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "high",
      "description": "Set model reasoning effort for Amp smart mode.",
      "id": "effort",
      "name": "Effort",
      "options": [
        {
          "name": "high",
          "value": "high"
        },
        {
          "name": "xhigh",
          "value": "xhigh"
        },
        {
          "name": "max",
          "value": "max"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": null,
  "id": "amp-acp",
  "modes": [],
  "name": "Amp",
  "protocolVersion": 1,
  "version": "0.8.1"
};

// dist-src/agents/auggie.ts
var agent2 = {
  "agentCapabilities": {
    "loadSession": true,
    "promptCapabilities": {
      "image": true
    },
    "sessionCapabilities": {
      "list": {}
    }
  },
  "agentInfo": {
    "name": "auggie",
    "title": "Auggie Agent",
    "version": "0.31.0 (commit f88dfe3f)"
  },
  "authMethods": [],
  "commands": [],
  "configOptions": [],
  "currentModeId": "default",
  "id": "auggie",
  "modes": [
    {
      "description": "Agent mode: Full access to modify and interact with code",
      "id": "default",
      "name": "Default"
    },
    {
      "description": "Ask a question: Get answers without modifying code",
      "id": "ask",
      "name": "Ask"
    }
  ],
  "name": "Auggie CLI",
  "protocolVersion": 1,
  "version": "0.31.0"
};

// dist-src/agents/autohand.ts
var agent3 = {
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
      "fork": {},
      "list": {},
      "resume": {}
    }
  },
  "agentInfo": {
    "name": "@autohandai/autohand-acp",
    "title": "Autohand CLI",
    "version": "0.2.1"
  },
  "authMethods": [],
  "commands": [
    {
      "description": "Show available commands",
      "name": "help"
    },
    {
      "description": "Start a new conversation",
      "name": "new"
    },
    {
      "description": "Select or change the model",
      "name": "model"
    },
    {
      "description": "Select or change the mode",
      "name": "mode"
    },
    {
      "description": "Resume a previous session",
      "name": "resume"
    },
    {
      "description": "Show and switch between sessions",
      "name": "threads"
    },
    {
      "description": "List recent sessions",
      "name": "sessions"
    },
    {
      "description": "Show current session info",
      "name": "session"
    },
    {
      "description": "Show Autohand status",
      "name": "status"
    },
    {
      "description": "Undo the last file change",
      "name": "undo"
    },
    {
      "description": "Create AGENTS.md file",
      "name": "init"
    },
    {
      "description": "Manage conversation memory",
      "name": "memory"
    },
    {
      "description": "List available skills",
      "name": "skills"
    },
    {
      "description": "Export conversation",
      "name": "export"
    },
    {
      "description": "Manage tool permissions",
      "name": "permissions"
    },
    {
      "description": "Send feedback to Autohand",
      "name": "feedback"
    },
    {
      "description": "List available agents",
      "name": "agents"
    },
    {
      "description": "Manage lifecycle hooks",
      "name": "hooks"
    },
    {
      "description": "Toggle autonomous agent loop",
      "name": "automode"
    },
    {
      "description": "Add additional working directory",
      "name": "add-dir"
    },
    {
      "description": "Remove additional working directory",
      "name": "remove-dir"
    },
    {
      "description": "Share session transcript",
      "name": "share"
    },
    {
      "description": "Manage code formatters",
      "name": "formatters"
    },
    {
      "description": "Run code linting",
      "name": "lint"
    }
  ],
  "configOptions": [
    {
      "currentValue": "normal",
      "description": "Reasoning depth for complex tasks",
      "id": "thinking_level",
      "name": "Thinking",
      "options": [
        {
          "description": "Direct responses, no reasoning",
          "name": "None",
          "value": "none"
        },
        {
          "description": "Standard reasoning",
          "name": "Normal",
          "value": "normal"
        },
        {
          "description": "Deep reasoning for complex tasks",
          "name": "Extended",
          "value": "extended"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": "disabled",
      "description": "Automatically commit changes",
      "id": "auto_commit",
      "name": "Auto-commit",
      "options": [
        {
          "description": "Manual commits only",
          "name": "Disabled",
          "value": "disabled"
        },
        {
          "description": "Auto-commit after changes",
          "name": "Enabled",
          "value": "enabled"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": "disabled",
      "description": "Include conversation history in prompts",
      "id": "include_history",
      "name": "Include History",
      "options": [
        {
          "description": "Start fresh each prompt",
          "name": "Disabled",
          "value": "disabled"
        },
        {
          "description": "Carry context forward",
          "name": "Enabled",
          "value": "enabled"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": "disabled",
      "description": "Autonomous development loop (switches to Unrestricted mode)",
      "id": "auto_mode",
      "name": "Auto-Mode",
      "options": [
        {
          "description": "Interactive mode",
          "name": "Disabled",
          "value": "disabled"
        },
        {
          "description": "Autonomous agent loop",
          "name": "Enabled",
          "value": "enabled"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": "50",
      "description": "Maximum iterations for auto-mode",
      "id": "auto_mode_max_iterations",
      "name": "Max Iterations",
      "options": [
        {
          "description": "Light tasks",
          "name": "25",
          "value": "25"
        },
        {
          "description": "Standard tasks (default)",
          "name": "50",
          "value": "50"
        },
        {
          "description": "Complex tasks",
          "name": "100",
          "value": "100"
        },
        {
          "description": "Extended tasks",
          "name": "200",
          "value": "200"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": "120",
      "description": "Maximum runtime in minutes for auto-mode",
      "id": "auto_mode_max_runtime",
      "name": "Max Runtime",
      "options": [
        {
          "description": "Quick tasks",
          "name": "30 min",
          "value": "30"
        },
        {
          "description": "Standard tasks",
          "name": "1 hour",
          "value": "60"
        },
        {
          "description": "Extended tasks (default)",
          "name": "2 hours",
          "value": "120"
        },
        {
          "description": "Long-running tasks",
          "name": "4 hours",
          "value": "240"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": "10",
      "description": "Maximum cost in dollars for auto-mode",
      "id": "auto_mode_max_cost",
      "name": "Max Cost",
      "options": [
        {
          "description": "Budget limit",
          "name": "$5",
          "value": "5"
        },
        {
          "description": "Standard limit (default)",
          "name": "$10",
          "value": "10"
        },
        {
          "description": "Extended limit",
          "name": "$25",
          "value": "25"
        },
        {
          "description": "High limit",
          "name": "$50",
          "value": "50"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": "0.7",
      "description": "Controls randomness in responses (lower = more focused)",
      "id": "temperature",
      "name": "Temperature",
      "options": [
        {
          "description": "Deterministic, most focused",
          "name": "0.0",
          "value": "0"
        },
        {
          "description": "Low creativity",
          "name": "0.3",
          "value": "0.3"
        },
        {
          "description": "Balanced (default)",
          "name": "0.7",
          "value": "0.7"
        },
        {
          "description": "High creativity",
          "name": "1.0",
          "value": "1.0"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": "enabled",
      "description": "Stream responses in real-time",
      "id": "stream_output",
      "name": "Stream Output",
      "options": [
        {
          "description": "Show responses as they generate",
          "name": "Enabled",
          "value": "enabled"
        },
        {
          "description": "Wait for complete response",
          "name": "Disabled",
          "value": "disabled"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "interactive",
  "id": "autohand",
  "modes": [
    {
      "description": "Ask before each action",
      "id": "interactive",
      "name": "Interactive"
    },
    {
      "description": "Allow all actions",
      "id": "full-access",
      "name": "Full access"
    },
    {
      "description": "Skip all approval prompts",
      "id": "unrestricted",
      "name": "Unrestricted"
    },
    {
      "description": "Autonomous agent loop",
      "id": "auto-mode",
      "name": "Auto-mode"
    },
    {
      "description": "Block dangerous actions",
      "id": "restricted",
      "name": "Restricted"
    },
    {
      "description": "Preview without executing",
      "id": "dry-run",
      "name": "Dry run"
    }
  ],
  "name": "Autohand Code",
  "protocolVersion": 1,
  "version": "0.2.1"
};

// dist-src/agents/claude-acp.ts
var agent4 = {
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
      "description": 'Auto-review pipeline \u2014 reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to "auto review", "autoplan", "run all reviews", "review this plan\nautomatically", or "make the decisions for me".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): "auto plan", "automatic review". (user)',
      "input": null,
      "name": "autoplan"
    },
    {
      "description": 'Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: "performance", "benchmark", "page speed", "lighthouse", "web vitals",\n"bundle size", "load time". (gstack)\nVoice triggers (speech-to-text aliases): "speed test", "check performance". (user)',
      "input": null,
      "name": "benchmark"
    },
    {
      "description": 'Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side \u2014 compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers "which model is actually best\nfor this skill?" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: "benchmark models", "compare models",\n"which model is best for X", "cross-model comparison", "model shootout". (gstack)\nVoice triggers (speech-to-text aliases): "compare models", "model shootout", "which model is best". (user)',
      "input": null,
      "name": "benchmark-models"
    },
    {
      "description": 'Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to "open in browser", "test the\nsite", "take a screenshot", or "dogfood this". (gstack) (user)',
      "input": null,
      "name": "browse"
    },
    {
      "description": 'Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: "monitor deploy", "canary", "post-deploy check",\n"watch production", "verify deploy". (gstack) (user)',
      "input": null,
      "name": "canary"
    },
    {
      "description": 'Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to "be careful", "safety mode",\n"prod mode", or "careful mode". (gstack) (user)',
      "input": null,
      "name": "careful"
    },
    {
      "description": 'OpenAI Codex CLI wrapper \u2014 three modes. Code review: independent diff review via\ncodex review with pass/fail gate. Challenge: adversarial mode that tries to break\nyour code. Consult: ask codex anything with session continuity for follow-ups.\nThe "200 IQ autistic developer" second opinion. Use when asked to "codex review",\n"codex challenge", "ask codex", "second opinion", or "consult codex". (gstack)\nVoice triggers (speech-to-text aliases): "code x", "code ex", "get another opinion". (user)',
      "input": null,
      "name": "codex"
    },
    {
      "description": 'Launch GStack Browser \u2014 AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to "open gstack browser", "launch browser", "connect chrome",\n"open chrome", "real browser", "launch chrome", "side panel", or "control my browser".\nVoice triggers (speech-to-text aliases): "show me the browser". (user)',
      "input": null,
      "name": "open-gstack-browser"
    },
    {
      "description": 'Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off \u2014 even across Conductor workspace handoffs.\nUse when asked to "resume", "restore context", "where was I", or\n"pick up where I left off". Pair with /context-save.\nFormerly /checkpoint resume \u2014 renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack) (user)',
      "input": null,
      "name": "context-restore"
    },
    {
      "description": 'Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to "save progress", "save state", "context save", or\n"save my work". Pair with /context-restore to resume later.\nFormerly /checkpoint \u2014 renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack) (user)',
      "input": null,
      "name": "context-save"
    },
    {
      "description": 'Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: "security audit", "threat model", "pentest review", "OWASP", "CSO review". (gstack)\nVoice triggers (speech-to-text aliases): "see-so", "see so", "security review", "security check", "vulnerability scan", "run security". (user)',
      "input": null,
      "name": "cso"
    },
    {
      "description": `Design consultation: understands your product, researches the landscape, proposes a
complete design system (aesthetic, typography, color, layout, spacing, motion), and
generates font+color preview pages. Creates DESIGN.md as your project's design source
of truth. For existing sites, use /plan-design-review to infer the system instead.
Use when asked to "design system", "brand guidelines", or "create DESIGN.md".
Proactively suggest when starting a new project's UI with no existing
design system or DESIGN.md. (gstack) (user)`,
      "input": null,
      "name": "design-consultation"
    },
    {
      "description": 'Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: "finalize this design", "turn this into HTML",\n"build me a page", "implement this design", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): "build the design", "code the mockup", "make it real". (user)',
      "input": null,
      "name": "design-html"
    },
    {
      "description": `Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,
AI slop patterns, and slow interactions \u2014 then fixes them. Iteratively fixes issues
in source code, committing each fix atomically and re-verifying with before/after
screenshots. For plan-mode design review (before implementation), use /plan-design-review.
Use when asked to "audit the design", "visual QA", "check if it looks good", or "design polish".
Proactively suggest when the user mentions visual inconsistencies or
wants to polish the look of a live site. (gstack) (user)`,
      "input": null,
      "name": "design-review"
    },
    {
      "description": `Design shotgun: generate multiple AI design variants, open a comparison board,
collect structured feedback, and iterate. Standalone design exploration you can
run anytime. Use when: "explore designs", "show me options", "design variants",
"visual brainstorm", or "I don't like how this looks".
Proactively suggest when the user describes a UI feature but hasn't seen
what it could look like. (gstack) (user)`,
      "input": null,
      "name": "design-shotgun"
    },
    {
      "description": 'Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n"test the DX", "DX audit", "developer experience test", or "try the\nonboarding". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): "dx audit", "test the developer experience", "try the onboarding", "developer experience test". (user)',
      "input": null,
      "name": "devex-review"
    },
    {
      "description": 'Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to "update the docs", "sync documentation", or "post-ship docs".\nProactively suggest after a PR is merged or code is shipped. (gstack) (user)',
      "input": null,
      "name": "document-release"
    },
    {
      "description": 'Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n"fixing" unrelated code, or when you want to scope changes to one module.\nUse when asked to "freeze", "restrict edits", "only edit this folder",\nor "lock down edits". (gstack) (user)',
      "input": null,
      "name": "freeze"
    },
    {
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate pages, interact with\nelements, verify state, diff before/after, take annotated screenshots, test responsive\nlayouts, forms, uploads, dialogs, and capture bug evidence. Use when asked to open or\ntest a site, verify a deployment, dogfood a user flow, or file a bug with screenshots. (gstack) (user)",
      "input": null,
      "name": "gstack"
    },
    {
      "description": `Upgrade gstack to the latest version. Detects global vs vendored install,
runs the upgrade, and shows what's new. Use when asked to "upgrade gstack",
"update gstack", or "get latest version".
Voice triggers (speech-to-text aliases): "upgrade the tools", "update the tools", "gee stack upgrade", "g stack upgrade". (user)`,
      "input": null,
      "name": "gstack-upgrade"
    },
    {
      "description": 'Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to "guard mode",\n"full safety", "lock it down", or "maximum safety". (gstack) (user)',
      "input": null,
      "name": "guard"
    },
    {
      "description": 'Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: "health check",\n"code quality", "how healthy is the codebase", "run all checks",\n"quality score". (gstack) (user)',
      "input": null,
      "name": "health"
    },
    {
      "description": 'Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to "debug this", "fix this bug", "why is this broken",\n"investigate this error", or "root cause analysis".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, "it was working\nyesterday", or is troubleshooting why something stopped working. (gstack) (user)',
      "input": null,
      "name": "investigate"
    },
    {
      "description": 'Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: "merge", "land", "deploy", "merge and verify",\n"land it", "ship it to production". (gstack) (user)',
      "input": null,
      "name": "land-and-deploy"
    },
    {
      "description": `Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots
are currently claimed by open PRs, which sibling Conductor workspaces have
WIP work likely to ship soon, and what slot /ship would pick next. No
mutations \u2014 just a snapshot. Use when asked to "landing report", "what's in
the queue", "show me open PRs", or "which version do I claim next". (gstack) (user)`,
      "input": null,
      "name": "landing-report"
    },
    {
      "description": `Manage project learnings. Review, search, prune, and export what gstack
has learned across sessions. Use when asked to "what have we learned",
"show learnings", "prune stale learnings", or "export learnings".
Proactively suggest when the user asks about past patterns or wonders
"didn't we fix this before?" (user)`,
      "input": null,
      "name": "learn"
    },
    {
      "description": 'Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact \u2014 a finished artifact. Use when asked to "make a PDF", "export to\nPDF", "turn this markdown into a PDF", or "generate a document". (gstack)\nVoice triggers (speech-to-text aliases): "make this a pdf", "make it a pdf", "export to pdf", "turn this into a pdf", "turn this markdown into a pdf", "generate a pdf", "make a pdf from", "pdf this markdown". (user)',
      "input": null,
      "name": "make-pdf"
    },
    {
      "description": `YC Office Hours \u2014 two modes. Startup mode: six forcing questions that expose
demand reality, status quo, desperate specificity, narrowest wedge, observation,
and future-fit. Builder mode: design thinking brainstorming for side projects,
hackathons, learning, and open source. Saves a design doc.
Use when asked to "brainstorm this", "I have an idea", "help me think through
this", "office hours", or "is this worth building".
Proactively invoke this skill (do NOT answer directly) when the user describes
a new product idea, asks whether something is worth building, wants to think
through design decisions for something that doesn't exist yet, or is exploring
a concept before any code is written.
Use before /plan-ceo-review or /plan-eng-review. (gstack) (user)`,
      "input": null,
      "name": "office-hours"
    },
    {
      "description": 'Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to "pair agent", "connect agent", "share browser", "remote browser",\n"let another agent use my browser", or "give browser access". (gstack)\nVoice triggers (speech-to-text aliases): "pair agent", "connect agent", "share my browser", "remote browser access". (user)',
      "input": null,
      "name": "pair-agent"
    },
    {
      "description": 'CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to "think bigger", "expand scope", "strategy review", "rethink this",\nor "is this ambitious enough".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack) (user)',
      "input": null,
      "name": "plan-ceo-review"
    },
    {
      "description": `Designer's eye plan review \u2014 interactive, like CEO and Eng review.
Rates each design dimension 0-10, explains what would make it a 10,
then fixes the plan to get there. Works in plan mode. For live site
visual audits, use /design-review. Use when asked to "review the design plan"
or "design critique".
Proactively suggest when the user has a plan with UI/UX components that
should be reviewed before implementation. (gstack) (user)`,
      "input": null,
      "name": "plan-design-review"
    },
    {
      "description": 'Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to "DX review", "developer experience audit", "devex review",\nor "API design review".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): "dx review", "developer experience review", "devex review", "devex audit", "API design review", "onboarding review". (user)',
      "input": null,
      "name": "plan-devex-review"
    },
    {
      "description": 'Eng manager-mode plan review. Lock in the execution plan \u2014 architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n"review the architecture", "engineering review", or "lock in the plan".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding \u2014 to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): "tech review", "technical review", "plan engineering review". (user)',
      "input": null,
      "name": "plan-eng-review"
    },
    {
      "description": 'Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface \u2014 no CLI syntax required.\n\nUse when asked to "tune questions", "stop asking me that", "too many questions",\n"show my profile", "what questions have I been asked", "show my vibe",\n"developer profile", or "turn off question tuning". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time. (user)',
      "input": null,
      "name": "plan-tune"
    },
    {
      "description": `Systematically QA test a web application and fix bugs found. Runs QA testing,
then iteratively fixes bugs in source code, committing each fix atomically and
re-verifying. Use when asked to "qa", "QA", "test this site", "find bugs",
"test and fix", or "fix what's broken".
Proactively suggest when the user says a feature is ready for testing
or asks "does this work?". Three tiers: Quick (critical/high only),
Standard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,
fix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)
Voice triggers (speech-to-text aliases): "quality check", "test the app", "run QA". (user)`,
      "input": null,
      "name": "qa"
    },
    {
      "description": `Report-only QA testing. Systematically tests a web application and produces a
structured report with health score, screenshots, and repro steps \u2014 but never
fixes anything. Use when asked to "just report bugs", "qa report only", or
"test but don't fix". For the full test-fix-verify loop, use /qa instead.
Proactively suggest when the user wants a bug report without any code changes. (gstack)
Voice triggers (speech-to-text aliases): "bug report", "just check for bugs". (user)`,
      "input": null,
      "name": "qa-only"
    },
    {
      "description": 'Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to "weekly retro", "what did we ship", or "engineering retrospective".\nProactively suggest at the end of a work week or sprint. (gstack) (user)',
      "input": null,
      "name": "retro"
    },
    {
      "description": 'Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust\nboundary violations, conditional side effects, and other structural issues. Use when\nasked to "review this PR", "code review", "pre-landing review", or "check my diff".\nProactively suggest when the user is about to merge or land code changes. (gstack) (user)',
      "input": null,
      "name": "review"
    },
    {
      "description": `Pull data from a web page. First call on a new intent prototypes the flow
via $B primitives and returns JSON. Subsequent calls on a matching intent
route to a codified browser-skill and return in ~200ms. Read-only \u2014 for
mutating flows (form fills, clicks, submissions), use /automate.
Use when asked to "scrape", "get data from", "pull", "extract from", or
"what's on" a page. (gstack) (user)`,
      "input": null,
      "name": "scrape"
    },
    {
      "description": 'Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to "import cookies",\n"login to the site", or "authenticate the browser". (gstack) (user)',
      "input": null,
      "name": "setup-browser-cookies"
    },
    {
      "description": 'Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: "setup deploy", "configure deployment", "set up land-and-deploy",\n"how do I deploy with gstack", "add deploy config". (user)',
      "input": null,
      "name": "setup-deploy"
    },
    {
      "description": 'Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to "gbrain is running, and this agent\ncan call it." Use when: "setup gbrain", "connect gbrain", "start\ngbrain", "install gbrain", "configure gbrain for this machine". (gstack) (user)',
      "input": null,
      "name": "setup-gbrain"
    },
    {
      "description": 'Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to "ship", "deploy",\n"push to main", "create a PR", "merge and push", or "get it deployed".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack) (user)',
      "input": null,
      "name": "ship"
    },
    {
      "description": 'Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to "skillify", "codify", "save this scrape", or\n"make this permanent". (gstack) (user)',
      "input": null,
      "name": "skillify"
    },
    {
      "description": 'Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to "unfreeze", "unlock edits", "remove freeze", or\n"allow all edits". (gstack) (user)',
      "input": null,
      "name": "unfreeze"
    },
    {
      "description": "Deep research harness \u2014 fan-out web searches, fetch sources, adversarially verify claims, synthesize a cited report. (dynamic workflow)",
      "input": null,
      "name": "deep-research"
    },
    {
      "description": "(obsidian) Extract clean markdown content from web pages using Defuddle CLI, removing clutter and navigation to save tokens. Use instead of WebFetch when the user provides a URL to read or analyze, for online documentation, articles, blog posts, or any standard web page. Do NOT use for URLs ending in .md \u2014 those are already markdown, use WebFetch directly.",
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
      "description": 'Push a React design system to claude.ai/design. This runs a converter that bundles the real component code (from Storybook or a bare package) and uploads it. Use when the user runs /design-sync or says "sync my design system to Claude Design".',
      "input": {
        "hint": '[<project hint, e.g. "Acme DS">]'
      },
      "name": "design-sync"
    },
    {
      "description": 'Use this skill to configure the Claude Code harness via settings.json. Automated behaviors ("from now on when X", "each time X", "whenever X", "before/after X") require hooks configured in settings.json - the harness executes these, not Claude, so memory/preferences cannot fulfill them. Also use for: permissions ("allow X", "add permission", "move permission to"), env vars ("set X=Y"), hook troubleshooting, or any changes to settings.json/settings.local.json files. Examples: "allow npm commands", "add bq permission to global settings", "move permission to user settings", "set DEBUG=true", "when claude stops show X". For simple settings like theme/model, suggest the /config command.',
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
      "description": "Review the current diff for correctness bugs and reuse/simplification/efficiency cleanups at the given effort level (low/medium: fewer, high-confidence findings; high\u2192max: broader coverage, may include uncertain findings; ultra: deep multi-agent review in the cloud (requires claude.ai account access)). Pass --comment to post findings as inline PR comments, or --fix to apply the findings to the working tree after the review.",
      "input": {
        "hint": "[low|medium|high|xhigh|max|ultra] [--fix] [--comment] [<target>]"
      },
      "name": "code-review"
    },
    {
      "description": "Review the changed code for reuse, simplification, efficiency, and altitude cleanups, then apply the fixes. Quality only \u2014 it does not hunt for bugs; use /code-review for that.",
      "input": {
        "hint": "[<target>]"
      },
      "name": "simplify"
    },
    {
      "description": "Research and plan a large-scale change, then execute it in parallel across 5\u201330 isolated worktree agents that each open a PR.",
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
      "description": "Reference for the Claude API / Anthropic SDK \u2014 model ids, pricing, params, streaming, tool use, MCP, agents, caching, token counting, model migration.\nTRIGGER \u2014 read BEFORE opening the target file; don't skip because it \"looks like a one-liner\" \u2014 whenever: the prompt names Claude/Anthropic in any form (Claude, Anthropic, Fable, Opus, Sonnet, Haiku, `anthropic`, `@anthropic-ai`, `claude-*`, `us.anthropic.*`, `[1m]`); the user asks about an LLM (pricing/model choice/limits/caching) \u2014 never answer from memory; OR the task is LLM-shaped with provider unstated (agent/MCP/tool-definition/multi-agent/RAG/LLM-judge/computer-use; generate/summarize/extract/classify/rewrite/converse over NL; debugging refusals/cutoffs/streaming/tool-calls/tokens).\nSKIP only when another provider is being worked on (overrides all triggers): OpenAI/GPT/Gemini/Llama/Mistral/Cohere/Ollama named in the query; OR `grep -rE 'openai|langchain_openai|google.generativeai|genai|mistralai|cohere|ollama'` over the project hits (run this grep FIRST if no provider named \u2014 don't Read the file).",
      "input": null,
      "name": "claude-api"
    },
    {
      "description": "Launch and drive this project's app to see a change working. Use when asked to run, start, or screenshot the app, or to confirm a change works in the real app (not just tests). First looks for a project skill that already covers launching the app; otherwise falls back to built-in patterns per project type (CLI, server, TUI, Electron, browser-driven, library).",
      "input": null,
      "name": "run"
    },
    {
      "description": "Author or improve the run-<unit> skill \u2014 a per-project skill that tells agents how to build, launch, and drive this project's app. Use when the user asks to set up the project, get it running, write run instructions, or verify build/run steps work from a clean environment.",
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
      "description": "Set a goal \u2014 keep working until the condition is met",
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
          "description": "Use the default model (currently Opus 4.8 (1M context)) \xB7 $5/$25 per Mtok",
          "name": "Default (recommended)",
          "value": "default"
        },
        {
          "description": "Opus 4.8 with 1M context \xB7 Best for everyday, complex tasks \xB7 $5/$25 per Mtok",
          "name": "Opus",
          "value": "opus[1m]"
        },
        {
          "description": "Sonnet 4.6 \xB7 Efficient for routine tasks \xB7 $3/$15 per Mtok",
          "name": "Sonnet",
          "value": "sonnet"
        },
        {
          "description": "Sonnet 4.6 for long sessions \xB7 $3/$15 per Mtok",
          "name": "Sonnet (1M context)",
          "value": "sonnet[1m]"
        },
        {
          "description": "Haiku 4.5 \xB7 Fastest for quick answers \xB7 $1/$5 per Mtok",
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

// dist-src/agents/cline.ts
var agent5 = {
  "agentCapabilities": {
    "loadSession": true,
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": false,
      "image": true
    }
  },
  "agentInfo": {
    "name": "cline",
    "version": "3.0.31"
  },
  "authMethods": [
    {
      "id": "cline",
      "name": "Sign in with Cline"
    },
    {
      "id": "openai-codex",
      "name": "Sign in with ChatGPT Subscription"
    }
  ],
  "commands": [],
  "configOptions": [
    {
      "category": "model",
      "currentValue": "cline",
      "description": "The authentication provider to use",
      "id": "provider",
      "name": "Provider",
      "options": [
        {
          "name": "Cline",
          "value": "cline"
        },
        {
          "name": "OpenAI ChatGPT Subscription",
          "value": "openai-codex"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "anthropic/claude-sonnet-4.6",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "name": "Fugu Ultra",
          "value": "sakana/fugu-ultra"
        },
        {
          "name": "Nano Banana Pro (Gemini 3 Pro Image)",
          "value": "google/gemini-3-pro-image"
        },
        {
          "name": "North Mini Code (free)",
          "value": "cohere/north-mini-code:free"
        },
        {
          "name": "Kimi K2.7 Code",
          "value": "moonshotai/kimi-k2.7-code"
        },
        {
          "name": "Claude Fable Latest",
          "value": "~anthropic/claude-fable-latest"
        },
        {
          "name": "Nemotron 3 Ultra 550B A55B",
          "value": "nvidia/nemotron-3-ultra-550b-a55b"
        },
        {
          "name": "Nemotron 3 Ultra (free)",
          "value": "nvidia/nemotron-3-ultra-550b-a55b:free"
        },
        {
          "name": "Qwen3.7 Plus",
          "value": "qwen/qwen3.7-plus"
        },
        {
          "name": "MiniMax-M3",
          "value": "minimax/minimax-m3"
        },
        {
          "name": "Step 3.7 Flash",
          "value": "stepfun/step-3.7-flash"
        },
        {
          "name": "Claude Opus 4.8",
          "value": "anthropic/claude-opus-4.8"
        },
        {
          "name": "Claude Opus 4.8 (Fast)",
          "value": "anthropic/claude-opus-4.8-fast"
        },
        {
          "name": "Qwen3.7 Max",
          "value": "qwen/qwen3.7-max"
        },
        {
          "name": "Gemini 3.5 Flash",
          "value": "google/gemini-3.5-flash"
        },
        {
          "name": "Claude Opus 4.7 (Fast)",
          "value": "anthropic/claude-opus-4.7-fast"
        },
        {
          "name": "Ring-2.6-1T",
          "value": "inclusionai/ring-2.6-1t"
        },
        {
          "name": "Gemini 3.1 Flash Lite",
          "value": "google/gemini-3.1-flash-lite"
        },
        {
          "name": "GPT Chat Latest",
          "value": "openai/gpt-chat-latest"
        },
        {
          "name": "Granite 4.1 8B",
          "value": "ibm-granite/granite-4.1-8b"
        },
        {
          "name": "Mistral Medium 3.5",
          "value": "mistralai/mistral-medium-3-5"
        },
        {
          "name": "Nemotron 3 Nano Omni (free)",
          "value": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free"
        },
        {
          "name": "Owl Alpha",
          "value": "openrouter/owl-alpha"
        },
        {
          "name": "Laguna M.1",
          "value": "poolside/laguna-m.1"
        },
        {
          "name": "Laguna M.1 (free)",
          "value": "poolside/laguna-m.1:free"
        },
        {
          "name": "Laguna XS.2",
          "value": "poolside/laguna-xs.2"
        },
        {
          "name": "Laguna XS.2 (free)",
          "value": "poolside/laguna-xs.2:free"
        },
        {
          "name": "Anthropic Claude Haiku Latest",
          "value": "~anthropic/claude-haiku-latest"
        },
        {
          "name": "Anthropic Claude Sonnet Latest",
          "value": "~anthropic/claude-sonnet-latest"
        },
        {
          "name": "Google Gemini Flash Latest",
          "value": "~google/gemini-flash-latest"
        },
        {
          "name": "Google Gemini Pro Latest",
          "value": "~google/gemini-pro-latest"
        },
        {
          "name": "MoonshotAI Kimi Latest",
          "value": "~moonshotai/kimi-latest"
        },
        {
          "name": "OpenAI GPT Latest",
          "value": "~openai/gpt-latest"
        },
        {
          "name": "OpenAI GPT Mini Latest",
          "value": "~openai/gpt-mini-latest"
        },
        {
          "name": "Qwen3.5 Plus 2026-04-20",
          "value": "qwen/qwen3.5-plus-20260420"
        },
        {
          "name": "Qwen3.6 Flash",
          "value": "qwen/qwen3.6-flash"
        },
        {
          "name": "DeepSeek V4 Flash",
          "value": "deepseek/deepseek-v4-flash"
        },
        {
          "name": "DeepSeek V4 Pro",
          "value": "deepseek/deepseek-v4-pro"
        },
        {
          "name": "Ling-2.6-1T",
          "value": "inclusionai/ling-2.6-1t"
        },
        {
          "name": "GPT-5.5",
          "value": "openai/gpt-5.5"
        },
        {
          "name": "GPT-5.5 Pro",
          "value": "openai/gpt-5.5-pro"
        },
        {
          "name": "Qwen3.6 27B",
          "value": "qwen/qwen3.6-27b"
        },
        {
          "name": "MiMo-V2.5",
          "value": "xiaomi/mimo-v2.5"
        },
        {
          "name": "MiMo-V2.5-Pro",
          "value": "xiaomi/mimo-v2.5-pro"
        },
        {
          "name": "Claude Opus Latest",
          "value": "~anthropic/claude-opus-latest"
        },
        {
          "name": "Ling-2.6-flash",
          "value": "inclusionai/ling-2.6-flash"
        },
        {
          "name": "Kimi K2.6",
          "value": "moonshotai/kimi-k2.6"
        },
        {
          "name": "Qwen3.6 Max Preview",
          "value": "qwen/qwen3.6-max-preview"
        },
        {
          "name": "Hy3 preview",
          "value": "tencent/hy3-preview"
        },
        {
          "name": "Qwen3.6 35B-A3B",
          "value": "qwen/qwen3.6-35b-a3b"
        },
        {
          "name": "Grok 4.3",
          "value": "x-ai/grok-4.3"
        },
        {
          "name": "Claude Opus 4.7",
          "value": "anthropic/claude-opus-4.7"
        },
        {
          "name": "Grok Build 0.1",
          "value": "x-ai/grok-build-0.1"
        },
        {
          "name": "Claude Opus 4.6 (Fast)",
          "value": "anthropic/claude-opus-4.6-fast"
        },
        {
          "name": "Gemma 4 26B A4B IT",
          "value": "google/gemma-4-26b-a4b-it"
        },
        {
          "name": "Gemma 4 26B A4B  (free)",
          "value": "google/gemma-4-26b-a4b-it:free"
        },
        {
          "name": "Gemma 4 31B IT",
          "value": "google/gemma-4-31b-it"
        },
        {
          "name": "Gemma 4 31B (free)",
          "value": "google/gemma-4-31b-it:free"
        },
        {
          "name": "Qwen3.6 Plus",
          "value": "qwen/qwen3.6-plus"
        },
        {
          "name": "Trinity Large Thinking",
          "value": "arcee-ai/trinity-large-thinking"
        },
        {
          "name": "Grok 4.20",
          "value": "x-ai/grok-4.20"
        },
        {
          "name": "KAT-Coder-Pro V2",
          "value": "kwaipilot/kat-coder-pro-v2"
        },
        {
          "name": "Reka Edge",
          "value": "rekaai/reka-edge"
        },
        {
          "name": "MiniMax-M2.7",
          "value": "minimax/minimax-m2.7"
        },
        {
          "name": "GPT-5.4 mini",
          "value": "openai/gpt-5.4-mini"
        },
        {
          "name": "GPT-5.4 nano",
          "value": "openai/gpt-5.4-nano"
        },
        {
          "name": "Mistral Small 4",
          "value": "mistralai/mistral-small-2603"
        },
        {
          "name": "Nemotron 3 Super 120B A12B",
          "value": "nvidia/nemotron-3-super-120b-a12b"
        },
        {
          "name": "Nemotron 3 Super (free)",
          "value": "nvidia/nemotron-3-super-120b-a12b:free"
        },
        {
          "name": "Seed-2.0-Lite",
          "value": "bytedance-seed/seed-2.0-lite"
        },
        {
          "name": "GPT-5.4",
          "value": "openai/gpt-5.4"
        },
        {
          "name": "GPT-5.4 Pro",
          "value": "openai/gpt-5.4-pro"
        },
        {
          "name": "Mercury 2",
          "value": "inception/mercury-2"
        },
        {
          "name": "Gemini 3.1 Flash Lite Preview",
          "value": "google/gemini-3.1-flash-lite-preview"
        },
        {
          "name": "GPT-5.3 Chat",
          "value": "openai/gpt-5.3-chat"
        },
        {
          "name": "Seed-2.0-Mini",
          "value": "bytedance-seed/seed-2.0-mini"
        },
        {
          "name": "Qwen3.5-Flash",
          "value": "qwen/qwen3.5-flash-02-23"
        },
        {
          "name": "Qwen3.5 122B-A10B",
          "value": "qwen/qwen3.5-122b-a10b"
        },
        {
          "name": "Qwen3.5 27B",
          "value": "qwen/qwen3.5-27b"
        },
        {
          "name": "Qwen3.5 35B-A3B",
          "value": "qwen/qwen3.5-35b-a3b"
        },
        {
          "name": "Qwen3.5 9B",
          "value": "qwen/qwen3.5-9b"
        },
        {
          "name": "Gemini 3.1 Pro Preview",
          "value": "google/gemini-3.1-pro-preview"
        },
        {
          "name": "Gemini 3.1 Pro Preview Custom Tools",
          "value": "google/gemini-3.1-pro-preview-customtools"
        },
        {
          "name": "Claude Sonnet 4.6",
          "value": "anthropic/claude-sonnet-4.6"
        },
        {
          "name": "Qwen3.5 Plus 2026-02-15",
          "value": "qwen/qwen3.5-plus-02-15"
        },
        {
          "name": "Qwen3.5 397B-A17B",
          "value": "qwen/qwen3.5-397b-a17b"
        },
        {
          "name": "MiniMax-M2.5",
          "value": "minimax/minimax-m2.5"
        },
        {
          "name": "Qwen3 Max Thinking",
          "value": "qwen/qwen3-max-thinking"
        },
        {
          "name": "Claude Opus 4.6",
          "value": "anthropic/claude-opus-4.6"
        },
        {
          "name": "GPT-5.3 Codex",
          "value": "openai/gpt-5.3-codex"
        },
        {
          "name": "Qwen3 Coder Next",
          "value": "qwen/qwen3-coder-next"
        },
        {
          "name": "Free Models Router",
          "value": "openrouter/free"
        },
        {
          "name": "Step 3.5 Flash",
          "value": "stepfun/step-3.5-flash"
        },
        {
          "name": "Solar Pro 3",
          "value": "upstage/solar-pro-3"
        },
        {
          "name": "LFM2.5-1.2B-Thinking (free)",
          "value": "liquid/lfm-2.5-1.2b-thinking:free"
        },
        {
          "name": "GPT Audio",
          "value": "openai/gpt-audio"
        },
        {
          "name": "GPT Audio Mini",
          "value": "openai/gpt-audio-mini"
        },
        {
          "name": "Kimi K2.5",
          "value": "moonshotai/kimi-k2.5"
        },
        {
          "name": "Seed 1.6",
          "value": "bytedance-seed/seed-1.6"
        },
        {
          "name": "Seed 1.6 Flash",
          "value": "bytedance-seed/seed-1.6-flash"
        },
        {
          "name": "MiniMax-M2.1",
          "value": "minimax/minimax-m2.1"
        },
        {
          "name": "Gemini 3 Flash Preview",
          "value": "google/gemini-3-flash-preview"
        },
        {
          "name": "Nemotron 3 Nano 30B A3B",
          "value": "nvidia/nemotron-3-nano-30b-a3b"
        },
        {
          "name": "Nemotron 3 Nano 30B A3B (free)",
          "value": "nvidia/nemotron-3-nano-30b-a3b:free"
        },
        {
          "name": "GPT-5.2",
          "value": "openai/gpt-5.2"
        },
        {
          "name": "GPT-5.2 Codex",
          "value": "openai/gpt-5.2-codex"
        },
        {
          "name": "GPT-5.2 Pro",
          "value": "openai/gpt-5.2-pro"
        },
        {
          "name": "GPT-5.2 Chat",
          "value": "openai/gpt-5.2-chat"
        },
        {
          "name": "Relace Search",
          "value": "relace/relace-search"
        },
        {
          "name": "Nova 2 Lite",
          "value": "amazon/nova-2-lite-v1"
        },
        {
          "name": "Ministral 3 14B 2512",
          "value": "mistralai/ministral-14b-2512"
        },
        {
          "name": "Ministral 3 3B 2512",
          "value": "mistralai/ministral-3b-2512"
        },
        {
          "name": "Ministral 3 8B 2512",
          "value": "mistralai/ministral-8b-2512"
        },
        {
          "name": "Trinity Mini",
          "value": "arcee-ai/trinity-mini"
        },
        {
          "name": "DeepSeek Chat",
          "value": "deepseek/deepseek-chat"
        },
        {
          "name": "DeepSeek V3.2",
          "value": "deepseek/deepseek-v3.2"
        },
        {
          "name": "Claude Opus 4.5 (latest)",
          "value": "anthropic/claude-opus-4.5"
        },
        {
          "name": "GPT-5.1",
          "value": "openai/gpt-5.1"
        },
        {
          "name": "GPT-5.1 Chat",
          "value": "openai/gpt-5.1-chat"
        },
        {
          "name": "GPT-5.1 Codex",
          "value": "openai/gpt-5.1-codex"
        },
        {
          "name": "GPT-5.1 Codex Max",
          "value": "openai/gpt-5.1-codex-max"
        },
        {
          "name": "GPT-5.1 Codex mini",
          "value": "openai/gpt-5.1-codex-mini"
        },
        {
          "name": "Kimi K2 Thinking",
          "value": "moonshotai/kimi-k2-thinking"
        },
        {
          "name": "Nova Premier 1.0",
          "value": "amazon/nova-premier-v1"
        },
        {
          "name": "Voxtral Small 24B 2507",
          "value": "mistralai/voxtral-small-24b-2507"
        },
        {
          "name": "gpt-oss-safeguard-20b",
          "value": "openai/gpt-oss-safeguard-20b"
        },
        {
          "name": "Nemotron Nano 12B 2 VL (free)",
          "value": "nvidia/nemotron-nano-12b-v2-vl:free"
        },
        {
          "name": "MiniMax-M2",
          "value": "minimax/minimax-m2"
        },
        {
          "name": "Qwen3 VL 32B Instruct",
          "value": "qwen/qwen3-vl-32b-instruct"
        },
        {
          "name": "Claude Haiku 4.5 (latest)",
          "value": "anthropic/claude-haiku-4.5"
        },
        {
          "name": "Qwen3 VL 8B Instruct",
          "value": "qwen/qwen3-vl-8b-instruct"
        },
        {
          "name": "Qwen3 VL 8B Thinking",
          "value": "qwen/qwen3-vl-8b-thinking"
        },
        {
          "name": "GPT-5 Pro",
          "value": "openai/gpt-5-pro"
        },
        {
          "name": "Qwen3 VL 30B A3B Instruct",
          "value": "qwen/qwen3-vl-30b-a3b-instruct"
        },
        {
          "name": "Qwen3 VL 30B A3B Thinking",
          "value": "qwen/qwen3-vl-30b-a3b-thinking"
        },
        {
          "name": "Claude Sonnet 4.5 (latest)",
          "value": "anthropic/claude-sonnet-4.5"
        },
        {
          "name": "DeepSeek V3.2 Exp",
          "value": "deepseek/deepseek-v3.2-exp"
        },
        {
          "name": "Gemini 2.5 Flash Lite Preview 09-2025",
          "value": "google/gemini-2.5-flash-lite-preview-09-2025"
        },
        {
          "name": "Qwen3 Max",
          "value": "qwen/qwen3-max"
        },
        {
          "name": "Qwen3 VL 235B A22B Instruct",
          "value": "qwen/qwen3-vl-235b-a22b-instruct"
        },
        {
          "name": "Qwen3 VL 235B A22B Thinking",
          "value": "qwen/qwen3-vl-235b-a22b-thinking"
        },
        {
          "name": "DeepSeek V3.1 Terminus",
          "value": "deepseek/deepseek-v3.1-terminus"
        },
        {
          "name": "GPT-5-Codex",
          "value": "openai/gpt-5-codex"
        },
        {
          "name": "Qwen Plus 0728",
          "value": "qwen/qwen-plus-2025-07-28"
        },
        {
          "name": "Qwen Plus 0728 (thinking)",
          "value": "qwen/qwen-plus-2025-07-28:thinking"
        },
        {
          "name": "Kimi K2 0905",
          "value": "moonshotai/kimi-k2-0905"
        },
        {
          "name": "Qwen3-Next 80B-A3B Instruct",
          "value": "qwen/qwen3-next-80b-a3b-instruct"
        },
        {
          "name": "Qwen3 Next 80B A3B Instruct (free)",
          "value": "qwen/qwen3-next-80b-a3b-instruct:free"
        },
        {
          "name": "Qwen3-Next 80B-A3B (Thinking)",
          "value": "qwen/qwen3-next-80b-a3b-thinking"
        },
        {
          "name": "Qwen3 30B A3B Thinking 2507",
          "value": "qwen/qwen3-30b-a3b-thinking-2507"
        },
        {
          "name": "DeepSeek V3.1",
          "value": "deepseek/deepseek-chat-v3.1"
        },
        {
          "name": "Nemotron Nano 9B V2 (free)",
          "value": "nvidia/nemotron-nano-9b-v2:free"
        },
        {
          "name": "Mistral Medium 3.1",
          "value": "mistralai/mistral-medium-3.1"
        },
        {
          "name": "Jamba Large 1.7",
          "value": "ai21/jamba-large-1.7"
        },
        {
          "name": "GPT-5",
          "value": "openai/gpt-5"
        },
        {
          "name": "GPT-5 Mini",
          "value": "openai/gpt-5-mini"
        },
        {
          "name": "GPT-5 Nano",
          "value": "openai/gpt-5-nano"
        },
        {
          "name": "Claude Opus 4.1 (latest)",
          "value": "anthropic/claude-opus-4.1"
        },
        {
          "name": "gpt-oss-120b",
          "value": "openai/gpt-oss-120b"
        },
        {
          "name": "gpt-oss-120b (free)",
          "value": "openai/gpt-oss-120b:free"
        },
        {
          "name": "gpt-oss-20b",
          "value": "openai/gpt-oss-20b"
        },
        {
          "name": "gpt-oss-20b (free)",
          "value": "openai/gpt-oss-20b:free"
        },
        {
          "name": "Codestral 2508",
          "value": "mistralai/codestral-2508"
        },
        {
          "name": "Qwen3 30B A3B Instruct 2507",
          "value": "qwen/qwen3-30b-a3b-instruct-2507"
        },
        {
          "name": "Qwen3 Coder Flash",
          "value": "qwen/qwen3-coder-flash"
        },
        {
          "name": "Llama 3.3 Nemotron Super 49B v1.5",
          "value": "nvidia/llama-3.3-nemotron-super-49b-v1.5"
        },
        {
          "name": "Qwen3 235B A22B Thinking 2507",
          "value": "qwen/qwen3-235b-a22b-thinking-2507"
        },
        {
          "name": "Qwen3 Coder 480B A35B",
          "value": "qwen/qwen3-coder"
        },
        {
          "name": "Qwen3 Coder Plus",
          "value": "qwen/qwen3-coder-plus"
        },
        {
          "name": "Qwen3 Coder 480B A35B (free)",
          "value": "qwen/qwen3-coder:free"
        },
        {
          "name": "Qwen3 235B A22B Instruct 2507",
          "value": "qwen/qwen3-235b-a22b-2507"
        },
        {
          "name": "Kimi K2 0711",
          "value": "moonshotai/kimi-k2"
        },
        {
          "name": "Mistral Small 3.2 24B",
          "value": "mistralai/mistral-small-3.2-24b-instruct"
        },
        {
          "name": "Gemini 2.5 Flash",
          "value": "google/gemini-2.5-flash"
        },
        {
          "name": "Gemini 2.5 Flash-Lite",
          "value": "google/gemini-2.5-flash-lite"
        },
        {
          "name": "Gemini 2.5 Pro",
          "value": "google/gemini-2.5-pro"
        },
        {
          "name": "MiniMax M1",
          "value": "minimax/minimax-m1"
        },
        {
          "name": "o3-pro",
          "value": "openai/o3-pro"
        },
        {
          "name": "Gemini 2.5 Pro Preview 06-05",
          "value": "google/gemini-2.5-pro-preview"
        },
        {
          "name": "R1 0528",
          "value": "deepseek/deepseek-r1-0528"
        },
        {
          "name": "Claude Opus 4",
          "value": "anthropic/claude-opus-4"
        },
        {
          "name": "Claude Sonnet 4",
          "value": "anthropic/claude-sonnet-4"
        },
        {
          "name": "Gemini 2.5 Pro Preview 05-06",
          "value": "google/gemini-2.5-pro-preview-05-06"
        },
        {
          "name": "Mistral Medium 3",
          "value": "mistralai/mistral-medium-3"
        },
        {
          "name": "Virtuoso Large",
          "value": "arcee-ai/virtuoso-large"
        },
        {
          "name": "Qwen3 14B",
          "value": "qwen/qwen3-14b"
        },
        {
          "name": "Qwen3 30B A3B",
          "value": "qwen/qwen3-30b-a3b"
        },
        {
          "name": "Qwen3 8B",
          "value": "qwen/qwen3-8b"
        },
        {
          "name": "o3",
          "value": "openai/o3"
        },
        {
          "name": "o4-mini",
          "value": "openai/o4-mini"
        },
        {
          "name": "o4 Mini High",
          "value": "openai/o4-mini-high"
        },
        {
          "name": "GPT-4.1",
          "value": "openai/gpt-4.1"
        },
        {
          "name": "GPT-4.1 mini",
          "value": "openai/gpt-4.1-mini"
        },
        {
          "name": "GPT-4.1 nano",
          "value": "openai/gpt-4.1-nano"
        },
        {
          "name": "Llama 4 Maverick",
          "value": "meta-llama/llama-4-maverick"
        },
        {
          "name": "Llama 4 Scout",
          "value": "meta-llama/llama-4-scout"
        },
        {
          "name": "Qwen3 235B-A22B",
          "value": "qwen/qwen3-235b-a22b"
        },
        {
          "name": "Qwen3 32B",
          "value": "qwen/qwen3-32b"
        },
        {
          "name": "Qwen3-Coder 30B-A3B Instruct",
          "value": "qwen/qwen3-coder-30b-a3b-instruct"
        },
        {
          "name": "DeepSeek V3 0324",
          "value": "deepseek/deepseek-chat-v3-0324"
        },
        {
          "name": "Gemma 3 12B",
          "value": "google/gemma-3-12b-it"
        },
        {
          "name": "Gemma 3 27B",
          "value": "google/gemma-3-27b-it"
        },
        {
          "name": "Saba",
          "value": "mistralai/mistral-saba"
        },
        {
          "name": "o3 Mini High",
          "value": "openai/o3-mini-high"
        },
        {
          "name": "DeepSeek-R1",
          "value": "deepseek/deepseek-r1"
        },
        {
          "name": "o3-mini",
          "value": "openai/o3-mini"
        },
        {
          "name": "Llama-3.3-70B-Instruct",
          "value": "meta-llama/llama-3.3-70b-instruct"
        },
        {
          "name": "Llama 3.3 70B Instruct (free)",
          "value": "meta-llama/llama-3.3-70b-instruct:free"
        },
        {
          "name": "Nova Lite 1.0",
          "value": "amazon/nova-lite-v1"
        },
        {
          "name": "Nova Micro 1.0",
          "value": "amazon/nova-micro-v1"
        },
        {
          "name": "Nova Pro 1.0",
          "value": "amazon/nova-pro-v1"
        },
        {
          "name": "o1",
          "value": "openai/o1"
        },
        {
          "name": "GPT-4o (2024-11-20)",
          "value": "openai/gpt-4o-2024-11-20"
        },
        {
          "name": "Mistral Large 2407",
          "value": "mistralai/mistral-large-2407"
        },
        {
          "name": "UnslopNemo 12B",
          "value": "thedrummer/unslopnemo-12b"
        },
        {
          "name": "Mistral Large 3",
          "value": "mistralai/mistral-large-2512"
        },
        {
          "name": "Qwen2.5 7B Instruct",
          "value": "qwen/qwen-2.5-7b-instruct"
        },
        {
          "name": "Qwen2.5 72B Instruct",
          "value": "qwen/qwen-2.5-72b-instruct"
        },
        {
          "name": "Command R",
          "value": "cohere/command-r-08-2024"
        },
        {
          "name": "Command R+",
          "value": "cohere/command-r-plus-08-2024"
        },
        {
          "name": "Llama 3.1 Euryale 70B v2.2",
          "value": "sao10k/l3.1-euryale-70b"
        },
        {
          "name": "GPT-4o (2024-08-06)",
          "value": "openai/gpt-4o-2024-08-06"
        },
        {
          "name": "Llama 3.1 70B Instruct",
          "value": "meta-llama/llama-3.1-70b-instruct"
        },
        {
          "name": "Llama 3.1 8B Instruct",
          "value": "meta-llama/llama-3.1-8b-instruct"
        },
        {
          "name": "GPT-4o mini",
          "value": "openai/gpt-4o-mini"
        },
        {
          "name": "GPT-4o-mini (2024-07-18)",
          "value": "openai/gpt-4o-mini-2024-07-18"
        },
        {
          "name": "Mistral Nemo",
          "value": "mistralai/mistral-nemo"
        },
        {
          "name": "o3-deep-research",
          "value": "openai/o3-deep-research"
        },
        {
          "name": "o4-mini-deep-research",
          "value": "openai/o4-mini-deep-research"
        },
        {
          "name": "GPT-4o",
          "value": "openai/gpt-4o"
        },
        {
          "name": "GPT-4o (2024-05-13)",
          "value": "openai/gpt-4o-2024-05-13"
        },
        {
          "name": "Mixtral 8x22B Instruct",
          "value": "mistralai/mixtral-8x22b-instruct"
        },
        {
          "name": "Claude 3 Haiku",
          "value": "anthropic/claude-3-haiku"
        },
        {
          "name": "Mistral Large",
          "value": "mistralai/mistral-large"
        },
        {
          "name": "GPT-3.5 Turbo (older v0613)",
          "value": "openai/gpt-3.5-turbo-0613"
        },
        {
          "name": "GPT-4 Turbo Preview",
          "value": "openai/gpt-4-turbo-preview"
        },
        {
          "name": "Qwen Plus",
          "value": "qwen/qwen-plus"
        },
        {
          "name": "Auto Router",
          "value": "openrouter/auto"
        },
        {
          "name": "GPT-4",
          "value": "openai/gpt-4"
        },
        {
          "name": "GPT-4 Turbo",
          "value": "openai/gpt-4-turbo"
        },
        {
          "name": "GPT-3.5 Turbo 16k",
          "value": "openai/gpt-3.5-turbo-16k"
        },
        {
          "name": "GPT-3.5-turbo",
          "value": "openai/gpt-3.5-turbo"
        },
        {
          "name": "GLM 5.2",
          "value": "zai/glm-5.2"
        },
        {
          "name": "GLM 5.2 Fast",
          "value": "zai/glm-5.2-fast"
        },
        {
          "name": "GLM 5.1",
          "value": "zai/glm-5.1"
        },
        {
          "name": "GLM 5V Turbo",
          "value": "zai/glm-5v-turbo"
        },
        {
          "name": "GLM 5 Turbo",
          "value": "zai/glm-5-turbo"
        },
        {
          "name": "GLM-5",
          "value": "zai/glm-5"
        },
        {
          "name": "GLM 4.7 Flash",
          "value": "zai/glm-4.7-flash"
        },
        {
          "name": "GLM 4.7 FlashX",
          "value": "zai/glm-4.7-flashx"
        },
        {
          "name": "GLM 4.7",
          "value": "zai/glm-4.7"
        },
        {
          "name": "GLM 4.6",
          "value": "zai/glm-4.6"
        },
        {
          "name": "GLM-4.6V",
          "value": "zai/glm-4.6v"
        },
        {
          "name": "GLM-4.6V-Flash",
          "value": "zai/glm-4.6v-flash"
        },
        {
          "name": "GLM 4.5V",
          "value": "zai/glm-4.5v"
        },
        {
          "name": "GLM 4.5",
          "value": "zai/glm-4.5"
        },
        {
          "name": "GLM 4.5 Air",
          "value": "zai/glm-4.5-air"
        }
      ],
      "type": "select"
    },
    {
      "category": "mode",
      "currentValue": "act",
      "description": "Controls whether the agent can modify files",
      "id": "mode",
      "name": "Session Mode",
      "options": [
        {
          "description": "Explore the codebase and plan changes without modifying files",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Make changes to the codebase",
          "name": "Act",
          "value": "act"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "act",
  "id": "cline",
  "modes": [
    {
      "description": "Explore the codebase and plan changes without modifying files",
      "id": "plan",
      "name": "Plan"
    },
    {
      "description": "Make changes to the codebase",
      "id": "act",
      "name": "Act"
    }
  ],
  "name": "Cline",
  "protocolVersion": 1,
  "version": "3.0.31"
};

// dist-src/agents/codebuddy-code.ts
var agent6 = {
  "agentCapabilities": {
    "delegateToolsSupport": true,
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": true
    },
    "promptCapabilities": {
      "embeddedContext": true,
      "image": true
    }
  },
  "agentInfo": {
    "name": "codebuddy-code",
    "version": "2.106.7"
  },
  "authMethods": [
    {
      "description": null,
      "id": "iOA",
      "name": "Login with iOA"
    },
    {
      "description": null,
      "id": "external",
      "name": "Login with Google/Github"
    },
    {
      "description": null,
      "id": "internal",
      "name": "Login with WeChat"
    },
    {
      "description": null,
      "id": "selfhosted",
      "name": "Login with Enterprise Domain"
    }
  ],
  "commands": [
    {
      "description": "Create a branch of the current conversation at this point",
      "input": {
        "hint": "[name]"
      },
      "name": "branch"
    },
    {
      "description": "Ask a quick side question without interrupting the main Agent work",
      "input": {
        "hint": "<question>"
      },
      "name": "btw"
    },
    {
      "description": "Start a fresh conversation (previous chats remain accessible via /resume)",
      "name": "clear"
    },
    {
      "description": "Calculate and display context token distribution",
      "name": "context"
    },
    {
      "description": "Show the total cost and duration of the current session",
      "name": "cost"
    },
    {
      "description": "Diagnose and verify your CodeBuddy installation and settings",
      "name": "doctor"
    },
    {
      "description": "Open the issue feedback page to report bugs or suggest features",
      "name": "feedback"
    },
    {
      "description": "Create a branch of the current conversation at this point (alias for /branch)",
      "input": {
        "hint": "[name]"
      },
      "name": "fork"
    },
    {
      "description": 'Manage the remote control gateway. Subcommands: "status" to show current status, "stop" to stop the gateway, "token" to regenerate access token, "tunnel" to start with tunnel',
      "name": "gateway"
    },
    {
      "description": 'Keep working until a condition is met. Use "/goal clear" to stop early. Example: /goal all tests pass',
      "input": {
        "hint": "<condition> | clear"
      },
      "name": "goal"
    },
    {
      "description": "Manage remote control long connection clients (start, stop, status, list)",
      "name": "remote-control"
    },
    {
      "description": "Open keybindings configuration",
      "name": "keybindings"
    },
    {
      "description": "Switch Tencent Cloud CodeBuddy accounts",
      "name": "login"
    },
    {
      "description": "Sign out from your Tencent Cloud CodeBuddy account",
      "name": "logout"
    },
    {
      "description": "Preview the current plan file content",
      "name": "plan"
    },
    {
      "description": "Get comments from a GitHub pull request",
      "name": "pr-comments"
    },
    {
      "description": "View release notes",
      "name": "release-notes"
    },
    {
      "description": "Review a pull request",
      "name": "review"
    },
    {
      "description": "List available skills",
      "name": "skills"
    },
    {
      "description": "Display the current session's todo list",
      "name": "todos"
    },
    {
      "description": "Reload all plugins, skills, agents, hooks, and MCP/LSP servers without restarting",
      "name": "reload-plugins"
    },
    {
      "description": "Validate a plugin directory structure and manifest",
      "input": {
        "hint": "[path]"
      },
      "name": "plugin-validate"
    },
    {
      "description": "List running and saved Dynamic Workflows",
      "name": "workflows"
    },
    {
      "description": "Set the model effort level (low, medium, high, xhigh, max, ultracode)",
      "input": {
        "hint": "[low | medium | high | xhigh | max | ultracode]"
      },
      "name": "effort"
    },
    {
      "description": "[dynamic workflow] Deep research harness \u2014 fan-out web searches, fetch sources, adversarially verify claims, synthesize a cited report.",
      "input": {
        "hint": "[args...]"
      },
      "name": "deep-research"
    },
    {
      "description": 'Set or list text-to-video models. Use "list" to show available models, or specify a model id to switch',
      "input": {
        "hint": "[list | model-id]"
      },
      "name": "model:text-to-video"
    },
    {
      "description": 'Set or list image-to-video models. Use "list" to show available models, or specify a model id to switch',
      "input": {
        "hint": "[list | model-id]"
      },
      "name": "model:image-to-video"
    },
    {
      "description": "init is analyzing your codebase\u2026",
      "name": "init"
    },
    {
      "description": "Clear conversation history but keep a summary in context. Optional: /compact [instructions for summarization]",
      "name": "compact"
    },
    {
      "description": "Clear conversation history but keep a summary in context. Optional: /compact [instructions for summarization]",
      "name": "_compact"
    },
    {
      "description": "Set up Codebuddy Code's status line UI",
      "name": "statusline"
    },
    {
      "description": "Complete a security review of the pending changes on the current branch",
      "name": "security-review"
    },
    {
      "description": "Create a git commit",
      "name": "commit"
    },
    {
      "description": "Commit, push, and open a PR",
      "name": "commit-push-pr"
    },
    {
      "description": "Generate AI-powered insights about your CodeBuddy Code usage patterns and activity",
      "name": "insights"
    },
    {
      "_meta": {
        "source": "bundled",
        "type": "skill"
      },
      "description": "Run a prompt or slash command on a recurring interval (e.g. /loop 5m /foo, defaults to 10m)",
      "name": "loop"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "default",
      "description": "Controls how the agent requests permission before making changes",
      "id": "mode",
      "name": "Permission Mode",
      "options": [
        {
          "description": "Prompts for permission on first use of each tool",
          "name": "Always Ask",
          "value": "default"
        },
        {
          "description": "Automatically accepts file edit permissions for the session",
          "name": "Accept Edits",
          "value": "acceptEdits"
        },
        {
          "description": "Agent can analyze but not modify files or execute commands",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Skips all permission prompts",
          "name": "Bypass Permissions",
          "value": "bypassPermissions"
        },
        {
          "description": "Skips ALL permission checks including dangerous commands for all agents",
          "name": "Full Access",
          "value": "fullAccess"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "default-model",
      "description": "Select the AI model to use for this session",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "description": "x2.00 credits",
          "name": "Default",
          "value": "default-model"
        },
        {
          "description": "x1.32 credits",
          "name": "Gemini-3.1-Pro",
          "value": "gemini-3.1-pro"
        },
        {
          "description": "x0.33 credits",
          "name": "Gemini-3.0-Flash",
          "value": "gemini-3.0-flash"
        },
        {
          "description": "x0.99 credits",
          "name": "Gemini-3.5-Flash",
          "value": "gemini-3.5-flash"
        },
        {
          "description": "x0.90 credits",
          "name": "Gemini-2.5-Pro",
          "value": "gemini-2.5-pro"
        },
        {
          "description": "x0.22 credits",
          "name": "Gemini-2.5-Flash",
          "value": "gemini-2.5-flash"
        },
        {
          "description": "x0.17 credits",
          "name": "Gemini-3.1-flash-lite",
          "value": "gemini-3.1-flash-lite"
        },
        {
          "description": "x3.31 credits",
          "name": "GPT-5.5",
          "value": "gpt-5.5"
        },
        {
          "description": "x1.65 credits",
          "name": "GPT-5.4",
          "value": "gpt-5.4"
        },
        {
          "description": "x1.25 credits",
          "name": "GPT-5.3-Codex",
          "value": "gpt-5.3-codex"
        },
        {
          "description": "x0.90 credits",
          "name": "GPT-5.1-Codex",
          "value": "gpt-5.1-codex"
        },
        {
          "description": "x0.18 credits",
          "name": "GPT-5.1-Codex-Mini",
          "value": "gpt-5.1-codex-mini"
        },
        {
          "description": "x0.29 credits",
          "name": "DeepSeek-V3.2",
          "value": "deepseek-v3-2-volc"
        },
        {
          "description": "x0.80 credits",
          "name": "GLM-5.0",
          "value": "glm-5.0"
        },
        {
          "description": "x0.45 credits",
          "name": "Kimi-K2.5",
          "value": "kimi-k2.5"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "enabled",
      "description": "Choose reasoning effort level for this session",
      "id": "thought_level",
      "name": "Deep Thinking",
      "options": [
        {
          "description": "Standard response without extended thinking",
          "name": "Off",
          "value": "disabled"
        },
        {
          "description": "Briefest reasoning",
          "name": "Minimal",
          "value": "minimal"
        },
        {
          "description": "Light reasoning",
          "name": "Low",
          "value": "low"
        },
        {
          "description": "Balanced reasoning",
          "name": "Medium",
          "value": "medium"
        },
        {
          "description": "Deep reasoning",
          "name": "High",
          "value": "high"
        },
        {
          "description": "Very deep reasoning",
          "name": "X-High",
          "value": "xhigh"
        },
        {
          "description": "Maximum reasoning effort",
          "name": "Max",
          "value": "max"
        },
        {
          "description": "Use the model default effort",
          "name": "On (default)",
          "value": "enabled"
        }
      ],
      "type": "select"
    },
    {
      "category": "sandbox",
      "currentValue": "false",
      "description": "Run shell commands inside the sandbox-cli isolation layer",
      "id": "sandbox",
      "name": "Sandbox",
      "options": [
        {
          "description": "Bash/PowerShell commands run inside the sandbox and require escalation to touch the host",
          "name": "Sandbox Environment",
          "value": "true"
        },
        {
          "description": "Commands run with full user permissions (no sandbox isolation)",
          "name": "Local Environment",
          "value": "false"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "default",
  "id": "codebuddy-code",
  "modes": [
    {
      "description": "Prompts for permission on first use of each tool",
      "id": "default",
      "name": "Always Ask"
    },
    {
      "description": "Automatically accepts file edit permissions for the session",
      "id": "acceptEdits",
      "name": "Accept Edits"
    },
    {
      "description": "Claude can analyze but not modify files or execute commands",
      "id": "plan",
      "name": "Plan"
    },
    {
      "description": "Skips all permission prompts",
      "id": "bypassPermissions",
      "name": "Bypass Permissions"
    }
  ],
  "name": "Codebuddy Code",
  "protocolVersion": 1,
  "version": "2.106.7"
};

// dist-src/agents/codex-acp.ts
var agent7 = {
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
      "description": 'Auto-review pipeline \u2014 reads the full CEO, design, eng, and DX review skills from disk and runs them sequentially with auto-decisions using 6 decision principles. Surfaces taste decisions (close approaches, borderline scope, codex disagreements) at a final approval gate. One command, fully reviewed plan out. Use when asked to "auto review", "autoplan", "run all reviews", "review this plan automatically", or "make the decisions for me". Proactively suggest when the user has a plan file and wants to run the full review gauntlet without answering 15-30 intermediate questions. (gstack) Voice triggers (speech-to-text aliases): "auto plan", "automatic review".',
      "input": null,
      "name": "$autoplan"
    },
    {
      "description": 'Performance regression detection using the browse daemon. Establishes baselines for page load times, Core Web Vitals, and resource sizes. Compares before/after on every PR. Tracks performance trends over time. Use when: "performance", "benchmark", "page speed", "lighthouse", "web vitals", "bundle size", "load time". (gstack) Voice triggers (speech-to-text aliases): "speed test", "check performance".',
      "input": null,
      "name": "$benchmark"
    },
    {
      "description": 'Cross-model benchmark for gstack skills. Runs the same prompt through Claude, GPT (via Codex CLI), and Gemini side-by-side \u2014 compares latency, tokens, cost, and optionally quality via LLM judge. Answers "which model is actually best for this skill?" with data instead of vibes. Separate from /benchmark, which measures web page performance. Use when: "benchmark models", "compare models", "which model is best for X", "cross-model comparison", "model shootout". (gstack) Voice triggers (speech-to-text aliases): "compare models", "model shootout", "which model is best".',
      "input": null,
      "name": "$benchmark-models"
    },
    {
      "description": 'Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with elements, verify page state, diff before/after actions, take annotated screenshots, check responsive layouts, test forms and uploads, handle dialogs, and assert element states. ~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a user flow, or file a bug with evidence. Use when asked to "open in browser", "test the site", "take a screenshot", or "dogfood this". (gstack)',
      "input": null,
      "name": "$browse"
    },
    {
      "description": "Control the in-app Browser. Use to open, navigate, inspect, test, click, type, screenshot, or verify local targets such as localhost, 127.0.0.1, ::1, file://, the current in-app browser tab, and websites shown side by side inside Codex.",
      "input": null,
      "name": "$browser:control-in-app-browser"
    },
    {
      "description": 'Post-deploy canary monitoring. Watches the live app for console errors, performance regressions, and page failures using the browse daemon. Takes periodic screenshots, compares against pre-deploy baselines, and alerts on anomalies. Use when: "monitor deploy", "canary", "post-deploy check", "watch production", "verify deploy". (gstack)',
      "input": null,
      "name": "$canary"
    },
    {
      "description": 'Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE, force-push, git reset --hard, kubectl delete, and similar destructive operations. User can override each warning. Use when touching prod, debugging live systems, or working in a shared environment. Use when asked to "be careful", "safety mode", "prod mode", or "careful mode". (gstack)',
      "input": null,
      "name": "$careful"
    },
    {
      "description": 'Claude Code CLI wrapper for non-Claude hosts - three modes. Review: independent diff review via claude -p. Challenge: adversarial failure-mode review. Consult: ask Claude about the repo with read-only file tools. Use when asked for "claude review", "claude challenge", "ask claude", "second opinion from claude", or "outside voice". (gstack)',
      "input": null,
      "name": "$claude"
    },
    {
      "description": 'Restore working context saved earlier by /context-save. Loads the most recent saved state (across all branches by default) so you can pick up where you left off \u2014 even across Conductor workspace handoffs. Use when asked to "resume", "restore context", "where was I", or "pick up where I left off". Pair with /context-save. Formerly /checkpoint resume \u2014 renamed because Claude Code treats /checkpoint as a native rewind alias in current environments. (gstack)',
      "input": null,
      "name": "$context-restore"
    },
    {
      "description": 'Save working context. Captures git state, decisions made, and remaining work so any future session can pick up without losing a beat. Use when asked to "save progress", "save state", "context save", or "save my work". Pair with /context-restore to resume later. Formerly /checkpoint \u2014 renamed because Claude Code treats /checkpoint as a native rewind alias in current environments, which was shadowing this skill. (gstack)',
      "input": null,
      "name": "$context-save"
    },
    {
      "description": 'Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology, dependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain scanning, plus OWASP Top 10, STRIDE threat modeling, and active verification. Two modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep scan, 2/10 bar). Trend tracking across audit runs. Use when: "security audit", "threat model", "pentest review", "OWASP", "CSO review". (gstack) Voice triggers (speech-to-text aliases): "see-so", "see so", "security review", "security check", "vulnerability scan", "run security".',
      "input": null,
      "name": "$cso"
    },
    {
      "description": "Multi Agents Looping \u2014 a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "input": null,
      "name": "$deep-investigate"
    },
    {
      "description": `Design consultation: understands your product, researches the landscape, proposes a complete design system (aesthetic, typography, color, layout, spacing, motion), and generates font+color preview pages. Creates DESIGN.md as your project's design source of truth. For existing sites, use /plan-design-review to infer the system instead. Use when asked to "design system", "brand guidelines", or "create DESIGN.md". Proactively suggest when starting a new project's UI with no existing design system or DESIGN.md. (gstack)`,
      "input": null,
      "name": "$design-consultation"
    },
    {
      "description": 'Design finalization: generates production-quality Pretext-native HTML/CSS. Works with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review, design review context from /plan-design-review, or from scratch with a user description. Text actually reflows, heights are computed, layouts are dynamic. 30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns for each design type. Use when: "finalize this design", "turn this into HTML", "build me a page", "implement this design", or after any planning skill. Proactively suggest when user has approved a design or has a plan ready. (gstack) Voice triggers (speech-to-text aliases): "build the design", "code the mockup", "make it real".',
      "input": null,
      "name": "$design-html"
    },
    {
      "description": `Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems, AI slop patterns, and slow interactions \u2014 then fixes them. Iteratively fixes issues in source code, committing each fix atomically and re-verifying with before/after screenshots. For plan-mode design review (before implementation), use /plan-design-review. Use when asked to "audit the design", "visual QA", "check if it looks good", or "design polish". Proactively suggest when the user mentions visual inconsistencies or wants to polish the look of a live site. (gstack)`,
      "input": null,
      "name": "$design-review"
    },
    {
      "description": `Design shotgun: generate multiple AI design variants, open a comparison board, collect structured feedback, and iterate. Standalone design exploration you can run anytime. Use when: "explore designs", "show me options", "design variants", "visual brainstorm", or "I don't like how this looks". Proactively suggest when the user describes a UI feature but hasn't seen what it could look like. (gstack)`,
      "input": null,
      "name": "$design-shotgun"
    },
    {
      "description": 'Live developer experience audit. Uses the browse tool to actually TEST the developer experience: navigates docs, tries the getting started flow, times TTHW, screenshots error messages, evaluates CLI help text. Produces a DX scorecard with evidence. Compares against /plan-devex-review scores if they exist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to "test the DX", "DX audit", "developer experience test", or "try the onboarding". Proactively suggest after shipping a developer-facing feature. (gstack) Voice triggers (speech-to-text aliases): "dx audit", "test the developer experience", "try the onboarding", "developer experience test".',
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
      "description": 'Post-ship documentation update. Reads all project docs, cross-references the diff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped, polishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when asked to "update the docs", "sync documentation", or "post-ship docs". Proactively suggest after a PR is merged or code is shipped. (gstack)',
      "input": null,
      "name": "$document-release"
    },
    {
      "description": "Create, edit, redline, and comment on `.docx`, Word, and Google Docs-targeted document artifacts inside the container, with a strict render-and-verify workflow. Use `render_docx.py` to generate page PNGs (and optional PDF) for visual QA, then iterate until layout is flawless before delivering the final document.",
      "input": null,
      "name": "$documents:documents"
    },
    {
      "description": `Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document \u2014 including when they say "write a report", "draft a proposal", "make a contract", "fill in this form", "reformat to match this template", or any task whose final output is a .docx file. Even if the user doesn't mention "docx" explicitly, if the task implies a printable/formal document, use this skill.`,
      "input": null,
      "name": "$docx"
    },
    {
      "description": "Creates and maintains Figma Code Connect template files that map Figma components to code snippets. Use when the user mentions Code Connect, Figma component mapping, design-to-code translation, or asks to create/update .figma.ts or .figma.js files.",
      "input": null,
      "name": "$figma:figma-code-connect"
    },
    {
      "description": "**MANDATORY prerequisite** \u2014 you MUST invoke this skill BEFORE every `create_new_file` tool call. NEVER call `create_new_file` directly without loading this skill first. Trigger whenever the user wants a new blank Figma file \u2014 a new design, FigJam, or Slides file \u2014 or when you need a fresh file before calling `use_figma`. Usage \u2014 /figma-create-new-file [editorType] [fileName] (e.g. /figma-create-new-file figjam My Whiteboard, /figma-create-new-file slides Q3 Review)",
      "input": null,
      "name": "$figma:figma-create-new-file"
    },
    {
      "description": "Use this skill alongside figma-use when the task involves translating an application page, view, or multi-section layout into Figma. Triggers: 'write to Figma', 'create in Figma from code', 'push page to Figma', 'take this app/page and build it in Figma', 'create a screen', 'build a landing page in Figma', 'update the Figma screen to match code', 'convert this modal/dialog/drawer/panel to Figma'. This is the preferred workflow skill whenever the user wants to build or update a full page, modal, dialog, drawer, sidebar, panel, or any composed multi-section view in Figma from code or a description. Discovers design system components, variables, and styles from Code Connect files, existing screens, and library search, then imports them and assembles views incrementally section-by-section using design system tokens instead of hardcoded values.",
      "input": null,
      "name": "$figma:figma-generate-design"
    },
    {
      "description": "MANDATORY prerequisite \u2014 load this skill BEFORE every `generate_diagram` tool call. NEVER call `generate_diagram` directly without loading this skill first. Trigger whenever the user asks to create, generate, draw, render, sketch, or build a diagram \u2014 flowchart, architecture diagram, sequence diagram, ERD or entity-relationship diagram, state diagram or state machine, gantt chart, or timeline. Also trigger when the user mentions Mermaid syntax or wants a system architecture, decision tree, dependency graph, API call flow, auth handshake, schema, or pipeline visualized in FigJam. Routes to type-specific guidance, sets universal Mermaid constraints, and tells you when to use a different diagram type or skip the tool entirely (mindmaps, pie charts, class diagrams, etc.).",
      "input": null,
      "name": "$figma:figma-generate-diagram"
    },
    {
      "description": "Build or update a professional-grade design system in Figma from a codebase. Use when the user wants to create variables/tokens, build component libraries, create individual components with proper variant sets and variable bindings, set up theming (light/dark modes), document foundations, or reconcile gaps between code and Figma. Also use when the user asks to create or generate any component in Figma \u2014 even a single one \u2014 since components require proper variable foundations, variant states, and design token bindings to be production-quality. This skill teaches WHAT to build and in WHAT ORDER \u2014 it complements the `figma-use` skill which teaches HOW to call the Plugin API. Both skills should be loaded together.",
      "input": null,
      "name": "$figma:figma-generate-library"
    },
    {
      "description": 'Translates Figma motion and animations into production-ready application code. Use when implementing animation/motion from a Figma design \u2014 user mentions "implement this motion", "add animation from Figma", "animate this component", provides a Figma URL whose node is animated, or when `get_design_context` returns motion data or instructs you to call `get_motion_context`.',
      "input": null,
      "name": "$figma:figma-implement-motion"
    },
    {
      "description": "SwiftUI \u2194 Figma translation. Use whenever the user mentions Swift, SwiftUI, iOS, iPhone, or iPad \u2014 in EITHER direction \u2014 translating a Figma design into SwiftUI (design \u2192 code), or pushing SwiftUI views / screens / tokens back into a Figma file (code \u2192 design). Triggers on phrases like 'implement this Figma design in SwiftUI', 'build this screen in Swift', 'push this SwiftUI view to Figma', 'mirror my Swift code in a Figma file', or whenever a Figma URL appears alongside `.swift` files / an `.xcodeproj`. Routes to a direction-specific reference doc; loads alongside `figma-use` for the code \u2192 design path.",
      "input": null,
      "name": "$figma:figma-swiftui"
    },
    {
      "description": "**MANDATORY prerequisite** \u2014 you MUST invoke this skill BEFORE every `use_figma` tool call. NEVER call `use_figma` directly without loading this skill first. Skipping it causes common, hard-to-debug failures. Trigger whenever the user wants to perform a write action or a unique read action that requires JavaScript execution in the Figma file context \u2014 e.g. create/edit/delete nodes, set up variables or tokens, build components and variants, modify auto-layout or fills, bind variables to properties, or inspect file structure programmatically.",
      "input": null,
      "name": "$figma:figma-use"
    },
    {
      "description": "This skill helps agents use Figma's use_figma MCP tool in the FigJam context. Can be used alongside figma-use which has foundational context for using the use_figma tool.",
      "input": null,
      "name": "$figma:figma-use-figjam"
    },
    {
      "description": "Motion / animation context for the `use_figma` MCP tool \u2014 animating Figma nodes via manual keyframes, animation styles, easing, and timeline duration. Load alongside figma-use whenever a task involves adding, editing, or inspecting animation on a node.",
      "input": null,
      "name": "$figma:figma-use-motion"
    },
    {
      "description": "This skill helps agents use Figma's use_figma MCP tool in the Slides context. Can be used alongside figma-use which has foundational context for using the use_figma tool.",
      "input": null,
      "name": "$figma:figma-use-slides"
    },
    {
      "description": 'Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.',
      "input": null,
      "name": "$find-skills"
    },
    {
      "description": 'Restrict file edits to a specific directory for the session. Blocks Edit and Write outside the allowed path. Use when debugging to prevent accidentally "fixing" unrelated code, or when you want to scope changes to one module. Use when asked to "freeze", "restrict edits", "only edit this folder", or "lock down edits". (gstack)',
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
      "description": `Upgrade gstack to the latest version. Detects global vs vendored install, runs the upgrade, and shows what's new. Use when asked to "upgrade gstack", "update gstack", or "get latest version". Voice triggers (speech-to-text aliases): "upgrade the tools", "update the tools", "gee stack upgrade", "g stack upgrade".`,
      "input": null,
      "name": "$gstack-upgrade"
    },
    {
      "description": 'Full safety mode: destructive command warnings + directory-scoped edits. Combines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with /freeze (blocks edits outside a specified directory). Use for maximum safety when touching prod or debugging live systems. Use when asked to "guard mode", "full safety", "lock it down", or "maximum safety". (gstack)',
      "input": null,
      "name": "$guard"
    },
    {
      "description": "Create, repair, validate, visually QA, and package Codex-compatible animated pets and pet spritesheets from character art, generated images, company or prospect brand cues, or visual references. Use when a user wants a lightweight-worker Codex pet workflow, a non-pixel custom pet style, a prospect or company mascot pet, or a full 8x9 animated pet atlas with transparent unused cells, QA contact sheets, and pet.json packaging. This skill composes the installed $imagegen system skill for visual generation and uses bundled scripts for deterministic spritesheet assembly.",
      "input": null,
      "name": "$hatch-pet"
    },
    {
      "description": 'Code quality dashboard. Wraps existing project tools (type checker, linter, test runner, dead code detector, shell linter), computes a weighted composite 0-10 score, and tracks trends over time. Use when: "health check", "code quality", "how healthy is the codebase", "run all checks", "quality score". (gstack)',
      "input": null,
      "name": "$health"
    },
    {
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "input": null,
      "name": "$high-end-visual-design"
    },
    {
      "description": 'Systematic debugging with root cause investigation. Four phases: investigate, analyze, hypothesize, implement. Iron Law: no fixes without root cause. Use when asked to "debug this", "fix this bug", "why is this broken", "investigate this error", or "root cause analysis". Proactively invoke this skill (do NOT debug directly) when the user reports errors, 500 errors, stack traces, unexpected behavior, "it was working yesterday", or is troubleshooting why something stopped working. (gstack)',
      "input": null,
      "name": "$investigate"
    },
    {
      "description": 'Land and deploy workflow. Merges the PR, waits for CI and deploy, verifies production health via canary checks. Takes over after /ship creates the PR. Use when: "merge", "land", "deploy", "merge and verify", "land it", "ship it to production". (gstack)',
      "input": null,
      "name": "$land-and-deploy"
    },
    {
      "description": `Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots are currently claimed by open PRs, which sibling Conductor workspaces have WIP work likely to ship soon, and what slot /ship would pick next. No mutations \u2014 just a snapshot. Use when asked to "landing report", "what's in the queue", "show me open PRs", or "which version do I claim next". (gstack)`,
      "input": null,
      "name": "$landing-report"
    },
    {
      "description": `Manage project learnings. Review, search, prune, and export what gstack has learned across sessions. Use when asked to "what have we learned", "show learnings", "prune stale learnings", or "export learnings". Proactively suggest when the user asks about past patterns or wonders "didn't we fix this before?"`,
      "input": null,
      "name": "$learn"
    },
    {
      "description": 'Turn any markdown file into a publication-quality PDF. Proper 1in margins, intelligent page breaks, page numbers, cover pages, running headers, curly quotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft artifact \u2014 a finished artifact. Use when asked to "make a PDF", "export to PDF", "turn this markdown into a PDF", or "generate a document". (gstack) Voice triggers (speech-to-text aliases): "make this a pdf", "make it a pdf", "export to pdf", "turn this into a pdf", "turn this markdown into a pdf", "generate a pdf", "make a pdf from", "pdf this markdown".',
      "input": null,
      "name": "$make-pdf"
    },
    {
      "description": `YC Office Hours \u2014 two modes. Startup mode: six forcing questions that expose demand reality, status quo, desperate specificity, narrowest wedge, observation, and future-fit. Builder mode: design thinking brainstorming for side projects, hackathons, learning, and open source. Saves a design doc. Use when asked to "brainstorm this", "I have an idea", "help me think through this", "office hours", or "is this worth building". Proactively invoke this skill (do NOT answer directly) when the user describes a new product idea, asks whether something is worth building, wants to think through design decisions for something that doesn't exist yet, or is exploring a concept before any code is written. Use before /plan-ceo-review or /plan-eng-review. (gstack)`,
      "input": null,
      "name": "$office-hours"
    },
    {
      "description": 'Launch GStack Browser \u2014 AI-controlled Chromium with the sidebar extension baked in. Opens a visible browser window where you can watch every action in real time. The sidebar shows a live activity feed and chat. Anti-bot stealth built in. Use when asked to "open gstack browser", "launch browser", "connect chrome", "open chrome", "real browser", "launch chrome", "side panel", or "control my browser". Voice triggers (speech-to-text aliases): "show me the browser".',
      "input": null,
      "name": "$open-gstack-browser"
    },
    {
      "description": 'Pair a remote AI agent with your browser. One command generates a setup key and prints instructions the other agent can follow to connect. Works with OpenClaw, Hermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent gets its own tab with scoped access (read+write by default, admin on request). Use when asked to "pair agent", "connect agent", "share browser", "remote browser", "let another agent use my browser", or "give browser access". (gstack) Voice triggers (speech-to-text aliases): "pair agent", "connect agent", "share my browser", "remote browser access".',
      "input": null,
      "name": "$pair-agent"
    },
    {
      "description": 'Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): "make a PDF", "generate a report", "write a proposal", "create a resume", "beautiful PDF", "professional document", "cover page", "polished PDF", "client-ready document". FILL (complete form fields): "fill in the form", "fill out this PDF", "complete the form fields", "write values into PDF", "what fields does this PDF have". REFORMAT (apply design to an existing doc): "reformat this document", "apply our style", "convert this Markdown/text to PDF", "make this doc look good", "re-style this PDF". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.',
      "input": null,
      "name": "$pdf"
    },
    {
      "description": "Read, create, inspect, render, and verify PDF files where visual layout matters. Use Poppler rendering plus Python tools such as reportlab, pdfplumber, and pypdf for generation and extraction.",
      "input": null,
      "name": "$pdf:pdf"
    },
    {
      "description": 'CEO/founder-mode plan review. Rethink the problem, find the 10-star product, challenge premises, expand scope when it creates a better product. Four modes: SCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick expansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials). Use when asked to "think bigger", "expand scope", "strategy review", "rethink this", or "is this ambitious enough". Proactively suggest when the user is questioning scope or ambition of a plan, or when the plan feels like it could be thinking bigger. (gstack)',
      "input": null,
      "name": "$plan-ceo-review"
    },
    {
      "description": `Designer's eye plan review \u2014 interactive, like CEO and Eng review. Rates each design dimension 0-10, explains what would make it a 10, then fixes the plan to get there. Works in plan mode. For live site visual audits, use /design-review. Use when asked to "review the design plan" or "design critique". Proactively suggest when the user has a plan with UI/UX components that should be reviewed before implementation. (gstack)`,
      "input": null,
      "name": "$plan-design-review"
    },
    {
      "description": 'Interactive developer experience plan review. Explores developer personas, benchmarks against competitors, designs magical moments, and traces friction points before scoring. Three modes: DX EXPANSION (competitive advantage), DX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only). Use when asked to "DX review", "developer experience audit", "devex review", or "API design review". Proactively suggest when the user has a plan for developer-facing products (APIs, CLIs, SDKs, libraries, platforms, docs). (gstack) Voice triggers (speech-to-text aliases): "dx review", "developer experience review", "devex review", "devex audit", "API design review", "onboarding review".',
      "input": null,
      "name": "$plan-devex-review"
    },
    {
      "description": 'Eng manager-mode plan review. Lock in the execution plan \u2014 architecture, data flow, diagrams, edge cases, test coverage, performance. Walks through issues interactively with opinionated recommendations. Use when asked to "review the architecture", "engineering review", or "lock in the plan". Proactively suggest when the user has a plan or design doc and is about to start coding \u2014 to catch architecture issues before implementation. (gstack) Voice triggers (speech-to-text aliases): "tech review", "technical review", "plan engineering review".',
      "input": null,
      "name": "$plan-eng-review"
    },
    {
      "description": 'Self-tuning question sensitivity + developer psychographic for gstack (v1: observational). Review which AskUserQuestion prompts fire across gstack skills, set per-question preferences (never-ask / always-ask / ask-only-for-one-way), inspect the dual-track profile (what you declared vs what your behavior suggests), and enable/disable question tuning. Conversational interface \u2014 no CLI syntax required. Use when asked to "tune questions", "stop asking me that", "too many questions", "show my profile", "what questions have I been asked", "show my vibe", "developer profile", or "turn off question tuning". (gstack) Proactively suggest when the user says the same gstack question has come up before, or when they explicitly override a recommendation for the Nth time.',
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
      "description": `Systematically QA test a web application and fix bugs found. Runs QA testing, then iteratively fixes bugs in source code, committing each fix atomically and re-verifying. Use when asked to "qa", "QA", "test this site", "find bugs", "test and fix", or "fix what's broken". Proactively suggest when the user says a feature is ready for testing or asks "does this work?". Three tiers: Quick (critical/high only), Standard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores, fix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack) Voice triggers (speech-to-text aliases): "quality check", "test the app", "run QA".`,
      "input": null,
      "name": "$qa"
    },
    {
      "description": `Report-only QA testing. Systematically tests a web application and produces a structured report with health score, screenshots, and repro steps \u2014 but never fixes anything. Use when asked to "just report bugs", "qa report only", or "test but don't fix". For the full test-fix-verify loop, use /qa instead. Proactively suggest when the user wants a bug report without any code changes. (gstack) Voice triggers (speech-to-text aliases): "bug report", "just check for bugs".`,
      "input": null,
      "name": "$qa-only"
    },
    {
      "description": 'Weekly engineering retrospective. Analyzes commit history, work patterns, and code quality metrics with persistent history and trend tracking. Team-aware: breaks down per-person contributions with praise and growth areas. Use when asked to "weekly retro", "what did we ship", or "engineering retrospective". Proactively suggest at the end of a work week or sprint. (gstack)',
      "input": null,
      "name": "$retro"
    },
    {
      "description": 'Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust boundary violations, conditional side effects, and other structural issues. Use when asked to "review this PR", "code review", "pre-landing review", or "check my diff". Proactively suggest when the user is about to merge or land code changes. (gstack)',
      "input": null,
      "name": "$review"
    },
    {
      "description": `Pull data from a web page. First call on a new intent prototypes the flow via $B primitives and returns JSON. Subsequent calls on a matching intent route to a codified browser-skill and return in ~200ms. Read-only \u2014 for mutating flows (form fills, clicks, submissions), use /automate. Use when asked to "scrape", "get data from", "pull", "extract from", or "what's on" a page. (gstack)`,
      "input": null,
      "name": "$scrape"
    },
    {
      "description": 'Import cookies from your real Chromium browser into the headless browse session. Opens an interactive picker UI where you select which cookie domains to import. Use before QA testing authenticated pages. Use when asked to "import cookies", "login to the site", or "authenticate the browser". (gstack)',
      "input": null,
      "name": "$setup-browser-cookies"
    },
    {
      "description": 'Configure deployment settings for /land-and-deploy. Detects your deploy platform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom), production URL, health check endpoints, and deploy status commands. Writes the configuration to CLAUDE.md so all future deploys are automatic. Use when: "setup deploy", "configure deployment", "set up land-and-deploy", "how do I deploy with gstack", "add deploy config".',
      "input": null,
      "name": "$setup-deploy"
    },
    {
      "description": 'Set up gbrain for this coding agent: install the CLI, initialize a local PGLite or Supabase brain, register MCP, capture per-remote trust policy. One command from zero to "gbrain is running, and this agent can call it." Use when: "setup gbrain", "connect gbrain", "start gbrain", "install gbrain", "configure gbrain for this machine". (gstack)',
      "input": null,
      "name": "$setup-gbrain"
    },
    {
      "description": 'Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION, update CHANGELOG, commit, push, create PR. Use when asked to "ship", "deploy", "push to main", "create a PR", "merge and push", or "get it deployed". Proactively invoke this skill (do NOT push/PR directly) when the user says code is ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)',
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
      "description": 'Codify the most recent successful /scrape flow into a permanent browser-skill on disk. Future /scrape calls with the same intent run the codified script in ~200ms instead of re-driving the page. Walks back through the conversation, synthesizes script.ts + script.test.ts + fixture, runs the test in a temp dir, and asks before committing. Use when asked to "skillify", "codify", "save this scrape", or "make this permanent". (gstack)',
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
      "description": 'Clear the freeze boundary set by /freeze, allowing edits to all directories again. Use when you want to widen edit scope without ending the session. Use when asked to "unfreeze", "unlock edits", "remove freeze", or "allow all edits". (gstack)',
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
  "id": "codex-acp",
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
  "version": "1.0.1"
};

// dist-src/agents/cortex-code.ts
var agent8 = {
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
      "description": 'Auto-review pipeline \u2014 reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to "auto review", "autoplan", "run all reviews", "review this plan\nautomatically", or "make the decisions for me".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): "auto plan", "automatic review".',
      "name": "autoplan"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: "performance", "benchmark", "page speed", "lighthouse", "web vitals",\n"bundle size", "load time". (gstack)\nVoice triggers (speech-to-text aliases): "speed test", "check performance".',
      "name": "benchmark"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side \u2014 compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers "which model is actually best\nfor this skill?" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: "benchmark models", "compare models",\n"which model is best for X", "cross-model comparison", "model shootout". (gstack)\nVoice triggers (speech-to-text aliases): "compare models", "model shootout", "which model is best".',
      "name": "benchmark-models"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to "open in browser", "test the\nsite", "take a screenshot", or "dogfood this". (gstack)',
      "name": "browse"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: "monitor deploy", "canary", "post-deploy check",\n"watch production", "verify deploy". (gstack)',
      "name": "canary"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to "be careful", "safety mode",\n"prod mode", or "careful mode". (gstack)',
      "name": "careful"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'OpenAI Codex CLI wrapper \u2014 three modes. Code review: independent diff review via\ncodex review with pass/fail gate. Challenge: adversarial mode that tries to break\nyour code. Consult: ask codex anything with session continuity for follow-ups.\nThe "200 IQ autistic developer" second opinion. Use when asked to "codex review",\n"codex challenge", "ask codex", "second opinion", or "consult codex". (gstack)\nVoice triggers (speech-to-text aliases): "code x", "code ex", "get another opinion".',
      "name": "codex"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Launch GStack Browser \u2014 AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to "open gstack browser", "launch browser", "connect chrome",\n"open chrome", "real browser", "launch chrome", "side panel", or "control my browser".\nVoice triggers (speech-to-text aliases): "show me the browser".',
      "name": "open-gstack-browser"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off \u2014 even across Conductor workspace handoffs.\nUse when asked to "resume", "restore context", "where was I", or\n"pick up where I left off". Pair with /context-save.\nFormerly /checkpoint resume \u2014 renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack)',
      "name": "context-restore"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to "save progress", "save state", "context save", or\n"save my work". Pair with /context-restore to resume later.\nFormerly /checkpoint \u2014 renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack)',
      "name": "context-save"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: "security audit", "threat model", "pentest review", "OWASP", "CSO review". (gstack)\nVoice triggers (speech-to-text aliases): "see-so", "see so", "security review", "security check", "vulnerability scan", "run security".',
      "name": "cso"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": `Design consultation: understands your product, researches the landscape, proposes a
complete design system (aesthetic, typography, color, layout, spacing, motion), and
generates font+color preview pages. Creates DESIGN.md as your project's design source
of truth. For existing sites, use /plan-design-review to infer the system instead.
Use when asked to "design system", "brand guidelines", or "create DESIGN.md".
Proactively suggest when starting a new project's UI with no existing
design system or DESIGN.md. (gstack)`,
      "name": "design-consultation"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: "finalize this design", "turn this into HTML",\n"build me a page", "implement this design", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): "build the design", "code the mockup", "make it real".',
      "name": "design-html"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": `Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,
AI slop patterns, and slow interactions \u2014 then fixes them. Iteratively fixes issues
in source code, committing each fix atomically and re-verifying with before/after
screenshots. For plan-mode design review (before implementation), use /plan-design-review.
Use when asked to "audit the design", "visual QA", "check if it looks good", or "design polish".
Proactively suggest when the user mentions visual inconsistencies or
wants to polish the look of a live site. (gstack)`,
      "name": "design-review"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": `Design shotgun: generate multiple AI design variants, open a comparison board,
collect structured feedback, and iterate. Standalone design exploration you can
run anytime. Use when: "explore designs", "show me options", "design variants",
"visual brainstorm", or "I don't like how this looks".
Proactively suggest when the user describes a UI feature but hasn't seen
what it could look like. (gstack)`,
      "name": "design-shotgun"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n"test the DX", "DX audit", "developer experience test", or "try the\nonboarding". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): "dx audit", "test the developer experience", "try the onboarding", "developer experience test".',
      "name": "devex-review"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to "update the docs", "sync documentation", or "post-ship docs".\nProactively suggest after a PR is merged or code is shipped. (gstack)',
      "name": "document-release"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n"fixing" unrelated code, or when you want to scope changes to one module.\nUse when asked to "freeze", "restrict edits", "only edit this folder",\nor "lock down edits". (gstack)',
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
      "description": `Upgrade gstack to the latest version. Detects global vs vendored install,
runs the upgrade, and shows what's new. Use when asked to "upgrade gstack",
"update gstack", or "get latest version".
Voice triggers (speech-to-text aliases): "upgrade the tools", "update the tools", "gee stack upgrade", "g stack upgrade".`,
      "name": "gstack-upgrade"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to "guard mode",\n"full safety", "lock it down", or "maximum safety". (gstack)',
      "name": "guard"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: "health check",\n"code quality", "how healthy is the codebase", "run all checks",\n"quality score". (gstack)',
      "name": "health"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to "debug this", "fix this bug", "why is this broken",\n"investigate this error", or "root cause analysis".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, "it was working\nyesterday", or is troubleshooting why something stopped working. (gstack)',
      "name": "investigate"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: "merge", "land", "deploy", "merge and verify",\n"land it", "ship it to production". (gstack)',
      "name": "land-and-deploy"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": `Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots
are currently claimed by open PRs, which sibling Conductor workspaces have
WIP work likely to ship soon, and what slot /ship would pick next. No
mutations \u2014 just a snapshot. Use when asked to "landing report", "what's in
the queue", "show me open PRs", or "which version do I claim next". (gstack)`,
      "name": "landing-report"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": `Manage project learnings. Review, search, prune, and export what gstack
has learned across sessions. Use when asked to "what have we learned",
"show learnings", "prune stale learnings", or "export learnings".
Proactively suggest when the user asks about past patterns or wonders
"didn't we fix this before?"`,
      "name": "learn"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact \u2014 a finished artifact. Use when asked to "make a PDF", "export to\nPDF", "turn this markdown into a PDF", or "generate a document". (gstack)\nVoice triggers (speech-to-text aliases): "make this a pdf", "make it a pdf", "export to pdf", "turn this into a pdf", "turn this markdown into a pdf", "generate a pdf", "make a pdf from", "pdf this markdown".',
      "name": "make-pdf"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": `YC Office Hours \u2014 two modes. Startup mode: six forcing questions that expose
demand reality, status quo, desperate specificity, narrowest wedge, observation,
and future-fit. Builder mode: design thinking brainstorming for side projects,
hackathons, learning, and open source. Saves a design doc.
Use when asked to "brainstorm this", "I have an idea", "help me think through
this", "office hours", or "is this worth building".
Proactively invoke this skill (do NOT answer directly) when the user describes
a new product idea, asks whether something is worth building, wants to think
through design decisions for something that doesn't exist yet, or is exploring
a concept before any code is written.
Use before /plan-ceo-review or /plan-eng-review. (gstack)`,
      "name": "office-hours"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to "pair agent", "connect agent", "share browser", "remote browser",\n"let another agent use my browser", or "give browser access". (gstack)\nVoice triggers (speech-to-text aliases): "pair agent", "connect agent", "share my browser", "remote browser access".',
      "name": "pair-agent"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to "think bigger", "expand scope", "strategy review", "rethink this",\nor "is this ambitious enough".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack)',
      "name": "plan-ceo-review"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": `Designer's eye plan review \u2014 interactive, like CEO and Eng review.
Rates each design dimension 0-10, explains what would make it a 10,
then fixes the plan to get there. Works in plan mode. For live site
visual audits, use /design-review. Use when asked to "review the design plan"
or "design critique".
Proactively suggest when the user has a plan with UI/UX components that
should be reviewed before implementation. (gstack)`,
      "name": "plan-design-review"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to "DX review", "developer experience audit", "devex review",\nor "API design review".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): "dx review", "developer experience review", "devex review", "devex audit", "API design review", "onboarding review".',
      "name": "plan-devex-review"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Eng manager-mode plan review. Lock in the execution plan \u2014 architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n"review the architecture", "engineering review", or "lock in the plan".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding \u2014 to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): "tech review", "technical review", "plan engineering review".',
      "name": "plan-eng-review"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface \u2014 no CLI syntax required.\n\nUse when asked to "tune questions", "stop asking me that", "too many questions",\n"show my profile", "what questions have I been asked", "show my vibe",\n"developer profile", or "turn off question tuning". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time.',
      "name": "plan-tune"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": `Systematically QA test a web application and fix bugs found. Runs QA testing,
then iteratively fixes bugs in source code, committing each fix atomically and
re-verifying. Use when asked to "qa", "QA", "test this site", "find bugs",
"test and fix", or "fix what's broken".
Proactively suggest when the user says a feature is ready for testing
or asks "does this work?". Three tiers: Quick (critical/high only),
Standard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,
fix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)
Voice triggers (speech-to-text aliases): "quality check", "test the app", "run QA".`,
      "name": "qa"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": `Report-only QA testing. Systematically tests a web application and produces a
structured report with health score, screenshots, and repro steps \u2014 but never
fixes anything. Use when asked to "just report bugs", "qa report only", or
"test but don't fix". For the full test-fix-verify loop, use /qa instead.
Proactively suggest when the user wants a bug report without any code changes. (gstack)
Voice triggers (speech-to-text aliases): "bug report", "just check for bugs".`,
      "name": "qa-only"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to "weekly retro", "what did we ship", or "engineering retrospective".\nProactively suggest at the end of a work week or sprint. (gstack)',
      "name": "retro"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust\nboundary violations, conditional side effects, and other structural issues. Use when\nasked to "review this PR", "code review", "pre-landing review", or "check my diff".\nProactively suggest when the user is about to merge or land code changes. (gstack)',
      "name": "review"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": `Pull data from a web page. First call on a new intent prototypes the flow
via $B primitives and returns JSON. Subsequent calls on a matching intent
route to a codified browser-skill and return in ~200ms. Read-only \u2014 for
mutating flows (form fills, clicks, submissions), use /automate.
Use when asked to "scrape", "get data from", "pull", "extract from", or
"what's on" a page. (gstack)`,
      "name": "scrape"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to "import cookies",\n"login to the site", or "authenticate the browser". (gstack)',
      "name": "setup-browser-cookies"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: "setup deploy", "configure deployment", "set up land-and-deploy",\n"how do I deploy with gstack", "add deploy config".',
      "name": "setup-deploy"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to "gbrain is running, and this agent\ncan call it." Use when: "setup gbrain", "connect gbrain", "start\ngbrain", "install gbrain", "configure gbrain for this machine". (gstack)',
      "name": "setup-gbrain"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to "ship", "deploy",\n"push to main", "create a PR", "merge and push", or "get it deployed".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)',
      "name": "ship"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to "skillify", "codify", "save this scrape", or\n"make this permanent". (gstack)',
      "name": "skillify"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": 'Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to "unfreeze", "unlock edits", "remove freeze", or\n"allow all edits". (gstack)',
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
      "description": "Snowflake organization management \u2014 accounts, org users, org insights, org spending, org security, globalorgadmin. ORGANIZATION_USAGE views, cross-account analytics, org-wide metrics. Use when the user asks about: 30 day summary of my organization, 30-day summary, 30 day summary, accounts in my organization, list accounts, how many accounts, account editions, account regions, account inventory, organization users, organization user groups, executive summary of my org, org overview, org spending, org cost, org security posture, org reliability, org auth posture, org hub, org usage views, trust center, MFA readiness, login failures, warehouse credits, storage trends, edition distribution, who has globalorgadmin, what is globalorgadmin, globalorgadmin role, orgadmin role, organization administrator, org admin, enable orgadmin, disable orgadmin, org admin permissions, account admins, ORGANIZATION_USAGE, org-level, cross-account, org-wide.",
      "name": "organization-management"
    },
    {
      "_meta": {
        "type": "skill"
      },
      "description": "Multi-phase team orchestration for feature implementation. Supports two entry paths: explicit user request for teammates, or autonomous complexity-based assessment after entering plan mode. HIGHEST PRIORITY \u2014 must be loaded FIRST (before any domain skills) when user asks to use teammates, teams, or parallel agents. Triggers: use teammates, use a team, work in parallel with agents, delegate to teammates, swarm this, swarm, team up on this, team up, orchestrate with subagents, subagent-orchestrated, gated workflow, multi-phase workflow, coordinate agents, spawn workers, worker/verifier, parallel agents, run as a team, investigate with agents, research with agents, explore with agents.",
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
      "description": "**[REQUIRED]** Use for **ALL** requests involving Snowpark Python \u2014 writing pipelines, transforming data, loading files, deploying stored procedures/UDFs, OR observability. MUST invoke this skill even for seemingly simple tasks because Snowflake DataFrame semantics differ from Pandas in ways that silently produce wrong results (NULL handling, division by zero, GREATEST, datediff, type casting). Always load this skill BEFORE writing any Snowpark code. Triggers: Snowpark, Python, DataFrame, pipeline, ETL, ingest, transform, load data, CSV, Parquet, JSON, XML, join, aggregate, window function, UDF, UDTF, UDAF, Stored Procedure, deploy, snow snowpark CLI, DBAPI, JDBC, external database, pull data, event table, logging, tracing, trace events, profiler, debug UDF, debug procedure, observability, telemetry, slow procedure, alert on error, monitor.",
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
      "description": "Use for ALL requests that mention: create, build, debug, fix, troubleshoot, optimize, improve, or analyze a semantic view \u2014 AND for requests about VQR suggestions, verified queries, verified query representations, seeding/generating queries, suggesting metrics, suggesting filters, recommending metrics/filters/facts, or enriching a semantic view. This is the entry point - even if the request seems simple. DO NOT attempt to create, debug, or generate suggestions for semantic views manually - always invoke this skill first. This skill guides users through creation, setup, auditing, VQR suggestion generation, filter & metric suggestions, and SQL generation debugging workflows for semantic views with Cortex Analyst.",
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
      "description": "**[REQUIRED]** for all Snowflake data governance tasks. Routes to six sub-skills: (1) horizon-catalog \u2014 access history, users, roles, grants, permissions, query history, compliance, catalog; (2) data-policy \u2014 [REQUIRED] masking, row access, projection policies, tag-based masking, protect sensitive data, column/TIMESTAMP masking; (3) sensitive-data-classification \u2014 [REQUIRED for ALL classification] PII, classify, data classification, manual/automatic classification, Classification Profile, auto_tag, custom classifiers, regex, semantic/privacy category, IDENTIFIER, QUASI_IDENTIFIER, SENSITIVE, SYSTEM$CLASSIFY, DATA_CLASSIFICATION_LATEST, GDPR/CCPA/PCI; (4) governance-maturity-score \u2014 governance posture, maturity score, assessment, recommendations; (5) observability-maturity-score \u2014 data observability, DMF coverage, quality monitoring maturity, lineage usage, observability assessment; (6) object-contacts \u2014 [REQUIRED] assign data steward, create contact, object contact, contact report, who owns this table, SET CONTACT, data stewardship. MUST be used for classification or masking tasks \u2014 do not answer from general knowledge. horizon-catalog is the fallback. Triggers: governance, access history, permissions, grants, roles, audit, compliance, catalog, masking policy, row access policy, PII, sensitive data, classification, run classification, SYSTEM$CLASSIFY, classifier, classification profile, DATA_CLASSIFICATION_LATEST, detect PII, GDPR, CCPA, PCI, tag sensitive columns, governance maturity score, governance posture, how well governed, data observability, observability maturity, DMF coverage, lineage usage, observability assessment, data steward, object contact, assign contact, who owns this table, contact report, SET CONTACT.",
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
      "description": "MUST consult whenever any command needs a credential, secret, API key, token, or password \u2014 whether discovered from an error, source code, --help output, or any other signal. MUST also consult when the user shares, pastes, or includes a secret value directly in their message. Also use when: the user asks about /secrets, storing credentials, secret scopes, or consent modes. Triggers: secret, secrets, /secrets, API key, credential, token, password, authentication, unauthorized, 401, 403, forbidden, EACCES, permission denied, access denied, missing key, invalid token, auth error, connection refused, login failed, .env, environment variable, env var, keychain, export SECRET, cortex secret list, inline secret injection, pasted secret, shared secret, my key is, my password is, my token is, here is my, use it to.",
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
      "description": 'Create organizational listings to share data products via Internal Marketplace. Triggers: create data product, share to internal marketplace, publish to internal marketplace, share to other accounts, share with other accounts, organization listing, org listing, share across accounts, internal marketplace, cross-account sharing, share my agent to other accounts.\nWHEN TO USE THIS SKILL: - User wants to share with OTHER ACCOUNTS \u2192 Use this skill - User mentions "internal marketplace" or "data product" (even for same account) \u2192 Use this skill\nWHEN TO USE RBAC INSTEAD (not this skill): - User wants to share with roles in SAME account only - User does NOT mention "internal marketplace" or "data product" or "listing" - Example: "share this table with ANALYST role" \u2192 Use GRANT, not this skill\nWHEN NOT TO USE THIS SKILL: - User wants to migrate an EXISTING direct share to an org listing \u2192 Use the direct-share-to-org-listing-migration skill instead - User wants to migrate an EXISTING personalized listing to an org listing \u2192 Use the personalized-listing-to-org-listing-migration skill instead - User wants to migrate an EXISTING private data exchange (PDX) listing to an org listing \u2192 Use the pdx-listing-to-org-listing-migration skill instead\nKEY: If user says "share via internal marketplace" or "as a data product" even for same-account roles, use this skill. Otherwise, same-account = regular RBAC grants.',
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
      "description": "**[REQUIRED]** Use for **ALL** requests involving Snowflake Postgres, and for general help working with any PostgreSQL database through standard PG tooling (psql, ~/.pg_service.conf, ~/.pgpass, pg_doctor diagnostics). Triggers: 'postgres', 'postgresql', 'pg', 'psql', 'create postgres instance', 'show postgres instances', 'suspend postgres', 'resume postgres', 'reset postgres credentials', 'rotate postgres password', 'import postgres connection', 'postgres network policy', 'postgres health check', 'pg_doctor', 'pg_lake', 'postgres iceberg', 'pg iceberg', 'postgres slow queries', 'cache hit', 'bloat', 'vacuum', 'dead rows', 'postgres locks', 'blocking queries', 'postgres disk usage', 'active postgres queries', 'postgres connection count', 'neon', 'supabase', 'rds postgres', 'aurora postgres', 'azure postgres', 'crunchy bridge', 'external postgres', 'my postgres'. Do NOT use for generic Iceberg / catalog integration / storage integration / data lake requests \u2014 those are owned by the `iceberg` skill. Only handle Iceberg when it is scoped to pg_lake (Postgres-resident Iceberg tables).",
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

// dist-src/agents/corust-agent.ts
var agent9 = {
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
      "description": 'Auto-review pipeline \u2014 reads the full CEO, design, eng, and DX review skills from diskand runs them sequentially with auto-decisions using 6 decision principles. Surfacestaste decisions (close approaches, borderline scope, codex disagreements) at a finalapproval gate. One command, fully reviewed plan out.Use when asked to "auto review", "autoplan", "run all reviews", "review this planautomatically", or "make the decisions for me".Proactively suggest when the user has a plan file and wants to run the full reviewgauntlet without answering 15-30 intermediate questions. (gstack)Voice triggers (speech-to-text aliases): "auto plan", "automatic review".',
      "input": null,
      "name": "autoplan"
    },
    {
      "description": 'Performance regression detection using the browse daemon. Establishesbaselines for page load times, Core Web Vitals, and resource sizes.Compares before/after on every PR. Tracks performance trends over time.Use when: "performance", "benchmark", "page speed", "lighthouse", "web vitals","bundle size", "load time". (gstack)Voice triggers (speech-to-text aliases): "speed test", "check performance".',
      "input": null,
      "name": "benchmark"
    },
    {
      "description": 'Cross-model benchmark for gstack skills. Runs the same prompt through Claude,GPT (via Codex CLI), and Gemini side-by-side \u2014 compares latency, tokens, cost,and optionally quality via LLM judge. Answers "which model is actually bestfor this skill?" with data instead of vibes. Separate from /benchmark, whichmeasures web page performance. Use when: "benchmark models", "compare models","which model is best for X", "cross-model comparison", "model shootout". (gstack)Voice triggers (speech-to-text aliases): "compare models", "model shootout", "which model is best".',
      "input": null,
      "name": "benchmark-models"
    },
    {
      "description": 'Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact withelements, verify page state, diff before/after actions, take annotated screenshots, checkresponsive layouts, test forms and uploads, handle dialogs, and assert element states.~100ms per command. Use when you need to test a feature, verify a deployment, dogfood auser flow, or file a bug with evidence. Use when asked to "open in browser", "test thesite", "take a screenshot", or "dogfood this". (gstack)',
      "input": null,
      "name": "browse"
    },
    {
      "description": 'Post-deploy canary monitoring. Watches the live app for console errors,performance regressions, and page failures using the browse daemon. Takesperiodic screenshots, compares against pre-deploy baselines, and alertson anomalies. Use when: "monitor deploy", "canary", "post-deploy check","watch production", "verify deploy". (gstack)',
      "input": null,
      "name": "canary"
    },
    {
      "description": 'Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,force-push, git reset --hard, kubectl delete, and similar destructive operations.User can override each warning. Use when touching prod, debugging live systems,or working in a shared environment. Use when asked to "be careful", "safety mode","prod mode", or "careful mode". (gstack)',
      "input": null,
      "name": "careful"
    },
    {
      "description": 'OpenAI Codex CLI wrapper \u2014 three modes. Code review: independent diff review viacodex review with pass/fail gate. Challenge: adversarial mode that tries to breakyour code. Consult: ask codex anything with session continuity for follow-ups.The "200 IQ autistic developer" second opinion. Use when asked to "codex review","codex challenge", "ask codex", "second opinion", or "consult codex". (gstack)Voice triggers (speech-to-text aliases): "code x", "code ex", "get another opinion".',
      "input": null,
      "name": "codex"
    },
    {
      "description": 'Restore working context saved earlier by /context-save. Loads the most recentsaved state (across all branches by default) so you can pick up where youleft off \u2014 even across Conductor workspace handoffs.Use when asked to "resume", "restore context", "where was I", or"pick up where I left off". Pair with /context-save.Formerly /checkpoint resume \u2014 renamed because Claude Code treats /checkpointas a native rewind alias in current environments. (gstack)',
      "input": null,
      "name": "context-restore"
    },
    {
      "description": 'Save working context. Captures git state, decisions made, and remaining workso any future session can pick up without losing a beat.Use when asked to "save progress", "save state", "context save", or"save my work". Pair with /context-restore to resume later.Formerly /checkpoint \u2014 renamed because Claude Code treats /checkpoint as anative rewind alias in current environments, which was shadowing this skill.(gstack)',
      "input": null,
      "name": "context-save"
    },
    {
      "description": 'Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,dependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chainscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.Two modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deepscan, 2/10 bar). Trend tracking across audit runs.Use when: "security audit", "threat model", "pentest review", "OWASP", "CSO review". (gstack)Voice triggers (speech-to-text aliases): "see-so", "see so", "security review", "security check", "vulnerability scan", "run security".',
      "input": null,
      "name": "cso"
    },
    {
      "description": "Multi Agents Looping \u2014 a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "input": null,
      "name": "deep-investigate"
    },
    {
      "description": `Design consultation: understands your product, researches the landscape, proposes acomplete design system (aesthetic, typography, color, layout, spacing, motion), andgenerates font+color preview pages. Creates DESIGN.md as your project's design sourceof truth. For existing sites, use /plan-design-review to infer the system instead.Use when asked to "design system", "brand guidelines", or "create DESIGN.md".Proactively suggest when starting a new project's UI with no existingdesign system or DESIGN.md. (gstack)`,
      "input": null,
      "name": "design-consultation"
    },
    {
      "description": 'Design finalization: generates production-quality Pretext-native HTML/CSS.Works with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,design review context from /plan-design-review, or from scratch with a userdescription. Text actually reflows, heights are computed, layouts are dynamic.30KB overhead, zero deps. Smart API routing: picks the right Pretext patternsfor each design type. Use when: "finalize this design", "turn this into HTML","build me a page", "implement this design", or after any planning skill.Proactively suggest when user has approved a design or has a plan ready. (gstack)Voice triggers (speech-to-text aliases): "build the design", "code the mockup", "make it real".',
      "input": null,
      "name": "design-html"
    },
    {
      "description": `Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,AI slop patterns, and slow interactions \u2014 then fixes them. Iteratively fixes issuesin source code, committing each fix atomically and re-verifying with before/afterscreenshots. For plan-mode design review (before implementation), use /plan-design-review.Use when asked to "audit the design", "visual QA", "check if it looks good", or "design polish".Proactively suggest when the user mentions visual inconsistencies orwants to polish the look of a live site. (gstack)`,
      "input": null,
      "name": "design-review"
    },
    {
      "description": `Design shotgun: generate multiple AI design variants, open a comparison board,collect structured feedback, and iterate. Standalone design exploration you canrun anytime. Use when: "explore designs", "show me options", "design variants","visual brainstorm", or "I don't like how this looks".Proactively suggest when the user describes a UI feature but hasn't seenwhat it could look like. (gstack)`,
      "input": null,
      "name": "design-shotgun"
    },
    {
      "description": 'Live developer experience audit. Uses the browse tool to actually TEST thedeveloper experience: navigates docs, tries the getting started flow, timesTTHW, screenshots error messages, evaluates CLI help text. Produces a DXscorecard with evidence. Compares against /plan-devex-review scores if theyexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to"test the DX", "DX audit", "developer experience test", or "try theonboarding". Proactively suggest after shipping a developer-facing feature. (gstack)Voice triggers (speech-to-text aliases): "dx audit", "test the developer experience", "try the onboarding", "developer experience test".',
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
      "description": 'Post-ship documentation update. Reads all project docs, cross-references thediff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,polishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use whenasked to "update the docs", "sync documentation", or "post-ship docs".Proactively suggest after a PR is merged or code is shipped. (gstack)',
      "input": null,
      "name": "document-release"
    },
    {
      "description": `Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document \u2014 including when they say "write a report", "draft a proposal", "make a contract", "fill in this form", "reformat to match this template", or any task whose final output is a .docx file. Even if the user doesn't mention "docx" explicitly, if the task implies a printable/formal document, use this skill.`,
      "input": null,
      "name": "docx"
    },
    {
      "description": 'Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.',
      "input": null,
      "name": "find-skills"
    },
    {
      "description": 'Restrict file edits to a specific directory for the session. Blocks Edit andWrite outside the allowed path. Use when debugging to prevent accidentally"fixing" unrelated code, or when you want to scope changes to one module.Use when asked to "freeze", "restrict edits", "only edit this folder",or "lock down edits". (gstack)',
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
      "description": `Upgrade gstack to the latest version. Detects global vs vendored install,runs the upgrade, and shows what's new. Use when asked to "upgrade gstack","update gstack", or "get latest version".Voice triggers (speech-to-text aliases): "upgrade the tools", "update the tools", "gee stack upgrade", "g stack upgrade".`,
      "input": null,
      "name": "gstack-upgrade"
    },
    {
      "description": 'Full safety mode: destructive command warnings + directory-scoped edits.Combines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with/freeze (blocks edits outside a specified directory). Use for maximum safetywhen touching prod or debugging live systems. Use when asked to "guard mode","full safety", "lock it down", or "maximum safety". (gstack)',
      "input": null,
      "name": "guard"
    },
    {
      "description": "Scrape the Hacker News front page (titles, points, comment counts).",
      "input": null,
      "name": "hackernews-frontpage"
    },
    {
      "description": 'Code quality dashboard. Wraps existing project tools (type checker, linter,test runner, dead code detector, shell linter), computes a weighted composite0-10 score, and tracks trends over time. Use when: "health check","code quality", "how healthy is the codebase", "run all checks","quality score". (gstack)',
      "input": null,
      "name": "health"
    },
    {
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "input": null,
      "name": "high-end-visual-design"
    },
    {
      "description": 'Systematic debugging with root cause investigation. Four phases: investigate,analyze, hypothesize, implement. Iron Law: no fixes without root cause.Use when asked to "debug this", "fix this bug", "why is this broken","investigate this error", or "root cause analysis".Proactively invoke this skill (do NOT debug directly) when the user reportserrors, 500 errors, stack traces, unexpected behavior, "it was workingyesterday", or is troubleshooting why something stopped working. (gstack)',
      "input": null,
      "name": "investigate"
    },
    {
      "description": 'Land and deploy workflow. Merges the PR, waits for CI and deploy,verifies production health via canary checks. Takes over after /shipcreates the PR. Use when: "merge", "land", "deploy", "merge and verify","land it", "ship it to production". (gstack)',
      "input": null,
      "name": "land-and-deploy"
    },
    {
      "description": `Read-only queue dashboard for workspace-aware ship. Shows which VERSION slotsare currently claimed by open PRs, which sibling Conductor workspaces haveWIP work likely to ship soon, and what slot /ship would pick next. Nomutations \u2014 just a snapshot. Use when asked to "landing report", "what's inthe queue", "show me open PRs", or "which version do I claim next". (gstack)`,
      "input": null,
      "name": "landing-report"
    },
    {
      "description": `Manage project learnings. Review, search, prune, and export what gstackhas learned across sessions. Use when asked to "what have we learned","show learnings", "prune stale learnings", or "export learnings".Proactively suggest when the user asks about past patterns or wonders"didn't we fix this before?"`,
      "input": null,
      "name": "learn"
    },
    {
      "description": 'Turn any markdown file into a publication-quality PDF. Proper 1in margins,intelligent page breaks, page numbers, cover pages, running headers, curlyquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draftartifact \u2014 a finished artifact. Use when asked to "make a PDF", "export toPDF", "turn this markdown into a PDF", or "generate a document". (gstack)Voice triggers (speech-to-text aliases): "make this a pdf", "make it a pdf", "export to pdf", "turn this into a pdf", "turn this markdown into a pdf", "generate a pdf", "make a pdf from", "pdf this markdown".',
      "input": null,
      "name": "make-pdf"
    },
    {
      "description": `YC Office Hours \u2014 two modes. Startup mode: six forcing questions that exposedemand reality, status quo, desperate specificity, narrowest wedge, observation,and future-fit. Builder mode: design thinking brainstorming for side projects,hackathons, learning, and open source. Saves a design doc.Use when asked to "brainstorm this", "I have an idea", "help me think throughthis", "office hours", or "is this worth building".Proactively invoke this skill (do NOT answer directly) when the user describesa new product idea, asks whether something is worth building, wants to thinkthrough design decisions for something that doesn't exist yet, or is exploringa concept before any code is written.Use before /plan-ceo-review or /plan-eng-review. (gstack)`,
      "input": null,
      "name": "office-hours"
    },
    {
      "description": 'Launch GStack Browser \u2014 AI-controlled Chromium with the sidebar extension baked in.Opens a visible browser window where you can watch every action in real time.The sidebar shows a live activity feed and chat. Anti-bot stealth built in.Use when asked to "open gstack browser", "launch browser", "connect chrome","open chrome", "real browser", "launch chrome", "side panel", or "control my browser".Voice triggers (speech-to-text aliases): "show me the browser".',
      "input": null,
      "name": "open-gstack-browser"
    },
    {
      "description": 'Pair a remote AI agent with your browser. One command generates a setup key andprints instructions the other agent can follow to connect. Works with OpenClaw,Hermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agentgets its own tab with scoped access (read+write by default, admin on request).Use when asked to "pair agent", "connect agent", "share browser", "remote browser","let another agent use my browser", or "give browser access". (gstack)Voice triggers (speech-to-text aliases): "pair agent", "connect agent", "share my browser", "remote browser access".',
      "input": null,
      "name": "pair-agent"
    },
    {
      "description": 'Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): "make a PDF", "generate a report", "write a proposal", "create a resume", "beautiful PDF", "professional document", "cover page", "polished PDF", "client-ready document". FILL (complete form fields): "fill in the form", "fill out this PDF", "complete the form fields", "write values into PDF", "what fields does this PDF have". REFORMAT (apply design to an existing doc): "reformat this document", "apply our style", "convert this Markdown/text to PDF", "make this doc look good", "re-style this PDF". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.',
      "input": null,
      "name": "pdf"
    },
    {
      "description": 'CEO/founder-mode plan review. Rethink the problem, find the 10-star product,challenge premises, expand scope when it creates a better product. Four modes:SCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pickexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).Use when asked to "think bigger", "expand scope", "strategy review", "rethink this",or "is this ambitious enough".Proactively suggest when the user is questioning scope or ambition of a plan,or when the plan feels like it could be thinking bigger. (gstack)',
      "input": null,
      "name": "plan-ceo-review"
    },
    {
      "description": `Designer's eye plan review \u2014 interactive, like CEO and Eng review.Rates each design dimension 0-10, explains what would make it a 10,then fixes the plan to get there. Works in plan mode. For live sitevisual audits, use /design-review. Use when asked to "review the design plan"or "design critique".Proactively suggest when the user has a plan with UI/UX components thatshould be reviewed before implementation. (gstack)`,
      "input": null,
      "name": "plan-design-review"
    },
    {
      "description": 'Interactive developer experience plan review. Explores developer personas,benchmarks against competitors, designs magical moments, and traces frictionpoints before scoring. Three modes: DX EXPANSION (competitive advantage),DX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).Use when asked to "DX review", "developer experience audit", "devex review",or "API design review".Proactively suggest when the user has a plan for developer-facing products(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)Voice triggers (speech-to-text aliases): "dx review", "developer experience review", "devex review", "devex audit", "API design review", "onboarding review".',
      "input": null,
      "name": "plan-devex-review"
    },
    {
      "description": 'Eng manager-mode plan review. Lock in the execution plan \u2014 architecture,data flow, diagrams, edge cases, test coverage, performance. Walks throughissues interactively with opinionated recommendations. Use when asked to"review the architecture", "engineering review", or "lock in the plan".Proactively suggest when the user has a plan or design doc and is about tostart coding \u2014 to catch architecture issues before implementation. (gstack)Voice triggers (speech-to-text aliases): "tech review", "technical review", "plan engineering review".',
      "input": null,
      "name": "plan-eng-review"
    },
    {
      "description": 'Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).Review which AskUserQuestion prompts fire across gstack skills, set per-question preferences(never-ask / always-ask / ask-only-for-one-way), inspect the dual-trackprofile (what you declared vs what your behavior suggests), and enable/disablequestion tuning. Conversational interface \u2014 no CLI syntax required.Use when asked to "tune questions", "stop asking me that", "too many questions","show my profile", "what questions have I been asked", "show my vibe","developer profile", or "turn off question tuning". (gstack)Proactively suggest when the user says the same gstack question has come up before,or when they explicitly override a recommendation for the Nth time.',
      "input": null,
      "name": "plan-tune"
    },
    {
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "input": null,
      "name": "pptx-generator"
    },
    {
      "description": `Systematically QA test a web application and fix bugs found. Runs QA testing,then iteratively fixes bugs in source code, committing each fix atomically andre-verifying. Use when asked to "qa", "QA", "test this site", "find bugs","test and fix", or "fix what's broken".Proactively suggest when the user says a feature is ready for testingor asks "does this work?". Three tiers: Quick (critical/high only),Standard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,fix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)Voice triggers (speech-to-text aliases): "quality check", "test the app", "run QA".`,
      "input": null,
      "name": "qa"
    },
    {
      "description": `Report-only QA testing. Systematically tests a web application and produces astructured report with health score, screenshots, and repro steps \u2014 but neverfixes anything. Use when asked to "just report bugs", "qa report only", or"test but don't fix". For the full test-fix-verify loop, use /qa instead.Proactively suggest when the user wants a bug report without any code changes. (gstack)Voice triggers (speech-to-text aliases): "bug report", "just check for bugs".`,
      "input": null,
      "name": "qa-only"
    },
    {
      "description": 'Weekly engineering retrospective. Analyzes commit history, work patterns,and code quality metrics with persistent history and trend tracking.Team-aware: breaks down per-person contributions with praise and growth areas.Use when asked to "weekly retro", "what did we ship", or "engineering retrospective".Proactively suggest at the end of a work week or sprint. (gstack)',
      "input": null,
      "name": "retro"
    },
    {
      "description": 'Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trustboundary violations, conditional side effects, and other structural issues. Use whenasked to "review this PR", "code review", "pre-landing review", or "check my diff".Proactively suggest when the user is about to merge or land code changes. (gstack)',
      "input": null,
      "name": "review"
    },
    {
      "description": `Pull data from a web page. First call on a new intent prototypes the flowvia $B primitives and returns JSON. Subsequent calls on a matching intentroute to a codified browser-skill and return in ~200ms. Read-only \u2014 formutating flows (form fills, clicks, submissions), use /automate.Use when asked to "scrape", "get data from", "pull", "extract from", or"what's on" a page. (gstack)`,
      "input": null,
      "name": "scrape"
    },
    {
      "description": 'Import cookies from your real Chromium browser into the headless browse session.Opens an interactive picker UI where you select which cookie domains to import.Use before QA testing authenticated pages. Use when asked to "import cookies","login to the site", or "authenticate the browser". (gstack)',
      "input": null,
      "name": "setup-browser-cookies"
    },
    {
      "description": 'Configure deployment settings for /land-and-deploy. Detects your deployplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),production URL, health check endpoints, and deploy status commands. Writesthe configuration to CLAUDE.md so all future deploys are automatic.Use when: "setup deploy", "configure deployment", "set up land-and-deploy","how do I deploy with gstack", "add deploy config".',
      "input": null,
      "name": "setup-deploy"
    },
    {
      "description": 'Set up gbrain for this coding agent: install the CLI, initialize alocal PGLite or Supabase brain, register MCP, capture per-remote trustpolicy. One command from zero to "gbrain is running, and this agentcan call it." Use when: "setup gbrain", "connect gbrain", "startgbrain", "install gbrain", "configure gbrain for this machine". (gstack)',
      "input": null,
      "name": "setup-gbrain"
    },
    {
      "description": 'Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,update CHANGELOG, commit, push, create PR. Use when asked to "ship", "deploy","push to main", "create a PR", "merge and push", or "get it deployed".Proactively invoke this skill (do NOT push/PR directly) when the user says codeis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)',
      "input": null,
      "name": "ship"
    },
    {
      "description": `Create, write, or improve a skill for corust-agent. Use this skill whenever the user wants to make a new skill, edit an existing skill's SKILL.md, improve a skill's description, add bundled scripts or references to a skill, figure out where to install a skill, or understand how skills work in corust. Also trigger when the user asks "how do I add a skill", "can you turn this workflow into a skill", "what should go in SKILL.md", or "my skill isn't triggering correctly".`,
      "input": null,
      "name": "skill-creator"
    },
    {
      "description": "Install Agents skills into $AGENTS_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos).",
      "input": null,
      "name": "skill-installer"
    },
    {
      "description": 'Codify the most recent successful /scrape flow into a permanentbrowser-skill on disk. Future /scrape calls with the same intent runthe codified script in ~200ms instead of re-driving the page. Walksback through the conversation, synthesizes script.ts + script.test.ts+ fixture, runs the test in a temp dir, and asks before committing.Use when asked to "skillify", "codify", "save this scrape", or"make this permanent". (gstack)',
      "input": null,
      "name": "skillify"
    },
    {
      "description": 'Clear the freeze boundary set by /freeze, allowing edits to all directoriesagain. Use when you want to widen edit scope without ending the session.Use when asked to "unfreeze", "unlock edits", "remove freeze", or"allow all edits". (gstack)',
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

// dist-src/agents/crow-cli.ts
var agent10 = {
  "agentCapabilities": {
    "loadSession": true,
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    }
  },
  "agentInfo": {
    "name": "crow-cli",
    "title": "crow-cli",
    "version": "0.1.24"
  },
  "authMethods": [
    {
      "_meta": {
        "terminal-auth": {
          "args": [
            "crow-cli",
            "acp"
          ],
          "command": "uvx",
          "env": {},
          "label": "Crow Auth",
          "type": "terminal"
        }
      },
      "description": "This agent does not require authentication for FOSS deployments.",
      "id": "none",
      "name": "No Authentication Required"
    }
  ],
  "commands": [
    {
      "description": "Compact the conversation history to reduce context size",
      "name": "compact"
    },
    {
      "description": "Show available slash commands",
      "name": "help"
    },
    {
      "description": "Clear the session context",
      "name": "clear"
    },
    {
      "description": "Stop current operation",
      "name": "stop"
    }
  ],
  "configOptions": [
    {
      "category": "model",
      "currentValue": "",
      "id": "model",
      "name": "Model",
      "options": [],
      "type": "select"
    }
  ],
  "currentModeId": null,
  "id": "crow-cli",
  "modes": [],
  "name": "crow-cli",
  "protocolVersion": 1,
  "version": "0.1.24"
};

// dist-src/agents/cursor.ts
var agent11 = {
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
      "description": 'Fan out one task across multiple models and compare results only. Do not apply any run to main. Example: "/best-of-n opus,codex <task>". (global)',
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
      "description": 'Auto-review pipeline \u2014 reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to "auto review", "autoplan", "run all reviews", "review this plan\nautomatically", or "make the decisions for me".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): "auto plan", "automatic review".\n (user skill)',
      "name": "gstack-autoplan"
    },
    {
      "description": 'Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side \u2014 compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers "which model is actually best\nfor this skill?" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: "benchmark models", "compare models",\n"which model is best for X", "cross-model comparison", "model shootout". (gstack)\nVoice triggers (speech-to-text aliases): "compare models", "model shootout", "which model is best".\n (user skill)',
      "name": "gstack-benchmark-models"
    },
    {
      "description": 'Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: "performance", "benchmark", "page speed", "lighthouse", "web vitals",\n"bundle size", "load time". (gstack)\nVoice triggers (speech-to-text aliases): "speed test", "check performance".\n (user skill)',
      "name": "gstack-benchmark"
    },
    {
      "description": 'Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to "open in browser", "test the\nsite", "take a screenshot", or "dogfood this". (gstack)\n (user skill)',
      "name": "gstack-browse"
    },
    {
      "description": 'Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: "monitor deploy", "canary", "post-deploy check",\n"watch production", "verify deploy". (gstack)\n (user skill)',
      "name": "gstack-canary"
    },
    {
      "description": 'Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to "be careful", "safety mode",\n"prod mode", or "careful mode". (gstack)\n (user skill)',
      "name": "gstack-careful"
    },
    {
      "description": 'Claude Code CLI wrapper for non-Claude hosts - three modes. Review: independent\ndiff review via claude -p. Challenge: adversarial failure-mode review. Consult:\nask Claude about the repo with read-only file tools. Use when asked for "claude\nreview", "claude challenge", "ask claude", "second opinion from claude", or\n"outside voice". (gstack)\n (user skill)',
      "name": "gstack-claude"
    },
    {
      "description": 'Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off \u2014 even across Conductor workspace handoffs.\nUse when asked to "resume", "restore context", "where was I", or\n"pick up where I left off". Pair with /context-save.\nFormerly /checkpoint resume \u2014 renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack)\n (user skill)',
      "name": "gstack-context-restore"
    },
    {
      "description": 'Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to "save progress", "save state", "context save", or\n"save my work". Pair with /context-restore to resume later.\nFormerly /checkpoint \u2014 renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack)\n (user skill)',
      "name": "gstack-context-save"
    },
    {
      "description": 'Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: "security audit", "threat model", "pentest review", "OWASP", "CSO review". (gstack)\nVoice triggers (speech-to-text aliases): "see-so", "see so", "security review", "security check", "vulnerability scan", "run security".\n (user skill)',
      "name": "gstack-cso"
    },
    {
      "description": `Design consultation: understands your product, researches the landscape, proposes a
complete design system (aesthetic, typography, color, layout, spacing, motion), and
generates font+color preview pages. Creates DESIGN.md as your project's design source
of truth. For existing sites, use /plan-design-review to infer the system instead.
Use when asked to "design system", "brand guidelines", or "create DESIGN.md".
Proactively suggest when starting a new project's UI with no existing
design system or DESIGN.md. (gstack)
 (user skill)`,
      "name": "gstack-design-consultation"
    },
    {
      "description": 'Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: "finalize this design", "turn this into HTML",\n"build me a page", "implement this design", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): "build the design", "code the mockup", "make it real".\n (user skill)',
      "name": "gstack-design-html"
    },
    {
      "description": `Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,
AI slop patterns, and slow interactions \u2014 then fixes them. Iteratively fixes issues
in source code, committing each fix atomically and re-verifying with before/after
screenshots. For plan-mode design review (before implementation), use /plan-design-review.
Use when asked to "audit the design", "visual QA", "check if it looks good", or "design polish".
Proactively suggest when the user mentions visual inconsistencies or
wants to polish the look of a live site. (gstack)
 (user skill)`,
      "name": "gstack-design-review"
    },
    {
      "description": `Design shotgun: generate multiple AI design variants, open a comparison board,
collect structured feedback, and iterate. Standalone design exploration you can
run anytime. Use when: "explore designs", "show me options", "design variants",
"visual brainstorm", or "I don't like how this looks".
Proactively suggest when the user describes a UI feature but hasn't seen
what it could look like. (gstack)
 (user skill)`,
      "name": "gstack-design-shotgun"
    },
    {
      "description": 'Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n"test the DX", "DX audit", "developer experience test", or "try the\nonboarding". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): "dx audit", "test the developer experience", "try the onboarding", "developer experience test".\n (user skill)',
      "name": "gstack-devex-review"
    },
    {
      "description": 'Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to "update the docs", "sync documentation", or "post-ship docs".\nProactively suggest after a PR is merged or code is shipped. (gstack)\n (user skill)',
      "name": "gstack-document-release"
    },
    {
      "description": 'Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n"fixing" unrelated code, or when you want to scope changes to one module.\nUse when asked to "freeze", "restrict edits", "only edit this folder",\nor "lock down edits". (gstack)\n (user skill)',
      "name": "gstack-freeze"
    },
    {
      "description": 'Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to "guard mode",\n"full safety", "lock it down", or "maximum safety". (gstack)\n (user skill)',
      "name": "gstack-guard"
    },
    {
      "description": 'Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: "health check",\n"code quality", "how healthy is the codebase", "run all checks",\n"quality score". (gstack)\n (user skill)',
      "name": "gstack-health"
    },
    {
      "description": 'Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to "debug this", "fix this bug", "why is this broken",\n"investigate this error", or "root cause analysis".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, "it was working\nyesterday", or is troubleshooting why something stopped working. (gstack)\n (user skill)',
      "name": "gstack-investigate"
    },
    {
      "description": 'Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: "merge", "land", "deploy", "merge and verify",\n"land it", "ship it to production". (gstack)\n (user skill)',
      "name": "gstack-land-and-deploy"
    },
    {
      "description": `Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots
are currently claimed by open PRs, which sibling Conductor workspaces have
WIP work likely to ship soon, and what slot /ship would pick next. No
mutations \u2014 just a snapshot. Use when asked to "landing report", "what's in
the queue", "show me open PRs", or "which version do I claim next". (gstack)
 (user skill)`,
      "name": "gstack-landing-report"
    },
    {
      "description": `Manage project learnings. Review, search, prune, and export what gstack
has learned across sessions. Use when asked to "what have we learned",
"show learnings", "prune stale learnings", or "export learnings".
Proactively suggest when the user asks about past patterns or wonders
"didn't we fix this before?"
 (user skill)`,
      "name": "gstack-learn"
    },
    {
      "description": 'Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact \u2014 a finished artifact. Use when asked to "make a PDF", "export to\nPDF", "turn this markdown into a PDF", or "generate a document". (gstack)\nVoice triggers (speech-to-text aliases): "make this a pdf", "make it a pdf", "export to pdf", "turn this into a pdf", "turn this markdown into a pdf", "generate a pdf", "make a pdf from", "pdf this markdown".\n (user skill)',
      "name": "gstack-make-pdf"
    },
    {
      "description": `YC Office Hours \u2014 two modes. Startup mode: six forcing questions that expose
demand reality, status quo, desperate specificity, narrowest wedge, observation,
and future-fit. Builder mode: design thinking brainstorming for side projects,
hackathons, learning, and open source. Saves a design doc.
Use when asked to "brainstorm this", "I have an idea", "help me think through
this", "office hours", or "is this worth building".
Proactively invoke this skill (do NOT answer directly) when the user describes
a new product idea, asks whether something is worth building, wants to think
through design decisions for something that doesn't exist yet, or is exploring
a concept before any code is written.
Use before /plan-ceo-review or /plan-eng-review. (gstack)
 (user skill)`,
      "name": "gstack-office-hours"
    },
    {
      "description": 'Launch GStack Browser \u2014 AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to "open gstack browser", "launch browser", "connect chrome",\n"open chrome", "real browser", "launch chrome", "side panel", or "control my browser".\nVoice triggers (speech-to-text aliases): "show me the browser".\n (user skill)',
      "name": "gstack-open-gstack-browser"
    },
    {
      "description": 'Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to "pair agent", "connect agent", "share browser", "remote browser",\n"let another agent use my browser", or "give browser access". (gstack)\nVoice triggers (speech-to-text aliases): "pair agent", "connect agent", "share my browser", "remote browser access".\n (user skill)',
      "name": "gstack-pair-agent"
    },
    {
      "description": 'CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to "think bigger", "expand scope", "strategy review", "rethink this",\nor "is this ambitious enough".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack)\n (user skill)',
      "name": "gstack-plan-ceo-review"
    },
    {
      "description": `Designer's eye plan review \u2014 interactive, like CEO and Eng review.
Rates each design dimension 0-10, explains what would make it a 10,
then fixes the plan to get there. Works in plan mode. For live site
visual audits, use /design-review. Use when asked to "review the design plan"
or "design critique".
Proactively suggest when the user has a plan with UI/UX components that
should be reviewed before implementation. (gstack)
 (user skill)`,
      "name": "gstack-plan-design-review"
    },
    {
      "description": 'Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to "DX review", "developer experience audit", "devex review",\nor "API design review".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): "dx review", "developer experience review", "devex review", "devex audit", "API design review", "onboarding review".\n (user skill)',
      "name": "gstack-plan-devex-review"
    },
    {
      "description": 'Eng manager-mode plan review. Lock in the execution plan \u2014 architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n"review the architecture", "engineering review", or "lock in the plan".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding \u2014 to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): "tech review", "technical review", "plan engineering review".\n (user skill)',
      "name": "gstack-plan-eng-review"
    },
    {
      "description": 'Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface \u2014 no CLI syntax required.\n\nUse when asked to "tune questions", "stop asking me that", "too many questions",\n"show my profile", "what questions have I been asked", "show my vibe",\n"developer profile", or "turn off question tuning". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time.\n (user skill)',
      "name": "gstack-plan-tune"
    },
    {
      "description": `Report-only QA testing. Systematically tests a web application and produces a
structured report with health score, screenshots, and repro steps \u2014 but never
fixes anything. Use when asked to "just report bugs", "qa report only", or
"test but don't fix". For the full test-fix-verify loop, use /qa instead.
Proactively suggest when the user wants a bug report without any code changes. (gstack)
Voice triggers (speech-to-text aliases): "bug report", "just check for bugs".
 (user skill)`,
      "name": "gstack-qa-only"
    },
    {
      "description": `Systematically QA test a web application and fix bugs found. Runs QA testing,
then iteratively fixes bugs in source code, committing each fix atomically and
re-verifying. Use when asked to "qa", "QA", "test this site", "find bugs",
"test and fix", or "fix what's broken".
Proactively suggest when the user says a feature is ready for testing
or asks "does this work?". Three tiers: Quick (critical/high only),
Standard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,
fix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)
Voice triggers (speech-to-text aliases): "quality check", "test the app", "run QA".
 (user skill)`,
      "name": "gstack-qa"
    },
    {
      "description": 'Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to "weekly retro", "what did we ship", or "engineering retrospective".\nProactively suggest at the end of a work week or sprint. (gstack)\n (user skill)',
      "name": "gstack-retro"
    },
    {
      "description": 'Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust\nboundary violations, conditional side effects, and other structural issues. Use when\nasked to "review this PR", "code review", "pre-landing review", or "check my diff".\nProactively suggest when the user is about to merge or land code changes. (gstack)\n (user skill)',
      "name": "gstack-review"
    },
    {
      "description": `Pull data from a web page. First call on a new intent prototypes the flow
via $B primitives and returns JSON. Subsequent calls on a matching intent
route to a codified browser-skill and return in ~200ms. Read-only \u2014 for
mutating flows (form fills, clicks, submissions), use /automate.
Use when asked to "scrape", "get data from", "pull", "extract from", or
"what's on" a page. (gstack)
 (user skill)`,
      "name": "gstack-scrape"
    },
    {
      "description": 'Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to "import cookies",\n"login to the site", or "authenticate the browser". (gstack)\n (user skill)',
      "name": "gstack-setup-browser-cookies"
    },
    {
      "description": 'Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: "setup deploy", "configure deployment", "set up land-and-deploy",\n"how do I deploy with gstack", "add deploy config".\n (user skill)',
      "name": "gstack-setup-deploy"
    },
    {
      "description": 'Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to "gbrain is running, and this agent\ncan call it." Use when: "setup gbrain", "connect gbrain", "start\ngbrain", "install gbrain", "configure gbrain for this machine". (gstack)\n (user skill)',
      "name": "gstack-setup-gbrain"
    },
    {
      "description": 'Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to "ship", "deploy",\n"push to main", "create a PR", "merge and push", or "get it deployed".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)\n (user skill)',
      "name": "gstack-ship"
    },
    {
      "description": 'Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to "skillify", "codify", "save this scrape", or\n"make this permanent". (gstack)\n (user skill)',
      "name": "gstack-skillify"
    },
    {
      "description": 'Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to "unfreeze", "unlock edits", "remove freeze", or\n"allow all edits". (gstack)\n (user skill)',
      "name": "gstack-unfreeze"
    },
    {
      "description": `Upgrade gstack to the latest version. Detects global vs vendored install,
runs the upgrade, and shows what's new. Use when asked to "upgrade gstack",
"update gstack", or "get latest version".
Voice triggers (speech-to-text aliases): "upgrade the tools", "update the tools", "gee stack upgrade", "g stack upgrade".
 (user skill)`,
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
      "description": "Multi Agents Looping \u2014 a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents. (user skill)",
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
      "description": `Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document \u2014 including when they say "write a report", "draft a proposal", "make a contract", "fill in this form", "reformat to match this template", or any task whose final output is a .docx file. Even if the user doesn't mention "docx" explicitly, if the task implies a printable/formal document, use this skill.
 (user skill)`,
      "name": "docx"
    },
    {
      "description": 'Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill. (user skill)',
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
      "description": 'Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): "make a PDF", "generate a report", "write a proposal", "create a resume", "beautiful PDF", "professional document", "cover page", "polished PDF", "client-ready document". FILL (complete form fields): "fill in the form", "fill out this PDF", "complete the form fields", "write values into PDF", "what fields does this PDF have". REFORMAT (apply design to an existing doc): "reformat this document", "apply our style", "convert this Markdown/text to PDF", "make this doc look good", "re-style this PDF". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n (user skill)',
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
  "id": "cursor",
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
  "version": "2026.06.24"
};

// dist-src/agents/deepagents.ts
var agent12 = {
  "agentCapabilities": {
    "loadSession": true,
    "mcpCapabilities": {
      "http": false,
      "sse": false
    },
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "commands": true,
      "modes": true
    }
  },
  "agentInfo": {
    "name": "deepagents-acp",
    "version": "0.0.1"
  },
  "authMethods": [
    {
      "id": "anthropic",
      "link": "https://console.anthropic.com/settings/keys",
      "name": "Anthropic API Key",
      "type": "env_var",
      "vars": [
        {
          "name": "ANTHROPIC_API_KEY"
        }
      ]
    },
    {
      "id": "openai",
      "link": "https://platform.openai.com/api-keys",
      "name": "OpenAI API Key",
      "type": "env_var",
      "vars": [
        {
          "name": "OPENAI_API_KEY"
        }
      ]
    },
    {
      "description": "Configure LLM provider credentials via environment variables",
      "id": "deepagents-setup",
      "name": "DeepAgents Setup"
    }
  ],
  "commands": [
    {
      "description": "Switch to plan mode (read-only planning)",
      "name": "plan"
    },
    {
      "description": "Switch to agent mode (full autonomous)",
      "name": "agent"
    },
    {
      "description": "Switch to ask mode (Q&A, no file changes)",
      "name": "ask"
    },
    {
      "description": "Clear conversation context and start fresh",
      "name": "clear"
    },
    {
      "description": "Show current session status and loaded skills",
      "name": "status"
    }
  ],
  "configOptions": [],
  "currentModeId": "agent",
  "id": "deepagents",
  "modes": [
    {
      "description": "Full autonomous agent",
      "id": "agent",
      "name": "Agent Mode"
    },
    {
      "description": "Planning and discussion",
      "id": "plan",
      "name": "Plan Mode"
    },
    {
      "description": "Q&A without file changes",
      "id": "ask",
      "name": "Ask Mode"
    }
  ],
  "name": "DeepAgents",
  "protocolVersion": 1,
  "version": "0.1.7"
};

// dist-src/agents/devin.ts
var agent13 = {
  "agentCapabilities": {
    "_meta": {
      "cognition.ai/documentLifecycle": true,
      "cognition.ai/multiRootWorkspace": true,
      "cognition.ai/sessionRename": true,
      "cognition.ai/terminalLifecycle": true
    },
    "loadSession": true,
    "mcpCapabilities": {
      "http": false,
      "sse": false
    },
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "additionalDirectories": {},
      "list": {}
    }
  },
  "agentInfo": {
    "name": "affogato",
    "title": "Affogato Agent",
    "version": "0.0.0-dev"
  },
  "authMethods": [
    {
      "description": "Authenticate with your API key",
      "id": "windsurf-api-key",
      "name": "API Key"
    }
  ],
  "commands": [
    {
      "description": "Authenticate with an API key",
      "input": {
        "hint": "[api-key]"
      },
      "name": "login"
    },
    {
      "description": "Clear authentication",
      "name": "logout"
    },
    {
      "description": "Check authentication status",
      "name": "status"
    },
    {
      "description": "List workspace directories",
      "name": "workspace"
    },
    {
      "description": "Add additional workspace directory",
      "input": {
        "hint": "<path>"
      },
      "name": "add-dir"
    },
    {
      "description": "Remove a workspace directory",
      "input": {
        "hint": "<path>"
      },
      "name": "undo-add-dir"
    },
    {
      "description": "Switch to Ask mode (read-only)",
      "input": {
        "hint": "[question]"
      },
      "name": "ask"
    },
    {
      "description": "Force conversation compaction",
      "name": "compact"
    },
    {
      "description": "Show context window usage",
      "name": "context"
    },
    {
      "description": "Show session statistics",
      "name": "session-stats"
    },
    {
      "description": "Report a bug to the Devin CLI developers",
      "input": {
        "hint": "<description>"
      },
      "name": "bug"
    },
    {
      "description": "Show available commands",
      "name": "help"
    },
    {
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "name": "artifact-static-site"
    },
    {
      "description": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format.",
      "name": "xlsx"
    },
    {
      "description": "Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Codex's capabilities with specialized knowledge, workflows, or tool integrations.",
      "name": "skill-creator"
    },
    {
      "description": 'Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.',
      "name": "find-skills"
    },
    {
      "description": "Multi Agents Looping \u2014 a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "name": "deep-investigate"
    },
    {
      "description": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing.",
      "name": "gpt-taste"
    },
    {
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "name": "pptx-generator"
    },
    {
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "name": "high-end-visual-design"
    },
    {
      "description": 'Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): "make a PDF", "generate a report", "write a proposal", "create a resume", "beautiful PDF", "professional document", "cover page", "polished PDF", "client-ready document". FILL (complete form fields): "fill in the form", "fill out this PDF", "complete the form fields", "write values into PDF", "what fields does this PDF have". REFORMAT (apply design to an existing doc): "reformat this document", "apply our style", "convert this Markdown/text to PDF", "make this doc look good", "re-style this PDF". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n',
      "name": "pdf"
    },
    {
      "description": "Use when asked to analyze code and add explanatory code annotations, file headers, doc comments, inline comments, or JSX-safe comments.",
      "name": "docs-code"
    },
    {
      "description": "Install Agents skills into $AGENTS_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos).",
      "name": "skill-installer"
    },
    {
      "description": "Docs-driven delivery workflow. Use when splitting design docs into tasks, creating implementation plans under docs/plan, executing develop/verify/merge cycles, maintaining design doc consistency, or writing UI layout documentation with ASCII diagrams.",
      "name": "docs-sprint"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "accept-edits",
      "id": "mode",
      "name": "Session Mode",
      "options": [
        {
          "_meta": {
            "cognition.ai/icon": "code"
          },
          "description": "Write and edit code",
          "name": "Code",
          "value": "accept-edits"
        },
        {
          "_meta": {
            "cognition.ai/icon": "message-circle"
          },
          "description": "Answer questions without code changes",
          "name": "Ask",
          "value": "ask"
        },
        {
          "_meta": {
            "cognition.ai/icon": "file-text"
          },
          "description": "Plan changes before implementing",
          "name": "Plan",
          "value": "plan"
        },
        {
          "_meta": {
            "cognition.ai/icon": "shield-off"
          },
          "description": "Auto-approve all tool calls",
          "name": "Bypass Permissions",
          "value": "bypass"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "accept-edits",
  "id": "devin",
  "modes": [
    {
      "id": "accept-edits",
      "name": "Code"
    },
    {
      "id": "ask",
      "name": "Ask"
    },
    {
      "id": "plan",
      "name": "Plan"
    },
    {
      "id": "bypass",
      "name": "Bypass Permissions"
    }
  ],
  "name": "Devin",
  "protocolVersion": 1,
  "version": "2026.8.18"
};

// dist-src/agents/dimcode.ts
var agent14 = {
  "agentCapabilities": {
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
      "list": {},
      "resume": {}
    }
  },
  "agentInfo": {
    "name": "dimcode",
    "title": "DimCode",
    "version": "0.2.11"
  },
  "authMethods": [],
  "commands": [],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "agent",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "description": "Run with normal agent tool access.",
          "name": "Agent",
          "value": "agent"
        },
        {
          "description": "Plan changes before implementation.",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Keep working toward a session goal.",
          "name": "Goal",
          "value": "goal"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "probe-dummy/probe-dummy-model",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "name": "probe-dummy / probe-dummy-model",
          "value": "probe-dummy/probe-dummy-model"
        }
      ],
      "type": "select"
    },
    {
      "category": "permission",
      "currentValue": "read-only",
      "id": "permission",
      "name": "Permission",
      "options": [
        {
          "description": "Allow read-only filesystem tools and deny writes, network, and process execution.",
          "name": "Read Only",
          "value": "read-only"
        },
        {
          "description": "Allow workspace reads and writes, allow git commands, and ask for other process or network access.",
          "name": "Workspace Write",
          "value": "workspace-write"
        },
        {
          "description": "Allow all tool access without approval prompts.",
          "name": "Full Access",
          "value": "full-access"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "auto",
      "id": "thought_level",
      "name": "Thought Level",
      "options": [
        {
          "name": "Auto",
          "value": "auto"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "agent",
  "id": "dimcode",
  "modes": [
    {
      "description": "Run with normal agent tool access.",
      "id": "agent",
      "name": "Agent"
    },
    {
      "description": "Plan changes before implementation.",
      "id": "plan",
      "name": "Plan"
    },
    {
      "description": "Keep working toward a session goal.",
      "id": "goal",
      "name": "Goal"
    }
  ],
  "name": "DimCode",
  "protocolVersion": 1,
  "version": "0.2.11"
};

// dist-src/agents/dirac.ts
var agent15 = {
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
      "description": "Multi Agents Looping \u2014 a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "input": {
        "hint": "Multi Agents Looping \u2014 a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents."
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
      "description": `Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document \u2014 including when they say "write a report", "draft a proposal", "make a contract", "fill in this form", "reformat to match this template", or any task whose final output is a .docx file. Even if the user doesn't mention "docx" explicitly, if the task implies a printable/formal document, use this skill.
`,
      "input": {
        "hint": `Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document \u2014 including when they say "write a report", "draft a proposal", "make a contract", "fill in this form", "reformat to match this template", or any task whose final output is a .docx file. Even if the user doesn't mention "docx" explicitly, if the task implies a printable/formal document, use this skill.
`
      },
      "name": "docx"
    },
    {
      "description": 'Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.',
      "input": {
        "hint": 'Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.'
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
      "description": 'Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): "make a PDF", "generate a report", "write a proposal", "create a resume", "beautiful PDF", "professional document", "cover page", "polished PDF", "client-ready document". FILL (complete form fields): "fill in the form", "fill out this PDF", "complete the form fields", "write values into PDF", "what fields does this PDF have". REFORMAT (apply design to an existing doc): "reformat this document", "apply our style", "convert this Markdown/text to PDF", "make this doc look good", "re-style this PDF". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n',
      "input": {
        "hint": 'Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): "make a PDF", "generate a report", "write a proposal", "create a resume", "beautiful PDF", "professional document", "cover page", "polished PDF", "client-ready document". FILL (complete form fields): "fill in the form", "fill out this PDF", "complete the form fields", "write values into PDF", "what fields does this PDF have". REFORMAT (apply design to an existing doc): "reformat this document", "apply our style", "convert this Markdown/text to PDF", "make this doc look good", "re-style this PDF". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n'
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
      "description": 'Auto-review pipeline \u2014 reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to "auto review", "autoplan", "run all reviews", "review this plan\nautomatically", or "make the decisions for me".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): "auto plan", "automatic review".\n',
      "input": {
        "hint": 'Auto-review pipeline \u2014 reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to "auto review", "autoplan", "run all reviews", "review this plan\nautomatically", or "make the decisions for me".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): "auto plan", "automatic review".\n'
      },
      "name": "autoplan"
    },
    {
      "description": 'Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: "performance", "benchmark", "page speed", "lighthouse", "web vitals",\n"bundle size", "load time". (gstack)\nVoice triggers (speech-to-text aliases): "speed test", "check performance".\n',
      "input": {
        "hint": 'Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: "performance", "benchmark", "page speed", "lighthouse", "web vitals",\n"bundle size", "load time". (gstack)\nVoice triggers (speech-to-text aliases): "speed test", "check performance".\n'
      },
      "name": "benchmark"
    },
    {
      "description": 'Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side \u2014 compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers "which model is actually best\nfor this skill?" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: "benchmark models", "compare models",\n"which model is best for X", "cross-model comparison", "model shootout". (gstack)\nVoice triggers (speech-to-text aliases): "compare models", "model shootout", "which model is best".\n',
      "input": {
        "hint": 'Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side \u2014 compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers "which model is actually best\nfor this skill?" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: "benchmark models", "compare models",\n"which model is best for X", "cross-model comparison", "model shootout". (gstack)\nVoice triggers (speech-to-text aliases): "compare models", "model shootout", "which model is best".\n'
      },
      "name": "benchmark-models"
    },
    {
      "description": 'Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to "open in browser", "test the\nsite", "take a screenshot", or "dogfood this". (gstack)\n',
      "input": {
        "hint": 'Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to "open in browser", "test the\nsite", "take a screenshot", or "dogfood this". (gstack)\n'
      },
      "name": "browse"
    },
    {
      "description": 'Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: "monitor deploy", "canary", "post-deploy check",\n"watch production", "verify deploy". (gstack)\n',
      "input": {
        "hint": 'Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: "monitor deploy", "canary", "post-deploy check",\n"watch production", "verify deploy". (gstack)\n'
      },
      "name": "canary"
    },
    {
      "description": 'Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to "be careful", "safety mode",\n"prod mode", or "careful mode". (gstack)\n',
      "input": {
        "hint": 'Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to "be careful", "safety mode",\n"prod mode", or "careful mode". (gstack)\n'
      },
      "name": "careful"
    },
    {
      "description": 'OpenAI Codex CLI wrapper \u2014 three modes. Code review: independent diff review via\ncodex review with pass/fail gate. Challenge: adversarial mode that tries to break\nyour code. Consult: ask codex anything with session continuity for follow-ups.\nThe "200 IQ autistic developer" second opinion. Use when asked to "codex review",\n"codex challenge", "ask codex", "second opinion", or "consult codex". (gstack)\nVoice triggers (speech-to-text aliases): "code x", "code ex", "get another opinion".\n',
      "input": {
        "hint": 'OpenAI Codex CLI wrapper \u2014 three modes. Code review: independent diff review via\ncodex review with pass/fail gate. Challenge: adversarial mode that tries to break\nyour code. Consult: ask codex anything with session continuity for follow-ups.\nThe "200 IQ autistic developer" second opinion. Use when asked to "codex review",\n"codex challenge", "ask codex", "second opinion", or "consult codex". (gstack)\nVoice triggers (speech-to-text aliases): "code x", "code ex", "get another opinion".\n'
      },
      "name": "codex"
    },
    {
      "description": 'Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off \u2014 even across Conductor workspace handoffs.\nUse when asked to "resume", "restore context", "where was I", or\n"pick up where I left off". Pair with /context-save.\nFormerly /checkpoint resume \u2014 renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack)\n',
      "input": {
        "hint": 'Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off \u2014 even across Conductor workspace handoffs.\nUse when asked to "resume", "restore context", "where was I", or\n"pick up where I left off". Pair with /context-save.\nFormerly /checkpoint resume \u2014 renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack)\n'
      },
      "name": "context-restore"
    },
    {
      "description": 'Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to "save progress", "save state", "context save", or\n"save my work". Pair with /context-restore to resume later.\nFormerly /checkpoint \u2014 renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack)\n',
      "input": {
        "hint": 'Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to "save progress", "save state", "context save", or\n"save my work". Pair with /context-restore to resume later.\nFormerly /checkpoint \u2014 renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack)\n'
      },
      "name": "context-save"
    },
    {
      "description": 'Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: "security audit", "threat model", "pentest review", "OWASP", "CSO review". (gstack)\nVoice triggers (speech-to-text aliases): "see-so", "see so", "security review", "security check", "vulnerability scan", "run security".\n',
      "input": {
        "hint": 'Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: "security audit", "threat model", "pentest review", "OWASP", "CSO review". (gstack)\nVoice triggers (speech-to-text aliases): "see-so", "see so", "security review", "security check", "vulnerability scan", "run security".\n'
      },
      "name": "cso"
    },
    {
      "description": `Design consultation: understands your product, researches the landscape, proposes a
complete design system (aesthetic, typography, color, layout, spacing, motion), and
generates font+color preview pages. Creates DESIGN.md as your project's design source
of truth. For existing sites, use /plan-design-review to infer the system instead.
Use when asked to "design system", "brand guidelines", or "create DESIGN.md".
Proactively suggest when starting a new project's UI with no existing
design system or DESIGN.md. (gstack)
`,
      "input": {
        "hint": `Design consultation: understands your product, researches the landscape, proposes a
complete design system (aesthetic, typography, color, layout, spacing, motion), and
generates font+color preview pages. Creates DESIGN.md as your project's design source
of truth. For existing sites, use /plan-design-review to infer the system instead.
Use when asked to "design system", "brand guidelines", or "create DESIGN.md".
Proactively suggest when starting a new project's UI with no existing
design system or DESIGN.md. (gstack)
`
      },
      "name": "design-consultation"
    },
    {
      "description": 'Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: "finalize this design", "turn this into HTML",\n"build me a page", "implement this design", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): "build the design", "code the mockup", "make it real".\n',
      "input": {
        "hint": 'Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: "finalize this design", "turn this into HTML",\n"build me a page", "implement this design", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): "build the design", "code the mockup", "make it real".\n'
      },
      "name": "design-html"
    },
    {
      "description": `Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,
AI slop patterns, and slow interactions \u2014 then fixes them. Iteratively fixes issues
in source code, committing each fix atomically and re-verifying with before/after
screenshots. For plan-mode design review (before implementation), use /plan-design-review.
Use when asked to "audit the design", "visual QA", "check if it looks good", or "design polish".
Proactively suggest when the user mentions visual inconsistencies or
wants to polish the look of a live site. (gstack)
`,
      "input": {
        "hint": `Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,
AI slop patterns, and slow interactions \u2014 then fixes them. Iteratively fixes issues
in source code, committing each fix atomically and re-verifying with before/after
screenshots. For plan-mode design review (before implementation), use /plan-design-review.
Use when asked to "audit the design", "visual QA", "check if it looks good", or "design polish".
Proactively suggest when the user mentions visual inconsistencies or
wants to polish the look of a live site. (gstack)
`
      },
      "name": "design-review"
    },
    {
      "description": `Design shotgun: generate multiple AI design variants, open a comparison board,
collect structured feedback, and iterate. Standalone design exploration you can
run anytime. Use when: "explore designs", "show me options", "design variants",
"visual brainstorm", or "I don't like how this looks".
Proactively suggest when the user describes a UI feature but hasn't seen
what it could look like. (gstack)
`,
      "input": {
        "hint": `Design shotgun: generate multiple AI design variants, open a comparison board,
collect structured feedback, and iterate. Standalone design exploration you can
run anytime. Use when: "explore designs", "show me options", "design variants",
"visual brainstorm", or "I don't like how this looks".
Proactively suggest when the user describes a UI feature but hasn't seen
what it could look like. (gstack)
`
      },
      "name": "design-shotgun"
    },
    {
      "description": 'Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n"test the DX", "DX audit", "developer experience test", or "try the\nonboarding". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): "dx audit", "test the developer experience", "try the onboarding", "developer experience test".\n',
      "input": {
        "hint": 'Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n"test the DX", "DX audit", "developer experience test", or "try the\nonboarding". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): "dx audit", "test the developer experience", "try the onboarding", "developer experience test".\n'
      },
      "name": "devex-review"
    },
    {
      "description": 'Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to "update the docs", "sync documentation", or "post-ship docs".\nProactively suggest after a PR is merged or code is shipped. (gstack)\n',
      "input": {
        "hint": 'Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to "update the docs", "sync documentation", or "post-ship docs".\nProactively suggest after a PR is merged or code is shipped. (gstack)\n'
      },
      "name": "document-release"
    },
    {
      "description": 'Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n"fixing" unrelated code, or when you want to scope changes to one module.\nUse when asked to "freeze", "restrict edits", "only edit this folder",\nor "lock down edits". (gstack)\n',
      "input": {
        "hint": 'Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n"fixing" unrelated code, or when you want to scope changes to one module.\nUse when asked to "freeze", "restrict edits", "only edit this folder",\nor "lock down edits". (gstack)\n'
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
      "description": `Upgrade gstack to the latest version. Detects global vs vendored install,
runs the upgrade, and shows what's new. Use when asked to "upgrade gstack",
"update gstack", or "get latest version".
Voice triggers (speech-to-text aliases): "upgrade the tools", "update the tools", "gee stack upgrade", "g stack upgrade".
`,
      "input": {
        "hint": `Upgrade gstack to the latest version. Detects global vs vendored install,
runs the upgrade, and shows what's new. Use when asked to "upgrade gstack",
"update gstack", or "get latest version".
Voice triggers (speech-to-text aliases): "upgrade the tools", "update the tools", "gee stack upgrade", "g stack upgrade".
`
      },
      "name": "gstack-upgrade"
    },
    {
      "description": 'Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to "guard mode",\n"full safety", "lock it down", or "maximum safety". (gstack)\n',
      "input": {
        "hint": 'Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to "guard mode",\n"full safety", "lock it down", or "maximum safety". (gstack)\n'
      },
      "name": "guard"
    },
    {
      "description": 'Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: "health check",\n"code quality", "how healthy is the codebase", "run all checks",\n"quality score". (gstack)\n',
      "input": {
        "hint": 'Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: "health check",\n"code quality", "how healthy is the codebase", "run all checks",\n"quality score". (gstack)\n'
      },
      "name": "health"
    },
    {
      "description": 'Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to "debug this", "fix this bug", "why is this broken",\n"investigate this error", or "root cause analysis".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, "it was working\nyesterday", or is troubleshooting why something stopped working. (gstack)\n',
      "input": {
        "hint": 'Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to "debug this", "fix this bug", "why is this broken",\n"investigate this error", or "root cause analysis".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, "it was working\nyesterday", or is troubleshooting why something stopped working. (gstack)\n'
      },
      "name": "investigate"
    },
    {
      "description": 'Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: "merge", "land", "deploy", "merge and verify",\n"land it", "ship it to production". (gstack)\n',
      "input": {
        "hint": 'Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: "merge", "land", "deploy", "merge and verify",\n"land it", "ship it to production". (gstack)\n'
      },
      "name": "land-and-deploy"
    },
    {
      "description": `Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots
are currently claimed by open PRs, which sibling Conductor workspaces have
WIP work likely to ship soon, and what slot /ship would pick next. No
mutations \u2014 just a snapshot. Use when asked to "landing report", "what's in
the queue", "show me open PRs", or "which version do I claim next". (gstack)
`,
      "input": {
        "hint": `Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots
are currently claimed by open PRs, which sibling Conductor workspaces have
WIP work likely to ship soon, and what slot /ship would pick next. No
mutations \u2014 just a snapshot. Use when asked to "landing report", "what's in
the queue", "show me open PRs", or "which version do I claim next". (gstack)
`
      },
      "name": "landing-report"
    },
    {
      "description": `Manage project learnings. Review, search, prune, and export what gstack
has learned across sessions. Use when asked to "what have we learned",
"show learnings", "prune stale learnings", or "export learnings".
Proactively suggest when the user asks about past patterns or wonders
"didn't we fix this before?"
`,
      "input": {
        "hint": `Manage project learnings. Review, search, prune, and export what gstack
has learned across sessions. Use when asked to "what have we learned",
"show learnings", "prune stale learnings", or "export learnings".
Proactively suggest when the user asks about past patterns or wonders
"didn't we fix this before?"
`
      },
      "name": "learn"
    },
    {
      "description": 'Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact \u2014 a finished artifact. Use when asked to "make a PDF", "export to\nPDF", "turn this markdown into a PDF", or "generate a document". (gstack)\nVoice triggers (speech-to-text aliases): "make this a pdf", "make it a pdf", "export to pdf", "turn this into a pdf", "turn this markdown into a pdf", "generate a pdf", "make a pdf from", "pdf this markdown".\n',
      "input": {
        "hint": 'Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact \u2014 a finished artifact. Use when asked to "make a PDF", "export to\nPDF", "turn this markdown into a PDF", or "generate a document". (gstack)\nVoice triggers (speech-to-text aliases): "make this a pdf", "make it a pdf", "export to pdf", "turn this into a pdf", "turn this markdown into a pdf", "generate a pdf", "make a pdf from", "pdf this markdown".\n'
      },
      "name": "make-pdf"
    },
    {
      "description": `YC Office Hours \u2014 two modes. Startup mode: six forcing questions that expose
demand reality, status quo, desperate specificity, narrowest wedge, observation,
and future-fit. Builder mode: design thinking brainstorming for side projects,
hackathons, learning, and open source. Saves a design doc.
Use when asked to "brainstorm this", "I have an idea", "help me think through
this", "office hours", or "is this worth building".
Proactively invoke this skill (do NOT answer directly) when the user describes
a new product idea, asks whether something is worth building, wants to think
through design decisions for something that doesn't exist yet, or is exploring
a concept before any code is written.
Use before /plan-ceo-review or /plan-eng-review. (gstack)
`,
      "input": {
        "hint": `YC Office Hours \u2014 two modes. Startup mode: six forcing questions that expose
demand reality, status quo, desperate specificity, narrowest wedge, observation,
and future-fit. Builder mode: design thinking brainstorming for side projects,
hackathons, learning, and open source. Saves a design doc.
Use when asked to "brainstorm this", "I have an idea", "help me think through
this", "office hours", or "is this worth building".
Proactively invoke this skill (do NOT answer directly) when the user describes
a new product idea, asks whether something is worth building, wants to think
through design decisions for something that doesn't exist yet, or is exploring
a concept before any code is written.
Use before /plan-ceo-review or /plan-eng-review. (gstack)
`
      },
      "name": "office-hours"
    },
    {
      "description": 'Launch GStack Browser \u2014 AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to "open gstack browser", "launch browser", "connect chrome",\n"open chrome", "real browser", "launch chrome", "side panel", or "control my browser".\nVoice triggers (speech-to-text aliases): "show me the browser".\n',
      "input": {
        "hint": 'Launch GStack Browser \u2014 AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to "open gstack browser", "launch browser", "connect chrome",\n"open chrome", "real browser", "launch chrome", "side panel", or "control my browser".\nVoice triggers (speech-to-text aliases): "show me the browser".\n'
      },
      "name": "open-gstack-browser"
    },
    {
      "description": 'Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to "pair agent", "connect agent", "share browser", "remote browser",\n"let another agent use my browser", or "give browser access". (gstack)\nVoice triggers (speech-to-text aliases): "pair agent", "connect agent", "share my browser", "remote browser access".\n',
      "input": {
        "hint": 'Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to "pair agent", "connect agent", "share browser", "remote browser",\n"let another agent use my browser", or "give browser access". (gstack)\nVoice triggers (speech-to-text aliases): "pair agent", "connect agent", "share my browser", "remote browser access".\n'
      },
      "name": "pair-agent"
    },
    {
      "description": 'CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to "think bigger", "expand scope", "strategy review", "rethink this",\nor "is this ambitious enough".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack)\n',
      "input": {
        "hint": 'CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to "think bigger", "expand scope", "strategy review", "rethink this",\nor "is this ambitious enough".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack)\n'
      },
      "name": "plan-ceo-review"
    },
    {
      "description": `Designer's eye plan review \u2014 interactive, like CEO and Eng review.
Rates each design dimension 0-10, explains what would make it a 10,
then fixes the plan to get there. Works in plan mode. For live site
visual audits, use /design-review. Use when asked to "review the design plan"
or "design critique".
Proactively suggest when the user has a plan with UI/UX components that
should be reviewed before implementation. (gstack)
`,
      "input": {
        "hint": `Designer's eye plan review \u2014 interactive, like CEO and Eng review.
Rates each design dimension 0-10, explains what would make it a 10,
then fixes the plan to get there. Works in plan mode. For live site
visual audits, use /design-review. Use when asked to "review the design plan"
or "design critique".
Proactively suggest when the user has a plan with UI/UX components that
should be reviewed before implementation. (gstack)
`
      },
      "name": "plan-design-review"
    },
    {
      "description": 'Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to "DX review", "developer experience audit", "devex review",\nor "API design review".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): "dx review", "developer experience review", "devex review", "devex audit", "API design review", "onboarding review".\n',
      "input": {
        "hint": 'Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to "DX review", "developer experience audit", "devex review",\nor "API design review".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): "dx review", "developer experience review", "devex review", "devex audit", "API design review", "onboarding review".\n'
      },
      "name": "plan-devex-review"
    },
    {
      "description": 'Eng manager-mode plan review. Lock in the execution plan \u2014 architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n"review the architecture", "engineering review", or "lock in the plan".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding \u2014 to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): "tech review", "technical review", "plan engineering review".\n',
      "input": {
        "hint": 'Eng manager-mode plan review. Lock in the execution plan \u2014 architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n"review the architecture", "engineering review", or "lock in the plan".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding \u2014 to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): "tech review", "technical review", "plan engineering review".\n'
      },
      "name": "plan-eng-review"
    },
    {
      "description": 'Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface \u2014 no CLI syntax required.\n\nUse when asked to "tune questions", "stop asking me that", "too many questions",\n"show my profile", "what questions have I been asked", "show my vibe",\n"developer profile", or "turn off question tuning". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time.\n',
      "input": {
        "hint": 'Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface \u2014 no CLI syntax required.\n\nUse when asked to "tune questions", "stop asking me that", "too many questions",\n"show my profile", "what questions have I been asked", "show my vibe",\n"developer profile", or "turn off question tuning". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time.\n'
      },
      "name": "plan-tune"
    },
    {
      "description": `Systematically QA test a web application and fix bugs found. Runs QA testing,
then iteratively fixes bugs in source code, committing each fix atomically and
re-verifying. Use when asked to "qa", "QA", "test this site", "find bugs",
"test and fix", or "fix what's broken".
Proactively suggest when the user says a feature is ready for testing
or asks "does this work?". Three tiers: Quick (critical/high only),
Standard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,
fix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)
Voice triggers (speech-to-text aliases): "quality check", "test the app", "run QA".
`,
      "input": {
        "hint": `Systematically QA test a web application and fix bugs found. Runs QA testing,
then iteratively fixes bugs in source code, committing each fix atomically and
re-verifying. Use when asked to "qa", "QA", "test this site", "find bugs",
"test and fix", or "fix what's broken".
Proactively suggest when the user says a feature is ready for testing
or asks "does this work?". Three tiers: Quick (critical/high only),
Standard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,
fix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)
Voice triggers (speech-to-text aliases): "quality check", "test the app", "run QA".
`
      },
      "name": "qa"
    },
    {
      "description": `Report-only QA testing. Systematically tests a web application and produces a
structured report with health score, screenshots, and repro steps \u2014 but never
fixes anything. Use when asked to "just report bugs", "qa report only", or
"test but don't fix". For the full test-fix-verify loop, use /qa instead.
Proactively suggest when the user wants a bug report without any code changes. (gstack)
Voice triggers (speech-to-text aliases): "bug report", "just check for bugs".
`,
      "input": {
        "hint": `Report-only QA testing. Systematically tests a web application and produces a
structured report with health score, screenshots, and repro steps \u2014 but never
fixes anything. Use when asked to "just report bugs", "qa report only", or
"test but don't fix". For the full test-fix-verify loop, use /qa instead.
Proactively suggest when the user wants a bug report without any code changes. (gstack)
Voice triggers (speech-to-text aliases): "bug report", "just check for bugs".
`
      },
      "name": "qa-only"
    },
    {
      "description": 'Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to "weekly retro", "what did we ship", or "engineering retrospective".\nProactively suggest at the end of a work week or sprint. (gstack)\n',
      "input": {
        "hint": 'Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to "weekly retro", "what did we ship", or "engineering retrospective".\nProactively suggest at the end of a work week or sprint. (gstack)\n'
      },
      "name": "retro"
    },
    {
      "description": 'Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust\nboundary violations, conditional side effects, and other structural issues. Use when\nasked to "review this PR", "code review", "pre-landing review", or "check my diff".\nProactively suggest when the user is about to merge or land code changes. (gstack)\n',
      "input": {
        "hint": 'Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust\nboundary violations, conditional side effects, and other structural issues. Use when\nasked to "review this PR", "code review", "pre-landing review", or "check my diff".\nProactively suggest when the user is about to merge or land code changes. (gstack)\n'
      },
      "name": "review"
    },
    {
      "description": `Pull data from a web page. First call on a new intent prototypes the flow
via $B primitives and returns JSON. Subsequent calls on a matching intent
route to a codified browser-skill and return in ~200ms. Read-only \u2014 for
mutating flows (form fills, clicks, submissions), use /automate.
Use when asked to "scrape", "get data from", "pull", "extract from", or
"what's on" a page. (gstack)
`,
      "input": {
        "hint": `Pull data from a web page. First call on a new intent prototypes the flow
via $B primitives and returns JSON. Subsequent calls on a matching intent
route to a codified browser-skill and return in ~200ms. Read-only \u2014 for
mutating flows (form fills, clicks, submissions), use /automate.
Use when asked to "scrape", "get data from", "pull", "extract from", or
"what's on" a page. (gstack)
`
      },
      "name": "scrape"
    },
    {
      "description": 'Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to "import cookies",\n"login to the site", or "authenticate the browser". (gstack)\n',
      "input": {
        "hint": 'Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to "import cookies",\n"login to the site", or "authenticate the browser". (gstack)\n'
      },
      "name": "setup-browser-cookies"
    },
    {
      "description": 'Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: "setup deploy", "configure deployment", "set up land-and-deploy",\n"how do I deploy with gstack", "add deploy config".\n',
      "input": {
        "hint": 'Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: "setup deploy", "configure deployment", "set up land-and-deploy",\n"how do I deploy with gstack", "add deploy config".\n'
      },
      "name": "setup-deploy"
    },
    {
      "description": 'Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to "gbrain is running, and this agent\ncan call it." Use when: "setup gbrain", "connect gbrain", "start\ngbrain", "install gbrain", "configure gbrain for this machine". (gstack)\n',
      "input": {
        "hint": 'Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to "gbrain is running, and this agent\ncan call it." Use when: "setup gbrain", "connect gbrain", "start\ngbrain", "install gbrain", "configure gbrain for this machine". (gstack)\n'
      },
      "name": "setup-gbrain"
    },
    {
      "description": 'Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to "ship", "deploy",\n"push to main", "create a PR", "merge and push", or "get it deployed".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)\n',
      "input": {
        "hint": 'Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to "ship", "deploy",\n"push to main", "create a PR", "merge and push", or "get it deployed".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)\n'
      },
      "name": "ship"
    },
    {
      "description": 'Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to "skillify", "codify", "save this scrape", or\n"make this permanent". (gstack)\n',
      "input": {
        "hint": 'Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to "skillify", "codify", "save this scrape", or\n"make this permanent". (gstack)\n'
      },
      "name": "skillify"
    },
    {
      "description": 'Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to "unfreeze", "unlock edits", "remove freeze", or\n"allow all edits". (gstack)\n',
      "input": {
        "hint": 'Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to "unfreeze", "unlock edits", "remove freeze", or\n"allow all edits". (gstack)\n'
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

// dist-src/agents/factory-droid.ts
var agent16 = {
  "agentCapabilities": {
    "_meta": {
      "terminal-auth": true,
      "terminal_output": true
    },
    "loadSession": true,
    "promptCapabilities": {
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "list": {},
      "resume": {}
    }
  },
  "agentInfo": {
    "name": "@factory/cli",
    "title": "Factory Droid (Daemon)",
    "version": "0.159.1"
  },
  "authMethods": [
    {
      "description": "Authenticate with Factory using a device pairing code in your browser.",
      "id": "device-pairing",
      "name": "Login"
    },
    {
      "description": "Authenticate using a Factory API key set in the FACTORY_API_KEY environment variable.",
      "id": "factory-api-key",
      "name": "Factory API Key"
    }
  ],
  "commands": [
    {
      "description": "Automates browsers and Electron desktop apps (VS Code, Slack, Discord, Figma, Notion, Spotify, etc.) for testing, form filling, screenshots, and data extraction. Use when the user needs to navigate, interact with, test, or extract data from any website or Electron desktop app.",
      "name": "agent-browser"
    },
    {
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "name": "artifact-static-site"
    },
    {
      "description": "Multi Agents Looping \u2014 a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "name": "deep-investigate"
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
      "description": `Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document \u2014 including when they say "write a report", "draft a proposal", "make a contract", "fill in this form", "reformat to match this template", or any task whose final output is a .docx file. Even if the user doesn't mention "docx" explicitly, if the task implies a printable/formal document, use this skill.
`,
      "name": "docx"
    },
    {
      "description": 'Produce polished Excel spreadsheets (reports, budgets, data exports, any "export to Excel" deliverable). Use whenever the user asks for an Excel file, a spreadsheet, or an .xlsx deliverable.',
      "name": "excel"
    },
    {
      "description": "Promote and assist with Figma MCP integration. ACTIVATE when the user shares a Figma URL (figma.com), mentions Figma designs or components, shares PNG images that may originate from Figma, or when Figma MCP tools are already connected and being used. Handles installation encouragement, conversational promotion, and push-back-to-Figma flows.",
      "name": "figma-mcp-helper"
    },
    {
      "description": 'Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.',
      "name": "find-skills"
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
      "description": "RCA runbook for alerts. Given an alert link (or prompted to provide one), identifies the alert type, verifies tooling/auth, and walks through root cause analysis using deep research. Persists learnings to incident-guidelines for future reuse.",
      "name": "incident"
    },
    {
      "description": "Initialize a new repository with contributor guidelines. Use when:\n- User asks to create a contributor guide, AGENTS.md, or repo guidelines\n- User wants to set up documentation for AI assistants working on the repo\n- Starting a new project that needs repository documentation\n",
      "name": "init"
    },
    {
      "description": "Install and configure Factory Droid for automated code review on GitHub or GitLab. Supports single-repo setup or org/group-wide rollout across hundreds of repos. Use when a user wants to set up Droid review on their repositories.\n",
      "name": "install-code-review"
    },
    {
      "description": "Set up automated QA testing for this project. Performs deep codebase analysis, asks targeted questions, and generates a modular QA skill with sub-skills per app, a GitHub Actions workflow, and a report template. This is a complex, multi-phase process -- quality assurance is foundational and we take the time to get it right.\n",
      "name": "install-qa"
    },
    {
      "description": "Scaffold a scheduled Slack triage automation, generalized to any company. Sets up a Python tool layer (run_triage.py) plus a HEARTBEAT.md agent loop that scans configured Slack channels for actionable messages, dedupes against a ticketing system (Linear or Jira), files tickets, and posts a run summary. Use when the user wants to stand up an automated triage bot.\n",
      "name": "install-triage"
    },
    {
      "description": "Install a CI action that automatically refreshes the Factory Wiki on each push to the default branch.\nUse when the user wants to set up automated wiki generation, install wiki CI, or configure wiki refresh.\n",
      "name": "install-wiki"
    },
    {
      "description": 'Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): "make a PDF", "generate a report", "write a proposal", "create a resume", "beautiful PDF", "professional document", "cover page", "polished PDF", "client-ready document". FILL (complete form fields): "fill in the form", "fill out this PDF", "complete the form fields", "write values into PDF", "what fields does this PDF have". REFORMAT (apply design to an existing doc): "reformat this document", "apply our style", "convert this Markdown/text to PDF", "make this doc look good", "re-style this PDF". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n',
      "name": "pdf"
    },
    {
      "description": 'Produce polished PDF documents (reports, invoices, resumes, letters, flyers, certificates, any "export to PDF" deliverable). Use whenever the user asks for a PDF or a printable document.',
      "name": "pdf-document"
    },
    {
      "description": 'Produce polished PowerPoint presentations (decks, slide shows, pitch decks, any "export to PowerPoint" deliverable). Use whenever the user asks for a PowerPoint, a slide deck, or a presentation.',
      "name": "powerpoint"
    },
    {
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "name": "pptx-generator"
    },
    {
      "description": "Review code changes and identify high-confidence, actionable bugs. Use when the user wants to:\n- Review a pull request or branch diff\n- Find bugs, security issues, or correctness problems in code changes\n- Get a structured summary of review findings\n",
      "name": "review"
    },
    {
      "description": "Security-focused code review using STRIDE, OWASP Top 10, OWASP LLM Top 10, and supply chain analysis. Use when:\n- Reviewing a PR for security vulnerabilities\n- Performing a security audit of code changes\n- Identifying injection, auth, data exposure, and other security issues\n- Running a full-project security audit reviewing every source file\n",
      "name": "security-review"
    },
    {
      "description": "Navigate, search, and manage Droid sessions. Use when the user wants to:\n- List recent sessions\n- Search session history for specific topics or patterns\n- Resume a previous session\n- Get details about what was accomplished in a session\n- Find sessions by project, date, or content\n",
      "name": "session-navigation"
    },
    {
      "description": "Review changed code for reuse, quality, and efficiency, then fix any issues found.",
      "name": "simplify"
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
      "description": "Automates terminal user interface (TUI) testing. Use when you need to launch, interact with, test, or debug terminal applications, capture TUI snapshots, or automate terminal inputs.",
      "name": "tuistory"
    },
    {
      "description": "Generate comprehensive codebase documentation for a repository.\nUploads the wiki to view in the Factory app.\n",
      "name": "wiki"
    },
    {
      "description": "Generate Factory-branded HyperFrames video overviews for repository wikis.\nUse when wiki generation reaches Phase 3.6, or when the user asks for a narrated repository overview video.\n",
      "name": "wiki-video-gen"
    },
    {
      "description": "Produce polished Word documents (reports, letters, proposals, printable docs, any .docx deliverable). Use whenever the user asks for a Word document or a .docx file.",
      "name": "word-document"
    },
    {
      "description": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format.",
      "name": "xlsx"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "normal",
      "description": "Which tool actions the agent may run without confirmation.",
      "id": "autonomy_level",
      "name": "Autonomy Level",
      "options": [
        {
          "name": "Auto (Off)",
          "value": "normal"
        },
        {
          "name": "Spec",
          "value": "spec"
        },
        {
          "name": "Auto (Low)",
          "value": "auto-low"
        },
        {
          "name": "Auto (Medium)",
          "value": "auto-medium"
        },
        {
          "name": "Auto (High)",
          "value": "auto-high"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "claude-opus-4-8",
      "description": "The model used for this session. Changing this may also change the available Reasoning Effort options.",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "description": "2x Factory token rate",
          "name": "Claude Opus 4.8",
          "value": "claude-opus-4-8"
        },
        {
          "description": "4x Factory token rate",
          "name": "Claude Opus 4.8 Fast Mode",
          "value": "claude-opus-4-8-fast"
        },
        {
          "description": "2x Factory token rate",
          "name": "Claude Opus 4.7",
          "value": "claude-opus-4-7"
        },
        {
          "description": "12x Factory token rate",
          "name": "Claude Opus 4.7 Fast Mode",
          "value": "claude-opus-4-7-fast"
        },
        {
          "description": "2x Factory token rate",
          "name": "Claude Opus 4.6",
          "value": "claude-opus-4-6"
        },
        {
          "description": "12x Factory token rate",
          "name": "Claude Opus 4.6 Fast Mode",
          "value": "claude-opus-4-6-fast"
        },
        {
          "description": "2x Factory token rate",
          "name": "Claude Opus 4.5",
          "value": "claude-opus-4-5-20251101"
        },
        {
          "description": "1.2x Factory token rate",
          "name": "Claude Sonnet 4.6",
          "value": "claude-sonnet-4-6"
        },
        {
          "description": "1.2x Factory token rate",
          "name": "Claude Sonnet 4.5",
          "value": "claude-sonnet-4-5-20250929"
        },
        {
          "description": "0.4x Factory token rate",
          "name": "Claude Haiku 4.5",
          "value": "claude-haiku-4-5-20251001"
        },
        {
          "description": "2x Factory token rate",
          "name": "GPT-5.5",
          "value": "gpt-5.5"
        },
        {
          "description": "5x Factory token rate",
          "name": "GPT-5.5 Fast Mode",
          "value": "gpt-5.5-fast"
        },
        {
          "description": "12x Factory token rate",
          "name": "GPT-5.5 Pro",
          "value": "gpt-5.5-pro"
        },
        {
          "description": "1x Factory token rate",
          "name": "GPT-5.4",
          "value": "gpt-5.4"
        },
        {
          "description": "2x Factory token rate",
          "name": "GPT-5.4 Fast Mode",
          "value": "gpt-5.4-fast"
        },
        {
          "description": "0.3x Factory token rate",
          "name": "GPT-5.4 Mini",
          "value": "gpt-5.4-mini"
        },
        {
          "description": "0.7x Factory token rate",
          "name": "GPT-5.3-Codex",
          "value": "gpt-5.3-codex"
        },
        {
          "description": "1.4x Factory token rate",
          "name": "GPT-5.3-Codex Fast Mode",
          "value": "gpt-5.3-codex-fast"
        },
        {
          "description": "0.7x Factory token rate",
          "name": "GPT-5.2",
          "value": "gpt-5.2"
        },
        {
          "description": "0.8x Factory token rate",
          "name": "Gemini 3.1 Pro",
          "value": "gemini-3.1-pro-preview"
        },
        {
          "description": "0.6x Factory token rate",
          "name": "Gemini 3.5 Flash",
          "value": "gemini-3.5-flash"
        },
        {
          "description": "0.2x Factory token rate",
          "name": "Gemini 3 Flash",
          "value": "gemini-3-flash-preview"
        },
        {
          "description": "0.55x Factory token rate",
          "name": "Droid Core (GLM-5.2)",
          "value": "glm-5.2"
        },
        {
          "description": "0.55x Factory token rate",
          "name": "Droid Core (GLM-5.1)",
          "value": "glm-5.1"
        },
        {
          "description": "0.38x Factory token rate",
          "name": "Droid Core (Kimi K2.7 Code)",
          "value": "kimi-k2.7-code"
        },
        {
          "description": "0.4x Factory token rate",
          "name": "Droid Core (Kimi K2.6)",
          "value": "kimi-k2.6"
        },
        {
          "description": "0.4x Factory token rate",
          "name": "Droid Core (Nemotron 3 Ultra)",
          "value": "nemotron-3-ultra"
        },
        {
          "description": "0.7x Factory token rate",
          "name": "Droid Core (DeepSeek V4 Pro)",
          "value": "deepseek-v4-pro"
        },
        {
          "description": "0.12x Factory token rate",
          "name": "Droid Core (MiniMax M3)",
          "value": "minimax-m3"
        },
        {
          "description": "0.12x Factory token rate",
          "name": "Droid Core (MiniMax M2.7)",
          "value": "minimax-m2.7"
        },
        {
          "description": "0.12x Factory token rate",
          "name": "Droid Core (MiniMax M2.5)",
          "value": "minimax-m2.5"
        },
        {
          "description": "0.7x Factory token rate",
          "name": "GPT-5.2-Codex [Deprecated]",
          "value": "gpt-5.2-codex"
        },
        {
          "description": "0.5x Factory token rate",
          "name": "GPT-5.1-Codex-Max [Deprecated]",
          "value": "gpt-5.1-codex-max"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "high",
      "description": "Controls how much thinking the model performs before responding. The available options depend on the selected model.",
      "id": "reasoning_effort",
      "name": "Reasoning Effort",
      "options": [
        {
          "name": "Off",
          "value": "off"
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
          "name": "Extra High",
          "value": "xhigh"
        },
        {
          "name": "Maximum",
          "value": "max"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "normal",
  "id": "factory-droid",
  "modes": [
    {
      "description": "Auto-approves only read operations",
      "id": "normal",
      "name": "Auto (Off)"
    },
    {
      "description": "Build feature specs (read-only)",
      "id": "spec",
      "name": "Spec"
    },
    {
      "description": "Auto-approves file edits and low-risk actions during the session",
      "id": "auto-low",
      "name": "Auto (Low)"
    },
    {
      "description": "Auto-approves medium-risk actions during the session",
      "id": "auto-medium",
      "name": "Auto (Medium)"
    },
    {
      "description": "Auto-approves all actions",
      "id": "auto-high",
      "name": "Auto (High)"
    }
  ],
  "name": "Factory Droid",
  "protocolVersion": 1,
  "version": "0.159.1"
};

// dist-src/agents/fast-agent.ts
var agent17 = {
  "agentCapabilities": {
    "_meta": {
      "co.huggingface": {
        "structuredOutput": true
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
      "image": true
    },
    "sessionCapabilities": {
      "list": {},
      "resume": {}
    }
  },
  "agentInfo": {
    "name": "fast-agent-acp",
    "version": "0.7.22"
  },
  "authMethods": [
    {
      "description": "Set provider keys in fast-agent.secrets.yaml or env vars. See docs: [Configuration Reference](https://fast-agent.ai/ref/config_file/)",
      "id": "fast-agent-ai-secrets",
      "name": "Configure fast-agent"
    }
  ],
  "commands": [
    {
      "description": "Show fast-agent diagnostics",
      "input": {
        "hint": "[system|auth|authreset]"
      },
      "name": "status"
    },
    {
      "description": "List available tools",
      "name": "tools"
    },
    {
      "description": "Discover slash commands and usage",
      "input": {
        "hint": "[<command>] [--json]"
      },
      "name": "commands"
    },
    {
      "description": "List, browse, search, or manage local skills",
      "input": {
        "hint": "[list|available|search <query>|add <name|number>|remove <name|number>|update <name|number|all> [--force] [--yes]|registry [number|url|path]|help]"
      },
      "name": "skills"
    },
    {
      "description": "List or manage card packs (add/remove/update/publish/registry)",
      "input": {
        "hint": "[add|remove|update|publish|registry] [name|number|all|url] [--force|--yes|--no-push|--message|--temp-dir|--keep-temp]"
      },
      "name": "cards"
    },
    {
      "description": "List or manage command plugins",
      "input": {
        "hint": "[list|available|add <name|number>|remove <name|number>|update <name|number|all> [--force] [--yes]|registry [number|url|path]|help]"
      },
      "name": "plugins"
    },
    {
      "description": "Inspect, switch, or update model settings",
      "input": {
        "hint": "reasoning <value> | verbosity <value> | fast <on|off|flex|status> | web_search <on|off|default> | switch [<model>] | doctor | references [list|set|unset] | catalog <provider> [--all]"
      },
      "name": "model"
    },
    {
      "description": "Show or manage conversation history",
      "input": {
        "hint": "[show|detail <turn>|save|load] [args]"
      },
      "name": "history"
    },
    {
      "description": "Clear history (`last` for prev. turn)",
      "input": {
        "hint": "[last]"
      },
      "name": "clear"
    },
    {
      "description": "List or manage sessions",
      "input": {
        "hint": "[list|new|resume|title|fork|delete|pin|export] [args]"
      },
      "name": "session"
    },
    {
      "description": "Load an AgentCard from file or URL",
      "input": {
        "hint": "<filename|url> [--tool [remove]]"
      },
      "name": "card"
    },
    {
      "description": "Attach an agent as a tool or dump its AgentCard",
      "input": {
        "hint": "<@name> [--tool [remove]|--dump]"
      },
      "name": "agent"
    },
    {
      "description": "Manage runtime MCP servers and MCP data-layer sessions",
      "input": {
        "hint": "list | connect <target> [--name <server>] [--auth <token>] [--timeout <seconds>] [--oauth|--no-oauth] [--reconnect|--no-reconnect] | session [list|jar|new|use|clear] | disconnect <server>"
      },
      "name": "mcp"
    }
  ],
  "configOptions": [],
  "currentModeId": "agent",
  "id": "fast-agent",
  "modes": [
    {
      "description": "You are a helpful AI Agent.",
      "id": "agent",
      "name": "Agent"
    }
  ],
  "name": "fast-agent",
  "protocolVersion": 1,
  "version": "0.7.22"
};

// dist-src/agents/gemini.ts
var agent18 = {
  "agentCapabilities": {
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": true
    },
    "promptCapabilities": {
      "audio": true,
      "embeddedContext": true,
      "image": true
    }
  },
  "agentInfo": {
    "name": "gemini-cli",
    "title": "Gemini CLI",
    "version": "0.49.0"
  },
  "authMethods": [
    {
      "description": "Log in with your Google account",
      "id": "oauth-personal",
      "name": "Log in with Google"
    },
    {
      "_meta": {
        "api-key": {
          "provider": "google"
        }
      },
      "description": "Use an API key with Gemini Developer API",
      "id": "gemini-api-key",
      "name": "Gemini API key"
    },
    {
      "description": "Use an API key with Vertex AI GenAI API",
      "id": "vertex-ai",
      "name": "Vertex AI"
    },
    {
      "_meta": {
        "gateway": {
          "protocol": "google",
          "restartRequired": "false"
        }
      },
      "description": "Use a custom AI API Gateway",
      "id": "gateway",
      "name": "AI API Gateway"
    }
  ],
  "commands": [
    {
      "description": "Manage memory.",
      "name": "memory"
    },
    {
      "description": "Shows the current memory contents.",
      "name": "memory show"
    },
    {
      "description": "Refreshes the memory from the source.",
      "name": "memory refresh"
    },
    {
      "description": "Lists the paths of the GEMINI.md files in use.",
      "name": "memory list"
    },
    {
      "description": "Lists memory items extracted from past sessions that are pending review.",
      "name": "memory inbox"
    },
    {
      "description": "Manage extensions.",
      "name": "extensions"
    },
    {
      "description": "Lists all installed extensions.",
      "name": "extensions list"
    },
    {
      "description": "Explore available extensions.",
      "name": "extensions explore"
    },
    {
      "description": "Enable an extension.",
      "name": "extensions enable"
    },
    {
      "description": "Disable an extension.",
      "name": "extensions disable"
    },
    {
      "description": "Install an extension from a git repo or local path.",
      "name": "extensions install"
    },
    {
      "description": "Link an extension from a local path.",
      "name": "extensions link"
    },
    {
      "description": "Uninstall an extension.",
      "name": "extensions uninstall"
    },
    {
      "description": "Restart an extension.",
      "name": "extensions restart"
    },
    {
      "description": "Update an extension.",
      "name": "extensions update"
    },
    {
      "description": "Analyzes the project and creates a tailored GEMINI.md file",
      "name": "init"
    },
    {
      "description": "Restore to a previous checkpoint, or list available checkpoints to restore. This will reset the conversation and file history to the state it was in when the checkpoint was created",
      "name": "restore"
    },
    {
      "description": "Lists all available checkpoints.",
      "name": "restore list"
    },
    {
      "description": "Show version and environment info",
      "name": "about"
    },
    {
      "description": "Show available commands",
      "name": "help"
    }
  ],
  "configOptions": [],
  "currentModeId": "default",
  "id": "gemini",
  "modes": [
    {
      "description": "Prompts for approval",
      "id": "default",
      "name": "Default"
    },
    {
      "description": "Auto-approves edit tools",
      "id": "autoEdit",
      "name": "Auto Edit"
    },
    {
      "description": "Auto-approves all tools",
      "id": "yolo",
      "name": "YOLO"
    },
    {
      "description": "Read-only mode",
      "id": "plan",
      "name": "Plan"
    }
  ],
  "name": "Gemini CLI",
  "protocolVersion": 1,
  "version": "0.49.0"
};

// dist-src/agents/github-copilot-cli.ts
var agent19 = {
  "agentCapabilities": {
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": true
    },
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "list": {}
    }
  },
  "agentInfo": {
    "name": "Copilot",
    "title": "Copilot",
    "version": "1.0.65"
  },
  "authMethods": [
    {
      "_meta": {
        "terminal-auth": {
          "args": [
            "login"
          ],
          "command": "/Volumes/ORICO/Users/jiangwei/.npm/_npx/a6df615aaf41884e/node_modules/@github/copilot-darwin-arm64/copilot",
          "label": "Copilot Login"
        }
      },
      "description": "Run `copilot login` in the terminal",
      "id": "copilot-login",
      "name": "Log in with Copilot CLI"
    }
  ],
  "commands": [
    {
      "description": "Add a directory to the allowed list for file access",
      "input": {
        "hint": "directory"
      },
      "name": "add-dir"
    },
    {
      "description": "Enable all permissions",
      "input": {
        "hint": "[on|off|show]"
      },
      "name": "allow-all"
    },
    {
      "description": "Toggle autopilot mode",
      "input": {
        "hint": "[on|off]"
      },
      "name": "autopilot"
    },
    {
      "description": "Summarize conversation history to reduce context window usage. Optionally provide focus instructions.",
      "input": {
        "hint": "focus instructions"
      },
      "name": "compact"
    },
    {
      "description": "Session history tools and insights",
      "input": {
        "hint": "standup|search|tips|cost-tips|improve|reindex"
      },
      "name": "chronicle"
    },
    {
      "description": "Show context window token usage and visualization",
      "name": "context"
    },
    {
      "description": "Change working directory or show current directory",
      "input": {
        "hint": "directory"
      },
      "name": "cwd"
    },
    {
      "description": "Show loaded environment details (instructions, MCP servers, skills, agents, hooks, plugins, LSPs, extensions)",
      "name": "env"
    },
    {
      "description": "Schedule a recurring prompt or skill for this session",
      "input": {
        "hint": "<interval> <prompt>"
      },
      "name": "every"
    },
    {
      "description": "Schedule a one-shot prompt or skill for this session",
      "input": {
        "hint": "<delay> <prompt>"
      },
      "name": "after"
    },
    {
      "description": "Enable fleet mode for parallel subagent execution",
      "input": {
        "hint": "prompt"
      },
      "name": "fleet"
    },
    {
      "description": "Initialize Copilot instructions for this repository",
      "input": {
        "hint": "[suppress]"
      },
      "name": "init"
    },
    {
      "description": "Display all allowed directories for file access",
      "name": "list-dirs"
    },
    {
      "description": "Manage MCP server configuration",
      "input": {
        "hint": "list|show|enable|disable|reload"
      },
      "name": "mcp"
    },
    {
      "description": "Show memory status, or enable/disable memory across sessions",
      "input": {
        "hint": "[on|off|show]"
      },
      "name": "memory"
    },
    {
      "description": "Select AI model to use",
      "input": {
        "hint": "model"
      },
      "name": "model"
    },
    {
      "description": "Create an implementation plan before coding",
      "input": {
        "hint": "prompt"
      },
      "name": "plan"
    },
    {
      "description": "Manage plugins and plugin marketplaces",
      "input": {
        "hint": "list"
      },
      "name": "plugin"
    },
    {
      "description": "Rename the current session",
      "input": {
        "hint": "name"
      },
      "name": "rename"
    },
    {
      "description": "Run deep research investigation using GitHub search and web sources",
      "input": {
        "hint": "topic"
      },
      "name": "research"
    },
    {
      "description": "Show remote status or toggle remote control from GitHub web and mobile",
      "input": {
        "hint": "[on|off|show]"
      },
      "name": "remote"
    },
    {
      "description": "Reset the list of allowed tools",
      "name": "reset-allowed-tools"
    },
    {
      "description": "Run code review agent to analyze changes",
      "input": {
        "hint": "additional instructions"
      },
      "name": "review"
    },
    {
      "description": "Get an independent critique of your current work from the rubber duck agent",
      "input": {
        "hint": "additional instructions"
      },
      "name": "rubber-duck"
    },
    {
      "description": "Configure sandbox modes",
      "input": {
        "hint": "[enable|disable]"
      },
      "name": "sandbox"
    },
    {
      "description": "Analyze staged and unstaged changes for security vulnerabilities.",
      "input": {
        "hint": "additional instructions"
      },
      "name": "security-review"
    },
    {
      "description": "View and manage sessions",
      "input": {
        "hint": "info|checkpoints|files|plan|rename"
      },
      "name": "session"
    },
    {
      "description": "Manage skills for enhanced capabilities",
      "input": {
        "hint": "list|info|reload"
      },
      "name": "skills"
    },
    {
      "description": "Manage Copilot Subconscious memory consolidation",
      "input": {
        "hint": "run"
      },
      "name": "subconscious"
    },
    {
      "description": "Display session usage metrics and statistics",
      "name": "usage"
    },
    {
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "artifact-static-site"
    },
    {
      "description": "Multi Agents Looping \u2014 a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "deep-investigate"
    },
    {
      "description": "Use when asked to analyze code and add explanatory code annotations, file headers, doc comments, inline comments, or JSX-safe comments.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "docs-code"
    },
    {
      "description": "Docs-driven delivery workflow. Use when splitting design docs into tasks, creating implementation plans under docs/plan, executing develop/verify/merge cycles, maintaining design doc consistency, or writing UI layout documentation with ASCII diagrams.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "docs-sprint"
    },
    {
      "description": `Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document \u2014 including when they say "write a report", "draft a proposal", "make a contract", "fill in this form", "reformat to match this template", or any task whose final output is a .docx file. Even if the user doesn't mention "docx" explicitly, if the task implies a printable/formal document, use this skill.
`,
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "docx"
    },
    {
      "description": 'Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.',
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "find-skills"
    },
    {
      "description": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "gpt-taste"
    },
    {
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "high-end-visual-design"
    },
    {
      "description": 'Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): "make a PDF", "generate a report", "write a proposal", "create a resume", "beautiful PDF", "professional document", "cover page", "polished PDF", "client-ready document". FILL (complete form fields): "fill in the form", "fill out this PDF", "complete the form fields", "write values into PDF", "what fields does this PDF have". REFORMAT (apply design to an existing doc): "reformat this document", "apply our style", "convert this Markdown/text to PDF", "make this doc look good", "re-style this PDF". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n',
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "pdf"
    },
    {
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "pptx-generator"
    },
    {
      "description": "Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Codex's capabilities with specialized knowledge, workflows, or tool integrations.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "skill-creator"
    },
    {
      "description": "Install Agents skills into $AGENTS_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos).",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "skill-installer"
    },
    {
      "description": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "xlsx"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "https://agentclientprotocol.com/protocol/session-modes#agent",
      "description": "Controls how Copilot responds: a conversational agent, planning multi-step work, or autonomous autopilot.",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "description": "Default agent mode for conversational interactions",
          "name": "Agent",
          "value": "https://agentclientprotocol.com/protocol/session-modes#agent"
        },
        {
          "description": "Plan mode for creating and executing multi-step plans",
          "name": "Plan",
          "value": "https://agentclientprotocol.com/protocol/session-modes#plan"
        },
        {
          "description": "Autonomous mode that enables allow-all and runs until task completion without user interaction (experimental)",
          "name": "Autopilot",
          "value": "https://agentclientprotocol.com/protocol/session-modes#autopilot"
        }
      ],
      "type": "select"
    },
    {
      "category": "permissions",
      "currentValue": "off",
      "description": "Controls whether Copilot prompts for approval before using tools, accessing paths, or fetching URLs.",
      "id": "allow_all",
      "name": "Allow All",
      "options": [
        {
          "description": "Automatically approve all tool, path, and URL requests",
          "name": "On",
          "value": "on"
        },
        {
          "description": "Require approval for tool, path, and URL requests",
          "name": "Off",
          "value": "off"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "https://agentclientprotocol.com/protocol/session-modes#agent",
  "id": "github-copilot-cli",
  "modes": [
    {
      "description": "Default agent mode for conversational interactions",
      "id": "https://agentclientprotocol.com/protocol/session-modes#agent",
      "name": "Agent"
    },
    {
      "description": "Plan mode for creating and executing multi-step plans",
      "id": "https://agentclientprotocol.com/protocol/session-modes#plan",
      "name": "Plan"
    },
    {
      "description": "Autonomous mode that enables allow-all and runs until task completion without user interaction (experimental)",
      "id": "https://agentclientprotocol.com/protocol/session-modes#autopilot",
      "name": "Autopilot"
    }
  ],
  "name": "GitHub Copilot",
  "protocolVersion": 1,
  "version": "1.0.65"
};

// dist-src/agents/glm-acp-agent.ts
var agent20 = {
  "agentCapabilities": {
    "loadSession": true,
    "mcpCapabilities": {
      "http": true
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
    "name": "glm-acp-agent",
    "version": "1.0.0"
  },
  "authMethods": [
    {
      "description": "Set Z_AI_API_KEY in the environment, or run `glm-acp-agent --setup` once to store the key on disk. Generate one at https://z.ai/manage-apikey/apikey-list",
      "id": "z-ai-api-key",
      "name": "Z.AI API key"
    },
    {
      "description": "API key for the Z.AI / Zhipu AI service. Generate one at https://z.ai/manage-apikey/apikey-list",
      "id": "z_ai_api_key",
      "link": "https://z.ai/manage-apikey/apikey-list",
      "name": "Z.AI API key",
      "type": "env_var",
      "vars": [
        {
          "label": "Z.AI API key",
          "name": "Z_AI_API_KEY",
          "optional": false,
          "secret": true
        }
      ]
    }
  ],
  "commands": [],
  "configOptions": [],
  "currentModeId": "default",
  "id": "glm-acp-agent",
  "modes": [
    {
      "description": "Prompt before edits and commands.",
      "id": "default",
      "name": "Ask for permission"
    },
    {
      "description": "Edits run without prompting. Commands still prompt.",
      "id": "accept_edits",
      "name": "Auto-approve edits"
    },
    {
      "description": "Edits and commands run without prompting.",
      "id": "bypass_permissions",
      "name": "Bypass all permissions"
    }
  ],
  "name": "GLM Agent",
  "protocolVersion": 1,
  "version": "1.1.4"
};

// dist-src/agents/goose.ts
var agent21 = {
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
      "description": 'Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): "make a PDF", "generate a report", "write a proposal", "create a resume", "beautiful PDF", "professional document", "cover page", "polished PDF", "client-ready document". FILL (complete form fields): "fill in the form", "fill out this PDF", "complete the form fields", "write values into PDF", "what fields does this PDF have". REFORMAT (apply design to an existing doc): "reformat this document", "apply our style", "convert this Markdown/text to PDF", "make this doc look good", "re-style this PDF". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n',
      "name": "pdf"
    },
    {
      "description": 'Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.',
      "name": "find-skills"
    },
    {
      "description": "Multi Agents Looping \u2014 a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
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
      "description": `Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document \u2014 including when they say "write a report", "draft a proposal", "make a contract", "fill in this form", "reformat to match this template", or any task whose final output is a .docx file. Even if the user doesn't mention "docx" explicitly, if the task implies a printable/formal document, use this skill.
`,
      "name": "docx"
    },
    {
      "description": 'Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to "pair agent", "connect agent", "share browser", "remote browser",\n"let another agent use my browser", or "give browser access". (gstack)\nVoice triggers (speech-to-text aliases): "pair agent", "connect agent", "share my browser", "remote browser access".\n',
      "name": "pair-agent"
    },
    {
      "description": 'Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: "performance", "benchmark", "page speed", "lighthouse", "web vitals",\n"bundle size", "load time". (gstack)\nVoice triggers (speech-to-text aliases): "speed test", "check performance".\n',
      "name": "benchmark"
    },
    {
      "description": 'Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: "finalize this design", "turn this into HTML",\n"build me a page", "implement this design", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): "build the design", "code the mockup", "make it real".\n',
      "name": "design-html"
    },
    {
      "description": 'Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface \u2014 no CLI syntax required.\n\nUse when asked to "tune questions", "stop asking me that", "too many questions",\n"show my profile", "what questions have I been asked", "show my vibe",\n"developer profile", or "turn off question tuning". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time.\n',
      "name": "plan-tune"
    },
    {
      "description": `Design shotgun: generate multiple AI design variants, open a comparison board,
collect structured feedback, and iterate. Standalone design exploration you can
run anytime. Use when: "explore designs", "show me options", "design variants",
"visual brainstorm", or "I don't like how this looks".
Proactively suggest when the user describes a UI feature but hasn't seen
what it could look like. (gstack)
`,
      "name": "design-shotgun"
    },
    {
      "description": `Designer's eye plan review \u2014 interactive, like CEO and Eng review.
Rates each design dimension 0-10, explains what would make it a 10,
then fixes the plan to get there. Works in plan mode. For live site
visual audits, use /design-review. Use when asked to "review the design plan"
or "design critique".
Proactively suggest when the user has a plan with UI/UX components that
should be reviewed before implementation. (gstack)
`,
      "name": "plan-design-review"
    },
    {
      "description": 'Auto-review pipeline \u2014 reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to "auto review", "autoplan", "run all reviews", "review this plan\nautomatically", or "make the decisions for me".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): "auto plan", "automatic review".\n',
      "name": "autoplan"
    },
    {
      "description": `Design consultation: understands your product, researches the landscape, proposes a
complete design system (aesthetic, typography, color, layout, spacing, motion), and
generates font+color preview pages. Creates DESIGN.md as your project's design source
of truth. For existing sites, use /plan-design-review to infer the system instead.
Use when asked to "design system", "brand guidelines", or "create DESIGN.md".
Proactively suggest when starting a new project's UI with no existing
design system or DESIGN.md. (gstack)
`,
      "name": "design-consultation"
    },
    {
      "description": `Manage project learnings. Review, search, prune, and export what gstack
has learned across sessions. Use when asked to "what have we learned",
"show learnings", "prune stale learnings", or "export learnings".
Proactively suggest when the user asks about past patterns or wonders
"didn't we fix this before?"
`,
      "name": "learn"
    },
    {
      "description": 'Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n"fixing" unrelated code, or when you want to scope changes to one module.\nUse when asked to "freeze", "restrict edits", "only edit this folder",\nor "lock down edits". (gstack)\n',
      "name": "freeze"
    },
    {
      "description": 'Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to "be careful", "safety mode",\n"prod mode", or "careful mode". (gstack)\n',
      "name": "careful"
    },
    {
      "description": 'Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: "security audit", "threat model", "pentest review", "OWASP", "CSO review". (gstack)\nVoice triggers (speech-to-text aliases): "see-so", "see so", "security review", "security check", "vulnerability scan", "run security".\n',
      "name": "cso"
    },
    {
      "description": 'Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: "monitor deploy", "canary", "post-deploy check",\n"watch production", "verify deploy". (gstack)\n',
      "name": "canary"
    },
    {
      "description": 'Launch GStack Browser \u2014 AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to "open gstack browser", "launch browser", "connect chrome",\n"open chrome", "real browser", "launch chrome", "side panel", or "control my browser".\nVoice triggers (speech-to-text aliases): "show me the browser".\n',
      "name": "open-gstack-browser"
    },
    {
      "description": 'Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to "debug this", "fix this bug", "why is this broken",\n"investigate this error", or "root cause analysis".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, "it was working\nyesterday", or is troubleshooting why something stopped working. (gstack)\n',
      "name": "investigate"
    },
    {
      "description": 'Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off \u2014 even across Conductor workspace handoffs.\nUse when asked to "resume", "restore context", "where was I", or\n"pick up where I left off". Pair with /context-save.\nFormerly /checkpoint resume \u2014 renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack)\n',
      "name": "context-restore"
    },
    {
      "description": 'Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to "update the docs", "sync documentation", or "post-ship docs".\nProactively suggest after a PR is merged or code is shipped. (gstack)\n',
      "name": "document-release"
    },
    {
      "description": 'Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: "health check",\n"code quality", "how healthy is the codebase", "run all checks",\n"quality score". (gstack)\n',
      "name": "health"
    },
    {
      "description": `Upgrade gstack to the latest version. Detects global vs vendored install,
runs the upgrade, and shows what's new. Use when asked to "upgrade gstack",
"update gstack", or "get latest version".
Voice triggers (speech-to-text aliases): "upgrade the tools", "update the tools", "gee stack upgrade", "g stack upgrade".
`,
      "name": "gstack-upgrade"
    },
    {
      "description": 'Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: "merge", "land", "deploy", "merge and verify",\n"land it", "ship it to production". (gstack)\n',
      "name": "land-and-deploy"
    },
    {
      "description": 'OpenAI Codex CLI wrapper \u2014 three modes. Code review: independent diff review via\ncodex review with pass/fail gate. Challenge: adversarial mode that tries to break\nyour code. Consult: ask codex anything with session continuity for follow-ups.\nThe "200 IQ autistic developer" second opinion. Use when asked to "codex review",\n"codex challenge", "ask codex", "second opinion", or "consult codex". (gstack)\nVoice triggers (speech-to-text aliases): "code x", "code ex", "get another opinion".\n',
      "name": "codex"
    },
    {
      "description": 'Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to "open in browser", "test the\nsite", "take a screenshot", or "dogfood this". (gstack)',
      "name": "browse"
    },
    {
      "description": 'Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to "guard mode",\n"full safety", "lock it down", or "maximum safety". (gstack)',
      "name": "guard"
    },
    {
      "description": 'CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to "think bigger", "expand scope", "strategy review", "rethink this",\nor "is this ambitious enough".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack)',
      "name": "plan-ceo-review"
    },
    {
      "description": `Report-only QA testing. Systematically tests a web application and produces a
structured report with health score, screenshots, and repro steps \u2014 but never
fixes anything. Use when asked to "just report bugs", "qa report only", or
"test but don't fix". For the full test-fix-verify loop, use /qa instead.
Proactively suggest when the user wants a bug report without any code changes. (gstack)
Voice triggers (speech-to-text aliases): "bug report", "just check for bugs".`,
      "name": "qa-only"
    },
    {
      "description": 'Eng manager-mode plan review. Lock in the execution plan \u2014 architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n"review the architecture", "engineering review", or "lock in the plan".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding \u2014 to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): "tech review", "technical review", "plan engineering review".',
      "name": "plan-eng-review"
    },
    {
      "description": "Fast headless browser for QA testing and site dogfooding. Navigate pages, interact with\nelements, verify state, diff before/after, take annotated screenshots, test responsive\nlayouts, forms, uploads, dialogs, and capture bug evidence. Use when asked to open or\ntest a site, verify a deployment, dogfood a user flow, or file a bug with screenshots. (gstack)",
      "name": "gstack"
    },
    {
      "description": 'Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust\nboundary violations, conditional side effects, and other structural issues. Use when\nasked to "review this PR", "code review", "pre-landing review", or "check my diff".\nProactively suggest when the user is about to merge or land code changes. (gstack)',
      "name": "review"
    },
    {
      "description": `Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,
AI slop patterns, and slow interactions \u2014 then fixes them. Iteratively fixes issues
in source code, committing each fix atomically and re-verifying with before/after
screenshots. For plan-mode design review (before implementation), use /plan-design-review.
Use when asked to "audit the design", "visual QA", "check if it looks good", or "design polish".
Proactively suggest when the user mentions visual inconsistencies or
wants to polish the look of a live site. (gstack)`,
      "name": "design-review"
    },
    {
      "description": 'Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to "weekly retro", "what did we ship", or "engineering retrospective".\nProactively suggest at the end of a work week or sprint. (gstack)',
      "name": "retro"
    },
    {
      "description": 'Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side \u2014 compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers "which model is actually best\nfor this skill?" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: "benchmark models", "compare models",\n"which model is best for X", "cross-model comparison", "model shootout". (gstack)\nVoice triggers (speech-to-text aliases): "compare models", "model shootout", "which model is best".',
      "name": "benchmark-models"
    },
    {
      "description": 'Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to "unfreeze", "unlock edits", "remove freeze", or\n"allow all edits". (gstack)',
      "name": "unfreeze"
    },
    {
      "description": 'Claude Code CLI wrapper for non-Claude hosts - three modes. Review: independent\ndiff review via claude -p. Challenge: adversarial failure-mode review. Consult:\nask Claude about the repo with read-only file tools. Use when asked for "claude\nreview", "claude challenge", "ask claude", "second opinion from claude", or\n"outside voice". (gstack)',
      "name": "claude"
    },
    {
      "description": 'Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to "ship", "deploy",\n"push to main", "create a PR", "merge and push", or "get it deployed".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)',
      "name": "ship"
    },
    {
      "description": 'Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact \u2014 a finished artifact. Use when asked to "make a PDF", "export to\nPDF", "turn this markdown into a PDF", or "generate a document". (gstack)\nVoice triggers (speech-to-text aliases): "make this a pdf", "make it a pdf", "export to pdf", "turn this into a pdf", "turn this markdown into a pdf", "generate a pdf", "make a pdf from", "pdf this markdown".',
      "name": "make-pdf"
    },
    {
      "description": 'Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: "setup deploy", "configure deployment", "set up land-and-deploy",\n"how do I deploy with gstack", "add deploy config".',
      "name": "setup-deploy"
    },
    {
      "description": 'Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to "save progress", "save state", "context save", or\n"save my work". Pair with /context-restore to resume later.\nFormerly /checkpoint \u2014 renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack)',
      "name": "context-save"
    },
    {
      "description": `Pull data from a web page. First call on a new intent prototypes the flow
via $B primitives and returns JSON. Subsequent calls on a matching intent
route to a codified browser-skill and return in ~200ms. Read-only \u2014 for
mutating flows (form fills, clicks, submissions), use /automate.
Use when asked to "scrape", "get data from", "pull", "extract from", or
"what's on" a page. (gstack)`,
      "name": "scrape"
    },
    {
      "description": `Systematically QA test a web application and fix bugs found. Runs QA testing,
then iteratively fixes bugs in source code, committing each fix atomically and
re-verifying. Use when asked to "qa", "QA", "test this site", "find bugs",
"test and fix", or "fix what's broken".
Proactively suggest when the user says a feature is ready for testing
or asks "does this work?". Three tiers: Quick (critical/high only),
Standard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,
fix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)
Voice triggers (speech-to-text aliases): "quality check", "test the app", "run QA".`,
      "name": "qa"
    },
    {
      "description": 'Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to "import cookies",\n"login to the site", or "authenticate the browser". (gstack)',
      "name": "setup-browser-cookies"
    },
    {
      "description": 'Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n"test the DX", "DX audit", "developer experience test", or "try the\nonboarding". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): "dx audit", "test the developer experience", "try the onboarding", "developer experience test".',
      "name": "devex-review"
    },
    {
      "description": `Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots
are currently claimed by open PRs, which sibling Conductor workspaces have
WIP work likely to ship soon, and what slot /ship would pick next. No
mutations \u2014 just a snapshot. Use when asked to "landing report", "what's in
the queue", "show me open PRs", or "which version do I claim next". (gstack)`,
      "name": "landing-report"
    },
    {
      "description": `YC Office Hours \u2014 two modes. Startup mode: six forcing questions that expose
demand reality, status quo, desperate specificity, narrowest wedge, observation,
and future-fit. Builder mode: design thinking brainstorming for side projects,
hackathons, learning, and open source. Saves a design doc.
Use when asked to "brainstorm this", "I have an idea", "help me think through
this", "office hours", or "is this worth building".
Proactively invoke this skill (do NOT answer directly) when the user describes
a new product idea, asks whether something is worth building, wants to think
through design decisions for something that doesn't exist yet, or is exploring
a concept before any code is written.
Use before /plan-ceo-review or /plan-eng-review. (gstack)`,
      "name": "office-hours"
    },
    {
      "description": 'Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to "DX review", "developer experience audit", "devex review",\nor "API design review".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): "dx review", "developer experience review", "devex review", "devex audit", "API design review", "onboarding review".',
      "name": "plan-devex-review"
    },
    {
      "description": 'Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to "gbrain is running, and this agent\ncan call it." Use when: "setup gbrain", "connect gbrain", "start\ngbrain", "install gbrain", "configure gbrain for this machine". (gstack)',
      "name": "setup-gbrain"
    },
    {
      "description": 'Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to "skillify", "codify", "save this scrape", or\n"make this permanent". (gstack)',
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

// dist-src/agents/grok-build.ts
var agent22 = {
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
      "description": 'Use this skill any time a spreadsheet file is the primary input or output. This means any task where the user wants to: open, read, edit, or fix an existing .xlsx, .xlsm, .csv, or .tsv file (e.g., adding columns, computing formulas, formatting, charting, cleaning messy data); create a new spreadsheet from scratch or from other data sources; or convert between tabular file formats. Trigger especially when the user references a spreadsheet file by name or path \u2014 even casually (like "the xlsx in my downloads") \u2014 and wants something done to it or produced from it. Also trigger for cleaning or restructuring messy tabular data files (malformed rows, misplaced headers, junk data) into proper spreadsheets. The deliverable must be a spreadsheet file. Do NOT trigger when the primary deliverable is a Word document, HTML report, standalone Python script, database pipeline, or Google Sheets API integration, even if tabular data is involved.',
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
      "description": 'Use this skill any time a .pptx file is involved in any way \u2014 as input, output, or both. This includes: creating slide decks, pitch decks, or presentations; reading, parsing, or extracting text from any .pptx file (even if the extracted content will be used elsewhere, like in an email or summary); editing, modifying, or updating existing presentations; combining or splitting slide files; working with templates, layouts, speaker notes, or comments. Trigger whenever the user mentions "deck," "slides," "presentation," or references a .pptx filename, regardless of what they plan to do with the content afterward. If a .pptx file needs to be opened, created, or touched, use this skill.',
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
      "description": "Grok docs \u2014 config, MCP, auth, skills, commands",
      "input": null,
      "name": "help"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.agents/skills/pdf/SKILL.md",
        "scope": "user"
      },
      "description": 'Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): "make a PDF", "generate a report", "write a proposal", "create a resume", "beautiful PDF", "professional document", "cover page", "polished PDF", "client-ready document". FILL (complete form fields): "fill in the form", "fill out this PDF", "complete the form fields", "write values into PDF", "what fields does this PDF have". REFORMAT (apply design to an existing doc): "reformat this document", "apply our style", "convert this Markdown/text to PDF", "make this doc look good", "re-style this PDF". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.',
      "input": null,
      "name": "pdf"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.agents/skills/find-skills/SKILL.md",
        "scope": "user"
      },
      "description": 'Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.',
      "input": null,
      "name": "find-skills"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.agents/skills/deep-investigate/SKILL.md",
        "scope": "user"
      },
      "description": "Multi Agents Looping \u2014 a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
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
      "description": 'Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to "pair agent", "connect agent", "share browser", "remote browser",\n"let another agent use my browser", or "give browser access". (gstack)\nVoice triggers (speech-to-text aliases): "pair agent", "connect agent", "share my browser", "remote browser access".',
      "input": null,
      "name": "pair-agent"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/benchmark/SKILL.md",
        "scope": "user"
      },
      "description": 'Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: "performance", "benchmark", "page speed", "lighthouse", "web vitals",\n"bundle size", "load time". (gstack)\nVoice triggers (speech-to-text aliases): "speed test", "check performance".',
      "input": null,
      "name": "benchmark"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/design-html/SKILL.md",
        "scope": "user"
      },
      "description": 'Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: "finalize this design", "turn this into HTML",\n"build me a page", "implement this design", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): "build the design", "code the mockup", "make it real".',
      "input": null,
      "name": "design-html"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/plan-tune/SKILL.md",
        "scope": "user"
      },
      "description": 'Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface \u2014 no CLI syntax required.\n\nUse when asked to "tune questions", "stop asking me that", "too many questions",\n"show my profile", "what questions have I been asked", "show my vibe",\n"developer profile", or "turn off question tuning". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time.',
      "input": null,
      "name": "plan-tune"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/design-shotgun/SKILL.md",
        "scope": "user"
      },
      "description": `Design shotgun: generate multiple AI design variants, open a comparison board,
collect structured feedback, and iterate. Standalone design exploration you can
run anytime. Use when: "explore designs", "show me options", "design variants",
"visual brainstorm", or "I don't like how this looks".
Proactively suggest when the user describes a UI feature but hasn't seen
what it could look like. (gstack)`,
      "input": null,
      "name": "design-shotgun"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/plan-design-review/SKILL.md",
        "scope": "user"
      },
      "description": `Designer's eye plan review \u2014 interactive, like CEO and Eng review.
Rates each design dimension 0-10, explains what would make it a 10,
then fixes the plan to get there. Works in plan mode. For live site
visual audits, use /design-review. Use when asked to "review the design plan"
or "design critique".
Proactively suggest when the user has a plan with UI/UX components that
should be reviewed before implementation. (gstack)`,
      "input": null,
      "name": "plan-design-review"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/autoplan/SKILL.md",
        "scope": "user"
      },
      "description": 'Auto-review pipeline \u2014 reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to "auto review", "autoplan", "run all reviews", "review this plan\nautomatically", or "make the decisions for me".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): "auto plan", "automatic review".',
      "input": null,
      "name": "autoplan"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/design-consultation/SKILL.md",
        "scope": "user"
      },
      "description": `Design consultation: understands your product, researches the landscape, proposes a
complete design system (aesthetic, typography, color, layout, spacing, motion), and
generates font+color preview pages. Creates DESIGN.md as your project's design source
of truth. For existing sites, use /plan-design-review to infer the system instead.
Use when asked to "design system", "brand guidelines", or "create DESIGN.md".
Proactively suggest when starting a new project's UI with no existing
design system or DESIGN.md. (gstack)`,
      "input": null,
      "name": "design-consultation"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/learn/SKILL.md",
        "scope": "user"
      },
      "description": `Manage project learnings. Review, search, prune, and export what gstack
has learned across sessions. Use when asked to "what have we learned",
"show learnings", "prune stale learnings", or "export learnings".
Proactively suggest when the user asks about past patterns or wonders
"didn't we fix this before?"`,
      "input": null,
      "name": "learn"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/freeze/SKILL.md",
        "scope": "user"
      },
      "description": 'Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n"fixing" unrelated code, or when you want to scope changes to one module.\nUse when asked to "freeze", "restrict edits", "only edit this folder",\nor "lock down edits". (gstack)',
      "input": null,
      "name": "freeze"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/careful/SKILL.md",
        "scope": "user"
      },
      "description": 'Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to "be careful", "safety mode",\n"prod mode", or "careful mode". (gstack)',
      "input": null,
      "name": "careful"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/cso/SKILL.md",
        "scope": "user"
      },
      "description": 'Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: "security audit", "threat model", "pentest review", "OWASP", "CSO review". (gstack)\nVoice triggers (speech-to-text aliases): "see-so", "see so", "security review", "security check", "vulnerability scan", "run security".',
      "input": null,
      "name": "cso"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/canary/SKILL.md",
        "scope": "user"
      },
      "description": 'Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: "monitor deploy", "canary", "post-deploy check",\n"watch production", "verify deploy". (gstack)',
      "input": null,
      "name": "canary"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/open-gstack-browser/SKILL.md",
        "scope": "user"
      },
      "description": 'Launch GStack Browser \u2014 AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to "open gstack browser", "launch browser", "connect chrome",\n"open chrome", "real browser", "launch chrome", "side panel", or "control my browser".\nVoice triggers (speech-to-text aliases): "show me the browser".',
      "input": null,
      "name": "open-gstack-browser"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/investigate/SKILL.md",
        "scope": "user"
      },
      "description": 'Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to "debug this", "fix this bug", "why is this broken",\n"investigate this error", or "root cause analysis".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, "it was working\nyesterday", or is troubleshooting why something stopped working. (gstack)',
      "input": null,
      "name": "investigate"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/context-restore/SKILL.md",
        "scope": "user"
      },
      "description": 'Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off \u2014 even across Conductor workspace handoffs.\nUse when asked to "resume", "restore context", "where was I", or\n"pick up where I left off". Pair with /context-save.\nFormerly /checkpoint resume \u2014 renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack)',
      "input": null,
      "name": "context-restore"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/document-release/SKILL.md",
        "scope": "user"
      },
      "description": 'Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to "update the docs", "sync documentation", or "post-ship docs".\nProactively suggest after a PR is merged or code is shipped. (gstack)',
      "input": null,
      "name": "document-release"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/health/SKILL.md",
        "scope": "user"
      },
      "description": 'Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: "health check",\n"code quality", "how healthy is the codebase", "run all checks",\n"quality score". (gstack)',
      "input": null,
      "name": "health"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack-upgrade/SKILL.md",
        "scope": "user"
      },
      "description": `Upgrade gstack to the latest version. Detects global vs vendored install,
runs the upgrade, and shows what's new. Use when asked to "upgrade gstack",
"update gstack", or "get latest version".
Voice triggers (speech-to-text aliases): "upgrade the tools", "update the tools", "gee stack upgrade", "g stack upgrade".`,
      "input": null,
      "name": "gstack-upgrade"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/land-and-deploy/SKILL.md",
        "scope": "user"
      },
      "description": 'Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: "merge", "land", "deploy", "merge and verify",\n"land it", "ship it to production". (gstack)',
      "input": null,
      "name": "land-and-deploy"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/codex/SKILL.md",
        "scope": "user"
      },
      "description": 'OpenAI Codex CLI wrapper \u2014 three modes. Code review: independent diff review via\ncodex review with pass/fail gate. Challenge: adversarial mode that tries to break\nyour code. Consult: ask codex anything with session continuity for follow-ups.\nThe "200 IQ autistic developer" second opinion. Use when asked to "codex review",\n"codex challenge", "ask codex", "second opinion", or "consult codex". (gstack)\nVoice triggers (speech-to-text aliases): "code x", "code ex", "get another opinion".',
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
      "description": 'Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to "open in browser", "test the\nsite", "take a screenshot", or "dogfood this". (gstack)',
      "input": null,
      "name": "browse"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-guard/SKILL.md",
        "scope": "user"
      },
      "description": 'Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to "guard mode",\n"full safety", "lock it down", or "maximum safety". (gstack)',
      "input": null,
      "name": "guard"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-plan-ceo-review/SKILL.md",
        "scope": "user"
      },
      "description": 'CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to "think bigger", "expand scope", "strategy review", "rethink this",\nor "is this ambitious enough".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack)',
      "input": null,
      "name": "plan-ceo-review"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-qa-only/SKILL.md",
        "scope": "user"
      },
      "description": `Report-only QA testing. Systematically tests a web application and produces a
structured report with health score, screenshots, and repro steps \u2014 but never
fixes anything. Use when asked to "just report bugs", "qa report only", or
"test but don't fix". For the full test-fix-verify loop, use /qa instead.
Proactively suggest when the user wants a bug report without any code changes. (gstack)
Voice triggers (speech-to-text aliases): "bug report", "just check for bugs".`,
      "input": null,
      "name": "qa-only"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-plan-eng-review/SKILL.md",
        "scope": "user"
      },
      "description": 'Eng manager-mode plan review. Lock in the execution plan \u2014 architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n"review the architecture", "engineering review", or "lock in the plan".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding \u2014 to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): "tech review", "technical review", "plan engineering review".',
      "input": null,
      "name": "plan-eng-review"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-review/SKILL.md",
        "scope": "user"
      },
      "description": 'Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust\nboundary violations, conditional side effects, and other structural issues. Use when\nasked to "review this PR", "code review", "pre-landing review", or "check my diff".\nProactively suggest when the user is about to merge or land code changes. (gstack)',
      "input": null,
      "name": "review"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-design-review/SKILL.md",
        "scope": "user"
      },
      "description": `Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,
AI slop patterns, and slow interactions \u2014 then fixes them. Iteratively fixes issues
in source code, committing each fix atomically and re-verifying with before/after
screenshots. For plan-mode design review (before implementation), use /plan-design-review.
Use when asked to "audit the design", "visual QA", "check if it looks good", or "design polish".
Proactively suggest when the user mentions visual inconsistencies or
wants to polish the look of a live site. (gstack)`,
      "input": null,
      "name": "design-review"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-retro/SKILL.md",
        "scope": "user"
      },
      "description": 'Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to "weekly retro", "what did we ship", or "engineering retrospective".\nProactively suggest at the end of a work week or sprint. (gstack)',
      "input": null,
      "name": "retro"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-benchmark-models/SKILL.md",
        "scope": "user"
      },
      "description": 'Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side \u2014 compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers "which model is actually best\nfor this skill?" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: "benchmark models", "compare models",\n"which model is best for X", "cross-model comparison", "model shootout". (gstack)\nVoice triggers (speech-to-text aliases): "compare models", "model shootout", "which model is best".',
      "input": null,
      "name": "benchmark-models"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-unfreeze/SKILL.md",
        "scope": "user"
      },
      "description": 'Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to "unfreeze", "unlock edits", "remove freeze", or\n"allow all edits". (gstack)',
      "input": null,
      "name": "unfreeze"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-claude/SKILL.md",
        "scope": "user"
      },
      "description": 'Claude Code CLI wrapper for non-Claude hosts - three modes. Review: independent\ndiff review via claude -p. Challenge: adversarial failure-mode review. Consult:\nask Claude about the repo with read-only file tools. Use when asked for "claude\nreview", "claude challenge", "ask claude", "second opinion from claude", or\n"outside voice". (gstack)',
      "input": null,
      "name": "claude"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-ship/SKILL.md",
        "scope": "user"
      },
      "description": 'Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to "ship", "deploy",\n"push to main", "create a PR", "merge and push", or "get it deployed".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)',
      "input": null,
      "name": "ship"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-make-pdf/SKILL.md",
        "scope": "user"
      },
      "description": 'Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact \u2014 a finished artifact. Use when asked to "make a PDF", "export to\nPDF", "turn this markdown into a PDF", or "generate a document". (gstack)\nVoice triggers (speech-to-text aliases): "make this a pdf", "make it a pdf", "export to pdf", "turn this into a pdf", "turn this markdown into a pdf", "generate a pdf", "make a pdf from", "pdf this markdown".',
      "input": null,
      "name": "make-pdf"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-setup-deploy/SKILL.md",
        "scope": "user"
      },
      "description": 'Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: "setup deploy", "configure deployment", "set up land-and-deploy",\n"how do I deploy with gstack", "add deploy config".',
      "input": null,
      "name": "setup-deploy"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-context-save/SKILL.md",
        "scope": "user"
      },
      "description": 'Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to "save progress", "save state", "context save", or\n"save my work". Pair with /context-restore to resume later.\nFormerly /checkpoint \u2014 renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack)',
      "input": null,
      "name": "context-save"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-scrape/SKILL.md",
        "scope": "user"
      },
      "description": `Pull data from a web page. First call on a new intent prototypes the flow
via $B primitives and returns JSON. Subsequent calls on a matching intent
route to a codified browser-skill and return in ~200ms. Read-only \u2014 for
mutating flows (form fills, clicks, submissions), use /automate.
Use when asked to "scrape", "get data from", "pull", "extract from", or
"what's on" a page. (gstack)`,
      "input": null,
      "name": "scrape"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-qa/SKILL.md",
        "scope": "user"
      },
      "description": `Systematically QA test a web application and fix bugs found. Runs QA testing,
then iteratively fixes bugs in source code, committing each fix atomically and
re-verifying. Use when asked to "qa", "QA", "test this site", "find bugs",
"test and fix", or "fix what's broken".
Proactively suggest when the user says a feature is ready for testing
or asks "does this work?". Three tiers: Quick (critical/high only),
Standard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,
fix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)
Voice triggers (speech-to-text aliases): "quality check", "test the app", "run QA".`,
      "input": null,
      "name": "qa"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-setup-browser-cookies/SKILL.md",
        "scope": "user"
      },
      "description": 'Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to "import cookies",\n"login to the site", or "authenticate the browser". (gstack)',
      "input": null,
      "name": "setup-browser-cookies"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-devex-review/SKILL.md",
        "scope": "user"
      },
      "description": 'Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n"test the DX", "DX audit", "developer experience test", or "try the\nonboarding". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): "dx audit", "test the developer experience", "try the onboarding", "developer experience test".',
      "input": null,
      "name": "devex-review"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-landing-report/SKILL.md",
        "scope": "user"
      },
      "description": `Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots
are currently claimed by open PRs, which sibling Conductor workspaces have
WIP work likely to ship soon, and what slot /ship would pick next. No
mutations \u2014 just a snapshot. Use when asked to "landing report", "what's in
the queue", "show me open PRs", or "which version do I claim next". (gstack)`,
      "input": null,
      "name": "landing-report"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-office-hours/SKILL.md",
        "scope": "user"
      },
      "description": `YC Office Hours \u2014 two modes. Startup mode: six forcing questions that expose
demand reality, status quo, desperate specificity, narrowest wedge, observation,
and future-fit. Builder mode: design thinking brainstorming for side projects,
hackathons, learning, and open source. Saves a design doc.
Use when asked to "brainstorm this", "I have an idea", "help me think through
this", "office hours", or "is this worth building".
Proactively invoke this skill (do NOT answer directly) when the user describes
a new product idea, asks whether something is worth building, wants to think
through design decisions for something that doesn't exist yet, or is exploring
a concept before any code is written.
Use before /plan-ceo-review or /plan-eng-review. (gstack)`,
      "input": null,
      "name": "office-hours"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-plan-devex-review/SKILL.md",
        "scope": "user"
      },
      "description": 'Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to "DX review", "developer experience audit", "devex review",\nor "API design review".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): "dx review", "developer experience review", "devex review", "devex audit", "API design review", "onboarding review".',
      "input": null,
      "name": "plan-devex-review"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-setup-gbrain/SKILL.md",
        "scope": "user"
      },
      "description": 'Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to "gbrain is running, and this agent\ncan call it." Use when: "setup gbrain", "connect gbrain", "start\ngbrain", "install gbrain", "configure gbrain for this machine". (gstack)',
      "input": null,
      "name": "setup-gbrain"
    },
    {
      "_meta": {
        "path": "/Volumes/ORICO/Users/jiangwei/.claude/skills/gstack/.cursor/skills/gstack-skillify/SKILL.md",
        "scope": "user"
      },
      "description": 'Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to "skillify", "codify", "save this scrape", or\n"make this permanent". (gstack)',
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
      "description": "Extract clean markdown content from web pages using Defuddle CLI, removing clutter and navigation to save tokens. Use instead of WebFetch when the user provides a URL to read or analyze, for online documentation, articles, blog posts, or any standard web page. Do NOT use for URLs ending in .md \u2014 those are already markdown, use WebFetch directly.",
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

// dist-src/agents/junie.ts
var agent23 = {
  "agentCapabilities": {
    "auth": {
      "logout": {}
    },
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": true
    },
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "additionalDirectories": {},
      "fork": {},
      "list": {},
      "resume": {}
    }
  },
  "agentInfo": {
    "name": "@jetbrains/junie",
    "title": "Junie",
    "version": "26.6.22 (2045.46)"
  },
  "authMethods": [
    {
      "description": "Log in via Junie Account in a browser.",
      "id": "jetbrains-account",
      "name": "Junie Account",
      "type": "agent"
    },
    {
      "_meta": {
        "terminal-auth": {
          "args": [
            "@jetbrains/junie@latest"
          ],
          "command": "npx",
          "env": {
            "JUNIE_HOME": "/Volumes/ORICO/Users/jiangwei/.junie"
          },
          "label": "Junie CLI login"
        }
      },
      "description": "Run Junie in a terminal and sign in using the Account screen.",
      "env": {
        "JUNIE_HOME": "/Volumes/ORICO/Users/jiangwei/.junie"
      },
      "id": "junie-cli",
      "name": "Junie CLI (interactive)",
      "type": "terminal"
    }
  ],
  "commands": [
    {
      "description": "Displays session usage and remaining quota",
      "name": "usage"
    },
    {
      "description": "Create a plan for the given task",
      "input": {
        "hint": "describe what to plan"
      },
      "name": "plan"
    },
    {
      "description": "Review code changes (diff vs main, or describe what to review)",
      "input": {
        "hint": "what to review (optional)"
      },
      "name": "review"
    }
  ],
  "configOptions": [
    {
      "category": "model",
      "currentValue": "gemini-3-flash-preview",
      "description": "Select the model Junie uses for responses",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "description": "Top-tier model, good for everyday work. Fast and inexpensive.",
          "name": "Gemini 3 Flash Preview",
          "value": "gemini-3-flash-preview"
        },
        {
          "description": "Recommended inexpensive model that consumes 1.5\u20133x fewer credits than the default, with only a small loss in quality.",
          "name": "Gemini 3.1 Flash Lite",
          "value": "gemini-3.1-flash-lite"
        },
        {
          "description": "This top-tier model, good for everyday work, consumes 1.3\u20132x as many credits as the default.",
          "name": "Claude Sonnet 4.6",
          "value": "claude-sonnet-4-6"
        },
        {
          "description": "This top-tier model is recommended for medium or complex tasks. Consumes 2-3x as many credits as the default.",
          "name": "Claude Opus 4.6",
          "value": "claude-opus-4-6"
        },
        {
          "description": "New version of Opus. It is recommended for medium or complex tasks. Consumes 2-3x as many credits as the default.",
          "name": "Claude Opus 4.7",
          "value": "claude-opus-4-7"
        },
        {
          "description": "Latest version of Opus. It is recommended for medium or complex tasks. Consumes 2-3x as many credits as the default.",
          "name": "Claude Opus 4.8",
          "value": "claude-opus-4-8"
        },
        {
          "description": "The most powerful Anthropic model. Consumes 5-10x as many credits as the default. Not available for cybersecurity and biology tasks.",
          "name": "Claude Fable 5",
          "value": "claude-fable-5"
        },
        {
          "description": "This top-tier model consumes credits similar to the default.",
          "name": "GPT-5",
          "value": "gpt-5-2025-08-07"
        },
        {
          "description": "This top-tier model consumes 1.5\u20132x as many credits as the default.",
          "name": "GPT-5.3-codex",
          "value": "gpt-5.3-codex"
        },
        {
          "description": "Similar quality to GPT-5.3-codex, consumes 2\u20133x as many credits as the default.",
          "name": "GPT-5.4",
          "value": "gpt-5.4"
        },
        {
          "description": "The most advanced coding model by OpenAI, consumes 3\u20136x as many credits as the default.",
          "name": "GPT-5.5",
          "value": "gpt-5.5"
        },
        {
          "description": "This top-tier model consumes 1.5\u20132x as many credits as the default.",
          "name": "GPT-5.2",
          "value": "gpt-5.2-2025-12-11"
        },
        {
          "description": "This model is in preview. Response times may vary, and credit usage may be significantly higher than expected. Please monitor your balance.",
          "name": "Gemini 3.1 Pro Preview",
          "value": "gemini-3.1-pro-preview"
        },
        {
          "description": "This fast model consumes as many credits as the default.",
          "name": "Grok 4.3",
          "value": "grok-4.3"
        },
        {
          "description": "Top-tier model, consumes 3x as many credits as the default.",
          "name": "Gemini 3.5 Flash",
          "value": "gemini-3.5-flash"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "high",
      "description": "Select how much reasoning effort Junie spends for the selected model",
      "id": "effort",
      "name": "Effort",
      "options": [
        {
          "name": "\u25CE Low effort",
          "value": "low"
        },
        {
          "name": "\u25D0 Medium effort",
          "value": "medium"
        },
        {
          "name": "\u25D5 High effort",
          "value": "high"
        }
      ],
      "type": "select"
    },
    {
      "currentValue": false,
      "description": "When enabled, Junie will execute commands without asking for approval",
      "id": "brave_mode",
      "name": "Brave Mode",
      "type": "boolean"
    }
  ],
  "currentModeId": null,
  "id": "junie",
  "modes": [],
  "name": "Junie",
  "protocolVersion": 1,
  "version": "2045.46.0"
};

// dist-src/agents/kilo.ts
var agent24 = {
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
      "description": 'Auto-review pipeline \u2014 reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to "auto review", "autoplan", "run all reviews", "review this plan\nautomatically", or "make the decisions for me".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): "auto plan", "automatic review".\n',
      "name": "autoplan"
    },
    {
      "description": 'Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: "performance", "benchmark", "page speed", "lighthouse", "web vitals",\n"bundle size", "load time". (gstack)\nVoice triggers (speech-to-text aliases): "speed test", "check performance".\n',
      "name": "benchmark"
    },
    {
      "description": 'Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side \u2014 compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers "which model is actually best\nfor this skill?" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: "benchmark models", "compare models",\n"which model is best for X", "cross-model comparison", "model shootout". (gstack)\nVoice triggers (speech-to-text aliases): "compare models", "model shootout", "which model is best".\n',
      "name": "benchmark-models"
    },
    {
      "description": 'Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to "open in browser", "test the\nsite", "take a screenshot", or "dogfood this". (gstack)\n',
      "name": "browse"
    },
    {
      "description": 'Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: "monitor deploy", "canary", "post-deploy check",\n"watch production", "verify deploy". (gstack)\n',
      "name": "canary"
    },
    {
      "description": 'Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to "be careful", "safety mode",\n"prod mode", or "careful mode". (gstack)\n',
      "name": "careful"
    },
    {
      "description": 'Claude Code CLI wrapper for non-Claude hosts - three modes. Review: independent\ndiff review via claude -p. Challenge: adversarial failure-mode review. Consult:\nask Claude about the repo with read-only file tools. Use when asked for "claude\nreview", "claude challenge", "ask claude", "second opinion from claude", or\n"outside voice". (gstack)\n',
      "name": "claude"
    },
    {
      "description": 'OpenAI Codex CLI wrapper \u2014 three modes. Code review: independent diff review via\ncodex review with pass/fail gate. Challenge: adversarial mode that tries to break\nyour code. Consult: ask codex anything with session continuity for follow-ups.\nThe "200 IQ autistic developer" second opinion. Use when asked to "codex review",\n"codex challenge", "ask codex", "second opinion", or "consult codex". (gstack)\nVoice triggers (speech-to-text aliases): "code x", "code ex", "get another opinion".\n',
      "name": "codex"
    },
    {
      "description": 'Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off \u2014 even across Conductor workspace handoffs.\nUse when asked to "resume", "restore context", "where was I", or\n"pick up where I left off". Pair with /context-save.\nFormerly /checkpoint resume \u2014 renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack)\n',
      "name": "context-restore"
    },
    {
      "description": 'Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to "save progress", "save state", "context save", or\n"save my work". Pair with /context-restore to resume later.\nFormerly /checkpoint \u2014 renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack)\n',
      "name": "context-save"
    },
    {
      "description": 'Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: "security audit", "threat model", "pentest review", "OWASP", "CSO review". (gstack)\nVoice triggers (speech-to-text aliases): "see-so", "see so", "security review", "security check", "vulnerability scan", "run security".\n',
      "name": "cso"
    },
    {
      "description": "Multi Agents Looping \u2014 a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "name": "deep-investigate"
    },
    {
      "description": `Design consultation: understands your product, researches the landscape, proposes a
complete design system (aesthetic, typography, color, layout, spacing, motion), and
generates font+color preview pages. Creates DESIGN.md as your project's design source
of truth. For existing sites, use /plan-design-review to infer the system instead.
Use when asked to "design system", "brand guidelines", or "create DESIGN.md".
Proactively suggest when starting a new project's UI with no existing
design system or DESIGN.md. (gstack)
`,
      "name": "design-consultation"
    },
    {
      "description": 'Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: "finalize this design", "turn this into HTML",\n"build me a page", "implement this design", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): "build the design", "code the mockup", "make it real".\n',
      "name": "design-html"
    },
    {
      "description": `Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,
AI slop patterns, and slow interactions \u2014 then fixes them. Iteratively fixes issues
in source code, committing each fix atomically and re-verifying with before/after
screenshots. For plan-mode design review (before implementation), use /plan-design-review.
Use when asked to "audit the design", "visual QA", "check if it looks good", or "design polish".
Proactively suggest when the user mentions visual inconsistencies or
wants to polish the look of a live site. (gstack)
`,
      "name": "design-review"
    },
    {
      "description": `Design shotgun: generate multiple AI design variants, open a comparison board,
collect structured feedback, and iterate. Standalone design exploration you can
run anytime. Use when: "explore designs", "show me options", "design variants",
"visual brainstorm", or "I don't like how this looks".
Proactively suggest when the user describes a UI feature but hasn't seen
what it could look like. (gstack)
`,
      "name": "design-shotgun"
    },
    {
      "description": 'Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n"test the DX", "DX audit", "developer experience test", or "try the\nonboarding". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): "dx audit", "test the developer experience", "try the onboarding", "developer experience test".\n',
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
      "description": 'Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to "update the docs", "sync documentation", or "post-ship docs".\nProactively suggest after a PR is merged or code is shipped. (gstack)\n',
      "name": "document-release"
    },
    {
      "description": `Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document \u2014 including when they say "write a report", "draft a proposal", "make a contract", "fill in this form", "reformat to match this template", or any task whose final output is a .docx file. Even if the user doesn't mention "docx" explicitly, if the task implies a printable/formal document, use this skill.
`,
      "name": "docx"
    },
    {
      "description": 'Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.',
      "name": "find-skills"
    },
    {
      "description": 'Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n"fixing" unrelated code, or when you want to scope changes to one module.\nUse when asked to "freeze", "restrict edits", "only edit this folder",\nor "lock down edits". (gstack)\n',
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
      "description": `Upgrade gstack to the latest version. Detects global vs vendored install,
runs the upgrade, and shows what's new. Use when asked to "upgrade gstack",
"update gstack", or "get latest version".
Voice triggers (speech-to-text aliases): "upgrade the tools", "update the tools", "gee stack upgrade", "g stack upgrade".
`,
      "name": "gstack-upgrade"
    },
    {
      "description": 'Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to "guard mode",\n"full safety", "lock it down", or "maximum safety". (gstack)\n',
      "name": "guard"
    },
    {
      "description": "Scrape the Hacker News front page (titles, points, comment counts).",
      "name": "hackernews-frontpage"
    },
    {
      "description": 'Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: "health check",\n"code quality", "how healthy is the codebase", "run all checks",\n"quality score". (gstack)\n',
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
      "description": 'Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to "debug this", "fix this bug", "why is this broken",\n"investigate this error", or "root cause analysis".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, "it was working\nyesterday", or is troubleshooting why something stopped working. (gstack)\n',
      "name": "investigate"
    },
    {
      "description": "Guide for Kilo configuration: config paths, kilo.json fields, commands, agents, skills, permissions, MCPs, providers, TUI settings, plus Agent Manager worktree setup/run scripts, workflows, and state. Use for Kilo config questions, locating loaded config, changing settings, or Agent Manager questions about run/setup scripts, worktree setup/workflows, apply/merge/PR/conflicts, missing sessions/worktrees, and agent-manager.json recovery.",
      "name": "kilo-config"
    },
    {
      "description": 'Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: "merge", "land", "deploy", "merge and verify",\n"land it", "ship it to production". (gstack)\n',
      "name": "land-and-deploy"
    },
    {
      "description": `Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots
are currently claimed by open PRs, which sibling Conductor workspaces have
WIP work likely to ship soon, and what slot /ship would pick next. No
mutations \u2014 just a snapshot. Use when asked to "landing report", "what's in
the queue", "show me open PRs", or "which version do I claim next". (gstack)
`,
      "name": "landing-report"
    },
    {
      "description": `Manage project learnings. Review, search, prune, and export what gstack
has learned across sessions. Use when asked to "what have we learned",
"show learnings", "prune stale learnings", or "export learnings".
Proactively suggest when the user asks about past patterns or wonders
"didn't we fix this before?"
`,
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
      "description": 'Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact \u2014 a finished artifact. Use when asked to "make a PDF", "export to\nPDF", "turn this markdown into a PDF", or "generate a document". (gstack)\nVoice triggers (speech-to-text aliases): "make this a pdf", "make it a pdf", "export to pdf", "turn this into a pdf", "turn this markdown into a pdf", "generate a pdf", "make a pdf from", "pdf this markdown".\n',
      "name": "make-pdf"
    },
    {
      "description": `YC Office Hours \u2014 two modes. Startup mode: six forcing questions that expose
demand reality, status quo, desperate specificity, narrowest wedge, observation,
and future-fit. Builder mode: design thinking brainstorming for side projects,
hackathons, learning, and open source. Saves a design doc.
Use when asked to "brainstorm this", "I have an idea", "help me think through
this", "office hours", or "is this worth building".
Proactively invoke this skill (do NOT answer directly) when the user describes
a new product idea, asks whether something is worth building, wants to think
through design decisions for something that doesn't exist yet, or is exploring
a concept before any code is written.
Use before /plan-ceo-review or /plan-eng-review. (gstack)
`,
      "name": "office-hours"
    },
    {
      "description": 'Launch GStack Browser \u2014 AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to "open gstack browser", "launch browser", "connect chrome",\n"open chrome", "real browser", "launch chrome", "side panel", or "control my browser".\nVoice triggers (speech-to-text aliases): "show me the browser".\n',
      "name": "open-gstack-browser"
    },
    {
      "description": 'Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to "pair agent", "connect agent", "share browser", "remote browser",\n"let another agent use my browser", or "give browser access". (gstack)\nVoice triggers (speech-to-text aliases): "pair agent", "connect agent", "share my browser", "remote browser access".\n',
      "name": "pair-agent"
    },
    {
      "description": 'Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): "make a PDF", "generate a report", "write a proposal", "create a resume", "beautiful PDF", "professional document", "cover page", "polished PDF", "client-ready document". FILL (complete form fields): "fill in the form", "fill out this PDF", "complete the form fields", "write values into PDF", "what fields does this PDF have". REFORMAT (apply design to an existing doc): "reformat this document", "apply our style", "convert this Markdown/text to PDF", "make this doc look good", "re-style this PDF". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n',
      "name": "pdf"
    },
    {
      "description": 'CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to "think bigger", "expand scope", "strategy review", "rethink this",\nor "is this ambitious enough".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack)\n',
      "name": "plan-ceo-review"
    },
    {
      "description": `Designer's eye plan review \u2014 interactive, like CEO and Eng review.
Rates each design dimension 0-10, explains what would make it a 10,
then fixes the plan to get there. Works in plan mode. For live site
visual audits, use /design-review. Use when asked to "review the design plan"
or "design critique".
Proactively suggest when the user has a plan with UI/UX components that
should be reviewed before implementation. (gstack)
`,
      "name": "plan-design-review"
    },
    {
      "description": 'Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to "DX review", "developer experience audit", "devex review",\nor "API design review".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): "dx review", "developer experience review", "devex review", "devex audit", "API design review", "onboarding review".\n',
      "name": "plan-devex-review"
    },
    {
      "description": 'Eng manager-mode plan review. Lock in the execution plan \u2014 architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n"review the architecture", "engineering review", or "lock in the plan".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding \u2014 to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): "tech review", "technical review", "plan engineering review".\n',
      "name": "plan-eng-review"
    },
    {
      "description": 'Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface \u2014 no CLI syntax required.\n\nUse when asked to "tune questions", "stop asking me that", "too many questions",\n"show my profile", "what questions have I been asked", "show my vibe",\n"developer profile", or "turn off question tuning". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time.\n',
      "name": "plan-tune"
    },
    {
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "name": "pptx-generator"
    },
    {
      "description": `Systematically QA test a web application and fix bugs found. Runs QA testing,
then iteratively fixes bugs in source code, committing each fix atomically and
re-verifying. Use when asked to "qa", "QA", "test this site", "find bugs",
"test and fix", or "fix what's broken".
Proactively suggest when the user says a feature is ready for testing
or asks "does this work?". Three tiers: Quick (critical/high only),
Standard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,
fix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)
Voice triggers (speech-to-text aliases): "quality check", "test the app", "run QA".
`,
      "name": "qa"
    },
    {
      "description": `Report-only QA testing. Systematically tests a web application and produces a
structured report with health score, screenshots, and repro steps \u2014 but never
fixes anything. Use when asked to "just report bugs", "qa report only", or
"test but don't fix". For the full test-fix-verify loop, use /qa instead.
Proactively suggest when the user wants a bug report without any code changes. (gstack)
Voice triggers (speech-to-text aliases): "bug report", "just check for bugs".
`,
      "name": "qa-only"
    },
    {
      "description": 'Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to "weekly retro", "what did we ship", or "engineering retrospective".\nProactively suggest at the end of a work week or sprint. (gstack)\n',
      "name": "retro"
    },
    {
      "description": "review changes [commit|branch|pr], defaults to uncommitted",
      "name": "review"
    },
    {
      "description": 'Pre-landing PR review. Analyzes diff against the base branch for SQL safety, LLM trust\nboundary violations, conditional side effects, and other structural issues. Use when\nasked to "review this PR", "code review", "pre-landing review", or "check my diff".\nProactively suggest when the user is about to merge or land code changes. (gstack)\n',
      "name": "review"
    },
    {
      "description": `Pull data from a web page. First call on a new intent prototypes the flow
via $B primitives and returns JSON. Subsequent calls on a matching intent
route to a codified browser-skill and return in ~200ms. Read-only \u2014 for
mutating flows (form fills, clicks, submissions), use /automate.
Use when asked to "scrape", "get data from", "pull", "extract from", or
"what's on" a page. (gstack)
`,
      "name": "scrape"
    },
    {
      "description": 'Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to "import cookies",\n"login to the site", or "authenticate the browser". (gstack)\n',
      "name": "setup-browser-cookies"
    },
    {
      "description": 'Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: "setup deploy", "configure deployment", "set up land-and-deploy",\n"how do I deploy with gstack", "add deploy config".\n',
      "name": "setup-deploy"
    },
    {
      "description": 'Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to "gbrain is running, and this agent\ncan call it." Use when: "setup gbrain", "connect gbrain", "start\ngbrain", "install gbrain", "configure gbrain for this machine". (gstack)\n',
      "name": "setup-gbrain"
    },
    {
      "description": 'Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to "ship", "deploy",\n"push to main", "create a PR", "merge and push", or "get it deployed".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)\n',
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
      "description": 'Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to "skillify", "codify", "save this scrape", or\n"make this permanent". (gstack)\n',
      "name": "skillify"
    },
    {
      "description": 'Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to "unfreeze", "unlock edits", "remove freeze", or\n"allow all edits". (gstack)\n',
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

// dist-src/agents/kimi.ts
var agent25 = {
  "agentCapabilities": {
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
      "list": {},
      "resume": {}
    }
  },
  "agentInfo": {
    "name": "Kimi Code CLI",
    "version": "1.48.0"
  },
  "authMethods": [
    {
      "_meta": {
        "terminal-auth": {
          "args": [
            "login"
          ],
          "command": "./kimi",
          "env": {},
          "label": "Kimi Code Login",
          "type": "terminal"
        }
      },
      "description": "Run `kimi login` command in the terminal, then follow the instructions to finish login.",
      "id": "login",
      "name": "Login with Kimi account"
    }
  ],
  "commands": [
    {
      "description": "Analyze the codebase and generate an `AGENTS.md` file",
      "name": "init"
    },
    {
      "description": "Compact the context (optionally with a custom focus, e.g. /compact keep db discussions)",
      "name": "compact"
    },
    {
      "description": "Clear the context",
      "name": "clear"
    },
    {
      "description": "Toggle YOLO mode (auto-approve all actions)",
      "name": "yolo"
    },
    {
      "description": "Toggle afk mode (auto-dismiss AskUserQuestion, auto-approve tool calls)",
      "name": "afk"
    },
    {
      "description": "Toggle plan mode. Usage: /plan [on|off|view|clear]",
      "name": "plan"
    },
    {
      "description": "Add a directory to the workspace. Usage: /add-dir <path>. Run without args to list added dirs",
      "name": "add-dir"
    },
    {
      "description": "Export current session context to a markdown file",
      "name": "export"
    },
    {
      "description": "Import context from a file or session ID",
      "name": "import"
    }
  ],
  "configOptions": [],
  "currentModeId": "default",
  "id": "kimi",
  "modes": [
    {
      "description": "The default mode.",
      "id": "default",
      "name": "Default"
    }
  ],
  "name": "Kimi CLI",
  "protocolVersion": 1,
  "version": "1.48.0"
};

// dist-src/agents/mistral-vibe.ts
var agent26 = {
  "agentCapabilities": {
    "loadSession": true,
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "close": {},
      "fork": {},
      "list": {}
    }
  },
  "agentInfo": {
    "name": "@mistralai/mistral-vibe",
    "title": "Mistral Vibe",
    "version": "2.18.0"
  },
  "authMethods": [
    {
      "description": "Sign into Mistral Vibe through your Mistral AI Studio account.",
      "id": "browser-auth",
      "name": "Sign in through Mistral AI Studio"
    }
  ],
  "commands": [
    {
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "artifact-static-site"
    },
    {
      "description": "Compact conversation history by summarizing. Optionally pass instructions to guide the summary",
      "input": {
        "hint": "Optional instructions to guide the compaction summary"
      },
      "name": "compact"
    },
    {
      "description": "Show data retention information",
      "name": "data-retention"
    },
    {
      "description": "Multi Agents Looping \u2014 a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "deep-investigate"
    },
    {
      "description": "Use when asked to analyze code and add explanatory code annotations, file headers, doc comments, inline comments, or JSX-safe comments.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "docs-code"
    },
    {
      "description": "Docs-driven delivery workflow. Use when splitting design docs into tasks, creating implementation plans under docs/plan, executing develop/verify/merge cycles, maintaining design doc consistency, or writing UI layout documentation with ASCII diagrams.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "docs-sprint"
    },
    {
      "description": `Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document \u2014 including when they say "write a report", "draft a proposal", "make a contract", "fill in this form", "reformat to match this template", or any task whose final output is a .docx file. Even if the user doesn't mention "docx" explicitly, if the task implies a printable/formal document, use this skill.
`,
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "docx"
    },
    {
      "description": 'Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.',
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "find-skills"
    },
    {
      "description": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "gpt-taste"
    },
    {
      "description": "Show available commands and keyboard shortcuts",
      "name": "help"
    },
    {
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "high-end-visual-design"
    },
    {
      "description": "Install the Lean 4 agent (leanstral)",
      "name": "leanstall"
    },
    {
      "description": "Show path to current session log directory",
      "name": "log"
    },
    {
      "description": "Show MCP OAuth status, login guidance, or log out an OAuth MCP server",
      "input": {
        "hint": "status | login <alias> | logout <alias>"
      },
      "name": "mcp"
    },
    {
      "description": 'Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): "make a PDF", "generate a report", "write a proposal", "create a resume", "beautiful PDF", "professional document", "cover page", "polished PDF", "client-ready document". FILL (complete form fields): "fill in the form", "fill out this PDF", "complete the form fields", "write values into PDF", "what fields does this PDF have". REFORMAT (apply design to an existing doc): "reformat this document", "apply our style", "convert this Markdown/text to PDF", "make this doc look good", "re-style this PDF". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n',
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "pdf"
    },
    {
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "pptx-generator"
    },
    {
      "description": "Configure proxy and SSL certificate settings",
      "input": {
        "hint": "KEY value to set, KEY to unset, or empty for help"
      },
      "name": "proxy-setup"
    },
    {
      "description": "Reload configuration, agent instructions, and skills from disk",
      "name": "reload"
    },
    {
      "description": "Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Codex's capabilities with specialized knowledge, workflows, or tool integrations.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "skill-creator"
    },
    {
      "description": "Install Agents skills into $AGENTS_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos).",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "skill-installer"
    },
    {
      "description": "Teleport session to Vibe Code Web",
      "name": "teleport"
    },
    {
      "description": "Uninstall the Lean 4 agent",
      "name": "unleanstall"
    },
    {
      "description": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format.",
      "input": {
        "hint": "instructions for the skill"
      },
      "name": "xlsx"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "default",
      "id": "mode",
      "name": "Session Mode",
      "options": [
        {
          "description": "Requires approval for tool executions",
          "name": "Default",
          "value": "default"
        },
        {
          "description": "Read-only agent for exploration and planning",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Auto-approves file edits only",
          "name": "Accept Edits",
          "value": "accept-edits"
        },
        {
          "description": "Auto-approves all tool executions",
          "name": "Auto Approve",
          "value": "auto-approve"
        },
        {
          "description": "Read-only conversational mode for questions and discussions",
          "name": "Chat",
          "value": "chat"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "mistral-medium-3.5",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "description": "mistral-vibe-cli-latest",
          "name": "mistral-medium-3.5",
          "value": "mistral-medium-3.5"
        },
        {
          "description": "devstral-small-latest",
          "name": "devstral-small",
          "value": "devstral-small"
        },
        {
          "description": "devstral",
          "name": "local",
          "value": "local"
        }
      ],
      "type": "select"
    },
    {
      "category": "thinking",
      "currentValue": "high",
      "id": "thinking",
      "name": "Thinking",
      "options": [
        {
          "name": "Off",
          "value": "off"
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
    }
  ],
  "currentModeId": "default",
  "id": "mistral-vibe",
  "modes": [
    {
      "description": "Requires approval for tool executions",
      "id": "default",
      "name": "Default"
    },
    {
      "description": "Read-only agent for exploration and planning",
      "id": "plan",
      "name": "Plan"
    },
    {
      "description": "Auto-approves file edits only",
      "id": "accept-edits",
      "name": "Accept Edits"
    },
    {
      "description": "Auto-approves all tool executions",
      "id": "auto-approve",
      "name": "Auto Approve"
    },
    {
      "description": "Read-only conversational mode for questions and discussions",
      "id": "chat",
      "name": "Chat"
    }
  ],
  "name": "Mistral Vibe",
  "protocolVersion": 1,
  "version": "2.18.0"
};

// dist-src/agents/nova.ts
var agent27 = {
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
    "name": "kore-cli",
    "version": "1.0.0"
  },
  "authMethods": [],
  "commands": [
    {
      "description": "Set a completion condition; Nova works until it is met",
      "name": "goal"
    },
    {
      "description": 'Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", or express interest in extending capabilities. (built-in)',
      "name": "find-skills"
    },
    {
      "description": "Creates, edits, and inspects polished PowerPoint decks by generating flexible pptxgenjs code instead of using a rigid slide-schema abstraction. (built-in)",
      "name": "powerpoint"
    },
    {
      "description": 'Guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. (built-in)',
      "name": "frontend-design"
    }
  ],
  "configOptions": [],
  "currentModeId": "default",
  "id": "nova",
  "modes": [
    {
      "description": "Standard assistant mode with balanced behavior",
      "id": "default",
      "name": "Default"
    },
    {
      "description": "Code-focused mode with streamlined file operations",
      "id": "code",
      "name": "Code"
    },
    {
      "description": "Planning mode - creates detailed plans before implementing",
      "id": "plan",
      "name": "Plan"
    }
  ],
  "name": "Nova",
  "protocolVersion": 1,
  "version": "1.1.21"
};

// dist-src/agents/opencode.ts
var agent28 = {
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
    "name": "OpenCode",
    "version": "1.17.11"
  },
  "authMethods": [
    {
      "description": "Run `opencode auth login` in the terminal",
      "id": "opencode-login",
      "name": "Login with opencode"
    }
  ],
  "commands": [
    {
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "name": "artifact-static-site"
    },
    {
      "description": 'Auto-review pipeline \u2014 reads the full CEO, design, eng, and DX review skills from disk\nand runs them sequentially with auto-decisions using 6 decision principles. Surfaces\ntaste decisions (close approaches, borderline scope, codex disagreements) at a final\napproval gate. One command, fully reviewed plan out.\nUse when asked to "auto review", "autoplan", "run all reviews", "review this plan\nautomatically", or "make the decisions for me".\nProactively suggest when the user has a plan file and wants to run the full review\ngauntlet without answering 15-30 intermediate questions. (gstack)\nVoice triggers (speech-to-text aliases): "auto plan", "automatic review".\n',
      "name": "autoplan"
    },
    {
      "description": 'Performance regression detection using the browse daemon. Establishes\nbaselines for page load times, Core Web Vitals, and resource sizes.\nCompares before/after on every PR. Tracks performance trends over time.\nUse when: "performance", "benchmark", "page speed", "lighthouse", "web vitals",\n"bundle size", "load time". (gstack)\nVoice triggers (speech-to-text aliases): "speed test", "check performance".\n',
      "name": "benchmark"
    },
    {
      "description": 'Cross-model benchmark for gstack skills. Runs the same prompt through Claude,\nGPT (via Codex CLI), and Gemini side-by-side \u2014 compares latency, tokens, cost,\nand optionally quality via LLM judge. Answers "which model is actually best\nfor this skill?" with data instead of vibes. Separate from /benchmark, which\nmeasures web page performance. Use when: "benchmark models", "compare models",\n"which model is best for X", "cross-model comparison", "model shootout". (gstack)\nVoice triggers (speech-to-text aliases): "compare models", "model shootout", "which model is best".\n',
      "name": "benchmark-models"
    },
    {
      "description": "You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation.",
      "name": "brainstorming"
    },
    {
      "description": 'Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with\nelements, verify page state, diff before/after actions, take annotated screenshots, check\nresponsive layouts, test forms and uploads, handle dialogs, and assert element states.\n~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a\nuser flow, or file a bug with evidence. Use when asked to "open in browser", "test the\nsite", "take a screenshot", or "dogfood this". (gstack)\n',
      "name": "browse"
    },
    {
      "description": 'Post-deploy canary monitoring. Watches the live app for console errors,\nperformance regressions, and page failures using the browse daemon. Takes\nperiodic screenshots, compares against pre-deploy baselines, and alerts\non anomalies. Use when: "monitor deploy", "canary", "post-deploy check",\n"watch production", "verify deploy". (gstack)\n',
      "name": "canary"
    },
    {
      "description": 'Safety guardrails for destructive commands. Warns before rm -rf, DROP TABLE,\nforce-push, git reset --hard, kubectl delete, and similar destructive operations.\nUser can override each warning. Use when touching prod, debugging live systems,\nor working in a shared environment. Use when asked to "be careful", "safety mode",\n"prod mode", or "careful mode". (gstack)\n',
      "name": "careful"
    },
    {
      "description": 'Claude Code CLI wrapper for non-Claude hosts - three modes. Review: independent\ndiff review via claude -p. Challenge: adversarial failure-mode review. Consult:\nask Claude about the repo with read-only file tools. Use when asked for "claude\nreview", "claude challenge", "ask claude", "second opinion from claude", or\n"outside voice". (gstack)\n',
      "name": "claude"
    },
    {
      "description": 'OpenAI Codex CLI wrapper \u2014 three modes. Code review: independent diff review via\ncodex review with pass/fail gate. Challenge: adversarial mode that tries to break\nyour code. Consult: ask codex anything with session continuity for follow-ups.\nThe "200 IQ autistic developer" second opinion. Use when asked to "codex review",\n"codex challenge", "ask codex", "second opinion", or "consult codex". (gstack)\nVoice triggers (speech-to-text aliases): "code x", "code ex", "get another opinion".\n',
      "name": "codex"
    },
    {
      "description": 'Restore working context saved earlier by /context-save. Loads the most recent\nsaved state (across all branches by default) so you can pick up where you\nleft off \u2014 even across Conductor workspace handoffs.\nUse when asked to "resume", "restore context", "where was I", or\n"pick up where I left off". Pair with /context-save.\nFormerly /checkpoint resume \u2014 renamed because Claude Code treats /checkpoint\nas a native rewind alias in current environments. (gstack)\n',
      "name": "context-restore"
    },
    {
      "description": 'Save working context. Captures git state, decisions made, and remaining work\nso any future session can pick up without losing a beat.\nUse when asked to "save progress", "save state", "context save", or\n"save my work". Pair with /context-restore to resume later.\nFormerly /checkpoint \u2014 renamed because Claude Code treats /checkpoint as a\nnative rewind alias in current environments, which was shadowing this skill.\n(gstack)\n',
      "name": "context-save"
    },
    {
      "description": 'Chief Security Officer mode. Infrastructure-first security audit: secrets archaeology,\ndependency supply chain, CI/CD pipeline security, LLM/AI security, skill supply chain\nscanning, plus OWASP Top 10, STRIDE threat modeling, and active verification.\nTwo modes: daily (zero-noise, 8/10 confidence gate) and comprehensive (monthly deep\nscan, 2/10 bar). Trend tracking across audit runs.\nUse when: "security audit", "threat model", "pentest review", "OWASP", "CSO review". (gstack)\nVoice triggers (speech-to-text aliases): "see-so", "see so", "security review", "security check", "vulnerability scan", "run security".\n',
      "name": "cso"
    },
    {
      "description": "Use ONLY when the user is editing or creating opencode's own configuration: opencode.json, opencode.jsonc, files under .opencode/, or files under ~/.config/opencode/. Also use when creating or fixing opencode agents, subagents, skills, plugins, MCP servers, or permission rules. Do not use for the user's own application code, or for any project that is not configuring opencode itself.",
      "name": "customize-opencode"
    },
    {
      "description": "Multi Agents Looping \u2014 a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "name": "deep-investigate"
    },
    {
      "description": `Design consultation: understands your product, researches the landscape, proposes a
complete design system (aesthetic, typography, color, layout, spacing, motion), and
generates font+color preview pages. Creates DESIGN.md as your project's design source
of truth. For existing sites, use /plan-design-review to infer the system instead.
Use when asked to "design system", "brand guidelines", or "create DESIGN.md".
Proactively suggest when starting a new project's UI with no existing
design system or DESIGN.md. (gstack)
`,
      "name": "design-consultation"
    },
    {
      "description": 'Design finalization: generates production-quality Pretext-native HTML/CSS.\nWorks with approved mockups from /design-shotgun, CEO plans from /plan-ceo-review,\ndesign review context from /plan-design-review, or from scratch with a user\ndescription. Text actually reflows, heights are computed, layouts are dynamic.\n30KB overhead, zero deps. Smart API routing: picks the right Pretext patterns\nfor each design type. Use when: "finalize this design", "turn this into HTML",\n"build me a page", "implement this design", or after any planning skill.\nProactively suggest when user has approved a design or has a plan ready. (gstack)\nVoice triggers (speech-to-text aliases): "build the design", "code the mockup", "make it real".\n',
      "name": "design-html"
    },
    {
      "description": `Designer's eye QA: finds visual inconsistency, spacing issues, hierarchy problems,
AI slop patterns, and slow interactions \u2014 then fixes them. Iteratively fixes issues
in source code, committing each fix atomically and re-verifying with before/after
screenshots. For plan-mode design review (before implementation), use /plan-design-review.
Use when asked to "audit the design", "visual QA", "check if it looks good", or "design polish".
Proactively suggest when the user mentions visual inconsistencies or
wants to polish the look of a live site. (gstack)
`,
      "name": "design-review"
    },
    {
      "description": `Design shotgun: generate multiple AI design variants, open a comparison board,
collect structured feedback, and iterate. Standalone design exploration you can
run anytime. Use when: "explore designs", "show me options", "design variants",
"visual brainstorm", or "I don't like how this looks".
Proactively suggest when the user describes a UI feature but hasn't seen
what it could look like. (gstack)
`,
      "name": "design-shotgun"
    },
    {
      "description": 'Live developer experience audit. Uses the browse tool to actually TEST the\ndeveloper experience: navigates docs, tries the getting started flow, times\nTTHW, screenshots error messages, evaluates CLI help text. Produces a DX\nscorecard with evidence. Compares against /plan-devex-review scores if they\nexist (the boomerang: plan said 3 minutes, reality says 8). Use when asked to\n"test the DX", "DX audit", "developer experience test", or "try the\nonboarding". Proactively suggest after shipping a developer-facing feature. (gstack)\nVoice triggers (speech-to-text aliases): "dx audit", "test the developer experience", "try the onboarding", "developer experience test".\n',
      "name": "devex-review"
    },
    {
      "description": "Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies",
      "name": "dispatching-parallel-agents"
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
      "description": 'Post-ship documentation update. Reads all project docs, cross-references the\ndiff, updates README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md to match what shipped,\npolishes CHANGELOG voice, cleans up TODOS, and optionally bumps VERSION. Use when\nasked to "update the docs", "sync documentation", or "post-ship docs".\nProactively suggest after a PR is merged or code is shipped. (gstack)\n',
      "name": "document-release"
    },
    {
      "description": `Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document \u2014 including when they say "write a report", "draft a proposal", "make a contract", "fill in this form", "reformat to match this template", or any task whose final output is a .docx file. Even if the user doesn't mention "docx" explicitly, if the task implies a printable/formal document, use this skill.
`,
      "name": "docx"
    },
    {
      "description": "Use when you have a written implementation plan to execute in a separate session with review checkpoints",
      "name": "executing-plans"
    },
    {
      "description": 'Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.',
      "name": "find-skills"
    },
    {
      "description": "Use when implementation is complete, all tests pass, and you need to decide how to integrate the work - guides completion of development work by presenting structured options for merge, PR, or cleanup",
      "name": "finishing-a-development-branch"
    },
    {
      "description": 'Restrict file edits to a specific directory for the session. Blocks Edit and\nWrite outside the allowed path. Use when debugging to prevent accidentally\n"fixing" unrelated code, or when you want to scope changes to one module.\nUse when asked to "freeze", "restrict edits", "only edit this folder",\nor "lock down edits". (gstack)\n',
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
      "description": `Upgrade gstack to the latest version. Detects global vs vendored install,
runs the upgrade, and shows what's new. Use when asked to "upgrade gstack",
"update gstack", or "get latest version".
Voice triggers (speech-to-text aliases): "upgrade the tools", "update the tools", "gee stack upgrade", "g stack upgrade".
`,
      "name": "gstack-upgrade"
    },
    {
      "description": 'Full safety mode: destructive command warnings + directory-scoped edits.\nCombines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with\n/freeze (blocks edits outside a specified directory). Use for maximum safety\nwhen touching prod or debugging live systems. Use when asked to "guard mode",\n"full safety", "lock it down", or "maximum safety". (gstack)\n',
      "name": "guard"
    },
    {
      "description": "Scrape the Hacker News front page (titles, points, comment counts).",
      "name": "hackernews-frontpage"
    },
    {
      "description": 'Code quality dashboard. Wraps existing project tools (type checker, linter,\ntest runner, dead code detector, shell linter), computes a weighted composite\n0-10 score, and tracks trends over time. Use when: "health check",\n"code quality", "how healthy is the codebase", "run all checks",\n"quality score". (gstack)\n',
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
      "description": 'Systematic debugging with root cause investigation. Four phases: investigate,\nanalyze, hypothesize, implement. Iron Law: no fixes without root cause.\nUse when asked to "debug this", "fix this bug", "why is this broken",\n"investigate this error", or "root cause analysis".\nProactively invoke this skill (do NOT debug directly) when the user reports\nerrors, 500 errors, stack traces, unexpected behavior, "it was working\nyesterday", or is troubleshooting why something stopped working. (gstack)\n',
      "name": "investigate"
    },
    {
      "description": 'Land and deploy workflow. Merges the PR, waits for CI and deploy,\nverifies production health via canary checks. Takes over after /ship\ncreates the PR. Use when: "merge", "land", "deploy", "merge and verify",\n"land it", "ship it to production". (gstack)\n',
      "name": "land-and-deploy"
    },
    {
      "description": `Read-only queue dashboard for workspace-aware ship. Shows which VERSION slots
are currently claimed by open PRs, which sibling Conductor workspaces have
WIP work likely to ship soon, and what slot /ship would pick next. No
mutations \u2014 just a snapshot. Use when asked to "landing report", "what's in
the queue", "show me open PRs", or "which version do I claim next". (gstack)
`,
      "name": "landing-report"
    },
    {
      "description": `Manage project learnings. Review, search, prune, and export what gstack
has learned across sessions. Use when asked to "what have we learned",
"show learnings", "prune stale learnings", or "export learnings".
Proactively suggest when the user asks about past patterns or wonders
"didn't we fix this before?"
`,
      "name": "learn"
    },
    {
      "description": 'Turn any markdown file into a publication-quality PDF. Proper 1in margins,\nintelligent page breaks, page numbers, cover pages, running headers, curly\nquotes and em dashes, clickable TOC, diagonal DRAFT watermark. Not a draft\nartifact \u2014 a finished artifact. Use when asked to "make a PDF", "export to\nPDF", "turn this markdown into a PDF", or "generate a document". (gstack)\nVoice triggers (speech-to-text aliases): "make this a pdf", "make it a pdf", "export to pdf", "turn this into a pdf", "turn this markdown into a pdf", "generate a pdf", "make a pdf from", "pdf this markdown".\n',
      "name": "make-pdf"
    },
    {
      "description": `YC Office Hours \u2014 two modes. Startup mode: six forcing questions that expose
demand reality, status quo, desperate specificity, narrowest wedge, observation,
and future-fit. Builder mode: design thinking brainstorming for side projects,
hackathons, learning, and open source. Saves a design doc.
Use when asked to "brainstorm this", "I have an idea", "help me think through
this", "office hours", or "is this worth building".
Proactively invoke this skill (do NOT answer directly) when the user describes
a new product idea, asks whether something is worth building, wants to think
through design decisions for something that doesn't exist yet, or is exploring
a concept before any code is written.
Use before /plan-ceo-review or /plan-eng-review. (gstack)
`,
      "name": "office-hours"
    },
    {
      "description": 'Launch GStack Browser \u2014 AI-controlled Chromium with the sidebar extension baked in.\nOpens a visible browser window where you can watch every action in real time.\nThe sidebar shows a live activity feed and chat. Anti-bot stealth built in.\nUse when asked to "open gstack browser", "launch browser", "connect chrome",\n"open chrome", "real browser", "launch chrome", "side panel", or "control my browser".\nVoice triggers (speech-to-text aliases): "show me the browser".\n',
      "name": "open-gstack-browser"
    },
    {
      "description": 'Pair a remote AI agent with your browser. One command generates a setup key and\nprints instructions the other agent can follow to connect. Works with OpenClaw,\nHermes, Codex, Cursor, or any agent that can make HTTP requests. The remote agent\ngets its own tab with scoped access (read+write by default, admin on request).\nUse when asked to "pair agent", "connect agent", "share browser", "remote browser",\n"let another agent use my browser", or "give browser access". (gstack)\nVoice triggers (speech-to-text aliases): "pair agent", "connect agent", "share my browser", "remote browser access".\n',
      "name": "pair-agent"
    },
    {
      "description": 'Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): "make a PDF", "generate a report", "write a proposal", "create a resume", "beautiful PDF", "professional document", "cover page", "polished PDF", "client-ready document". FILL (complete form fields): "fill in the form", "fill out this PDF", "complete the form fields", "write values into PDF", "what fields does this PDF have". REFORMAT (apply design to an existing doc): "reformat this document", "apply our style", "convert this Markdown/text to PDF", "make this doc look good", "re-style this PDF". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n',
      "name": "pdf"
    },
    {
      "description": 'CEO/founder-mode plan review. Rethink the problem, find the 10-star product,\nchallenge premises, expand scope when it creates a better product. Four modes:\nSCOPE EXPANSION (dream big), SELECTIVE EXPANSION (hold scope + cherry-pick\nexpansions), HOLD SCOPE (maximum rigor), SCOPE REDUCTION (strip to essentials).\nUse when asked to "think bigger", "expand scope", "strategy review", "rethink this",\nor "is this ambitious enough".\nProactively suggest when the user is questioning scope or ambition of a plan,\nor when the plan feels like it could be thinking bigger. (gstack)\n',
      "name": "plan-ceo-review"
    },
    {
      "description": `Designer's eye plan review \u2014 interactive, like CEO and Eng review.
Rates each design dimension 0-10, explains what would make it a 10,
then fixes the plan to get there. Works in plan mode. For live site
visual audits, use /design-review. Use when asked to "review the design plan"
or "design critique".
Proactively suggest when the user has a plan with UI/UX components that
should be reviewed before implementation. (gstack)
`,
      "name": "plan-design-review"
    },
    {
      "description": 'Interactive developer experience plan review. Explores developer personas,\nbenchmarks against competitors, designs magical moments, and traces friction\npoints before scoring. Three modes: DX EXPANSION (competitive advantage),\nDX POLISH (bulletproof every touchpoint), DX TRIAGE (critical gaps only).\nUse when asked to "DX review", "developer experience audit", "devex review",\nor "API design review".\nProactively suggest when the user has a plan for developer-facing products\n(APIs, CLIs, SDKs, libraries, platforms, docs). (gstack)\nVoice triggers (speech-to-text aliases): "dx review", "developer experience review", "devex review", "devex audit", "API design review", "onboarding review".\n',
      "name": "plan-devex-review"
    },
    {
      "description": 'Eng manager-mode plan review. Lock in the execution plan \u2014 architecture,\ndata flow, diagrams, edge cases, test coverage, performance. Walks through\nissues interactively with opinionated recommendations. Use when asked to\n"review the architecture", "engineering review", or "lock in the plan".\nProactively suggest when the user has a plan or design doc and is about to\nstart coding \u2014 to catch architecture issues before implementation. (gstack)\nVoice triggers (speech-to-text aliases): "tech review", "technical review", "plan engineering review".\n',
      "name": "plan-eng-review"
    },
    {
      "description": 'Self-tuning question sensitivity + developer psychographic for gstack (v1: observational).\nReview which AskUserQuestion prompts fire across gstack skills, set per-question preferences\n(never-ask / always-ask / ask-only-for-one-way), inspect the dual-track\nprofile (what you declared vs what your behavior suggests), and enable/disable\nquestion tuning. Conversational interface \u2014 no CLI syntax required.\n\nUse when asked to "tune questions", "stop asking me that", "too many questions",\n"show my profile", "what questions have I been asked", "show my vibe",\n"developer profile", or "turn off question tuning". (gstack)\n\nProactively suggest when the user says the same gstack question has come up before,\nor when they explicitly override a recommendation for the Nth time.\n',
      "name": "plan-tune"
    },
    {
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "name": "pptx-generator"
    },
    {
      "description": `Systematically QA test a web application and fix bugs found. Runs QA testing,
then iteratively fixes bugs in source code, committing each fix atomically and
re-verifying. Use when asked to "qa", "QA", "test this site", "find bugs",
"test and fix", or "fix what's broken".
Proactively suggest when the user says a feature is ready for testing
or asks "does this work?". Three tiers: Quick (critical/high only),
Standard (+ medium), Exhaustive (+ cosmetic). Produces before/after health scores,
fix evidence, and a ship-readiness summary. For report-only mode, use /qa-only. (gstack)
Voice triggers (speech-to-text aliases): "quality check", "test the app", "run QA".
`,
      "name": "qa"
    },
    {
      "description": `Report-only QA testing. Systematically tests a web application and produces a
structured report with health score, screenshots, and repro steps \u2014 but never
fixes anything. Use when asked to "just report bugs", "qa report only", or
"test but don't fix". For the full test-fix-verify loop, use /qa instead.
Proactively suggest when the user wants a bug report without any code changes. (gstack)
Voice triggers (speech-to-text aliases): "bug report", "just check for bugs".
`,
      "name": "qa-only"
    },
    {
      "description": "Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation",
      "name": "receiving-code-review"
    },
    {
      "description": "Use when completing tasks, implementing major features, or before merging to verify work meets requirements",
      "name": "requesting-code-review"
    },
    {
      "description": 'Weekly engineering retrospective. Analyzes commit history, work patterns,\nand code quality metrics with persistent history and trend tracking.\nTeam-aware: breaks down per-person contributions with praise and growth areas.\nUse when asked to "weekly retro", "what did we ship", or "engineering retrospective".\nProactively suggest at the end of a work week or sprint. (gstack)\n',
      "name": "retro"
    },
    {
      "description": "review changes [commit|branch|pr], defaults to uncommitted",
      "name": "review"
    },
    {
      "description": `Pull data from a web page. First call on a new intent prototypes the flow
via $B primitives and returns JSON. Subsequent calls on a matching intent
route to a codified browser-skill and return in ~200ms. Read-only \u2014 for
mutating flows (form fills, clicks, submissions), use /automate.
Use when asked to "scrape", "get data from", "pull", "extract from", or
"what's on" a page. (gstack)
`,
      "name": "scrape"
    },
    {
      "description": 'Import cookies from your real Chromium browser into the headless browse session.\nOpens an interactive picker UI where you select which cookie domains to import.\nUse before QA testing authenticated pages. Use when asked to "import cookies",\n"login to the site", or "authenticate the browser". (gstack)\n',
      "name": "setup-browser-cookies"
    },
    {
      "description": 'Configure deployment settings for /land-and-deploy. Detects your deploy\nplatform (Fly.io, Render, Vercel, Netlify, Heroku, GitHub Actions, custom),\nproduction URL, health check endpoints, and deploy status commands. Writes\nthe configuration to CLAUDE.md so all future deploys are automatic.\nUse when: "setup deploy", "configure deployment", "set up land-and-deploy",\n"how do I deploy with gstack", "add deploy config".\n',
      "name": "setup-deploy"
    },
    {
      "description": 'Set up gbrain for this coding agent: install the CLI, initialize a\nlocal PGLite or Supabase brain, register MCP, capture per-remote trust\npolicy. One command from zero to "gbrain is running, and this agent\ncan call it." Use when: "setup gbrain", "connect gbrain", "start\ngbrain", "install gbrain", "configure gbrain for this machine". (gstack)\n',
      "name": "setup-gbrain"
    },
    {
      "description": 'Ship workflow: detect + merge base branch, run tests, review diff, bump VERSION,\nupdate CHANGELOG, commit, push, create PR. Use when asked to "ship", "deploy",\n"push to main", "create a PR", "merge and push", or "get it deployed".\nProactively invoke this skill (do NOT push/PR directly) when the user says code\nis ready, asks about deploying, wants to push code up, or asks to create a PR. (gstack)\n',
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
      "description": 'Codify the most recent successful /scrape flow into a permanent\nbrowser-skill on disk. Future /scrape calls with the same intent run\nthe codified script in ~200ms instead of re-driving the page. Walks\nback through the conversation, synthesizes script.ts + script.test.ts\n+ fixture, runs the test in a temp dir, and asks before committing.\nUse when asked to "skillify", "codify", "save this scrape", or\n"make this permanent". (gstack)\n',
      "name": "skillify"
    },
    {
      "description": "Use when executing implementation plans with independent tasks in the current session",
      "name": "subagent-driven-development"
    },
    {
      "description": "Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes",
      "name": "systematic-debugging"
    },
    {
      "description": "Use when implementing any feature or bugfix, before writing implementation code",
      "name": "test-driven-development"
    },
    {
      "description": 'Clear the freeze boundary set by /freeze, allowing edits to all directories\nagain. Use when you want to widen edit scope without ending the session.\nUse when asked to "unfreeze", "unlock edits", "remove freeze", or\n"allow all edits". (gstack)\n',
      "name": "unfreeze"
    },
    {
      "description": "Use when starting feature work that needs isolation from current workspace or before executing implementation plans - creates isolated git worktrees with smart directory selection and safety verification",
      "name": "using-git-worktrees"
    },
    {
      "description": "Use when starting any conversation - establishes how to find and use skills, requiring Skill tool invocation before ANY response including clarifying questions",
      "name": "using-superpowers"
    },
    {
      "description": "Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always",
      "name": "verification-before-completion"
    },
    {
      "description": "Use when you have a spec or requirements for a multi-step task, before touching code",
      "name": "writing-plans"
    },
    {
      "description": "Use when creating new skills, editing existing skills, or verifying skills work before deployment",
      "name": "writing-skills"
    },
    {
      "description": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format.",
      "name": "xlsx"
    }
  ],
  "configOptions": [
    {
      "category": "model",
      "currentValue": "opencode/big-pickle",
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
          "name": "OpenAI/GPT 5.1 (OAuth)",
          "value": "openai/gpt-5.1"
        },
        {
          "name": "OpenAI/GPT 5.1 Codex (OAuth)",
          "value": "openai/gpt-5.1-codex"
        },
        {
          "name": "OpenAI/GPT 5.1 Codex Max (OAuth)",
          "value": "openai/gpt-5.1-codex-max"
        },
        {
          "name": "OpenAI/GPT 5.1 Codex Mini (OAuth)",
          "value": "openai/gpt-5.1-codex-mini"
        },
        {
          "name": "OpenAI/GPT 5.2 (OAuth)",
          "value": "openai/gpt-5.2"
        },
        {
          "name": "OpenAI/GPT 5.2 Codex (OAuth)",
          "value": "openai/gpt-5.2-codex"
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
          "name": "OpenAI/GPT-5.1 Chat",
          "value": "openai/gpt-5.1-chat-latest"
        },
        {
          "name": "OpenAI/GPT-5.2 Chat",
          "value": "openai/gpt-5.2-chat-latest"
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
          "name": "OpenCode Zen/Big Pickle",
          "value": "opencode/big-pickle"
        },
        {
          "name": "OpenCode Zen/DeepSeek V4 Flash Free",
          "value": "opencode/deepseek-v4-flash-free"
        },
        {
          "name": "OpenCode Zen/MiMo V2.5 Free",
          "value": "opencode/mimo-v2.5-free"
        },
        {
          "name": "OpenCode Zen/Nemotron 3 Ultra Free",
          "value": "opencode/nemotron-3-ultra-free"
        },
        {
          "name": "OpenCode Zen/North Mini Code Free",
          "value": "opencode/north-mini-code-free"
        }
      ],
      "type": "select"
    },
    {
      "category": "mode",
      "currentValue": "build",
      "id": "mode",
      "name": "Session Mode",
      "options": [
        {
          "description": "The default agent. Executes tools based on configured permissions.",
          "name": "build",
          "value": "build"
        },
        {
          "description": "Plan mode. Disallows all edit tools.",
          "name": "plan",
          "value": "plan"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": null,
  "id": "opencode",
  "modes": [],
  "name": "OpenCode",
  "protocolVersion": 1,
  "version": "1.17.11"
};

// dist-src/agents/pi-acp.ts
var agent29 = {
  "agentCapabilities": {
    "loadSession": true,
    "mcpCapabilities": {
      "http": false,
      "sse": false
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
    "name": "pi-acp",
    "title": "pi ACP adapter",
    "version": "0.0.31"
  },
  "authMethods": [
    {
      "args": [
        "--terminal-login"
      ],
      "description": "Start pi in an interactive terminal to configure API keys or login",
      "env": {},
      "id": "pi_terminal_login",
      "name": "Launch pi in the terminal",
      "type": "terminal"
    }
  ],
  "commands": [
    {
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "name": "skill:artifact-static-site"
    },
    {
      "description": "Multi Agents Looping \u2014 a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "name": "skill:deep-investigate"
    },
    {
      "description": "Use when asked to analyze code and add explanatory code annotations, file headers, doc comments, inline comments, or JSX-safe comments.",
      "name": "skill:docs-code"
    },
    {
      "description": "Docs-driven delivery workflow. Use when splitting design docs into tasks, creating implementation plans under docs/plan, executing develop/verify/merge cycles, maintaining design doc consistency, or writing UI layout documentation with ASCII diagrams.",
      "name": "skill:docs-sprint"
    },
    {
      "description": `Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document \u2014 including when they say "write a report", "draft a proposal", "make a contract", "fill in this form", "reformat to match this template", or any task whose final output is a .docx file. Even if the user doesn't mention "docx" explicitly, if the task implies a printable/formal document, use this skill.`,
      "name": "skill:docx"
    },
    {
      "description": 'Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.',
      "name": "skill:find-skills"
    },
    {
      "description": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing.",
      "name": "skill:gpt-taste"
    },
    {
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "name": "skill:high-end-visual-design"
    },
    {
      "description": 'Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): "make a PDF", "generate a report", "write a proposal", "create a resume", "beautiful PDF", "professional document", "cover page", "polished PDF", "client-ready document". FILL (complete form fields): "fill in the form", "fill out this PDF", "complete the form fields", "write values into PDF", "what fields does this PDF have". REFORMAT (apply design to an existing doc): "reformat this document", "apply our style", "convert this Markdown/text to PDF", "make this doc look good", "re-style this PDF". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.',
      "name": "skill:pdf"
    },
    {
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "name": "skill:pptx-generator"
    },
    {
      "description": "Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Codex's capabilities with specialized knowledge, workflows, or tool integrations.",
      "name": "skill:skill-creator"
    },
    {
      "description": "Install Agents skills into $AGENTS_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos).",
      "name": "skill:skill-installer"
    },
    {
      "description": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format.",
      "name": "skill:xlsx"
    },
    {
      "description": "Manually compact the session context",
      "input": {
        "hint": "optional custom instructions"
      },
      "name": "compact"
    },
    {
      "description": "Toggle automatic context compaction",
      "input": {
        "hint": "on|off|toggle"
      },
      "name": "autocompact"
    },
    {
      "description": "Export session to an HTML file in the session cwd",
      "name": "export"
    },
    {
      "description": "Show session stats (messages, tokens, cost, session file)",
      "name": "session"
    },
    {
      "description": "Set session display name",
      "input": {
        "hint": "<name>"
      },
      "name": "name"
    },
    {
      "description": "Get/set pi steering message delivery mode (how queued steering messages are delivered)",
      "input": {
        "hint": "(no args to show) all | one-at-a-time"
      },
      "name": "steering"
    },
    {
      "description": "Get/set pi follow-up message delivery mode (how queued follow-up messages are delivered)",
      "input": {
        "hint": "(no args to show) all | one-at-a-time"
      },
      "name": "follow-up"
    },
    {
      "description": "Show pi changelog",
      "name": "changelog"
    }
  ],
  "configOptions": [
    {
      "category": "model",
      "currentValue": "anthropic/claude-opus-4-8",
      "description": "Select the model for this session",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "description": null,
          "name": "anthropic/Claude Haiku 3.5",
          "value": "anthropic/claude-3-5-haiku-20241022"
        },
        {
          "description": null,
          "name": "anthropic/Claude Haiku 3.5 (latest)",
          "value": "anthropic/claude-3-5-haiku-latest"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 3.5",
          "value": "anthropic/claude-3-5-sonnet-20240620"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 3.5 v2",
          "value": "anthropic/claude-3-5-sonnet-20241022"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 3.7",
          "value": "anthropic/claude-3-7-sonnet-20250219"
        },
        {
          "description": null,
          "name": "anthropic/Claude Haiku 3",
          "value": "anthropic/claude-3-haiku-20240307"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 3",
          "value": "anthropic/claude-3-opus-20240229"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 3",
          "value": "anthropic/claude-3-sonnet-20240229"
        },
        {
          "description": null,
          "name": "anthropic/Claude Fable 5",
          "value": "anthropic/claude-fable-5"
        },
        {
          "description": null,
          "name": "anthropic/Claude Haiku 4.5 (latest)",
          "value": "anthropic/claude-haiku-4-5"
        },
        {
          "description": null,
          "name": "anthropic/Claude Haiku 4.5",
          "value": "anthropic/claude-haiku-4-5-20251001"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4 (latest)",
          "value": "anthropic/claude-opus-4-0"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4.1 (latest)",
          "value": "anthropic/claude-opus-4-1"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4.1",
          "value": "anthropic/claude-opus-4-1-20250805"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4",
          "value": "anthropic/claude-opus-4-20250514"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4.5 (latest)",
          "value": "anthropic/claude-opus-4-5"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4.5",
          "value": "anthropic/claude-opus-4-5-20251101"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4.6",
          "value": "anthropic/claude-opus-4-6"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4.7",
          "value": "anthropic/claude-opus-4-7"
        },
        {
          "description": null,
          "name": "anthropic/Claude Opus 4.8",
          "value": "anthropic/claude-opus-4-8"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 4 (latest)",
          "value": "anthropic/claude-sonnet-4-0"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 4",
          "value": "anthropic/claude-sonnet-4-20250514"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 4.5 (latest)",
          "value": "anthropic/claude-sonnet-4-5"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 4.5",
          "value": "anthropic/claude-sonnet-4-5-20250929"
        },
        {
          "description": null,
          "name": "anthropic/Claude Sonnet 4.6",
          "value": "anthropic/claude-sonnet-4-6"
        },
        {
          "description": null,
          "name": "deepseek/DeepSeek V4 Flash",
          "value": "deepseek/deepseek-v4-flash"
        },
        {
          "description": null,
          "name": "deepseek/DeepSeek V4 Pro",
          "value": "deepseek/deepseek-v4-pro"
        },
        {
          "description": null,
          "name": "google/Gemini 2.0 Flash",
          "value": "google/gemini-2.0-flash"
        },
        {
          "description": null,
          "name": "google/Gemini 2.0 Flash-Lite",
          "value": "google/gemini-2.0-flash-lite"
        },
        {
          "description": null,
          "name": "google/Gemini 2.5 Flash",
          "value": "google/gemini-2.5-flash"
        },
        {
          "description": null,
          "name": "google/Gemini 2.5 Flash-Lite",
          "value": "google/gemini-2.5-flash-lite"
        },
        {
          "description": null,
          "name": "google/Gemini 2.5 Pro",
          "value": "google/gemini-2.5-pro"
        },
        {
          "description": null,
          "name": "google/Gemini 3 Flash Preview",
          "value": "google/gemini-3-flash-preview"
        },
        {
          "description": null,
          "name": "google/Gemini 3 Pro Preview",
          "value": "google/gemini-3-pro-preview"
        },
        {
          "description": null,
          "name": "google/Gemini 3.1 Flash Lite",
          "value": "google/gemini-3.1-flash-lite"
        },
        {
          "description": null,
          "name": "google/Gemini 3.1 Flash Lite Preview",
          "value": "google/gemini-3.1-flash-lite-preview"
        },
        {
          "description": null,
          "name": "google/Gemini 3.1 Pro Preview",
          "value": "google/gemini-3.1-pro-preview"
        },
        {
          "description": null,
          "name": "google/Gemini 3.1 Pro Preview Custom Tools",
          "value": "google/gemini-3.1-pro-preview-customtools"
        },
        {
          "description": null,
          "name": "google/Gemini 3.5 Flash",
          "value": "google/gemini-3.5-flash"
        },
        {
          "description": null,
          "name": "google/Gemini Flash Latest",
          "value": "google/gemini-flash-latest"
        },
        {
          "description": null,
          "name": "google/Gemini Flash-Lite Latest",
          "value": "google/gemini-flash-lite-latest"
        },
        {
          "description": null,
          "name": "google/Gemma 4 26B A4B IT",
          "value": "google/gemma-4-26b-a4b-it"
        },
        {
          "description": null,
          "name": "google/Gemma 4 31B IT",
          "value": "google/gemma-4-31b-it"
        },
        {
          "description": null,
          "name": "mistral/Codestral (latest)",
          "value": "mistral/codestral-latest"
        },
        {
          "description": null,
          "name": "mistral/Devstral 2",
          "value": "mistral/devstral-2512"
        },
        {
          "description": null,
          "name": "mistral/Devstral 2",
          "value": "mistral/devstral-latest"
        },
        {
          "description": null,
          "name": "mistral/Devstral Medium",
          "value": "mistral/devstral-medium-2507"
        },
        {
          "description": null,
          "name": "mistral/Devstral 2 (latest)",
          "value": "mistral/devstral-medium-latest"
        },
        {
          "description": null,
          "name": "mistral/Devstral Small 2505",
          "value": "mistral/devstral-small-2505"
        },
        {
          "description": null,
          "name": "mistral/Devstral Small",
          "value": "mistral/devstral-small-2507"
        },
        {
          "description": null,
          "name": "mistral/Devstral Small 2",
          "value": "mistral/labs-devstral-small-2512"
        },
        {
          "description": null,
          "name": "mistral/Magistral Medium (latest)",
          "value": "mistral/magistral-medium-latest"
        },
        {
          "description": null,
          "name": "mistral/Magistral Small",
          "value": "mistral/magistral-small"
        },
        {
          "description": null,
          "name": "mistral/Ministral 3B (latest)",
          "value": "mistral/ministral-3b-latest"
        },
        {
          "description": null,
          "name": "mistral/Ministral 8B (latest)",
          "value": "mistral/ministral-8b-latest"
        },
        {
          "description": null,
          "name": "mistral/Mistral Large 2.1",
          "value": "mistral/mistral-large-2411"
        },
        {
          "description": null,
          "name": "mistral/Mistral Large 3",
          "value": "mistral/mistral-large-2512"
        },
        {
          "description": null,
          "name": "mistral/Mistral Large (latest)",
          "value": "mistral/mistral-large-latest"
        },
        {
          "description": null,
          "name": "mistral/Mistral Medium 3",
          "value": "mistral/mistral-medium-2505"
        },
        {
          "description": null,
          "name": "mistral/Mistral Medium 3.1",
          "value": "mistral/mistral-medium-2508"
        },
        {
          "description": null,
          "name": "mistral/Mistral Medium 3.5",
          "value": "mistral/mistral-medium-2604"
        },
        {
          "description": null,
          "name": "mistral/Mistral Medium 3.5",
          "value": "mistral/mistral-medium-3.5"
        },
        {
          "description": null,
          "name": "mistral/Mistral Medium (latest)",
          "value": "mistral/mistral-medium-latest"
        },
        {
          "description": null,
          "name": "mistral/Mistral Nemo",
          "value": "mistral/mistral-nemo"
        },
        {
          "description": null,
          "name": "mistral/Mistral Small 3.2",
          "value": "mistral/mistral-small-2506"
        },
        {
          "description": null,
          "name": "mistral/Mistral Small 4",
          "value": "mistral/mistral-small-2603"
        },
        {
          "description": null,
          "name": "mistral/Mistral Small (latest)",
          "value": "mistral/mistral-small-latest"
        },
        {
          "description": null,
          "name": "mistral/Mistral 7B",
          "value": "mistral/open-mistral-7b"
        },
        {
          "description": null,
          "name": "mistral/Open Mistral Nemo",
          "value": "mistral/open-mistral-nemo"
        },
        {
          "description": null,
          "name": "mistral/Mixtral 8x22B",
          "value": "mistral/open-mixtral-8x22b"
        },
        {
          "description": null,
          "name": "mistral/Mixtral 8x7B",
          "value": "mistral/open-mixtral-8x7b"
        },
        {
          "description": null,
          "name": "mistral/Pixtral 12B",
          "value": "mistral/pixtral-12b"
        },
        {
          "description": null,
          "name": "mistral/Pixtral Large (latest)",
          "value": "mistral/pixtral-large-latest"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2 0711",
          "value": "moonshotai/kimi-k2-0711-preview"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2 0905",
          "value": "moonshotai/kimi-k2-0905-preview"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2 Thinking",
          "value": "moonshotai/kimi-k2-thinking"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2 Thinking Turbo",
          "value": "moonshotai/kimi-k2-thinking-turbo"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2 Turbo",
          "value": "moonshotai/kimi-k2-turbo-preview"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2.5",
          "value": "moonshotai/kimi-k2.5"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2.6",
          "value": "moonshotai/kimi-k2.6"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2.7 Code",
          "value": "moonshotai/kimi-k2.7-code"
        },
        {
          "description": null,
          "name": "moonshotai/Kimi K2.7 Code HighSpeed",
          "value": "moonshotai/kimi-k2.7-code-highspeed"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2 0711",
          "value": "moonshotai-cn/kimi-k2-0711-preview"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2 0905",
          "value": "moonshotai-cn/kimi-k2-0905-preview"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2 Thinking",
          "value": "moonshotai-cn/kimi-k2-thinking"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2 Thinking Turbo",
          "value": "moonshotai-cn/kimi-k2-thinking-turbo"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2 Turbo",
          "value": "moonshotai-cn/kimi-k2-turbo-preview"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2.5",
          "value": "moonshotai-cn/kimi-k2.5"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2.6",
          "value": "moonshotai-cn/kimi-k2.6"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2.7 Code",
          "value": "moonshotai-cn/kimi-k2.7-code"
        },
        {
          "description": null,
          "name": "moonshotai-cn/Kimi K2.7 Code HighSpeed",
          "value": "moonshotai-cn/kimi-k2.7-code-highspeed"
        },
        {
          "description": null,
          "name": "openai/GPT-4",
          "value": "openai/gpt-4"
        },
        {
          "description": null,
          "name": "openai/GPT-4 Turbo",
          "value": "openai/gpt-4-turbo"
        },
        {
          "description": null,
          "name": "openai/GPT-4.1",
          "value": "openai/gpt-4.1"
        },
        {
          "description": null,
          "name": "openai/GPT-4.1 mini",
          "value": "openai/gpt-4.1-mini"
        },
        {
          "description": null,
          "name": "openai/GPT-4.1 nano",
          "value": "openai/gpt-4.1-nano"
        },
        {
          "description": null,
          "name": "openai/GPT-4o",
          "value": "openai/gpt-4o"
        },
        {
          "description": null,
          "name": "openai/GPT-4o (2024-05-13)",
          "value": "openai/gpt-4o-2024-05-13"
        },
        {
          "description": null,
          "name": "openai/GPT-4o (2024-08-06)",
          "value": "openai/gpt-4o-2024-08-06"
        },
        {
          "description": null,
          "name": "openai/GPT-4o (2024-11-20)",
          "value": "openai/gpt-4o-2024-11-20"
        },
        {
          "description": null,
          "name": "openai/GPT-4o mini",
          "value": "openai/gpt-4o-mini"
        },
        {
          "description": null,
          "name": "openai/GPT-5",
          "value": "openai/gpt-5"
        },
        {
          "description": null,
          "name": "openai/GPT-5 Chat Latest",
          "value": "openai/gpt-5-chat-latest"
        },
        {
          "description": null,
          "name": "openai/GPT-5-Codex",
          "value": "openai/gpt-5-codex"
        },
        {
          "description": null,
          "name": "openai/GPT-5 Mini",
          "value": "openai/gpt-5-mini"
        },
        {
          "description": null,
          "name": "openai/GPT-5 Nano",
          "value": "openai/gpt-5-nano"
        },
        {
          "description": null,
          "name": "openai/GPT-5 Pro",
          "value": "openai/gpt-5-pro"
        },
        {
          "description": null,
          "name": "openai/GPT-5.1",
          "value": "openai/gpt-5.1"
        },
        {
          "description": null,
          "name": "openai/GPT-5.1 Chat",
          "value": "openai/gpt-5.1-chat-latest"
        },
        {
          "description": null,
          "name": "openai/GPT-5.1 Codex",
          "value": "openai/gpt-5.1-codex"
        },
        {
          "description": null,
          "name": "openai/GPT-5.1 Codex Max",
          "value": "openai/gpt-5.1-codex-max"
        },
        {
          "description": null,
          "name": "openai/GPT-5.1 Codex mini",
          "value": "openai/gpt-5.1-codex-mini"
        },
        {
          "description": null,
          "name": "openai/GPT-5.2",
          "value": "openai/gpt-5.2"
        },
        {
          "description": null,
          "name": "openai/GPT-5.2 Chat",
          "value": "openai/gpt-5.2-chat-latest"
        },
        {
          "description": null,
          "name": "openai/GPT-5.2 Codex",
          "value": "openai/gpt-5.2-codex"
        },
        {
          "description": null,
          "name": "openai/GPT-5.2 Pro",
          "value": "openai/gpt-5.2-pro"
        },
        {
          "description": null,
          "name": "openai/GPT-5.3 Chat (latest)",
          "value": "openai/gpt-5.3-chat-latest"
        },
        {
          "description": null,
          "name": "openai/GPT-5.3 Codex",
          "value": "openai/gpt-5.3-codex"
        },
        {
          "description": null,
          "name": "openai/GPT-5.3 Codex Spark",
          "value": "openai/gpt-5.3-codex-spark"
        },
        {
          "description": null,
          "name": "openai/GPT-5.4",
          "value": "openai/gpt-5.4"
        },
        {
          "description": null,
          "name": "openai/GPT-5.4 mini",
          "value": "openai/gpt-5.4-mini"
        },
        {
          "description": null,
          "name": "openai/GPT-5.4 nano",
          "value": "openai/gpt-5.4-nano"
        },
        {
          "description": null,
          "name": "openai/GPT-5.4 Pro",
          "value": "openai/gpt-5.4-pro"
        },
        {
          "description": null,
          "name": "openai/GPT-5.5",
          "value": "openai/gpt-5.5"
        },
        {
          "description": null,
          "name": "openai/GPT-5.5 Pro",
          "value": "openai/gpt-5.5-pro"
        },
        {
          "description": null,
          "name": "openai/o1",
          "value": "openai/o1"
        },
        {
          "description": null,
          "name": "openai/o1-pro",
          "value": "openai/o1-pro"
        },
        {
          "description": null,
          "name": "openai/o3",
          "value": "openai/o3"
        },
        {
          "description": null,
          "name": "openai/o3-deep-research",
          "value": "openai/o3-deep-research"
        },
        {
          "description": null,
          "name": "openai/o3-mini",
          "value": "openai/o3-mini"
        },
        {
          "description": null,
          "name": "openai/o3-pro",
          "value": "openai/o3-pro"
        },
        {
          "description": null,
          "name": "openai/o4-mini",
          "value": "openai/o4-mini"
        },
        {
          "description": null,
          "name": "openai/o4-mini-deep-research",
          "value": "openai/o4-mini-deep-research"
        },
        {
          "description": null,
          "name": "xai/Grok 3",
          "value": "xai/grok-3"
        },
        {
          "description": null,
          "name": "xai/Grok 3 Fast",
          "value": "xai/grok-3-fast"
        },
        {
          "description": null,
          "name": "xai/Grok 4.20 (Non-Reasoning)",
          "value": "xai/grok-4.20-0309-non-reasoning"
        },
        {
          "description": null,
          "name": "xai/Grok 4.20 (Reasoning)",
          "value": "xai/grok-4.20-0309-reasoning"
        },
        {
          "description": null,
          "name": "xai/Grok 4.3",
          "value": "xai/grok-4.3"
        },
        {
          "description": null,
          "name": "xai/Grok Build 0.1",
          "value": "xai/grok-build-0.1"
        },
        {
          "description": null,
          "name": "xai/Grok Code Fast 1",
          "value": "xai/grok-code-fast-1"
        },
        {
          "description": null,
          "name": "zai/GLM-4.5-Air",
          "value": "zai/glm-4.5-air"
        },
        {
          "description": null,
          "name": "zai/GLM-4.7",
          "value": "zai/glm-4.7"
        },
        {
          "description": null,
          "name": "zai/GLM-5-Turbo",
          "value": "zai/glm-5-turbo"
        },
        {
          "description": null,
          "name": "zai/GLM-5.1",
          "value": "zai/glm-5.1"
        },
        {
          "description": null,
          "name": "zai/GLM-5.2",
          "value": "zai/glm-5.2"
        },
        {
          "description": null,
          "name": "zai/GLM-5V-Turbo",
          "value": "zai/glm-5v-turbo"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "medium",
      "description": "Set the reasoning effort for this session",
      "id": "thought_level",
      "name": "Thinking",
      "options": [
        {
          "description": null,
          "name": "Thinking: off",
          "value": "off"
        },
        {
          "description": null,
          "name": "Thinking: minimal",
          "value": "minimal"
        },
        {
          "description": null,
          "name": "Thinking: low",
          "value": "low"
        },
        {
          "description": null,
          "name": "Thinking: medium",
          "value": "medium"
        },
        {
          "description": null,
          "name": "Thinking: high",
          "value": "high"
        },
        {
          "description": null,
          "name": "Thinking: xhigh",
          "value": "xhigh"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "medium",
  "id": "pi-acp",
  "modes": [
    {
      "description": null,
      "id": "off",
      "name": "Thinking: off"
    },
    {
      "description": null,
      "id": "minimal",
      "name": "Thinking: minimal"
    },
    {
      "description": null,
      "id": "low",
      "name": "Thinking: low"
    },
    {
      "description": null,
      "id": "medium",
      "name": "Thinking: medium"
    },
    {
      "description": null,
      "id": "high",
      "name": "Thinking: high"
    },
    {
      "description": null,
      "id": "xhigh",
      "name": "Thinking: xhigh"
    }
  ],
  "name": "pi ACP",
  "protocolVersion": 1,
  "version": "0.0.31"
};

// dist-src/agents/poolside.ts
var agent30 = {
  "agentCapabilities": {
    "_meta": {
      "poolside/compaction_update": true,
      "poolside/early_session_config_options": true,
      "poolside/mcp_settings": true,
      "poolside/rewind": true,
      "poolside/session_delete": true,
      "poolside/session_move": true
    },
    "auth": {
      "logout": {}
    },
    "loadSession": true,
    "mcpCapabilities": {},
    "promptCapabilities": {
      "image": true
    },
    "sessionCapabilities": {
      "close": {},
      "list": {}
    }
  },
  "agentInfo": {
    "name": "pool-acp",
    "title": "Poolside",
    "version": "1.0.7"
  },
  "authMethods": [],
  "commands": [
    {
      "description": "Get a shareable trajectory reference for the current agent session",
      "name": "share"
    },
    {
      "description": "Refresh and list available skills",
      "name": "skills"
    },
    {
      "description": "Show session token usage and context window state",
      "name": "usage"
    },
    {
      "description": "Show local sandbox configuration",
      "name": "sandbox"
    },
    {
      "description": "Manually compact session to free up context. Optional: /compact [guidance]",
      "name": "compact"
    },
    {
      "description": "Show MCP servers, connection status, and tools",
      "name": "mcp"
    },
    {
      "description": "Rename the current session",
      "input": {
        "hint": "new title"
      },
      "name": "rename"
    },
    {
      "description": "Switch to plan mode",
      "name": "plan"
    },
    {
      "_meta": {
        "poolside/slash_command_category": "skill"
      },
      "description": "Guide users through configuring local sandboxing in workspace and/or global settings YAML. Use when users ask to enable sandboxing, configure sandboxing, choose read-only vs read-write sandboxing, set network policy, inspect sandbox settings, or update .poolside/settings.local.yaml or global settings.",
      "name": "configure-sandbox"
    },
    {
      "_meta": {
        "poolside/slash_command_category": "skill"
      },
      "description": 'Answer questions about the Poolside `pool` CLI itself \u2014 installation, interactive (TUI) mode, automated (`pool exec`) mode, editor integration (`pool acp`), slash commands, keyboard shortcuts, configuration, log locations, managing MCP/ACP servers, login, and update. Triggers on questions like "how do I install pool", "what slash commands do you support", "how do I add an MCP server", "where are my logs", "how do I run pool non-interactively", "how do I use pool from Zed/JetBrains/Neovim".',
      "name": "pool-product-reference"
    },
    {
      "_meta": {
        "poolside/slash_command_category": "skill"
      },
      "description": "Guide for creating skills. Use when the user wants to create (or update) a skill to extend the agent's capabilities with specialized knowledge, workflows, or tool integrations.",
      "name": "skill-creator"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "default",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "description": "Prompts for permission on first use of each tool",
          "name": "Always ask",
          "value": "default"
        },
        {
          "description": "Auto-approves workspace file reads and writes, prompts for everything else",
          "name": "Accept edits",
          "value": "accept-edits"
        },
        {
          "description": "Plan changes without modifying the codebase",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Automatically approves all tool calls without prompting",
          "name": "Allow all",
          "value": "always-allow"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "default",
      "id": "thought_level",
      "name": "Thought level",
      "options": [
        {
          "name": "Default",
          "value": "default"
        },
        {
          "name": "Extra high",
          "value": "xhigh"
        },
        {
          "name": "High",
          "value": "high"
        },
        {
          "name": "Medium",
          "value": "medium"
        },
        {
          "name": "Low",
          "value": "low"
        },
        {
          "name": "Minimal",
          "value": "minimal"
        },
        {
          "name": "None",
          "value": "none"
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
          "description": "probe-dummy-model",
          "name": "probe-dummy-model",
          "value": "probe-dummy-model"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "default",
  "id": "poolside",
  "modes": [
    {
      "description": "Prompts for permission on first use of each tool",
      "id": "default",
      "name": "Always ask"
    },
    {
      "description": "Auto-approves workspace file reads and writes, prompts for everything else",
      "id": "accept-edits",
      "name": "Accept edits"
    },
    {
      "description": "Plan changes without modifying the codebase",
      "id": "plan",
      "name": "Plan"
    },
    {
      "description": "Automatically approves all tool calls without prompting",
      "id": "always-allow",
      "name": "Allow all"
    }
  ],
  "name": "Poolside",
  "protocolVersion": 1,
  "version": "1.0.7"
};

// dist-src/agents/qwen-code.ts
var agent31 = {
  "agentCapabilities": {
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": true
    },
    "promptCapabilities": {
      "audio": true,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {
      "list": {},
      "resume": {}
    }
  },
  "agentInfo": {
    "name": "qwen-code",
    "title": "Qwen Code",
    "version": "0.19.2"
  },
  "authMethods": [
    {
      "_meta": {
        "args": [
          "--auth-type=openai"
        ],
        "type": "terminal"
      },
      "description": "Requires setting the `OPENAI_API_KEY` environment variable",
      "id": "openai",
      "name": "Use OpenAI API key"
    }
  ],
  "commands": [
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [
          "paths"
        ],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "show version info",
      "input": {
        "hint": ""
      },
      "name": "status"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "List background tasks (text dump \u2014 interactive dialog opens via the footer pill)",
      "input": null,
      "name": "tasks"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Connect an LLM provider",
      "input": null,
      "name": "auth"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "acp"
        ]
      },
      "description": "Ask a quick side question without affecting the main conversation",
      "input": null,
      "name": "btw"
    },
    {
      "_meta": {
        "argumentHint": "<description>",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "submit a bug report",
      "input": {
        "hint": "<description>"
      },
      "name": "bug"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Clear conversation history and free up context",
      "input": null,
      "name": "clear"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Compresses the context by replacing it with a summary.",
      "input": null,
      "name": "compress"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Fast context compression without AI. Strips old tool outputs and thinking parts.",
      "input": null,
      "name": "compress-fast"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [
          "detail"
        ],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": 'Show context window usage breakdown. Use "/context detail" for per-item breakdown.',
      "input": {
        "hint": ""
      },
      "name": "context"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Show working-tree change stats versus HEAD",
      "input": null,
      "name": "diff"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "open full Qwen Code documentation in your browser",
      "input": null,
      "name": "docs"
    },
    {
      "_meta": {
        "argumentHint": "[memory|cpu-profile|rollback] [--sample] [--snapshot] [--duration]",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [
          "memory",
          "cpu-profile",
          "rollback"
        ],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Run installation and environment diagnostics",
      "input": {
        "hint": "[memory|cpu-profile|rollback] [--sample] [--snapshot] [--duration]"
      },
      "name": "doctor"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [
          "add",
          "show"
        ],
        "supportedModes": [
          "interactive",
          "acp"
        ]
      },
      "description": "Manage workspace directories",
      "input": {
        "hint": ""
      },
      "name": "directory"
    },
    {
      "_meta": {
        "argumentHint": "[md|html|json|jsonl] [path]",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [
          "html",
          "md",
          "json",
          "jsonl"
        ],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Export current session message history to a file",
      "input": {
        "hint": "[md|html|json|jsonl] [path]"
      },
      "name": "export"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [
          "list",
          "manage",
          "install",
          "explore"
        ],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Manage extensions",
      "input": {
        "hint": ""
      },
      "name": "extensions"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Manage Qwen Code hooks",
      "input": null,
      "name": "hooks"
    },
    {
      "_meta": {
        "argumentHint": "[all|claude-code|claude-desktop] [--scope user|project]",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Import MCP servers from Claude configs",
      "input": {
        "hint": "[all|claude-code|claude-desktop] [--scope user|project]"
      },
      "name": "import-config"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Analyzes the project and creates a tailored QWEN.md file.",
      "input": null,
      "name": "init"
    },
    {
      "_meta": {
        "argumentHint": "ui|output <language>",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [
          "ui",
          "output"
        ],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "View or change the language setting",
      "input": {
        "hint": "ui|output <language>"
      },
      "name": "language"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "acp"
        ]
      },
      "description": "Consolidate managed auto-memory topic files.",
      "input": null,
      "name": "dream"
    },
    {
      "_meta": {
        "argumentHint": "<memory text to remove>",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "acp"
        ]
      },
      "description": "Remove matching entries from managed auto-memory.",
      "input": {
        "hint": "<memory text to remove>"
      },
      "name": "forget"
    },
    {
      "_meta": {
        "argumentHint": "[<condition> | clear]",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Set a goal \u2014 keep working until the condition is met",
      "input": {
        "hint": "[<condition> | clear]"
      },
      "name": "goal"
    },
    {
      "_meta": {
        "argumentHint": "[--fast|--voice] [<model-id>]",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Switch the model for this session (--fast for suggestion model, --voice for voice transcription model, [model-id] to switch immediately).",
      "input": {
        "hint": "[--fast|--voice] [<model-id>]"
      },
      "name": "model"
    },
    {
      "_meta": {
        "argumentHint": "<text to remember>",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "acp"
        ]
      },
      "description": "Save a durable memory to the memory system.",
      "input": {
        "hint": "<text to remember>"
      },
      "name": "remember"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "acp"
        ]
      },
      "description": "Open the skills panel (browse, search, toggle, pick).",
      "input": null,
      "name": "skills"
    },
    {
      "_meta": {
        "argumentHint": "[model|tools|daily|monthly|export]",
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [
          "model",
          "tools",
          "daily",
          "monthly",
          "export"
        ],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Show usage statistics dashboard.",
      "input": {
        "hint": "[model|tools|daily|monthly|export]"
      },
      "name": "stats"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Generate a project summary and save it to .qwen/PROJECT_SUMMARY.md",
      "input": null,
      "name": "summary"
    },
    {
      "_meta": {
        "modelInvocable": false,
        "source": "builtin-command",
        "sourceLabel": "Built-in",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "generate personalized programming insights from your chat history",
      "input": null,
      "name": "insight"
    },
    {
      "_meta": {
        "argumentHint": "<operation> <file-pattern>",
        "modelInvocable": true,
        "source": "bundled-skill",
        "sourceLabel": "Skill",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Execute batch operations on multiple files in parallel. Automatically discovers files, splits into chunks, and processes with parallel worker agents. Use `/batch` followed by operation and file pattern.",
      "input": {
        "hint": "<operation> <file-pattern>"
      },
      "name": "batch"
    },
    {
      "_meta": {
        "argumentHint": "[interval] [prompt] | list | clear",
        "modelInvocable": true,
        "source": "bundled-skill",
        "sourceLabel": "Skill",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Create a loop that runs a prompt now and follows up either on a fixed schedule or through self-paced wakeups. Usage - /loop check the build, /loop 5m check the build, /loop check the PR every 30m. /loop list to show jobs, /loop clear to cancel all.",
      "input": {
        "hint": "[interval] [prompt] | list | clear"
      },
      "name": "loop"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "bundled-skill",
        "sourceLabel": "Skill",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Workflow for creating new applications from scratch. Covers requirements gathering, tech stack selection, scaffolding, implementation, and delivery of a functional prototype.",
      "input": {
        "hint": ""
      },
      "name": "new-app"
    },
    {
      "_meta": {
        "argumentHint": "<question>",
        "modelInvocable": true,
        "source": "bundled-skill",
        "sourceLabel": "Skill",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Answer any question about Qwen Code usage, features, configuration, and troubleshooting by referencing the official user documentation. Also helps users view or modify their settings.json. Invoke with `/qc-helper` followed by a question, e.g. `/qc-helper how do I configure MCP servers?` or `/qc-helper change approval mode to yolo`.",
      "input": {
        "hint": "<question>"
      },
      "name": "qc-helper"
    },
    {
      "_meta": {
        "argumentHint": "[pr-number|file-path] [--comment]",
        "modelInvocable": true,
        "source": "bundled-skill",
        "sourceLabel": "Skill",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Review changed code for correctness, security, code quality, and performance. Use when the user asks to review code changes, a PR, or specific files. Invoke with `/review`, `/review <pr-number>`, `/review <file-path>`, or `/review <pr-number> --comment` to post inline comments on the PR.",
      "input": {
        "hint": "[pr-number|file-path] [--comment]"
      },
      "name": "review"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "bundled-skill",
        "sourceLabel": "Skill",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Review recent code changes for reuse, code quality, and efficiency, then directly apply straightforward cleanup improvements. Use when the user wants a post-implementation cleanup pass, pre-PR polish, or asks to simplify/refine recent changes. Invoke with `/simplify` or `/simplify <focus>`.",
      "input": {
        "hint": ""
      },
      "name": "simplify"
    },
    {
      "_meta": {
        "argumentHint": "[PID or symptom]",
        "modelInvocable": true,
        "source": "bundled-skill",
        "sourceLabel": "Skill",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Diagnose frozen, stuck, or slow Qwen Code sessions on this machine. Scans for problematic processes, high CPU/memory usage, hung subprocesses, and debug logs. Use /stuck or /stuck <PID> to focus on a specific process.",
      "input": {
        "hint": "[PID or symptom]"
      },
      "name": "stuck"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "skill-dir-command",
        "sourceLabel": "User",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Create Dim deployable static-site Artifact outputs. Use when the user asks to create, preview, smoke-test, or deploy a static website, landing page, HTML demo, browser app, or static Artifact Deployment test that must be generated under output/index.html and published by Dim.",
      "input": {
        "hint": ""
      },
      "name": "artifact-static-site"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "skill-dir-command",
        "sourceLabel": "User",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Multi Agents Looping \u2014 a multi-agent deep research protocol that spawns parallel explorer agents each round, gates every round with a fresh verifier agent, loops until coverage passes, then merges findings into a structured investigation report. Use only when the user explicitly asks for a deep investigation or a formal multi-round research effort that justifies spawning and coordinating many agents.",
      "input": {
        "hint": ""
      },
      "name": "deep-investigate"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "skill-dir-command",
        "sourceLabel": "User",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Use when asked to analyze code and add explanatory code annotations, file headers, doc comments, inline comments, or JSX-safe comments.",
      "input": {
        "hint": ""
      },
      "name": "docs-code"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "skill-dir-command",
        "sourceLabel": "User",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Docs-driven delivery workflow. Use when splitting design docs into tasks, creating implementation plans under docs/plan, executing develop/verify/merge cycles, maintaining design doc consistency, or writing UI layout documentation with ASCII diagrams.",
      "input": {
        "hint": ""
      },
      "name": "docs-sprint"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "skill-dir-command",
        "sourceLabel": "User",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": `Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: (A) create new documents from scratch, (B) fill/edit content in existing documents, (C) apply template formatting with XSD validation gate-check. MUST use this skill whenever the user wants to produce, modify, or format a Word document \u2014 including when they say "write a report", "draft a proposal", "make a contract", "fill in this form", "reformat to match this template", or any task whose final output is a .docx file. Even if the user doesn't mention "docx" explicitly, if the task implies a printable/formal document, use this skill.
`,
      "input": {
        "hint": ""
      },
      "name": "docx"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "skill-dir-command",
        "sourceLabel": "User",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": 'Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.',
      "input": {
        "hint": ""
      },
      "name": "find-skills"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "skill-dir-command",
        "sourceLabel": "User",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning, stacking, scrubbing), inline micro-images, and massive section spacing.",
      "input": {
        "hint": ""
      },
      "name": "gpt-taste"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "skill-dir-command",
        "sourceLabel": "User",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
      "input": {
        "hint": ""
      },
      "name": "high-end-visual-design"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "skill-dir-command",
        "sourceLabel": "User",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": 'Use this skill when visual quality and design identity matter for a PDF. CREATE (generate from scratch): "make a PDF", "generate a report", "write a proposal", "create a resume", "beautiful PDF", "professional document", "cover page", "polished PDF", "client-ready document". FILL (complete form fields): "fill in the form", "fill out this PDF", "complete the form fields", "write values into PDF", "what fields does this PDF have". REFORMAT (apply design to an existing doc): "reformat this document", "apply our style", "convert this Markdown/text to PDF", "make this doc look good", "re-style this PDF". This skill uses a token-based design system: color, typography, and spacing are derived from the document type and flow through every page. The output is print-ready. Prefer this skill when appearance matters, not just when any PDF output is needed.\n',
      "input": {
        "hint": ""
      },
      "name": "pdf"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "skill-dir-command",
        "sourceLabel": "User",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. Triggers: PPT, PPTX, PowerPoint, presentation, slide, deck, slides.",
      "input": {
        "hint": ""
      },
      "name": "pptx-generator"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "skill-dir-command",
        "sourceLabel": "User",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Codex's capabilities with specialized knowledge, workflows, or tool integrations.",
      "input": {
        "hint": ""
      },
      "name": "skill-creator"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "skill-dir-command",
        "sourceLabel": "User",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Install Agents skills into $AGENTS_HOME/skills from a curated list or a GitHub repo path. Use when a user asks to list installable skills, install a curated skill, or install a skill from another repo (including private repos).",
      "input": {
        "hint": ""
      },
      "name": "skill-installer"
    },
    {
      "_meta": {
        "modelInvocable": true,
        "source": "skill-dir-command",
        "sourceLabel": "User",
        "subcommands": [],
        "supportedModes": [
          "interactive",
          "non_interactive",
          "acp"
        ]
      },
      "description": "Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Use when the user asks to create, build, modify, analyze, read, validate, or format any Excel spreadsheet, financial model, pivot table, or tabular data file. Covers: creating new xlsx from scratch, reading and analyzing existing files, editing existing xlsx with zero format loss, formula recalculation and validation, and applying professional financial formatting standards. Triggers on 'spreadsheet', 'Excel', '.xlsx', '.csv', 'pivot table', 'financial model', 'formula', or any request to produce tabular data in Excel format.",
      "input": {
        "hint": ""
      },
      "name": "xlsx"
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
          "description": "Analyze only, do not modify files or execute commands",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Require approval for file edits or shell commands",
          "name": "Default",
          "value": "default"
        },
        {
          "description": "Automatically approve file edits",
          "name": "Auto Edit",
          "value": "auto-edit"
        },
        {
          "description": "LLM classifier auto-approves safe actions, blocks risky ones",
          "name": "Auto",
          "value": "auto"
        },
        {
          "description": "Automatically approve all tools",
          "name": "YOLO",
          "value": "yolo"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "$runtime|openai|probe-dummy-model(openai)",
      "description": "AI model to use",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "description": "Qwen 3.6 Plus \u2014 efficient hybrid model with leading coding performance",
          "name": "coder-model",
          "value": "coder-model(qwen-oauth)"
        },
        {
          "description": "",
          "name": "probe-dummy-model",
          "value": "$runtime|openai|probe-dummy-model(openai)"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "default",
  "id": "qwen-code",
  "modes": [
    {
      "description": "Analyze only, do not modify files or execute commands",
      "id": "plan",
      "name": "Plan"
    },
    {
      "description": "Require approval for file edits or shell commands",
      "id": "default",
      "name": "Default"
    },
    {
      "description": "Automatically approve file edits",
      "id": "auto-edit",
      "name": "Auto Edit"
    },
    {
      "description": "LLM classifier auto-approves safe actions, blocks risky ones",
      "id": "auto",
      "name": "Auto"
    },
    {
      "description": "Automatically approve all tools",
      "id": "yolo",
      "name": "YOLO"
    }
  ],
  "name": "Qwen Code",
  "protocolVersion": 1,
  "version": "0.19.2"
};

// dist-src/agents/sigit.ts
var agent32 = {
  "agentCapabilities": {
    "auth": {},
    "loadSession": true,
    "mcpCapabilities": {
      "http": false,
      "sse": false
    },
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": false,
      "image": false
    },
    "sessionCapabilities": {
      "fork": {}
    }
  },
  "agentInfo": {
    "name": "sigit",
    "title": "siGit Code - AI Coding Agent",
    "version": "1.2.1"
  },
  "authMethods": [
    {
      "description": "Sign in with `/login <email> <password>` in the message box.",
      "id": "sigit",
      "name": "Sign in to siGit Code"
    }
  ],
  "commands": [
    {
      "description": "Show available commands",
      "name": "help"
    },
    {
      "description": "List available models",
      "input": {
        "hint": "model number to switch to (optional)"
      },
      "name": "models"
    },
    {
      "description": "Sign in to siGit Code Cloud",
      "input": {
        "hint": "<email> <password>"
      },
      "name": "login"
    },
    {
      "description": "Sign out of siGit Code Cloud",
      "name": "logout"
    },
    {
      "description": "Show the signed-in account",
      "name": "whoami"
    },
    {
      "description": "Re-sync sign-in and model state",
      "name": "reload"
    },
    {
      "description": "Wipe the conversation history",
      "name": "clear"
    },
    {
      "description": "Show engine status",
      "name": "status"
    }
  ],
  "configOptions": [
    {
      "category": "model",
      "currentValue": "bartowski/Qwen2.5-3B-Instruct-GGUF",
      "description": "Select an on-device model or a siGit Code Cloud tier",
      "id": "sigit-model",
      "name": "Model",
      "options": [
        {
          "description": "~3.8 GB - download on select",
          "name": "DeepSeek Coder 6.7B (Q4_K_M) [Onde]",
          "value": "TheBloke/deepseek-coder-6.7B-instruct-GGUF"
        },
        {
          "description": "~941 MB (GGUF Q4_K_M) - download on select",
          "name": "Qwen 2.5 1.5B [Onde]",
          "value": "bartowski/Qwen2.5-1.5B-Instruct-GGUF"
        },
        {
          "description": "~1.93 GB (GGUF Q4_K_M) - download on select",
          "name": "Qwen 2.5 3B [Onde]",
          "value": "bartowski/Qwen2.5-3B-Instruct-GGUF"
        },
        {
          "description": "tool calling - ~4.4 GB - download on select",
          "name": "Qwen 2.5 Coder 7B (Q4_K_M) [Onde]",
          "value": "bartowski/Qwen2.5-Coder-7B-Instruct-GGUF"
        },
        {
          "description": "tool calling - ~1.3 GB - download on select",
          "name": "Qwen 3 1.7B (Q4_K_M) [Onde]",
          "value": "bartowski/Qwen_Qwen3-1.7B-GGUF"
        },
        {
          "description": "tool calling - ~8.4 GB - download on select",
          "name": "Qwen 3 14B (Q4_K_M) [Onde]",
          "value": "bartowski/Qwen_Qwen3-14B-GGUF"
        },
        {
          "description": "tool calling - ~2.7 GB - download on select",
          "name": "Qwen 3 4B (Q4_K_M) [Onde]",
          "value": "bartowski/Qwen_Qwen3-4B-GGUF"
        },
        {
          "description": "tool calling - ~5 GB - download on select",
          "name": "Qwen 3 8B (Q4_K_M) [Onde]",
          "value": "bartowski/Qwen_Qwen3-8B-GGUF"
        },
        {
          "description": "tool calling - siGit Code Cloud",
          "name": "Balanced [siGit Code Cloud]",
          "value": "sigit-cloud:balanced"
        },
        {
          "description": "tool calling - siGit Code Cloud",
          "name": "Fast [siGit Code Cloud]",
          "value": "sigit-cloud:fast"
        },
        {
          "description": "tool calling - siGit Code Cloud",
          "name": "Large [siGit Code Cloud]",
          "value": "sigit-cloud:large"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": null,
  "id": "sigit",
  "modes": [],
  "name": "siGit Code",
  "protocolVersion": 1,
  "version": "1.2.1"
};

// dist-src/agents/stakpak.ts
var agent33 = {
  "agentCapabilities": {
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": true
    },
    "promptCapabilities": {
      "audio": false,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {}
  },
  "agentInfo": {
    "name": "stakpak",
    "title": "Stakpak Agent",
    "version": "0.3.88"
  },
  "authMethods": [],
  "commands": [],
  "configOptions": [],
  "currentModeId": null,
  "id": "stakpak",
  "modes": [],
  "name": "Stakpak",
  "protocolVersion": 1,
  "version": "0.3.88"
};

// dist-src/agents/vtcode.ts
var agent34 = {
  "agentCapabilities": {
    "loadSession": true,
    "mcpCapabilities": {
      "http": true,
      "sse": false
    },
    "promptCapabilities": {
      "audio": true,
      "embeddedContext": true,
      "image": true
    },
    "sessionCapabilities": {}
  },
  "agentInfo": {
    "name": "vtcode",
    "title": "Zed",
    "version": "0.96.12"
  },
  "authMethods": [],
  "commands": [
    {
      "description": "Create vtcode.toml and index the workspace",
      "input": {
        "hint": "Optional: --force flag"
      },
      "name": "init"
    },
    {
      "description": "Browse vtcode.toml settings sections",
      "input": null,
      "name": "config"
    },
    {
      "description": "Show model, provider, workspace, and tool status",
      "input": null,
      "name": "status"
    },
    {
      "description": "Run installation and configuration diagnostics",
      "input": null,
      "name": "doctor"
    },
    {
      "description": "Toggle between Code and Architect modes for read-only planning",
      "input": {
        "hint": "Optional: on | off"
      },
      "name": "plan"
    },
    {
      "description": "Cycle through Ask -> Architect -> Code modes",
      "input": null,
      "name": "mode"
    },
    {
      "description": "Show slash command help",
      "input": null,
      "name": "help"
    },
    {
      "description": "Reset conversation context",
      "input": null,
      "name": "reset"
    },
    {
      "description": "List tools and their descriptions",
      "input": null,
      "name": "tools"
    },
    {
      "description": "Close the VT Code session",
      "input": null,
      "name": "exit"
    }
  ],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "code",
      "description": "Controls whether VT Code answers, plans, or edits.",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "name": "Ask",
          "value": "ask"
        },
        {
          "name": "Architect",
          "value": "architect"
        },
        {
          "name": "Code",
          "value": "code"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "none",
      "description": "Controls how much reasoning effort VT Code requests from the model.",
      "id": "thought_level",
      "name": "Thought level",
      "options": [
        {
          "name": "Minimal",
          "value": "minimal"
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
          "name": "Extra High",
          "value": "xhigh"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "code",
  "id": "vtcode",
  "modes": [
    {
      "description": "Answer questions with read-only workspace inspection",
      "id": "ask",
      "name": "Ask"
    },
    {
      "description": "Design and plan software systems with read-only workspace inspection",
      "id": "architect",
      "name": "Architect"
    },
    {
      "description": "Write and modify code with full tool access",
      "id": "code",
      "name": "Code"
    }
  ],
  "name": "VT Code",
  "protocolVersion": 1,
  "version": "0.96.14"
};

// dist-src/index.ts
var agents = {
  "amp-acp": agent,
  "auggie": agent2,
  "autohand": agent3,
  "claude-acp": agent4,
  "cline": agent5,
  "codebuddy-code": agent6,
  "codex-acp": agent7,
  "cortex-code": agent8,
  "corust-agent": agent9,
  "crow-cli": agent10,
  "cursor": agent11,
  "deepagents": agent12,
  "devin": agent13,
  "dimcode": agent14,
  "dirac": agent15,
  "factory-droid": agent16,
  "fast-agent": agent17,
  "gemini": agent18,
  "github-copilot-cli": agent19,
  "glm-acp-agent": agent20,
  "goose": agent21,
  "grok-build": agent22,
  "junie": agent23,
  "kilo": agent24,
  "kimi": agent25,
  "mistral-vibe": agent26,
  "nova": agent27,
  "opencode": agent28,
  "pi-acp": agent29,
  "poolside": agent30,
  "qwen-code": agent31,
  "sigit": agent32,
  "stakpak": agent33,
  "vtcode": agent34
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  agents
});
