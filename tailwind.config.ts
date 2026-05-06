import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['var(--font-space)', 'sans-serif'],
        mono:  ['var(--font-mono)',  'monospace'],
      },
      colors: {
        canvas:  '#0f0f0d',
        surface: '#1a1a17',
        card:    '#141412',
        border:  'rgba(255,255,255,0.08)',
        muted:   'rgba(255,255,255,0.35)',
        subtle:  'rgba(255,255,255,0.55)',
        body:    'rgba(255,255,255,0.75)',
        heading: '#f5f5f0',
        orange:  '#f97316',
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        fadeUp:  { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
export default config
