import { COMPARE_ROWS } from "../data/versions";
import Reveal from "./Reveal";

const COLS = [
  { key: "origin" as const, label: "original", sub: "01 · official" },
  { key: "ares" as const, label: "df ares", sub: "02 · diamond" },
  { key: "mud" as const, label: "df mud / punk", sub: "03 · ecs" },
  { key: "aztec" as const, label: "df aztec", sub: "04 · noir" },
];

export default function StackComparison() {
  return (
    <section
      id="compare"
      className="scroll-mt-24 border-t border-neutral-800 py-40"
    >
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="label mb-8">side by side</p>
          <h2 className="display">what changed</h2>
          <p className="reading mt-8">
            ARES kept the original stack; MUD rebuilt it on an ECS engine; Aztec
            is a separate, privacy native branch that swaps Solidity for Noir.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-neutral-800">
                  <th className="py-5 pr-6 align-bottom">
                    <span className="label">dimension</span>
                  </th>
                  {COLS.map((c) => (
                    <th key={c.key} className="px-4 py-5 align-bottom">
                      <span className="block font-sans text-lg font-semibold lowercase tracking-tight text-pink-200">
                        {c.label}
                      </span>
                      <span className="label mt-1 block">{c.sub}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr
                    key={row.dimension}
                    className="border-b border-neutral-800 transition-colors hover:bg-neutral-900"
                  >
                    <td className="py-4 pr-6 align-top font-normal text-pink-100">
                      {row.dimension}
                    </td>
                    {COLS.map((c) => (
                      <td
                        key={c.key}
                        className="px-4 py-4 align-top font-sans text-[12px] font-normal leading-snug tabular-nums text-pink-100"
                      >
                        {row[c.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <p className="label mt-6">
          sourced from each project's package.json, readme, mud.config.ts &amp;
          docs/architecture.md
        </p>
      </div>
    </section>
  );
}
