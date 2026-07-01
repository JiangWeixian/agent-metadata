import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
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
  "currentModelId": null,
  "currentReasoningEffortId": null,
  "id": "auggie",
  "models": [],
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
  "reasoningEfforts": [],
  "version": "0.31.0"
};
