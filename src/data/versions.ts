// All technical details below are sourced from the actual repositories and
// official docs:
//   - github.com/darkforest-eth/darkforest-v0.6        (original, foundational)
//   - github.com/dfarchon/DFARES-v0.1                  (DF-ARES, Diamond/ERC-2535)
//   - github.com/dfarchon/darkforest-mud + dfpunk.xyz  (DF-MUD, MUD/ECS)
//   - github.com/dfarchon/dark-forest-aztec            (DF-Aztec, Noir/Aztec)

export type EraId = "origin" | "ares" | "mud" | "aztec";

export interface StackItem {
  label: string;
  value: string;
}

export interface VersionEntry {
  id: string;
  version: string;
  date: string; // human label
  sortKey: number; // for ordering on the timeline
  title: string;
  summary: string;
  highlights: string[];
  // The production network this round was deployed to. Network is a per-round
  // property (it shifts between rounds/eras), so it lives here, not on the era.
  network?: string;
  links?: { label: string; href: string }[];
}

export interface Era {
  id: EraId;
  name: string;
  codename: string;
  period: string;
  maintainer: string;
  tagline: string;
  accent: string; // tailwind color token
  // The defining architectural story of this era.
  story: string;
  // Concrete, verifiable stack facts.
  stack: {
    language: StackItem[];
    contracts: StackItem[];
    zk: StackItem[];
    frontend: StackItem[];
    data: StackItem[];
    tooling: StackItem[];
  };
  versions: VersionEntry[];
  repo: string;
}

