// TODO
//
// - [ ] Refactorizar llamado de sweetalert

import axios, { AxiosResponse } from 'axios'
import { useForm } from 'react-hook-form'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import { useState } from 'react'

interface ModalProps {
  isVisible: boolean
  onClose: () => void
}

interface FormData {
  name: string
  species: string
  birthdate: string
  weight: string
  image?: File
  breed: string
  descriptions: string
  surname: string
}

const AddPetModal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  const [picture, setPicture] = useState<string>('./img/select-image.png')

  const MySwal = withReactContent(Swal)
  const {
    register,
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<FormData>()

  if (!isVisible) return

  function previewImage(event: any) {
    const image = event.target.files[0]
    console.log(image);
    
    const url = window.URL.createObjectURL(image)
    setValue('image', image)
    setPicture(url)
  }

  const handleClose = () => {
    onClose()
  }

  const submitPet = handleSubmit(values => {
    console.log(values)

    values.surname = 'perez'
    MySwal.fire({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 1000,
      title: `¡Estamos registrandote, esperanos unos segundo!`
    })

    if (Object.keys(errors).length === 0) {
      axios
        .post('https://petcare-app.onrender.com/api/v1/pets', values, { headers: { Authorization: `Bearer ${Cookies.get('token')}`, 'Content-Type': 'multipart/form-data;' } })
        .then((response: AxiosResponse) => {
          if (response.status === 200) {
            MySwal.fire({
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              timer: 2500,
              title: `¡Bienvenido ${values.name}!`
            })
            reset()
            setTimeout(() => {
              onClose()
            }, 600)
          }
        })
        .catch(function (error) {
          if (error.response.data === 'No se recibió el token') {
            MySwal.fire({
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              timer: 2500,
              title: `¡No has iniciado sesion ${values.name}!.  ¡Intruso!, te han dejado entrar los devs!`
            })
          } else {
            MySwal.fire({
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              timer: 2500,
              title: `Ha ocurrido un error inesperado`
            })
          }
        })
    } else {
      MySwal.fire({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2500,
        title: `¡Ha ocurrido un problema!`
      })
    }
  })

  return (
    <div className='flex items-center justify-center text-montserrat'>
      <div id='wrapper' onClick={() => handleClose()} className='fixed inset-0 z-30 '>
        {' '}
      </div>
      <div id='modal' className='  absolute right-[10%] md:right-[8%] lg:right-[18%] xl:right-[20%] lg:bottom-14 h-auto    w-[80%] z-40 md:-[708px] lg:h-[670px]  xl:h-auto md:w-[656px] lg:w-[750px] xl:w-[60%] xl:-[90%]  rounded-xl lg:rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>
        <div className='relative flex flex-col items-center'>
          <button onClick={() => handleClose()} className='absolute scale-50 right-4 top-4 md:scale-100'>
            <img id='imageselector' src='./img/close-button.svg' alt='close-button' />
          </button>

          <h2 className='py-3 text-lg font-extrabold lg:text-2xl xl:text-3xl'>Agregar Mascota</h2>

          <form onSubmit={submitPet} className='flex flex-col items-center'>
            <div id='uploadimage' className='h-[150px] md:h-[200px] lg:w-[200px] '>
              <label htmlFor='image' className=''>
                <img className='cursor-pointer ml-24 lg:ml-0 scale-75 md:scale-100 rounded-full w-[200px] h-[200px]' src={picture} alt='image-input' />
              </label>
              <input id='image' type='file' accept='image/png, image/gif, image/jpeg, image/jpg' className='invisible' {...register('image')} onChange={previewImage} />
            </div>

            {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}

            <div className='grid grid-cols-2 lg:grid-cols-3 scale-75 md:scale-100 m-4 gap-2 ml-10 lg:ml-0 w-[80%]  text-[10px] lg:text-sm xl:text-xl'>
              <div>
                <label className='text-[12px] md:text-xl font-normal ' htmlFor='Nombre'>
                  Nombre
                </label>
                <input className='w-full h-10 px-3 py-2 mb-2 rounded md:placeholder:text-lg focus:outline-none' id='nombre-input' type='name' required placeholder='Nombre' {...register('name')} />
              </div>

              <div>
                <label className='text-sm font-normal md:text-xl ' htmlFor='Especie'>
                  Especie
                </label>
                <input className='w-full h-10 px-3 py-2 mb-2 rounded md:placeholder:text-lg focus:outline-none' id='especie-input' type='text' required placeholder='Especie' {...register('species')} />
              </div>
              <div>
                <label className='text-sm font-normal md:text-xl whitespace-nowrap' htmlFor='Date'>
                  Fecha de nacimiento
                </label>
                <input className='w-full h-10 px-3 py-2 mb-2 rounded md:placeholder:text-lg focus:outline-none' id='date-input' type='date' required placeholder='Fecha de nacimiento' pattern='^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$' {...register('birthdate')} />
              </div>

              <div>
                <label className='text-sm font-normal md:text-xl ' htmlFor='Raza'>
                  Raza
                </label>
                <input className='w-full h-10 px-3 py-2 mb-2 rounded md:placeholder:text-lg focus:outline-none' id='raza-input' type='text' required placeholder='Raza' {...register('breed')} />
              </div>

              <div>
                <label className='text-sm font-normal md:text-xl ' htmlFor='Peso'>
                  Peso
                </label>
                <input {...register('weight')} className='w-full h-10 px-3 py-2 mb-2 rounded md:placeholder:text-lg focus:outline-none' id='peso-input' type='text' required placeholder='Peso' />
              </div>
            </div>

            <div className='w-[70%] flex flex-col items-center gap-5 mt-[-30px] md:mt-0'>
              <label className='text-sm font-normal md:text-xl ' htmlFor='Peso'>
                Descripcion (Adicional)
              </label>
              <textarea className='overflow-hidden  resize-none rounded  w-[90%] h-24 p-4 px-3 mb-2 lg:mb-auto focus:outline-none' id='descripcion-input' maxLength={300} {...register('descriptions')} />
            </div>

            <button className='text-lg md:text-xl md:mb-12  font-bold scale-75 bg-[#20EA7D] md:mt-2 xl:mt-6  md:scale-100 text-[#fff] rounded-[3px] text-center px-6 py-4 inline-block;'>Agregar nueva mascota</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddPetModal
