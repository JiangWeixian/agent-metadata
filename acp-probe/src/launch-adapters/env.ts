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
];
