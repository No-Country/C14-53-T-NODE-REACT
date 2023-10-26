import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
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
<div className="p-4 mt-20 relative z-20">
  <div className="mb-3 flex justify-between">
    <div className="ml-8 text-center pr-3 rounded-2xl shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]">
      <div className="md:w-[270px] h-[500px] p-5 overflow-auto">
        <p className="mb-5 p-3 text-xl font-bold font-montserrat">Tus Mascotas</p>
        <div className="grid gap-7">
          <PetAvatar img="./img/Chucky.png" name="Chucky"></PetAvatar>
          <PetAvatar img="./img/Darth_Vader.png" name="Darth Vader"></PetAvatar>
          <PetAvatar img="./img/Lucifer.png" name="Lucifer"></PetAvatar>
          <PetAvatar img="./img/Juan.png" name="Juan"></PetAvatar>
        </div>
      </div>
    </div>
    <div className="w-4/6 mx-20 text-center">
      <div className="p-7 md:px-10 rounded-2xl overflow-hidden h-[500px] shadow-[0_0_38px_0_rgba(0,0,0,0.25)] bg-[#F6F3E9]">
        <div className="h-[450px] p-4">
          <Calendar
            localizer={localizer}
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