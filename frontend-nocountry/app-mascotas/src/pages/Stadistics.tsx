
import { useGlobalStore } from '../store/globalStore'
import { PetAvatar } from '../components/Pets/PetAvatar'
import { PetAvatarSkeleton } from '../components/skeletons/PetAvatarSkeleton'

export const Stadistics = () => {
  const MyPets = useGlobalStore(state => state.pets)



  return (
    <section className="text-montserrat h-[90vh] w-screen absolute top-20 lg:top-10 flex flex-col lg:flex-row items-center gap-3 md:gap-12 lg:gap-10">

      <div className='containerbox w-[90%] z-20 lg:w-auto  lg:ml-8  lg:mt- xl:mt- xl:ml-16  lg:flex  rounded-2xl  '>
        <div className='pb-2  text-center   lg:h-[600px] xl:h-[65vh] overflow-auto'>
          <p className='text-md my-2 lg:mb-5 lg:text-xl font-bold font-montserrat'>Tus Mascotas</p>
          <div className='flex justify-center gap-3 lg:gap-7 lg:grid px-6'>
            {MyPets ? MyPets?.slice(0, 6).map((pet: any, index: any) => <PetAvatar fn={null} key={index} img={pet.image} name={pet.name}></PetAvatar>) : <PetAvatarSkeleton />
            }
          </div>
        </div>
      </div>



      <div className="containerbox h-[70vh] md:h-[60%] lg:h-[87%] xl:h-[72%] relative  overflow-y-auto lg:overflow-y-visible   w-[90%] lg:w-[75%] py-2  z-20 flex flex-col items-center">
        <h1 className="text-lg font-bold py-2 lg:absolute lg:top-[-32px] lg:left-[-20px] lg:uppercase lg:text-4xl xl:text-5xl lg:font-black">Estadisticas</h1>


      </div>

      <div className="flex z-20 justify-center gap-3 md:justify-around mb-8  mobilepanel   h-[50px] w-[55%] lg:hidden rounded-xl  shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]">

        <button >
          <img src="./img/zondicons_add-solid.png" alt="add-birthday" />
        </button>
        <button>
          <svg width="32" height="32" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6487 3.59912L8.26965 1.2205C8.19056 1.14138 8.09665 1.07862 7.9933 1.0358C7.88995 0.992986 7.77918 0.970947 7.66731 0.970947C7.55544 0.970947 7.44466 0.992986 7.34131 1.0358C7.23796 1.07862 7.14406 1.14138 7.06496 1.2205L0.500649 7.78514C0.421213 7.86395 0.358234 7.95776 0.315373 8.06113C0.272511 8.1645 0.250623 8.27535 0.250981 8.38725V10.7664C0.250981 10.9923 0.340718 11.209 0.500452 11.3687C0.660186 11.5285 0.876831 11.6182 1.10273 11.6182H3.48177C3.59366 11.6186 3.70451 11.5967 3.80787 11.5538C3.91123 11.5109 4.00504 11.448 4.08385 11.3685L8.53795 6.91472L8.72321 7.65471L6.76419 9.6133C6.68428 9.69314 6.63936 9.80146 6.63931 9.91443C6.63926 10.0274 6.68408 10.1358 6.76392 10.2157C6.84376 10.2956 6.95208 10.3405 7.06504 10.3406C7.178 10.3406 7.28636 10.2958 7.36627 10.2159L9.49564 8.08646C9.54772 8.03447 9.58544 7.96988 9.60513 7.89897C9.62481 7.82806 9.62579 7.75326 9.60796 7.68186L9.24064 6.21199L10.6487 4.80387C10.7278 4.72478 10.7906 4.63087 10.8334 4.52751C10.8762 4.42415 10.8982 4.31337 10.8982 4.2015C10.8982 4.08962 10.8762 3.97884 10.8334 3.87549C10.7906 3.77213 10.7278 3.67822 10.6487 3.59912ZM1.10273 9.23904L2.63002 10.7664H1.10273V9.23904ZM3.65797 10.5902L1.27893 8.21104L5.78734 3.7024L8.16638 6.08156L3.65797 10.5902ZM8.76846 5.47945L6.38995 3.10029L7.66757 1.82261L10.0461 4.20177L8.76846 5.47945Z" fill="#636870" />
          </svg>
        </button>
        <button>
          <svg width="32" height="32" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.76391 4.0763L8.37913 9.46314C8.34597 9.92746 7.95961 10.2872 7.49412 10.2872H3.8228C3.3573 10.2872 2.97095 9.92746 2.93779 9.46314L2.55301 4.0763M4.77119 5.85084V8.51266M6.54573 5.85084V8.51266M6.98937 4.0763V2.74539C6.98937 2.50038 6.79074 2.30176 6.54573 2.30176H4.77119C4.52618 2.30176 4.32755 2.50038 4.32755 2.74539V4.0763M2.10938 4.0763H9.20754" stroke="#636870" stroke-width="0.887271" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>


      </div>
    </section>
  )
}
