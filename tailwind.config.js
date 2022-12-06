/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heeboMedium: ["heeboMedium"],
        heeboRegular: ["heeboRegular"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      primary: "#0A4474",
      secondary: "#63A6DE",
      pink: "#F690C8",
      dark_pink: "#BB5386",
      red: "#EA4335",
      fb_blue: "#1977F3",
      twitter_blue: "#1DA1F2",
    },
  },
  plugins: [],
};
