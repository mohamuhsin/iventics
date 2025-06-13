import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Ensure class-based dark mode
  theme: {
    extend: {
      // optional customizations here
    },
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
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "corporate", "synthwave"],
    darkTheme: "dark",
  },
};
