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
        sans:    ['var(--font-inter)',    'sans-serif'],
        mono:    ['var(--font-mono)',     'monospace'],
        display: ['var(--font-display)', 'serif'],
      },
      colors: {
        canvas:  '#0a0a0a',
        surface: '#111111',
        border:  '#1e1e1e',
        muted:   '#444444',
        subtle:  '#666666',
        body:    '#999999',
        heading: '#f0f0ee',
      },
      animation: {
        marquee:   'marquee 30s linear infinite',
        marquee2:  'marquee2 30s linear infinite',
      },
      keyframes: {
        marquee:  { '0%': { transform: 'translateX(0%)' },   '100%': { transform: 'translateX(-100%)' } },
        marquee2: { '0%': { transform: 'translateX(100%)' }, '100%': { transform: 'translateX(0%)' } },
      },
    },
  },
  plugins: [],
}
export default config
