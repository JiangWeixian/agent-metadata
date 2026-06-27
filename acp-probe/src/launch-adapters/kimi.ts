import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { LaunchAdapter } from "./types";

const DUMMY_KEY = "sk-probe-dummy-000000000000000000000000000000";

/**
 * kimi 适配器：kimi 走 OAuth，凭证存 ~/.kimi/credentials/kimi-code.json。
 * resolve_api_key 加载 token 时只看 expires_at 是否过期、不验真伪。
 * 写入假 token（expires_at 远未来）+ 用 HOME 隔离到 probeHome，避免污染真实 ~/.kimi。
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
