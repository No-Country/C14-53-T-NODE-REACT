
import { useGlobalStore } from '../store/globalStore'
import { PetAvatar } from '../components/Pets/PetAvatar'
import { PetAvatarSkeleton } from '../components/skeletons/PetAvatarSkeleton'
import { Chart } from '../components/Chart'
import { data } from '../mocks/chartdata'
import { calendarData } from '../mocks/calendarChartData'
import { CalendarChart } from '../components/CalendarChart'

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



      <div className="containerbox h-[60vh] md:h-[60%] lg:h-[87%] xl:h-[72%] relative  overflow-y-auto lg:overflow-y-visible   w-[90%] lg:w-[75%] py-2  z-20 flex flex-col items-start">
        <h1 className="text-lg ml-2 lg:ml-0 font-bold py-2 lg:absolute lg:top-[-32px] lg:left-[-20px] lg:uppercase lg:text-4xl xl:text-5xl lg:font-black">Estadisticas</h1>

        <div className='lg:h-[35%] lg:mt-6   my-2 lg:w-[80%] h-[40vh] w-full overflow-x-auto '>
          <h2 className='font-bold lg:text-2xl ml-2 lg:pl-24'>Actividades por año</h2>
          <CalendarChart data={calendarData} />
        </div>

        <div className='lg:h-[40%] h-[150px] w-full lg:w-[50%]  lg:ml-12 '>
          <h2 className='font-bold lg:text-2xl py-4 ml-2'>Tipos de actividades (GENERAL)</h2>

          <Chart data={data} />

        </div>

        <img className='absolute bottom-5 right-2 opacity-40 hidden lg:inline' src='./img/Lucifer.png' alt="test-iamge" />


      </div>

    </section>
  )
}
