import { Router } from "express";
import { createEventCalendar, getCalendar } from "../controllers/calendar.controller";
import { checkJWT } from "../middleware/session.middleware";

const router = Router();

router.get("/:petId", checkJWT, getCalendar)
router.post("/", checkJWT, createEventCalendar)
//router.get("/redirect", getCalendarRedirect)
//router.post("/schedule_event/:id", getSchedulEvent)

export default router;
