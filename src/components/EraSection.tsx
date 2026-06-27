import { useState } from "react";
import type { Era, VersionEntry } from "../data/versions";
import { ACCENTS } from "../lib/accents";
import StackGrid from "./StackGrid";
import Reveal from "./Reveal";
import Mark from "./Mark";

function repoLabel(repo: string) {
  return repo.replace("https://github.com/", "").replace(/-/g, " ");
}

function VersionItem({
  version: v,
  defaultOpen,
}: {
  version: VersionEntry;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article className="border-t border-line">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group grid w-full grid-cols-1 items-baseline gap-x-12 gap-y-2 py-7 text-left transition-colors md:grid-cols-[11rem_1fr]"
      >
        <div>
          <span className="font-mono text-sm text-ink">{v.version}</span>
          <span className="mt-1.5 block font-mono text-xs text-faint">{v.date}</span>
          {v.network && (
            <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              net · {v.network}
            </span>
          )}
        </div>
        <div className="flex items-start justify-between gap-6">
          <h4 className="font-display text-2xl font-light lowercase tracking-tight text-ink transition-colors group-hover:text-steel">
            {v.title}
          </h4>
          <span
            className={`mt-1.5 shrink-0 select-none font-mono text-lg leading-none text-faint transition-all duration-300 group-hover:text-ink ${
              open ? "rotate-45" : ""
            }`}
            aria-hidden
          >
            +
          </span>
        </div>
      </button>

      {open && (
        <div className="grid grid-cols-1 gap-x-12 gap-y-3 pb-10 md:grid-cols-[11rem_1fr]">
          <div className="hidden md:block" aria-hidden />
          <div>
            <p className="max-w-2xl font-light leading-relaxed text-steel">{v.summary}</p>
            <ul className="mt-6 space-y-2.5">
              {v.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm font-light text-dim">
                  <span className="mt-2 h-px w-3 shrink-0 bg-dim" />
                  {h}
                </li>
              ))}
            </ul>
            {v.links && v.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2">
                {v.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[11px] uppercase tracking-wider text-faint underline decoration-line underline-offset-4 transition-colors hover:text-ink"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

export default function EraSection({
  era,
  index,
  total,
}: {
  era: Era;
  index: number;
  total: number;
}) {
  const a = ACCENTS[era.id];

  return (
    <section id={era.id} className="relative scroll-mt-24 overflow-hidden border-t border-line py-40">
      {/* colossal ghost index */}
      <span
        className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[34vw] font-light leading-none text-white/[0.025] sm:text-[24rem]"
        aria-hidden
      >
        {a.num}
      </span>

      <div className="relative mx-auto max-w-4xl px-6">
        {/* header */}
        <Reveal>
          <div className="mb-12 flex items-center gap-6">
            <Mark index={index} total={total} size={40} />
            <span className="h-px flex-1 bg-line" />
            <span className="label">{era.period}</span>
          </div>
          <h2 className="font-display text-5xl font-light lowercase leading-[0.95] tracking-tightest text-ink sm:text-7xl">
            {era.name}
          </h2>
          <p className="mt-4 font-mono text-sm text-dim">{era.codename}</p>
          <p className="mt-8 max-w-2xl text-xl font-light leading-relaxed text-steel">
            {era.tagline}
          </p>
        </Reveal>

        {/* story */}
        <Reveal delay={120}>
          <p className="mt-16 max-w-2xl border-l border-line pl-7 font-light leading-loose text-ink/90">
            {era.story}
          </p>
        </Reveal>

        {/* stack */}
        <Reveal delay={120}>
          <p className="label mb-10 mt-28">tech stack</p>
          <StackGrid era={era} />
        </Reveal>

        {/* versions */}
        <Reveal delay={120}>
          <div className="mb-2 mt-28 flex items-baseline justify-between">
            <p className="label">versions &amp; milestones</p>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-faint">
              {era.versions.length} releases · tap to expand
            </span>
          </div>
        </Reveal>
        <div className="mt-8">
          {era.versions.map((v, i) => (
            <Reveal key={v.id} delay={i * 40}>
              <VersionItem version={v} defaultOpen={i === era.versions.length - 1} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a
            href={era.repo}
            target="_blank"
            rel="noreferrer"
            className="mt-14 inline-flex items-center gap-2 border-t border-line pt-10 font-mono text-[11px] uppercase tracking-wider text-faint transition-colors hover:text-ink"
          >
            source · {repoLabel(era.repo)} ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
