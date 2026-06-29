# DF-Atlas: Dark Forest tech-stack evolution

An atlas of the **community-maintained Dark Forest** versions built by the
[DFArchon team](https://x.com/DFArchon) after the official team stopped shipping
in early 2022. The site focuses on **tech stacks** and **how the architecture
evolved** across three eras:

| Era | Codename | Architecture |
| --- | --- | --- |
| Original Dark Forest | `darkforest-eth` v0.3→v0.6.5 | zkSNARK fog of war · Diamond (ERC-2535) |
| Dark Forest ARES | `DFAres` v0.1.1→v0.1.5 | Diamond (ERC-2535) · Hardhat · Webpack |
| Dark Forest MUD → Punk | `DF-MUD` v0.1.1→v0.1.4 · `DF-PUNK` v0.1.1 | MUD engine · ECS · Foundry · Vite |
| Dark Forest Aztec | `dfpunk-aztec` v0.1.0 | Noir contracts · Aztec · Poseidon2 state-hash |

The site has three core views: a **timeline**, per-era **deep-dives** (story +
tech-stack grid + version milestones), and a side-by-side **stack comparison**.

## Tech

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) (deep-space theme)

## Develop

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

## Editing content

All version/tech-stack data lives in a single typed file:
[`src/data/versions.ts`](src/data/versions.ts). Add a version by appending to the
relevant era's `versions` array, or add a comparison row in `COMPARE_ROWS`.

## Sources

Technical details are sourced from the public repositories and docs:
[`darkforest-v0.6`](https://github.com/darkforest-eth/darkforest-v0.6),
[`DFARES-v0.1`](https://github.com/dfarchon/DFARES-v0.1),
[`dark-forest-punk`](https://github.com/dfarchon/dark-forest-punk),
[`dark-forest-aztec`](https://github.com/dfarchon/dark-forest-aztec),
[dfpunk.xyz](https://dfpunk.xyz/) and the official
[DFArchon timeline](https://dfarchon.xyz/timeline). Unofficial, for educational purposes.
