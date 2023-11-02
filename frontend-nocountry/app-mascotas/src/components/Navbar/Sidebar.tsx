/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from 'react-router-dom'
import { PetAvatar } from '../Pets/PetAvatar'
import { useGlobalStore } from '../../store/globalStore'
import { useEffect } from 'react'

export const Sidebar = () => {
  const logout = useGlobalStore(state => state.logout)
  const isAllowed = useGlobalStore(state => state.isAuth)
  const toggle = useGlobalStore(state => state.toggle)
  const setToggle = useGlobalStore(state => state.setToggle)
  const MyPets = useGlobalStore(state => state.pets)
  const location = useLocation()

  useEffect(() => {
    setToggle(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <>
      <div className={`fixed flex flex-col overflow-hidden right-0 top-0 bg-beige h-screen z-30 pt-24 w-3/6 transition-transform ease-in-out md:hidden ${toggle ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col w-full h-full overflow-y-scroll'>
          {!isAllowed ? (
            <ul className='items-center flex-auto h-full md:hidden'>
              <li>
                <Link className='block p-4 text-lg font-semibold hover:underline' to='/about'>
                  Sobre Nosotros
                </Link>
              </li>

              <li>
                <Link className='block p-4 text-lg font-semibold hover:underline' to='/contact-us'>
                  Contacto
                </Link>
              </li>
              <li>
                <Link className='block p-4 text-lg font-semibold hover:underline' to='/login'>
                  Iniciar Sesion
                </Link>
              </li>
            </ul>
          ) : (
            <div className='flex-auto'>
              <div className='px-8 mb-10'>
                <p className='mb-3 text-xl font-black font-montserray'>Buscar Mascota</p>

                <Link className='block mb-3 text-xl font-black font-montserray' to='/profile'>
                  Perfil
                </Link>

                <button className='block mb-3 text-xl font-black font-montserray' onClick={() => logout()}>
                  Cerrar Sesión
                </button>
              </div>

              <div className='text-center'>
                {MyPets.length ? (
                  <>
                    <p className='mx-auto text-2xl font-black font-montserray'>Tus Mascotas</p>
                    <ul className='items-center w-1/2 mx-auto md:hidden'>
                      {MyPets?.slice(0, 6).map((pet: any, index: any) => (
                        <PetAvatar fn={null} key={index} img={pet.image} name={pet.name}></PetAvatar>
                      ))}
                    </ul>
                  </>
                ) : (
                  ''
                )}
              </div>
            </div>
          )}
          <p className='w-full text-center logo'>
            <Link className='block p-4' to='/'>
              PetCare
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
