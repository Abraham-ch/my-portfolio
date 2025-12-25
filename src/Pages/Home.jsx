import { StickyVerticalBar } from '../components/VerticalBar'
import { About, Services as ServicesMock } from '../sections/en'
import { Experience } from '../sections/experience'
import { InTouch } from '../sections/in-touch'
import { Main } from '../sections/main'
import { Services } from '../sections/services'
import { Skills } from '../sections/skills'

export default function Home() {
  return (
    <main className='mx-auto'>
      <div className='flex'>
        <StickyVerticalBar title={About.title} />
        <div className='w-full'>
          <Main />
          <Services services={ServicesMock} />
          <Experience />
          <Skills />
          <InTouch />
        </div>
      </div>
      <footer className='h-10 pb-16 dark:text-gray-100 px-4 text-sm'>
        © 2024 Abraham Ch. Some rights reserved and deserved.
      </footer>
    </main>
  )
}
