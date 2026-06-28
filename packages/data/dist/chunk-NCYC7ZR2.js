// dist-src/agents/gemini.ts
var agent = {
  "agentCapabilities": {
    "loadSession": true
  },
  "agentInfo": {
    "name": "gemini-cli",
    "version": "0.49.0"
  },
  "authMethods": [
    {
      "description": "Log in with your Google account",
      "id": "oauth-personal",
      "name": "Log in with Google"
    }
  ],
  "commands": [
    {
      "description": "Research the codebase",
      "name": "research_codebase"
    }
  ],
  "configOptions": [],
  "currentModeId": "default",
  "id": "gemini",
  "modes": [
    {
      "id": "default",
      "name": "Default"
    }
  ],
  "name": "Gemini CLI",
  "protocolVersion": 1,
  "version": "0.49.0"
};

export {
  agent
};
