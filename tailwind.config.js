/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './blog/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        aegean: {
          dark: '#011A27',
          surface: '#063852',
          cyan: '#00E5FF',
          lagoon: '#1DE9B6',
          gold: '#FFD740',
          text: '#F5F9FA',
          muted: '#94A3B8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    }
  },
  plugins: []
};
