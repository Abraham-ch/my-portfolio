import Astro from '../svg/TechnologiesSVG/Astro.svg?react'
import C from '../svg/TechnologiesSVG/C++.svg?react'
import CSS from '../svg/TechnologiesSVG/CSS.svg?react'
import Figma from '../svg/TechnologiesSVG/Figma.svg?react'
import Flowbite from '../svg/TechnologiesSVG/Flowbite.svg?react'
import Framer from '../svg/TechnologiesSVG/Framer.svg?react'
import Git from '../svg/TechnologiesSVG/Git.svg?react'
import HTML5 from '../svg/TechnologiesSVG/HTML5.svg?react'
import JavaScript from '../svg/TechnologiesSVG/JavaScript.svg?react'
import MUI from '../svg/TechnologiesSVG/MUI.svg?react'
import NextJS from '../svg/TechnologiesSVG/NextJS.svg?react'
import Nodejs from '../svg/TechnologiesSVG/Nodejs.svg?react'
import React from '../svg/TechnologiesSVG/React.svg?react'
import Remix from '../svg/TechnologiesSVG/Remix.svg?react'
import ShadcnUI from '../svg/TechnologiesSVG/ShadcnUI.svg?react'
import Tailwindcss from '../svg/TechnologiesSVG/tailwindcss.svg?react'
import TypeScript from '../svg/TechnologiesSVG/TypeScript.svg?react'
import Vite from '../svg/TechnologiesSVG/Vite.svg?react'


const Technologies = () => {
  return (
  <section className="h-full pb-16 lg:pb-0 lg:h-screen w-full flex flex-col justify-center">
    <h2 className="text-2xl font-bold text-blue-950 px-7 pb-5 dark:text-yellow-400">
      Technologies
    </h2>
    <div className="grid grid-cols-9 grid-rows-4 lg:grid-rows-2 text-blue-950 dark:text-white p-4 gap-4 lg:gap-8 max-w-5xl w-full">

      <div className='col-span-9 lg:col-span-5 flex flex-col gap-y-6 py-8 px-8 rounded-lg dark:bg-neutral-950/20 shadow-md shadow-gray-500 dark:shadow-black dark:hover:ring-yellow-500 ring-transparent hover:ring-blue-950 ring-1 text-sm sm:text-base'>
        <h3 className='font-bold text-lg sm:text-xl text-black dark:text-orange-400'>UI Libraries</h3>
        <span className='grid grid-rows-1 w-full grid-cols-5 rounded-lg gap-8 text-center'>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>Framer</h4>
            <Framer className='w-10 min-[440px]:w-14  h-fit' />
          </span>
          <span className='flex flex-col-reverse justify-center w-full gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>tailwindcss</h4>
          <Tailwindcss className='w-10 min-[440px]:w-14 h-fit' />
          </span>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>MUI</h4>
          <MUI className='w-10 min-[440px]:w-14 h-fit' />
          </span>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>Shadcn/ui</h4>
          <ShadcnUI className='w-10 min-[440px]:w-14 h-fit' />
          </span>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>Flowbite</h4>
          <Flowbite className='w-10 min-[440px]:w-14 h-fit' />
          </span>
        </span>
      </div>

      <div className='col-span-9 lg:col-span-5 flex flex-col gap-y-6 py-8 px-8 row-start-2 rounded-lg dark:bg-neutral-950/20 shadow-md shadow-gray-500 dark:shadow-black dark:hover:ring-yellow-500 ring-transparent hover:ring-blue-950 ring-1 text-sm sm:text-base'>
        <h3 className='font-bold text-lg sm:text-xl text-black dark:text-orange-400'>Languages</h3>
        <span className='grid grid-rows-1 grid-cols-5 rounded-lg gap-8 text-center'>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>HTML</h4>
            <HTML5 className='w-10 min-[440px]:w-14 h-fit' />
          </span>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>CSS</h4>
            <CSS className='w-10 min-[440px]:w-14 h-fit' />
          </span>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>JavaScript</h4>
            <JavaScript className='w-10 min-[440px]:w-14 h-fit' />
          </span>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>C++</h4>
            <C className='w-10 min-[440px]:w-14 h-fit' />
          </span>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>TypeScript</h4>
            <TypeScript className='w-10 min-[440px]:w-14 h-fit' />
          </span>
        </span>
      </div>

      <div className='col-span-9 lg:col-span-4 flex flex-col gap-y-6 py-8 px-8 rounded-lg dark:bg-neutral-950/20 shadow-md shadow-gray-500 dark:shadow-black dark:hover:ring-yellow-500 ring-transparent hover:ring-blue-950 ring-1 text-sm sm:text-base'>
        <h3 className='font-bold text-lg sm:text-xl text-black dark:text-orange-400'>Frameworks</h3>
        <span className='grid grid-rows-1 grid-cols-4 justify-items-center rounded-lg gap-8 text-center'>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>Astro</h4>
            <Astro className='w-10 min-[440px]:w-14 h-fit' />
          </span>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>React</h4>
            <React className='w-10 min-[440px]:w-14 h-fit' />
          </span>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>Next.js</h4>
            <NextJS className='w-10 min-[440px]:w-14 h-fit' />
          </span>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>Remix</h4>
            <Remix className='w-10 min-[440px]:w-14 h-fit' />
          </span>
        </span>
      </div>

      <div className='col-span-9 lg:col-span-4 flex flex-col gap-y-6 py-8 px-8 rounded-lg dark:bg-neutral-950/20 shadow-md shadow-gray-500 dark:shadow-black dark:hover:ring-yellow-500 ring-transparent hover:ring-blue-950 ring-1 text-sm sm:text-base'>
        <h3 className='font-bold text-lg sm:text-xl text-black dark:text-orange-400'>Tools/Environment</h3>
        <span className='grid grid-rows-1 grid-cols-4 justify-items-center rounded-lg gap-8 text-center'>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>Node.js</h4>
            <Nodejs className='w-10 min-[440px]:w-14 h-fit' />
          </span>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>Git</h4>
            <Git className='w-10 min-[440px]:w-14 h-fit' />
          </span>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>Figma</h4>
            <Figma className='w-10 min-[440px]:w-14 h-fit' />
          </span>
          <span className='flex flex-col-reverse justify-center gap-y-2 items-center'>
            <h4 className='min-[380px]:block hidden font-semibold'>Vite</h4>
            <Vite className='w-10 min-[440px]:w-14 h-fit' />
          </span>
        </span>
      </div>

    </div>
  </section>
  )
};

export { Technologies }