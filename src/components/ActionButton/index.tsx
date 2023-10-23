import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center gap-1 hover:opacity-95 transition-all duration-200 outline-none focus:outline focus:outline-offset-2 focus:outline-blue font-medium',
  variants: {
    buttonStyle: {
      blackLarge: 'bg-black text-sm text-lightgray py-2 px-3 rounded-md',
      blackSmall:
        'bg-black text-xs text-lightgray py-[6px] px-2 rounded custom-sm:text-sm',
      whiteLarge:
        'bg-white text-xs text-black border border-black hover:brightness-95 py-2 px-3 rounded-md',
      whiteSmall:
        'bg-white text-xs text-black border border-black hover:brightness-95 py-[6px] px-2 rounded custom-sm:text-sm',
    },
    defaultVariants: {
      buttonStyle: 'blackLarge',
    },
  },
})

interface ActionButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {
  name: string
  url?: string
  icon?: ReactNode
}

export function ActionButton({
  name,
  icon,
  url,
  buttonStyle,
}: ActionButtonProps) {
  if (url) {
    return (
      <Link className={button({ buttonStyle })} href={url} target="_blank">
        {name}
        {icon || null}
      </Link>
    )
  }

  return (
    <button className={button({ buttonStyle })}>
      {name}
      {icon || null}
    </button>
  )
}
