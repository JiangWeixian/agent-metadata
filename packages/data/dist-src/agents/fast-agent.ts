import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
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
