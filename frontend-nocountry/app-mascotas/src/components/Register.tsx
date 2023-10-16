import { useForm } from 'react-hook-form';
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
const { register, handleSubmit, reset, formState: { errors }, getValues } = useForm<FormData>()
const onSubmit = handleSubmit((values) => {
    alert("Form submit: " + JSON.stringify(values));
    reset()
  })
  
  const shouldDisplayDog = (field: string) => {
    return !!errors[field as keyof FormData];
};

  return (
    <div className="flex justify-center">
      <div className="w-3/4 md:w-1/2 flex items-center justify-center bg-gray-100 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg z-20 mt-14">
            <h2 className="text-3xl sm:text-4xl w-3/4 font-serif font-semibold mb-6 text-gray-800">
            Regístrate
            </h2>
            <form className=' sm:w-3/4 mx-auto' onSubmit={onSubmit}>
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
                        {errors.nombre?.type === "required" && (
                            <p className='text-red'>Debe ingresar un nombre</p>
                        )}{errors.nombre?.type === "pattern" && (
                            <p className='text-red'>Debe ingresar un nombre válido</p>
                        )}
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
                        {errors.dni?.type === "required" && (
                            <p className='text-red'>Debe ingresar un DNI</p>
                        )}{errors.dni?.type === "pattern" && (
                            <p className='text-red'>Debe ingresar un DNI válido</p>
                        )}
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
                        {errors.email?.type === "required" && (
                            <p className='text-red'>Debe ingresar un email</p>
                        )}{errors.email?.type === "pattern" && (
                            <p className='text-red'>Debe ingresar un email válido</p>
                        )}
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
                        {errors.telefono?.type === "required" && (
                            <p className='text-red'>Debe ingresar un telefono</p>
                        )}{errors.telefono?.type === "pattern" && (
                            <p className='text-red'>Debe ingresar un telefono válido</p>
                        )}{errors.telefono?.type === "requiered" && (
                            <input className='border-red'/>
                        )}
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
                        {errors.password?.type === "required" && (
                            <p className='text-red'>Debe ingresar una contraseña</p>
                        )}{errors.password?.type === "pattern" && (
                            <p className='text-red'>Debe ingresar una contraseña válida</p>
                        )}
                    </div>
                    <div className="mb-6 w-[49%]">
                        <label className="text-sm sm:text-base font-semibold text-gray-800" htmlFor="password">
                            Repetir contraseña
                        </label>
                        <input
                            className={`border rounded h-12 w-full py-2 px-3 mb-2 focus:outline-none ${
                                errors.confirmarPassword ? 'border-red' : 'border-gray'
                              }`}
                            id="password"
                            type="password"
                            placeholder="**********"
                            {...register('confirmarPassword', {pattern:  /^.{4,12}$/, required: true, validate: (value) => value === getValues('password')})}
                        />
                        {errors.confirmarPassword?.type === "required" && (
                            <p className='text-red'>Debe ingresar la contraseña</p>
                        )}{errors.confirmarPassword?.type === "pattern" && (
                            <p className='text-red'>Debe ingresar una contraseña válida</p>
                        )}{errors.confirmarPassword?.type === "validate" && (
                            <p className='text-red' >Las contraseñas no coinciden </p>
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <label className="flex text-sm text-center">
                        <input type="checkbox" className=''
                        {...register('aceptarTerminos', {required: true})}
                        />
                        <span className="">
                        He leído las Políticas de privacidad y acepto los términos y condiciones del uso de datos.
                        </span>
                    </label>
                    {errors.aceptarTerminos?.type === "required" && (
                            <p className='text-red text-center my-1'>Debe aceptar términos y condiciones</p>
                        )}
                </div>
                <div className='mt-5 md:mt-10 mb-6'>
                    <input type="submit" className="btn w-full text-sm sm:text-xl sm:w-2/4 shadow-custom shadow-outline" 
                    />
                 </div>
            </form>  
        </div>
      </div>
      <div className="hidden sm:block relative md:w-1/2 z-40">
        <img
          src="./img/register-dog.png"
          alt="Imagen de fondo"
          className="object-cover w-full h-screen"
        />
        <img
          src="./img/wrong-register-dog.png"
          alt="Imagen de fondo"
          className={` hidden sm:block object-cover w-full h-screen absolute top-0 left-0 ${
            shouldDisplayDog('nombre') ||
            shouldDisplayDog('dni') ||
            shouldDisplayDog('email') ||
            shouldDisplayDog('telefono') ||
            shouldDisplayDog('password') ||
            shouldDisplayDog('confirmarPassword') ||
            shouldDisplayDog('aceptarTerminos')
              ? 'block'
              : 'hidden'
          }`}
        />
      </div>
      <Background></Background>
    </div>
  );
}

export default Register;
