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
          DEFAULT: '#fbfbfb',
          muted: '#f4f4f5',
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
          primary: '#0f172a',
          accent: '#d4ff3f',
          teal: '#0d9488',
          sky: '#0284c7',
        }
      },
      fontFamily: {
        heading: ['"Montserrat"', '"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'thick': '0 12px 32px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'thick-hover': '0 20px 48px -6px rgba(0, 0, 0, 0.12), 0 8px 24px -4px rgba(0, 0, 0, 0.06)',
        'thick-dark': '0 14px 36px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'glow-lime': '0 0 24px -4px rgba(212, 255, 63, 0.45)',
      }
    },
  },
  plugins: [],
}
