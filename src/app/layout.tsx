import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const mono  = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400','700'] })

export const metadata: Metadata = {
  title: 'Freelance Web Developer Berlin — Junaid Khan',
  description: 'I build fast, clean websites and web apps for Berlin businesses. No agency markup. React, Next.js, full-stack. Get a quote today.',
  keywords: 'freelance web developer Berlin, website designer Berlin, Next.js developer Berlin, React developer Berlin',
  openGraph: {
    title: 'Freelance Web Developer Berlin — Junaid Khan',
    description: 'Fast, clean websites and web apps for Berlin businesses. No agency markup.',
    url: 'https://junaidbuilds.com',
    siteName: 'Junaid Builds',
    locale: 'en_DE',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} font-sans bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}
