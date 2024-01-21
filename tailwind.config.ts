import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#B497EE",
        "brand-sec": "#44297E",
        tertiary: "#A3A3A3",
        secondary: "#5B616E",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    darkMode: "class",
  },
  plugins: [
    nextui({
      defaultTheme: "light",
      defaultExtendTheme: "light",
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#B497EE",
            },
          },
        },
      },
    }),
  ],
};
export default config;
