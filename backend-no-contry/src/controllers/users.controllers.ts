import { Request, Response } from "express";
import { findAll, findById, deleteByID, updateById } from "../services/users.services";
import { UserInterface } from "../interfaces/user.interface";
import { handleHttp } from "../utils/error.handle";
import { CreateUserDTO } from "../dto/createUser.dto";


const createUser = async (req: Request, res: Response): Promise<UserInterface> => {

  try {
    const body: CreateUserDTO = req.body
    const user: UserInterface = await createById(body)
    res.json(user)
  } catch (error) {
    handleHttp(res, 'Error obteniendo un usuario', error)
  }

}


const updateUserById = async (req: Request, res: Response): Promise<UserInterface | { msg: string } | void> => {

  try {
    const { id } = req.params
    const body = req.body
    const user = await updateById(id, body)
    res.json(user)
  } catch (error) {
    handleHttp(res, 'Error actualizando un usuario', error)
  }

}

const deleteUserById = async (req: Request, res: Response): Promise<{ msg: string } | void> => {

  try {
    const { id } = req.params
    const user = await deleteByID(id)
    res.json(user)
  } catch (error) {
    handleHttp(res, 'Error eliminando un usuario', error)
  }

}

export { getUserById, updateUserById, deleteUserById, getAllUser }