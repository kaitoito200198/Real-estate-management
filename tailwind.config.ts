/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
module.exports = {
  content: [
    "./app/**/*.{js, ts, jsx, tsx}",
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend :{},
  },
  plugins: [],
}