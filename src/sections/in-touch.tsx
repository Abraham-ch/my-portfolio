import { FormComponent } from '../components/FormComponent'

const InTouch = () => {
  return (
    <section
      id='contact'
      className='min-h-screen flex items-center px-4 py-16 md:py-32 bg-transparent'
    >
      <div className='max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
        <div className='space-y-8'>
          <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight'>
            Let's build something{' '}
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600'>
              amazing together
            </span>
          </h2>
          <p className='text-gray-400 text-lg md:text-xl max-w-xl'>
            I'm always excited to collaborate on new projects, discuss
            innovative ideas, or simply have a conversation about technology and
            development. Let's create something extraordinary.
          </p>
          <div className='flex flex-col gap-4 text-gray-300'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0'>
                <svg
                  className='w-5 h-5 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <span>Fast response time</span>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0'>
                <svg
                  className='w-5 h-5 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <span>Professional collaboration</span>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0'>
                <svg
                  className='w-5 h-5 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                  />
                </svg>
              </div>
              <span>Flexible solutions</span>
            </div>
          </div>
        </div>
        <FormComponent />
      </div>
    </section>
  )
}

export { InTouch }
