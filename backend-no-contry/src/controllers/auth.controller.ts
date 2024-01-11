import { Request, Response } from "express"
import { loginService, registerService } from "../services/auth.services"
import { UserInterface } from "../interfaces/user.interface"
import { handleHttp } from "../utils/error.handle"
import { AuthInterface } from "../interfaces/auth.interface"
import User from "../models/user.model"
import next from "next"
import { RequestExtends } from "../interfaces/reqExtends.interface"


const registerControler = async (req: Request, res: Response): Promise<UserInterface | void> => {
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

const profileUser = async (req: RequestExtends, res: Response): Promise<AuthInterface | void> => {
  const token = req.cookies.token

  if (typeof req.user === 'string') {
    res.status(401).json({ msg: "Token de usuario no válido" });
    return;
  }

  const id = req.user?.id

  try {
    const findUser = await User.findOne({ where: { id } })
    if (!findUser) {
      res.status(404).json({ msg: "Usuario no encontrado" });
    }
    res.cookie('token', token, {
      domain: 'c14-53-t-node-react.vercel.app',
      path: '/'
    })

    res.status(200).json({
      token,
      id: findUser?.id,
      email: findUser?.email,
      name: findUser?.name,
      dni: findUser?.dni,
      image: findUser?.image 
    })

  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }

}

const logoutUser = async (req: Request, res: Response) => {
  res.cookie('token', "", {
    expires: new Date(0)
  })
  res.status(200).json({ msg: "Sesion cerrada" })
}


export { registerControler, loginControler, profileUser, logoutUser }