import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
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
