'use client'

import { useEffect, useRef, useState } from 'react'
import { FiChevronDown, FiCheck } from 'react-icons/fi'
import { VariantProps, tv } from 'tailwind-variants'

const languages = ['English', 'Português']

const button = tv({
  base: 'flex items-center justify-center gap-1 cursor-pointer text-text-gray dark:text-text-lightgray hover:text-black dark:hover:text-white font-medium transition-colors duration-200',
  variants: {
    buttonStyle: {
      bigButton:
        'py-[10px] pl-4 pr-3 rounded-lg hover:bg-lightgray dark:hover:bg-dark-gray data-[isopen=true]:bg-lightgray dark:data-[isopen=true]:bg-dark-gray',
      minimalButton: 'py-1 pr-1',
    },
  },
  defaultVariants: {
    buttonStyle: 'bigButton',
  },
})

type LanguageDropdownProps = VariantProps<typeof button>

export function LanguageDropdown({ buttonStyle }: LanguageDropdownProps) {
  const [isSelected, setIsSelected] = useState(languages[0])
  const [openDropdown, setOpenDropdown] = useState(false)

  const popupRef = useRef<HTMLDivElement>(null)

  const handleClose = () => setOpenDropdown(false)
  const handleBodyClick = (event: MouseEvent) => {
    const button = document.querySelector('#language-dropdown')

    // Check if the clicked element is not the button or the popup container element
    if (
      button &&
      button instanceof HTMLElement &&
      !button.contains(event.target as Node) &&
      popupRef.current &&
      popupRef.current instanceof HTMLElement &&
      !popupRef.current.contains(event.target as Node)
    ) {
      handleClose()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleBodyClick)

    return () => {
      document.removeEventListener('click', handleBodyClick)
    }
  })

  return (
    <div className="relative">
      <button
        id="language-dropdown"
        onClick={() => setOpenDropdown(!openDropdown)}
        data-isopen={openDropdown}
        className={button({ buttonStyle })}
      >
        <h4>{isSelected}</h4>
        <FiChevronDown size={16} />
      </button>

      <div className="absolute px-1 -top-2 -right-2 rounded-[6px] bg-red-500 text-white font-semibold text-xs">
        <p>soon</p>
      </div>

      {openDropdown && (
        <div
          ref={popupRef}
          className="absolute z-10 top-12 right-0 border border-lightgray dark:border-dark-gray bg-white dark:bg-black-variant rounded-lg w-[140px]"
        >
          <ul className="divide-y divide-lightgray dark:divide-dark-gray">
            {languages.map((lang) => (
              <button
                key={lang}
                data-selected={isSelected === lang}
                className="text-gray w-full p-2 font-medium cursor-pointer hover:text-black dark:hover:text-white transition-colors duration-200 data-[selected=true]:text-blue flex items-center justify-between"
                onClick={() => {
                  setIsSelected(lang)
                }}
              >
                {lang}
                {isSelected === lang && <FiCheck />}
              </button>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
