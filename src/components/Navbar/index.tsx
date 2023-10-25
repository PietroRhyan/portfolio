'use client'

import Image from 'next/image'
import Link from 'next/link'

import { CentralMenu } from './CentralMenu'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { MobileSideMenu } from './MobileSideMenu'
import { MobileMenu } from '../../../context/HandleOpenMobileMenu'
import { LanguageDropdown } from './LanguageDropdown'
import { ThemeSwitcher } from './ThemeSwitcher'
import { CommandShortcut } from './CommandShortcut'

import whiteLogo from '../../../public/portfolio-logo-black.svg'
import blackLogo from '../../../public/portfolio-logo.svg'
import { SwitchTheme } from '../../../context/SwitchTheme'

export function Navbar() {
  const { isOpen, switchVisibility } = MobileMenu()
  const { isInDarkTheme } = SwitchTheme()

  return (
    <header className="w-full py-3 px-3 sm:px-8 flex items-center justify-between absolute z-30 top-0">
      <Link
        href="/"
        className="rounded-md flex items-center justify-center cursor-pointer"
      >
        <Image
          src={isInDarkTheme ? blackLogo : whiteLogo}
          width={50}
          height={64}
          alt="Portfolio logo"
        />
      </Link>

      {/* Only appears before 768px */}
      <button
        className="md:hidden block py-2 px-2 rounded-md hover:bg-lightgray transition-colors duration-200"
        onClick={() => switchVisibility(true)}
      >
        <HiBars3BottomRight size={26} />
      </button>

      {isOpen && <MobileSideMenu />}

      {/* Only appears after 768px */}
      <CentralMenu />

      <div className="md:flex hidden md:items-center md:justify-center gap-2">
        <LanguageDropdown buttonStyle="bigButton" />
        <ThemeSwitcher />
        <CommandShortcut />
      </div>
    </header>
  )
}
