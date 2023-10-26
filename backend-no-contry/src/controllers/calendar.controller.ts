import { Request, Response } from "express"
import { calendar, oauth2Client, scopes } from "../config/calendarApi"
import dayjs from "dayjs"
import { createEvent } from "../services/calendar.services"
import { RequestExtends } from "../interfaces/reqExtends.interface"



const getCalendar = async (req: Request, res: Response) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes
  })

  res.redirect(url)
}

const getCalendarRedirect = async (req: Request, res: Response) => {
  const code = req.query.code as string;

  const { tokens } = await oauth2Client.getToken(code)
  oauth2Client.setCredentials(tokens)

  res.send({
    msg: "ok",
    oauth2Client
  })

}

const getSchedulEvent = async (req: RequestExtends, res: Response) => {

  try {

    const { summary, description, startDateTime, endDateTime } = req.body;

    const result = await calendar.events.insert({
      calendarId: 'primary',
      auth: oauth2Client,
      requestBody: {
        summary: summary,
        description: description || "",
        start: {
          dateTime: startDateTime,
          timeZone: "America/Bogota"
        },
        end: {
          dateTime: endDateTime,
          timeZone: "America/Bogota"
        }
      }
    })

    const supplierType = result.data.summary?.split('-')[0]


    const newEventCalendar = await createEvent({
      htmlLink: result.data.htmlLink!,
      summary: result.data.summary!,
      description: result.data.description!,
      start: result.data.start?.dateTime!,
      end: result.data.end?.dateTime!,
      petId: req.params.id,
    })


    res.send(newEventCalendar)

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Ha ocurrido un error al agregar el evento" });
  }


}

export { getCalendar, getCalendarRedirect, getSchedulEvent }