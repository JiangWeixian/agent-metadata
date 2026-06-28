import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { LaunchAdapter } from "./types";

const DUMMY_KEY = "sk-probe-dummy-000000000000000000000000000000";

/**
 * opencode adapter: writes a dummy auth.json under the isolated probeHome, relying on XDG_DATA_HOME to redirect the data dir.
 * opencode only validates the existence of auth.json at session/new (not its authenticity) → headless modes/commands retrieval works.
 */
export const opencodeLaunchAdapter: LaunchAdapter = {
  agentId: "opencode",
  apply: async ({ probeHome }) => {
    const dataRoot = join(probeHome, "xdg-data");
    const authDir = join(dataRoot, "opencode");
    await mkdir(authDir, { recursive: true });
    await writeFile(
      join(authDir, "auth.json"),
      JSON.stringify({
        anthropic: { type: "api_key", key: DUMMY_KEY },
        openai: { type: "api_key", key: DUMMY_KEY },
      }),
      "utf8",
    );
    return {
      env: { XDG_DATA_HOME: dataRoot },
      note: "opencode: dummy auth.json under isolated XDG_DATA_HOME.",
    };
  },
};
