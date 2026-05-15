import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/context/ThemeContext'
import './globals.css'

const fontSans = localFont({
  src: '../../public/fonts/Satoshi-Variable.woff2',
  variable: '--font-sans',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

const fontDisplay = localFont({
  src: '../../public/fonts/ClashDisplay-Variable.woff2',
  variable: '--font-display',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
})

const fontMono = localFont({
  src: '../../public/fonts/GeistMono-Variable.woff2',
  variable: '--font-mono',
  display: 'swap',
  fallback: ['monospace'],
})

export const metadata: Metadata = {
  title: 'Md Junaid Khan — Freelance Developer',
  description:
    'Full-stack web developer based in Berlin. I build fast, interactive websites and applications.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
