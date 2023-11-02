import { CreateEventDTO } from "../dto/createEvent.dto";
import Calendar from "../models/calendar.model";

const createEvent = async ({ description, summary, end, start, petId }: CreateEventDTO) => {

  const newEvent = await Calendar.create({
    summary,
    description,
    start,
    end,
    petId
  })

  return newEvent

}

const findAllEvent = async () => {
  const events = await Calendar.findAll()
  return events

}

export { createEvent, findAllEvent }