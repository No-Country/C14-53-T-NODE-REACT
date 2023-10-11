import './navbar.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav className='container mx-auto'>
        <div className='fixed left-0 w-full z-[1000]'>
          <div className='max-w-screen-xl mx-auto p-4'>
            <div className='flex justify-between items-center h-16'>
              <p className='logo'>
                <Link to='/'>PetCare</Link>
              </p>
              <ul className='flex items-center'>
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
