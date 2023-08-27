/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts}",
    "./node_modules/@jay-js/ui/**/*.styled"    
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
