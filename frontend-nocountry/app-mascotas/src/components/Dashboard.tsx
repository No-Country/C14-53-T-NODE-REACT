/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'
import { PetAvatar } from './Pets/PetAvatar'
import { GetPets } from '../api/pets'
import { useGlobalStore } from '../store/globalStore'
import { useEffect } from 'react'

const Dashboard = () => {
  const MyPets = useGlobalStore(state => state.pets)
  const setMyPets = useGlobalStore(state => state.setPets)

  async function getPets() {
    return await GetPets()
  }


  useEffect(() => {
    getPets().then(res => {
      setMyPets(res.data?.pets)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <main className='container relative z-20 mx-auto pt-[86px] md:pt-[150px]'>
        <div className='grid gap-3 px-3 md:grid-cols-5 py-7 md:py-0'>
          <div className='flex flex-col max-w-screen-xl col-span-3 px-3 mx-auto'>
            <h1 className='font-black leading-tight md:mb-8 text-1xl md:text-4xl font-montserrat'>¿QUE QUIERES HACER HOY DIA?</h1>

            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 py-7 md:py-0'>
              <div className='flex flex-col'>
                <Link to='/calendar' className='text-center group'>
                  <div className='overflow-hidden rounded-[20px] mb-4 shadow-3xl'>
                    <img className='transition-transform group-hover:scale-105' src='./img/dashboard-img-01.jpg' alt='Icono Calendario' />
                  </div>
                  <span className='font-bold group-hover:underline font-montserrat'>Calendario</span>
                </Link>
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

                <Link to='/medicalrecords' className='text-center group'>
                  <div className='overflow-hidden rounded-[20px] mb-4 shadow-3xl'>
                    <img className='transition-transform group-hover:scale-105' src='./img/dashboard-img-03.png' alt='Icono Cumpleaños' />
                  </div>
                  <p className='font-bold group-hover:underline font-montserrat'>Historial Clinico</p>
                </Link>
              </div>
              <div className='flex flex-col'>
                <Link to='/mypets' className='text-center group'>
                  <div className='overflow-hidden rounded-[20px] mb-4 shadow-3xl'>
                    <img className='transition-transform group-hover:scale-105' src='./img/dashboard-img-07.png' alt='Icono Mis Mascotas' />
                  </div>
                  <p className='font-bold group-hover:underline font-montserrat'>Mis Mascotas</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex-col hidden max-w-screen-xl col-span-2 text-center md:block'>
            {MyPets.length ? (
              <div className='p-7 md:px-10 h-full rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>
                <a href='/mypets' className='inline-block mb-5 text-2xl font-black font-montserrat'>
                  Tus mascotas
                </a>
                <div className='grid mb-10 gap-7 md:grid-cols-2'>
                  {MyPets?.slice(0, 6).map((pet: any, index: any) => (
                    <Link to={`/mypets?pet=${index}`} key={index}>
                      <PetAvatar fn={null} key={index} img={pet.image} name={pet.name}></PetAvatar>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className='p-7 md:px-10 h-full flex flex-col items-center justify-center rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>
                <h2 className='inline-block mb-5 text-2xl font-black font-montserrat'>¡Agrega tu primera mascota!</h2>
                <Link to='/mypets' className='w-full text-sm shadow-outline btn sm:text-xl sm:w-2/4 md:w-full shadow-custom'>
                  Gestionar mascotas
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default Dashboard
