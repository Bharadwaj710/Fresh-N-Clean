/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // Blue-600
          light: "#3B82F6", // Blue-500
          dark: "#1D4ED8", // Blue-700
        },
        secondary: {
          DEFAULT: "#DBEAFE", // Blue-100
        },
        accent: {
          DEFAULT: "#22C55E", // Green-500
        },
        background: "#F8FAFC", // Slate-50
        text: {
          dark: "#0F172A", // Slate-900
          muted: "#64748B", // Slate-500
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
