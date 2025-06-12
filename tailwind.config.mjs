import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "dots-pattern":
          "radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dots-size": "18px 18px",
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
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "corporate", "synthwave"],
    darkTheme: "dark",
  },
};
