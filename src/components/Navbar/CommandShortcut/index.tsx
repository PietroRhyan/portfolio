import { FiCommand } from 'react-icons/fi'

export function CommandShortcut() {
  return (
    <button className="p-2 rounded-full cursor-pointer hover:bg-lightgray dark:hover:bg-dark-gray text-text-gray dark:text-text-lightgray hover:text-black dark:hover:text-white transition-colors duration-200">
      <FiCommand size={24} />
    </button>
  )
}
