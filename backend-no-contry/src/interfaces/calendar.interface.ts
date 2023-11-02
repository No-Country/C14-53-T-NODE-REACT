
import { PetInterface } from "./pet.interface";
import { UserInterface } from "./user.interface";

export interface CalendarInterface extends UserInterface, PetInterface {
  id: string;
  htmlLink: string;
  summary: string;
  description: string;
  start: { dateTime: string };
  time: string;

}
