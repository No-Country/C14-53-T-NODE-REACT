function HomePage() {
  return (
    <>
      <main className="relative z-20">
        <div className='homepage container mx-auto h-screen'>
          <div className='grid grid-cols-2 gap-1 h-full'>
            <div className='flex flex-col justify-center w-3/4 2xl:w-2/4'>
              <h1 className='font-serif mb-6 text-5xl md:text-6xl leading-tight'>Un registro seguro y completo de tu mascota.</h1>
              <p className=' text-xl  md:text-2xl font-semibold'>Guarda toda la información sobre tu mascota en un solo lugar.</p>
              <div className='mt-10'>
                <a className='btn shadow-2xl shadow-outline' href='#'>
                  Ingresar en plataforma
                </a>
              </div>
            </div>

            <div className='w-3/5 mx-auto flex justify-end items-end mb-7'>
              <img src='../src/assets/img/home-dog.png' alt='Dog smiling' />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
