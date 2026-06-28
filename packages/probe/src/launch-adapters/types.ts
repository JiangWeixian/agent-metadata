export type MaybePromise<T> = Promise<T> | T

export interface LaunchPatch {
  env?: Record<string, string>
  args?: string[]
  note?: string
}

export interface LaunchAdapterContext {
  agentId: string
  version: string
  probeHome: string
}

export interface LaunchAdapter {
  agentId: string
  apply: (context: LaunchAdapterContext) => MaybePromise<LaunchPatch | null>
}
