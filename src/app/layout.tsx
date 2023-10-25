import { Navbar } from '@/components/Navbar'
import '../styles/globals.css'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Poppins, Krona_One } from 'next/font/google'
import { HandleMobileMenuProvider } from '../../context/HandleOpenMobileMenu'
import { SwitchThemeProvider } from '../../context/SwitchTheme'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
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
    <html lang="en" id="html">
      <body
        className={`${inter.className} ${poppins.variable} ${kronaOne.variable} text-black bg-white dark:text-text-lightgray dark:bg-black-variant `}
      >
        <SwitchThemeProvider>
          <HandleMobileMenuProvider>
            <Navbar />
            {children}
            <Footer />
          </HandleMobileMenuProvider>
        </SwitchThemeProvider>
      </body>
    </html>
  )
}