export const ERAS: Era[] = [
  {
    id: "origin",
    name: "Original Dark Forest",
    codename: "darkforest-eth · v0.3 → v0.6.5",
    period: "2019 to Q1 2022",
    maintainer: "Dark Forest official team",
    tagline:
      "The foundation: a space-themed fully onchain MMORTS with a zkSNARK fog of war.",
    accent: "plasma",
    story:
      "The original team built the template every later branch inherits: a yarn workspaces monorepo split into circuits / eth / client. zkSNARKs power a cryptographic fog of war. The client generates proofs locally and the contracts verify them before mutating onchain state. In v0.6.5 the contracts migrated to the Diamond standard (ERC-2535) for modular, upgradeable game logic. After Q1 2022 the official team stopped shipping new versions, leaving the open source code for the community.",
    stack: {
      language: [
        { label: "Language", value: "TypeScript 4.5 + Solidity" },
        { label: "Runtime", value: "Node ≥ 16" },
      ],
      contracts: [
        { label: "Framework", value: "Hardhat" },
        { label: "Architecture", value: "Diamond standard (ERC-2535) since v0.6.5" },
        { label: "Local chain", value: "Hardhat node / Ganache" },
      ],
      zk: [
        { label: "Circuits", value: "Circom" },
        { label: "Prover", value: "snarkjs (proofs generated in browser)" },
        { label: "Verify", value: "Onchain Solidity Verifier.sol" },
      ],
      frontend: [
        { label: "UI", value: "React + WebGL renderer" },
        { label: "Build", value: "Webpack" },
        { label: "Model", value: '"Thin client"; all logic onchain' },
      ],
      data: [
        { label: "Sync", value: "Listen to smart contract events" },
        { label: "Storage", value: "Browser IndexedDB cache" },
      ],
      tooling: [
        { label: "Monorepo", value: "yarn workspaces + Lerna" },
        { label: "Packages", value: "@darkforest_eth/* shared modules" },
        { label: "Quality", value: "ESLint + Prettier" },
      ],
    },
    versions: [
      {
        id: "df-v03",
        version: "v0.3",
        date: "2020 Aug",
        sortKey: 2020.6,
        title: "First public round & reference implementation",
        summary:
          "The first public competitive round, run as a whitelisted beta on the Ethereum Ropsten testnet. The team open sourced the full reference implementation (contracts, Circom ZK circuits and client) on GitHub, with a 1024 DAI prize pool for the top 15 players, then reopened the universe as a freeplay mode.",
        highlights: [
          "First public competitive round on Ropsten testnet",
          "Reference implementation open sourced: contracts + Circom circuits + client",
          "1024 DAI prize pool for the top 15 players",
          "Universe reopened afterward as freeplay mode",
        ],
        network: "Ropsten testnet",
        links: [
          { label: "darkforest-eth org", href: "https://github.com/darkforest-eth" },
          { label: "zkga.me blog", href: "https://blog.zkga.me" },
        ],
      },
      {
        id: "df-v04",
        version: "v0.4",
        date: "2020 Oct",
        sortKey: 2020.8,
        title: "Move to xDAI & burner wallets",
        summary:
          "Ropsten's long reorgs (and at one point crashing the testnet) pushed the game onto the xDAI chain (now Gnosis Chain). Introduced burner wallets stored in browser local storage (inspired by Austin Griffith) with auto dripped xDAI so players could start instantly without a wallet extension. Added NEBULA / space regions, silver mining and planet upgrades.",
        highlights: [
          "Migrated to the xDAI chain (Gnosis Chain) for cheap, fast gas",
          "Burner wallets + auto dripped xDAI, Metamask no longer required",
          "Space regions, silver mining & planet upgrades",
          "1024 DAI prize pool for the top 15 players",
        ],
        network: "xDAI (Gnosis Chain)",
        links: [
          { label: "Announcing v0.4", href: "https://blog.zkga.me/dark-forest-v04" },
        ],
      },
      {
        id: "df-v05",
        version: "v0.5",
        date: "2020 Dec",
        sortKey: 2020.95,
        title: "Plugins & NFT artifacts",
        summary:
          "The Christmas 2020 release that opened the game to modding: a built in plugin system plus plugin-able renderers turned players into builders. Added ERC-721 NFT artifacts discoverable in game (up to Legendary and Mythic rarities), a freeplay mode and 1000+ new invite keys.",
        highlights: [
          "Built in plugin system + custom renderer plugins",
          "ERC-721 NFT artifacts found in game (Legendary & Mythic)",
          "Freeplay mode and 1000+ new invite keys",
          "Sparked the modding / \u201cdigital physics\u201d community",
        ],
        network: "xDAI (Gnosis Chain)",
      },
      {
        id: "df-v061",
        version: "v0.6.1",
        date: "2021 May",
        sortKey: 2021.4,
        title: "The Seekers' Journey: Round 1 (Fascinated Manager)",
        summary:
          "v0.6 \u201cThe Seekers' Journey\u201d reworked the universe around exploration. The Gear ship prospects Foundries to mint artifacts, and Spacetime Rips let players withdraw or deposit artifacts to an xDAI wallet. Space types ran Nebula \u2192 Space \u2192 Deep Space \u2192 Dead Space. From this round the top 63 players were awarded trophy planet NFTs in Valhalla.",
        highlights: [
          "Gear ship + Foundries for minting artifacts",
          "Spacetime Rips to import/export artifacts on chain",
          "Space types: Nebula \u2192 Space \u2192 Deep Space \u2192 Dead Space",
          "Valhalla: top 63 awarded trophy planet NFTs",
        ],
        network: "xDAI (Gnosis Chain)",
      },
      {
        id: "df-v062",
        version: "v0.6.2",
        date: "2021 Jun",
        sortKey: 2021.5,
        title: "Round 2 (Inspire Hallowed)",
        summary:
          "The second v0.6 official round, beginning June 28, 2021. Iterated on balance and stability on the Seekers' Journey ruleset while the plugin and tooling ecosystem kept maturing.",
        highlights: [
          "Second official v0.6 round on xDAI",
          "Balance & stability iteration on the artifact economy",
          "Growing plugin & developer ecosystem",
        ],
        network: "xDAI (Gnosis Chain)",
      },
      {
        id: "df-v063",
        version: "v0.6.3",
        date: "2021 Aug",
        sortKey: 2021.6,
        title: "Round 3 (Grape Extra-Small)",
        summary:
          "The third v0.6 official round, beginning August 12, 2021. Continued tuning scoring and gameplay, with contracts and the @darkforest_eth packages refined round over round.",
        highlights: [
          "Third official v0.6 round",
          "Scoring & gameplay tuning",
          "@darkforest_eth shared packages refined",
        ],
        network: "xDAI (Gnosis Chain)",
      },
      {
        id: "df-v064",
        version: "v0.6.4",
        date: "2021 Oct",
        sortKey: 2021.75,
        title: "Round 4 (Society Eggnog)",
        summary:
          "The fourth v0.6 official round, beginning October 1, 2021. The last round before the contracts were rebuilt on the Diamond standard, and a high water mark for community plugins, bots and onchain players like The Astral Colossus.",
        highlights: [
          "Fourth official v0.6 round",
          "Peak of community plugins, bots & onchain agents",
          "Final round on the monolithic contract architecture",
        ],
        network: "xDAI (Gnosis Chain)",
      },
      {
        id: "df-v065",
        version: "v0.6.5",
        date: "2022 Feb",
        sortKey: 2022.13,
        title: "Round 5 (The Junk Wars): Diamond standard & Lobbies",
        summary:
          "The last official round, beginning February 18, 2022. Contracts were re-architected onto the Diamond standard (EIP-2535): game logic split into facets (DFCore, DFMove, DFArtifact, DFWhitelist, DFAdmin, DFLobby, DFCapture \u2026) composed through diamondCut, breaking past the 24KB contract limit into a modular, upgradeable system. It also shipped Lobbies for self serve custom rounds. After Q1 2022 the official team stopped shipping; every community branch builds on this Diamond codebase.",
        highlights: [
          "Contracts migrated to the Diamond standard (EIP-2535)",
          "Logic split into facets via diamondCut (modular & upgradeable)",
          "Lobbies: self serve custom rounds",
          "Last official round; community inherits this codebase",
        ],
        network: "xDAI (Gnosis Chain)",
        links: [
          { label: "DF & the Diamond Standard", href: "https://blog.zkga.me/dark-forest-and-the-diamond-standard" },
          { label: "darkforest v0.6", href: "https://github.com/darkforest-eth/darkforest-v0.6" },
        ],
      },
    ],
    repo: "https://github.com/darkforest-eth",
  },
  {
    id: "ares",
    name: "Dark Forest ARES",
    codename: "DFAres · v0.1.1 → v0.1.5",
    period: "Q1 2023 to Q2 2024 · revived 2026",
    maintainer: "DFArchon team (community)",
    tagline: "The community-driven takeover of the Diamond stack, keeping the forest alive round after round with new artifacts, sharper ZK and alliance play.",
    accent: "nebula",
    story:
      "DFArchon began in 2021 as active Dark Forest players, first shipping plugins (Highlight Friends, Peace Dove, Towards Center …), then the DF GAIA plugin framework (2022) and the DF ARTEMIS bounty and mercenary system (2022). ARES was the leap from plugins to running full community game rounds. It picked up the open source code and kept the proven stack: Solidity / Hardhat / Circom / React / WebGL, while iterating hard on gameplay and the ZK circuits. Contracts stay on the Diamond standard (ERC-2535); the frontend still builds with Webpack. Shared logic was scoped under @dfares/* packages. The v0.1.1 to v0.1.4 community rounds shipped from 2023 to 2024 on Redstone mainnet, and the line was revived with a modern v0.1.5 test round in 2026.",
    stack: {
      language: [
        { label: "Language", value: "TypeScript 4.5 + Solidity" },
        { label: "Runtime", value: "Node 16 · yarn v1" },
      ],
      contracts: [
        { label: "Framework", value: "Hardhat 2.6.8" },
        { label: "Architecture", value: "Diamond standard (ERC-2535)" },
        { label: "Local chain", value: "Ganache (persistent blocks)" },
      ],
      zk: [
        { label: "Circuits", value: "Circom (enhanced per round)" },
        { label: "Prover", value: "snarkjs" },
        { label: "Notable", value: "v0.1.2 circuit lets center planets level up while hiding coords" },
      ],
      frontend: [
        { label: "UI", value: "React 17 + WebGL renderer" },
        { label: "Build", value: "Webpack" },
        { label: "Port", value: "localhost:8081" },
      ],
      data: [
        { label: "Sync", value: "Smart contract events" },
        { label: "Packages", value: "@dfares/events, @dfares/network" },
      ],
      tooling: [
        { label: "Monorepo", value: "yarn workspaces + Lerna" },
        { label: "Packages", value: "@dfares/* (constants, gamelogic, snarks, renderer …)" },
        { label: "Grant", value: "Optimism OP grant (Season 5)" },
      ],
    },
    versions: [
      {
        id: "ares-011",
        version: "v0.1.1",
        date: "2023 May",
        sortKey: 2023.4,
        title: "Links, shields & avatars",
        summary:
          "First community round. Introduced Fire Link, Ice Link, Stellar Shield and Avatar, plus an artifact purchasing system with cooldowns on buying and activation.",
        highlights: [
          "New artifacts: Fire Link, Ice Link, Stellar Shield, Avatar",
          "Artifact purchasing system introduced",
          "Cooldowns on artifact purchase & activation",
        ],
        network: "Redstone mainnet",
      },
      {
        id: "ares-012",
        version: "v0.1.2",
        date: "2023 Nov",
        sortKey: 2023.9,
        title: "Pink Bomb & smarter ZK",
        summary:
          "Added the Pink Bomb and upgraded the ZK circuit so central planets can reach higher levels while still hiding exact coordinates. Players ranked higher for claiming planets near the universe center.",
        highlights: [
          "New artifact: Pink Bomb",
          "ZK circuit upgrade: high level center planets keep coords hidden",
          "Ranking rewards claiming planets near the center",
        ],
        network: "Redstone mainnet",
      },
      {
        id: "ares-013",
        version: "v0.1.3",
        date: "2024 May",
        sortKey: 2024.4,
        title: "Kardashev & the in game economy",
        summary:
          "Introduced the Kardashev artifact for blue zone resource mobilization, added purchases for planets / artifacts / skins, and sponsor backed bounties.",
        highlights: [
          "New artifact: Kardashev (resource mobilization)",
          "Buy planets, artifacts and skins",
          "Sponsor backed bounties",
        ],
        network: "Redstone mainnet",
      },
      {
        id: "ares-014",
        version: "v0.1.4",
        date: "2024 Aug",
        sortKey: 2024.6,
        title: "Unions & the shrinking core",
        summary:
          "Introduced the Union system for cooperative energy support, and a dynamically shrinking inner radius to slow early center capture and keep rounds competitive. Round 4 ran on Redstone mainnet with 180k+ transactions.",
        highlights: [
          "Union system: cooperative energy support / alliances",
          "Dynamically shrinking inner radius",
          "Redstone mainnet round: 182,680+ transactions",
        ],
        network: "Redstone mainnet",
      },
      {
        id: "ares-015",
        version: "v0.1.5",
        date: "2026 Jun",
        sortKey: 2026.4,
        title: "ARES revived",
        summary:
          "Brings ARES back as a modern test round: configurable artifact rules, a buy energy flow, quick join settings and smoother transaction UX.",
        highlights: [
          "Configurable artifact rules",
          "Buy energy flow + quick join settings",
          "Smoother transaction UX",
        ],
        network: "Redstone mainnet (test round)",
        links: [
          { label: "DFARES v0.1", href: "https://github.com/dfarchon/DFARES-v0.1" },
        ],
      },
    ],
    repo: "https://github.com/dfarchon/DFARES-v0.1",
  },
  {
    id: "mud",
    name: "Dark Forest MUD → Punk",
    codename: "DF MUD v0.1.1 → DF PUNK v0.1.1",
    period: "Q3 2024 to present",
    maintainer: "DFArchon team (community)",
    tagline: "A ground up rebuild on the MUD engine: ECS, fully onchain, now evolving into Dark Forest Punk.",
    accent: "ember",
    story:
      "Starting August 2024, DFArchon ported Dark Forest to the MUD engine and rebuilt both contracts and frontend. The biggest shift: from the Diamond standard to MUD's ECS (Entity Component System) world. Data lives in typed tables (defineWorld, namespace \"df\"), logic lives in Systems. The frontend moved from Webpack to Vite, and from event listening to reading MUD tables directly via @latticexyz/recs + store sync. The team frames its design around \"Function as Entity\". Tooling modernised across the board: pnpm, Foundry, Node 20, TypeScript 5.6. Through 2025 the line iterated to v0.1.4 and was rebranded Dark Forest Punk, adding an 11 material economy (encoded as a MaterialType enum) that lays the foundation for a technology tree.",
    stack: {
      language: [
        { label: "Language", value: "TypeScript 5.6 + Solidity" },
        { label: "Runtime", value: "Node 20 · pnpm ≥ 10" },
      ],
      contracts: [
        { label: "Engine", value: "MUD v2.2.23 (@latticexyz)" },
        { label: "Architecture", value: "ECS: tables + Systems (defineWorld)" },
        { label: "Build", value: "Foundry v1.0.0" },
        { label: "Protocols", value: "planets · players · artifacts (+ guilds)" },
      ],
      zk: [
        { label: "Circuits", value: "Circom (carried over from DF)" },
        { label: "Prover", value: "snarkjs / WASM" },
        { label: "Concept", value: '"Function as Entity"' },
      ],
      frontend: [
        { label: "UI", value: "React 18 + WebGL (gl matrix)" },
        { label: "Build", value: "Vite" },
        { label: "Wallet", value: "viem + wagmi + RainbowKit" },
        { label: "State", value: "zustand · styled components · lit" },
      ],
      data: [
        { label: "Sync", value: "MUD tables via @latticexyz/recs + store sync" },
        { label: "Indexer", value: "@latticexyz/store indexer + explorer" },
        { label: "Extra", value: "LangChain (in client AI) · howler (audio)" },
      ],
      tooling: [
        { label: "Monorepo", value: "pnpm workspaces" },
        { label: "Dev runner", value: "mprocs" },
        { label: "Quality", value: "ESLint 9 · Prettier · Husky · commitlint" },
      ],
    },
    versions: [
      {
        id: "mud-011",
        version: "v0.1.1",
        date: "2024 Q3",
        sortKey: 2024.7,
        title: "Core loop on MUD",
        summary:
          "The core game, including space types, planet types and silver mining, migrated to the MUD engine, with a new dynamic Tick Rate system for more flexible, strategic pacing.",
        highlights: [
          "Core gameplay ported to MUD's ECS world",
          "Dynamic Tick Rate system",
          "Planets protocol fully implemented",
        ],
        network: "Redstone mainnet",
        links: [{ label: "r1.dfmud.xyz", href: "https://r1.dfmud.xyz/" }],
      },
      {
        id: "mud-012",
        version: "v0.1.2",
        date: "2024 Q4",
        sortKey: 2024.9,
        title: "Guilds & account delegation",
        summary:
          "Introduced a guild system with account delegation, plus modules for rapid development and integration of artifacts to speed up shipping key artifacts.",
        highlights: [
          "Guild system + account delegation",
          "Rapid artifact development / integration modules",
          "Players protocol ~60% complete",
        ],
        network: "Redstone mainnet",
        links: [{ label: "r2.dfmud.xyz", href: "https://r2.dfmud.xyz/" }],
      },
      {
        id: "mud-013",
        version: "v0.1.3",
        date: "2025 Q1",
        sortKey: 2025.1,
        title: "Cross round artifacts & AI agent",
        summary:
          "The public roadmap advances with cross round artifact support, AI assisted decision tooling and onboarding improvements, with the project maturing beyond a straight Dark Forest port.",
        highlights: [
          "Cross round artifact support",
          "AI assisted decision tooling (in client LangChain)",
          "Onboarding improvements",
        ],
        network: "Redstone mainnet",
      },
      {
        id: "mud-014",
        version: "v0.1.4",
        date: "2025 Q2",
        sortKey: 2025.4,
        title: "New junk mechanic",
        summary:
          "Introduced a junk mechanic that caps how many planets each player can control, narrowing the gap between veterans and newcomers and improving fairness. Artifact parameters were rebalanced across functions.",
        highlights: [
          "Per player planet cap via junk mechanic",
          "Fairer veteran ↔ newcomer balance",
          "Artifact parameters rebalanced",
        ],
        network: "Redstone mainnet",
      },
      {
        id: "punk-011",
        version: "Punk v0.1.1",
        date: "2025 Q4",
        sortKey: 2025.9,
        title: "Dark Forest Punk: new materials",
        summary:
          "The rebrand to Dark Forest Punk. Introduced 11 biome based materials generated from perlin driven planet attributes (foundation for a future technology tree), plus a purchasable space junk mechanic that expands planet ownership capacity and routes proceeds into the prize pool.",
        highlights: [
          "11 biome based materials (perlin driven MaterialType enum)",
          "Foundation for a technology tree",
          "Purchasable space junk → prize pool",
        ],
        network: "Redstone mainnet",
        links: [
          { label: "dark forest punk", href: "https://github.com/dfarchon/dark-forest-punk" },
          { label: "dfpunk.xyz", href: "https://dfpunk.xyz/" },
        ],
      },
    ],
    repo: "https://github.com/dfarchon/dark-forest-punk",
  },
  {
    id: "aztec",
    name: "Dark Forest Aztec",
    codename: "dfpunk aztec · v0.1.0",
    period: "Experimental · Aztec testnet",
    maintainer: "DFArchon team (community)",
    tagline: "A privacy native rebuild: porting Dark Forest onto Aztec with Noir contracts.",
    accent: "gold",
    story:
      "A parallel experimental branch exploring what \"programmable privacy\" means for fully onchain games. v0.1.0 ports the core features of Dark Forest 0.6 onto the Aztec Network. The contract language shifts from Solidity/Diamond to Noir, split into storage contracts (planet, player, artifact, arrival, world) and system contracts (core, move, admin). ZK proving is native to Aztec and happens in the PXE client, replacing offchain Circom/snarkjs. The defining design is the state hash model: contracts store a Poseidon2 hash of each entity, transactions pass full state as input and verify it against the stored hash, keeping the onchain footprint tiny while full state lives offchain. Home coordinates and fleets become first class private notes, and a dedicated indexer server rebuilds public table state into snapshots.",
    stack: {
      language: [
        { label: "Language", value: "TypeScript 5.9 + Noir" },
        { label: "Runtime", value: "Node 24 · pnpm 10.28" },
      ],
      contracts: [
        { label: "Language", value: "Noir (Aztec)" },
        { label: "Architecture", value: "Storage contracts + System contracts" },
        { label: "State model", value: "Poseidon2 state hash (full state offchain)" },
        { label: "Accounts", value: "Aztec account / burner accounts" },
      ],
      zk: [
        { label: "Proving", value: "Native Aztec circuits in PXE (client side)" },
        { label: "Hash", value: "Poseidon2 (was MiMC in v0.6.5)" },
        { label: "Privacy", value: "Private notes: home coords, fleet" },
      ],
      frontend: [
        { label: "UI", value: "React 18 + WebGL renderer" },
        { label: "Build", value: "Vite 7" },
        { label: "Wallet", value: "@aztec/aztec.js + @aztec/wallets" },
        { label: "State", value: "styled components · idb" },
      ],
      data: [
        { label: "Sync", value: "Aztec public log indexer (server + client)" },
        { label: "Server", value: "Indexer rebuilds tables → snapshot API" },
      ],
      tooling: [
        { label: "Monorepo", value: "pnpm workspaces (client · contracts · server)" },
        { label: "Packages", value: "@dfpunk/* shared modules" },
        { label: "Quality", value: "ESLint 9 · Prettier · Husky · commitlint" },
      ],
    },
    versions: [
      {
        id: "aztec-010",
        version: "v0.1.0",
        date: "Aztec testnet",
        sortKey: 2026.5,
        title: "DF 0.6 ported to Aztec",
        summary:
          "Ports the core features of Dark Forest 0.6 onto Aztec. Authoritative state transitions run in Noir system contracts; the React client submits private gameplay transactions and an indexer server serves consistent public snapshots. Early software, testnet only, unaudited.",
        highlights: [
          "Contracts rewritten in Noir (storage + system layers)",
          "Poseidon2 state hash storage; full state offchain",
          "Private notes for home coordinates & fleet",
          "Dedicated indexer server + snapshot API",
        ],
        network: "Aztec testnet",
        links: [
          { label: "dark forest aztec", href: "https://github.com/dfarchon/dark-forest-aztec" },
        ],
      },
    ],
    repo: "https://github.com/dfarchon/dark-forest-aztec",
  },
];

