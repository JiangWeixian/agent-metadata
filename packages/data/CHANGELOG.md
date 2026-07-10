# acp-agent-metadata

## 0.1.0

### Minor Changes

- 40e6409: Add first-class `models`, `currentModelId`, `reasoningEfforts`, and `currentReasoningEffortId` fields to `AgentMetadata` — type-safe flattened views derived from `configOptions` (the `category: "model"` / `id: "model"` and `category: "thought_level"` selects), mirroring the existing `modes` / `currentModeId` shape. `configOptions` itself is preserved verbatim, so this is fully backward-compatible.

## 0.0.1

### Patch Changes

- 73bc3b2: Update agent metadata snapshot
