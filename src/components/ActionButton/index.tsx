import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center gap-1 text-sm font-medium',
  variants: {
    buttonStyle: {
      blackLarge:
        'bg-black text-lightgray py-2 px-3 rounded-md hover:opacity-95 transition-all duration-200 outline-none focus:outline focus:outline-offset-2 focus:outline-blue',
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
  icon?: ReactNode
}

export function ActionButton({ name, icon, buttonStyle }: ActionButtonProps) {
  return (
    <button className={button({ buttonStyle })}>
      {name}
      {icon || null}
    </button>
  )
}
