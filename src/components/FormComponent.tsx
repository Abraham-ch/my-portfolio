import { useForm } from 'react-hook-form'

import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { useLanguage } from '../context/LanguageContext'
import { useToast } from '../hooks/use-toast'

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string().min(10),
})

type FormData = z.infer<typeof schema>

const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env

export const FormComponent = () => {
  const { toast } = useToast()
  const { t } = useLanguage()
  const form = t.InTouch.form
  const { register, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    const emailJSparams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    }

    emailjs
      .send(VITE_SERVICE_ID, VITE_TEMPLATE_ID, emailJSparams, VITE_PUBLIC_KEY)
      .then(() => {
        toast({
          title: form.toastTitle,
          description: form.toastDescription,
          duration: 2500,
        })
        reset()
      })
      .catch((error) => {
        alert(JSON.stringify(error))
      })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-neutral-800 rounded-3xl p-8 md:p-12 w-full max-w-2xl shadow-lg dark:shadow-none'
    >
      <div className='mb-8'>
        <div className='w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center mb-6'>
          <svg
            className='w-6 h-6 text-white dark:text-black'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3.293 3.293 3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
          </svg>
        </div>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3'>
          {form.formTitle}
        </h2>
        <p className='text-gray-600 dark:text-gray-400 text-base md:text-lg'>
          {form.formSubtitle}
        </p>
      </div>

      <div className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label
              htmlFor='Name'
              className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
            >
              {form.nameLabel}
            </label>
            <input
              {...register('name')}
              autoComplete='on'
              minLength={2}
              type='text'
              id='Name'
              placeholder={form.namePlaceholderFull}
              className='w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-neutral-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-neutral-500 transition-colors'
            />
          </div>
          <div>
            <label
              htmlFor='Email'
              className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
            >
              {form.emailLabel}
            </label>
            <input
              {...register('email')}
              autoComplete='on'
              type='email'
              id='Email'
              placeholder={form.emailPlaceholderFull}
              className='w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-neutral-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-neutral-500 transition-colors'
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='Message'
            className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
          >
            {form.messageLabel}
          </label>
          <textarea
            {...register('message')}
            id='Message'
            autoComplete='on'
            minLength={10}
            rows={5}
            placeholder={form.messagePlaceholderFull}
            className='w-full px-4 py-3 bg-transparent border border-gray-300 dark:border-neutral-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-neutral-500 transition-colors resize-none'
          ></textarea>
        </div>

        <button
          type='submit'
          className='w-full bg-black dark:bg-white text-white dark:text-black font-semibold py-2 md:py-4 md:px-6 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200'
        >
          {form.submitButtonFull}
        </button>
      </div>
    </form>
  )
}
