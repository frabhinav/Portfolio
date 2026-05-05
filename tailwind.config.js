/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Outfit", "system-ui", "sans-serif"],
        titleFont: ["Syne", "system-ui", "sans-serif"],
      },
      colors: {
        void: "#030306",
        ink: "#08080f",
        surface: "rgba(255,255,255,0.04)",
        mist: "rgba(255,255,255,0.06)",
        stroke: "rgba(255,255,255,0.1)",
        bodyColor: "#08080f",
        lightText: "#cbd5e1",
        muted: "#94a3b8",
        designColor: "#c4b5fd",
        accent: {
          violet: "#a78bfa",
          cyan: "#22d3ee",
          rose: "#fb7185",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.22), transparent 55%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%, rgba(255,255,255,0.04) 100%)",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        glow: "0 0 60px -12px rgba(167, 139, 250, 0.45)",
        "glow-sm": "0 0 24px -8px rgba(34, 211, 238, 0.35)",
        innerGlow: "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
