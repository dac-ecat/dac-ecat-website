import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'monospace'],
        mono: ['var(--font-dm-mono)', 'Courier New', 'monospace'],
      },
      colors: {
        brand: {
          bg: '#080b0f',
          surface: '#0d1218',
          'surface-raised': '#112030',
          border: '#1a2535',
          'border-strong': '#243650',
          teal: '#00e5c8',
          'teal-dim': '#00a090',
          amber: '#ffaa00',
          blue: '#0088ff',
          error: '#ff4455',
          text: '#7a9bb5',
          dim: '#2a3f55',
          bright: '#d0e8f0',
        },
      },
      boxShadow: {
        'teal-glow': '0 0 20px rgba(0, 229, 200, 0.25)',
        'teal-glow-lg': '0 0 40px rgba(0, 229, 200, 0.4)',
        'amber-glow': '0 0 20px rgba(255, 170, 0, 0.25)',
        'blue-glow': '0 0 20px rgba(0, 136, 255, 0.25)',
        panel: '0 0 0 1px #1a2535, 0 4px 32px rgba(0,0,0,0.6)',
        'panel-hover': '0 0 0 1px #243650, 0 8px 40px rgba(0, 229, 200, 0.08)',
      },
      backgroundImage: {
        'grid-sm':
          'linear-gradient(rgba(26,37,53,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26,37,53,0.5) 1px, transparent 1px)',
        'hero-radial':
          'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(0,229,200,0.12) 0%, transparent 68%)',
        'teal-radial':
          'radial-gradient(circle at 50% 50%, rgba(0,229,200,0.1) 0%, transparent 65%)',
        'amber-radial':
          'radial-gradient(circle at 50% 50%, rgba(255,170,0,0.07) 0%, transparent 65%)',
        'feature-radial':
          'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,136,255,0.06) 0%, transparent 70%)',
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-rev': 'spin 28s linear infinite reverse',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(0,229,200,0.35))' },
          '50%': { filter: 'drop-shadow(0 0 28px rgba(0,229,200,0.65))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
