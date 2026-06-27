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
    <section id="compare" className="scroll-mt-24 border-t border-line py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="label mb-8">side by side</p>
          <h2 className="font-display text-4xl font-light lowercase leading-[1.05] tracking-tightest text-ink sm:text-6xl">
            what changed
          </h2>
          <p className="mt-8 max-w-xl font-light text-steel">
            ARES kept the original stack; MUD rebuilt it on an ECS engine; Aztec
            is a separate, privacy native branch that swaps Solidity for Noir
            and moves proving onchain.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-ink/20">
                  <th className="py-5 pr-6 align-bottom">
                    <span className="label">dimension</span>
                  </th>
                  {COLS.map((c) => (
                    <th key={c.key} className="px-4 py-5 align-bottom">
                      <span className="block font-display text-lg font-light lowercase tracking-tight text-ink">
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
                    className="border-b border-line transition-colors hover:bg-white/[0.02]"
                  >
                    <td className="py-4 pr-6 align-top font-light text-ink">
                      {row.dimension}
                    </td>
                    {COLS.map((c) => (
                      <td
                        key={c.key}
                        className="px-4 py-4 align-top font-mono text-[12px] font-normal leading-snug text-steel"
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

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
          sourced from each project's package.json, readme, mud.config.ts &amp;
          docs/architecture.md
        </p>
      </div>
    </section>
  );
}
