import { useState } from 'react'

import { Menu } from '../assets/svg/header'
import ToogleButton from './ToogleButton'

const VerticalMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='sm:hidden mb-8'>
      <span className='flex w-full justify-between sm:hidden pt-4 pb-2 px-4'>
        <button
          className='rounded p-1 -ml-1 text-blue-950 hover:text-slate-100 hover:bg-blue-950 dark:hover:bg-yellow-400 dark:hover:text-white dark:text-yellow-500 focus:ring-2 focus:ring-slate-50 transition-colors'
          title='Menu'
          onClick={toggleMenu}
        >
          <Menu />
        </button>
        <ToogleButton />
      </span>
      {isOpen && (
        <div className='space-y-1 pb-3 border-t py-3 pt-2 sm:hidden hover:text-blue-800 dark:hover:text-white dark:text-yellow-500 font-bold items-center'>
          <a
            href='#about-me'
            title='About me'
            className='hover:bg-blue-800 dark:hover:bg-yellow-400 hover:text-white block px-3 py-2 rounded-md transition-colors'
          >
            About me
          </a>
          <a
            href='#projects'
            title='Projects'
            className='hover:bg-blue-800 dark:hover:bg-yellow-400 hover:text-white block px-3 py-2 rounded-md transition-colors'
          >
            Projects
          </a>
          <a
            href='#contact'
            title='Contact'
            className='hover:bg-blue-800 dark:hover:bg-yellow-400 hover:text-white block px-3 py-2 rounded-md transition-colors'
          >
            Contact
          </a>
        </div>
      )}
    </div>
  )
}

export { VerticalMenu }
