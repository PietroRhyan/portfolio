import Link from 'next/link'
import { ReactNode } from 'react'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export interface MenuType {
  title: string
  route: string
  icon?: ReactNode
}

export const menus: MenuType[] = [
  {
    title: 'About',
    route: '/about',
  },
  {
    title: 'Projects',
    route: '/projects',
  },
  {
    title: 'Blog',
    route: '/blog',
  },
  {
    title: 'Uses',
    route: '/uses',
  },
]

export function CentralMenu() {
  const router = usePathname()

  return (
    <nav className="md:flex hidden md:items-center md:justify-center gap-1 absolute left-1/2 -translate-x-1/2">
      {menus.map((menu) => (
        <li key={menu.title} className="list-none flex flex-col items-center">
          <Link
            href={menu.route}
            data-active={router === menu.route}
            className="hover:bg-lightgray text-base font-medium py-2 px-4 rounded-lg text-text-gray data-[active=true]:text-black hover:text-black transition-colors duration-200 cursor-pointer"
          >
            {menu.title}
          </Link>
          {router === menu.route ? (
            <motion.div
              className="w-[25px] border-t border-black"
              layoutId="underline"
            />
          ) : null}
        </li>
      ))}
    </nav>
  )
}
