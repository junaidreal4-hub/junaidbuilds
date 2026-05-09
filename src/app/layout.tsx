import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import PageTransition from '@/components/PageTransition'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300','400','500','600','700'],
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['300','400','500','600'],
})
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400','700'],
})

export const metadata: Metadata = {
  title: 'mdjk.dev — Freelance Web Developer Berlin',
  description: 'I build fast, bespoke websites and web applications for businesses in Berlin and worldwide. React, Next.js, full-stack development.',
  keywords: 'freelance web developer Berlin, Next.js developer, React developer Berlin, full-stack developer',
  openGraph: {
    title:       'mdjk.dev — Freelance Web Developer Berlin',
    description: 'Bespoke websites and web applications. No templates. No agency markup.',
    url:         'https://mdjk.vercel.app',
    siteName:    'mdjk.dev',
    locale:      'en_DE',
    type:        'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} ${mono.variable} font-sans bg-[#080808] text-body subpixel-antialiased`}>
        <PageTransition />
        {children}
      </body>
    </html>
  )
}
