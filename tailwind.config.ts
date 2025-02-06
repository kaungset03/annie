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
        secondary: "#BFDCE5",
        background: "#2A3D45",
        accent: "#FFB4A2",
        //background: "#BFDCE5"
      }
    },
  },
  plugins: [],
} satisfies Config;


// #189AB4 – A deep teal blue for a strong contrast.
// #87C4FF – A medium sky blue for a monochromatic look.
// #FFB4A2 – A soft coral pink for a warm, pastel contrast.
// #A0E4CB – A mint green for a fresh, soothing combination.
// #F4A261 – A warm, earthy orange for a striking contrast.