/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    
    fontFamily:{
      'ethnocentric':['EthnocentricRg-Regular','ubuntu']
    },
    extend: {
      backgroundColor:{
        "std-green": "#00bb54"
      },
      backgroundImage: {
        "header-img": "url('/src/static/header.png')",
      },
    },
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
};
