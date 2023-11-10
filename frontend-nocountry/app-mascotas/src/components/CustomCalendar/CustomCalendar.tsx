import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { PetAvatar } from '../Pets/PetAvatar'
import './CustomCalendar.css'
import { useGlobalStore } from '../../store/globalStore'
import { PetAvatarSkeleton } from '../skeletons/PetAvatarSkeleton'

const localizer = momentLocalizer(moment)

interface Event {
  id: number
  title: string
  start: Date
  end: Date
}

interface CustomCalendarProps {
  events: Event[]
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ events }) => {
  const MyPets = useGlobalStore(state => state.pets)

  return (
    <div className='relative z-20 p-4 h-screen  mx-4  2xl:my-0 2xl:flex 2xl:justify-center overflow-y-hidden '>


      <div className='mb-3 md:flex mt-14 md:mt-20 md:justify-between 2xl:w-full  2xl:justify-around  '>

        <div className='text-center   md:ml-3 lg:ml-8 2xl:ml-0 rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9] '>
          <div className='h-[150px] md:w-[180px] md:h-[500px] md:p-5 lg:w-[180px] xl:w-[220px] 2xl:h-full overflow-auto'>
            <p className='text-[15px] my-2 md:mb-5 md:text-xl font-bold font-montserrat'>Tus Mascotas</p>
            <div className='flex justify-center gap-3 md:gap-7 md:grid'>{MyPets ? MyPets?.slice(0, 6).map((pet: any, index: any) => <PetAvatar fn={null} key={index} img={pet.image} name={pet.name}></PetAvatar>) : <PetAvatarSkeleton />}</div>
          </div>
        </div>


        <div className='relative my-4 md:w-4/6 sacle  md:h-[90%] 2xl:w-[70vw]  md:my-0 md:mx-6 lg:mx-20 2xl:mx-0 2xl:p-12 lg:h-full  2xl:my-0 shadowbox containerbox 2xl:flex 2xl:items-center overflow-y-visible '>
          <h1 className="text-montserrat text-center text-lg ml-2 lg:ml-0 font-bold py-2 lg:absolute  lg:top-[-32px] lg:left-[-20px] lg:uppercase lg:text-4xl xl:text-5xl lg:font-black">Calendario</h1>
          <div className='h-[300px] md:h-[400px] p-4  lg:p-2 lg:h-[500px] 2xl:h-full 2xl:w-full '>
            <Calendar localizer={localizer} culture='es' events={events} startAccessor='start' endAccessor='end' style={{ background: '#F6F3E9' }} views={['month', 'week', 'day']} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomCalendar
