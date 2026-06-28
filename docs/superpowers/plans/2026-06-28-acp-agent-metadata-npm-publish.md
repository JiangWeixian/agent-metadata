# acp-agent-metadata npm 包发布 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the repo into a pnpm workspace with two packages — a private probe tool and a publishable `acp-agent-metadata` data package — and wire up CI to auto-generate typed JS modules from probe output and publish via changesets with date-based versioning.

**Architecture:** pnpm workspace at repo root. `packages/probe/` is the existing acp-probe (moved, private). `packages/data/` is new — a codegen script reads `packages/probe/cache/*.json` (ok agents only), emits `dist/` as typed ESM+CJS modules with per-agent subpath exports, and rewrites `package.json` exports. CI runs probe → codegen → opens a PR with data + changeset. Changesets orchestrates release; a `set-date-version` script overrides the semver bump to `YYYY.MDD.P` before publish.

**Tech Stack:** pnpm 11.9.0, Node 22, TypeScript 5.9, tsx, vitest, @agentclientprotocol/sdk, @changesets/cli, changesets/action, ESLint (@aiou/eslint-config), husky, lint-staged, commitizen.

---

## File Structure

### Files to create

| File | Responsibility |
|------|---------------|
| `pnpm-workspace.yaml` | Declare workspace packages |
| `package.json` (root) | Workspace-level scripts (build, ci:*, lint, prepare), packageManager lock, devDeps |
| `.node-version` | Pin Node 22 |
| `eslint.config.mjs` | ESLint config (from ci skill) |
| `.lintstagedrc` | lint-staged config (from ci skill) |
| `.czrc` | commitizen config (from ci skill) |
| `.husky/pre-commit` | husky hook: lint-staged (from ci skill) |
| `.husky/pre-merge` | husky hook: auto-install (from ci skill) |
| `.changeset/config.json` | changesets config (from ci skill, baseBranch→main) |
| `.changeset/README.md` | changesets readme (from ci skill) |
| `.github/workflows/ci.yml` | lint + typecheck on PR (from ci skill) |
| `.github/workflows/probe.yml` | **rewrite**: probe → codegen → open PR |
| `.github/workflows/release.yml` | changesets action + set-date-version + publish (from ci skill, modified) |
| `.github/workflows/snapshot-release.yml` | manual snapshot publish (from ci skill) |
| `.github/PULL_REQUEST_TEMPLATE.md` | PR template (from ci skill) |
| `.github/ISSUE_TEMPLATE/bug_report.md` | bug template (from ci skill) |
| `.github/ISSUE_TEMPLATE/feature_request.md` | feature template (from ci skill) |
| `packages/probe/package.json` | moved from `acp-probe/`, private:true, pnpm@11.9.0 |
| `packages/probe/tsconfig.json` | moved from `acp-probe/` |
| `packages/probe/.gitignore` | moved from `acp-probe/`, cache paths updated |
| `packages/data/package.json` | name: acp-agent-metadata, exports map (codegen-generated) |
| `packages/data/tsconfig.json` | TS config for data package |
| `packages/data/src/types.ts` | `AgentMetadata` interface + SDK type re-exports |
| `packages/data/scripts/codegen.ts` | core codegen: read cache → emit dist/ + rewrite exports |
| `packages/data/scripts/codegen.test.ts` | vitest tests for codegen |
| `packages/data/scripts/set-date-version.ts` | override package.json version to YYYY.MDD.P |
| `packages/data/.gitignore` | ignore node_modules only (dist/ is committed) |

### Files to move (acp-probe/ → packages/probe/)

All files under `acp-probe/src/` move to `packages/probe/src/` unchanged. The `acp-probe/` directory is removed after moving.

---

## Task 1: Restructure repo into pnpm workspace + move probe

**Files:**
- Create: `pnpm-workspace.yaml`
- Create: `package.json` (root)
- Create: `.node-version`
- Create: `packages/probe/package.json` (from `acp-probe/package.json`, modified)
- Create: `packages/probe/tsconfig.json` (copy of `acp-probe/tsconfig.json`)
- Create: `packages/probe/.gitignore` (from `acp-probe/.gitignore`, paths updated)
- Move: `acp-probe/src/` → `packages/probe/src/`
- Move: `acp-probe/.github/` → `.github/` (probe.yml will be rewritten in Task 7)
- Delete: `acp-probe/` (after move)

- [ ] **Step 1: Create `pnpm-workspace.yaml`**

```yaml
packages:
  - "packages/*"
```

- [ ] **Step 2: Create root `package.json`**

```json
{
  "name": "agent-metadata",
  "private": true,
  "type": "module",
  "packageManager": "pnpm@11.9.0",
  "scripts": {
    "build": "pnpm --filter acp-agent-metadata run codegen",
    "ci:version": "pnpm changeset version",
    "ci:publish": "pnpm --filter acp-agent-metadata run set-date-version && pnpm changeset publish",
    "ci:snapshot": "pnpm changeset version --snapshot snapshot",
    "ci:prerelease": "pnpm run build && pnpm changeset publish --no-git-tag --tag snapshot",
    "lint:fix": "eslint . --fix",
    "prepare": "husky install"
  },
  "devDependencies": {}
}
```

