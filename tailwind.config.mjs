// tailwind.config.js
import daisyui from "daisyui";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        pulseCustom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        pulseCustom: "pulseCustom 1.5s infinite",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "corporate", "synthwave"],
    darkTheme: "dark",
  },
};
