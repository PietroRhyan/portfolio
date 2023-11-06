'use client'

import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    function toggleVisible() {
      const hasScrolled = document.documentElement.scrollTop

      if (hasScrolled > 300) {
        setVisible(true)
        return
      }

      setVisible(false)
    }

    window.addEventListener('scroll', toggleVisible)
  })

  if (!visible) {
    return null
  }

  return (
    <div className="rounded-full fixed z-10 bottom-6 right-6 w-[42px] h-[42px] bg-gradient-to-b from-[#656262] dark:from-white via-[#65626230] dark:via-superlight-blue to-transparent animate-fade p-[2px]">
      <button
        onClick={scrollToTop}
        className="rounded-full w-full h-full flex items-center justify-center bg-white dark:bg-black-variant text-black dark:text-lightgray"
      >
        <FiArrowUp size={24} />
      </button>
    </div>
  )
}
