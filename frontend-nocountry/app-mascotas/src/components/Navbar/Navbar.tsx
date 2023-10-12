import './navbar.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav className='container mx-auto'>
        <div className='fixed left-0 w-full z-[1000] top-0'>
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
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
