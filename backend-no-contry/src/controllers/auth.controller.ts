import { Request, Response } from "express"
import { loginService, registerService } from "../services/auth.services"
import { UserInterface } from "../interfaces/user.interface"
import { handleHttp } from "../utils/error.handle"
import { AuthInterface } from "../interfaces/auth.interface"


const registerControler = async (req: Request, res: Response): Promise<UserInterface | void> => {
  console.log("Controller", req.body);
  try {
    const newUser = await registerService(req.body)
    res.send(newUser)
  } catch (error) {
    handleHttp(res, "Error registrar la autenticacion del usuario", error)
  }
}

const loginControler = async (req: Request, res: Response): Promise<AuthInterface | void> => {
  try {
    const { email, password } = req.body
    const validateUser: AuthInterface = { email, password }
    const loginUser = await loginService(validateUser)
    if (loginUser === "Datos inválidos") {
      res.status(403).json({ msg: "Datos inválidos" });
    } else {
      res.status(200).json(loginUser);
    }
  } catch (error) {
    handleHttp(res, "Error registrar la autenticacion del usuario", error)
  }
}

export { registerControler, loginControler }