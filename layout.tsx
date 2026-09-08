import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Enigma — Free Roblox Executor',
  description:
    'Enigma is a free, undetectable Roblox executor. Fast injection, powerful scripts, continuously updated. Free forever.',
  generator: 'Enigma Labs',
  applicationName: 'Enigma',
  icons: {
    icon: '/assets/enigma-logo.png',
    apple: '/assets/enigma-logo.png',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a10',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
