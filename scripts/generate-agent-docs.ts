import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { COMPARE_ROWS, ERAS, type Era } from "../src/data/versions.ts";

const BASE_URL = "https://df-atlas.onchainreality.xyz";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = join(ROOT, "public");
const API_DIR = join(PUBLIC, "api");

function buildLlmsTxt(): string {
  const sourceLinks = ERAS.map(
    (era) => `- [${era.name}](${era.repo}): ${era.codename} · ${era.period}`,
  ).join("\n");

  return `# DF-Atlas
> Unofficial atlas of community-maintained Dark Forest tech stacks after the official team stopped shipping (2022).

Dark Forest eras: Origin → ARES → MUD/Punk → Aztec. Focus is architecture and stack evolution, not gameplay guides. All structured content is generated from a single typed data source.

## Machine-readable data
- [Full atlas (Markdown)](${BASE_URL}/llms-full.txt): All eras, versions, stacks, and the side-by-side comparison
- [Eras JSON](${BASE_URL}/api/eras.json): Structured eras + versions (UI-only fields omitted)
- [Compare JSON](${BASE_URL}/api/compare.json): Side-by-side stack comparison rows

## Human site
- [Home](${BASE_URL}/): Timeline, era deep-dives, stack comparison

## Sources
${sourceLinks}
`;
}

function formatStackItems(
  items: { label: string; value: string }[],
): string {
  return items.map((item) => `- **${item.label}**: ${item.value}`).join("\n");
}

function formatEra(era: Era): string {
  const stackSections = (
    [
      ["Language", era.stack.language],
      ["Contracts", era.stack.contracts],
      ["ZK", era.stack.zk],
      ["Frontend", era.stack.frontend],
      ["Data", era.stack.data],
      ["Tooling", era.stack.tooling],
    ] as const
  )
    .map(
      ([title, items]) =>
        `#### ${title}\n${formatStackItems(items)}`,
    )
    .join("\n\n");

  const versions = era.versions
    .map((v) => {
      const parts = [
        `### ${v.version} — ${v.title}`,
        "",
        `- **Date**: ${v.date}`,
        `- **Id**: ${v.id}`,
      ];
      if (v.network) parts.push(`- **Network**: ${v.network}`);
      parts.push("", v.summary);
      if (v.highlights.length > 0) {
        parts.push("", "**Highlights:**");
        for (const h of v.highlights) parts.push(`- ${h}`);
      }
      if (v.links && v.links.length > 0) {
        parts.push("", "**Links:**");
        for (const link of v.links) {
          parts.push(`- [${link.label}](${link.href})`);
        }
      }
      return parts.join("\n");
    })
    .join("\n\n");

  return `## ${era.name}

- **Id**: ${era.id}
- **Codename**: ${era.codename}
- **Period**: ${era.period}
- **Maintainer**: ${era.maintainer}
- **Tagline**: ${era.tagline}
- **Repo**: ${era.repo}

### Story

${era.story}

### Stack

${stackSections}

### Versions

${versions}
`;
}

function buildCompareMarkdown(): string {
  const header =
    "| Dimension | Origin | ARES | MUD | Aztec |\n| --- | --- | --- | --- | --- |";
  const rows = COMPARE_ROWS.map(
    (row) =>
      `| ${row.dimension} | ${row.origin} | ${row.ares} | ${row.mud} | ${row.aztec} |`,
  ).join("\n");
  return `## Stack comparison\n\n${header}\n${rows}\n`;
}

function buildLlmsFullTxt(): string {
  const eras = ERAS.map(formatEra).join("\n");
  return `# DF-Atlas — full atlas

> Unofficial atlas of community-maintained Dark Forest tech stacks after the official team stopped shipping (2022).

${eras}
${buildCompareMarkdown()}`;
}

function erasForJson() {
  return ERAS.map(({ accent: _accent, ...rest }) => rest);
}

function write(path: string, content: string) {
  writeFileSync(path, content, "utf8");
  console.log(`wrote ${path}`);
}

mkdirSync(API_DIR, { recursive: true });

write(join(PUBLIC, "llms.txt"), buildLlmsTxt());
write(join(PUBLIC, "llms-full.txt"), buildLlmsFullTxt());
write(
  join(API_DIR, "eras.json"),
  `${JSON.stringify(erasForJson(), null, 2)}\n`,
);
write(
  join(API_DIR, "compare.json"),
  `${JSON.stringify(COMPARE_ROWS, null, 2)}\n`,
);
