# acp-agent-metadata npm 包发布设计

## 目标

把 acp-probe 探针在 GitHub Actions 跑出的 34 个 ok agent 的能力数据（modes / commands / capabilities / authMethods），作为类型安全的 npm 包 `acp-agent-metadata` 发布。探针脚本不发布，只作为 CI 工具。

## 背景

现有 `acp-probe/` 探针跑完生成 `cache/*.json`（per-agent 分片）+ `acp-capabilities.json`（聚合），均 gitignored。需改造为 pnpm workspace 双包结构，数据包通过 codegen 从探针产物生成 typed JS 模块，经 changesets + 手动 release 流程发布到 npm。

## 1. 数据类型（AgentMetadata）

发布包暴露的类型，从现有 `AgentResult` 派生，收紧成 SDK 真类型、去掉 `status`/`error`（只发 ok agent，这俩字段恒定无意义）：

```ts
// packages/data/src/types.ts
import type {
  SessionMode,
  AvailableCommand,
  AuthMethod,
  AgentCapabilities,
  ConfigOption,
} from "@agentclientprotocol/sdk";

export type { SessionMode, AvailableCommand, AuthMethod, AgentCapabilities, ConfigOption };

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

- 所有 agent 共用这一份类型声明。
- `modes`/`commands`/`authMethods` 是数组（空数组也是合法 `X[]`），不标 `| null`。
- `currentModeId` 保留 `string | null`（确实可能为空）。
- 从 SDK re-export 类型，消费方也能 `import type { SessionMode } from "acp-agent-metadata/types"`。
- **SDK 不进发布包 dependencies**：`@agentclientprotocol/sdk` 只在 `devDependencies`（构建时用）。tsup `--dts-resolve` 把 SDK 类型内联进生成的 `.d.ts`，消费方无需安装 SDK。

## 2. 包的导出表面（exports）

### 消费方用法

```ts
// 1. 单个 agent（tree-shakeable，只拉一个）
import { agent } from "acp-agent-metadata/gemini";
agent.modes    // SessionMode[]
agent.commands // AvailableCommand[]

// 2. 全量聚合（拿所有 agent 的对象）
import { agents } from "acp-agent-metadata";
agents.gemini.modes

// 3. 只要类型
import type { AgentMetadata, SessionMode } from "acp-agent-metadata/types";
```

### package.json exports 映射

```jsonc
{
  "name": "acp-agent-metadata",
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
    "./gemini": {
      "types": "./dist/agents/gemini.d.ts",
      "import": "./dist/agents/gemini.js",
      "require": "./dist/agents/gemini.cjs"
    },
    "./cline": {
      "types": "./dist/agents/cline.d.ts",
      "import": "./dist/agents/cline.js",
      "require": "./dist/agents/cline.cjs"
    },
    "./package.json": "./package.json"
  }
}
```

- 每个 ok agent 一条 subpath entry，由 codegen 根据当前 ok agent 列表重新生成。
- CJS + ESM 双格式（dts 只一份，类型不分 CJS/ESM）。
- 只做 ESM + CJS，不做其他格式。

### 生成的 dist/ 结构

```
dist/
├── types.js / types.cjs / types.d.ts
├── index.js / index.cjs / index.d.ts
└── agents/
    ├── gemini.js / gemini.cjs / gemini.d.ts
    ├── cline.js  / cline.cjs  / cline.d.ts
    └── ...               # 每个 ok agent 一对 .js/.cjs + 一份 .d.ts
