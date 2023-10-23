import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Background from './Background'
import axios, { AxiosResponse } from 'axios'

interface FormData {
  nombre: string
  dni: string
  email: string
  telefono: string
  password: string
  confirmarPassword: string
  aceptarTerminos: boolean
}

function Register() {
  let generalError = ''
  let dogImageURL = './img/register-dog.png'

  // const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues
  } = useForm<FormData>()
  if (Object.keys(errors).length > 0) {
    dogImageURL = './img/wrong-register-dog.png'
    generalError = 'Completa los campos correctamente.'
  }
  const onSubmit = handleSubmit(values => {
    // console.log(values);

    if (Object.keys(errors).length === 0) {
      axios.post('https://petcare-app.onrender.com/api/v1/auth/register', {
        data: JSON.stringify(values)
      }).then( (response: AxiosResponse) => {
        console.log(response)}
        )
      // alert('Form submit: ' + JSON.stringify(values))
      // reset()
      // navigate('/dashboard')
    }
  })

  return (
    <div className='flex justify-center'>
      <div className='flex items-center justify-center w-3/4 min-h-screen bg-gray-100 md:w-1/2'>
        <div className='z-20 bg-white rounded-lg shadow-lg mt-14'>
          <h2 className='w-3/4 mx-0 mb-6 font-serif text-3xl font-semibold text-gray-800 sm:text-4xl sm:mx-auto'>Regístrate</h2>
          <form className='mx-auto sm:w-3/4' onSubmit={onSubmit}>
            <div className='flex flex-wrap justify-between'>
              <div className='mb-4 w-[49%]'>
                <label className='text-sm font-semibold text-gray-800 md:text-base' htmlFor='email'>
                  Nombre
                </label>
                <input className={`border rounded h-12 w-full py-2 px-3 mb-2 focus:outline-none ${errors.nombre ? 'border-red' : 'border-gray'}`} id='nombre' type='text' placeholder='Nombre' {...register('nombre', { pattern: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, required: true })} />
              </div>
              <div className='mb-4 w-[49%]'>
                <label className='text-sm font-semibold text-gray-800 md:text-base' htmlFor='email'>
                  DNI
                </label>
                <input className={`border rounded h-12 w-full py-2 px-3 mb-2 focus:outline-none ${errors.dni ? 'border-red' : 'border-gray'}`} id='dni' type='text' placeholder='DNI' {...register('dni', { pattern: /^\d{7,14}$/, required: true })} />
              </div>
              <div className='mb-4 w-[49%]'>
                <label className='text-sm font-semibold text-gray-800 md:text-base' htmlFor='email'>
                  Email
                </label>
                <input className={`border rounded h-12 w-full py-2 px-3 mb-2 focus:outline-none ${errors.email ? 'border-red' : 'border-gray'}`} id='email' type='email' placeholder='Email' {...register('email', { pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, required: true })} />
              </div>
              <div className='mb-4 w-[49%]'>
                <label className='text-sm font-semibold text-gray-800 md:text-base' htmlFor='email'>
                  Teléfono
                </label>
                <input className={`border rounded h-12 w-full py-2 px-3 mb-2 focus:outline-none ${errors.telefono ? 'border-red' : 'border-gray'}`} id='telefono' type='text' placeholder='Telefono' {...register('telefono', { pattern: /^\d{7,14}$/, required: true })} />
              </div>
              <div className='mb-6 w-[49%]'>
                <label className='text-sm font-semibold text-gray-800 sm:text-base' htmlFor='password'>
                  Contraseña
                </label>
                <input className={`border rounded h-12 w-full py-2 px-3 mb-2 focus:outline-none ${errors.password ? 'border-red' : 'border-gray'}`} id='password' type='password' placeholder='**********' {...register('password', { pattern: /^.{4,12}$/, required: true })} />
              </div>
              <div className='mb-6 w-[49%]'>
                <label className='text-sm font-semibold text-gray-800 sm:text-base' htmlFor='password'>
                  Repetir contraseña
                </label>
                <input className={`border rounded h-12 w-full py-2 px-3 mb-2 focus:outline-none ${errors.confirmarPassword ? 'border-red' : 'border-gray'}`} id='confirmarPassword' type='password' placeholder='**********' {...register('confirmarPassword', { pattern: /^.{4,12}$/, required: true, validate: value => value === getValues('password') })} />
              </div>
            </div>
            <div className='mb-6'>
              <label className='flex text-sm text-center'>
                <input type='checkbox' className='w-5' {...register('aceptarTerminos', { required: true })} />
                <span className=''>He leído las Políticas de privacidad y acepto los términos y condiciones del uso de datos.</span>
              </label>
            </div>
            <div className={`${generalError ? 'p-0' : 'p-3'}`}>{generalError && <p className='text-red text-bold'>{generalError}</p>}</div>

            <div className='mt-5 mb-6 md:mt-5'>
              <button type='submit' className='w-full text-sm shadow-outline btn sm:text-xl sm:w-2/4 shadow-custom'>
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='relative z-40 hidden sm:block md:w-1/2'>
        <img src={dogImageURL} alt='Imagen de fondo' className='object-cover w-full h-screen' />
      </div>
      <Background></Background>
    </div>
  )
}

export default Register
