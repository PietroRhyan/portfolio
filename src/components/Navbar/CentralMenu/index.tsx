import Link from 'next/link'
import { ReactNode } from 'react'

export interface MenuType {
  title: string
  url: string
  icon?: ReactNode
}

export const menus: MenuType[] = [
  {
    title: 'About',
    url: '#',
  },
  {
    title: 'Projects',
    url: '#',
  },
  {
    title: 'Blog',
    url: '#',
  },
  {
    title: 'Uses',
    url: '#',
  },
]

export function CentralMenu() {
  return (
    <nav className="md:flex hidden md:items-center md:justify-center gap-1 absolute left-1/2 -translate-x-1/2">
      {menus.map((menu) => (
        <li key={menu.title} className="list-none">
          <Link
            href={'#'}
            className="hover:bg-lightgray text-base font-medium py-[10px] px-4 rounded-lg text-text-gray hover:text-black transition-colors duration-200 cursor-pointer"
          >
            {menu.title}
          </Link>
        </li>
      ))}
    </nav>
  )
}
