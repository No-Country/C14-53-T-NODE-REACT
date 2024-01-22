
import { PetInterface } from "./pet.interface";
import { UserInterface } from "./user.interface";

export interface CalendarInterface {
  id: string;
  htmlLink: string;
  summary: string;
  description: string;
  start: { dateTime: string };
  time: string;

}
