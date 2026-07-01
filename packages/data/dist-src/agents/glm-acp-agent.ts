import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
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
  "currentModelId": null,
  "currentReasoningEffortId": null,
  "id": "glm-acp-agent",
  "models": [],
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
  "reasoningEfforts": [],
  "version": "1.1.4"
};
