/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyanf: {
          50: "#e6fcff",
          100: "#bff8ff",
          300: "#39d6e6",
          400: "#00d4ff",
          600: "#00b4e6",
          800: "#007a99",
        },
        glass: "rgba(255,255,255,0.06)",
        neonmag: {
          100: "#ffb3f3",
          300: "#ff66e6",
          400: "#ff30db",
          500: "#ff00d4",
          600: "#d600ad",
        },
        neonpurp: {
          300: "#c084ff",
          400: "#a855f7",
          500: "#9333ea",
          600: "#7e22ce",
        },
      },
      fontFamily: {
        // apply slimmer look
        display: [
          '"Inter Tight"',
          "Outfit",
          "Inter",
          "ui-sans-serif",
          "system-ui",
        ],
        glam: [
          '"Outfit"',
          '"Inter Tight"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "frost-lines":
          "linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))",
        "grid-fade":
          "linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.92)),url(/grid-noise.png)",
        "hero-future":
          "linear-gradient(135deg,#021421,#001a2e 40%,#001018 75%)",
        stars:
          "radial-gradient(circle at 20% 30%, rgba(0,212,255,0.15) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,180,255,0.12) 0, transparent 45%)",
      },
      keyframes: {
        typing: {
          "0%": { width: "0ch" },
          "100%": { width: "14ch" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%,100%": { boxShadow: "0 0 0px 0px rgba(0,212,255,0.4)" },
          "50%": { boxShadow: "0 0 18px 4px rgba(0,212,255,0.55)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        swirl: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        cursorPulse: {
          "0%,100%": { transform: "scale(1)", opacity: 0.55 },
          "50%": { transform: "scale(1.35)", opacity: 0.85 },
        },
        twinkle: {
          "0%,100%": { opacity: 0.15 },
          "50%": { opacity: 0.5 },
        },
        rippleDot: {
          "0%": { transform: "scale(0.3)", opacity: 0.6 },
          "70%": { transform: "scale(1.4)", opacity: 0 },
          "100%": { transform: "scale(1.4)", opacity: 0 },
        },
        drift: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-1600px)" },
        },
        cardFlux: {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-2px,0) scale(1.015)" },
          "100%": { transform: "translate3d(0,0,0) scale(1)" },
        },
        warpBorder: {
          "0%": { boxShadow: "0 0 0 0 rgba(0,212,255,0.4)" },
          "50%": { boxShadow: "0 0 12px 3px rgba(0,212,255,0.55)" },
          "100%": { boxShadow: "0 0 0 0 rgba(0,212,255,0.4)" },
        },
        nodePulse: {
          "0%,100%": { transform: "scale(1)", opacity: 0.65 },
          "50%": { transform: "scale(1.25)", opacity: 1 },
        },
        comet: {
          "0%": {
            transform: "translateX(-10%) translateY(0) scale(0.9)",
            opacity: 0,
          },
          "10%": { opacity: 1 },
          "90%": { opacity: 1 },
          "100%": {
            transform: "translateX(110%) translateY(-40px) scale(1.05)",
            opacity: 0,
          },
        },
        hueShift: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
        sparkle: {
          "0%,100%": { opacity: 0.15, transform: "scale(1)" },
          "50%": { opacity: 0.85, transform: "scale(1.4)" },
        },
        ringPulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(255,0,212,0.5)" },
          "70%": { boxShadow: "0 0 20px 8px rgba(255,0,212,0.2)" },
          "100%": { boxShadow: "0 0 0 0 rgba(255,0,212,0.0)" },
        },
      },
      animation: {
        typing: "typing 2.2s steps(14) 1",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.8s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        glow: "glow 5s ease-in-out infinite",
        orbit: "orbit 18s linear infinite",
        gradientShift: "gradientShift 14s ease-in-out infinite",
        swirl: "swirl 28s linear infinite",
        cursorPulse: "cursorPulse 2.8s ease-in-out infinite",
        twinkle: "twinkle 5s linear infinite",
        rippleDot: "rippleDot 3.8s ease-out infinite",
        driftSlow: "drift 120s linear infinite",
        cardFlux: "cardFlux 7s ease-in-out infinite",
        warpBorder: "warpBorder 6s ease-in-out infinite",
        nodePulse: "nodePulse 3.8s ease-in-out infinite",
        comet: "comet 9s linear infinite",
        hueShift: "hueShift 18s linear infinite",
        sparkle: "sparkle 4s ease-in-out infinite",
        ringPulse: "ringPulse 3.5s ease-out infinite",
      },
      boxShadow: {
        glass: "0 4px 32px -8px rgba(0,212,255,0.25)",
        insetRing: "inset 0 0 0 1px rgba(255,255,255,0.08)",
        summaryGlow: "0 0 22px -4px rgba(0,212,255,0.35)",
        skillsGlow: "0 0 18px -2px rgba(57,214,230,0.30)",
        projectsGlow: "0 0 26px -6px rgba(0,180,255,0.40)",
        experienceGlow: "0 0 20px -4px rgba(0,116,153,0.35)",
        educationGlow: "0 0 20px -4px rgba(0,212,155,0.35)",
        achievementsGlow: "0 0 24px -6px rgba(255,220,80,0.35)",
      },
      container: {
        center: true,
        padding: "1.25rem",
      },
    },
  },
  plugins: [],
};
