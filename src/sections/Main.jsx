import Perfil from "../img/perfil.jpg"
import Name from '../svg/name.svg?react'
import Linkedin from '../svg/Main/linkedin.svg?react';
import Github from '../svg/Main/github.svg?react'
import Figma from '../svg/Main/figma.svg?react'
import { CopyClipboard } from '../components/CopyClipboard'

const Main = () => {
   return (
    <section
            id="about-me"
            className="flex items-center sm:justify-between flex-col sm:flex-row rounded-2xl px-2 h-screen-16"
          >
            <div>
              <h1 className="px-4 py-4">
                <Name className="dark:fill-white fill-black dark:border-white border-black stroke-black max-w-xs dark:stroke-white"/>
              </h1>
              <div className="px-5 py-3 text-2xl font-bold text-blue-950 dark:text-yellow-400">
                Fronted Developer | UI/UX Designer | 🇵🇪
              </div>
              <p className="px-5 py-3 text-slate-700 max-w-2xl dark:text-gray-200">
                I&apos;m a Physical engineering student and an enthusiastic in web
                development currently improving my skills in HTML, CSS,
                JavaScript and Git software with well known frameworks such as
                Astro and React.
              </p>
              <div className="flex ml-4 gap-2 pt-2">
                <a
                  href="https://www.linkedin.com/in/abraham-chafloque-arias-049384220/"
                  title="Linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className=" transition hover:scale-110 hover:text-blue-800 dark:text-white dark:hover:text-blue-500 w-9 h-auto" />
                </a>
                <CopyClipboard />
                <a
                  href="https://github.com/Abraham-ch"
                  target="_blank"
                  title="Github"
                  rel="noopener noreferrer"
                >
                  <Github className="transition hover:scale-110 hover:text-blue-800 dark:text-white dark:hover:text-yellow-400 w-9 h-auto" />
                </a>
                <a
                  href="https://www.figma.com/@abrahamch"
                  target="_blank"
                  title="Figma"
                  rel="noopener noreferrer"
                >
                  <Figma className="transition hover:scale-110 hover:text-blue-800 dark:text-white dark:hover:text-pink-500 w-9 h-auto" />
                </a>
              </div>
            </div>

            <img
              className="rounded-full w-2/3 border-4 border-blue-950 dark:border-yellow-400 h-auto sm:h-72 sm:w-auto my-4"
              src={Perfil}
              alt="Abraham Chafloque Arias"
              title="Abraham Chafloque"
            />
          </section>
   )
};

export { Main }