- [ ] **Step 3: Create `.node-version`**

```
22
```

- [ ] **Step 4: Create `packages/probe/package.json`**

Based on `acp-probe/package.json` but with `private: true` and pnpm 11.9.0:

```json
{
  "name": "@agent-metadata/probe",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "start": "tsx src/index.ts",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@agentclientprotocol/sdk": "^1.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "tsx": "^4.19.0",
    "typescript": "^5.6.0"
  },
  "pnpm": {
    "onlyBuiltDependencies": [
      "esbuild"
    ]
  }
}
```

- [ ] **Step 5: Create `packages/probe/tsconfig.json`**

Copy `acp-probe/tsconfig.json` verbatim:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "types": ["node"],
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "noEmit": true,
    "lib": ["ES2022"],
    "allowImportingTsExtensions": true
  },
  "include": ["src/**/*.ts"]
}
```

- [ ] **Step 6: Create `packages/probe/.gitignore`**

```gitignore
node_modules/
.acp-cache/
cache/
*.log
```

- [ ] **Step 7: Move `acp-probe/src/` to `packages/probe/src/`**

```bash
mkdir -p packages/probe
git mv acp-probe/src packages/probe/src
```

- [ ] **Step 8: Move `acp-probe/.github/` to root `.github/`**

```bash
git mv acp-probe/.github .github
```

- [ ] **Step 9: Move `acp-probe/plan.md` to `packages/probe/plan.md`**

```bash
git mv acp-probe/plan.md packages/probe/plan.md
```

- [ ] **Step 10: Remove the old `acp-probe/` directory**

```bash
git rm -r acp-probe/pnpm-lock.yaml acp-probe/package.json acp-probe/tsconfig.json acp-probe/.gitignore
```

Then remove any leftover files (cache, .acp-cache, acp-capabilities.json are gitignored so won't be in git, but clean the directory):

```bash
rm -rf acp-probe
```

- [ ] **Step 11: Update root `.gitignore`**

Create or overwrite root `.gitignore`:

```gitignore
node_modules/
*.log
```

Note: `packages/probe/cache/` and `packages/probe/.acp-cache/` are covered by `packages/probe/.gitignore`. `packages/data/dist/` is NOT ignored (committed to git).

- [ ] **Step 12: Install pnpm 11.9.0 and reinstall**

```bash
corepack enable
corepack prepare pnpm@11.9.0 --activate
pnpm install
```

Expected: pnpm detects workspace, installs deps for `packages/probe/`, creates root `pnpm-lock.yaml` (lockfile v11).

- [ ] **Step 13: Verify probe still works**

```bash
cd packages/probe && pnpm typecheck
```

Expected: PASS (no type errors).

- [ ] **Step 14: Commit**

```bash
git add -A
git commit -m "refactor: restructure into pnpm workspace, move probe to packages/probe"
```

---

## Task 2: Run ci skill for DX tooling

**Files:**
- Create: `.changeset/config.json`
- Create: `.changeset/README.md`
- Create: `.github/workflows/ci.yml`
- Create: `.github/workflows/release.yml` (will be modified in Task 8)
- Create: `.github/workflows/snapshot-release.yml`
- Create: `.github/PULL_REQUEST_TEMPLATE.md`
- Create: `.github/ISSUE_TEMPLATE/bug_report.md`
- Create: `.github/ISSUE_TEMPLATE/feature_request.md`
- Create: `.husky/pre-commit`
- Create: `.husky/pre-merge`
- Create: `.lintstagedrc`
- Create: `.czrc`
- Create: `eslint.config.mjs`
- Modify: root `package.json` (merge scripts + devDeps from ci skill)

- [ ] **Step 1: Run the ci skill with --force**

```bash
# The ci skill is available at .agents/skills/ci/
# It detects JS project + pnpm, copies assets, edits package.json
# Run it with --force to skip prompts
```

Invoke the `ci` skill (from opencode's skill system) with `--force`. This copies all the DX assets (eslint, husky, lint-staged, changesets, workflows, templates) and merges scripts + devDependencies into root `package.json`.

- [ ] **Step 2: Fix `.changeset/config.json` baseBranch**

After ci skill runs, edit `.changeset/config.json`:

```json
{
  "$schema": "https://unpkg.com/@changesets/config@3.1.4/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "linked": [],
  "access": "public",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": []
}
```

The only change from the ci skill default is `baseBranch: "main"` (ci skill defaults to `"master"`).

- [ ] **Step 3: Verify root package.json has merged scripts**

Check that root `package.json` now has both the workspace scripts (from Task 1) AND the ci skill scripts (`lint:fix`, `prepare`, `ci:version`, `ci:publish`, `ci:snapshot`, `ci:prerelease`). The ci skill should have merged `devDependencies` for `@changesets/cli`, `husky`, `lint-staged`, `eslint`, `@aiou/eslint-config`, `cz-emoji`, `typescript`.

If the ci skill overwrote the workspace scripts, re-merge them. The final root `package.json` scripts should be:

```json
{
  "scripts": {
    "build": "pnpm --filter acp-agent-metadata run codegen",
    "ci:version": "pnpm changeset version",
    "ci:publish": "pnpm --filter acp-agent-metadata run set-date-version && pnpm changeset publish",
    "ci:snapshot": "pnpm changeset version --snapshot snapshot",
    "ci:prerelease": "pnpm run build && pnpm changeset publish --no-git-tag --tag snapshot",
    "lint:fix": "eslint . --fix",
    "prepare": "husky install"
  }
}
```

- [ ] **Step 4: Make husky scripts executable**

```bash
chmod +x .husky/pre-commit .husky/pre-merge
```

- [ ] **Step 5: Install dependencies**

```bash
pnpm install
```

Expected: installs `@changesets/cli`, `husky`, `lint-staged`, `eslint`, `@aiou/eslint-config`, `cz-emoji` etc.

- [ ] **Step 6: Verify husky installed**

```bash
npx husky install
```

Expected: `.husky/_/` directory created.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: setup ci tooling (eslint, husky, changesets, commitizen)"
```

