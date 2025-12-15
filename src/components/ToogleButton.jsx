import { useEffect, useState } from 'react'

import { Moon, Sun } from '../assets/svg/header'

export default function ToogleButton() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className='flex'>
      <button
        className='ml-2 transition-colors hover:text-blue-800 dark:hover:text-white dark:text-yellow-500 rounded-full block dark:hidden'
        onClick={handleChangeTheme}
        title='Light theme'
      >
        <Sun className='h-6 dark:hidden' />
      </button>
      <button
        className='ml-2 transition-colors hover:text-blue-800 dark:hover:text-white dark:text-yellow-500 rounded-full dark:block hidden'
        onClick={handleChangeTheme}
        title='Dark theme'
      >
        <Moon className='h-6 dark:block hidden' />
      </button>
    </div>
  )
}
