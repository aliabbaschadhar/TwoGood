

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'social-mono': ['social-mono', 'sans-serif'],
        'futura': ["Futura", "sans-serif"],
        'helvetica': ['HelveticaNow', 'sans-serif'],
      }
    },
  },
  plugins: [],
}