import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
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
