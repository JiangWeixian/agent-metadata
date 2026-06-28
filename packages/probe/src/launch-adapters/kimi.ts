import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { LaunchAdapter } from "./types";

const DUMMY_KEY = "sk-probe-dummy-000000000000000000000000000000";

/**
 * kimi adapter: kimi uses OAuth; credentials are stored in ~/.kimi/credentials/kimi-code.json.
 * resolve_api_key only checks whether the token's expires_at has passed, without verifying its authenticity.
 * Write a dummy token (far-future expires_at) + isolate HOME to probeHome to avoid polluting the real ~/.kimi.
 */
export const kimiLaunchAdapter: LaunchAdapter = {
  agentId: "kimi",
  apply: async ({ probeHome }) => {
    const credDir = join(probeHome, ".kimi", "credentials");
    await mkdir(credDir, { recursive: true });
    await writeFile(
      join(credDir, "kimi-code.json"),
      JSON.stringify({
        access_token: DUMMY_KEY,
        refresh_token: DUMMY_KEY,
        expires_at: 9999999999,
        expires_in: 31536000,
      }),
      "utf8",
    );
    return {
      env: { HOME: probeHome },
      note: "kimi: dummy OAuth token (far-future expiry) + HOME isolation.",
    };
  },
};
