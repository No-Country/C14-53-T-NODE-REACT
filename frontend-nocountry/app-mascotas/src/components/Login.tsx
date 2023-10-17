import Background from './Background'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';


interface FormData {
  email: string;
  password: string;
}

function Login() {

let generalError = "";
let dogImageURL = "./img/login-dog.png";

const navigate = useNavigate();
const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()
if(Object.keys(errors).length > 0){
  dogImageURL = "./img/wrong-login-dog.png";
  generalError = "Completa los campos correctamente.";
}
const onSubmit = handleSubmit((values) => {
  if (Object.keys(errors).length === 0) {
    alert('Form submit: ' + JSON.stringify(values));
    reset();
    navigate('/dashboard');
  } 
});


  return (
    <div className="flex justify-center">
      <div className="w-3/4 md:w-1/2 flex items-center justify-center bg-gray-100 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg z-20">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-6 text-gray-800">
              Iniciar Sesión
            </h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="text-sm md:text-xl font-semibold text-gray-800" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none border rounded h-10 w-full py-2 px-3 mb-2 focus:outline-none"
                id="email"
                type="email"
                placeholder="Email"
                {...register('email', { pattern:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, required: true })}
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
                {...register('password', { pattern:  /^.{4,12}$/, required: true })}
              />
            </div>
            <div className={`${generalError ? 'p-0' : 'p-3'}`}>
                {generalError && <p className='text-red text-bold'>{generalError}</p>} 
            </div>      
            <div className='mt-5 md:mt-6 mb-6'>
              <button type="submit" className="btn w-full text-sm sm:text-xl sm:w-2/4 shadow-custom shadow-outline">
                 Entrar
              </button>
            </div>
          </form>
          <div className='text-[10px] sm:text-xs font-semibold my-2'>
            <p>¿No tienes una cuenta?
              <Link to='/register'
                className="mx-1 no-underline hover:underline"
              >¡Regístrate por acá!
              </Link>
            </p>            
            <p className='mt-1'>
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
          src={dogImageURL}
          alt="Imagen de fondo"
          className="object-cover w-full h-screen"
        />
      </div>
      <Background></Background>
    </div>
  );
}

export default Login;
