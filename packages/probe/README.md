# @agent-metadata/probe

[![private](https://img.shields.io/badge/package-private-f69220?style=flat-square)](package.json)

The probe tool behind the [`acp-agent-metadata`](../data) package. It fetches the ACP agent registry, launches every agent over stdio, speaks the Agent Client Protocol, and records each agent's modes, commands, capabilities, and auth methods as `cache/<id>.json`.

This package is `private: true` and is **not published**. It runs on CI and locally to refresh the metadata that `packages/data` ships.

## How it works

```text
registry.json ──▶ for each agent ──▶ spawn → initialize → session/new → collect
                                                      └──▶ cache/<id>.json (status: "ok" only)
└──▶ acp-capabilities.json (aggregate of all results)
```

- Modes and config options come from the `session/new` response.
- Commands are collected from the `session/update` `available_commands_update` notification after a short settle window.
- Capabilities and auth methods come from `initialize` (pre-auth).
- Each successful agent is written to `cache/<id>.json` immediately, so a mid-run crash keeps prior results.

Entry point: [`src/index.ts`](src/index.ts).

## Run

```bash
pnpm install
ACP_DUMMY_AUTH=1 pnpm start                       # probe every agent in the registry
ACP_AGENTS=kimi,gemini ACP_DUMMY_AUTH=1 pnpm start # probe a subset
ACP_SKIP_CACHED=1 ACP_DUMMY_AUTH=1 pnpm start      # reuse cached ok agents, retry the rest
```

`ACP_DUMMY_AUTH=1` is normally required headless: it injects dummy credentials and applies the launch-adapters below so agents clear their auth gate without a real login.

## Configuration

All options are environment variables. Types and defaults come from [`src/index.ts`](src/index.ts) and [`src/install.ts`](src/install.ts).

| Option | Type | Default | Example | Description |
| --- | --- | --- | --- | --- |
| `ACP_AGENTS` | `string` (csv) | _unset (all)_ | `kimi,gemini` | Comma-separated agent IDs to probe; omit to probe the full registry. |
| `ACP_DUMMY_AUTH` | `"1"` \| unset | unset | `1` | Inject dummy credentials and apply launch-adapters to bypass auth gates. |
| `ACP_SKIP_CACHED` | `"1"` \| unset | unset | `1` | Load previously-ok agents from `cache/` and skip re-probing them. |
| `ACP_OUTPUT` | `string` (path) | `acp-capabilities.json` | `out.json` | Path to the aggregate JSON output. |
| `ACP_CACHE_DIR` | `string` (path) | `cache` (results) / `.acp-cache` (binaries) | `.cache` | Read by both `index.ts` for result shards and `install.ts` for downloaded binary agents, each with its own default. |
| `ACP_REGISTRY_URL` | `string` (url) | `https://cdn.agentclientprotocol.com/registry/v1/latest/registry.json` | _custom url_ | ACP agent registry JSON to probe. |
| `ACP_TIMEOUT_MS` | `number` | `90000` | `120000` | Per-agent probe timeout in milliseconds. |
| `ACP_SETTLE_MS` | `number` | `2500` | `3000` | Milliseconds to wait after `session/new` before collecting commands. |
| `ACP_VERBOSE` | `"1"` \| unset | unset | `1` | Print per-agent progress to stderr. |
| `ACP_UVX_BIN` | `string` (path) | `uvx` | `/opt/homebrew/bin/uvx` | `uvx` binary for Python-based agents (`fast-agent`, `minion-code`). |
| `ACP_NPX_RUNNER` | `string` | `npx` | `pnpm dlx` | Runner used to launch npx-based agents. |

## Launch adapters

[`src/launch-adapters/`](src/launch-adapters) applies per-agent launch patches when `ACP_DUMMY_AUTH=1`:

- `env.ts` — env-only agents (e.g. `goose`, `gemini`, `cline`, `factory-droid`, `poolside`): inject the vendor's API-key env var.
- `opencode.ts`, `kimi.ts`, `autohand.ts` — file-based agents: write a dummy credential file under an isolated `probeHome` and redirect `HOME` / `XDG_DATA_HOME` so the real `~/.config` is never touched.
- `dimcode.ts` — pre-configures a dummy provider via `npx dimcode provider add/switch` under `HOME` isolation.

Agents that validate credentials against a live backend (for example `qoder`, which exchanges a PAT online) cannot be bypassed and surface as `auth_required`.

## Output

```bash
ACP_DUMMY_AUTH=1 pnpm start
```

writes, relative to the package root:

- `cache/<id>.json` — one `AgentResult` per `status: "ok"` agent (incremental; survives crashes).
- `acp-capabilities.json` — aggregate of every probed agent, plus `generatedAt`, `registryVersion`, and `ok`/`total` counts.

`packages/data` then runs `pnpm codegen` against `cache/` to regenerate the typed package.

## Notes

- `.acp-cache/` holds downloaded binary agents (gitignored); npx-based agents are cached by npx itself.
- Some agents need their underlying CLI pre-installed on `PATH` to clear launch (`autohand-cli`, `@earendil-works/pi-coding-agent`, `cline`). Without them they fall back to `auth_required` or `error`.
- See the root [README](../../README.md) for workspace-wide context, status, and license.