```

- `dist/agents/<id>.js`：`export const agent: AgentMetadata = {...对象字面量...}`
- `dist/agents/<id>.cjs`：`module.exports = { agent: {...} }`
- `dist/agents/<id>.d.ts`：`export declare const agent: AgentMetadata;`
- `dist/index.js`：import 所有 agent → `export const agents = { gemini: ..., cline: ... }`
- `dist/index.d.ts`：`export declare const agents: Record<string, AgentMetadata>;` + re-export `./types`

## 3. codegen + tsup 构建管线

### 两阶段：codegen 生成 .ts 源 → tsup 编译为 .js/.cjs/.d.ts

```
cache/*.json ──codegen──▶ dist-src/                    ──tsup──▶ dist/
                            ├── types.ts                          ├── types.js / .cjs / .d.ts
                            ├── index.ts                          ├── index.js / .cjs / .d.ts
                            └── agents/                            └── agents/
                                ├── gemini.ts                         ├── gemini.js / .cjs / .d.ts
                                └── ...                               └── ...
```

- `dist-src/`：gitignored（中间产物，TS 源码）
- `dist/`：提交进 git（发布内容，tsup 编译产物）

### 阶段 1：codegen 脚本

- **输入**：`packages/probe/cache/*.json`（只挑 `status === "ok"` 的）
- **输出**：`dist-src/` 下的 .ts 文件
  1. `dist-src/types.ts` — copy `src/types.ts`（import type from SDK）
  2. `dist-src/agents/<id>.ts` — `export const agent: AgentMetadata = {...对象字面量...}`
  3. `dist-src/index.ts` — import 所有 agent → `export const agents = { gemini, cline, ... }`
  4. 改写 `package.json` 的 `exports` 字段（根据当前 ok agent 列表生成完整 map）

### 阶段 2：tsup 编译

tsup 配置（`packages/data/tsup.config.ts`）：

```ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["dist-src/index.ts", "dist-src/types.ts", "dist-src/agents/*.ts"],
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: { resolve: true },   // 内联 SDK 类型到 .d.ts，生成的 .d.ts 不再 import @agentclientprotocol/sdk
  clean: true,
});
```

- `format: ["esm", "cjs"]` → 每个 entry 生成 `.js`（ESM）+ `.cjs`（CJS）
- `dts: { resolve: true }` → 生成 `.d.ts`，把 SDK 的 `SessionMode`/`AuthMethod`/`AgentCapabilities` 等类型**内联**进 .d.ts
- `clean: true` → 每次清 dist 再生成
- SDK 只作为 devDependency（tsup 编译时用），不进发布包 dependencies

### 字段映射（显式白名单）

```ts
function toMetadata(r: AgentResult): AgentMetadata {
  return {
    id: r.id,
    name: r.name,
    version: r.version,
    protocolVersion: r.protocolVersion ?? 0,
    agentInfo: r.agentInfo ?? { name: r.id, version: r.version },
    agentCapabilities: r.agentCapabilities ?? {},
    authMethods: r.authMethods ?? [],
    modes: r.modes ?? [],
    currentModeId: r.currentModeId,
    configOptions: r.configOptions ?? [],
    commands: r.commands ?? [],
  };
}
```

显式映射（白名单），只列出来的字段才进包，其余全丢。避免内部字段意外泄露。

`AgentResult` 里部分字段是 `T | null`（探针失败时为 null），但 `AgentMetadata` 不含 null（只发 ok agent，这些字段理论上都有值）。映射时用 `?? 默认值` 兜底，防御性处理 null → 空数组/空对象，保证类型安全。

### 运行方式

```bash
cd packages/data
pnpm codegen   # tsx scripts/codegen.ts → 生成 dist-src/*.ts
pnpm build     # tsup → 编译 dist-src/ → dist/（.js/.cjs/.d.ts）
```

`build` = codegen + tsup。根 package.json 的 `build` script 调 `pnpm --filter acp-agent-metadata run build`。

### 幂等性

相同输入 → 相同输出（对象 key 按字母序排序，JSON 字面量稳定序列化），便于 diff 检测。

## 4. CI 流程

### probe.yml（定时周一 6:00 UTC / 手动）

```
1. checkout
2. setup pnpm (action-setup@v4，自动读 packageManager: pnpm@11.9.0)
3. setup node 22
4. setup uv (pip install uv，for uvx agents)
5. install agent CLIs: npm install -g autohand-cli @earendil-works/pi-coding-agent cline
6. pnpm install --frozen-lockfile
7. cd packages/probe && pnpm start   # 从零跑探针 → 生成 cache/*.json
8. cd packages/data && pnpm codegen  # 读 cache → 生成 dist/ + exports map
9. git diff --exit-code packages/data/dist/
   ├ 无变化 → workflow 正常结束（不开 PR）
   └ 有变化 →
      10. git checkout -b data/update-YYYY-MM-DD
      11. git add packages/data/dist/ packages/data/package.json
      12. 写一个 changeset: .changeset/data-update.md
          --- acp-agent-metadata: patch ---
          ---
          Update agent metadata snapshot
      13. gh pr create
```

- CI 上**重新 probe**（不依赖本地 cache），`cache/*.json` 是 gitignored 中间产物，只提交 codegen 后的 `dist/`。
- `ACP_SKIP_CACHED=1` 在 CI 里不使用（每次 fresh，全量重跑 37 agent）。
- diff 检测：codegen 幂等，跑完 `git diff --exit-code dist/` 判断有无变化。

### release.yml（changesets action，push to main）

基于 ci skill 的 `workflows/pnpm/release.yml` 模板改造：

```
on: push to main
1. checkout + setup pnpm + node 22
2. pnpm install
3. changesets/action@v1:
   - version: pnpm ci:version
   - publish: pnpm ci:publish
     = pnpm --filter acp-agent-metadata run set-date-version && pnpm changeset publish
4. env: GITHUB_TOKEN, NPM_TOKEN, NPM_CONFIG_PROVENANCE=true
```

流程：
- 人审 merge probe PR（含数据 + changeset）→ changesets bot 自动开 release PR（bump semver）
- 人审 merge release PR → 触发 release.yml → `set-date-version` 覆盖成日期版本 → `changeset publish`（stable，`latest` tag）

### snapshot-release.yml（手动 workflow_dispatch）

基于 ci skill 的 `workflows/pnpm/snapshot-release.yml` 模板：

```
on: workflow_dispatch
1. checkout + setup pnpm + node 22
2. pnpm install
3. pnpm build             # 先 codegen 生成最新 dist
4. pnpm ci:snapshot       # pnpm changeset version --snapshot snapshot
5. pnpm ci:prerelease     # pnpm changeset publish --no-git-tag --tag snapshot
```

- 版本格式：`0.0.0-snapshot-<datetime>`（changesets 原生 snapshot，不走日期版本覆盖）
- 手动触发，不自动跟 push

### 两条发布路径

| 路径 | 触发 | 版本 | dist-tag |
|------|------|------|----------|
| snapshot | `workflow_dispatch` 手动 | `0.0.0-snapshot-<datetime>` | `snapshot` |
| stable | release PR merge（手动合） | `YYYY.MDD.P` | `latest` |

### 日期版本方案

changesets 原生只做 semver，不支持 CalVer。采用"changesets 当壳 + 脚本覆盖"方案：
- changesets 正常攒 changeset → release PR 阶段算 semver patch
- `set-date-version.ts` 在 `changeset publish` 前跑，把 `package.json` version 覆盖成 `YYYY.MDD.P` + 同步改 `CHANGELOG.md` 的版本标题
- 格式约束（semver 合法）：`YYYY.MDD.P`，如 `2026.627.0`（6月27日 = MDD=627），同天多次发版 P 递增
- `set-date-version.ts` 查 npm registry，今日已发过则 P+1

## 5. 仓库布局与文件清单

### pnpm workspace 双包

```
agent-metadata/
├── pnpm-workspace.yaml                    # 新增：packages: packages/*
├── .changeset/
│   ├── config.json                        # ci skill 资产（baseBranch: main, access: public）
│   └── README.md                          # ci skill 资产
├── .github/workflows/
│   ├── ci.yml                             # ci skill 资产：lint + typecheck
│   ├── probe.yml                          # 改造：跑探针 + codegen + 开 PR
│   ├── release.yml                        # ci skill 资产改造：changesets + set-date-version
│   └── snapshot-release.yml              # ci skill 资产：手动 snapshot publish
├── .github/PULL_REQUEST_TEMPLATE.md       # ci skill 资产
├── .github/ISSUE_TEMPLATE/                # ci skill 资产
├── .husky/
│   ├── pre-commit                         # ci skill 资产：lint-staged
│   └── pre-merge                          # ci skill 资产
├── .lintstagedrc                          # ci skill 资产
├── .czrc                                  # ci skill 资产：commitizen
├── eslint.config.mjs                      # ci skill 资产
├── .node-version                          # ci skill 资产：22
├── package.json                           # 根，workspace scripts + devDeps
├── packages/
│   ├── probe/                             # 现有 acp-probe 移入
│   │   ├── src/                           # 不变
│   │   ├── .acp-cache/                    # gitignored
│   │   ├── cache/                         # gitignored（探针中间产物）
│   │   ├── package.json                   # private: true, 不发布
│   │   └── tsconfig.json
│   └── data/                              # 新增：acp-agent-metadata
│       ├── src/types.ts                   # AgentMetadata 接口（import type from SDK）
│       ├── scripts/
│       │   ├── codegen.ts                 # 读 cache → 生成 dist-src/*.ts
│       │   ├── codegen.test.ts            # vitest 快照测试
│       │   └── set-date-version.ts        # release 阶段覆盖日期版本
│       ├── tsup.config.ts                 # tsup 构建配置（dts resolve 内联 SDK 类型）
│       ├── dist-src/                      # codegen 产物（.ts 源），gitignored
│       ├── dist/                          # tsup 产物（.js/.cjs/.d.ts），提交进 git
│       ├── package.json                   # exports map 由 codegen 生成
│       └── tsconfig.json
```

### ci skill 资产复用清单

实现阶段跑 `ci` skill --force 自动配置：

| 资产 | 用途 | 需改动 |
|------|------|--------|
| `.changeset/config.json` | changesets 配置 | `baseBranch: main` |
| `release.yml` | changesets action 编排 | `publish` 改成 `ci:publish`（含 set-date-version） |
| `snapshot-release.yml` | 手动 snapshot publish | 无 |
| `ci.yml` | lint + typecheck PR 检查 | 无 |
| `eslint.config.mjs` | lint 规则 | 无 |
| `.lintstagedrc` | 提交前 lint | 无 |
| `.husky/*` | git hooks | `{{PACKAGE_MANAGER}}` → `pnpm` |
| `.czrc` | commitizen 提交规范 | 无 |
| `.node-version` | Node 版本锁定 | 22（已是） |
| PR/Issue 模板 | 协作模板 | 无 |

不纳入：Rust 相关资产（纯 JS 项目）。

### 根 package.json

```json
{
  "private": true,
  "packageManager": "pnpm@11.9.0",
  "scripts": {
    "build": "pnpm --filter acp-agent-metadata run build",
    "ci:version": "pnpm changeset version",
    "ci:publish": "pnpm --filter acp-agent-metadata run set-date-version && pnpm changeset publish",
    "ci:snapshot": "pnpm changeset version --snapshot snapshot",
    "ci:prerelease": "pnpm run build && pnpm changeset publish --no-git-tag --tag snapshot",
    "lint:fix": "eslint . --fix",
    "prepare": "husky install"
  }
}
```

`build` = codegen（生成 dist-src/*.ts）+ tsup（编译 dist/）。`ci:prerelease` 先 `build`（codegen + tsup）再 publish，保证 snapshot 用的 dist 是最新的。`ci:publish` 不调 build（dist 已提交进 git，release PR 基于已生成的 dist 发版）。

### 版本统一

- **Node 22**（所有 workflow + `.node-version`）
- **pnpm 11.9.0**（由根 `packageManager` 字段锁定，`action-setup@v4` 自动读取）
- 升级时重建 `pnpm-lock.yaml`（lockfile v9 → v11）

### gitignore 规则

- `packages/probe/cache/`、`packages/probe/.acp-cache/` → gitignored（中间产物）
- `packages/data/dist-src/` → gitignored（codegen 中间产物，.ts 源）
- `packages/data/dist/` → **不** gitignored（提交进 git，作为数据包源 + PR diff 可见 + release 基于它发版）

## 6. 错误处理 + 测试

### 错误处理

| 环节 | 失败情况 | 处理 |
|------|---------|------|
| probe.yml 探针 | 某个 agent 超时/崩溃 | 已有逻辑：单个失败不影响其他，汇总到结果 JSON |
| probe.yml codegen | `cache/*.json` 不存在或无 ok agent | codegen 校验：无 ok agent → 报错退出，不开 PR |
| probe.yml 开 PR | dist 无变化（`git diff --exit-code`） | 跳过开 PR，workflow 正常结束 |
| codegen 生成 | JSON 字段缺 `id`/`modes` 等关键字段 | 显式映射时校验，缺字段 → 抛错 + 列出哪个 agent 缺什么 |
| set-date-version | 今日已发过（`YYYY.MDD.P` 已存在于 npm） | 脚本查 npm registry，已存在则 P+1 |
| release.yml publish | `npm publish` 失败（token/权限） | changesets action 报错，workflow 失败 |
| snapshot publish | 同日多次手动触发 | changesets snapshot 用 datetime 后缀，天然不冲突 |

### 测试（vitest）

`packages/data/scripts/codegen.test.ts`：

1. **快照测试**：给一组 fixture JSON（模拟 `cache/*.json`，2 个 agent，1 ok 1 auth_required）→ 跑 codegen → 断言生成的 `dist/` 文件内容匹配 snapshot
2. **过滤逻辑**：auth_required/error 的 agent 不出现在 `dist/agents/` 里
3. **exports map 生成**：`package.json` 的 `exports` 只含 ok agent 的条目
4. **字段映射**：生成的 `AgentMetadata` 不含 `status`/`error` 字段

不测的（YAGNI）：ESM/CJS 双格式输出（模板化无分支）、`set-date-version`（逻辑极简）、workflow 本身（CI 跑起来就是测）。

## 环境备忘

- CI runner（ubuntu-latest）需预装：`uv`（pip install uv）、`autohand-cli`、`@earendil-works/pi-coding-agent`、`cline`（npm 全局）。dimcode 不需全局装（适配器内 npx 拉取）。
- 探针 CLI 版本在 CI 里用 latest（不锁版本），接受漂移。
