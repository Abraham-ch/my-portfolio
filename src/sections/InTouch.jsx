import FormComponent from "../components/FormComponent";

const InTouch = () => {
  return (
    <section
        id="contact"
        className="md:flex-row flex flex-col gap-y-12 md:py-0 py-16 h-full md:justify-between px-2 items-center rounded-xl bg-slate-200 dark:bg-slate-800 my-16 md:my-40"
      >
        <div className="min-[500px]:px-10 px-4 h-full my-auto md:py-0 pt-10">
          <h2 className="text-2xl font-bold text-blue-950 min-[300px]:px-4 dark:text-yellow-400">
            Get in touch
          </h2>
          <p className="min-[500px]:px-4 pt-8 max-w-lg dark:text-gray-200">
            Feel free to get in touch with me using the form below. I&apos;m open to any inquiries, collaborations, or just a chat about tech projects :{")"}
          </p>
        </div>  
        <FormComponent />
      </section>
  )
};

export { InTouch }