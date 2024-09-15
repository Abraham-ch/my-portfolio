
const Projects = () => {
  return (
    <section className="flex flex-col h-full py-8 justify-center"
            id="projects"
          >
            <h2 className="text-2xl font-bold text-blue-950 px-7 pt-0 min[430px]:pt-8 pb-5 dark:text-yellow-400">
            Some Projects
            </h2>
            <span className="px-2 pt-10 pb-10 grid-col-4 lg:grid grid-flow-col grid-rows-4 gap-4">
              <div className="group col-span-2 row-span-4 relative overflow-hidden">
                <img
                  className="object-cover h-full"
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="SkyTech"
                  title="SkyTech"
                />
                <div className="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 gap-y-5 sm:gap-y-0">
                  <h3 className="text-2xl text-white font-bold">SkyTech</h3>
                  <p className="text-white text-center items-center pt-5 pb-8 px-10 hidden sm:flex">
                    We solve business challenges using cutting-edge technologies, with highly skilled professionals ready to help make your dreams a reality.
                  </p>
                  <a
                    className="bg-black text-white py-2 px-5"
                    href="https://skytech-services.vercel.app/"
                    target="_blank"
                    title="SkyTech" rel="noreferrer"
                  >
                    Go there!
                  </a>
                </div>
              </div>

              <div className="group col-span-2 row-span-2 relative overflow-hidden">
                <img
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Surichakra"
                  title="Surichakra"
                />
                <div className="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 gap-y-5 sm:gap-y-0">
                  <h3 className="text-2xl text-white font-bold">Surichakra</h3>
                  <p className="text-white text-center items-center pt-5 pb-8 px-10 hidden sm:flex">
                    Surichakra is a cloud-based IoT management platform that unifies the connection, monitoring, and management of a wide range of IoT devices. We stand out for our interoperability, enabling integration with industrial, commercial, and smart home devices.
                  </p>
                  <a
                    className="bg-black text-white py-2 px-5"
                    href="https://surichakra.vercel.app/"
                    title="Surichakra"
                    target="_blank" rel="noreferrer"
                  >
                    Go there!
                  </a>
                </div>
              </div>

              <div className="group col-span-2 row-span-2 relative overflow-hidden">
                <img
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Figma - SmartTransit"
                  title="Figma - SmartTransit"
                />
                <div className="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 gap-y-5 sm:gap-y-0">
                  <h3 className="text-2xl text-white font-bold">SmartTransit</h3>
                  <p className="text-white items-center pt-5 pb-8 px-10 hidden sm:flex">
                    Discover faster routes, real-time updates, and a smarter way to travel. Your journey, simplified.
                  </p>
                  <a
                    className="bg-black text-white py-2 px-5"
                    href="https://www.figma.com/community/file/1415097760195199937"
                    title="Figma - SmartTransit"
                    target="_blank" rel="noreferrer"
                  >
                    Go there!
                  </a>
                </div>
              </div>
            </span>
          </section>
  )
};

export { Projects }