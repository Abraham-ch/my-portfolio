import { useEffect, useRef, useState } from 'react'

import { ChevronRight } from '@/assets/svg/main'
import { Subtitle } from '@/components/Subtitle'
import { useLanguage } from '@/context/LanguageContext'

const Experience = () => {
  const { t } = useLanguage()
  const Experiences = t.Experiences
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = imageRefs.current.indexOf(
          entry.target as HTMLImageElement,
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
      rootMargin: '-20% 0px -20% 0px',
    })

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section className='mx-auto px-4 sm:px-6 lg:pl-16 pt-32 w-full'>
      <div className='max-w-sm'>
        <Subtitle text={t.Subtitles.experience} />
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-start min-h-screen gap-8 overflow-x-clip'>
        <article className='lg:sticky lg:top-0 pt-8 lg:pt-32 w-full lg:max-w-[400px] space-y-4 self-start'>
          {Experiences.map((experience, index) => (
            <div key={experience.title} className='overflow-hidden'>
              <h3
                className={`text-xl md:text-2xl font-semibold transition-colors duration-500 ${
                  activeIndex === index
                    ? 'text-black dark:text-white'
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
                  <img
                    src={experience.img}
                    alt={experience.title}
                    className='w-full h-auto rounded-lg object-cover mt-4'
                  />
                )}
              </div>
              {/* Desktop: Collapsing behavior */}
              <div
                className={`hidden lg:block transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? 'max-h-96 opacity-100 mt-4'
                    : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <p className='text-base text-gray-700 dark:text-white'>
                  {experience.description}
                </p>
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
            <img
              key={experience.title}
              ref={(el) => (imageRefs.current[index] = el)}
              src={experience.img}
              alt={experience.title}
              className={`h-[600px] xl:h-[800px] rounded-lg aspect-[16/12] object-cover transition-all duration-700 ease-out ${
                activeIndex === index
                  ? 'opacity-100 translate-x-32 xl:translate-x-56 scale-100'
                  : 'opacity-30 translate-x-48 xl:translate-x-72 scale-90'
              }`}
            />
          ))}
        </figure>
      </div>
    </section>
  )
}

export { Experience }
