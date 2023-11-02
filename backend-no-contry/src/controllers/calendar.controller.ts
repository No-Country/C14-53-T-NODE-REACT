import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { createEvent, findAllEvent } from "../services/calendar.services";
import { RequestExtends } from "../interfaces/reqExtends.interface";
import Pet from "../models/petModel";

const getCalendar = async (req: Request, res: Response) => {

  const { petId } = req.params;

  try {
    const getAllEvent = await findAllEvent(petId);
    return res.status(200).json(getAllEvent);
  } catch (error) {
    handleHttp(res, "Error al obtener los eventos", error)
  }
}

const createEventCalendar = async (req: RequestExtends, res: Response) => {
  try {
    const newEventCalendar = await createEvent(req.body)
    return res.status(200).json(newEventCalendar);
  } catch (error) {
    handleHttp(res, "Error al registrar el evento", error)
  }
}

export { createEventCalendar, getCalendar }
