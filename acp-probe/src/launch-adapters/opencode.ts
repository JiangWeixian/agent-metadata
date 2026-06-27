import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { LaunchAdapter } from "./types";

const DUMMY_KEY = "sk-probe-dummy-000000000000000000000000000000";

/**
 * opencode 适配器：在隔离 probeHome 下写假 auth.json，靠 XDG_DATA_HOME 重定向数据目录。
 * opencode 在 session/new 只校验 auth.json 存在性、不验真伪 → 可 headless 拿 modes/commands。
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
