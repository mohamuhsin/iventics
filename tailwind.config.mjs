import daisyui from "daisyui";

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
          "radial-gradient(circle, rgba(0, 0, 0, 0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dots-size": "18px 18px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "corporate", "synthwave"],
    darkTheme: "dark",
  },
};
