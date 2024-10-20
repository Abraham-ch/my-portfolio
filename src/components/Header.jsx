import ToogleButton from "./ToogleButton"
import { VerticalMenu } from "./VerticalMenu"

export default function Header(){
    return (
      <nav className="px-6 max-w-5xl mx-auto rounded-sm shadow-md backdrop-blur-2xl -m-b-4 sticky top-0 sm:inset-y-4 z-10">
        <div className="hidden sm:flex h-16 items-center justify-between">
          <div className="flex space-x-6 font-semibold">
            <a
              href="#about-me"
              className="p-2 m-1 transition-colors hover:text-blue-800 dark:hover:text-white dark:text-yellow-400"
              title="About me"
            >
              About me
            </a>
            <a
              href="#projects"
              title="Projects"
              className="p-2 m-1 transition-colors hover:text-blue-800 dark:hover:text-white dark:text-yellow-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              title="Contact"
              className="p-2 m-1 transition-colors hover:text-blue-800 dark:hover:text-white dark:text-yellow-400"
            >
              Contact
            </a>
          </div>
          <span className="hidden sm:flex">
            <ToogleButton/>
          </span>
        </div>
        <VerticalMenu />
      </nav>
    )
}