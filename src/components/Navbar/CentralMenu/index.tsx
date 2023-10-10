import Link from 'next/link'

export function CentralMenu() {
  return (
    <ul className="md:flex hidden md:items-center md:justify-center gap-1 absolute left-1/2 -translate-x-1/2">
      <Link
        href={'#'}
        className="buttons-outline text-base font-semibold text-gray py-[10px] px-4 rounded-lg hover:bg-lightgray hover:text-black transition-colors duration-200 cursor-pointer"
      >
        About
      </Link>
      <Link
        href={'#'}
        className="buttons-outline text-base font-semibold text-gray py-[10px] px-4 rounded-lg hover:bg-lightgray hover:text-black transition-colors duration-200 cursor-pointer"
      >
        Projects
      </Link>
      <Link
        href={'#'}
        className="buttons-outline text-base font-semibold text-gray py-[10px] px-4 rounded-lg hover:bg-lightgray hover:text-black transition-colors duration-200 cursor-pointer"
      >
        Blog
      </Link>
      <Link
        href={'#'}
        className="buttons-outline text-base font-semibold text-gray py-[10px] px-4 rounded-lg hover:bg-lightgray hover:text-black transition-colors duration-200 cursor-pointer"
      >
        Uses
      </Link>
    </ul>
  )
}
