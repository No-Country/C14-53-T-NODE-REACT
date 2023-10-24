import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
)

const scopes = [
  'https://www.googleapis.com/auth/calendar'
]

const calendar = google.calendar({
  version: 'v3',
  auth: process.env.API_KEY_CALENDAR
})



export { oauth2Client, scopes, calendar }