import { FiMoon } from 'react-icons/fi'

export function ThemeSwitcher() {
  return (
    <div className="p-2 rounded-full cursor-pointer hover:bg-lightgray text-gray hover:text-black transition-colors duration-200">
      <FiMoon size={24} />
    </div>
  )
}
