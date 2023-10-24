import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <main className='container relative z-20 mx-auto'>
      <div className='grid h-screen gap-10 px-3 md:grid-cols-6 py-7 md:py-0'>
        <div className='col-span-2 pt-[86px] md:pt-[150px]'>
          <div className='px-10 py-10 flex flex-col max-w-screen-xl rounded-2xl p-7 shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>
            <Link className='block py-3 mb-2 text-base font-black border-b hover:underline font-montserrat' to='/profile'>
              Perfil
            </Link>
            <Link className='block py-3 mb-2 text-base font-black border-b hover:underline font-montserrat' to='/profile'>
              Información de tu cuenta
            </Link>
            <Link className='block py-3 mb-2 text-base font-black border-b hover:underline font-montserrat' to='/profile'>
              Seguridad
            </Link>
          </div>
        </div>
        <div className='col-span-4 px-3 pt-[150px] text-center'>
          <div className='p-7 md:px-10 rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]'>
            <form action=''>
              <div className='w-full mb-4 text-center'>
                <img className='inline-block' src='./img/dummy-profile.png' alt='Dummy profile' />
              </div>

              <div className='grid gap-4 md:grid-cols-2'>
                <div className='flex items-end mb-5 text-center'>
                  <div className='flex-auto'>
                    <label className='inline-block mb-1 font-bold' htmlFor='name'>
                      Nombre
                    </label>
                    <input className='w-full py-1 text-center bg-transparent border rounded focus:outline-none' type='text' readOnly placeholder='Alejandra' />
                  </div>
                  <button className='px-2 h-[34px] ml-2 border drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] rounded bg-isabeline'>
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path fillRule='evenodd' clipRule='evenodd' d='M12.3536 2.54801C13.0625 1.83915 14.0239 1.44092 15.0264 1.44092C16.0288 1.44092 16.9902 1.83915 17.6991 2.54801C18.408 3.25686 18.8062 4.21828 18.8062 5.22075C18.8062 6.22323 18.408 7.18465 17.6991 7.8935L10.0417 15.5509C9.60417 15.9884 9.34747 16.2451 9.06009 16.4687C8.72267 16.7327 8.3578 16.9587 7.97033 17.1428C7.64259 17.2986 7.2971 17.414 6.71104 17.6094L4.02134 18.5054L3.37394 18.7217C3.11646 18.8077 2.84012 18.8202 2.57591 18.7579C2.31171 18.6956 2.07009 18.5609 1.87814 18.369C1.68619 18.177 1.55151 17.9354 1.48921 17.6712C1.4269 17.407 1.43942 17.1306 1.52538 16.8732L2.63775 13.5369C2.8331 12.95 2.94853 12.6045 3.10433 12.276C3.28918 11.8893 3.5144 11.5244 3.77837 11.1862C4.00116 10.9004 4.25867 10.6429 4.69619 10.2054L12.3536 2.54801ZM3.99309 17.2396L6.28644 16.4744C6.92496 16.2613 7.19619 16.1701 7.44886 16.0498C7.7556 15.9029 8.04621 15.7237 8.31502 15.5146C8.53539 15.3418 8.73881 15.1408 9.21508 14.6646L15.3258 8.55382C14.488 8.25694 13.7275 7.77585 13.1003 7.14601C12.471 6.51868 11.9905 5.75816 11.6941 4.92046L5.58334 11.0312C5.10707 11.5067 4.90526 11.7093 4.73332 11.9305C4.52429 12.1991 4.34485 12.4895 4.19813 12.7966C4.07785 13.0493 3.98663 13.3205 3.77352 13.9591L3.00907 16.2524L3.99309 17.2396ZM12.6749 3.93806C12.7031 4.07933 12.7491 4.27145 12.8274 4.49505C13.0635 5.17078 13.4499 5.78409 13.9576 6.28872C14.462 6.79625 15.075 7.18266 15.7504 7.41885C15.9748 7.49715 16.167 7.54316 16.3082 7.57142L16.8426 7.03703C17.3215 6.55474 17.5898 5.9023 17.5886 5.22262C17.5874 4.54294 17.3169 3.89143 16.8363 3.41083C16.3557 2.93022 15.7042 2.65969 15.0245 2.6585C14.3448 2.65731 13.6924 2.92556 13.2101 3.40448L12.6749 3.93806Z' fill='black' />
                    </svg>
                  </button>
                </div>
                <div className='flex items-end mb-5 text-center'>
                  <div className='flex-auto'>
                    <label className='inline-block mb-1 font-bold' htmlFor='lastname'>
                      Apellido
                    </label>
                    <input id='lastname' className='w-full py-1 text-center bg-transparent border rounded focus:outline-none' type='text' readOnly placeholder='Vero' />
                  </div>
                  <button className='px-2 h-[34px] ml-2 border drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] rounded bg-isabeline'>
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path fillRule='evenodd' clipRule='evenodd' d='M12.3536 2.54801C13.0625 1.83915 14.0239 1.44092 15.0264 1.44092C16.0288 1.44092 16.9902 1.83915 17.6991 2.54801C18.408 3.25686 18.8062 4.21828 18.8062 5.22075C18.8062 6.22323 18.408 7.18465 17.6991 7.8935L10.0417 15.5509C9.60417 15.9884 9.34747 16.2451 9.06009 16.4687C8.72267 16.7327 8.3578 16.9587 7.97033 17.1428C7.64259 17.2986 7.2971 17.414 6.71104 17.6094L4.02134 18.5054L3.37394 18.7217C3.11646 18.8077 2.84012 18.8202 2.57591 18.7579C2.31171 18.6956 2.07009 18.5609 1.87814 18.369C1.68619 18.177 1.55151 17.9354 1.48921 17.6712C1.4269 17.407 1.43942 17.1306 1.52538 16.8732L2.63775 13.5369C2.8331 12.95 2.94853 12.6045 3.10433 12.276C3.28918 11.8893 3.5144 11.5244 3.77837 11.1862C4.00116 10.9004 4.25867 10.6429 4.69619 10.2054L12.3536 2.54801ZM3.99309 17.2396L6.28644 16.4744C6.92496 16.2613 7.19619 16.1701 7.44886 16.0498C7.7556 15.9029 8.04621 15.7237 8.31502 15.5146C8.53539 15.3418 8.73881 15.1408 9.21508 14.6646L15.3258 8.55382C14.488 8.25694 13.7275 7.77585 13.1003 7.14601C12.471 6.51868 11.9905 5.75816 11.6941 4.92046L5.58334 11.0312C5.10707 11.5067 4.90526 11.7093 4.73332 11.9305C4.52429 12.1991 4.34485 12.4895 4.19813 12.7966C4.07785 13.0493 3.98663 13.3205 3.77352 13.9591L3.00907 16.2524L3.99309 17.2396ZM12.6749 3.93806C12.7031 4.07933 12.7491 4.27145 12.8274 4.49505C13.0635 5.17078 13.4499 5.78409 13.9576 6.28872C14.462 6.79625 15.075 7.18266 15.7504 7.41885C15.9748 7.49715 16.167 7.54316 16.3082 7.57142L16.8426 7.03703C17.3215 6.55474 17.5898 5.9023 17.5886 5.22262C17.5874 4.54294 17.3169 3.89143 16.8363 3.41083C16.3557 2.93022 15.7042 2.65969 15.0245 2.6585C14.3448 2.65731 13.6924 2.92556 13.2101 3.40448L12.6749 3.93806Z' fill='black' />
                    </svg>
                  </button>
                </div>
                <div className='flex items-end mb-5 text-center'>
                  <div className='flex-auto'>
                    <label className='inline-block mb-1 font-bold' htmlFor='document'>
                      Documento de identidad
                    </label>
                    <input id='document' className='w-full py-1 text-center bg-transparent border rounded focus:outline-none' type='text' readOnly placeholder='20.000.000' />
                  </div>
                  <button className='px-2 h-[34px] ml-2 border drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] rounded bg-isabeline'>
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path fillRule='evenodd' clipRule='evenodd' d='M12.3536 2.54801C13.0625 1.83915 14.0239 1.44092 15.0264 1.44092C16.0288 1.44092 16.9902 1.83915 17.6991 2.54801C18.408 3.25686 18.8062 4.21828 18.8062 5.22075C18.8062 6.22323 18.408 7.18465 17.6991 7.8935L10.0417 15.5509C9.60417 15.9884 9.34747 16.2451 9.06009 16.4687C8.72267 16.7327 8.3578 16.9587 7.97033 17.1428C7.64259 17.2986 7.2971 17.414 6.71104 17.6094L4.02134 18.5054L3.37394 18.7217C3.11646 18.8077 2.84012 18.8202 2.57591 18.7579C2.31171 18.6956 2.07009 18.5609 1.87814 18.369C1.68619 18.177 1.55151 17.9354 1.48921 17.6712C1.4269 17.407 1.43942 17.1306 1.52538 16.8732L2.63775 13.5369C2.8331 12.95 2.94853 12.6045 3.10433 12.276C3.28918 11.8893 3.5144 11.5244 3.77837 11.1862C4.00116 10.9004 4.25867 10.6429 4.69619 10.2054L12.3536 2.54801ZM3.99309 17.2396L6.28644 16.4744C6.92496 16.2613 7.19619 16.1701 7.44886 16.0498C7.7556 15.9029 8.04621 15.7237 8.31502 15.5146C8.53539 15.3418 8.73881 15.1408 9.21508 14.6646L15.3258 8.55382C14.488 8.25694 13.7275 7.77585 13.1003 7.14601C12.471 6.51868 11.9905 5.75816 11.6941 4.92046L5.58334 11.0312C5.10707 11.5067 4.90526 11.7093 4.73332 11.9305C4.52429 12.1991 4.34485 12.4895 4.19813 12.7966C4.07785 13.0493 3.98663 13.3205 3.77352 13.9591L3.00907 16.2524L3.99309 17.2396ZM12.6749 3.93806C12.7031 4.07933 12.7491 4.27145 12.8274 4.49505C13.0635 5.17078 13.4499 5.78409 13.9576 6.28872C14.462 6.79625 15.075 7.18266 15.7504 7.41885C15.9748 7.49715 16.167 7.54316 16.3082 7.57142L16.8426 7.03703C17.3215 6.55474 17.5898 5.9023 17.5886 5.22262C17.5874 4.54294 17.3169 3.89143 16.8363 3.41083C16.3557 2.93022 15.7042 2.65969 15.0245 2.6585C14.3448 2.65731 13.6924 2.92556 13.2101 3.40448L12.6749 3.93806Z' fill='black' />
                    </svg>
                  </button>
                </div>
                <div className='flex items-end mb-5 text-center'>
                  <div className='flex-auto'>
                    <label className='inline-block mb-1 font-bold' htmlFor='birthday'>
                      Fecha de nacimiento
                    </label>
                    <input id='document' className='w-full py-1 text-center bg-transparent border rounded focus:outline-none' type='text' readOnly placeholder='26/01/1996' />
                  </div>
                  <button className='px-2 h-[34px] ml-2 border drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] rounded bg-isabeline'>
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path fillRule='evenodd' clipRule='evenodd' d='M12.3536 2.54801C13.0625 1.83915 14.0239 1.44092 15.0264 1.44092C16.0288 1.44092 16.9902 1.83915 17.6991 2.54801C18.408 3.25686 18.8062 4.21828 18.8062 5.22075C18.8062 6.22323 18.408 7.18465 17.6991 7.8935L10.0417 15.5509C9.60417 15.9884 9.34747 16.2451 9.06009 16.4687C8.72267 16.7327 8.3578 16.9587 7.97033 17.1428C7.64259 17.2986 7.2971 17.414 6.71104 17.6094L4.02134 18.5054L3.37394 18.7217C3.11646 18.8077 2.84012 18.8202 2.57591 18.7579C2.31171 18.6956 2.07009 18.5609 1.87814 18.369C1.68619 18.177 1.55151 17.9354 1.48921 17.6712C1.4269 17.407 1.43942 17.1306 1.52538 16.8732L2.63775 13.5369C2.8331 12.95 2.94853 12.6045 3.10433 12.276C3.28918 11.8893 3.5144 11.5244 3.77837 11.1862C4.00116 10.9004 4.25867 10.6429 4.69619 10.2054L12.3536 2.54801ZM3.99309 17.2396L6.28644 16.4744C6.92496 16.2613 7.19619 16.1701 7.44886 16.0498C7.7556 15.9029 8.04621 15.7237 8.31502 15.5146C8.53539 15.3418 8.73881 15.1408 9.21508 14.6646L15.3258 8.55382C14.488 8.25694 13.7275 7.77585 13.1003 7.14601C12.471 6.51868 11.9905 5.75816 11.6941 4.92046L5.58334 11.0312C5.10707 11.5067 4.90526 11.7093 4.73332 11.9305C4.52429 12.1991 4.34485 12.4895 4.19813 12.7966C4.07785 13.0493 3.98663 13.3205 3.77352 13.9591L3.00907 16.2524L3.99309 17.2396ZM12.6749 3.93806C12.7031 4.07933 12.7491 4.27145 12.8274 4.49505C13.0635 5.17078 13.4499 5.78409 13.9576 6.28872C14.462 6.79625 15.075 7.18266 15.7504 7.41885C15.9748 7.49715 16.167 7.54316 16.3082 7.57142L16.8426 7.03703C17.3215 6.55474 17.5898 5.9023 17.5886 5.22262C17.5874 4.54294 17.3169 3.89143 16.8363 3.41083C16.3557 2.93022 15.7042 2.65969 15.0245 2.6585C14.3448 2.65731 13.6924 2.92556 13.2101 3.40448L12.6749 3.93806Z' fill='black' />
                    </svg>
                  </button>
                </div>
                <div className='flex items-end mb-5 text-center'>
                  <div className='flex-auto'>
                    <label className='inline-block mb-1 font-bold' htmlFor='phone'>
                      Teléfono
                    </label>
                    <input id='document' className='w-full py-1 text-center bg-transparent border rounded focus:outline-none' type='text' readOnly placeholder='4444-8888' />
                  </div>
                  <button className='px-2 h-[34px] ml-2 border drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] rounded bg-isabeline'>
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path fillRule='evenodd' clipRule='evenodd' d='M12.3536 2.54801C13.0625 1.83915 14.0239 1.44092 15.0264 1.44092C16.0288 1.44092 16.9902 1.83915 17.6991 2.54801C18.408 3.25686 18.8062 4.21828 18.8062 5.22075C18.8062 6.22323 18.408 7.18465 17.6991 7.8935L10.0417 15.5509C9.60417 15.9884 9.34747 16.2451 9.06009 16.4687C8.72267 16.7327 8.3578 16.9587 7.97033 17.1428C7.64259 17.2986 7.2971 17.414 6.71104 17.6094L4.02134 18.5054L3.37394 18.7217C3.11646 18.8077 2.84012 18.8202 2.57591 18.7579C2.31171 18.6956 2.07009 18.5609 1.87814 18.369C1.68619 18.177 1.55151 17.9354 1.48921 17.6712C1.4269 17.407 1.43942 17.1306 1.52538 16.8732L2.63775 13.5369C2.8331 12.95 2.94853 12.6045 3.10433 12.276C3.28918 11.8893 3.5144 11.5244 3.77837 11.1862C4.00116 10.9004 4.25867 10.6429 4.69619 10.2054L12.3536 2.54801ZM3.99309 17.2396L6.28644 16.4744C6.92496 16.2613 7.19619 16.1701 7.44886 16.0498C7.7556 15.9029 8.04621 15.7237 8.31502 15.5146C8.53539 15.3418 8.73881 15.1408 9.21508 14.6646L15.3258 8.55382C14.488 8.25694 13.7275 7.77585 13.1003 7.14601C12.471 6.51868 11.9905 5.75816 11.6941 4.92046L5.58334 11.0312C5.10707 11.5067 4.90526 11.7093 4.73332 11.9305C4.52429 12.1991 4.34485 12.4895 4.19813 12.7966C4.07785 13.0493 3.98663 13.3205 3.77352 13.9591L3.00907 16.2524L3.99309 17.2396ZM12.6749 3.93806C12.7031 4.07933 12.7491 4.27145 12.8274 4.49505C13.0635 5.17078 13.4499 5.78409 13.9576 6.28872C14.462 6.79625 15.075 7.18266 15.7504 7.41885C15.9748 7.49715 16.167 7.54316 16.3082 7.57142L16.8426 7.03703C17.3215 6.55474 17.5898 5.9023 17.5886 5.22262C17.5874 4.54294 17.3169 3.89143 16.8363 3.41083C16.3557 2.93022 15.7042 2.65969 15.0245 2.6585C14.3448 2.65731 13.6924 2.92556 13.2101 3.40448L12.6749 3.93806Z' fill='black' />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
