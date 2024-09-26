import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from '@emailjs/browser'

import { useToast } from "../hooks/use-toast"

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string().min(10),
})

const {VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY} = import.meta.env

export default function FormComponent() {
  const { toast } = useToast();
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
        toast({
          title: "Mensaje enviado",
          description: "Muchas gracias por contactarme :)",
          duration: 2500,
        })
        reset();
      })
      .catch((errors) => {
        alert(JSON.stringify(errors));
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="min-[500px]:ring-8 dark:ring-orange-500 flex flex-col items-center max-w-fit px-4 min-[350px]:px-12 rounded-md w-full h-full py-16 gap-y-3 drop-shadow shadow-sm bg-slate-100 dark:bg-orange-600">
        <div className="text-2xl font-extrabold pb-4 text-gray-600 dark:text-white">Contact Form</div>
          <input {...register('name')}
            autoComplete="on"
            minLength="2"
            type="text"
            id="Name"
            placeholder="Full Name"
            className="px-6 py-3 w-full rounded border"
          />
          <input {...register("email")}
            autoComplete="on" 
            type="email"
            id="Email"
            placeholder="Email@mail.com"
            className="px-6 py-3 w-full rounded border"
          />
          <textarea {...register("message")} type="text" id="Message"
            autoComplete="on"
            minLength="10"
            maxLength="auto"
            placeholder="Message" className="px-6 w-full py-3 h-24 rounded border resize-y">
          </textarea>
        <input type="submit" value="Submit" className="mt-2 w-full text-lg hover:brightness-90 hover:font-bold cursor-pointer dark:bg-orange-700 border-blue-500 bg-blue-500 text-white dark:border-yellow-400 rounded-lg py-3 px-12 font-semibold transition hover:scale-105 dark:text-gray-200 font-semiboldborder-2"/>
      </form>
    </>
  )
}