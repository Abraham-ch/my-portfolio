type SubtitleProps = {
  text: string
}

export const Subtitle = ({ text }: SubtitleProps) => {
  return (
    <h2 className='after:w-10 after:pb-2.5 after:block after:border-b-2 dark:text-white uppercase text-4xl font-bold'>
      {text}
    </h2>
  )
}
