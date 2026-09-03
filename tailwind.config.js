/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        ink: "#000000",
        pink: {
          100: "#FFE8ED",
          200: "#FFD0DA",
          300: "#FFB7C5",
          400: "#E78398",
          500: "#BC526A",
          600: "#7D1C35",
        },
        neutral: {
          100: "#EDE4E8",
          400: "#9A8A92",
          600: "#5C4F55",
          800: "#2B1F26",
          900: "#181215",
        },
      },
      fontFamily: {
        display: ['"Fira Sans"', "system-ui", "sans-serif"],
        sans: ['"Fira Sans"', "system-ui", "sans-serif"],
        mono: ['"Fira Sans"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.02em",
        ultra: "0.08em",
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
