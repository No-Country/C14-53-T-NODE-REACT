import { Link } from 'react-router-dom'
import Background from './Background'

function HomePage() {
  return (
    <>
      <main className='relative z-20'>
        <div className='h-screen max-w-screen-xl px-3 pt-20 mx-auto homepage md:pt-0'>
          <div className='grid h-full gap-1 md:grid-cols-2 py-7 md:py-0'>
            <div className='flex flex-col justify-center order-2 px-3 text-center w-100 2xl:w-3/4 md:order-1 md:text-left'>
              <h1 className='mb-6 font-serif text-4xl leading-tight md:text-6xl'>Un registro seguro y completo de tu mascota.</h1>
              <p className='text-lg font-semibold md:text-2xl'>Guarda toda la información sobre tu mascota en un solo lugar.</p>
              <div className='mt-5 md:mt-10'>
                <Link className='shadow-outline btn shadow-custom' to='/login'>
                  Ingresar en plataforma
                </Link>
              </div>
            </div>

            <div className='flex items-center justify-end order-1 w-3/5 px-3 mx-auto mb-7 md:order-2 md:w-4/5 '>
              <img src='./img/home-dog.png' alt='Dog smiling' />
            </div>
          </div>
        </div>
      </main>
      <Background></Background>
    </>
  )
}

export default HomePage
