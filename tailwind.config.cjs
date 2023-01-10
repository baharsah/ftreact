/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'bhrtw-',
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui : {
    themes : []
  },
  plugins: [require("daisyui")] ,
}
