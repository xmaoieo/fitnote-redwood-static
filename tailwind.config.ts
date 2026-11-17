import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1F2826",
        mint: "#2E8C73",
        mist: "#F3F7F5",
        line: "#DFE7E3",
      },
    },
  },
  plugins: [],
};

export default config;
