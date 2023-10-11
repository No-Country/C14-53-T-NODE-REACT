import './navbar.css'

function Nav() {
  return (
    <>
      <nav className='container mx-auto'>
        <div className='fixed left-0 w-full'>
          <div className='max-w-screen-xl mx-auto p-4'>
            <div className='flex justify-between items-center h-16'>
              <p className='logo'>PetCare</p>
              <ul className='flex items-center'>
                <li>
                  <a className='inline p-4 font-semibold hover:underline' href='#'>
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a className='inline p-4 font-semibold hover:underline' href='#'>
                    Contacto
                  </a>
                </li>
                <li>
                  <a className='inline p-4 font-semibold hover:underline' href='#'>
                    Iniciar Sesion
                  </a>
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
