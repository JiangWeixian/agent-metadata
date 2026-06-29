/**
 * Shared dummy auth/config values for headless probing.
 *
 * Two layers:
 *  - {@link BASELINE_DUMMY_ENV}: provider keys injected into EVERY agent when
 *    `ACP_DUMMY_AUTH=1`. Each value mimics the provider's expected key format
 *    so agents that format-validate pass.
 *  - {@link DUMMY_KEY} / {@link DUMMY_BASE} / {@link DUMMY_MODEL}: generic
 *    placeholders reused by per-agent launch adapters for bespoke token /
 *    base-url / model fields.
 *
 * Keep all dummy env literals here so there is a single source of truth.
 */

/** Placeholder base URL pointing nowhere real. */
export const DUMMY_BASE = 'https://api.probe.invalid'

/** Placeholder model id. */
export const DUMMY_MODEL = 'probe-dummy-model'

/** Generic placeholder for agent-specific token fields (no format requirement). */
export const DUMMY_KEY = 'sk-probe-dummy-000000000000000000000000000000'

/** Google-style key placeholder (AIzaSy prefix) reused by the gemini adapter and baseline. */
export const DUMMY_GOOGLE_KEY = 'AIzaSyProbeDummyKey0000000000000000000'

/**
 * Baseline provider keys applied to every probe when `ACP_DUMMY_AUTH=1`.
 * Each value mimics the provider's key format so format-validation passes.
 */
export const BASELINE_DUMMY_ENV: Record<string, string> = {
  ANTHROPIC_API_KEY: 'sk-ant-probe-dummy-key-000000000000000000000',
  OPENAI_API_KEY: 'sk-probe-dummy-key-00000000000000000000000000',
  GOOGLE_API_KEY: DUMMY_GOOGLE_KEY,
  GEMINI_API_KEY: DUMMY_GOOGLE_KEY,
  GOOGLE_GENAI_API_KEY: DUMMY_GOOGLE_KEY,
  MOONSHOT_API_KEY: 'sk-probe-dummy-key-000000000000000000000',
  ZAI_API_KEY: 'sk-probe-dummy-key-000000000000000000000',
  Z_AI_API_KEY: 'sk-probe-dummy-key-000000000000000000000',
  ZHIPUAI_API_KEY: 'sk-probe-dummy-key-000000000000000000000',
  DEEPSEEK_API_KEY: 'sk-probe-dummy-key-000000000000000000000',
  MISTRAL_API_KEY: 'sk-probe-dummy-key-000000000000000000000',
  XAI_API_KEY: 'xai-probe-dummy-key-000000000000000000000',
  CODEWHISPERER_API_KEY: 'probe-dummy',
}
