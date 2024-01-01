/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      custom: ["ubuntu-mono", "Ubuntu", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
