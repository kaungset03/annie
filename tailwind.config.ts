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
        bg0: "url('/bg0.webp')",
        bg1: "url('/bg1.webp')",
        bg2: "url('/bg2.webp')",
        bg3: "url('/bg3.webp')",
        bg4: "url('/bg4.webp')",
        bg5: "url('/bg5.webp')",
      },
      colors: {
        primary: "#DFF6FF",
        secondary: "#2A3D45"

      }
    },
  },
  plugins: [],
} satisfies Config;
