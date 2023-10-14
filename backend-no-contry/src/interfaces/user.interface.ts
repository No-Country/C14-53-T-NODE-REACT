import { AuthInterface } from "./auth.interface";

export interface UserInterface extends AuthInterface {
  id: string;
  name: string;
  dni: string;
}