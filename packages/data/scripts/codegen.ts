import { existsSync, readFileSync, readdirSync, rmSync, mkdirSync, writeFileSync, copyFileSync } from "node:fs";
import { join } from "node:path";

import type { AgentMetadata } from "../src/types";

interface AgentResult {
  id: string;
  name: string;
  version: string;
  status: string;
  error: string | null;
  protocolVersion: number | null;
  agentInfo: { name: string; version: string } | null;
  agentCapabilities: Record<string, unknown> | null;
  authMethods: unknown[] | null;
  modes: unknown[] | null;
  currentModeId: string | null;
  configOptions: unknown[] | null;
  commands: unknown[] | null;
}

function toMetadata(r: AgentResult): AgentMetadata {
  return {
    id: r.id,
    name: r.name,
    version: r.version,
    protocolVersion: r.protocolVersion ?? 0,
    agentInfo: r.agentInfo ?? { name: r.id, version: r.version },
    agentCapabilities: (r.agentCapabilities ?? {}) as AgentMetadata["agentCapabilities"],
    authMethods: (r.authMethods ?? []) as AgentMetadata["authMethods"],
    modes: (r.modes ?? []) as AgentMetadata["modes"],
    currentModeId: r.currentModeId,
    configOptions: (r.configOptions ?? []) as AgentMetadata["configOptions"],
    commands: (r.commands ?? []) as AgentMetadata["commands"],
  };
}

function stableStringify(obj: unknown): string {
  return JSON.stringify(sortKeys(obj), null, 2);
}

function sortKeys(obj: unknown): unknown {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(sortKeys);
  const sorted: Record<string, unknown> = {};
  for (const key of Object.keys(obj as Record<string, unknown>).sort()) {
    sorted[key] = sortKeys((obj as Record<string, unknown>)[key]);
  }
  return sorted;
}

function loadOkAgents(cacheDir: string): AgentResult[] {
  const files = readdirSync(cacheDir).filter((f) => f.endsWith(".json"));
  const agents: AgentResult[] = [];
  for (const f of files) {
    const raw = readFileSync(join(cacheDir, f), "utf8");
    const parsed = JSON.parse(raw) as AgentResult;
    if (parsed.status === "ok") {
      agents.push(parsed);
    }
  }
  return agents.sort((a, b) => a.id.localeCompare(b.id));
}

function toIdentifier(id: string): string {
  return id.replace(/-/g, "_");
}

export function generatePackage(cacheDir: string, distSrcDir: string, pkgPath: string): void {
  const agents = loadOkAgents(cacheDir);
  if (agents.length === 0) {
    throw new Error("codegen: no ok agents found in cache directory");
  }

  rmSync(distSrcDir, { recursive: true, force: true });
  mkdirSync(join(distSrcDir, "agents"), { recursive: true });

  const srcTypesPath = join(import.meta.dirname, "..", "src", "types.ts");
  copyFileSync(srcTypesPath, join(distSrcDir, "types.ts"));

  for (const r of agents) {
    const m = toMetadata(r);
    const json = stableStringify(m);
    writeFileSync(
      join(distSrcDir, "agents", `${r.id}.ts`),
      `import type { AgentMetadata } from "../types.js";\n\nexport const agent: AgentMetadata = ${json};\n`,
    );
  }

  const importLines = agents
    .map((a) => `import { agent as ${toIdentifier(a.id)} } from "./agents/${a.id}.js";`)
    .join("\n");
  const agentsObj = `{\n${agents.map((a) => `  ${JSON.stringify(a.id)}: ${toIdentifier(a.id)},`).join("\n")}\n}`;
  writeFileSync(
    join(distSrcDir, "index.ts"),
    `${importLines}\n\nexport const agents = ${agentsObj};\n`,
  );

  const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
  const exports: Record<string, unknown> = {
    ".": {
      types: "./dist/index.d.ts",
      import: "./dist/index.js",
      require: "./dist/index.cjs",
    },
    "./types": {
      types: "./dist/types.d.ts",
      import: "./dist/types.js",
      require: "./dist/types.cjs",
    },
  };
  for (const a of agents) {
    exports[`./${a.id}`] = {
      types: `./dist/agents/${a.id}.d.ts`,
      import: `./dist/agents/${a.id}.js`,
      require: `./dist/agents/${a.id}.cjs`,
    };
  }
  exports["./package.json"] = "./package.json";
  pkg.exports = exports;
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
}

if (process.argv[1] && process.argv[1].endsWith("codegen.ts")) {
  const cacheDir = join(import.meta.dirname, "..", "..", "probe", "cache");
  const distSrcDir = join(import.meta.dirname, "..", "dist-src");
  const pkgPath = join(import.meta.dirname, "..", "package.json");
  if (!existsSync(cacheDir)) {
    console.error(`codegen: cache directory not found: ${cacheDir}`);
    console.error("Run the probe first: cd packages/probe && pnpm start");
    process.exit(1);
  }
  generatePackage(cacheDir, distSrcDir, pkgPath);
  console.log(`codegen: generated dist-src/ from ${readdirSync(cacheDir).filter(f => f.endsWith('.json')).length} cache files`);
}
