import { PROTOCOL_VERSION } from "@agentclientprotocol/sdk";
import { mkdtempSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fetchRegistry, DEFAULT_REGISTRY_URL } from "./registry";
import { probeAgent } from "./probe";
import type { AgentResult, ProbeOutput } from "./types";

const REGISTRY_URL = process.env.ACP_REGISTRY_URL ?? DEFAULT_REGISTRY_URL;
const OUTPUT_PATH = process.env.ACP_OUTPUT ?? "acp-capabilities.json";
const TIMEOUT_MS = Number(process.env.ACP_TIMEOUT_MS ?? 90_000);
const SETTLE_MS = Number(process.env.ACP_SETTLE_MS ?? 2_500);
const VERBOSE = process.env.ACP_VERBOSE === "1";
const FILTER = process.env.ACP_AGENTS ? new Set(process.env.ACP_AGENTS.split(",").map((s) => s.trim()).filter(Boolean)) : null;

async function main(): Promise<void> {
  const workdir = mkdtempSync(join(tmpdir(), "acp-probe-"));

  log(`Fetching registry from ${REGISTRY_URL}`);
  const registry = await fetchRegistry(REGISTRY_URL);
  log(`Registry v${registry.version}: ${registry.agents.length} agents`);

  let agents = registry.agents;
  if (FILTER) {
    agents = agents.filter((a) => FILTER.has(a.id));
    log(`Filtered to ${agents.length} agents: ${agents.map((a) => a.id).join(", ")}`);
  }

  const results: AgentResult[] = [];
  for (const agent of agents) {
    log(`\n[${agent.id}] v${agent.version} — probing...`);
    const t0 = Date.now();
    try {
      const result = await probeAgent(agent, {
        cwd: workdir,
        timeoutMs: TIMEOUT_MS,
        settleMs: SETTLE_MS,
        verbose: VERBOSE,
      });
      results.push(result);
      log(`[${agent.id}] -> ${result.status} (${Date.now() - t0}ms)${result.error ? " :: " + result.error : ""}`);
    } catch (e) {
      const result = {
        id: agent.id,
        name: agent.name,
        version: agent.version,
        status: "error" as const,
        error: e instanceof Error ? e.message : String(e),
        protocolVersion: null,
        agentInfo: null,
        agentCapabilities: null,
        authMethods: null,
        modes: null,
        currentModeId: null,
        configOptions: null,
        commands: null,
      };
      results.push(result);
      log(`[${agent.id}] -> error (${Date.now() - t0}ms) :: ${result.error}`);
    }
  }

  const output: ProbeOutput = {
    generatedAt: new Date().toISOString(),
    clientProtocolVersion: PROTOCOL_VERSION,
    registryVersion: registry.version,
    total: results.length,
    ok: results.filter((r) => r.status === "ok").length,
    agents: results,
  };

  await writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2) + "\n");
  log(`\nWrote ${OUTPUT_PATH} (${output.ok}/${output.total} ok)`);

  printSummary(results);
}

function printSummary(results: AgentResult[]): void {
  const byStatus = new Map<string, number>();
  for (const r of results) {
    byStatus.set(r.status, (byStatus.get(r.status) ?? 0) + 1);
  }
  log("\n=== Summary ===");
  for (const [status, count] of byStatus) {
    log(`  ${status}: ${count}`);
  }
  log("\n=== Modes / Commands per agent ===");
  for (const r of results) {
    const modes = Array.isArray(r.modes) ? r.modes.length : 0;
    const cmds = Array.isArray(r.commands) ? r.commands.length : 0;
    log(`  ${r.id.padEnd(22)} ${r.status.padEnd(14)} modes=${modes} commands=${cmds}`);
  }
}

function log(msg: string): void {
  process.stderr.write(msg + "\n");
}

main().catch((e) => {
  process.stderr.write(`Fatal: ${e instanceof Error ? e.stack ?? e.message : String(e)}\n`);
  process.exit(1);
});
