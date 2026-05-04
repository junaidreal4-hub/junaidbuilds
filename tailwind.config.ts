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
        sans:    ['var(--font-space)',  'sans-serif'],
        mono:    ['var(--font-mono)',   'monospace'],
      },
      colors: {
        canvas:  '#f0f0ee',
        surface: '#e8e8e5',
        border:  '#d4d4d0',
        muted:   '#999999',
        subtle:  '#666666',
        body:    '#444444',
        heading: '#111111',
        orange:  '#f97316',
      },
      animation: {
        marquee:  'marquee 28s linear infinite',
        marquee2: 'marquee2 28s linear infinite',
      },
      keyframes: {
        marquee:  { '0%': { transform: 'translateX(0)' },    '100%': { transform: 'translateX(-50%)' } },
        marquee2: { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0)' } },
      },
    },
  },
  plugins: [],
}
export default config
