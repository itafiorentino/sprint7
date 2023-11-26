/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'sm': '0.875rem',   // Small
        'base': '1rem',     // Base (16px by default)
        'lg': '1.125rem',   // Large
        'xl': '1.25rem',    // Extra Large
      },
    },
  },
  plugins: [require("daisyui")],
}

