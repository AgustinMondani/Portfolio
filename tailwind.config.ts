import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary: "#f5711c",
        darBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(360.21deg, rgba(120, 40, 124, 0.1) 10%, rgba(20, 47, 189, 0.3) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
