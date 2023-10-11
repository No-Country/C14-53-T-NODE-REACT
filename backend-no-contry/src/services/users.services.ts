import { CreateUserDTO } from '../dto/createUser.dto'
import { UserInterface } from '../interfaces/user.interface'
import { User } from '../models/user.model'

// Crear usuario
const createById = async (user: CreateUserDTO) => {
  const { name, email, password } = user
  const saveUser = await User.create({
    name,
    email,
    password
  })
  return saveUser
}

// Buscar todos los usuarios
const findAll = async () => {
  const users = await User.findAll()
  return users
}

// Buscar usuario por id
const getById = async (id: string) => {
  const user = await User.findOne({ where: { id } })
  return user
}



const updateById = async (id: string, user: UserInterface) => { }
const deleteByID = async (id: string) => { }

export { findAll, getById, createById, updateById, deleteByID }