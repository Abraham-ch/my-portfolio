type Props = {
  title: string[]
}

export const StickyVerticalBar = ({ title }: Props) => {
  return (
    <section className='hidden xl:flex sticky top-0 justify-center items-center w-28 h-screen-16 z-100 self-start'>
      <span className='-rotate-90 flex gap-6'>
        <div className='dark:text-white text-neutral-800 w-48'>{title[0]}</div>
        <div className='dark:text-gray-300 text-neutral-400 w-48'>
          {title[1]}
        </div>
      </span>
    </section>
  )
}
