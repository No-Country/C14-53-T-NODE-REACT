/* eslint-disable @typescript-eslint/no-explicit-any */
import Background from './Background'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalStore } from '../store/globalStore'
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import { LoginRequest } from '../api/auth'
import { useState } from 'react'

interface FormData {
  email: string
  password: string
}

function Login() {
  let generalError = ''
  let dogImageURL = './img/login-dog.png'
  // const isAllowed = useGlobalStore(state => state.isAuth)
  const setUser = useGlobalStore(state => state.setUser)
  const setToken = useGlobalStore(state => state.setToken)
  const [invalidPassword, setInvalidPassword] = useState(false)
  const [loading, setLoading] = useState(false)
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

  const navigate = useNavigate()

  // useEffect(() => {
  //   if (Cookies.get('token')) {
  //     const token = Cookies.get('token') as string
  //     setToken(token)
  //     navigate('/dashboard')
  //   }
  // }, [isAllowed, navigate])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()
  if (Object.keys(errors).length > 0) {
    dogImageURL = './img/wrong-login-dog.png'
    generalError = 'Completa los campos correctamente.'
  }
  const onSubmit = async (values: object) => {
    if (Object.keys(errors).length === 0) {
      setInvalidPassword(false)
      setLoading(true)
      try {
        const response = await LoginRequest(values)
        if (response.status === 200) {
          const user = response.data.user
          const token = response.data.token
          Cookies.set('token', token)
          setLoading(false)
          setUser(user, true)
          setToken(token)
          navigate('/dashboard')
        }
      } catch (error: any) {
        console.log(error)
        setLoading(false)
        if (error.response.data.msg) {
          setInvalidPassword(true)
        }
        Toast.fire({
          icon: 'error',
          title: error.response.data.msg
        })
      }
    }
  }

  return (
    <div className='flex justify-center'>
      <div className='flex items-center justify-center w-3/4 min-h-screen bg-gray-100 md:w-1/2'>
        <div className='z-20 bg-white rounded-lg shadow-lg'>
          <h2 className='mb-6 font-serif text-3xl font-semibold text-gray-800 sm:text-4xl'>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
              <label className='text-sm font-normal text-gray-800 md:text-xl' htmlFor='email'>
                Email
              </label>

              <input className={`border rounded h-12 w-full py-2 px-3 mb-2 focus:outline-none ${errors.email ? 'border-red' : 'border-gray'}`} id='email' type='email' placeholder='Email' {...register('email', { pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, required: true })} />
            </div>
            <div className='mb-2'>
              <label className='text-sm font-normal text-gray-800 sm:text-xl' htmlFor='password'>
                Contraseña
              </label>
              <input className={`border rounded h-12 w-full py-2 px-3 mb-2 focus:outline-none ${errors.password ? 'border-red' : 'border-gray'}`} id='password' type='password' placeholder='**********' {...register('password', { pattern: /^.{4,12}$/, required: true })} />
            </div>
            {generalError && <p className='text-red text-bold'>{generalError}</p>}
            {invalidPassword && <p className='text-red text-bold'>Datos invalidos</p>}
            <div className='mt-5 mb-6 md:mt-6'>
              <button type='submit' className={`w-full text-sm shadow-outline btn sm:text-xl sm:w-2/4 md:w-full shadow-custom ${loading ? 'cursor-not-allowed' : ''}`}>
                {loading ? (
                  <span className='flex justify-center'>
                    <svg className='w-5 mr-2 text-white animate-spin' viewBox='0 0 24 24'>
                      <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                      <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                    </svg>
                    Procesando...
                  </span>
                ) : (
                  'Entrar'
                )}
              </button>
            </div>
          </form>
          <div className='text-[10px] sm:text-xs font-semibold my-2'>
            <p>
              ¿No tienes una cuenta?
              <Link to='/register' className='mx-1 no-underline hover:underline'>
                ¡Regístrate por acá!
              </Link>
            </p>
            <p className='mt-1'>
              <a href='#' className='no-underline hover:underline'>
                ¿Has olvidado tu contraseña?
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className='z-40 hidden md:block md:w-1/2'>
        <img src={dogImageURL} alt='Imagen de fondo' className='object-cover w-full h-screen' />
      </div>
      <Background></Background>
    </div>
  )
}

export default Login
