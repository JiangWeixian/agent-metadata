import type { AgentMetadata } from "../types.js";

export const agent: AgentMetadata = {
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
      "description": "Create, write, or improve a skill for corust-agent. Use this skill whenever the user wants to make a new skill, edit an existing skill's SKILL.md, improve a skill's description, add bundled scripts or references to a skill, figure out where to install a skill, or understand how skills work in corust. Also trigger when the user asks \"how do I add a skill\", \"can you turn this workflow into a skill\", \"what should go in SKILL.md\", or \"my skill isn't triggering correctly\".",
      "input": null,
      "name": "skill-creator"
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
