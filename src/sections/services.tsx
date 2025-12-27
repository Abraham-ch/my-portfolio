import { Subtitle } from '@/components/Subtitle'
import { useLanguage } from '@/context/LanguageContext'

type Props = {
  services: Service[]
}

type Service = {
  title: string
  description: string
}

export const Services = ({ services }: Props) => {
  const { t } = useLanguage()

  return (
    <section className='relative min-h-dvh flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <Subtitle text={t.Subtitles.services} />
      <article className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 items-start md:items-center pt-16'>
        <span className='text-[200px] md:text-[300px] lg:text-[350px] leading-none text-stroke'>
          S
        </span>
        {services.map((service) => (
          <span key={service.title} className='dark:text-white space-y-4'>
            <h3 className='text-2xl'>{service.title}</h3>
            <p className='text-base'>{service.description}</p>
          </span>
        ))}
      </article>
      <span className='absolute bottom-0 text-[64px] md:text-[120px] lg:text-[150px] text-stroke uppercase font-bold'>
        cre8tive
      </span>
    </section>
  )
}
