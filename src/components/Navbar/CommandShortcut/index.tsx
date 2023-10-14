import { FiCommand } from 'react-icons/fi'

export function CommandShortcut() {
  return (
    <div className="p-2 rounded-full cursor-pointer hover:bg-lightgray text-gray hover:text-black transition-colors duration-200">
      <FiCommand size={24} />
    </div>
  )
}