import { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Nav() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <nav className='container mx-auto'>
        <div className='sticky left-0 w-full z-40 top-0'>
          <div className='max-w-screen-xl mx-auto py-4 px-3'>
            <div className='flex justify-between items-center'>
              <p className='logo'>
                <Link className='p-3' to='/'>
                  PetCare
                </Link>
              </p>
              <ul className='hidden md:flex items-center'>
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
              <div className={`hamburgerMenu cursor-pointer md:invisible z-40 ${toggle ? 'active' : ''}`} onClick={() => setToggle(!toggle)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={`fixed right-0 top-0 bg-beige min-h-full z-30 pt-24 w-3/6 transition-transform ease-in-out md:hidden ${toggle ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className='md:hidden items-center'>
          <li>
            <Link className='p-4 font-semibold text-lg hover:underline block' to='/about'>
              Sobre Nosotros
            </Link>
          </li>

          <li>
            <Link className='p-4 font-semibold text-lg hover:underline block' to='/contact-us'>
              Contacto
            </Link>
          </li>
          <li>
            <Link className='p-4 font-semibold text-lg hover:underline block' to='/login'>
              Iniciar Sesion
            </Link>
          </li>
        </ul>
        <p className='logo absolute bottom-[5%] text-center w-full'>
          <Link className='p-4 block' to='/'>
            PetCare
          </Link>
        </p>
      </div>
    </>
  )
}

export default Nav
