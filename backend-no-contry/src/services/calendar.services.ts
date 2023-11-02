import { CreateEventDTO } from "../dto/createEvent.dto";
import Calendar from "../models/calendar.model";

const createEvent = async ({ description, summary, time, start, petId }: CreateEventDTO) => {

  const newEvent = await Calendar.create({
    summary,
    description,
    start,
    time,
    petId
  })

  return newEvent

}

const findAllEvent = async () => {
  const events = await Calendar.findAll()
  return events

}

export { createEvent, findAllEvent }
