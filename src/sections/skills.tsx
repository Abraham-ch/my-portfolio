import type { ComponentType } from 'react'

import * as Icons from '@/assets/svg/technologies'
import { Subtitle } from '@/components/Subtitle'

import { Skills as Info } from './en'

export const Skills = () => {
  const column1 = Info.slice(0, 4)
  const column2 = Info.slice(4, 8)
  const column3 = Info.slice(8, 10)
  const column4 = Info.slice(10, 12)
  const column5 = Info.slice(12, 13)

  return (
    <section className='min-h-screen pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='mb-12'>
        <Subtitle text='Skills' />
      </div>
      {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
      <div className='flex flex-col md:flex-row gap-5'>
        <div className='flex-1 lg:max-w-sm space-y-5'>
          {column1.map((skill) => (
            <SkillContainer key={skill.title} {...skill} />
          ))}
        </div>
        <div className='flex-1 lg:max-w-xs space-y-5'>
          {column2.map((skill) => (
            <SkillContainer key={skill.title} {...skill} />
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:max-w-md lg:flex-col lg:space-y-5'>
          {column3.map((skill) => (
            <SkillContainer key={skill.title} {...skill} />
          ))}
          <div className='flex gap-x-5'>
            {column4.map((skill) => (
              <SkillContainer key={skill.title} {...skill} />
            ))}
          </div>
          {column5.map((skill) => (
            <SkillContainer key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

type SkillProp = {
  icons?: string[]
  title: string
  description: string
  skills?: string[]
}

export const SkillContainer = (props: SkillProp) => {
  const { title, description, skills, icons } = props

  return (
    <section className='bg-[#1E1E1E] rounded-2xl p-6 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 space-y-4'>
      <span className='flex justify-center'>
        {icons && (
          <div className='flex flex-wrap px-2 justify-center gap-3 mb-4'>
            {icons.map((iconName) => {
              const IconComponent = Icons[
                iconName as keyof typeof Icons
              ] as ComponentType<{ className?: string }>
              return IconComponent ? (
                <div
                  key={iconName}
                  className='bg-[#141414] rounded-full w-[72px] h-[72px] items-center flex justify-center'
                >
                  <IconComponent className='w-10 h-10' />
                </div>
              ) : null
            })}
          </div>
        )}
        {skills && (
          <div className='flex flex-wrap gap-2 mt-4 h-min'>
            {skills.map((skill) => (
              <span
                key={skill}
                className='px-3 py-2 bg-[#141414] text-gray-300 text-sm rounded-full'
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </span>
      <h4 className='text-xl font-semibold text-white mb-3'>{title}</h4>
      <p className='text-gray-400 text-sm mb-3'>{description}</p>
    </section>
  )
}
