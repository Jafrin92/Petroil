/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#F40404",
        paragraph: "#6C6C6C",
        mainborder: "#FFB800",
        footer: "#1F1F1F",
        topbottom: "#282828",
        ovarly: "rgba(0, 0, 0, .6)",
        bg: "#F0F0F0",
      },
      maxWidth: {
        container: "1144px",
      },
    },
  },
};
