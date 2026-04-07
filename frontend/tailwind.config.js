/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neuro: {
          primary: '#00D4FF',
          secondary: '#7B61FF',
          accent: '#FF6B9D',
          dark: '#0A0A0F',
          darker: '#050508',
          light: '#F0F5FF',
        },
        quantum: {
          blue: '#00F3FF',
          purple: '#9D4EDD',
          pink: '#FF2E9D',
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'neon-glow': 'neon-glow 1.5s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'neon-glow': {
          '0%, 100%': { 
            textShadow: '0 0 10px #00D4FF, 0 0 20px #00D4FF, 0 0 30px #00D4FF' 
          },
          '50%': { 
            textShadow: '0 0 5px #00D4FF, 0 0 10px #00D4FF, 0 0 15px #00D4FF' 
          },
        },
        'matrix-rain': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        }
      },
      backgroundImage: {
        'neuro-gradient': 'linear-gradient(135deg, #00D4FF 0%, #7B61FF 50%, #FF6B9D 100%)',
        'quantum-gradient': 'radial-gradient(circle at 50% 50%, rgba(0, 243, 255, 0.1) 0%, rgba(157, 78, 221, 0.05) 50%, transparent 100%)',
        'matrix-bg': 'linear-gradient(to bottom, transparent 95%, rgba(0, 212, 255, 0.05) 100%)',
      }
    },
  },
  plugins: [],
}