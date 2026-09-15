/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#eef5fb',
          muted: '#e2edf7',
          dark: '#071322',
        },
        navy: {
          DEFAULT: '#0c1e33',
          dark: '#071322',
          card: '#0e233c',
          border: '#17365d',
          deep: '#060f1b',
        },
        ice: {
          50: '#f8fafc',
          100: '#f0f6fc',
          200: '#e1edf8',
          300: '#cfe2f4',
          400: '#a7caf0',
        },
        azure: {
          DEFAULT: '#1d77ff',
          hover: '#1565e6',
          light: '#e0edff',
          dark: '#0e52b5',
        },
        lime: {
          DEFAULT: '#d4ff3f',
          hover: '#bfe82a',
          light: '#f5ffc9',
          dark: '#93b817',
        },
        midnight: {
          DEFAULT: '#0a0a0a',
          pure: '#000000',
          card: '#121212',
          cardHover: '#18181b',
          border: '#27272a',
          subtle: '#3f3f46',
        },
        brand: {
          primary: '#0c1e33',
          accent: '#1d77ff',
          teal: '#0d9488',
          sky: '#0284c7',
        }
      },
      fontFamily: {
        heading: ['"Montserrat"', '"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'thick': '0 12px 32px -4px rgba(12, 30, 51, 0.08), 0 4px 12px -2px rgba(12, 30, 51, 0.04)',
        'thick-hover': '0 20px 48px -6px rgba(29, 119, 255, 0.16), 0 8px 24px -4px rgba(12, 30, 51, 0.08)',
        'thick-dark': '0 14px 36px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'glow-blue': '0 0 32px -4px rgba(29, 119, 255, 0.45)',
        'glow-lime': '0 0 24px -4px rgba(212, 255, 63, 0.45)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
    },
  },
  plugins: [],
}
