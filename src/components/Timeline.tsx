import { ERAS } from "../data/versions";
import { ACCENTS } from "../lib/accents";
import Reveal from "./Reveal";
import Mark from "./Mark";

export default function Timeline() {
  return (
    <section id="timeline" className="py-40">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="label mb-8">i · iv · the drift</p>
          <h2 className="display max-w-2xl">four forms, one lineage</h2>
          <p className="reading mt-8">
            From Dark Forest's original zkSNARK architecture to its later Diamond based
            implementation, through DFArchon's continued development on Diamond and a ground up
            rebuild on MUD, to a privacy native port on Aztec. Four approaches, the same dark.
          </p>
        </Reveal>

        <div className="relative mt-28 pl-2 sm:pl-0">
          <div className="space-y-24">
            {ERAS.map((era, i) => {
              const a = ACCENTS[era.id];
              return (
                <Reveal key={era.id} delay={i * 80}>
                  <a
                    href={`#${era.id}`}
                    className="group grid grid-cols-1 items-center gap-x-12 gap-y-8 sm:grid-cols-[170px_1fr]"
                  >
                    <div className="flex items-center justify-center">
                      <Mark index={i} total={ERAS.length} size={64} />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-4">
                        <span className="font-sans text-xs tabular-nums text-pink-300">
                          {a.num}
                        </span>
                        <span className="label">{era.period}</span>
                      </div>
                      <h3 className="display mt-3 transition-colors duration-500 group-hover:text-pink-400">
                        {era.name}
                      </h3>
                      <p className="mt-2 font-sans text-xs text-pink-300">{era.codename}</p>
                      <p className="statement mt-5 max-w-lg">{era.tagline}</p>
                      <p className="mt-5 font-sans text-[11px] tabular-nums tracking-wider text-pink-300">
                        {era.versions.map((v) => v.version).join("   ·   ")}
                      </p>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
