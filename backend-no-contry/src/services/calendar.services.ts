import { CreateEventDTO } from "../dto/createEvent.dto";
import Calendar from "../models/calendar.model";

const createEvent = async ({ htmlLink, description, summary, end, start, petId }: CreateEventDTO) => {

  const newEvent = await Calendar.create({
    htmlLink,
    summary,
    description,
    start,
    end,
    petId
  })

  return newEvent

}

export { createEvent }