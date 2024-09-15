import FormComponent from "../components/FormComponent";

const InTouch = () => {
  return (
    <section
        id="contact"
        className="md:flex h-full md:justify-between pb-2 bg-slate-200 dark:bg-slate-800 mt-10 mb-20 flex-cols"
      >
        <div className="px-10 h-full my-auto md:py-0 pt-10">
          <h2 className="text-2xl font-bold text-blue-950 px-7 dark:text-yellow-400">
            Get in touch
          </h2>
          <p className="px-7 pt-8 max-w-lg dark:text-gray-200">
            Feel free to get in touch with me using the form below. I’m open to any inquiries, collaborations, or just a chat about tech projects :{")"}
          </p>
        </div>  
        <FormComponent />
      </section>
  )
};

export { InTouch }