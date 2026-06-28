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
# 全量首跑：ACP_DUMMY_AUTH=1 pnpm tsx src/index.ts   # 输出 acp-capabilities.json + cache/*.json
# 重跑（跳过已缓存 ok，只重试失败项）：ACP_DUMMY_AUTH=1 ACP_SKIP_CACHED=1 pnpm tsx src/index.ts
```
- `ACP_AGENTS=a,b,c` 过滤；默认全量。
- `ACP_DUMMY_AUTH=1` 注入宽泛假 key + 应用 launch-adapters。
- `ACP_SKIP_CACHED=1` 复用 `cache/<id>.json` 跳过已 ok agent（秒回）。
- `ACP_OUTPUT`（默认 `acp-capabilities.json`）/ `ACP_CACHE_DIR`（默认 `cache`）。
- `ACP_TIMEOUT_MS`（默认 90s）/ `ACP_SETTLE_MS`（默认 2.5s）/ `ACP_VERBOSE=1`。
- `ACP_UVX_BIN` 可指向 uvx 全路径（CI 里装了 uvx 才能跑 fast-agent/minion-code）。
- `.acp-cache/` 仅缓存 **binary** agent；npx agent 由 npx 自己缓存（`~/.npm/_npx/`）。

### 验证结果（37 个，34 ok）

| 状态 | 数量 | Agent |
|------|------|-------|
| ✅ ok | 34 | amp-acp, auggie, autohand, claude-acp, cline, codebuddy-code, codex-acp, cortex-code, corust-agent, crow-cli, cursor, deepagents, devin, dimcode, dirac, factory-droid, fast-agent, gemini, github-copilot-cli, glm-acp-agent, goose, grok-build, junie, kilo, kimi, mistral-vibe, nova, opencode, pi-acp, poolside, qwen-code, sigit, stakpak, vtcode |
| 🔒 auth_required | 1 | qoder（急校验 PAT 联网交换） |
| ⚠️ error | 2 | agoragentic-acp（`session/new` 方法不存在—协议不兼容）, minion-code（包自身 bug：`ImportError: cannot import name 'AuthMethod' from 'acp.schema'`，依赖的 acp 包版本不兼容） |

- 第一轮新增 5 个突破：**auggie / gemini / factory-droid / corust-agent / poolside**（env/file auth 绕过研究）。
- 第二轮新增 4 个突破（装底层 CLI/配 provider）：**pi-acp / autohand / cline / dimcode**。
- 第三轮新增 2 个突破（装 uvx + 修架构链）：**fast-agent** + **crow-cli**（crow-cli 随资源充足自然转 ok）。
- 合计 ok agent 贡献 **90 modes / 1011 commands**。

### 第三轮：uvx + 架构链修复（fast-agent / minion-code）
本机 `brew install uv` 装的是 **Rosetta x86_64 brew** 的 uv（`/usr/local/bin/uv`，x86_64 二进制），导致一连串架构错配：
1. x86_64 uv → 拉 x86_64 CPython → `cryptography`(Rust 扩展) 要 x86_64 rust std → 本机只有 `aarch64-apple-darwin` toolchain → `can't find crate for std`。
2. 装 arm64 原生 uv（官方脚本到 `~/.local/bin/uv`）→ 仍复用已下的 x86_64 CPython → 同样构建失败。
3. `rustup target add x86_64-apple-darwin` 补 x86_64 rust std → 过了 rust 编译，但卡 `openssl-sys` 找不到 OpenSSL。
4. **最终解**：删 x86_64 uv python（`~/.local/share/uv/python/cpython-3.13-macos-x86_64-none`），`uv python install 3.13` 重装 → 下到 `cpython-3.13-macos-aarch64-none`（arm64）→ uv 下 arm64 预编译 wheel（不构建 Rust/OpenSSL）→ fast-agent ok（14s）。
- **minion-code** 仍 error：包自身 bug（`ImportError: cannot import name 'AuthMethod' from 'acp.schema'`，依赖的 acp 版本不兼容），非环境问题，无法在探针侧修。
- CI（ubuntu x86_64 runner）无此架构错配，uvx 直接能用。

### 唯一剩 auth_required：qoder
`QODER_PERSONAL_ACCESS_TOKEN` → `loginWithPAT` → `exchangePersonalToken` **联网换 token**（真后端校验），dummy 骗不过。**只能用真 PAT**（GH Secret 注入）或放弃。

### 缓存（新增）
- 每个 ok agent 探测成功后立即写 `cache/<id>.json`（完整 AgentResult）→ 增量落盘，中途崩不丢数据。
- `ACP_SKIP_CACHED=1`：重跑时已 cached 的 ok agent 直接从文件读、跳过探测（秒回）→ 只重试未缓存/失败项，省下载省时。
- 全量产出 `acp-capabilities.json`（37 agent 汇总，~700KB）+ `cache/*.json`（28 个分片）。

