/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#EEF3F8',
          100: '#D5E4EE',
          200: '#ABBCDA',
          300: '#7DA5C5',
          400: '#4A7FA5',
          500: '#3A6A8E',
          600: '#2B4C7E',
          700: '#1F3A63',
          800: '#152848',
          900: '#0D1A30',
          950: '#070D18',
        },
        gold: {
          300: '#D4B896',
          400: '#C4A882',
          500: '#A8896A',
          600: '#8C6D52',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.8s ease-out both',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
