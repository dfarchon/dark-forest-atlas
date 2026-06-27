interface MarkProps {
  index: number; // which slice lights up (0-based)
  total: number; // number of equal slices the ring is divided into
  size?: number; // fixed outer diameter (same across versions)
  className?: string;
}

// A flat ring of fixed size, divided into `total` equal slices like a clock.
// Versions differ only by which single slice is drawn: version `index` lights
// up its own slice and nothing else. Works for any `total` (4, 6, …).
export default function Mark({ index, total, size = 54, className = "" }: MarkProps) {
  const stroke = 1.25;
  const r = (size - stroke) / 2;
  const cx = size / 2;
  const c = 2 * Math.PI * r;

  const slice = c / total;
  const gap = Math.min(slice * 0.25, 6); // breathing room between slices
  const litLen = Math.max(slice - gap, 0.5);

  // angle of the slice start, clockwise from 12 o'clock, plus half the gap so
  // the lit arc sits centered inside its slot.
  const rotation = -90 + (index / total) * 360 + (gap / c) * 180;

  return (
    <svg width={size} height={size} className={className} aria-hidden>
      {/* faint full track */}
      <circle cx={cx} cy={cx} r={r} fill="none" stroke="rgba(244,244,245,0.12)" strokeWidth={stroke} />
      {/* single lit slice */}
      <circle
        cx={cx}
        cy={cx}
        r={r}
        fill="none"
        stroke="#F4F4F5"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${litLen} ${c - litLen}`}
        transform={`rotate(${rotation} ${cx} ${cx})`}
      />
    </svg>
  );
}
