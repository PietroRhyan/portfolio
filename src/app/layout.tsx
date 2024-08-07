import { Navbar } from '@/components/Navbar'
import '../styles/globals.css'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Poppins, Krona_One } from 'next/font/google'
import { HandleMobileMenuProvider } from '../../context/HandleOpenMobileMenu'
import { Footer } from '@/components/Footer'
import Providers from './providers'
import { BackToTopButton } from '@/components/BackToTopButton'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-poppins',
})
const kronaOne = Krona_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-krona',
})

export const metadata: Metadata = {
  title: 'Pietro Rhyan',
  description: 'Portfolio of Pietro Rhyan, a brazilian Software Engineer',
  keywords: ['nextjs', 'react', 'typescript', 'nodejs'],
  authors: [{ name: 'Pietro Rhyan', url: 'https://github.com/PietroRhyan' }],
  icons: {
    icon: '/portfolio-icon-logo-black.svg',
    shortcut: '/portfolio-icon-logo-black.svg',
    apple: '/portfolio-icon-logo-black.svg',
  },
  category: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${poppins.variable} ${kronaOne.variable} text-black bg-white dark:text-text-lightgray dark:bg-black-variant flex flex-col justify-between min-h-screen`}
      >
        <Providers>
          <HandleMobileMenuProvider>
            <Navbar />
            <BackToTopButton />
            {children}
            <Analytics />
            <Footer />
          </HandleMobileMenuProvider>
        </Providers>
      </body>
    </html>
  )
}
