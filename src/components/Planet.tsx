interface PlanetProps {
  size: number; // diameter in px
  className?: string;
}

// A flat circular mark in the dark, the single recurring form.
export default function Planet({ size, className = "" }: PlanetProps) {
  return (
    <span
      className={`orb block shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    />
  );
}
