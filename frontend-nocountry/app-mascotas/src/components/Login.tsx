import Background from './Background'


function Login() {
  return (
    <div className="flex">
      {/* Contenedor del formulario */}
      <div className="md:w-1/2 flex items-center justify-center bg-gray-100 min-h-screen">
        <div className="max-w-md p-4 bg-white rounded-lg shadow-lg w-2/4 z-20">
          <div className="text-center">
            <h2 className="text-4xl font-serif font-semibold mb-6 text-gray-800">
              Iniciar Sesión
            </h2>
          </div>
          <form>
            <div className="mb-4">
              <label className="text-xl font-semibold text-gray-800" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Correo Electrónico"
              />
            </div>
            <div className="mb-6">
              <label className="text-xl font-semibold text-gray-800" htmlFor="password">
                Contraseña
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 text-base leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <div className="text-center">
              <a
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-xl"
                href="#"
              >
                Entar
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 z-20">
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
