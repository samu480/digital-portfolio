import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#05070d",
        panel: "rgba(13, 18, 31, 0.74)",
        cyanGlow: "#55f0ff",
        violetGlow: "#9b7cff",
        limeGlow: "#b6ff63"
      },
      boxShadow: {
        glow: "0 0 40px rgba(85, 240, 255, 0.22)",
        violet: "0 0 45px rgba(155, 124, 255, 0.24)"
      },
      backgroundImage: {
        "radial-noise":
          "radial-gradient(circle at 20% 15%, rgba(85,240,255,.16), transparent 30%), radial-gradient(circle at 80% 10%, rgba(155,124,255,.18), transparent 28%), radial-gradient(circle at 60% 90%, rgba(182,255,99,.10), transparent 24%)"
      }
    }
  },
  plugins: []
};

export default config;
