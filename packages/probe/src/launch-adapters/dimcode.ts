import { mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import type { LaunchAdapter } from "./types";

const DUMMY_KEY = "sk-probe-dummy-000000000000000000000000000000";
const DUMMY_BASE = "https://api.probe.invalid";
const DUMMY_MODEL = "probe-dummy-model";

/**
 * dimcode 适配器：ACP 报 "Provider credentials are required"。
 * 需 `~/.dimcode/v2/` 下有 SQLite provider 记录 + config.json 的 defaultProvider。
 * 纯写 config.json 不够（provider 详情在 SQLite）→ 用 `npx dimcode provider add/switch` 预配置
 * （npx 自己装 dimcode，无需全局 dim）。用 HOME 隔离到 probeHome，避免污染真实 ~/.dimcode。
 * session/new 只查 provider 已配（不联网验 key 真伪）→ dummy provider 即可。
 */
export const dimcodeLaunchAdapter: LaunchAdapter = {
  agentId: "dimcode",
  apply: async ({ probeHome }) => {
    const dimDir = join(probeHome, ".dimcode");
    if (existsSync(dimDir)) await rm(dimDir, { recursive: true, force: true });
    await mkdir(probeHome, { recursive: true });

    const run = (args: string[]) =>
      spawnSync("npx", ["--yes", "dimcode@0.2.11", ...args], {
        env: { ...process.env, HOME: probeHome },
        stdio: ["ignore", "pipe", "pipe"],
        timeout: 120_000,
      });

    run([
      "provider",
      "add",
      "probe-dummy",
      "--api-key",
      DUMMY_KEY,
      "--base-url",
      DUMMY_BASE,
      "--model",
      DUMMY_MODEL,
      "--adapter",
      "openai",
    ]);
    run(["provider", "switch", "probe-dummy"]);

    return {
      env: { HOME: probeHome, OPENAI_API_KEY: DUMMY_KEY },
      note: "dimcode: pre-configured dummy provider via `npx dimcode provider add/switch` under HOME isolation. session/new only checks provider configured (no network key validation).",
    };
  },
};
