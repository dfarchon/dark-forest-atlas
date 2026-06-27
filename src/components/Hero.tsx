import Reveal from "./Reveal";
import Planet from "./Planet";

export default function Hero() {
  return (
    <header className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
      <Reveal>
        <div className="mb-16 mt-12 flex items-center justify-center">
          <Planet size={180} />
        </div>
      </Reveal>

      <Reveal delay={150}>
        <p className="label mb-10">
          zk experiments · onchain worlds · community archive
        </p>
      </Reveal>

      <Reveal delay={260}>
        <h1 className="font-display text-6xl font-light lowercase leading-[0.9] tracking-tightest text-ink sm:text-8xl">
          dark forest atlas
        </h1>
      </Reveal>

      <Reveal delay={460}>
        <p className="mx-auto mt-10 max-w-2xl text-base font-light leading-relaxed text-steel">
          Dark Forest is a fully onchain strategy game with a zk fog of war.
          <br />
          This atlas follows the DFArchon community team's later branches and
          the technology that evolved beneath them.
        </p>
      </Reveal>

      <Reveal delay={600}>
        <a
          href="#timeline"
          className="group relative mt-10 inline-flex min-w-72 items-center justify-center gap-5 border border-ink/30 bg-white/[0.04] px-6 py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-ink shadow-[0_0_30px_rgba(255,255,255,0.06)] transition-all duration-500 hover:border-ink/70 hover:bg-white/[0.08] hover:shadow-[0_0_44px_rgba(255,255,255,0.1)]"
        >
          <span>explore timeline</span>
        </a>
      </Reveal>
    </header>
  );
}
