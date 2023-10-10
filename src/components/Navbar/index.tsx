'use client'

import Image from 'next/image'
import { CentralMenu } from './CentralMenu'
import { HiBars3BottomRight } from 'react-icons/hi2'
import Link from 'next/link'
import { MobileSideMenu } from '../MobileSideMenu'
import { MobileMenu } from '../../../context/HandleOpenMobileMenu'

export function Navbar() {
  const { isOpen, switchVisibility } = MobileMenu()

  return (
    <div className="w-full py-3 px-8 flex items-center justify-between">
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
        className="md:hidden block py-2 px-2 rounded-md hover:bg-slate-200"
        onClick={() => switchVisibility(true)}
      >
        <HiBars3BottomRight size={26} />
      </button>

      {isOpen && <MobileSideMenu />}

      {/* Only appears after 768px */}
      <CentralMenu />
      <div className="w-[200px] h-[60px] bg-zinc-700 rounded-md hidden md:block"></div>
    </div>
  )
}
