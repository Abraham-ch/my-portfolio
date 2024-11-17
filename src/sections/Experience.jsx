const Experience = () => {
  return (
    <section className="px-8 pb-16 min-[520px]:pb-0 h-full flex flex-col justify-center min-[420px]:h-screen">
      <h2 className="text-2xl font-bold text-blue-950 pt-20 dark:text-yellow-400 py-10">
        Experience
      </h2>
      <ol className="relative border-s dark:border-orange-200 border-black ml-3">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700 dark:border-orange-200 dark:bg-orange-200"></div>
          <time className="mb-1 text-sm font-semibold leading-none text-sky-800 dark:text-orange-200">
            Nowadays...
          </time>
          <h3 className="text-lg font-bold mt-2 dark:text-orange-400">
            SkyTech contributor
          </h3>
          <p className="pt-2 mb-4 text-base font-normal text-pretty max-w-3xl dark:text-gray-200">
            Working as a designer and frontend developer jr at SkyTech, contributing to the development of custom software and tech.
          </p>
          <a target="_blank" href="https://skytech-services.vercel.app/" className="border-transparent border-2 px-2 py-1 md:py-2 md:px-4 text-xs md:text-base inline-flex justify-center items-center transition dark:hover:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-black font-bold rounded-md hover:text-sky-800 hover:border-sky-800" title="SkyTech" rel="noopener noreferrer">Go to the page</a>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700 dark:border-orange-200 dark:bg-orange-200"></div>
          <time className="mb-1 text-sm font-semibold leading-none text-sky-800 dark:text-orange-200">
            2022 - 2023
          </time>
          <h3 className="text-lg font-bold mt-2 dark:text-orange-400">
            Breath module - Developing landing of Air Quality measurement system
          </h3>
          <p className="pt-2 mb-4 text-base font-normal text-pretty max-w-3xl dark:text-gray-200">
            Designed an air quality module using an ESP32, integrating sensors to measure CO2, PM2.5, temperature, pressure, and humidity. Calibrated the SCD40 sensor to classify air quality into three ranges: good, decent, and unhealthy. Developed a landing page for the platform to display real-time data.
          </p>
          <span className="flex flex-row-reverse gap-x-10 w-fit">
            <a
            target="_blank"
            href="https://github.com/Abraham-ch/Breath-project/blob/main/InformeFinal_Digitales_Calle_Chafloque.pdf"
            className="border-solid px-2 py-1 md:py-2 md:px-4 text-xs md:text-base inline-flex justify-center items-center transition dark:text-gray-400/50 dark:hover:text-orange-400 dark:hover:border-orange-400 hover:text-sky-800 hover:border-sky-800 underline underline-offset-8"
            title="IoT air quality development Github reference"
            rel="noopener noreferrer"
          >
            Reference
          </a>
          <a target="_blank" href="https://surichakra.vercel.app/" className="border-transparent border-2 px-2 py-1 md:py-2 md:px-4 text-xs md:text-base inline-flex justify-center items-center transition dark:hover:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-black font-bold rounded-md hover:text-sky-800 hover:border-sky-800" title="Surichakra web app" rel="noopener noreferrer">Go to the page</a>
          </span>
        </li>
      </ol>
    </section>
  )
};

export { Experience }