// tailwind.config.js
const {heroui} = require("@heroui/theme");

{import('tailwindcss').Config}
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(accordion|autocomplete|avatar|button|dropdown|form|menu|modal|popover|progress|spinner|user|divider|ripple|input|listbox|scroll-shadow).js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};