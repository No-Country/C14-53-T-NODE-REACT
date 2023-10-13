import Background from './Background'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 md:w-1/2 flex items-center justify-center bg-gray-100 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg z-20">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-6 text-gray-800">
              Iniciar Sesión
            </h2>
          <form>
            <div className="mb-4">
              <label className="text-sm md:text-xl font-semibold text-gray-800" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none border rounded h-10 w-full py-2 px-3 mb-2 focus:outline-none"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="text-sm sm:text-xl font-semibold text-gray-800" htmlFor="password">
                Contraseña
              </label>
              <input
                className=" border rounded h-10 w-full py-2 px-3 focus:outline-none"
                id="password"
                type="password"
                placeholder="**********"
              />
            </div>
            
            <div className="text-center">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-xl">
                  Enviar
                </button>
            </div>
          </form>
          <div className='text-[9px] sm:text-xs leading-6 font-semibold my-2'>
            <p>¿No tienes una cuenta?
              <Link to='/register'
                className="mx-1 no-underline hover:underline"
              >¡Regístrate por acá!
              </Link>
            </p>            
            <p>
              <a
                href="#"
                className="no-underline hover:underline"
              >¿Has olvidado tu contraseña?
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 z-40">
        <img
          src="./img/login-dog.png"
          alt="Imagen de fondo"
          className="object-cover w-full h-screen"
        />
      </div>
      <Background></Background>
    </div>
  );
}

export default Login;
