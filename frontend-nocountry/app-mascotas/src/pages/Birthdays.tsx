import { PetAvatar } from "../components/Pets/PetAvatar"
export const Birthdays = () => {
  return (
    <section className="h-[90vh] w-screen absolute top-20 lg:top-10 flex flex-col lg:flex-row items-center gap-3 md:gap-12 lg:gap-6">

      <div className='containerbox w-[90%] z-20 lg:w-auto  lg:ml-8  lg:mt-6 xl:mt-12 xl:ml-16  lg:flex  rounded-2xl  '>
        <div className='pb-3  text-center   lg:h-[600px] xl:h-[700px] overflow-auto'>
          <p className='text-lg my-2 lg:mb-5 lg:text-xl font-bold font-montserrat'>Tus Mascotas</p>
          <div className='flex justify-center gap-3 lg:gap-7 lg:grid px-6'>
            {/* {MyPets ? MyPets?.slice(0, 6).map((pet: any, index: any) => <PetAvatar fn={null} key={index} img={pet.image} name={pet.name}></PetAvatar>) : <PetAvatarSkeleton /> */}
            {/* } */}
            <PetAvatar img={null} name={"Test"} fn={null} />
            <PetAvatar img={null} name={"Test"} fn={null} />
            <PetAvatar img={null} name={"Test"} fn={null} />
            <PetAvatar img={null} name={"Test"} fn={null} />

          </div>
        </div>
      </div>



      <div className="containerbox h-[400px] md:h-[500px] lg:h-[580px]  overflow-y-auto  text-montserrat w-[90%] lg:w-[75%] py-2  z-20 flex flex-col items-center">

        <h1 className="text-lg font-bold py-2">Cumpleaños</h1>

        <div className="flex items-center gap-6">
          <img className=" scale-75 rotate-180" src="./img/arrow-right.svg" alt="previous-year-selector" />
          <h1 className="text-2xl font-semibold">2023</h1>
          <img className="scale-75" src="./img/arrow-right.svg" alt="previous-year-selector" />
        </div>

        <div className="detailcontainr py-4 flex flex-col items-center">
          <h1 className="text-2xl font-semibold">2 de Noviembre</h1>

          <p className="py-4 px-4 font-semibold text-sm lg:text-lg">Vinieron todos sus amigos desde el vecindario
            a celebrar su cumpleaños.
            La pasaron excelente!  </p>

        </div>

        <div className="grid grid-cols-2 gap-6 px-7">
          <img className="rounded-[20px]" src="./img/mockup-birthday-1.jpg" alt="birthday image" />
          <img className="rounded-[20px]" src="./img/mockup-birthday-2.jpg" alt="birthday image" />
          <img className="rounded-[20px]" src="./img/mockup-birthday-3.jpg" alt="birthday image" />

        </div>





      </div>

      <div className="flex z-20 justify-center gap-3 md:justify-around   mobilepanel   h-[70px] w-[55%] lg:hidden rounded-xl  shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]">

        <button >
          <svg width="48" height="48" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_455_3297)">
              <path d="M4.16014 2.94945C4.59055 2.81301 5.03952 2.74416 5.49104 2.74538C7.34633 2.74538 8.60891 3.85447 9.36176 4.83224C9.73885 5.3229 9.9274 5.56734 9.9274 6.29446C9.9274 7.02202 9.73885 7.26647 9.36176 7.75668C8.60891 8.73446 7.34633 9.84355 5.49104 9.84355C3.63576 9.84355 2.37317 8.73446 1.62032 7.75668C1.24323 7.26691 1.05469 7.02158 1.05469 6.29446C1.05469 5.5669 1.24323 5.32246 1.62032 4.83224C1.85029 4.53177 2.10638 4.25222 2.38559 3.99687" stroke="#636870" stroke-width="0.665453" stroke-linecap="round" />
              <path d="M6.82295 6.29453C6.82295 6.64751 6.68273 6.98603 6.43313 7.23562C6.18354 7.48522 5.84502 7.62544 5.49204 7.62544C5.13906 7.62544 4.80054 7.48522 4.55095 7.23562C4.30135 6.98603 4.16113 6.64751 4.16113 6.29453C4.16113 5.94155 4.30135 5.60303 4.55095 5.35344C4.80054 5.10384 5.13906 4.96362 5.49204 4.96362C5.84502 4.96362 6.18354 5.10384 6.43313 5.35344C6.68273 5.60303 6.82295 5.94155 6.82295 6.29453Z" stroke="#636870" stroke-width="0.665453" />
            </g>
            <defs>
              <clipPath id="clip0_455_3297">
                <rect width="10.6473" height="10.6473" fill="white" transform="translate(0.167969 0.970947)" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button>
          <svg width="48" height="48" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6487 3.59912L8.26965 1.2205C8.19056 1.14138 8.09665 1.07862 7.9933 1.0358C7.88995 0.992986 7.77918 0.970947 7.66731 0.970947C7.55544 0.970947 7.44466 0.992986 7.34131 1.0358C7.23796 1.07862 7.14406 1.14138 7.06496 1.2205L0.500649 7.78514C0.421213 7.86395 0.358234 7.95776 0.315373 8.06113C0.272511 8.1645 0.250623 8.27535 0.250981 8.38725V10.7664C0.250981 10.9923 0.340718 11.209 0.500452 11.3687C0.660186 11.5285 0.876831 11.6182 1.10273 11.6182H3.48177C3.59366 11.6186 3.70451 11.5967 3.80787 11.5538C3.91123 11.5109 4.00504 11.448 4.08385 11.3685L8.53795 6.91472L8.72321 7.65471L6.76419 9.6133C6.68428 9.69314 6.63936 9.80146 6.63931 9.91443C6.63926 10.0274 6.68408 10.1358 6.76392 10.2157C6.84376 10.2956 6.95208 10.3405 7.06504 10.3406C7.178 10.3406 7.28636 10.2958 7.36627 10.2159L9.49564 8.08646C9.54772 8.03447 9.58544 7.96988 9.60513 7.89897C9.62481 7.82806 9.62579 7.75326 9.60796 7.68186L9.24064 6.21199L10.6487 4.80387C10.7278 4.72478 10.7906 4.63087 10.8334 4.52751C10.8762 4.42415 10.8982 4.31337 10.8982 4.2015C10.8982 4.08962 10.8762 3.97884 10.8334 3.87549C10.7906 3.77213 10.7278 3.67822 10.6487 3.59912ZM1.10273 9.23904L2.63002 10.7664H1.10273V9.23904ZM3.65797 10.5902L1.27893 8.21104L5.78734 3.7024L8.16638 6.08156L3.65797 10.5902ZM8.76846 5.47945L6.38995 3.10029L7.66757 1.82261L10.0461 4.20177L8.76846 5.47945Z" fill="#636870" />
          </svg>
        </button>
        <button>
          <svg width="48" height="48" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.76391 4.0763L8.37913 9.46314C8.34597 9.92746 7.95961 10.2872 7.49412 10.2872H3.8228C3.3573 10.2872 2.97095 9.92746 2.93779 9.46314L2.55301 4.0763M4.77119 5.85084V8.51266M6.54573 5.85084V8.51266M6.98937 4.0763V2.74539C6.98937 2.50038 6.79074 2.30176 6.54573 2.30176H4.77119C4.52618 2.30176 4.32755 2.50038 4.32755 2.74539V4.0763M2.10938 4.0763H9.20754" stroke="#636870" stroke-width="0.887271" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>


      </div>
    </section>
  )
}
