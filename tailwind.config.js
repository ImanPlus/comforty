const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/dist/esm/**/*.{js,mjs}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        bgMain: "#F0F2F3",
        blue01: "#007580",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["DM Sans", ...defaultTheme.fontFamily.serif],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
