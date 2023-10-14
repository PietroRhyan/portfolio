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

export function Navbar() {
  const { isOpen, switchVisibility } = MobileMenu()

  return (
    <header className="w-full py-3 px-8 flex items-center justify-between">
      <Link
        href="/"
        className="buttons-outline rounded-md flex items-center justify-center cursor-pointer"
      >
        <Image
          src="/portfolio-logo-black.svg"
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
        <LanguageDropdown />
        <ThemeSwitcher />
        <CommandShortcut />
      </div>
    </header>
  )
}
