const Projects = () => {
  return (
    <section className="md:pt-20 pt-0"
            id="projects"
          >
            <h2 className="text-2xl font-bold text-blue-950 px-7 pt-0 min[430px]:pt-8 pb-5 dark:text-yellow-400">
            Some Projects
            </h2>
            <span className="px-2 pt-10 pb-10 grid-col-4 lg:grid grid-flow-col grid-rows-6 gap-4">
              <div className="group col-span-4 row-span-2 relative overflow-hidden">
                <img
                  className="object-cover"
                  src="https://www.tooltyp.com/wp-content/uploads/2019/03/1920x600-desarrollo-web.jpg"
                  alt="me"
                  title="Proyecto 1"
                />
                <div className="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 gap-y-5 sm:gap-y-0">
                  <h3 className="text-2xl text-white font-bold">Proyecto 1</h3>
                  <p className="text-white items-center pt-5 pb-8 px-10 hidden sm:flex">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quam qui explicabo! Saepe voluptate sapiente earum
                    error. Harum veniam quidem voluptatum ipsam sunt, sit velit
                    temporibus vel provident nostrum soluta?
                  </p>
                  <a
                    className="bg-black text-white py-2 px-5"
                    href="#"
                    title="Proyecto 1"
                  >
                    {" "}
                    See more{" "}
                  </a>
                </div>
              </div>

              <div className="group col-span-2 row-span-4 relative overflow-hidden">
                <img
                  className="object-cover h-full"
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Proyecto 2"
                  title="Proyecto 2"
                />
                <div className="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 gap-y-5 sm:gap-y-0">
                  <h3 className="text-2xl text-white font-bold">Proyecto 2</h3>
                  <p className="text-white items-center pt-5 pb-8 px-10 hidden sm:flex">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quam qui explicabo! Saepe voluptate sapiente earum
                    error. Harum veniam quidem voluptatum ipsam sunt, sit velit
                    temporibus vel provident nostrum soluta?
                  </p>
                  <a
                    className="bg-black text-white py-2 px-5"
                    href="#"
                    title="Proyecto 2"
                  >
                    {" "}
                    See more{" "}
                  </a>
                </div>
              </div>

              <div className="group col-span-2 row-span-2 relative overflow-hidden">
                <img
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Proyecto 3"
                  title="Proyecto 3"
                />
                <div className="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 gap-y-5 sm:gap-y-0">
                  <h3 className="text-2xl text-white font-bold">Proyecto 3</h3>
                  <p className="text-white items-center pt-5 pb-8 px-10 hidden sm:flex">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quam qui explicabo! Saepe voluptate sapiente earum
                    error. Harum veniam quidem voluptatum ipsam sunt, sit velit
                    temporibus vel provident nostrum soluta?
                  </p>
                  <a
                    className="bg-black text-white py-2 px-5"
                    href="#"
                    title="Proyecto 3"
                  >
                    {" "}
                    See more{" "}
                  </a>
                </div>
              </div>

              <div className="group col-span-2 row-span-2 relative overflow-hidden">
                <img
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Proyecto 4"
                  title="Proyecto 4"
                />
                <div className="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 gap-y-5 sm:gap-y-0">
                  <h3 className="text-2xl text-white font-bold">Proyecto 4</h3>
                  <p className="text-white items-center pt-5 pb-8 px-10 hidden sm:flex">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quam qui explicabo! Saepe voluptate sapiente earum
                    error. Harum veniam quidem voluptatum ipsam sunt, sit velit
                    temporibus vel provident nostrum soluta?
                  </p>
                  <a
                    className="bg-black text-white py-2 px-5"
                    href="#"
                    title="Proyecto 4"
                  >
                    {" "}
                    See more{" "}
                  </a>
                </div>
              </div>
            </span>
          </section>
  )
};

export { Projects }