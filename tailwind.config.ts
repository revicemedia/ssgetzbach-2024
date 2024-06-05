import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
        "16/6": "16 / 6",
      },
      colors: {
        primary: "",
        darkbg: "#000503",
        error: "#e30613",
        success: "",
        yellow: "#ffed00",
      },
    },
  },
  plugins: [],
};
export default config;
