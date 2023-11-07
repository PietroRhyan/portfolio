import Link from 'next/link'
import { ReactNode, LinkHTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center gap-1 hover:opacity-95 transition-all duration-200 outline-none focus:outline focus:outline-offset-2 focus:outline-blue font-medium',
  variants: {
    buttonStyle: {
      blackLarge:
        'bg-black dark:bg-white text-sm text-lightgray dark:text-black py-2 px-3 rounded-md',
      blackSmall:
        'bg-black dark:bg-white text-xs custom-sm:text-sm text-lightgray dark:text-black py-[6px] px-2 rounded',
      whiteLarge:
        'bg-white dark:bg-black-variant text-xs text-black dark:text-white border border-black dark:border-white hover:brightness-95 py-2 px-3 rounded-md',
      whiteSmall:
        'bg-white dark:bg-black-variant text-xs custom-sm:text-sm text-black dark:text-white border border-black dark:border-white hover:brightness-95 py-[6px] px-2 rounded',
    },
    defaultVariants: {
      buttonStyle: 'blackLarge',
    },
  },
})

interface ActionButtonProps
  extends LinkHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof button> {
  name: string
  url: string
  fileName?: string
  icon?: ReactNode
}

export function ActionButton({
  name,
  icon,
  url,
  buttonStyle,
  ...rest
}: ActionButtonProps) {
  return (
    <Link
      {...rest}
      className={button({ buttonStyle })}
      href={url}
      target="_blank"
    >
      {name}
      {icon || null}
    </Link>
  )
}
