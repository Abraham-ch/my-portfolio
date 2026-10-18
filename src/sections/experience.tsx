import { type ReactNode, useEffect, useRef, useState } from 'react'

import { ChevronRight } from '@/assets/svg/main'
import { Subtitle } from '@/components'
import { useLanguage } from '@/context/LanguageContext'
import { cn } from '@/utils/cn'

const Experience = () => {
  const { t } = useLanguage()
  const Experiences = t.Experiences
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = triggerRefs.current.indexOf(
          entry.target as HTMLDivElement,
        )
        if (index !== -1) {
          setActiveIndex(index)
        }
      }
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      rootMargin: '0px',
    })

    triggerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const imageClass =
    'h-[600px] xl:h-[800px] rounded-lg aspect-[16/12] object-cover transition-all duration-700 ease-out'
  const activeClass = (index: number) =>
    activeIndex === index
      ? 'opacity-100 translate-x-32 xl:translate-x-56 scale-100'
      : 'opacity-30 translate-x-48 xl:translate-x-72 scale-90'

  return (
    <section
      id='projects'
      className='mx-auto px-4 sm:px-6 lg:pl-16 pt-32 w-full'
    >
      <div className='max-w-sm'>
        <Subtitle text={t.Subtitles.projects} />
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-start min-h-screen gap-8 overflow-x-clip'>
        <article className='lg:sticky lg:top-0 pt-8 lg:pt-32 w-full lg:max-w-[400px] space-y-4 self-start'>
          {Experiences.map((experience, index) => (
            <div key={experience.title} className='overflow-hidden'>
              <h3
                className={`text-xl md:text-2xl font-semibold transition-colors duration-500 ${
                  activeIndex === index
                    ? 'text-yellow-500'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {experience.title}
              </h3>
              {/* Mobile/Tablet: Always show description */}
              <div className='lg:hidden mt-4 space-y-2'>
                <p className='text-sm md:text-base text-gray-700 dark:text-white'>
                  {experience.description}
                </p>
                {'stack' in experience && (
                  <p className='text-sm text-gray-600 dark:text-gray-300'>
                    {experience.stack}
                  </p>
                )}
                {experience.link && (
                  <a
                    href={experience.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-600 dark:text-gray-300 flex font-bold text-sm md:text-base hover:text-blue-600 dark:hover:text-yellow-400'
                  >
                    Learn more <ChevronRight className='w-5' />
                  </a>
                )}
                {experience.img && (
                  <ProjectLink href={experience.link} title={experience.title}>
                    <img
                      src={experience.img}
                      alt={experience.title}
                      className='w-full h-auto rounded-lg object-cover mt-4'
                    />
                  </ProjectLink>
                )}
              </div>
              {/* Desktop: Collapsing behavior */}
              <div
                className={cn(
                  'hidden lg:block transition-all duration-500 ease-in-out overflow-hidden',
                  activeIndex === index
                    ? 'max-h-[40rem] opacity-100 mt-4'
                    : 'max-h-0 opacity-0 mt-0',
                )}
              >
                <p className='text-base text-gray-700 dark:text-white'>
                  {experience.description}
                </p>
                {'stack' in experience && (
                  <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
                    {experience.stack}
                  </p>
                )}
                {experience.link && (
                  <a
                    href={experience.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-2 text-gray-600 dark:text-gray-300 flex font-bold hover:text-blue-600 dark:hover:text-yellow-400'
                  >
                    Learn more <ChevronRight className='w-5' />
                  </a>
                )}
              </div>
            </div>
          ))}
        </article>
        {/* Desktop only: Scrolling images with intersection observer */}
        <figure className='hidden lg:block py-4 space-y-2 flex-shrink-0 overflow-x-hidden'>
          {Experiences.map((experience, index) => (
            <div key={experience.title} className='relative'>
              {/* ponytail: placeholder until the project has a screenshot */}
              <ProjectLink href={experience.link} title={experience.title}>
                {experience.img ? (
                  <img
                    src={experience.img}
                    alt={experience.title}
                    className={cn(imageClass, activeClass(index))}
                  />
                ) : (
                  <div
                    className={cn(
                      imageClass,
                      activeClass(index),
                      'flex items-center justify-center bg-neutral-200 dark:bg-neutral-900 text-4xl font-bold text-yellow-500',
                    )}
                  >
                    {experience.title}
                  </div>
                )}
              </ProjectLink>
              {/* Invisible trigger div */}
              <div
                ref={(el) => (triggerRefs.current[index] = el)}
                className='absolute top-1/2 left-0 w-full h-2'
                aria-hidden='true'
              />
            </div>
          ))}
        </figure>
      </div>
    </section>
  )
}

// Wraps project media in a link when the project has one
const ProjectLink = ({
  href,
  title,
  children,
}: {
  href: string
  title: string
  children: ReactNode
}) =>
  href ? (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={title}
      className='block'
    >
      {children}
    </a>
  ) : (
    <>{children}</>
  )

export { Experience }