---

## Task 3: Create data package scaffold + types

**Files:**
- Create: `packages/data/package.json`
- Create: `packages/data/tsconfig.json`
- Create: `packages/data/.gitignore`
- Create: `packages/data/src/types.ts`

- [ ] **Step 1: Create `packages/data/package.json`**

```json
{
  "name": "acp-agent-metadata",
  "version": "0.0.0",
  "description": "Type-safe ACP agent capability metadata (modes, commands, auth methods)",
  "type": "module",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    },
    "./types": {
      "types": "./dist/types.d.ts",
      "import": "./dist/types.js",
      "require": "./dist/types.cjs"
    },
    "./package.json": "./package.json"
  },
  "files": [
    "dist",
    "package.json"
  ],
  "scripts": {
    "codegen": "tsx scripts/codegen.ts",
    "set-date-version": "tsx scripts/set-date-version.ts",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@agentclientprotocol/sdk": "^1.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "tsx": "^4.19.0",
    "typescript": "^5.6.0",
    "vitest": "^2.0.0"
  },
  "pnpm": {
    "onlyBuiltDependencies": [
      "esbuild"
    ]
  }
}
```

Note: `exports` starts with only `.` and `./types` — the per-agent entries are added by codegen in Task 5. `version: "0.0.0"` is the initial placeholder; changesets + set-date-version handle real versioning.

- [ ] **Step 2: Create `packages/data/tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "types": ["node"],
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "noEmit": true,
    "lib": ["ES2022"],
    "allowImportingTsExtensions": true
  },
  "include": ["src/**/*.ts", "scripts/**/*.ts"]
}
```

- [ ] **Step 3: Create `packages/data/.gitignore`**

```gitignore
node_modules/
*.log
```

Note: `dist/` is NOT in `.gitignore` — it is committed to git as the package's published source.

- [ ] **Step 4: Create `packages/data/src/types.ts`**

```ts
import type {
  SessionMode,
  AvailableCommand,
  AuthMethod,
  AgentCapabilities,
  ConfigOption,
} from "@agentclientprotocol/sdk";

export type {
  SessionMode,
  AvailableCommand,
  AuthMethod,
  AgentCapabilities,
  ConfigOption,
};

export interface AgentMetadata {
  id: string;
  name: string;
  version: string;
  protocolVersion: number;
  agentInfo: { name: string; version: string };
  agentCapabilities: AgentCapabilities;
  authMethods: AuthMethod[];
  modes: SessionMode[];
  currentModeId: string | null;
  configOptions: ConfigOption[];
  commands: AvailableCommand[];
}
```

- [ ] **Step 5: Install dependencies**

```bash
pnpm install
```

Expected: installs deps for `packages/data/` including `vitest`.

- [ ] **Step 6: Verify typecheck passes**

```bash
cd packages/data && pnpm typecheck
```

