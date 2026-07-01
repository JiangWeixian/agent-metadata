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
      "close": {},
      "list": {},
      "resume": {}
    }
  },
  "agentInfo": {
    "name": "dimcode",
    "title": "DimCode",
    "version": "0.2.11"
  },
  "authMethods": [],
  "commands": [],
  "configOptions": [
    {
      "category": "mode",
      "currentValue": "agent",
      "id": "mode",
      "name": "Mode",
      "options": [
        {
          "description": "Run with normal agent tool access.",
          "name": "Agent",
          "value": "agent"
        },
        {
          "description": "Plan changes before implementation.",
          "name": "Plan",
          "value": "plan"
        },
        {
          "description": "Keep working toward a session goal.",
          "name": "Goal",
          "value": "goal"
        }
      ],
      "type": "select"
    },
    {
      "category": "model",
      "currentValue": "probe-dummy/probe-dummy-model",
      "id": "model",
      "name": "Model",
      "options": [
        {
          "name": "probe-dummy / probe-dummy-model",
          "value": "probe-dummy/probe-dummy-model"
        }
      ],
      "type": "select"
    },
    {
      "category": "permission",
      "currentValue": "read-only",
      "id": "permission",
      "name": "Permission",
      "options": [
        {
          "description": "Allow read-only filesystem tools and deny writes, network, and process execution.",
          "name": "Read Only",
          "value": "read-only"
        },
        {
          "description": "Allow workspace reads and writes, allow git commands, and ask for other process or network access.",
          "name": "Workspace Write",
          "value": "workspace-write"
        },
        {
          "description": "Allow all tool access without approval prompts.",
          "name": "Full Access",
          "value": "full-access"
        }
      ],
      "type": "select"
    },
    {
      "category": "thought_level",
      "currentValue": "auto",
      "id": "thought_level",
      "name": "Thought Level",
      "options": [
        {
          "name": "Auto",
          "value": "auto"
        }
      ],
      "type": "select"
    }
  ],
  "currentModeId": "agent",
  "currentModelId": "probe-dummy/probe-dummy-model",
  "currentReasoningEffortId": "auto",
  "id": "dimcode",
  "models": [
    {
      "id": "probe-dummy/probe-dummy-model",
      "name": "probe-dummy / probe-dummy-model"
    }
  ],
  "modes": [
    {
      "description": "Run with normal agent tool access.",
      "id": "agent",
      "name": "Agent"
    },
    {
      "description": "Plan changes before implementation.",
      "id": "plan",
      "name": "Plan"
    },
    {
      "description": "Keep working toward a session goal.",
      "id": "goal",
      "name": "Goal"
    }
  ],
  "name": "DimCode",
  "protocolVersion": 1,
  "reasoningEfforts": [
    {
      "id": "auto",
      "name": "Auto"
    }
  ],
  "version": "0.2.11"
};
