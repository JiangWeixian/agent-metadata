import type { Registry } from "./types";

export const DEFAULT_REGISTRY_URL =
  "https://cdn.agentclientprotocol.com/registry/v1/latest/registry.json";

export async function fetchRegistry(
  url: string = DEFAULT_REGISTRY_URL,
): Promise<Registry> {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) {
    throw new Error(`Failed to fetch registry from ${url}: ${res.status} ${res.statusText}`);
  }
  const body = (await res.json()) as Registry;
  if (!body || !Array.isArray(body.agents)) {
    throw new Error(`Registry at ${url} has invalid shape: missing 'agents' array`);
  }
  return body;
}
