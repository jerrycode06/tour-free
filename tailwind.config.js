/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        keyframes: {
          leftRight: {
            '0%, 100%': { transform: 'translateX(0)' },
            '50%': { transform: 'translateX(-10px)' },
          },
          rightLeft: {
            '0%, 100%': { transform: 'translateX(0)' },
            '50%': { transform: 'translateX(10px)' },
          },
        },
        animation: {
          'arrow-left': 'leftRight 1s ease-in-out infinite',
          'arrow-right': 'rightLeft 1s ease-in-out infinite',
        },
      },
    },
  },
  plugins: [],
}
