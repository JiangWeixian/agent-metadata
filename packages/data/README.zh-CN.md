# acp-agent-metadata

[![version](https://img.shields.io/npm/v/acp-agent-metadata?style=flat-square)](https://www.npmjs.com/package/acp-agent-metadata)
[![agents](https://img.shields.io/badge/agents-34-9cf?style=flat-square)](dist-src/agents/)

[English](README.md) | **简体中文**

为 [ACP](https://agentclientprotocol.com) 编码智能体提供的类型安全元数据 —— 包括会话模式、斜杠命令、能力和认证方式。数据由在线探针生成，以 ESM + CJS 形式发布，**零运行时依赖**。

这是 [`agent-metadata`](../../README.md) workspace 中可发布的包。生成数据的探针工具位于 [`packages/probe`](../probe)。

## 安装

```bash
npm install acp-agent-metadata
# 或
pnpm add acp-agent-metadata
```

ACP SDK 类型已内联到生成的 `.d.ts` 中，因此 `@agentclientprotocol/sdk` 仅为 `devDependency` —— 使用者无需安装任何额外依赖。

## 用法

单个智能体（支持 tree-shaking；只有该智能体会进入你的打包产物）：

```ts
import { agent } from 'acp-agent-metadata/gemini'

const modes = agent.modes // SessionMode[]
const commands = agent.commands // AvailableCommand[]
const authMethods = agent.authMethods // AgentAuthMethod[]
```

完整聚合数据：

```ts
import { agents } from 'acp-agent-metadata'

const clineModes = agents.cline.modes
const ids = Object.keys(agents) // 所有已探测的智能体 id
```

仅类型：

```ts
import type { AgentMetadata, AvailableCommand, SessionMode } from 'acp-agent-metadata/types'
```

## 导出

| 子路径 | 导出内容 | 格式 |
| --- | --- | --- |
| `acp-agent-metadata` | `agents` —— 全部智能体，按 id 索引 | ESM + CJS + `.d.ts` |
| `acp-agent-metadata/types` | `AgentMetadata`、`SessionMode`、`AvailableCommand` 及相关接口 | ESM + CJS + `.d.ts` |
| `acp-agent-metadata/<agent-id>` | `agent` —— 该智能体的 `AgentMetadata` | ESM + CJS + `.d.ts` |

每个按智能体的子路径由 codegen 为所有探测结果为 `status: "ok"` 的智能体重新生成 —— 当前为 34 个智能体，列表见 [`dist-src/agents/`](dist-src/agents/)。

## 数据结构

```ts
interface AgentMetadata {
  id: string
  name: string
  version: string
  protocolVersion: number
  agentInfo: { name: string; version: string; [key: string]: unknown }
  agentCapabilities: AgentCapabilities
  authMethods: AgentAuthMethod[]
  modes: SessionMode[]
  currentModeId: null | string
  configOptions: AgentConfigOption[]
  commands: AvailableCommand[]
}
```

事实来源：[`src/types.ts`](src/types.ts)。能力、认证方式和配置选项接口对已知字段进行了类型化，并通过索引签名允许智能体特定的扩展。

## 构建方式

```text
../probe/cache/*.json  ──codegen──▶  dist-src/*.ts  ──tsup──▶  dist/
```

1. [`scripts/codegen.ts`](scripts/codegen.ts) 从探针包读取每个 `cache/<id>.json`，只保留 `status: "ok"`，通过固定的白名单映射字段，对键排序以保证输出稳定，并写入 `dist-src/*.ts`。
2. [`tsup.config.ts`](tsup.config.ts) 将 `dist-src/` 编译为 `dist/`（ESM + CJS），通过 `dts: { resolve: true }` 内联 SDK 类型。
3. codegen 还会重写 [`package.json`](package.json) 中的 `exports` 映射，以匹配当前智能体集合。

```bash
pnpm codegen     # cache → dist-src/*.ts（同时重写 exports 映射）
pnpm build       # tsup → dist/（基于已提交的 dist-src）
pnpm typecheck   # tsc --noEmit
pnpm test        # vitest（codegen 快照测试）
```

`dist-src/` 作为可审查的事实来源被提交；`dist/` 已 gitignore，在发布时构建。

## 项目状态

实验性，1.0 之前阶段（`0.0.0`）。智能体集合、字段结构和导出接口可能发生变化。数据是每个智能体在探测时所声明内容的快照，而非稳定契约。许可证和 workspace 范围的状态见根目录 [README](../../README.md)。
