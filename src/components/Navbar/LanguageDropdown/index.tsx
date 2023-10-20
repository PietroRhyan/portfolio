'use client'

import { useEffect, useRef, useState } from 'react'
import { FiChevronDown, FiCheck } from 'react-icons/fi'

const languages = ['English', 'Português']

export function LanguageDropdown() {
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
        className="flex items-center justify-center data-[isopen=true]:bg-lightgray gap-1 cursor-pointer text-black font-medium transition-colors duration-200 py-[10px] pl-4 pr-3 rounded-lg hover:bg-lightgray"
      >
        <h4>{isSelected}</h4>
        <FiChevronDown size={16} />
      </button>

      {openDropdown && (
        <div
          ref={popupRef}
          className="absolute z-10 top-12 right-0 border border-lightgray rounded-lg w-[140px]"
        >
          <ul className="divide-y divide-lightgray">
            {languages.map((lang) => (
              <button
                key={lang}
                data-selected={isSelected === lang}
                className="text-gray w-full p-2 font-medium cursor-pointer hover:text-black transition-colors duration-200 data-[selected=true]:text-blue flex items-center justify-between"
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
