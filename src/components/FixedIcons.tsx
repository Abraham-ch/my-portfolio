import { Figma, Github, Linkedin } from '@/assets/svg/main'
import { CopyClipboard } from '@/components'

export const FixedIcons = () => {
  return (
    <section className='dark:bg-[#0B0B0B]/50 bg-slate-100/50 fixed z-1000 w-fit bottom-4 right-8 hidden sm:flex flex-col ml-2 gap-2 rounded-full p-2.5'>
      <a
        href='https://www.linkedin.com/in/abraham-chafloque-arias-049384220/'
        title='Linkedin'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Linkedin className=' transition hover:scale-110 hover:text-blue-800 dark:text-white dark:hover:text-blue-500 w-9 h-auto' />
      </a>
      <CopyClipboard />
      <a
        href='https://github.com/Abraham-ch'
        target='_blank'
        title='Github'
        rel='noopener noreferrer'
      >
        <Github className='transition hover:scale-110 hover:text-blue-800 dark:text-white dark:hover:text-yellow-400 w-9 h-auto' />
      </a>
      <a
        href='https://www.figma.com/@abrahamch'
        target='_blank'
        title='Figma'
        rel='noopener noreferrer'
      >
        <Figma className='transition hover:scale-110 hover:text-blue-800 dark:text-white dark:hover:text-pink-500 w-9 h-auto' />
      </a>
    </section>
  )
}
