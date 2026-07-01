import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
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
      "description": "Helps users discover and install agent skills when they ask questions like \"how do I do X\", \"find a skill for X\", or express interest in extending capabilities. (built-in)",
      "name": "find-skills"
    },
    {
      "description": "Creates, edits, and inspects polished PowerPoint decks by generating flexible pptxgenjs code instead of using a rigid slide-schema abstraction. (built-in)",
      "name": "powerpoint"
    },
    {
      "description": "Guides creation of distinctive, production-grade frontend interfaces that avoid generic \"AI slop\" aesthetics. (built-in)",
      "name": "frontend-design"
    }
  ],
  "configOptions": [],
  "currentModeId": "default",
  "currentModelId": null,
  "currentReasoningEffortId": null,
  "id": "nova",
  "models": [],
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
  "reasoningEfforts": [],
  "version": "1.1.21"
};
