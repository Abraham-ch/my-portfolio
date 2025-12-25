import { useLanguage } from '../context/LanguageContext'
import { NavigationMenu } from './NavigationMenu'
import ToogleButton from './ToogleButton'
import { VerticalMenu } from './VerticalMenu'

export const Header = () => {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <nav className='px-8 max-w-full mx-auto flex justify-between'>
      <ToogleButton />
      <div className='hidden sm:flex h-16 items-center justify-between self-end gap-4'>
        <span className='text-neutral-800 flex gap-x-2 items-center text-sm pr-4 dark:text-white'>
          <button
            onClick={() => toggleLanguage('en')}
            className={`transition-opacity ${
              language === 'en' ? 'opacity-100 font-semibold' : 'opacity-50'
            }`}
          >
            EN
          </button>
          <div
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              language === 'en'
                ? 'dark:bg-yellow-500 bg-blue-950'
                : 'dark:bg-orange-500 bg-red-700'
            }`}
          />
          <button
            onClick={() => toggleLanguage('es')}
            className={`transition-opacity ${
              language === 'es' ? 'opacity-100 font-semibold' : 'opacity-50'
            }`}
          >
            ES
          </button>
        </span>
        <NavigationMenu />
      </div>
      <VerticalMenu />
    </nav>
  )
}
