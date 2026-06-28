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
