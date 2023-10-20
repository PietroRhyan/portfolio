import { FiCommand } from 'react-icons/fi'

export function CommandShortcut() {
  return (
    <button className="p-2 rounded-full cursor-pointer hover:bg-lightgray text-black transition-colors duration-200">
      <FiCommand size={24} />
    </button>
  )
}
