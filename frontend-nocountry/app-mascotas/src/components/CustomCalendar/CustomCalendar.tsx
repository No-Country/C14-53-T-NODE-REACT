import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { PetAvatar } from '../Pets/PetAvatar';
import './CustomCalendar.css'

const localizer = momentLocalizer(moment);


interface Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
}


interface CustomCalendarProps {
  events: Event[];
}


const CustomCalendar: React.FC<CustomCalendarProps> = ({ events }) => {
  

 
  return (
<div className="p-4 mx-4 mt-16 md:mt-20 relative z-20 2xl:flex 2xl:justify-center">
  <div className="mb-3 md:flex md:justify-between 2xl:w-2/3 2xl:mt-40">
    <div className="text-center py-3 md:py-0 md:ml-3 lg:ml-8 md:pr-3 rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]">
      <div className="h-[150px] md:w-[180px] md:min-h-[500px] md:p-5 lg:min-w-[270px] 2xl:min-h-[700px] overflow-auto">
        <p className="text-[15px] my-2 md:mb-5 md:text-xl font-bold font-montserrat">Tus Mascotas</p>
        <div className="flex justify-center gap-3 md:gap-7 md:grid">
          <PetAvatar img="./img/Chucky.png" name="Chucky"></PetAvatar>
          <PetAvatar img="./img/Darth_Vader.png" name="Darth Vader"></PetAvatar>
          <PetAvatar img="./img/Lucifer.png" name="Lucifer"></PetAvatar>
          <PetAvatar img="./img/Juan.png" name="Juan"></PetAvatar>
        </div>
      </div>
    </div>
    <div className="md:w-4/6 my-4 md:my-0 md:mx-6 lg:mx-20">
      <div className="p-5 md:p-7 md:min-h-[500px] md:px-10 rounded-2xl overflow-hidden shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]">
        <div className="h-[300px] md:h-[400px] lg:h-[450px] 2xl:min-h-[700px]">
          <Calendar
            localizer={localizer}
            culture='es'
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ background: '#F6F3E9' }}
            views={['month', 'week', 'day']}
          />
        </div>
      </div>
    </div>
  </div>
</div>
  );
};


export default CustomCalendar;