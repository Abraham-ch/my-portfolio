import { useRef } from 'react'

import { motion, useScroll } from 'framer-motion'

import { Subtitle } from '@/components'
import { useLanguage } from '@/context/LanguageContext'

const Work = () => {
  const { t } = useLanguage()
  const timelineRef = useRef<HTMLOListElement>(null)
  // 0 → 1 as the timeline passes through the middle of the viewport
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  })

  return (
    <section id='work' className='mx-auto px-4 sm:px-6 lg:pl-16 pt-32 w-full'>
      <div className='max-w-sm'>
        <Subtitle text={t.Subtitles.work} />
      </div>
      <ol ref={timelineRef} className='relative mt-12 max-w-3xl'>
        {/* Timeline track */}
        <span
          aria-hidden='true'
          className='absolute left-[7px] top-2 bottom-0 w-0.5 rounded-full bg-gray-300 dark:bg-neutral-800'
        />
        {/* Glowing fill that follows the scroll */}
        <motion.span
          aria-hidden='true'
          style={{ scaleY: scrollYProgress }}
          className='absolute left-[7px] top-2 bottom-0 w-0.5 origin-top rounded-full bg-yellow-500 '
        />
        {t.WorkExperience.map((job) => (
          <li key={job.company + job.period} className='relative pl-10 pb-12'>
            {/* Dot lights up once it crosses the middle of the viewport */}
            <motion.span
              aria-hidden='true'
              initial={{
                backgroundColor: 'rgb(163, 163, 163)',
                boxShadow: '0 0 0 0 rgba(234, 179, 8, 0)',
              }}
              whileInView={{
                backgroundColor: 'rgb(234, 179, 8)',
                boxShadow: '0 0 16px 4px rgba(234, 179, 8, 0.6)',
              }}
              viewport={{ margin: '0px 0px -50% 0px' }}
              transition={{ duration: 0.4 }}
              className='absolute left-0 top-1.5 w-4 h-4 rounded-full'
            />
            <p className='text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300'>
              {job.period}
            </p>
            <h3 className='mt-1 text-xl md:text-2xl font-semibold dark:text-white'>
              {job.role} ·{' '}
              <span className='text-yellow-500'>{job.company}</span>
            </h3>
            <ul className='mt-4 space-y-2 list-disc pl-5 text-sm md:text-base text-gray-700 dark:text-white'>
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            {job.stack.length > 0 && (
              <p className='mt-4 text-sm text-gray-600 dark:text-gray-300'>
                {job.stack.join(' · ')}
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}

export { Work }
