import { AuthInterface } from "./auth.interface";

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  SUPER_ADMIN = "SUPER_ADMIN"
}

export interface UserInterface extends AuthInterface {
  id: string;
  name: string;
  dni: string;
  role: UserRole
}