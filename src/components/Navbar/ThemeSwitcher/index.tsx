'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="p-2 rounded-full cursor-pointer hover:bg-lightgray dark:hover:bg-dark-gray text-text-gray dark:text-text-lightgray hover:text-black dark:hover:text-white transition-all duration-200">
        <FiSun size={24} />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full cursor-pointer hover:bg-lightgray dark:hover:bg-dark-gray text-text-gray dark:text-text-lightgray hover:text-black dark:hover:text-white transition-all duration-200"
    >
      {theme === 'dark' ? <FiMoon size={24} /> : <FiSun size={24} />}
    </button>
  )
}
