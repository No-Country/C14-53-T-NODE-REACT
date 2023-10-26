import { AuthInterface } from "../interfaces/auth.interface"
import { UserInterface } from "../interfaces/user.interface"
import User from "../models/user.model"
import { encrypt, verified } from "../utils/hash.handle"
import { generateToken } from "../utils/jwt.handle"

export interface UserResponse extends Omit<UserInterface, 'password'> {
  token: string;
}


const registerService = async (bodyAuth: UserInterface): Promise<UserResponse | { msg: string }> => {


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


  if (!newUser) return { msg: "Error al crear el usuario" }

  // Crear el token
  const token = await generateToken(newUser.id)

  const data = {
    token,
    id: newUser.id,
    name: newUser.name,
    dni: newUser.dni,
    email: newUser.email,

  }

  return data

}


const loginService = async (bodyAuth: AuthInterface): Promise<AuthInterface | { token: string, user: string } | string> => {

  // Valido si el email es valido
  const findUser = await User.findOne({ where: { email: bodyAuth.email } })
  if (!findUser) return "Datos inválidos"

  // Valido si la contraseña es valida
  const isCorrect = await verified(bodyAuth.password, findUser.password)

  // Valido si los datos email y contraseña son validos
  if (!isCorrect) return "Datos inválidos"

  const token = await generateToken(findUser.id)

  const data = {
    token,
    user: findUser.email
  }

  return data


}

export { registerService, loginService }