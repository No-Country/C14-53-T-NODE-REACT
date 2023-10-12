import { Request, Response } from "express";
import { findAll, createById, findById, deleteByID, updateById } from "../services/users.services";
import { UserInterface } from "../interfaces/user.interface";
import { handleHttp } from "../utils/error.handle";
import { CreateUserDTO } from "../dto/createUser.dto";


const createUser = async (req: Request, res: Response): Promise<UserInterface> => {

  try {
    const body: CreateUserDTO = req.body
    const user: UserInterface = await createById(body)
    res.json(user)
    return user
  } catch (error) {
    handleHttp(res, 'Error creando un usuario', error)
    throw new Error('Ocurrio un error creando un usuario')
  }

}


const getAllUser = async (req: Request, res: Response): Promise<UserInterface[]> => {
  try {
    const users: UserInterface[] = await findAll()
    res.json(users)
    return users;
  } catch (error) {
    handleHttp(res, 'Error obteniendo los usuarios', error)
    throw new Error('Ocurrio un error obteniendo los usuarios')
  }

}

const getUserById = async (req: Request, res: Response): Promise<UserInterface | { msg: string }> => {

  try {
    const { id } = req.params
    const user = await findById(id)
    res.json(user)
    return user
  } catch (error) {
    handleHttp(res, 'Error obteniendo un usuario', error)
    throw new Error('Ocurrio un error obteniendo un usuario')
  }

}


const updateUserById = async (req: Request, res: Response): Promise<UserInterface | { msg: string }> => {

  try {
    const { id } = req.params
    const body = req.body
    const user = await updateById(id, body)
    res.json(user)
    return user
  } catch (error) {
    handleHttp(res, 'Error actualizando un usuario', error)
    throw new Error('Ocurrio un error actualizando un usuario')
  }

}

const deleteUserById = async (req: Request, res: Response): Promise<{ msg: string }> => {

  try {
    const { id } = req.params
    const user = await deleteByID(id)
    res.json(user)
    return user
  } catch (error) {
    handleHttp(res, 'Error eliminando un usuario', error)
    throw new Error('Ocurrio un error eliminando un usuario')
  }

}

export { getAllUser, createUser, getUserById, updateUserById, deleteUserById }