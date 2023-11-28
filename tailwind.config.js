/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blueBold: "#287bff",
      blue: "#5b9af5",
      black: "#222222",
      blackG: "#333333",
      white: "#ffffff",
      whiteG: "#f0f0f0",
      gray: "#999",
    },
    fontSize: {
      semSmall: "1.1rem",
      small: "1.3rem",
      titles: "3rem",
      semTitles: "2rem",
    },
  },
  plugins: [],
};
