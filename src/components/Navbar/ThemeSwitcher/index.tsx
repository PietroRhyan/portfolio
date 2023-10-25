'use client'

import { FiMoon, FiSun } from 'react-icons/fi'
import { SwitchTheme } from '../../../../context/SwitchTheme'

export function ThemeSwitcher() {
  const { isInDarkTheme, toggleThemeHandler } = SwitchTheme()

  return (
    <button
      onClick={toggleThemeHandler}
      className="p-2 rounded-full cursor-pointer hover:bg-lightgray dark:hover:bg-dark-gray text-text-gray dark:text-text-lightgray hover:text-black dark:hover:text-white transition-colors duration-200"
    >
      {isInDarkTheme ? <FiMoon size={24} /> : <FiSun size={24} />}
    </button>
  )
}
