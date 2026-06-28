"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// dist-src/agents/gemini.ts
var gemini_exports = {};
__export(gemini_exports, {
  agent: () => agent
});
module.exports = __toCommonJS(gemini_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  agent
});
