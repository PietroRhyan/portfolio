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

export function Navbar() {
  const { isOpen, switchVisibility } = MobileMenu()

  return (
    <header className="w-full py-3 px-3 sm:px-8 flex items-center justify-between">
      <Link
        href="/"
        className="rounded-md flex items-center justify-center cursor-pointer w-[50px] h-[64px]"
      >
        <Image src={whiteLogo} alt="Portfolio logo" className="w-auto h-auto" />
      </Link>

      {/* Only appears before 768px */}
      <button
        className="md:hidden block py-2 px-2 rounded-md hover:bg-lightgray dark:hover:text-white dark:hover:bg-dark-gray transition-colors duration-200"
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
