/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)'  },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)'  },
        }
      },
      animation: {
        fadeInLeft: 'fadeInLeft 0.8s ease-out both',
        fadeInRight: 'fadeInRight 0.8s ease-out both',
      },
    },
  },
  plugins: [],
}