Expected: PASS (no type errors — `types.ts` only declares interfaces).

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: scaffold acp-agent-metadata data package with AgentMetadata type"
```

---

## Task 4: Implement codegen — field mapping + file emission

This is the core task. We TDD it: write tests first, then implement.

**Files:**
- Create: `packages/data/scripts/codegen.ts`
- Create: `packages/data/scripts/codegen.test.ts`
- Create: `packages/data/scripts/fixtures/gemini.json` (test fixture)
- Create: `packages/data/scripts/fixtures/qoder.json` (test fixture — auth_required, should be filtered out)

- [ ] **Step 1: Create test fixtures**

Create `packages/data/scripts/fixtures/gemini.json` — a minimal ok agent:

```json
{
  "id": "gemini",
  "name": "Gemini CLI",
  "version": "0.49.0",
  "status": "ok",
  "error": null,
  "protocolVersion": 1,
  "agentInfo": {
    "name": "gemini-cli",
    "version": "0.49.0"
  },
  "agentCapabilities": {
    "loadSession": true
  },
  "authMethods": [
    {
      "id": "oauth-personal",
      "name": "Log in with Google",
      "description": "Log in with your Google account"
    }
  ],
  "modes": [
    {
      "id": "default",
      "name": "Default"
    }
  ],
  "currentModeId": "default",
  "configOptions": [],
  "commands": [
    {
      "name": "research_codebase",
      "description": "Research the codebase"
    }
  ]
}
```

Create `packages/data/scripts/fixtures/qoder.json` — an auth_required agent (should be filtered out):

```json
{
  "id": "qoder",
  "name": "Qoder CLI",
  "version": "0.2.14",
  "status": "auth_required",
  "error": "ACP error -32000: Authentication required",
  "protocolVersion": 1,
  "agentInfo": { "name": "qodercli", "version": "0.2.14" },
  "agentCapabilities": null,
  "authMethods": null,
  "modes": null,
  "currentModeId": null,
  "configOptions": null,
  "commands": null
}
```

- [ ] **Step 2: Write the failing test — `packages/data/scripts/codegen.test.ts`**

```ts
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { existsSync, readFileSync, rmSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { generatePackage } from "./codegen";

const FIXTURES_DIR = join(import.meta.dirname, "fixtures");
const TMP_CACHE = join(import.meta.dirname, "..", "tmp-test-cache");
const TMP_DIST = join(import.meta.dirname, "..", "tmp-test-dist");
const TMP_PKG = join(import.meta.dirname, "..", "tmp-test-package.json");

describe("codegen", () => {
  beforeEach(() => {
    // Copy fixtures to tmp cache dir
    rmSync(TMP_CACHE, { recursive: true, force: true });
    rmSync(TMP_DIST, { recursive: true, force: true });
    mkdirSync(TMP_CACHE, { recursive: true });
    const fs = require("node:fs");
    for (const f of fs.readdirSync(FIXTURES_DIR)) {
      fs.copyFileSync(join(FIXTURES_DIR, f), join(TMP_CACHE, f));
    }
  });

  afterEach(() => {
    rmSync(TMP_CACHE, { recursive: true, force: true });
    rmSync(TMP_DIST, { recursive: true, force: true });
    try { rmSync(TMP_PKG, { force: true }); } catch {}
  });

  it("emits dist/agents/<id>.js for ok agents only", () => {
    generatePackage(TMP_CACHE, TMP_DIST, TMP_PKG);
    expect(existsSync(join(TMP_DIST, "agents", "gemini.js"))).toBe(true);
    expect(existsSync(join(TMP_DIST, "agents", "gemini.cjs"))).toBe(true);
    expect(existsSync(join(TMP_DIST, "agents", "gemini.d.ts"))).toBe(true);
    // qoder is auth_required — should NOT appear
    expect(existsSync(join(TMP_DIST, "agents", "qoder.js"))).toBe(false);
  });

  it("emits dist/types.{js,cjs,d.ts}", () => {
    generatePackage(TMP_CACHE, TMP_DIST, TMP_PKG);
    expect(existsSync(join(TMP_DIST, "types.js"))).toBe(true);
    expect(existsSync(join(TMP_DIST, "types.cjs"))).toBe(true);
    expect(existsSync(join(TMP_DIST, "types.d.ts"))).toBe(true);
  });

  it("emits dist/index.{js,cjs,d.ts} with agents object", () => {
    generatePackage(TMP_CACHE, TMP_DIST, TMP_PKG);
    expect(existsSync(join(TMP_DIST, "index.js"))).toBe(true);
    expect(existsSync(join(TMP_DIST, "index.cjs"))).toBe(true);
    expect(existsSync(join(TMP_DIST, "index.d.ts"))).toBe(true);
    const indexJs = readFileSync(join(TMP_DIST, "index.js"), "utf8");
    expect(indexJs).toContain("gemini");
    expect(indexJs).not.toContain("qoder");
  });

  it("generated agent data does not contain status or error fields", () => {
    generatePackage(TMP_CACHE, TMP_DIST, TMP_PKG);
    const agentJs = readFileSync(join(TMP_DIST, "agents", "gemini.js"), "utf8");
    expect(agentJs).not.toContain("status");
    expect(agentJs).not.toContain("error");
  });

  it("generated agent .d.ts declares correct type", () => {
    generatePackage(TMP_CACHE, TMP_DIST, TMP_PKG);
    const dts = readFileSync(join(TMP_DIST, "agents", "gemini.d.ts"), "utf8");
    expect(dts).toContain("export declare const agent: AgentMetadata");
  });

  it("rewrites package.json exports with ok agent subpaths", () => {
    generatePackage(TMP_CACHE, TMP_DIST, TMP_PKG);
    const pkg = JSON.parse(readFileSync(TMP_PKG, "utf8"));
    expect(pkg.exports["./gemini"]).toBeDefined();
    expect(pkg.exports["./gemini"].import).toBe("./dist/agents/gemini.js");
    expect(pkg.exports["./qoder"]).toBeUndefined();
  });

  it("is idempotent — running twice produces identical output", () => {
    generatePackage(TMP_CACHE, TMP_DIST, TMP_PKG);
    const firstRun = readFileSync(join(TMP_DIST, "agents", "gemini.js"), "utf8");
    generatePackage(TMP_CACHE, TMP_DIST, TMP_PKG);
    const secondRun = readFileSync(join(TMP_DIST, "agents", "gemini.js"), "utf8");
    expect(secondRun).toBe(firstRun);
  });

  it("throws when no ok agents found", () => {
    rmSync(TMP_CACHE, { recursive: true, force: true });
    mkdirSync(TMP_CACHE, { recursive: true });
    // Only put the auth_required fixture
    const fs = require("node:fs");
    fs.copyFileSync(join(FIXTURES_DIR, "qoder.json"), join(TMP_CACHE, "qoder.json"));
    expect(() => generatePackage(TMP_CACHE, TMP_DIST, TMP_PKG)).toThrow();
  });
});
```

- [ ] **Step 3: Run tests to verify they fail**

```bash
cd packages/data && npx vitest run scripts/codegen.test.ts
```

Expected: FAIL — `generatePackage` is not defined (module not found).

- [ ] **Step 4: Implement `packages/data/scripts/codegen.ts`**

```ts
import { existsSync, readFileSync, readdirSync, rmSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import type { AgentMetadata } from "../src/types";

/**
 * The probe's AgentResult shape (subset — we only read the fields we need).
 * This mirrors packages/probe/src/types.ts but is kept local to avoid
 * a cross-package dependency. The probe package is private and not a
 * workspace dependency of the data package.
 */
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

/**
 * Map an AgentResult to AgentMetadata via explicit whitelist.
 * Drops status/error. Null fields get defensive defaults.
 */
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

/**
 * Stable JSON serialization: keys sorted alphabetically, 2-space indent.
 * Ensures idempotent output for diff detection.
 */
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

/**
 * Load all ok agent results from a cache directory.
 */
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

/**
 * Generate the entire dist/ directory + rewrite package.json exports.
 *
 * @param cacheDir - path to packages/probe/cache/ (contains <id>.json files)
 * @param distDir  - path to packages/data/dist/
 * @param pkgPath  - path to packages/data/package.json (exports map rewritten)
 */
export function generatePackage(cacheDir: string, distDir: string, pkgPath: string): void {
  const agents = loadOkAgents(cacheDir);
  if (agents.length === 0) {
    throw new Error("codegen: no ok agents found in cache directory");
  }

  // Clean dist
  rmSync(distDir, { recursive: true, force: true });
  mkdirSync(join(distDir, "agents"), { recursive: true });

  // 1. Emit types.js / types.cjs / types.d.ts
  const typesDts = `export type { SessionMode, AvailableCommand, AuthMethod, AgentCapabilities, ConfigOption } from "@agentclientprotocol/sdk";\nimport type { SessionMode, AvailableCommand, AuthMethod, AgentCapabilities, ConfigOption } from "@agentclientprotocol/sdk";\nexport interface AgentMetadata {\n  id: string;\n  name: string;\n  version: string;\n  protocolVersion: number;\n  agentInfo: { name: string; version: string };\n  agentCapabilities: AgentCapabilities;\n  authMethods: AuthMethod[];\n  modes: SessionMode[];\n  currentModeId: string | null;\n  configOptions: ConfigOption[];\n  commands: AvailableCommand[];\n}\n`;
  writeFileSync(join(distDir, "types.d.ts"), typesDts);
  writeFileSync(join(distDir, "types.js"), `// Type-only module — no runtime exports\nexport {};\n`);
  writeFileSync(join(distDir, "types.cjs"), `// Type-only module — no runtime exports\nmodule.exports = {};\n`);

  // 2. Emit per-agent files
  for (const r of agents) {
    const m = toMetadata(r);
    const json = stableStringify(m);

    // ESM
    writeFileSync(
      join(distDir, "agents", `${r.id}.js`),
      `export const agent = ${json};\n`,
    );
    // CJS
    writeFileSync(
      join(distDir, "agents", `${r.id}.cjs`),
      `const agent = ${json};\nmodule.exports = { agent };\n`,
    );
    // d.ts
    writeFileSync(
      join(distDir, "agents", `${r.id}.d.ts`),
      `import type { AgentMetadata } from "../types.js";\nexport declare const agent: AgentMetadata;\n`,
    );
  }

  // 3. Emit index.js (ESM)
  const importLines = agents.map((a) => `import { agent as ${a.id.replace(/-/g, "_")} } from "./agents/${a.id}.js";`).join("\n");
  const agentsObj = `{\n${agents.map((a) => `  ${JSON.stringify(a.id)}: ${a.id.replace(/-/g, "_")},`).join("\n")}\n}`;
  writeFileSync(
    join(distDir, "index.js"),
    `${importLines}\n\nexport const agents = ${agentsObj};\n`,
  );

  // 4. Emit index.cjs (CJS)
  const requireLines = agents.map((a) => `const ${a.id.replace(/-/g, "_")} = require("./agents/${a.id}.cjs").agent;`).join("\n");
  writeFileSync(
    join(distDir, "index.cjs"),
    `${requireLines}\n\nconst agents = ${agentsObj};\nmodule.exports = { agents };\n`,
  );

  // 5. Emit index.d.ts
  writeFileSync(
    join(distDir, "index.d.ts"),
    `import type { AgentMetadata } from "./types.js";\nexport declare const agents: Record<string, AgentMetadata>;\nexport type { AgentMetadata } from "./types.js";\n`,
  );

  // 6. Rewrite package.json exports
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

// CLI entrypoint — run when executed directly
if (process.argv[1] && process.argv[1].endsWith("codegen.ts")) {
  const cacheDir = join(import.meta.dirname, "..", "..", "probe", "cache");
  const distDir = join(import.meta.dirname, "..", "dist");
  const pkgPath = join(import.meta.dirname, "..", "package.json");
  if (!existsSync(cacheDir)) {
    console.error(`codegen: cache directory not found: ${cacheDir}`);
    console.error("Run the probe first: cd packages/probe && pnpm start");
    process.exit(1);
  }
  generatePackage(cacheDir, distDir, pkgPath);
  console.log(`codegen: generated dist/ from ${readdirSync(cacheDir).filter(f => f.endsWith('.json')).length} cache files`);
}
```

- [ ] **Step 5: Run tests to verify they pass**

```bash
cd packages/data && npx vitest run scripts/codegen.test.ts
```

Expected: PASS — all 8 tests pass.

- [ ] **Step 6: Run codegen against real cache (if available)**

```bash
cd packages/data && pnpm codegen
```

Expected: generates `dist/` with 33 agent files + `index.*` + `types.*` + rewrites `package.json` exports. If `packages/probe/cache/` doesn't exist (CI fresh), this will error — that's expected. For local testing, ensure probe has been run at least once.

- [ ] **Step 7: Verify generated dist typechecks**

```bash
cd packages/data && pnpm typecheck
```

Expected: PASS.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: implement codegen — generate typed dist/ from probe cache"
```

---

## Task 5: Implement set-date-version script

**Files:**
- Create: `packages/data/scripts/set-date-version.ts`

- [ ] **Step 1: Implement `packages/data/scripts/set-date-version.ts`**

```ts
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Compute the date-based version: YYYY.MDD.P
 * - YYYY: 4-digit year
 * - MDD: month (no leading zero) + zero-padded day (e.g. June 27 = 627)
 * - P: patch slot (starts at 0, increments if same-day re-release)
 *
 * Examples: 2026.627.0, 2026.627.1, 2026.1201.0
 *
 * This format is semver-valid (no leading zeros in numeric identifiers,
 * exactly 3 numeric components).
 */
function computeDateVersion(date: Date, patch: number): string {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1; // 1-12, no leading zero
  const day = String(date.getUTCDate()).padStart(2, "0"); // 01-31
  return `${year}.${month}${day}.${patch}`;
}

/**
 * Check if a version already exists on npm for this package.
 * Returns true if the version exists (404 means it doesn't).
 */
async function versionExistsOnNpm(pkgName: string, version: string): Promise<boolean> {
  try {
    const res = await fetch(`https://registry.npmjs.org/${pkgName}/${version}`);
    return res.ok;
  } catch {
    // Network error — assume not found, let publish fail later if wrong
    return false;
  }
}

/**
 * Find the next available patch slot for today's date.
 * Starts at 0, increments until it finds a version not on npm.
 */
async function nextDateVersion(pkgName: string, date: Date): Promise<string> {
  for (let patch = 0; patch < 100; patch++) {
    const version = computeDateVersion(date, patch);
    if (!(await versionExistsOnNpm(pkgName, version))) {
      return version;
    }
  }
  throw new Error(`set-date-version: could not find available version for ${date.toISOString().split("T")[0]} (tried 100 patches)`);
}

async function main(): Promise<void> {
  const pkgPath = join(import.meta.dirname, "..", "package.json");
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
  const pkgName = pkg.name as string;

  const now = new Date();
  const version = await nextDateVersion(pkgName, now);

  // Update package.json version
  pkg.version = version;
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

  // Update CHANGELOG.md if it exists — replace the semver version heading
  const changelogPath = join(import.meta.dirname, "..", "CHANGELOG.md");
  try {
    let changelog = readFileSync(changelogPath, "utf8");
    // Changesets writes headings like "## 0.0.1" — replace the first one with our date version
    changelog = changelog.replace(/^## \d+\.\d+\.\d+/m, `## ${version}`);
    writeFileSync(changelogPath, changelog);
  } catch {
    // No CHANGELOG.md yet — that's fine, changesets will create it
  }

  console.log(`set-date-version: set version to ${version}`);
}

main().catch((e) => {
  console.error(`set-date-version: ${e instanceof Error ? e.message : String(e)}`);
  process.exit(1);
});
```

- [ ] **Step 2: Verify it runs (dry test)**

```bash
cd packages/data && pnpm set-date-version
```

Expected: prints `set-date-version: set version to 2026.XXXX.0` (today's date) and updates `package.json` version. Since the package isn't published yet, npm returns 404 for all versions, so patch=0.

- [ ] **Step 3: Verify package.json version was updated**

```bash
node -e "console.log(require('./package.json').version)"
```

Expected: a date string like `2026.628.0`.

- [ ] **Step 4: Reset version back to placeholder**

Since this was a dry test, reset `package.json` version to `0.0.0`:

```bash
node -e "const fs=require('fs');const p=JSON.parse(fs.readFileSync('package.json','utf8'));p.version='0.0.0';fs.writeFileSync('package.json',JSON.stringify(p,null,2)+'\n')"
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: implement set-date-version — CalVer override for changesets"
```

---

## Task 6: Rewrite probe.yml workflow

**Files:**
- Modify: `.github/workflows/probe.yml` (full rewrite)

- [ ] **Step 1: Overwrite `.github/workflows/probe.yml`**

```yaml
name: Probe ACP Agents

on:
  workflow_dispatch:
    inputs:
      agents:
        description: "Comma-separated agent IDs to probe (empty = all)"
        required: false
        default: ""
  schedule:
    - cron: "0 6 * * 1"

jobs:
  probe:
    runs-on: ubuntu-latest
    timeout-minutes: 90
    permissions:
      contents: write
      pull-requests: write
    steps:
      - uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          run_install: false

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: pnpm

      - name: Setup uv
        run: pip install uv

      - name: Install agent CLIs
        run: |
          npm install -g autohand-cli @earendil-works/pi-coding-agent cline

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Run probe
        working-directory: packages/probe
        run: pnpm start
        env:
          ACP_DUMMY_AUTH: "1"
          ACP_VERBOSE: "0"
          ACP_AGENTS: ${{ inputs.agents }}

      - name: Run codegen
        working-directory: packages/data
        run: pnpm codegen

      - name: Check for changes
        id: changes
        run: |
          git add packages/data/dist packages/data/package.json
          if git diff --cached --quiet; then
            echo "changed=false" >> $GITHUB_OUTPUT
            echo "No changes detected, skipping PR."
          else
            echo "changed=true" >> $GITHUB_OUTPUT
          fi

      - name: Create changeset
        if: steps.changes.outputs.changed == 'true'
        run: |
          mkdir -p .changeset
          cat > .changeset/data-update.md << 'EOF'
          ---
          "acp-agent-metadata": patch
          ---
          
          Update agent metadata snapshot
          EOF
          git add .changeset/data-update.md

      - name: Open PR
        if: steps.changes.outputs.changed == 'true'
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          BRANCH="data/update-$(date -u +%Y-%m-%d)"
          git checkout -b "$BRANCH"
          git commit -m "chore: update agent metadata snapshot"
          git push origin "$BRANCH"
          gh pr create \
            --title "chore: update agent metadata snapshot ($(date -u +%Y-%m-%d))" \
            --body "Automated probe run. Review the dist/ diff for data changes. Includes a changeset for release." \
            --label "automated"
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/probe.yml
git commit -m "ci: rewrite probe.yml — probe + codegen + open PR with changeset"
```

---

## Task 7: Modify release.yml for date versioning

**Files:**
- Modify: `.github/workflows/release.yml` (from ci skill, modified for set-date-version)

- [ ] **Step 1: Overwrite `.github/workflows/release.yml`**

Based on the ci skill template, with `publish` calling `ci:publish` (which includes set-date-version):

```yaml
name: Release
on:
  push:
    branches:
      - main
env:
  CI: true
jobs:
  release:
    timeout-minutes: 15
    runs-on: ubuntu-latest
    permissions:
      contents: write
      packages: write
      pull-requests: write
      id-token: write
    steps:
      - name: Checkout code repository
        uses: actions/checkout@v5
        with:
          fetch-depth: 0
      - uses: pnpm/action-setup@v4
        name: Install pnpm
        id: pnpm-install
        with:
          run_install: false
      - name: Setup Node.js
        uses: actions/setup-node@v5
        with:
          node-version: 22
          registry-url: 'https://registry.npmjs.org'
      - name: Get pnpm store directory
        shell: bash
        run: |
          echo "STORE_PATH=$(pnpm store path --silent)" >> $GITHUB_ENV
      - uses: actions/cache@v4
        name: Setup pnpm cache
        with:
          path: ${{ env.STORE_PATH }}
          key: ${{ runner.os }}-pnpm-store-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-store-
      - name: Install
        run: pnpm install --frozen-lockfile=false
      - name: Create and publish versions
        uses: changesets/action@v1
        with:
          version: pnpm ci:version
          commit: "chore: update versions"
          title: "chore: update versions"
          publish: pnpm ci:publish
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_CONFIG_PROVENANCE: true
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/release.yml
git commit -m "ci: configure release.yml with changesets + date version override"
```

---

## Task 8: Add test script to root + verify snapshot-release.yml

**Files:**
- Modify: root `package.json` (add `test` script)
- Verify: `.github/workflows/snapshot-release.yml` (from ci skill, should already be correct)

- [ ] **Step 1: Add `test` script to root `package.json`**

The ci skill's `ci.yml` runs `pnpm test`. Add a test script to root `package.json` that runs vitest in the data package:

```json
{
  "scripts": {
    "test": "pnpm --filter acp-agent-metadata exec vitest run"
  }
}
```

Merge this into the existing root `package.json` scripts (don't overwrite the others).

- [ ] **Step 2: Verify snapshot-release.yml is correct**

The ci skill's `snapshot-release.yml` should already have:
- `workflow_dispatch` trigger
- pnpm + node 22 setup
- `pnpm ci:snapshot` + `pnpm ci:prerelease`

But it's missing the `pnpm build` step before snapshot (codegen needs to run to generate dist). Edit `.github/workflows/snapshot-release.yml` and add a build step before the publish:

```yaml
      - name: install dependencies
        run: pnpm install --frozen-lockfile=false

      - name: build
        run: pnpm build

      - name: create and publish versions
        run: |
          pnpm ci:snapshot
          pnpm ci:prerelease
```

Insert the `build` step between `install dependencies` and `create and publish versions`.

- [ ] **Step 3: Run tests to verify everything works**

```bash
pnpm test
```

Expected: vitest runs `codegen.test.ts` — all 8 tests pass.

- [ ] **Step 4: Run lint to verify**

```bash
pnpm lint:fix
```

Expected: ESLint runs, auto-fixes formatting, no errors.

- [ ] **Step 5: Run typecheck across workspace**

```bash
pnpm --filter @agent-metadata/probe typecheck && pnpm --filter acp-agent-metadata typecheck
```

Expected: both pass.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: add test script, fix snapshot-release build step"
```

---

## Task 9: Final verification + smoke test codegen locally

**Files:**
- Verify: all files are in place and working

- [ ] **Step 1: Verify directory structure**

```bash
find . -not -path '*/node_modules/*' -not -path '*/.git/*' -not -path '*/.acp-cache/*' -not -path '*/cache/*' -not -path '*/.husky/_/*' -type f | sort
```

Expected: all files from the spec's file structure section are present.

- [ ] **Step 2: Smoke test codegen with real cache**

If `packages/probe/cache/` exists (from a previous local probe run):

```bash
cd packages/data && pnpm codegen
```

Expected: generates `dist/` with files for each ok agent. Verify:

```bash
ls dist/agents/ | head -10
ls dist/agents/ | wc -l
```

Expected: 33 `.js` files, 33 `.cjs` files, 33 `.d.ts` files (one set per ok agent).

- [ ] **Step 3: Verify package.json exports was rewritten**

```bash
node -e "const p=require('./packages/data/package.json');console.log(Object.keys(p.exports).length,'export entries');console.log(Object.keys(p.exports).filter(k=>k!=='.'&&k!=='./types'&&k!=='./package.json').slice(0,5))"
```

Expected: 36 export entries (1 for `.` + 1 for `./types` + 33 for agents + 1 for `./package.json`). First 5 agent entries should be agent IDs.

- [ ] **Step 4: Verify CJS import works**

```bash
node -e "const {agent}=require('./packages/data/dist/agents/gemini.cjs');console.log(agent.id,agent.modes.length+' modes',agent.commands.length+' commands')"
```

Expected: `gemini 4 modes 20 commands` (or similar — depends on latest cache).

- [ ] **Step 5: Verify ESM import works**

```bash
node --input-type=module -e "import {agent} from './packages/data/dist/agents/gemini.js';console.log(agent.id,agent.modes.length+' modes',agent.commands.length+' commands')"
```

Expected: same as CJS.

- [ ] **Step 6: Verify aggregate import works**

```bash
node -e "const {agents}=require('./packages/data/dist/index.cjs');console.log(Object.keys(agents).length,'agents');console.log(agents.gemini.id)"
```

Expected: `33 agents` / `gemini`.

- [ ] **Step 7: Final commit (if any dist changes)**

```bash
git add -A
git commit -m "chore: generate dist from latest probe data" || echo "nothing to commit"
```

- [ ] **Step 8: Push all commits**

```bash
git push origin develop
```

---

## Self-Review Notes

### Spec coverage check

| Spec section | Task(s) | Status |
|-------------|---------|--------|
| 1. AgentMetadata type | Task 3 (types.ts) | ✓ |
| 2. Exports surface (CJS+ESM, subpaths) | Task 3 (package.json exports) + Task 4 (codegen generates entries) | ✓ |
| 3. codegen (input/output, field mapping, idempotent) | Task 4 (codegen.ts + tests) | ✓ |
| 4. CI flow (probe.yml, release.yml, snapshot) | Task 6 (probe.yml), Task 7 (release.yml), Task 8 (snapshot fix) | ✓ |
| 5. Repo layout (workspace, ci skill assets) | Task 1 (restructure), Task 2 (ci skill) | ✓ |
| 6. Error handling + testing | Task 4 (codegen tests cover all error cases) | ✓ |
| Environment memo (CLI installs) | Task 6 (probe.yml install step) | ✓ |

### Placeholder scan

No TBD/TODO found. All code blocks contain actual implementation.

### Type consistency

- `AgentMetadata` used in `types.ts` (Task 3), `codegen.ts` (Task 4), `set-date-version.ts` (Task 5 — doesn't use AgentMetadata directly, only version string). ✓
- `generatePackage(cacheDir, distDir, pkgPath)` signature consistent between test (Task 4 Step 2) and implementation (Task 4 Step 4). ✓
- `agent` (singular) for per-agent export, `agents` (plural object) for aggregate — consistent across spec, codegen, and tests. ✓
