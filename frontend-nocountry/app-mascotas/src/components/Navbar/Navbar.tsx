import './navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useGlobalStore } from '../../store/globalStore'
import { Sidebar } from './Sidebar'
import { shallow } from 'zustand/shallow'

function Navbar() {
  // const isAllowed = useGlobalStore(state => state.isAuth)
  // const toggle = useGlobalStore(state => state.toggle)
  // const setToggle = useGlobalStore(state => state.setToggle)
  const { isAllowed, toggle, setToggle } = useGlobalStore(
    state => ({
      isAllowed: state.isAuth,
      toggle: state.toggle,
      setToggle: state.setToggle
    }),
    shallow
  )
  const navigate = useNavigate()
  const location = useLocation()
  const primaryPaths = ['/', '/dashboard', '/register', '/login']
  const backHandler = () => {
    navigate(-1)
  }
  return (
    <>
      <nav className='container mx-auto'>
        <div className='container fixed top-0 z-30 w-full -translate-x-1/2 left-2/4'>
          <div className='px-3 py-4 mx-auto'>
            <div className='flex items-center justify-between self-baseline'>
              <div className='flex'>
                <p className='logo'>
                  <Link className='p-3' to='/'>
                    PetCare
                  </Link>
                </p>
                {!primaryPaths.includes(location.pathname) ? (
                  <button onClick={backHandler}>
                    <svg width='51' height='51' viewBox='0 0 51 51' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <g id='ei:arrow-left'>
                        <path id='Vector' d='M25.7812 42.5203C16.3813 42.5203 8.78125 34.9203 8.78125 25.5203C8.78125 16.1203 16.3813 8.52026 25.7812 8.52026C35.1812 8.52026 42.7812 16.1203 42.7812 25.5203C42.7812 34.9203 35.1812 42.5203 25.7812 42.5203ZM25.7812 10.5203C17.4812 10.5203 10.7812 17.2203 10.7812 25.5203C10.7812 33.8203 17.4812 40.5203 25.7812 40.5203C34.0812 40.5203 40.7812 33.8203 40.7812 25.5203C40.7812 17.2203 34.0812 10.5203 25.7812 10.5203Z' fill='black' />
                        <path id='Vector_2' d='M26.0809 35.2203L16.3809 25.5203L26.0809 15.8203L27.4809 17.2203L19.1809 25.5203L27.4809 33.8203L26.0809 35.2203Z' fill='black' />
                        <path id='Vector_3' d='M17.7812 24.5203H34.7812V26.5203H17.7812V24.5203Z' fill='black' />
                      </g>
                    </svg>
                  </button>
                ) : (
                  ''
                )}
              </div>
              {!isAllowed ? (
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
                <div className='items-center hidden w-2/5 mb-4   md:flex'>
                  <form action='search' className='relative flex flex-auto'>
                    <input id='search-desktop' name='search' type='text' className='w-full pl-3 pr-[43px] py-2 border border-black rounded-md ' placeholder='Busca una mascota por especie o raza...' />
                    <button type='submit' className='absolute right-0 h-full pr-2 -translate-y-1/2 top-1/2'>
                      <img src='./img/ion_search-sharp.svg' alt='' />
                    </button>
                  </form>
                  <div className='ml-3'>
                    <Link to='/profile' className='h-[55px] w-[57px] flex items-center justify-center bg-isabeline hover:bg-isabeline-800  border rounded-full'>
                      <svg width='23' height='30' viewBox='0 0 23 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M16.6691 6.28958C16.6691 7.66026 16.1246 8.9748 15.1554 9.94402C14.1862 10.9132 12.8716 11.4577 11.5009 11.4577C10.1303 11.4577 8.81572 10.9132 7.84651 9.94402C6.87729 8.9748 6.33279 7.66026 6.33279 6.28958C6.33279 4.9189 6.87729 3.60436 7.84651 2.63515C8.81572 1.66593 10.1303 1.12143 11.5009 1.12143C12.8716 1.12143 14.1862 1.66593 15.1554 2.63515C16.1246 3.60436 16.6691 4.9189 16.6691 6.28958ZM1.16602 25.7466C1.2103 23.0349 2.31863 20.4492 4.25199 18.5471C6.18535 16.6451 8.78882 15.5791 11.5009 15.5791C14.2131 15.5791 16.8165 16.6451 18.7499 18.5471C20.6832 20.4492 21.7916 23.0349 21.8359 25.7466C18.5936 27.2334 15.0679 28.0007 11.5009 27.9958C7.81295 27.9958 4.31239 27.191 1.16602 25.7466Z' stroke='black' strokeWidth='2.06726' strokeLinecap='round' strokeLinejoin='round' />
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

      <Sidebar></Sidebar>
    </>
  )
}

export default Navbar
