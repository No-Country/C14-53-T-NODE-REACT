import { CreateEventDTO } from "../dto/createEvent.dto";
import Calendar from "../models/calendar.model";

const createEvent = async ({ htmlLink, description, summary, end, start }: CreateEventDTO) => {

  const newEvent = await Calendar.create({
    htmlLink,
    summary,
    description,
    start,
    end
  })

  return newEvent

}

export { createEvent }