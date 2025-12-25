import { useEffect, useState } from 'react'

import { useLanguage } from '../context/LanguageContext'

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  const menuItems = [
    { id: 'main', label: t.Navigation.sections.main },
    { id: 'services', label: t.Navigation.sections.services },
    { id: 'experience', label: t.Navigation.sections.experience },
    { id: 'skills', label: t.Navigation.sections.skills },
    { id: 'contact', label: t.Navigation.sections.contact },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='hidden sm:flex items-center space-x-4 dark:text-white text-neutral-800 z-50'
        aria-label='Toggle menu'
      >
        <p className='text-sm'>{t.Navigation.menu}</p>
        <div className='w-6 h-6 flex flex-col justify-center items-center gap-1'>
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <nav
          className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-gradient-to-b from-neutral-900 to-black flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-4xl sm:text-5xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 ${
                isOpen
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-20 opacity-0'
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}

export { NavigationMenu }
