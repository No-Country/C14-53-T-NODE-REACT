import Background from './Background'

function HomePage() {
  return (
    <>
      <main className='relative z-20'>
        <div className='homepage mx-auto h-screen max-w-screen-xl pt-20 md:pt-0 px-3'>
          <div className='grid md:grid-cols-2 gap-1 h-full py-7 md:py-0'>
            <div className='flex flex-col justify-center w-100 2xl:w-2/4 order-2 md:order-1 px-3 text-center md:text-left'>
              <h1 className='font-serif mb-6 text-4xl md:text-6xl leading-tight'>Un registro seguro y completo de tu mascota.</h1>
              <p className='text-lg  md:text-2xl font-semibold'>Guarda toda la información sobre tu mascota en un solo lugar.</p>
              <div className='mt-5 md:mt-10'>
                <a className='btn shadow-custom shadow-outline' href='#'>
                  Ingresar en plataforma
                </a>
              </div>
            </div>

            <div className='w-3/5 mx-auto flex justify-end items-end mb-7 order-1 md:order-2 px-3'>
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
