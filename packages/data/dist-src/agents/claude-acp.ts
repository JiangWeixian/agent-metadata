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
      "description": "Deep research harness — fan-out web searches, fetch sources, adversarially verify claims, synthesize a cited report. (dynamic workflow)",
      "input": null,
      "name": "deep-research"
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
      "description": "Review the current diff for correctness bugs and reuse/simplification/efficiency cleanups at the given effort level (low/medium: fewer, high-confidence findings; high→max: broader coverage, may include uncertain findings). Pass --comment to post findings as inline PR comments, or --fix to apply the findings to the working tree after the review.",
      "input": {
        "hint": "[low|medium|high|xhigh|max] [--fix] [--comment] [<target>]"
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
      "description": "Run a prompt or slash command on a recurring interval (e.g. /loop 5m /foo, defaults to 10m)",
      "input": {
        "hint": "[interval] <prompt>"
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
      "currentValue": "default",
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
