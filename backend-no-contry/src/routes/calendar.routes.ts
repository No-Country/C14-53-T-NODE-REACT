import { Router } from "express";
import { getCalendar, getCalendarRedirect, getSchedulEvent } from "../controllers/calendar.controller";

const router = Router();

router.get("/", getCalendar)
router.get("/redirect", getCalendarRedirect)
router.post("/schedule_event/:id", getSchedulEvent)

export default router;