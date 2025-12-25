import { Menu } from '../assets/svg/header'
import ToogleButton from './ToogleButton'
import { VerticalMenu } from './VerticalMenu'

export const Header = () => {
  return (
    <nav className='px-8 max-w-full mx-auto flex justify-between'>
      <ToogleButton />
      <div className='hidden sm:flex h-16 items-center justify-between self-end'>
        <span className='text-neutral-800 flex gap-x-2 items-center text-sm pr-4 dark:text-white'>
          <button>EN</button>
          <div className='w-2 h-2 rounded-full dark:bg-yellow-500 bg-blue-950' />
          <button>ES</button>
        </span>
        <span className='dark:text-white flex items-center space-x-4'>
          <p className='text-sm'>MENU</p>
          <Menu />
        </span>
      </div>
      <VerticalMenu />
    </nav>
  )
}
