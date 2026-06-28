import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function computeDateVersion(date: Date, patch: number): string {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}.${month}${day}.${patch}`;
}

async function versionExistsOnNpm(pkgName: string, version: string): Promise<boolean> {
  try {
    const res = await fetch(`https://registry.npmjs.org/${pkgName}/${version}`);
    return res.ok;
  } catch {
    return false;
  }
}

async function nextDateVersion(pkgName: string, date: Date): Promise<string> {
  for (let patch = 0; patch < 100; patch++) {
    const version = computeDateVersion(date, patch);
    if (!(await versionExistsOnNpm(pkgName, version))) {
      return version;
    }
  }
  throw new Error(`set-date-version: no available version for ${date.toISOString().split("T")[0]}`);
}

async function main(): Promise<void> {
  const pkgPath = join(import.meta.dirname, "..", "package.json");
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
  const pkgName = pkg.name as string;

  const now = new Date();
  const version = await nextDateVersion(pkgName, now);

  pkg.version = version;
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

  const changelogPath = join(import.meta.dirname, "..", "CHANGELOG.md");
  try {
    let changelog = readFileSync(changelogPath, "utf8");
    changelog = changelog.replace(/^## \d+\.\d+\.\d+/m, `## ${version}`);
    writeFileSync(changelogPath, changelog);
  } catch {
    // No CHANGELOG.md yet — changesets will create it
  }

  console.log(`set-date-version: set version to ${version}`);
}

main().catch((e) => {
  console.error(`set-date-version: ${e instanceof Error ? e.message : String(e)}`);
  process.exit(1);
});
