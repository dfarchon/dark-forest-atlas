/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Pak — pure monochrome. No hue. Mass, light, void.
        void: "#000000",
        coal: "#0a0a0b",
        ink: "#F4F4F5",
        steel: "#A1A1A6",
        dim: "#6E6E73",
        faint: "#3A3A3D",
        line: "#1A1A1C",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"Space Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        ultra: "0.4em",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        spinslow: {
          to: { transform: "rotate(360deg)" },
        },
        spinrev: {
          to: { transform: "rotate(-360deg)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        floaty: "floaty 12s ease-in-out infinite",
        "floaty-slow": "floaty 18s ease-in-out infinite",
        spinslow: "spinslow 60s linear infinite",
        "spinslow-fast": "spinslow 32s linear infinite",
        spinrev: "spinrev 80s linear infinite",
        breathe: "breathe 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
