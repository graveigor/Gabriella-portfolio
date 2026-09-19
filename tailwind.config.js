/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#eef6f5',
          100: '#d6e9e6',
          300: '#7fc4bb',
          500: '#2a9d8f',
          700: '#156860',
          900: '#0d4f4a',
          950: '#08332f',
        },
        cream: {
          DEFAULT: '#f5f0e8',
          dark: '#ede6d5',
        },
        sand: '#c9b89a',
        paper: '#fefcf8',
        ink: '#1a1a1a',
        muted: '#5a5a52',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%':   { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%':      { transform: 'translate(12px, -18px) scale(1.06)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up':   'fadeUp .9s cubic-bezier(.22,1,.36,1) both',
        'fade-down': 'fadeDown .8s ease both',
        'drift':     'drift 14s ease-in-out infinite',
        'marquee':   'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
