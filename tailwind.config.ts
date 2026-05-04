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
        canvas:  '#ffffff',
        surface: '#f5f5f3',
        border:  '#e0e0de',
        muted:   '#aaaaaa',
        subtle:  '#777777',
        body:    '#444444',
        heading: '#111111',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
