import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
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
