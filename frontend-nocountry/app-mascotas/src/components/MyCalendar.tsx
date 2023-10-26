import CustomCalendar from './CustomCalendar/CustomCalendar'

const MyCalendar = () => {
    const events = [
        {
          id: 1,
          title: 'Evento 1',
          start: new Date(2023, 9, 25, 10, 0),
          end: new Date(2023, 9, 25, 12, 0),
        },
      ]

  return (
    <div>
      <CustomCalendar events={events}/>  
    </div>
  )
}

export default MyCalendar