### 进程/安装修复（本轮）
- `probe.ts`：spawn 改 `detached:true` + `kill` 用 `process.kill(-pid, SIGKILL)` 杀整个进程组（npx/binary 会 spawn 孙进程；旧版只 kill 直接子进程 → gemini/poolside 探完不退出）。
- `index.ts`：main 末尾 `process.exit(0)` 兜底（防孙进程 linger 卡住整体退出）。
- `install.ts`：`hasUv()` 对带路径的 `ACP_UVX_BIN`（如 `/opt/homebrew/bin/uvx`）用 `existsSync` 而非 `which`（`which /full/path` 永远失败）。

### 关键方法论（已验证）
**绕过 auth gate 的通用流程**：websearch 查 agent 读哪个 env/凭证文件 → 注入 dummy → 测。多数 agent 在 `session/new` **不校验 key 真伪**，只看存在性（glm/opencode/mistral/kimi 都是这样）。少数「急校验」型（cursor）会验，dummy 骗不过。

---

## 待办：继续攻破 auth_required（8 个）

逐个用 websearch（`https://html.duckduckgo.com/html/?q=...`）查认证机制，再注入 dummy 实测。

### 进度（本轮：env/file auth 绕过研究 + 突破 5 个）

本轮方法：**直接 `npm pack` agent 包 → 提取 → grep/rg 源码找 auth env/凭证文件**（比 websearch 可靠，尤其对闭源 agent）；**binary agent 用 `strings` 扫 env 变量名/凭证文件路径**。DuckDuckGo 触发 CAPTCHA 后改走此路。

| Agent | 认证机制（结论） | 绕过方式 | 状态 |
|-------|------------------|----------|------|
| **gemini** | OAuth(`~/.gemini/oauth_creds.json`)/API key/Vertex/ADC；`validateAuthMethod` 只查存在性，但 `initOauthClient` 对缓存 creds 调 `getTokenInfo`(网络)。**例外**：`GOOGLE_GENAI_USE_GCA=1`+`GOOGLE_CLOUD_ACCESS_TOKEN` 分支跳过 `getTokenInfo`，`fetchAndCacheUserInfo` 失败不抛 | env: `GOOGLE_GENAI_USE_GCA=1`+`GOOGLE_CLOUD_ACCESS_TOKEN`+`GEMINI_API_KEY` | ✅ ok (4 modes, 20 cmds) |
| **auggie** | `AUGMENT_SESSION_AUTH` env = `~/.augment/session.json` 内容；`_parseSessionFromString` 校验 `{accessToken, tenantURL, scopes[]}`（注意 `scopes` 是数组、非 `scope`）三字段存在性 | env: `AUGMENT_SESSION_AUTH='{"accessToken","tenantURL","scopes":["..."]}'` | ✅ ok (2 modes) |
| **factory-droid** | authMethods: device-pairing / `factory-api-key`(FACTORY_API_KEY env)；agent 自己的报错就说 "set a FACTORY_API_KEY environment variable" | env: `FACTORY_API_KEY` | ✅ ok (5 modes, 23 cmds) |
| **corust-agent** | binary(Rust) strings 显示 `CORUST_API_KEY` env + "auth resolver: no credentials found"；authMethods 只广告 `oauth_browser` 但 API key 路径存在（存在性校验，不联网） | env: `CORUST_API_KEY` | ✅ ok (3 modes, 58 cmds) |
| **poolside** | binary strings 显示 `POOLSIDE_API_KEY`/`POOLSIDE_TOKEN`/`POOLSIDE_STANDALONE_*` env；authMethods=`[]`。单给 API key → Internal error（缺 tenant）。**standalone 模式**（`POOLSIDE_STANDALONE_BASE_URL`+`MODEL`）跳过云 tenant | env: `POOLSIDE_API_KEY`+`POOLSIDE_STANDALONE_BASE_URL`+`POOLSIDE_STANDALONE_MODEL` | ✅ ok (4 modes, 11 cmds) |
| **pi-acp** | wrapper，报 "executable not found (command: pi)"；需先 `npm i -g @earendil-works/pi-coding-agent` 装 `pi`。装好后 session/new 不需 auth | 装底层 CLI `pi`（npm 全局） | ✅ ok (6 modes, 12 cmds) |
| **autohand** | wrapper，authMethod=`autohand-install` 需先 `npm i -g autohand-cli`。装好后 ACP 要 `autohand login`；`ensureAuthenticated` 读 `~/.autohand/config.json` 的 `auth.token`+`auth.expiresAt`，**只本地比较 expiresAt < new Date()（不联网验 token）** | 文件: 假 `~/.autohand/config.json`{auth:{token,expiresAt:远未来}} + HOME 隔离 + 装底层 CLI | ✅ ok (6 modes, 24 cmds) |
| **cline** | npx `--yes` 不装平台 optionalDep(`@cline/cli-darwin-arm64`)→"command not found"。装好后 `CLINE_API_KEY` dummy env 即可（session/new 不联网，OAuth 急校验仅在真调模型时触发） | env: `CLINE_API_KEY` + 装平台 binary（`npm i -g cline` 或 npx 加 `-p @cline/cli-<plat>`) | ✅ ok (2 modes) |
| **dimcode** | 报 "Provider credentials are required"；需 `~/.dimcode/v2/` 有 SQLite provider 记录 + `config.json` 的 defaultProvider。`dim provider add/switch` 预配 dummy provider（openai-compatible），session/new 只查 provider 已配（不联网验 key） | 文件: `npx dimcode provider add/switch` 预配 dummy provider + HOME 隔离（适配器内 spawn） | ✅ ok (3 modes) |
| **qoder** | `QODER_PERSONAL_ACCESS_TOKEN`(或 `QODER_PAT`) env → `loginWithPAT` → `exchangePersonalToken`(**联网换 token**)。`QODER_ACCESS_TOKEN` 只是 bridge/附件 token，非主认证 | **急校验**（PAT 联网交换）— dummy 骗不过 | ❌ 需真 PAT |

