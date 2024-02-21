export default function Home() {
  return (
    <>
      <div className="top-0 z-[-2] bg-slate-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)][background-size:16px_16px][mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-neutral-900">
        <main className="max-w-5xl mx-auto">
          <section
            id="about-me"
            className="flex items-center sm:justify-between flex-col sm:flex-row rounded-2xl px-2 pt-20"
          >
            <div>
              <h1 className="px-4 py-4 text-6xl font-bold font-body dark:text-white">
                Abraham <br />
                Chafloque Arias
              </h1>
              <h2 className="px-5 py-3 text-2xl font-bold text-blue-950 dark:text-yellow-400">
                Fronted Developer - Student - 🇵🇪
              </h2>
              <p className="px-5 py-3 text-slate-700 max-w-2xl dark:text-gray-200">
                I'm a Physical engineering student and an enthusiastic in web
                development currently improving my skills in HTML, CSS,
                JavaScript and Git software with well known frameworks such as
                Astro and React.
              </p>
              <div className="flex ml-4 gap-2 pt-2">
                <a
                  href="https://www.linkedin.com/in/abraham-chafloque-arias-049384220/"
                  target="_blank"
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

                <a href="mailto:ascaytaos@gmail.com">
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
                <a href="https://github.com/Abraham-ch" target="_blank">
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
              className="rounded-full w-2/3 h-auto sm:h-72 sm:w-auto my-4"
              src="https://pbs.twimg.com/profile_images/1413402247946514432/L_UgbAiI_400x400.jpg"
              alt="Abraham"
            />
          </section>

          <h2 className="text-2xl font-bold text-blue-950 px-7 pt-20 dark:text-yellow-400">
            Experience
          </h2>
          <section className="px-8 py-10">
            <ol className="relative border-s dark:border-sky-200 border-black ml-3">
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700 dark:border-sky-200 dark:bg-sky-200"></div>
                <time className="mb-1 text-sm font-semibold leading-none text-sky-800 dark:text-sky-200">
                  Nowadays...
                </time>
                <h3 className="text-lg font-semibold mt-2 dark:text-gray-200">
                  Developing landing of Air Quality measurement system
                </h3>
                <p className="pt-2 mb-4 text-base font-normal text-pretty max-w-3xl dark:text-gray-200">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate accusamus eos consequatur iusto quos iure
                  voluptatibus non fugit, fugiat sunt est. Incidunt facilis ex
                  quisquam dolorum delectus amet quis quod!
                </p>

                <a
                  target="_blank"
                  href="https://github.com/Abraham-ch/Breath-project/blob/main/InformeFinal_Digitales_Calle_Chafloque.pdf"
                  className="border-solid dark:border-white border-black border-2 px-2 py-1 md:py-2 md:px-4 text-xs md:text-base rounded-full inline-flex justify-center items-center transition hover:scale-105 dark:text-gray-200 dark:hover:text-yellow-400 dark:hover:border-yellow-400 hover:text-sky-800 hover:border-sky-800"
                >
                  See more
                  <svg
                    className="w-3 h-3 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700 dark:border-sky-200 dark:bg-sky-200"></div>
                <time className="mb-1 text-sm font-semibold leading-none text-sky-800 dark:text-sky-200">
                  2022 - 2023
                </time>
                <h3 className="text-lg font-semibold dark:text-gray-200">
                  Breath module
                </h3>
                <p className="pt-2 mb-4 text-base font-normal text-pretty max-w-3xl dark:text-gray-200">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magni quam hic saepe corrupti quidem dignissimos officiis
                  quaerat. Animi voluptates obcaecati numquam doloribus est
                  provident aspernatur placeat excepturi nulla. Enim, ipsum?
                </p>
              </li>
            </ol>
          </section>

          <h2 className="text-2xl font-bold text-blue-950 px-7 pt-10 pb-5 dark:text-yellow-400">
            Some Projects
          </h2>

          <section
            id="projects"
            className="px-2 pt-10 pb-10 grid-col-4 lg:grid grid-flow-col grid-rows-6 gap-4"
          >
            <div className="group col-span-4 row-span-2 relative overflow-hidden">
              <img
                className="object-cover"
                src="https://www.tooltyp.com/wp-content/uploads/2019/03/1920x600-desarrollo-web.jpg"
                alt="me"
              />
              <div className="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 gap-y-5 sm:gap-y-0">
                <h3 className="text-2xl text-white font-bold">Proyecto 1</h3>
                <p className="text-white items-center pt-5 pb-8 px-10 hidden sm:flex">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus quam qui explicabo! Saepe voluptate sapiente earum
                  error. Harum veniam quidem voluptatum ipsam sunt, sit velit
                  temporibus vel provident nostrum soluta?
                </p>
                <a className="bg-black text-white py-2 px-5" href="$">
                  {" "}
                  See more{" "}
                </a>
              </div>
            </div>

            <div className="group col-span-2 row-span-4 relative overflow-hidden">
              <img
                className="object-cover h-full"
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="1"
              />
              <div className="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 gap-y-5 sm:gap-y-0">
                <h3 className="text-2xl text-white font-bold">Proyecto 2</h3>
                <p className="text-white items-center pt-5 pb-8 px-10 hidden sm:flex">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus quam qui explicabo! Saepe voluptate sapiente earum
                  error. Harum veniam quidem voluptatum ipsam sunt, sit velit
                  temporibus vel provident nostrum soluta?
                </p>
                <a className="bg-black text-white py-2 px-5" href="$">
                  {" "}
                  See more{" "}
                </a>
              </div>
            </div>

            <div className="group col-span-2 row-span-2 relative overflow-hidden">
              <img
                className="object-cover"
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="1"
              />
              <div className="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 gap-y-5 sm:gap-y-0">
                <h3 className="text-2xl text-white font-bold">Proyecto 3</h3>
                <p className="text-white items-center pt-5 pb-8 px-10 hidden sm:flex">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus quam qui explicabo! Saepe voluptate sapiente earum
                  error. Harum veniam quidem voluptatum ipsam sunt, sit velit
                  temporibus vel provident nostrum soluta?
                </p>
                <a className="bg-black text-white py-2 px-5" href="$">
                  {" "}
                  See more{" "}
                </a>
              </div>
            </div>

            <div className="group col-span-2 row-span-2 relative overflow-hidden">
              <img
                className="object-cover"
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="1"
              />
              <div className="absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 gap-y-5 sm:gap-y-0">
                <h3 className="text-2xl text-white font-bold">Proyecto 4</h3>
                <p className="text-white items-center pt-5 pb-8 px-10 hidden sm:flex">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus quam qui explicabo! Saepe voluptate sapiente earum
                  error. Harum veniam quidem voluptatum ipsam sunt, sit velit
                  temporibus vel provident nostrum soluta?
                </p>
                <a className="bg-black text-white py-2 px-5" href="$">
                  {" "}
                  See more{" "}
                </a>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="md:flex md:justify-between pb-2 bg-slate-200 dark:bg-slate-800 mt-10 mb-20 flex-cols"
          >
            <div className="px-10 py-10">
              <h2 className="text-2xl font-bold text-blue-950 px-7 pt-10 dark:text-yellow-400">
                Get in touch
              </h2>
              <p className="px-7 pt-8 max-w-xl dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                quos eveniet illo, iure possimus ullam quaerat officia magni
                exercitationem ab, saepe nam architecto consequatur, reiciendis
                aliquam nulla? Deserunt, omnis deleniti?
                <strong className="flex flex-col py-4">
                  {" "}
                  Aun faltan cositas por añadir
                </strong>
              </p>
            </div>
            <form className="mx-auto flex flex-col items-center max-w-fit px-12 rounded-lg my-8 py-6 md:mx-10 gap-y-3 drop-shadow shadow-sm bg-slate-100 dark:bg-slate-500">
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="Name"
                  className="dark:text-gray-200 font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  className="p-2 w-60 rounded h-8 border-black border-2 border-solid dark:border-white"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="Email"
                  className="dark:text-gray-200 font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  className="p-2 w-60 rounded h-8 border-black border-2 border-solid dark:border-white"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="Message"
                  className="dark:text-gray-200 font-semibold"
                >
                  Message
                </label>
                <input
                  type="text"
                  id="Message"
                  name="Message"
                  className="p-2 w-60 h-14 rounded overflow-scroll border-black border-2 border-solid dark:border-white"
                  minLength="10"
                  maxLength="auto"
                />
              </div>
              <button className="dark:hover:bg-yellow-400 hover:border-blue-800 hover:bg-blue-800 hover:text-white dark:hover:border-yellow-400 rounded-lg py-1 px-4 transition hover:scale-105 dark:text-gray-200 font-semibold dark:border-white border-2 border-solid border-black">
                Send
              </button>
            </form>
          </section>
          <footer className="h-10 pb-16 dark:text-gray-100 px-4">
            © 2024 Abraham Ch. Some rights reserved and deserved.
          </footer>
        </main>
      </div>
    </>
  );
}