// Side-by-side comparison across the three architectures.
export interface CompareRow {
  dimension: string;
  origin: string;
  ares: string;
  mud: string;
  aztec: string;
}

export const COMPARE_ROWS: CompareRow[] = [
  {
    dimension: "Contract language",
    origin: "Solidity",
    ares: "Solidity",
    mud: "Solidity",
    aztec: "Noir",
  },
  {
    dimension: "Contract architecture",
    origin: "Diamond / ERC-2535 (v0.6.5)",
    ares: "Diamond / ERC-2535",
    mud: "MUD ECS: tables + Systems",
    aztec: "Storage + System contracts",
  },
  {
    dimension: "Contract toolchain",
    origin: "Hardhat",
    ares: "Hardhat 2.6.8",
    mud: "Foundry v1.0.0 + MUD v2.2.23",
    aztec: "Aztec.js / aztec nargo",
  },
  {
    dimension: "ZK proving",
    origin: "Circom + snarkjs (offchain)",
    ares: "Circom + snarkjs (enhanced)",
    mud: "Circom + snarkjs (carried over)",
    aztec: "Native Aztec circuits in PXE",
  },
  {
    dimension: "Hash function",
    origin: "MiMC",
    ares: "MiMC",
    mud: "MiMC",
    aztec: "Poseidon2",
  },
  {
    dimension: "Onchain state",
    origin: "Full entity fields",
    ares: "Full entity fields",
    mud: "Full entity fields (tables)",
    aztec: "Poseidon2 state hash (state offchain)",
  },
  {
    dimension: "Frontend build",
    origin: "Webpack",
    ares: "Webpack",
    mud: "Vite",
    aztec: "Vite 7",
  },
  {
    dimension: "Data sync model",
    origin: "Contract events",
    ares: "Contract events",
    mud: "MUD tables (recs + store sync)",
    aztec: "Public log indexer (server + client)",
  },
  {
    dimension: "Account model",
    origin: "Burner wallet",
    ares: "Burner wallet",
    mud: "EOA + account delegation",
    aztec: "Aztec account / burner accounts",
  },
  {
    dimension: "Package manager",
    origin: "yarn workspaces",
    ares: "yarn v1 workspaces",
    mud: "pnpm workspaces",
    aztec: "pnpm workspaces",
  },
  {
    dimension: "Node runtime",
    origin: "Node ≥ 16",
    ares: "Node 16",
    mud: "Node 20",
    aztec: "Node 24",
  },
  {
    dimension: "TypeScript",
    origin: "4.5",
    ares: "4.5",
    mud: "5.6",
    aztec: "5.9",
  },
];
