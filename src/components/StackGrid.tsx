import type { Era, StackItem } from "../data/versions";

const GROUPS: { key: keyof Era["stack"]; label: string }[] = [
  { key: "language", label: "language & runtime" },
  { key: "contracts", label: "smart contracts" },
  { key: "zk", label: "zero knowledge" },
  { key: "frontend", label: "frontend" },
  { key: "data", label: "data layer" },
  { key: "tooling", label: "tooling" },
];

function Items({ items }: { items: StackItem[] }) {
  return (
    <ul className="space-y-4">
      {items.map((it) => (
        <li key={it.label}>
          <span className="label mb-1.5 block">{it.label}</span>
          <span className="font-light leading-snug text-ink">{it.value}</span>
        </li>
      ))}
    </ul>
  );
}

export default function StackGrid({ era }: { era: Era }) {
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {GROUPS.map((g) => (
        <div key={g.key} className="border-t border-line pt-5">
          <h4 className="mb-6 font-display text-base font-light lowercase tracking-tight text-steel">
            {g.label}
          </h4>
          <Items items={era.stack[g.key]} />
        </div>
      ))}
    </div>
  );
}
