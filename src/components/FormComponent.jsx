import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from '@emailjs/browser'
import Toast from "./Toast"

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string().min(10),
})

const {VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY} = import.meta.env


export default function FormComponent() {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data) => {

    const emailJSparams = {
      from_name : data.name,
      from_email : data.email,
      message : data.message,
    };

    emailjs
      .send(VITE_SERVICE_ID, VITE_TEMPLATE_ID, emailJSparams, VITE_PUBLIC_KEY)
      .then(() => {
        alert("Mensaje enviado!");
        reset();
        
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto flex flex-col items-center max-w-fit px-12 rounded-lg my-8 py-6 md:mx-10 gap-y-2 drop-shadow shadow-sm bg-slate-100 dark:bg-slate-500">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="Name" className="dark:text-gray-200 font-semibold">
            Full Name
          </label>
          <input {...register("name", {
            required: "Please, tell me your name :)"
          })}
            type="text"
            id="Name"
            placeholder="Jhon Doe"
            className="p-2 w-60 rounded h-8 border-black border-2 border-solid dark:border-white"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="Email" className="dark:text-gray-200 font-semibold">
            Email
          </label>
          <input {...register("email", {required: true})}
            type="email"
            id="Email"
            placeholder="jhon.doe@mail.com"
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
          <input {...register("message", {required: true})}
            type="text"
            id="Message"
            className="p-2 w-60 h-14 rounded overflow-scroll border-black border-2 border-solid dark:border-white"
            minLength="10"
            maxLength="auto"
          />
        </div>
        <input type="submit" className="mt-2 cursor-pointer dark:hover:bg-yellow-400 hover:border-blue-800 hover:bg-blue-800 hover:text-white dark:hover:border-yellow-400 rounded-lg py-1 px-4 transition hover:scale-105 dark:text-gray-200 font-semibold dark:border-white border-2 border-solid border-black"/>
      </form>
    </>
  )
}