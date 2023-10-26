import Background from './Background'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalStore } from '../store/globalStore'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import Cookies from 'js-cookie'
import { LoginRequest } from '../api/auth'

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
  // const MySwal = withReactContent(Swal)

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
      try {
        const response = await LoginRequest(values)

        if (response.status === 200) {
          const user = response.data.user
          const token = response.data.token
          Cookies.set('token', token)

          setUser(user, true)
          setToken(token)
          navigate('/dashboard')
        }
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
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
              <input className='w-full h-10 px-3 py-2 mb-2 border rounded appearance-none focus:outline-none' id='email' type='email' placeholder='Email' {...register('email', { pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, required: true })} />
            </div>
            <div className='mb-6'>
              <label className='text-sm font-normal text-gray-800 sm:text-xl' htmlFor='password'>
                Contraseña
              </label>
              <input className='w-full h-10 px-3 py-2 border rounded focus:outline-none' id='password' type='password' placeholder='**********' {...register('password', { pattern: /^.{4,12}$/, required: true })} />
            </div>
            <div className={`${generalError ? 'p-0' : 'p-3'}`}>{generalError && <p className='text-red text-bold'>{generalError}</p>}</div>
            <div className='mt-5 mb-6 md:mt-6'>
              <button type='submit' className='w-full text-sm shadow-outline btn sm:text-xl sm:w-2/4 md:w-full shadow-custom'>
                Entrar
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
