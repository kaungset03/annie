import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('/bg1.jpg')",
      },
      colors: {
        primary: "#DFF6FF",
        secondary: "#2A3D45"

      }
    },
  },
  plugins: [],
} satisfies Config;
