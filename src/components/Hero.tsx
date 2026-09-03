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
        <h1 className="display">dark forest atlas</h1>
      </Reveal>

      <Reveal delay={460}>
        <p className="statement mx-auto mt-10 max-w-[45rem]">
          Dark Forest is a fully onchain strategy game with a zk fog of war.
          <br />
          This atlas follows the DFArchon community team's later branches and
          the technology that evolved beneath them.
        </p>
      </Reveal>

      <Reveal delay={600}>
        <a
          href="#timeline"
          className="group relative mt-10 inline-flex min-w-72 items-center justify-center gap-5 border border-pink-300/40 bg-neutral-900 px-6 py-4 font-sans text-[11px] font-semibold uppercase tracking-ultra text-pink-300 shadow-[0_0_30px_rgba(255,232,237,0.08)] transition-all duration-500 hover:border-pink-400 hover:text-pink-400 hover:shadow-[0_0_44px_rgba(255,232,237,0.16)]"
        >
          <span>explore timeline</span>
        </a>
      </Reveal>
    </header>
  );
}
