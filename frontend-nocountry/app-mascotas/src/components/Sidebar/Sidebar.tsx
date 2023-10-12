import { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [toggle, settoggle] = useState(false)

  return (
    <>
      <ul>
        <li>
          <Link to='/about'>Sobre nosotros</Link>
        </li>
        <li>
          <Link to='/contact'>Contacto</Link>
        </li>
        <li>
          <Link to='/login'>Iniciar Sesión</Link>
        </li>
      </ul>
    </>
  )
}

export default Sidebar
