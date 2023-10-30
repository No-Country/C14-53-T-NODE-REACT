// import React from 'react'
import { Link } from 'react-router-dom'
// import { Link, useNavigate } from 'react-router-dom'
import { PetAvatar } from './Pets/PetAvatar'

// import axios, { AxiosResponse } from 'axios'
// import Cookies from 'js-cookie'
// import { useGlobalStore } from '../store/globalStore'
// import { useEffect } from 'react'

const Dashboard = () => {
  // const updateUser = useGlobalStore(state => state.setUser)
  // const isAuth = useGlobalStore(state => state.isAuth)
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if (!isAuth && token) {
  //     console.log()
  //     try {
  //       axios
  //         .get('https://petcare-app.onrender.com/api/v1/auth/profile', {
  //           headers: {
  //             Authorization: 'Bearer ' + token
  //           }
  //         })
  //         .then((response: AxiosResponse) => {
  //           console.log(response)
  //           setToken(response.data.token)
  //           setUser(response.data.email, response.data.password)
  //           // data:
  //           //   email:
  //           //   "dmz.mata@gmail.com"
  //           //   id:
  //           //   "cd34c3f2-f95e-424d-a73d-e70565d1912a"
  //           //   name:
  //           //   "David Alberto Martinez Mata"
  //         })
  //         .catch(error => {
  //           logout()
  //           console.log(error)
  //         })
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  // }, [isAuth])
  //
  //


  return (
    <>
      <main className='container relative z-20 mx-auto pt-[86px] md:pt-[150px]'>
        <div className='grid h-screen gap-3 px-3 md:grid-cols-5 py-7 md:py-0'>
          <div className='flex flex-col h-screen max-w-screen-xl col-span-3 px-3 mx-auto'>
            <h1 className='font-black leading-tight md:mb-8 text-1xl md:text-4xl font-montserrat'>¿QUE QUIERES HACER HOY DIA?</h1>

            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 py-7 md:py-0'>
              <div className='flex flex-col'>
                <a href='#' className='text-center group'>
                  <div className='overflow-hidden rounded-[20px] mb-4 shadow-3xl'>
                    <img className='transition-transform group-hover:scale-105' src='./img/dashboard-img-01.jpg' alt='Icono Calendario' />
                  </div>
                  <Link to='/calendar' className='font-bold group-hover:underline font-montserrat'>
                    Calendario
                  </Link>
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
          <div className='flex-col hidden h-screen max-w-screen-xl col-span-2 text-center md:block'>
            <div className='p-7 md:px-10 rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>
              <a href='/mypets' className='inline-block mb-5 text-2xl font-black font-montserrat'>
                Tus mascotas
              </a>
              <div className='grid mb-10 gap-7 md:grid-cols-2'>
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
