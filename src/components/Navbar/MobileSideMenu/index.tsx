'use client'

import { motion } from 'framer-motion'
import { MobileMenu } from '../../../../context/HandleOpenMobileMenu'
import {
  FiX,
  FiInfo,
  FiBox,
  FiEdit2,
  FiMonitor,
  FiChevronDown,
} from 'react-icons/fi'
import Link from 'next/link'

export function MobileSideMenu() {
  const { isOpen, switchVisibility } = MobileMenu()

  return (
    <>
      <motion.div
        className="fixed z-40 bg-black w-screen h-screen left-0 top-0"
        aria-modal="true"
        initial={{ opacity: 0 }}
        animate={isOpen ? { opacity: 0.3 } : { opacity: 0 }}
        onClick={() => switchVisibility(false)}
      ></motion.div>
      <motion.div className="absolute z-50 top-0 right-0 ml-auto bg-white h-screen w-[220px] p-4">
        <div
          onClick={() => switchVisibility(false)}
          className="w-fit absolute right-4 top-4 block p-2 text-black rounded-md hover:bg-lightgray transition-colors cursor-pointer duration-200"
        >
          <FiX size={24} />
        </div>

        <div className="border-b border-lightgray pb-4 pt-2 mb-4">
          <h4 className="mb-3 text-sm text-gray">Pages</h4>
          <ul className="flex flex-col items-start gap-2">
            <Link
              href={'#'}
              className="buttons-outline text-md font-medium text-gray rounded-lg hover:text-black transition-colors duration-200 cursor-pointer flex items-center gap-2"
            >
              <FiInfo size={16} />
              About
            </Link>
            <Link
              href={'#'}
              className="buttons-outline text-md font-medium text-gray rounded-lg hover:text-black transition-colors duration-200 cursor-pointer flex items-center gap-2"
            >
              <FiBox size={16} />
              Projects
            </Link>
            <Link
              href={'#'}
              className="buttons-outline text-md font-medium text-gray rounded-lg hover:text-black transition-colors duration-200 cursor-pointer flex items-center gap-2"
            >
              <FiEdit2 size={16} />
              Blog
            </Link>
            <Link
              href={'#'}
              className="buttons-outline text-md font-medium text-gray rounded-lg hover:text-black transition-colors duration-200 cursor-pointer flex items-center gap-2"
            >
              <FiMonitor size={16} />
              Uses
            </Link>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm text-gray">Tools</h4>
          <ul className="flex flex-col items-start gap-2">
            <p className="buttons-outline text-md font-semibold text-gray rounded-lg hover:text-black transition-colors duration-200 cursor-pointer flex items-center gap-1">
              English
              <FiChevronDown size={16} />
            </p>
            <p className="buttons-outline text-md font-semibold text-gray rounded-lg hover:text-black transition-colors duration-200 cursor-pointer flex items-center gap-1">
              Theme dark
            </p>
          </ul>
        </div>
      </motion.div>
    </>
  )
}
