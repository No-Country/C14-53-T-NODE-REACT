import Background from './Background'

function Login() {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 md:w-1/2 flex items-center justify-center bg-gray-100 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg z-20">
            <h2 className="text-3xl sm:text-4xl w-3/4 mx-auto font-serif font-semibold mb-6 text-gray-800">
            Regístrate
            </h2>
            <form className=' sm:w-3/4 mx-auto'>
                <div className='flex justify-between flex-wrap'>
                    <div className="mb-4 w-[49%]">
                        <label className="text-sm md:text-base font-semibold text-gray-800" htmlFor="email">
                            Nombre
                        </label>
                        <input
                            className="appearance-none border rounded h-10 w-full py-2 px-3 mb-2 focus:outline-none"
                            id="nombre"
                            type="text"
                            placeholder="Nombre"
                        />
                    </div>
                    <div className="mb-4 w-[49%]">
                        <label className="text-sm md:text-base font-semibold text-gray-800" htmlFor="email">
                            DNI
                        </label>
                        <input
                            className="appearance-none border rounded h-10 w-full py-2 px-3 mb-2 focus:outline-none"
                            id="dni"
                            type="text"
                            placeholder="DNI"
                        />
                    </div>
                    <div className="mb-4 w-[49%]">
                        <label className="text-sm md:text-base font-semibold text-gray-800" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded h-10 w-full py-2 px-3 mb-2 focus:outline-none"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4 w-[49%]">
                        <label className="text-sm md:text-base font-semibold text-gray-800" htmlFor="email">
                            Teléfono
                        </label>
                        <input
                            className="appearance-none border rounded h-10 w-full py-2 px-3 mb-2 focus:outline-none"
                            id="telefono"
                            type="text"
                            placeholder="Telefono"
                        />
                    </div>
                    <div className="mb-6 w-[49%]">
                        <label className="text-sm sm:text-base font-semibold text-gray-800" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            className=" border rounded h-10 w-full py-2 px-3 focus:outline-none"
                            id="password"
                            type="password"
                            placeholder="**********"
                        />
                    </div>
                    <div className="mb-6 w-[49%]">
                        <label className="text-sm sm:text-base font-semibold text-gray-800" htmlFor="password">
                            Repetir contraseña
                        </label>
                        <input
                            className=" border rounded h-10 w-full py-2 px-3 focus:outline-none"
                            id="password"
                            type="password"
                            placeholder="**********"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="flex text-sm text-center">
                        <input type="checkbox" className=''/>
                        <span className="">
                        He leído las Políticas de privacidad y acepto los términos y condiciones del uso de datos.
                        </span>
                    </label>
                </div>
                <div className='mt-5 md:mt-10 mb-6'>
                    <button type="submit" className="btn w-full text-sm sm:text-xl sm:w-2/4 shadow-custom shadow-outline"> 
                        Registarse
                    </button>
                 </div>
            </form>  
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 z-40">
        <img
          src="./img/register-dog.png"
          alt="Imagen de fondo"
          className="object-cover w-full h-screen"
        />
      </div>
      <Background></Background>
    </div>
  );
}

export default Login;
