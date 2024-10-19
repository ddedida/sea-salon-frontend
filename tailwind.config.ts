import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playFairDisplay: ["var(--font-playfairdisplay)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        bw: {
          primary: "#212121",
          secondary: "#687083",
          icon: "#9AA2B1",
          inline: "#D1D5DC",
          outline: "#E4E7EB",
          light: "#F0F2F5",
          surface: "#F9FAFB",
        },
        project: {
          0: "#F4DABF",
          20: "#EDC7A1",
          40: "#D2A475",
          60: "#C9935E",
          80: "#9E7449",
          100: "#7C5B3A",
          110: "#5A4128",
        },
      },
    },
  },
  plugins: [],
};
export default config;
