/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-texture": "url('/src/images/head_texture_trans.png')",
      },
    },
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
};
