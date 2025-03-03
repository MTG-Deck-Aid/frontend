const {heroui} = require("@heroui/theme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body: ['Karantina']
      },
      colors: {
        'dark-grey': '#3C3C3C',
        'blue':'#63ADF2',
        'sky-blue':'#F1FFF6',
        'white':'#FFF9F5' ,
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({}),
  ],
};
