import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { LaunchAdapter } from "./types";

const DUMMY_KEY = "sk-probe-dummy-000000000000000000000000000000";

/**
 * autohand 适配器：底层 CLI 装好后，ACP server 要求 `autohand login`。
 * ensureAuthenticated 读 ~/.autohand/config.json 的 auth.token + auth.expiresAt，
 * 只本地比较 expiresAt < new Date()（不联网验 token 真伪）→ 写假 token + 远未来 expiresAt 即可绕过。
 * 用 HOME 隔离到 probeHome，避免污染真实 ~/.autohand。
 */
export const autohandLaunchAdapter: LaunchAdapter = {
  agentId: "autohand",
  apply: async ({ probeHome }) => {
    const dir = join(probeHome, ".autohand");
    await mkdir(dir, { recursive: true });
    await writeFile(
      join(dir, "config.json"),
      JSON.stringify({
        auth: {
          token: DUMMY_KEY,
          expiresAt: "9999-12-31T00:00:00.000Z",
          userId: "probe-dummy",
        },
      }),
      "utf8",
    );
    return {
      env: { HOME: probeHome },
      note: "autohand: dummy ~/.autohand/config.json {auth:{token,expiresAt:远未来}} under HOME isolation. ensureAuthenticated only checks expiry locally (no network). Requires底层 CLI `autohand` on PATH.",
    };
  },
};
