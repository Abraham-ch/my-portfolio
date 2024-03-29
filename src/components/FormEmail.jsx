export default function FormEmail() {
  return (
    <>
      <section
        id="contact"
        className="md:flex md:justify-between pb-2 bg-slate-200 dark:bg-slate-800 mt-10 mb-20 flex-cols"
      >
        <div className="px-10 py-10">
          <h2 className="text-2xl font-bold text-blue-950 px-7 pt-10 dark:text-yellow-400">
            Get in touch
          </h2>
          <p className="px-7 pt-8 max-w-xl dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos
            eveniet illo, iure possimus ullam quaerat officia magni
            exercitationem ab, saepe nam architecto consequatur, reiciendis
            aliquam nulla? Deserunt, omnis deleniti?
            <strong className="flex flex-col py-4">
              {" "}
              Aun faltan cositas por añadir
            </strong>
          </p>
        </div>
        <form
          action="https://formsubmit.co/ascaytaos@gmail.com"
          method="POST"
          className="mx-auto flex flex-col items-center max-w-fit px-12 rounded-lg my-8 py-6 md:mx-10 gap-y-3 drop-shadow shadow-sm bg-slate-100 dark:bg-slate-500"
        >
          <div className="flex flex-col gap-y-2">
            <label htmlFor="Name" className="dark:text-gray-200 font-semibold">
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
            <label htmlFor="Email" className="dark:text-gray-200 font-semibold">
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
          <button
            type="submit"
            className="dark:hover:bg-yellow-400 hover:border-blue-800 hover:bg-blue-800 hover:text-white dark:hover:border-yellow-400 rounded-lg py-1 px-4 transition hover:scale-105 dark:text-gray-200 font-semibold dark:border-white border-2 border-solid border-black"
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
}
