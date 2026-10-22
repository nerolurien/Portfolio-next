const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#efece4",
        darkhover: "#151518",
        darkTheme: "#0b0b0c",
        cream: "#ece8df",
        charcoal: "#111113",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        outfit: ["var(--font-sans)", "sans-serif"],
        ovo: ["var(--font-display)", "serif"],
      },
      boxShadow: {
        black: "4px 4px 0 #141413",
        white: "4px 4px 0 #ece8df",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};

export default config;
