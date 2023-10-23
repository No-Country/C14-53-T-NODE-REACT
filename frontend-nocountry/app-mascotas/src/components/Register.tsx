import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Background from './Background'



interface FormData {
    nombre: string;
    dni: string;
    email: string;
    telefono: string;
    password: string;
    confirmarPassword: string;
    aceptarTerminos: boolean;
  }

function Register() {

let generalError = "";
let dogImageURL = "./img/register-dog.png";

const navigate = useNavigate();
const { register, handleSubmit, reset, formState: { errors }, getValues } = useForm<FormData>()
if(Object.keys(errors).length > 0){
    dogImageURL = "./img/wrong-register-dog.png";
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
        <div className="bg-white rounded-lg shadow-lg z-20 mt-14">
            <h2 className="text-3xl sm:text-4xl w-3/4 font-serif font-semibold mx-0 sm:mx-auto mb-6 text-gray-800">
            Regístrate
            </h2>
            <form className='sm:w-3/4 mx-auto' onSubmit={onSubmit}>
                <div className='flex justify-between flex-wrap'>
                    <div className="mb-4 w-[49%]">
                        <label className="text-sm md:text-base font-semibold text-gray-800" htmlFor="email">
                            Nombre
                        </label>
                        <input
                            className={`border rounded h-12 w-full py-2 px-3 mb-2 focus:outline-none ${
                                errors.nombre ? 'border-red' : 'border-gray'
                              }`}
                            id="nombre"
                            type="text"
                            placeholder="Nombre"
                            {...register('nombre', {pattern: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, required: true})}
                        />
                    </div>
                    <div className="mb-4 w-[49%]">
                        <label className="text-sm md:text-base font-semibold text-gray-800" htmlFor="email">
                            DNI
                        </label>
                        <input
                            className={`border rounded h-12 w-full py-2 px-3 mb-2 focus:outline-none ${
                                errors.dni ? 'border-red' : 'border-gray'
                              }`}
                            id="dni"
                            type="text"
                            placeholder="DNI"
                            {...register('dni', {pattern:  /^\d{7,14}$/, required: true})}
                        />
                    </div>
                    <div className="mb-4 w-[49%]">
                        <label className="text-sm md:text-base font-semibold text-gray-800" htmlFor="email">
                            Email
                        </label>
                        <input
                            className={`border rounded h-12 w-full py-2 px-3 mb-2 focus:outline-none ${
                                errors.email ? 'border-red' : 'border-gray'
                              }`}
                            id="email"
                            type="email"
                            placeholder="Email"
                            {...register('email', {pattern:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, required: true})}
                        />
                    </div>
                    <div className="mb-4 w-[49%]">
                        <label className="text-sm md:text-base font-semibold text-gray-800" htmlFor="email">
                            Teléfono
                        </label>
                        <input
                            className={`border rounded h-12 w-full py-2 px-3 mb-2 focus:outline-none ${
                                errors.telefono? 'border-red' : 'border-gray'
                              }`}
                            id="telefono"
                            type="text"
                            placeholder="Telefono"
                            {...register('telefono', {pattern:  /^\d{7,14}$/, required: true})}
                        />
                    </div>
                    <div className="mb-6 w-[49%]">
                        <label className="text-sm sm:text-base font-semibold text-gray-800" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            className={`border rounded h-12 w-full py-2 px-3 mb-2 focus:outline-none ${
                                errors.password ? 'border-red' : 'border-gray'
                              }`}
                            id="password"
                            type="password"
                            placeholder="**********"
                            {...register('password', {pattern:  /^.{4,12}$/, required: true})}
                        />
                    </div>
                    <div className="mb-6 w-[49%]">
                        <label className="text-sm sm:text-base font-semibold text-gray-800" htmlFor="password">
                            Repetir contraseña
                        </label>
                        <input
                            className={`border rounded h-12 w-full py-2 px-3 mb-2 focus:outline-none ${
                                errors.confirmarPassword ? 'border-red' : 'border-gray'
                              }`}
                            id="confirmarPassword"
                            type="password"
                            placeholder="**********"
                            {...register('confirmarPassword', {pattern:  /^.{4,12}$/, required: true, validate: (value) => value === getValues('password')})}
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="flex text-sm text-center">
                        <input type="checkbox" className='w-5'
                        {...register('aceptarTerminos', {required: true})}
                        />
                        <span className="">
                        He leído las Políticas de privacidad y acepto los términos y condiciones del uso de datos.
                        </span>
                    </label>
                </div>
                <div className={`${generalError ? 'p-0' : 'p-3'}`}>
                    {generalError && <p className='text-red text-bold'>{generalError}</p>} 
                </div>
                
                <div className='mt-5 md:mt-5 mb-6'>
                    <button type="submit" className="btn w-full text-sm sm:text-xl sm:w-2/4 shadow-custom shadow-outline">
                        Registrarse
                    </button>
                </div>
            </form> 
        </div>
      </div>
      <div className="hidden md:block relative md:w-1/2 z-40">
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

export default Register;