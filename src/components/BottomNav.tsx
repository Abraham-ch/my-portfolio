import { useEffect, useState } from 'react'

import { Briefcase, Code2, FolderGit2, Home, Layers, Mail } from 'lucide-react'

import { cn } from '@/utils/cn'

import { useLanguage } from '../context/LanguageContext'

export const BottomNav = () => {
  const { t } = useLanguage()
  const [active, setActive] = useState('about-me')

  const items = [
    { id: 'about-me', label: t.Navigation.sections.main, Icon: Home },
    { id: 'services', label: t.Navigation.sections.services, Icon: Layers },
    { id: 'work', label: t.Navigation.sections.work, Icon: Briefcase },
    { id: 'projects', label: t.Navigation.sections.projects, Icon: FolderGit2 },
    { id: 'skills', label: t.Navigation.sections.skills, Icon: Code2 },
    { id: 'contact', label: t.Navigation.sections.contact, Icon: Mail },
  ]

  // Highlight the section crossing the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    items.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className='sm:hidden fixed bottom-0 inset-x-0 z-50 flex border-t border-gray-200 dark:border-neutral-800 bg-slate-100/90 dark:bg-[#0B0B0B]/90 backdrop-blur-md pb-[env(safe-area-inset-bottom)]'>
      {items.map(({ id, label, Icon }) => (
        <button
          key={id}
          onClick={() =>
            document
              .getElementById(id)
              ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          aria-current={active === id ? 'page' : undefined}
          className={cn(
            'flex-1 min-w-0 flex flex-col items-center gap-1 py-2 transition-colors',
            active === id
              ? 'text-blue-600 dark:text-yellow-500'
              : 'text-neutral-500 dark:text-neutral-400',
          )}
        >
          <Icon className='w-5 h-5' aria-hidden />
          <span className='text-[10px] leading-none truncate max-w-full px-0.5'>
            {label}
          </span>
        </button>
      ))}
    </nav>
  )
}
