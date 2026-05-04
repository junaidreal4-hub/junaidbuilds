import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const space = Space_Grotesk({
  subsets:  ['latin'],
  variable: '--font-space',
  weight:   ['300', '400', '500', '600', '700'],
})

const mono = JetBrains_Mono({
  subsets:  ['latin'],
  variable: '--font-mono',
  weight:   ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Freelance Web Developer Berlin — Junaid Builds',
  description: 'I build fast, bespoke websites and web applications for Berlin businesses and international clients. React, Next.js, full-stack.',
  keywords: 'freelance web developer Berlin, Next.js developer Berlin, React developer Berlin',
  openGraph: {
    title:       'Freelance Web Developer Berlin — Junaid Builds',
    description: 'Bespoke websites and web applications. No templates. No agency markup.',
    url:         'https://junaidbuilds.vercel.app',
    siteName:    'Junaid Builds',
    locale:      'en_DE',
    type:        'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${space.variable} ${mono.variable} font-sans bg-canvas text-body antialiased`}>
        {children}
      </body>
    </html>
  )
}
