import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["dist-src/index.ts", "dist-src/types.ts", "dist-src/agents/*.ts"],
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: { resolve: true },
  clean: true,
});
