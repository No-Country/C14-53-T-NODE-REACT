import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { RegisterRequest } from '../api/auth'
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import { useGlobalStore } from '../store/globalStore'
import { useState } from 'react'

interface FormData {
  name: string
  dni: string
  email: string
  phone: string
  password: string
  passwordConfirm: string
  terms: boolean
}

function Register() {
  let generalError = ''
  let dogImageURL = './img/register-dog.png'
  const setToken = useGlobalStore(state => state.setToken)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

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
  const onSubmit = async (values: object) => {
    if (Object.keys(errors).length === 0) {
      try {
        setLoading(true)
        const response = await RegisterRequest(values)


        if (response.status === 200) {
          setLoading(false)
          const token = response.data.token

          if (response.data.msg == 'Usuario ya existe') {
            Toast.fire({
              icon: 'error',
              title: response.data.msg
            })
          } else {
            Toast.fire({
              icon: 'success',
              title: 'Registro Exitoso'
            })

            Cookies.set('token', token)
            setToken(token)
            navigate('/dashboard')
            reset()
          }
        }
      } catch (error) {
        console.log(error)
        setLoading(false)
        Toast.fire({
          icon: 'error',
          title: 'Ups... Ocurrio un error'
        })
      }
    }
  }

  return (
    <div className='flex justify-center'>
      <div className='flex items-center justify-center w-3/4 min-h-screen bg-gray-100 md:w-1/2'>
        <div className='z-20 px-4 bg-white rounded-lg shadow-lg mt-14'>
          <h2 className='w-3/4 mx-0 mb-6 font-serif text-3xl font-semibold text-gray-800 sm:text-4xl sm:mx-auto'>Registrarse</h2>
          <form className='mx-auto sm:w-3/4' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-wrap justify-between'>
              <div className='mb-4 w-[49%]'>
                <label className='text-sm font-semibold text-gray-800 md:text-base' htmlFor='email'>
                  Nombre
                </label>
                <input className={`border rounded h-12 w-full py-2 px-3 focus:outline-none ${errors.name ? 'border-red' : 'border-gray mb-2'}`} id='nombre' type='text' placeholder='Nombre' {...register('name', { pattern: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, required: true })} />
                {errors.name && <small className='text-red'>Nombre requerido</small>}
              </div>
              <div className='mb-4 w-[49%]'>
                <label className='text-sm font-semibold text-gray-800 md:text-base' htmlFor='email'>
                  DNI
                </label>
                <input className={`border rounded h-12 w-full py-2 px-3 focus:outline-none ${errors.dni ? 'border-red' : 'border-gray mb-2'}`} id='dni' type='text' placeholder='DNI' {...register('dni', { pattern: /^\d{7,14}$/, required: true })} />
                {errors.dni && <small className='text-red'>DNI inválido</small>}
              </div>
              <div className='mb-4 w-[49%]'>
                <label className='text-sm font-semibold text-gray-800 md:text-base' htmlFor='email'>
                  Email
                </label>
                <input className={`border rounded h-12 w-full py-2 px-3 focus:outline-none ${errors.email ? 'border-red' : 'border-gray mb-2'}`} id='email' type='email' placeholder='Email' {...register('email', { pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, required: true })} />
                {errors.email && <small className='text-red'>Email inválido</small>}
              </div>
              <div className='mb-4 w-[49%]'>
                <label className='text-sm font-semibold text-gray-800 md:text-base' htmlFor='email'>
                  Teléfono
                </label>
                <input className={`border rounded h-12 w-full py-2 px-3 focus:outline-none ${errors.phone ? 'border-red' : 'border-gray mb-2'}`} id='telefono' type='text' placeholder='Telefono' {...register('phone', { pattern: /^\d{7,14}$/, required: true })} />
                {errors.phone && <small className='text-red'>Teléfono requerido</small>}
              </div>
              <div className='w-[49%]'>
                <label className='text-sm font-semibold text-gray-800 sm:text-base' htmlFor='password'>
                  Contraseña
                </label>
                <input className={`border rounded h-12 w-full py-2 px-3 focus:outline-none ${errors.password ? 'border-red' : 'border-gray mb-2'}`} id='password' type='password' placeholder='**********' {...register('password', { pattern: /^.{4,12}$/, required: true })} />
              </div>
              <div className='w-[49%]'>
                <label className='text-sm font-semibold text-gray-800 sm:text-base' htmlFor='password'>
                  Repetir contraseña
                </label>
                <input className={`border rounded h-12 w-full py-2 px-3 focus:outline-none ${errors.passwordConfirm ? 'border-red' : 'border-gray mb-2'}`} id='confirmarPassword' type='password' placeholder='**********' {...register('passwordConfirm', { pattern: /^.{4,12}$/, required: true, validate: value => value === getValues('password') })} />
              </div>
              <div className='mt-2'>{errors.password || errors.passwordConfirm ? <small className='text-red'>Contraseñas no coinciden (4 caracteres mínimo)</small> : ''}</div>
            </div>
            <div className='mt-4 mb-6'>
              <label className='flex items-start text-sm'>
                <input type='checkbox' className='w-5 mt-1' {...register('terms', { required: true })} />
                <span className='ml-2'>He leído las Políticas de privacidad y acepto los términos y condiciones del uso de datos.</span>
              </label>
              {errors.terms && <small className='mt-2 ml-6 text-red'>Debes aceptar los términos y condiciones</small>}
            </div>
            <div className={`${generalError ? 'p-0' : 'p-3'}`}>{generalError && <p className='text-red text-bold'>{generalError}</p>}</div>

            <div className='mt-5 mb-6 md:mt-5'>
              <button type='submit' className={`w-full text-sm shadow-outline btn sm:text-xl sm:w-2/4 shadow-custom ${loading ? 'cursor-not-allowed' : ''}`} disabled={loading}>
                {loading ? (
                  <span className='flex justify-center'>
                    <svg className='w-5 mr-2 text-white animate-spin' viewBox='0 0 24 24'>
                      <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                      <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                    </svg>
                    Procesando...
                  </span>
                ) : (
                  'Registrarse'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='relative z-40 hidden sm:block md:w-1/2'>
        <img src={dogImageURL} alt='Imagen de fondo' className='object-cover w-full h-screen' />
      </div>
    </div>
  )
}

export default Register
