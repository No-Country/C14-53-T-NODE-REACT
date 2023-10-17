import { Request, Response } from "express";
import { findAll, createById, deleteByID, getById, updateById } from "../services/users.services";
import { UserInterface } from "../interfaces/user.interface";
import { handleHttp } from "../utils/error.handle";
import { CreateUserDTO } from "../dto/createUser.dto";


const createUser = async (req: Request, res: Response): Promise<UserInterface> => {
  try {
    console.log(req.body)
    const body: CreateUserDTO = req.body
    const user: UserInterface = await createById(body)
    res.json(user)
    return user
  } catch (error) {
    handleHttp(res, 'Error creando un usuario')
    throw new Error('Error creando un usuario');
  }

}


const getAllUser = async (req: Request, res: Response): Promise<UserInterface[]> => {
  try {
    const users: UserInterface[] = await findAll()
    res.json(users)
    return users;
  } catch (error) {
    handleHttp(res, 'Error obteniendo los usuarios')
    throw new Error('Error obteniendo los usuarios')
  }

}

// const getUserById: Promise<UserInterface> = async (req: Request, res: Response) => {

//   try {
//     const { id } = req.params
//     const user: UserInterface = await usersServices.find(id)
//     res.json(user)
//   } catch (error) {
//     handleHttp(res, 'Error obteniendo un usuario')
//   }

// }



// const updateUserById: Promise<UserInterface> = async (req: Request, res: Response) => {

//   try {
//     const { id } = req.body
//     const body = req.body
//     const user: UserInterface = await usersServices.update(id, body)
//     res.json(user)
//   } catch (error) {
//     handleHttp(res, 'Error actualizando un usuario')
//   }

// }

// const deleteUserById: Promise<UserInterface> = async (req: Request, res: Response) => {

//   try {
//     const { id } = req.body
//     const user: UserInterface = await usersServices.delete(id)
//     res.json(user)
//   } catch (error) {
//     handleHttp(res, 'Error eliminando un usuario')
//   }

// }

export { getAllUser, createUser }