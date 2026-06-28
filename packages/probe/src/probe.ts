import { spawn } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Readable, Writable } from "node:stream";
import {
  client,
  ndJsonStream,
  PROTOCOL_VERSION,
  RequestError,
} from "@agentclientprotocol/sdk";
import type {
  AvailableCommandsUpdate,
  SessionUpdate,
} from "@agentclientprotocol/sdk";
import type { AgentResult, RegistryAgent } from "./types";
import { resolveRun } from "./install";
import { applyLaunchPatch } from "./launch-adapters";

export interface ProbeOptions {
  cwd: string;
  timeoutMs: number;
  settleMs: number;
  verbose?: boolean;
}

const AUTH_REQUIRED_CODE = -32000;

const DUMMY_KEYS: Record<string, string> = {
  ANTHROPIC_API_KEY: "sk-ant-probe-dummy-key-000000000000000000000",
  OPENAI_API_KEY: "sk-probe-dummy-key-00000000000000000000000000",
  GOOGLE_API_KEY: "AIzaSyProbeDummyKey0000000000000000000",
  GEMINI_API_KEY: "AIzaSyProbeDummyKey0000000000000000000",
  GOOGLE_GENAI_API_KEY: "AIzaSyProbeDummyKey0000000000000000000",
  MOONSHOT_API_KEY: "sk-probe-dummy-key-000000000000000000000",
  ZAI_API_KEY: "sk-probe-dummy-key-000000000000000000000",
  Z_AI_API_KEY: "sk-probe-dummy-key-000000000000000000000",
  ZHIPUAI_API_KEY: "sk-probe-dummy-key-000000000000000000000",
  DEEPSEEK_API_KEY: "sk-probe-dummy-key-000000000000000000000",
  MISTRAL_API_KEY: "sk-probe-dummy-key-000000000000000000000",
  XAI_API_KEY: "xai-probe-dummy-key-000000000000000000000",
  CODEWHISPERER_API_KEY: "probe-dummy",
};

function dummyAuthEnv(): Record<string, string> {
  return process.env.ACP_DUMMY_AUTH === "1" ? { ...DUMMY_KEYS } : {};
}

export function newResult(agent: RegistryAgent): AgentResult {
  return {
    id: agent.id,
    name: agent.name,
    version: agent.version,
    status: "error",
    error: null,
    protocolVersion: null,
    agentInfo: null,
    agentCapabilities: null,
    authMethods: null,
    modes: null,
    currentModeId: null,
    configOptions: null,
    commands: null,
  };
}

export async function probeAgent(agent: RegistryAgent, opts: ProbeOptions): Promise<AgentResult> {
  const result = newResult(agent);

  const resolved = await resolveRun(agent.id, agent.version, agent.distribution);
  if (resolved.kind === "skip") {
    result.status = "skipped";
    result.error = resolved.reason;
    return result;
  }

  const probeRoot = mkdtempSync(join(tmpdir(), `acp-seed-${agent.id}-`));
  const applied = await applyLaunchPatch(agent.id, agent.version, probeRoot);

  const seedEnv: Record<string, string> = {};
  if (process.env.ACP_DUMMY_AUTH === "1") Object.assign(seedEnv, dummyAuthEnv());
  if (applied?.patch.env) Object.assign(seedEnv, applied.patch.env);
  const launchArgs = applied?.patch.args?.length
    ? [...applied.patch.args, ...resolved.args]
    : resolved.args;

  const proc = spawn(resolved.command, launchArgs, {
    cwd: resolved.cwd,
    env: { ...process.env, ...resolved.env, ...seedEnv },
    stdio: ["pipe", "pipe", opts.verbose ? "inherit" : "ignore"],
    detached: true,
  });

  const kill = () => {
    try {
      // Kill the whole process group (npx/binary may spawn grandchildren).
      if (proc.pid) process.kill(-proc.pid, "SIGKILL");
      else proc.kill("SIGKILL");
    } catch {
      try {
        proc.kill("SIGKILL");
      } catch {
        /* already dead */
      }
    }
  };

  let capturedCommands: unknown[] | null = null;

  const app = client({ name: "acp-probe" });

  app.onNotification("session/update", (ctx) => {
    const update = ctx.params.update as SessionUpdate;
    if (update.sessionUpdate === "available_commands_update") {
      const cmds = (update as AvailableCommandsUpdate).availableCommands;
      if (Array.isArray(cmds)) capturedCommands = cmds;
    }
  });

  app.onRequest("session/request_permission", () => ({
    outcome: { outcome: "cancelled" },
  }));

  const input = Readable.toWeb(proc.stdout!) as ReadableStream<Uint8Array>;
  const output = Writable.toWeb(proc.stdin!) as WritableStream<Uint8Array>;
  const stream = ndJsonStream(output, input);

  const work = app.connectWith(stream, async (ctx) => {
    const initResp = await ctx.request("initialize", {
      protocolVersion: PROTOCOL_VERSION,
      clientInfo: { name: "acp-probe", version: "1.0.0" },
      clientCapabilities: {
        fs: { readTextFile: false, writeTextFile: false },
        terminal: false,
      },
    });

    result.protocolVersion = initResp.protocolVersion;
    result.agentInfo = (initResp.agentInfo as { name: string; version: string } | null) ?? null;
    result.agentCapabilities = (initResp.agentCapabilities as Record<string, unknown>) ?? null;
    result.authMethods = initResp.authMethods ?? null;

    try {
      await ctx.buildSession(opts.cwd).withSession(async (session) => {
        const modes = session.modes;
        result.modes = modes?.availableModes ?? null;
        result.currentModeId = modes?.currentModeId ?? null;
        result.configOptions = session.newSessionResponse.configOptions ?? null;

        await sleep(opts.settleMs);
        result.commands = capturedCommands;
      });
      result.status = "ok";
    } catch (e) {
      result.status = isAuthError(e) ? "auth_required" : "error";
      result.error = errMsg(e);
    }
  });

  const timer = setTimeout(() => {
    if (!result.error) result.error = `timed out after ${opts.timeoutMs}ms`;
    kill();
  }, opts.timeoutMs);

  try {
    await work;
  } catch (e) {
    if (!result.error) result.error = errMsg(e);
  } finally {
    clearTimeout(timer);
    kill();
  }

  return result;
}

function isAuthError(e: unknown): boolean {
  if (e instanceof RequestError) {
    return e.code === AUTH_REQUIRED_CODE || /auth/i.test(e.message);
  }
  return (
    typeof e === "object" &&
    e !== null &&
    /auth_required|authentication required/i.test(JSON.stringify(e))
  );
}

function errMsg(e: unknown): string {
  if (e instanceof RequestError) return `ACP error ${e.code}: ${e.message}`;
  if (e instanceof Error) return e.message;
  return String(e);
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}
