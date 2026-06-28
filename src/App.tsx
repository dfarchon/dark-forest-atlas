import Atmosphere from "./components/Atmosphere";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import EraSection from "./components/EraSection";
import StackComparison from "./components/StackComparison";
import Reveal from "./components/Reveal";
import { ERAS } from "./data/versions";

const NAV = [
  { href: "#timeline", label: "timeline" },
  { href: "#origin", label: "01" },
  { href: "#ares", label: "02" },
  { href: "#mud", label: "03" },
  { href: "#aztec", label: "04" },
  { href: "#compare", label: "compare" },
];

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Atmosphere />

      <div className="relative z-10">
        <nav className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
            <a href="#top" className="font-mono text-xs tracking-[0.3em] text-white">
              df<span className="text-white/50">/</span>atlas
            </a>
            <ul className="hidden items-center gap-8 sm:flex">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <main id="top">
          <Hero />
          <Timeline />
          {ERAS.map((era, i) => (
            <EraSection key={era.id} era={era} index={i} total={ERAS.length} />
          ))}
          <StackComparison />
        </main>

        <footer className="border-t border-line py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <p className="font-display text-3xl font-light lowercase tracking-tightest text-steel">
                the world has no off switch.
              </p>
              <p className="mt-8 max-w-xl text-sm font-light leading-relaxed text-dim">
                An unofficial atlas of the community maintained Dark Forest. Original game by the
                Dark Forest team; community versions by the{" "}
                <a
                  href="https://x.com/DFArchon"
                  target="_blank"
                  rel="noreferrer"
                  className="text-steel underline decoration-line underline-offset-4 hover:text-ink"
                >
                  DFArchon team
                </a>
                . Technical details sourced from public repositories, for educational purposes.
              </p>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
                {[
                  { l: "github", h: "https://github.com/dfarchon" },
                  { l: "twitter", h: "https://x.com/DFArchon" },
                  { l: "dfarchon.xyz", h: "https://dfarchon.xyz/" },
                  { l: "onchainreality", h: "https://onchainreality.xyz/" },
                  { l: "dfpunk.xyz", h: "https://dfpunk.xyz/" },
                ].map((x) => (
                  <a
                    key={x.h}
                    href={x.h}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[10px] uppercase tracking-[0.3em] text-dim transition-colors hover:text-ink"
                  >
                    {x.l} ↗
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </footer>
      </div>
    </div>
  );
}
