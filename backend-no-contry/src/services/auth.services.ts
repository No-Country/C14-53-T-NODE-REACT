import { AuthInterface } from "../interfaces/auth.interface"
import { UserInterface } from "../interfaces/user.interface"
import { User } from "../models/user.model"
import { encrypt, verified } from "../utils/hash.handle"


const registerService = async (bodyAuth: UserInterface): Promise<UserInterface | { msg: string }> => {

  const findUser = await User.findOne({ where: { email: bodyAuth.email } })

  if (findUser) return { msg: "Usuario ya existe" }

  const { email, password, dni, name } = bodyAuth

  // Encriptar la contraseña
  const passHash = await encrypt(password)

  const newUser = await User.create({
    name,
    dni,
    email,
    password: passHash
  })

  return newUser

}


const loginService = async (bodyAuth: AuthInterface): Promise<AuthInterface | string> => {

  const findUser = await User.findOne({ where: { email: bodyAuth.email } })

  if (!findUser) return "Datos inválidos"

  // Valido si el email es valido
  const isCorrect = await verified(bodyAuth.password, findUser.password)

  // Valido si los datos email y contraseña son validos
  if (!isCorrect) return "Datos inválidos"

  return findUser


}

export { registerService, loginService }