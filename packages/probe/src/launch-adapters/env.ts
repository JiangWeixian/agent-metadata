import type { LaunchAdapter } from "./types";

const DUMMY_KEY = "sk-probe-dummy-000000000000000000000000000000";
const DUMMY_BASE = "https://api.probe.invalid";
const DUMMY_MODEL = "probe-dummy-model";

export const ENV_LAUNCH_ADAPTERS: LaunchAdapter[] = [
  {
    agentId: "goose",
    apply: () => ({
      env: {
        GOOSE_PROVIDER: "openai",
        GOOSE_PROVIDER__TYPE: "openai",
        GOOSE_PROVIDER__HOST: DUMMY_BASE,
        GOOSE_PROVIDER__API_KEY: DUMMY_KEY,
        GOOSE_MODEL: DUMMY_MODEL,
        GOOSE_FAST_MODEL: DUMMY_MODEL,
        GOOSE_PLANNER_MODEL: DUMMY_MODEL,
      },
    }),
  },
  {
    agentId: "github-copilot-cli",
    apply: () => ({
      env: {
        COPILOT_PROVIDER_TYPE: "openai",
        COPILOT_PROVIDER_BASE_URL: DUMMY_BASE,
        COPILOT_PROVIDER_API_KEY: DUMMY_KEY,
        COPILOT_MODEL: DUMMY_MODEL,
      },
    }),
  },
  {
    agentId: "codebuddy-code",
    apply: () => ({
      env: {
        CODEBUDDY_BASE_URL: DUMMY_BASE,
        CODEBUDDY_API_KEY: DUMMY_KEY,
        CODEBUDDY_MODEL: DUMMY_MODEL,
        CODEBUDDY_BIG_SLOW_MODEL: DUMMY_MODEL,
        CODEBUDDY_SMALL_FAST_MODEL: DUMMY_MODEL,
        CODEBUDDY_CODE_SUBAGENT_MODEL: DUMMY_MODEL,
      },
    }),
  },
  {
    agentId: "qwen-code",
    apply: () => ({
      env: {
        OPENAI_BASE_URL: DUMMY_BASE,
        OPENAI_API_KEY: DUMMY_KEY,
        OPENAI_MODEL: DUMMY_MODEL,
      },
    }),
  },
  {
    agentId: "glm-acp-agent",
    apply: () => ({
      env: {
        ACP_GLM_BASE_URL: DUMMY_BASE,
        Z_AI_API_KEY: DUMMY_KEY,
        ACP_GLM_MODEL: DUMMY_MODEL,
        ACP_GLM_AVAILABLE_MODELS: DUMMY_MODEL,
      },
    }),
  },
  {
    agentId: "deepagents",
    apply: () => ({
      env: {
        DEEPAGENTS_CODE_OPENAI_BASE_URL: DUMMY_BASE,
        DEEPAGENTS_CODE_OPENAI_API_KEY: DUMMY_KEY,
        OPENAI_API_KEY: DUMMY_KEY,
      },
      note: "deepagents model selection may still require user config.",
    }),
  },
  {
    agentId: "auggie",
    apply: () => {
      const session = JSON.stringify({
        accessToken: DUMMY_KEY,
        tenantURL: DUMMY_BASE,
        scopes: ["https://api.augmentcode.com"],
      });
      return {
        env: { AUGMENT_SESSION_AUTH: session },
        note: "auggie: AUGMENT_SESSION_AUTH = fake OAuth session (~/.augment/session.json format: {accessToken, tenantURL, scopes[]}). _parseSessionFromString validates these 3 fields only.",
      };
    },
  },
  {
    agentId: "qoder",
    apply: () => ({
      env: {
        QODER_PERSONAL_ACCESS_TOKEN: DUMMY_KEY,
        QODER_ACCESS_TOKEN: DUMMY_KEY,
        QODER_AUTH_MANAGED_TOKEN: DUMMY_KEY,
      },
      note: "qoder: QODER_PERSONAL_ACCESS_TOKEN env (PAT auth path — 'authenticated with env variable'). QODER_ACCESS_TOKEN is only the bridge/attachment token.",
    }),
  },
  {
    agentId: "cline",
    apply: () => ({
      env: { CLINE_API_KEY: DUMMY_KEY },
      note: "cline: CLINE_API_KEY env (compiled binary, existence check at session/new).",
    }),
  },
  {
    agentId: "gemini",
    apply: () => ({
      env: {
        GOOGLE_GENAI_USE_GCA: "1",
        GOOGLE_CLOUD_ACCESS_TOKEN: DUMMY_KEY,
        GEMINI_API_KEY: "AIzaSyProbeDummyKey0000000000000000000",
      },
      note: "gemini: GOOGLE_GENAI_USE_GCA=1 + GOOGLE_CLOUD_ACCESS_TOKEN bypasses getTokenInfo network validation in initOauthClient; validateAuthMethod is existence-only for LOGIN_WITH_GOOGLE.",
    }),
  },
  {
    agentId: "factory-droid",
    apply: () => ({
      env: { FACTORY_API_KEY: DUMMY_KEY },
      note: "factory-droid: FACTORY_API_KEY env (agent's own auth_required message says 'set a FACTORY_API_KEY environment variable').",
    }),
  },
  {
    agentId: "corust-agent",
    apply: () => ({
      env: { CORUST_API_KEY: DUMMY_KEY },
      note: "corust-agent: CORUST_API_KEY env (binary strings show 'Check your CORUST_API_KEY' + 'auth resolver: no credentials found'; gateway.corust.ai may validate — 急校验 candidate).",
    }),
  },
  {
    agentId: "poolside",
    apply: () => ({
      env: {
        POOLSIDE_API_KEY: DUMMY_KEY,
        POOLSIDE_TOKEN: DUMMY_KEY,
        POOLSIDE_STANDALONE_BASE_URL: DUMMY_BASE,
        POOLSIDE_STANDALONE_MODEL: DUMMY_MODEL,
      },
      note: "poolside: POOLSIDE_API_KEY + POOLSIDE_STANDALONE_* env. Standalone mode avoids the cloud tenant requirement (otherwise Internal error). authMethods=[] but API-key + standalone path works.",
    }),
  },
];
