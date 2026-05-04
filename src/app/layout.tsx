import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
})

const display = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Freelance Web Developer Berlin — Junaid Builds',
  description:
    'I build fast, bespoke websites and web applications for Berlin businesses and international clients. No agency overhead. React, Next.js, full-stack.',
  keywords:
    'freelance web developer Berlin, website designer Berlin, Next.js developer Berlin, React developer Berlin',
  openGraph: {
    title: 'Freelance Web Developer Berlin — Junaid Builds',
    description:
      'Bespoke websites and web applications for businesses that want to stand out. No templates. No agency markup.',
    url: 'https://junaidbuilds.com',
    siteName: 'Junaid Builds',
    locale: 'en_DE',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${
          inter.variable
        } ${mono.variable} ${display.variable} font-sans bg-canvas text-body antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
