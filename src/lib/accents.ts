import type { EraId } from "../data/versions";

// Pak: no colour. Eras are distinguished only by index and by mass,
// with the form growing as the architecture accumulates.
export interface AccentClasses {
  num: string; // two-digit index
  mass: number; // sphere diameter (px), relative "mass" of the era
}

export const ACCENTS: Record<EraId, AccentClasses> = {
  origin: { num: "01", mass: 56 },
  ares: { num: "02", mass: 84 },
  mud: { num: "03", mass: 120 },
  aztec: { num: "04", mass: 100 },
};
