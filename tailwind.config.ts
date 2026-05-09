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
        // Inter — Neue Haas Grotesk substitute (headings, UI)
        sans: ['var(--font-inter)', 'sans-serif'],
        // DM Sans — Helvetica Neue substitute (body, descriptions)
        body: ['var(--font-dm)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        canvas:  '#080808',
        surface: '#0f0f0f',
        card:    '#111111',
        border:  'rgba(255,255,255,0.06)',
        muted:   'rgba(255,255,255,0.30)',
        subtle:  'rgba(255,255,255,0.50)',
        body:    'rgba(255,255,255,0.70)',
        heading: '#f5f5f0',
        blue:    '#3B82F6',
        cyan:    '#06B6D4',
        orange:  '#3B82F6',
      },
      animation: {
        marquee:   'marquee 28s linear infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
