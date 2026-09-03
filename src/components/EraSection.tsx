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
    <article className="border-t border-neutral-800">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group grid w-full grid-cols-1 items-baseline gap-x-12 gap-y-2 py-7 text-left transition-colors md:grid-cols-[11rem_1fr]"
      >
        <div>
          <span className="font-sans text-sm tabular-nums text-pink-100">{v.version}</span>
          <span className="mt-1.5 block font-sans text-xs tabular-nums text-pink-100">
            {v.date}
          </span>
          {v.network && (
            <span className="label mt-2 block">net · {v.network}</span>
          )}
        </div>
        <div className="flex items-start justify-between gap-6">
          <h4 className="font-sans text-[25px] font-semibold lowercase leading-[1.3] tracking-tight text-pink-200 transition-colors group-hover:text-pink-400">
            {v.title}
          </h4>
          <span
            className={`mt-1.5 shrink-0 select-none font-sans text-lg leading-none text-pink-300 transition-all duration-300 group-hover:text-pink-400 ${
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
            <p className="reading">{v.summary}</p>
            <ul className="mt-6 space-y-2.5">
              {v.highlights.map((h) => (
                <li key={h} className="flex gap-3 font-sans text-sm font-normal text-pink-100">
                  <span className="mt-2 h-px w-3 shrink-0 bg-pink-400" />
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
                    className="font-sans text-[11px] font-semibold uppercase tracking-ultra text-pink-300 underline-offset-4 transition-colors hover:text-pink-400 hover:underline"
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
    <section
      id={era.id}
      className="relative scroll-mt-24 overflow-hidden border-t border-neutral-800 py-40"
    >
      {/* colossal ghost index */}
      <span
        className="pointer-events-none absolute -top-10 right-0 select-none font-sans text-[34vw] font-semibold leading-none text-pink-100/[0.04] sm:text-[24rem]"
        aria-hidden
      >
        {a.num}
      </span>

      <div className="relative mx-auto max-w-4xl px-6">
        {/* header */}
        <Reveal>
          <div className="mb-12 flex items-center gap-6">
            <Mark index={index} total={total} size={40} />
            <span className="h-px flex-1 bg-neutral-800" />
            <span className="label">{era.period}</span>
          </div>
          <h2 className="display">{era.name}</h2>
          <p className="mt-4 font-sans text-sm text-pink-300">{era.codename}</p>
          <p className="statement mt-8 max-w-[45rem]">{era.tagline}</p>
        </Reveal>

        {/* story */}
        <Reveal delay={120}>
          <p className="reading mt-16 border-l border-neutral-800 pl-7">{era.story}</p>
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
            <span className="font-sans text-[11px] font-semibold uppercase tracking-ultra text-pink-300">
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
            className="mt-14 inline-flex items-center gap-2 border-t border-neutral-800 pt-10 font-sans text-[11px] font-semibold uppercase tracking-ultra text-pink-300 transition-colors hover:text-pink-400"
          >
            source · {repoLabel(era.repo)} ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
