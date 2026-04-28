/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#03060f',
          900: '#060c1a',
          800: '#0b1326',
          700: '#101b35',
          600: '#162040',
        },
        // Gemini: Mercury gold — warm, luminous, intellectual
        mercury: {
          200: '#f5e8c0',
          300: '#f0d98a',
          400: '#e8c040',
          500: '#d4a017',
          600: '#b8870d',
        },
        // Gemini: silver air — cool, quick, dual
        silver: {
          200: '#e8edf5',
          300: '#c8d0e0',
          400: '#a0aec0',
          500: '#718096',
          600: '#4a5568',
        },
        // Capricorn: sage earth — grounded, structured, ancient
        sage: {
          400: '#7a8c6e',
          500: '#5a6b50',
          600: '#3f4f38',
          700: '#2a3525',
          800: '#1a2218',
        },
        // Parchment warmth
        parchment: {
          100: '#faf6ec',
          200: '#f2e8cc',
          300: '#e8d5a3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'float': 'float 7s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
