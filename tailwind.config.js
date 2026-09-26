/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm, local, professional identity — not generic corporate blue.
        ink: {
          DEFAULT: '#1B2420', // near-black with a green undertone
          soft: '#3A4A42',
          muted: '#6B7A72',
          faint: '#97A39C',
        },
        // Primary: deep evergreen
        forest: {
          50: '#EEF4EF',
          100: '#D7E6DB',
          200: '#AECBB6',
          300: '#7FAA8C',
          400: '#4F8563',
          500: '#2F6B47',
          600: '#215539',
          700: '#1B442F',
          800: '#153524',
          900: '#0F281B',
        },
        // Accent: terracotta / clay
        clay: {
          50: '#FCF1EA',
          100: '#F7DDCC',
          200: '#EFBB9C',
          300: '#E5946A',
          400: '#DB7440',
          500: '#C85E2A',
          600: '#A94A1F',
          700: '#87391A',
          800: '#672C16',
          900: '#4C2111',
        },
        // Warm neutral canvas
        sand: {
          50: '#FBF9F5',
          100: '#F5F0E7',
          200: '#EBE3D5',
          300: '#DDD1BD',
          400: '#C4B49A',
        },
        gold: '#D9A441',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(21,53,36,0.06), 0 8px 24px rgba(21,53,36,0.06)',
        lift: '0 10px 40px rgba(21,53,36,0.12)',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease both',
      },
    },
  },
  plugins: [],
}
