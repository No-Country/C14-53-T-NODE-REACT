// import React from 'react'
import Background from './Background'
import { PetAvatar } from './Pets/PetAvatar'

const Dashboard = () => {
  return (
    <>
      <main className='container relative z-20 mx-auto'>
        <div className='grid h-full gap-3 px-3 md:grid-cols-5 py-7 md:py-0'>
          <div className='col-span-3 h-screen max-w-screen-xl px-3 pt-[86px] md:pt-[150px] mx-auto flex flex-col'>
            <h1 className='font-black leading-tight md:mb-8 text-1xl md:text-4xl font-montserrat'>¿QUE QUIERES HACER HOY DIA?</h1>

            <div className='grid h-full gap-4 sm:grid-cols-2 md:grid-cols-3 py-7 md:py-0'>
              <div className='flex flex-col'>
                <a href='#' className='text-center group'>
                  <div className='overflow-hidden rounded-[20px] mb-4 shadow-3xl'>
                    <img className='transition-transform group-hover:scale-105' src='./img/dashboard-img-01.jpg' alt='Icono Calendario' />
                  </div>
                  <p className='font-bold group-hover:underline font-montserrat'>Calendario</p>
                </a>
              </div>
              <div className='flex flex-col'>
                <a href='#' className='text-center group'>
                  <div className='overflow-hidden rounded-[20px] mb-4 shadow-3xl'>
                    <img className='transition-transform group-hover:scale-105' src='./img/dashboard-img-04.png' alt='Icono Estadisticas' />
                  </div>
                  <p className='font-bold group-hover:underline font-montserrat'>Estadisticas</p>
                </a>
              </div>
              <div className='flex flex-col'>
                <a href='#' className='text-center group'>
                  <div className='overflow-hidden rounded-[20px] mb-4 shadow-3xl'>
                    <img className='transition-transform group-hover:scale-105' src='./img/dashboard-img-05.png' alt='Icono Cumpleaños' />
                  </div>
                  <p className='font-bold group-hover:underline font-montserrat'>Cumpleaños</p>
                </a>
              </div>
              <div className='flex flex-col'>
                <a href='#' className='text-center group'>
                  <div className='overflow-hidden rounded-[20px] mb-4 shadow-3xl'>
                    <img className='transition-transform group-hover:scale-105' src='./img/dashboard-img-06.png' alt='Icono Cumpleaños' />
                  </div>
                  <p className='font-bold group-hover:underline font-montserrat'>Medicamentos</p>
                </a>
              </div>
              <div className='flex flex-col'>
                <a href='#' className='text-center group'>
                  <div className='overflow-hidden rounded-[20px] mb-4 shadow-3xl'>
                    <img className='transition-transform group-hover:scale-105' src='./img/dashboard-img-03.png' alt='Icono Cumpleaños' />
                  </div>
                  <p className='font-bold group-hover:underline font-montserrat'>Historial Clinico</p>
                </a>
              </div>
            </div>
          </div>
          <div className='flex-col col-span-2 h-screen hidden md:block max-w-screen-xl px-3 pt-[150px] text-center'>
            <div className='p-7 md:px-10 rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>
              <p className='mb-5 text-2xl font-black font-montserrat'>Tus mascotas</p>
              <div className='grid gap-7 md:grid-cols-2'>
                <PetAvatar img='./img/Chucky.png' name='Chucky'></PetAvatar>
                <PetAvatar img='./img/Darth_Vader.png' name='Darth Vader'></PetAvatar>
                <PetAvatar img='./img/Lucifer.png' name='Lucifer'></PetAvatar>
                <PetAvatar img='./img/Juan.png' name='Juan'></PetAvatar>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Dashboard
