# acp-probe 工作计划

## 目标

用 pnpm + tsx + `@agentclientprotocol/sdk` 拉取 ACP agent registry（`https://cdn.agentclientprotocol.com/registry/v1/latest/registry.json`），逐个启动 agent 的 ACP server（stdio），抓取每个 agent 的 **modes / commands / capabilities**，输出到 `acp-capabilities.json`。需在 GitHub Actions 中运行（环境无 agent CLI，自动下载安装）。

> 注：用户口径里「权限列表」= **modes**（modes 决定权限行为）。

---

## 已完成

### 数据来源（已验证）
- **modes / configOptions**：`session/new` 响应里直接有（静态）。
- **commands**：`session/update` 通知 variant `available_commands_update` → `availableCommands[]`（session/new 后短暂等待 2.5s 采集）。
- **capabilities / authMethods**：`initialize` 响应（免认证）。

### 架构（已实现 + commit `6694850`）
```
acp-probe/src/
├── types.ts          # registry + 输出类型
├── registry.ts       # 拉 registry.json
├── install.ts        # npx/binary/uvx 三种安装：下载→解压→.acp-cache/<id>@<version>/（按版本缓存复用）
├── probe.ts          # spawn→connect→initialize→session/new→采集；含 dummyAuthEnv 宽泛假 key（ACP_DUMMY_AUTH=1）
├── index.ts          # 遍历 registry、串行、写 JSON、汇总
└── launch-adapters/  # ★ 启动补丁层（mirror aiden/agent-runtime-acp/src/registry/launch-adapters）
    ├── types.ts      # LaunchAdapter { agentId, apply(ctx)→{env,args,note} }
    ├── env.ts        # env-only 适配器：goose/copilot/codebuddy/qwen/glm/deepagents
    ├── opencode.ts   # 文件副作用：假 auth.json + XDG_DATA_HOME 隔离
    ├── kimi.ts       # 文件副作用：假 OAuth token(expires_at远未来) + HOME 隔离
    ├── registry.ts   # first-match by agentId
    └── index.ts      # applyLaunchPatch 编排 + 隔离 probeHome
```

### 运行方式
```bash
cd acp-probe && pnpm install
# 单个：ACP_AGENTS=kimi ACP_DUMMY_AUTH=1 pnpm tsx src/index.ts
# 全量：ACP_DUMMY_AUTH=1 pnpm tsx src/index.ts   # 输出 acp-capabilities.json
```
- `ACP_AGENTS=a,b,c` 过滤；默认全量。
- `ACP_TIMEOUT_MS`（默认 90s）/ `ACP_SETTLE_MS`（默认 2.5s）/ `ACP_VERBOSE=1`。
- `.acp-cache/` 仅缓存 **binary** agent；npx agent 由 npx 自己缓存（`~/.npm/_npx/`）。

### 验证结果（37 个，19 ok）

| 状态 | 数量 | Agent |
|------|------|-------|
| ✅ ok | 19 | amp-acp, claude-acp, codebuddy-code, codex-acp, cortex-code, deepagents, devin, github-copilot-cli, glm-acp-agent, goose, grok-build, junie, kimi, mistral-vibe, opencode, qwen-code, sigit, stakpak, vtcode |
| 🔒 auth_required | 8 | auggie, autohand, cline, corust-agent, factory-droid, poolside, qoder, gemini |
| ⚠️ error（崩溃/超时） | 9 | agoragentic-acp, crow-cli, dimcode, dirac, fast-agent, kilo, minion-code, nova, pi-acp |
| cursor | 1 | CURSOR_API_KEY 对但**急校验**，dummy→Internal error |

注：cursor 实际是「error/急校验」，单独标出。

### 关键方法论（已验证）
**绕过 auth gate 的通用流程**：websearch 查 agent 读哪个 env/凭证文件 → 注入 dummy → 测。多数 agent 在 `session/new` **不校验 key 真伪**，只看存在性（glm/opencode/mistral/kimi 都是这样）。少数「急校验」型（cursor）会验，dummy 骗不过。

---

## 待办：继续攻破 auth_required（8 个）

逐个用 websearch（`https://html.duckduckgo.com/html/?q=...`）查认证机制，再注入 dummy 实测。

### 进度

| Agent | 认证机制（websearch 结论） | 下一步 |
|-------|--------------------------|--------|
| **gemini** | 支持 `GEMINI_API_KEY` env（设了走 key 认证，非 OAuth）；但 dummy 没过 → 待查 key 格式/是否急校验 | 查 gemini-cli key 格式（`AIza...` 前缀），重测 |
| **cline** | `ANTHROPIC_API_KEY` + 要求先调 `authenticate`；npx 已预热缓存 | 重抓 authMethods（之前超时），看它接受什么 methodId |
| **auggie** | authMethods 空 `[]`，Augment Code proprietary | 查 auggie 读什么 env（`AUGMENT_*`?）/凭证文件 |
| **autohand** | authMethod = terminal-auth，要求先 `npm install -g autohand-cli` | 是 wrapper 需装底层 CLI；可能跳过 |
| **corust-agent** | Rust 开源，未查 | websearch + 查 env |
| **factory-droid** | Factory AI proprietary，未查 | websearch `FACTORY_*`/`DROID_*` env |
| **poolside** | proprietary，未查 | websearch `POOL_*` env |
| **qoder** | proprietary，未查 | websearch `QODER_*` env |

### 每破一个就做
1. 实测通过后，若 env 型 → 加进 `launch-adapters/env.ts`（复用厂商变量名 + dummy 值）。
2. 若文件型 → 新建 `launch-adapters/<agent>.ts`（写假凭证到 probeHome + 隔离 env），注册进 `registry.ts`。

---

## 待办：排查 9 个 error

多半是启动参数/凭证格式/超时问题，可救回。逐个 `ACP_VERBOSE=1` 看 stderr：
- agoragentic-acp, crow-cli, dimcode, dirac, fast-agent, kilo, minion-code, nova, pi-acp
- 已知：dirac=超时；crow-cli=连接关闭；fast-agent/minion-code=uvx 可能崩。

---

## 待办（工程）

- [ ] 全量重跑产出完整 `acp-capabilities.json`（上次因磁盘满 ENOSPC 没落盘；已清 .acp-cache）。注意本机磁盘偏紧，binary agent 累计 ~2.4G，CI（ubuntu runner）无此问题。
- [ ] launch-adapters 改为**默认始终应用**（当前部分受 `ACP_DUMMY_AUTH` 控制），让 GH Actions 默认拿到最大覆盖。
- [ ] cursor 等「急校验」型：考虑支持 env 注入**真 key**（GH Secret）可选覆盖。
- [ ] 加 README 说明用法。

## 环境备忘
- 本机：macOS arm64，pnpm 9.15，node v20，uv/uvx 已装（`/opt/homebrew/bin/uvx`）。
- 参考实现：`/Users/bytedance/Projects/bugs/mark3/aiden/agent-runtime-acp/src/registry/launch-adapters/`（env.ts 里有各厂商 env 变量名映射，可直接复用变量名）。
- ACP schema：`/tmp/acp-schema.json`（auth_required 错误码 `-32000`；`PROTOCOL_VERSION=1`）。