### 关键源码结论（备查）
- **gemini** `packages/core/src/code_assist/oauth2.ts`：`fetchCachedCredentials` 读 `~/.gemini/oauth_creds.json` 或 `GOOGLE_APPLICATION_CREDENTIALS`；`initOauthClient` 对缓存 creds 调 `client.getAccessToken()`+`getTokenInfo()`（网络）—— 唯一不联网分支是 `GOOGLE_GENAI_USE_GCA`+`GOOGLE_CLOUD_ACCESS_TOKEN`（`fetchAndCacheUserInfo` 失败仅 `debugLogger.log` 不抛）。`packages/cli/src/config/auth.ts` `validateAuthMethod`：LOGIN_WITH_GOOGLE/COMPUTE_ADC 直接返回 null（不校验）；USE_GEMINI 只查 `GEMINI_API_KEY` 存在性。
- **auggie** `augment.mjs`：`_parseSessionFromString(e){n=JSON.parse(e);return n.accessToken&&n.tenantURL&&Array.isArray(n.scopes)?n:null}`；`AUGMENT_SESSION_AUTH` 命中即 `_isLoggedIn=!0`。
- **poolside** binary：`POOLSIDE_STANDALONE_*` 切 standalone 模式避开云 tenant；单 `POOLSIDE_API_KEY` 会 Internal error。
- **qoder** `bundle/qodercli.js`：`NUe="QODER_PERSONAL_ACCESS_TOKEN"`；`loginWithPAT`→`exchangePersonalToken`（联网）；`QODER_ACCESS_TOKEN` 仅 `xZs()=QODER_BRIDGE_TOKEN??QODER_ACCESS_TOKEN` 用于 inboundAttachments。

### 每破一个就做
1. 实测通过后，若 env 型 → 加进 `launch-adapters/env.ts`（复用厂商变量名 + dummy 值）。✅ 已加 auggie/qoder/cline/gemini/factory-droid/corust-agent/poolside
2. 若文件型 → 新建 `launch-adapters/<agent>.ts`（写假凭证到 probeHome + 隔离 env），注册进 `registry.ts`。

---

## 待办：排查 9 个 error

多半是启动参数/凭证格式/超时问题，可救回。逐个 `ACP_VERBOSE=1` 看 stderr：
- agoragentic-acp, crow-cli, dimcode, dirac, fast-agent, kilo, minion-code, nova, pi-acp
- 已知：dirac=超时；crow-cli=连接关闭；fast-agent/minion-code=uvx 可能崩。

---

## 待办（工程）

- [x] 全量重跑产出完整 `acp-capabilities.json`（34/37 ok）+ `cache/*.json`。本机架构链修好后 uvx agent 也能跑。
- [x] launch-adapters 默认随 `ACP_DUMMY_AUTH=1` 应用（env.ts 13 个 + opencode/kimi/autohand/dimcode 4 个文件型）。
- [x] 装底层 CLI 突破 4 个：pi-acp/autohand/cline/dimcode。
- [x] uvx + 架构链修复突破 fast-agent（arm64 uv + arm64 python + x86_64 rust target 兜底）。
- [ ] **qoder**：唯一剩 auth_required，急校验（PAT 联网 `exchangePersonalToken`）。只能 GH Secret 注真 PAT，或放弃。
- [ ] **agoragentic-acp**：`session/new` 方法不存在（ACP 协议版本不兼容），需查它的 ACP 版本/方法名。
- [ ] **minion-code**：包自身 bug（`ImportError: cannot import name 'AuthMethod' from 'acp.schema'`，依赖的 acp 版本不兼容），等上游修。
- [ ] CI：runner 需预装 `autohand-cli` + `@earendil-works/pi-coding-agent` + `cline`（全局 npm i）+ `uv`（uvx），否则这些回退到 auth_required/error/skipped。
- [ ] 加 README 说明用法。

## 环境备忘
- 本机：macOS arm64，pnpm 9.15，node v20，uv/uvx 已装（`/opt/homebrew/bin/uvx`）。
- 参考实现：`/Users/bytedance/Projects/bugs/mark3/aiden/agent-runtime-acp/src/registry/launch-adapters/`（env.ts 里有各厂商 env 变量名映射，可直接复用变量名）。
- ACP schema：`/tmp/acp-schema.json`（auth_required 错误码 `-32000`；`PROTOCOL_VERSION=1`）。
