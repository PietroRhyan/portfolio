import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pietro Rhyan',
  description: 'Portfolio of Pietro Rhyan, a brazilian Software Engineer',
  keywords: ['nextjs', 'react', 'typescript', 'nodejs'],
  authors: [{ name: 'Pietro Rhyan', url: 'https://github.com/PietroRhyan' }],
  icons: {
    icon: '/portfolio-icon-logo.svg',
    shortcut: '/portfolio-icon-logo.svg',
    apple: '/portfolio-icon-logo.svg',
  },
  category: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
