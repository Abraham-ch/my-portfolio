import Perfil from "../img/perfil.jpg";
import Name from '../svg/name.svg?react';

const Main = () => {
   return (
    <section
            id="about-me"
            className="flex items-center sm:justify-between flex-col sm:flex-row rounded-2xl px-2 h-screen"
          >
            <div>
              <h1 className="px-4 py-4">
                <Name className="dark:fill-white fill-black dark:border-white border-black stroke-black max-w-xs dark:stroke-white"/>
              </h1>
              <div className="px-5 py-3 text-2xl font-bold text-blue-950 dark:text-yellow-400">
                Fronted Developer - Student - 🇵🇪
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
                  <svg
                    className=" transition hover:scale-110 hover:text-blue-800 dark:text-white dark:hover:text-yellow-400 w-9 h-auto"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </a>

                <a href="mailto:ascaytaos@gmail.com" title="email to">
                  <svg
                    className="transition-all hover:scale-110 hover:text-blue-800 dark:text-white dark:hover:text-yellow-400 w-9 h-auto"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Abraham-ch"
                  target="_blank"
                  title="Github"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="transition hover:scale-110 hover:text-blue-800 dark:text-white dark:hover:text-yellow-400 w-9 h-auto"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
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