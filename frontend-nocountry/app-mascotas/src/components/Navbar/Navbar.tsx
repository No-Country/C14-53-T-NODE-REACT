import { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useGlobalStore } from '../../store/globalStore'
import { PetAvatar } from '../Pets/PetAvatar'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  const isAutenticated = useGlobalStore(state => state.isAutenticated)
  const updateSession = useGlobalStore(state => state.updateSession)
  return (
    <>
      <nav className='container mx-auto'>
        <div className='container fixed top-0 z-40 w-full -translate-x-1/2 left-2/4'>
          <div className='px-3 py-4 mx-auto'>
            <div className='flex items-center justify-between self-baseline'>
              <p className='logo'>
                <Link className='p-3' to='/'>
                  PetCare
                </Link>
              </p>
              {!isAutenticated ? (
                <ul className='items-center hidden mt-2 md:flex'>
                  <li>
                    <Link className='inline p-4 font-semibold hover:underline' to='/about'>
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link className='inline p-4 font-semibold hover:underline' to='/contact-us'>
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link className='inline p-4 font-semibold hover:underline' to='/login'>
                      Iniciar Sesion
                    </Link>
                  </li>
                </ul>
              ) : (
                <div className='items-center hidden w-2/5 mb-4 md:flex'>
                  <form action='search' className='relative flex flex-auto'>
                    <input id='search-desktop' name='search' type='text' className='w-full pl-3 pr-[43px] py-2 border border-black rounded-md ' placeholder='Busca una mascota por especie o raza...' />
                    <button type='submit' className='absolute right-0 h-full pr-2 -translate-y-1/2 top-1/2'>
                      <img src='./img/ion_search-sharp.svg' alt='' />
                    </button>
                  </form>
                  <div className='ml-3'>
                    <Link to='/profile' className='h-[55px] w-[57px] flex items-center justify-center bg-isabeline hover:bg-isabeline-800  border rounded-full'>
                      <svg width='23' height='30' viewBox='0 0 23 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M16.6691 6.28958C16.6691 7.66026 16.1246 8.9748 15.1554 9.94402C14.1862 10.9132 12.8716 11.4577 11.5009 11.4577C10.1303 11.4577 8.81572 10.9132 7.84651 9.94402C6.87729 8.9748 6.33279 7.66026 6.33279 6.28958C6.33279 4.9189 6.87729 3.60436 7.84651 2.63515C8.81572 1.66593 10.1303 1.12143 11.5009 1.12143C12.8716 1.12143 14.1862 1.66593 15.1554 2.63515C16.1246 3.60436 16.6691 4.9189 16.6691 6.28958ZM1.16602 25.7466C1.2103 23.0349 2.31863 20.4492 4.25199 18.5471C6.18535 16.6451 8.78882 15.5791 11.5009 15.5791C14.2131 15.5791 16.8165 16.6451 18.7499 18.5471C20.6832 20.4492 21.7916 23.0349 21.8359 25.7466C18.5936 27.2334 15.0679 28.0007 11.5009 27.9958C7.81295 27.9958 4.31239 27.191 1.16602 25.7466Z' stroke='black' stroke-width='2.06726' stroke-linecap='round' stroke-linejoin='round' />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}

              <div className={`hamburgerMenu cursor-pointer md:invisible z-40 ${toggle ? 'active' : ''}`} onClick={() => setToggle(!toggle)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed flex flex-col overflow-hidden right-0 top-0 bg-beige h-screen z-30 pt-24 w-3/6 transition-transform ease-in-out md:hidden ${toggle ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col w-full h-full overflow-y-scroll'>
          {!isAutenticated ? (
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

                <button className='block mb-3 text-xl font-black font-montserray' onClick={() => updateSession(false)}>
                  Cerrar Sesión
                </button>
              </div>

              <div className='text-center'>
                <p className='mx-auto text-2xl font-black font-montserray'>Tus Mascotas</p>
                <ul className='items-center w-1/2 mx-auto md:hidden'>
                  <PetAvatar img='./img/Chucky.png' name='Chucky'></PetAvatar>
                  <PetAvatar img='./img/Darth_Vader.png' name='Darth Vader'></PetAvatar>
                  <PetAvatar img='./img/Lucifer.png' name='Lucifer'></PetAvatar>
                  <PetAvatar img='./img/Juan.png' name='Juan'></PetAvatar>
                </ul>
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

export default Navbar
