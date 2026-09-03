// Pure black void. Nothing but the faintest vignette and a fine grain.
export default function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_32%,rgba(255,232,237,0.08)_0%,transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(135%_120%_at_50%_45%,transparent_60%,rgba(0,0,0,0.85)_100%)]" />
      <div className="grain" />
    </div>
  );
}
