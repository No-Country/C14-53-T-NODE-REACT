import { deleteImage, uploadImageBuffer } from '../config/cloudinary'
import { CreateUserDTO } from '../dto/createUser.dto'
import { UserInterface } from '../interfaces/user.interface'
import User from '../models/user.model'


// // Crear usuario
// const createById = async (user: CreateUserDTO): Promise<UserInterface> => {
//   const { name, email, password } = user
//   const saveUser = await User.create({
//     name,
//     email,
//     password
//   })
//   return saveUser
// }

// Buscar todos los usuarios
const findAll = async (): Promise<UserInterface[]> => {
  const users = await User.findAll()
  return users
}

// Buscar usuario por id
const findById = async (id: string): Promise<UserInterface | { msg: string }> => {
  const user = await User.findOne({ where: { id: id } })
  if (!user) {
    return { msg: "Usuario no encontrado" }
  }
  return user
}


const updateById = async (id: string, user: CreateUserDTO): Promise<UserInterface | { msg: string }> => {
  const findUser = await User.findOne({ where: { id: id } })

  if (!findUser) {
    return { msg: "Usuario no encontrado" }
  }

  const { email, password, name } = user

  const updateUser = await User.update({ email, password, name }, { where: { id: id } })

  if (!updateUser) {
    return { msg: "Error al actualizar el usuario" }
  }

  const newUpdateUser = await User.findOne({ where: { id: id } })

  if (!newUpdateUser) {
    return { msg: "Error al buscar el usuario" }
  }

  return newUpdateUser

}


const deleteByID = async (id: string): Promise<{ msg: string }> => {
  const findUser = await User.findOne({ where: { id: id } })
  if (!findUser) {
    return { msg: "Usuario no encontrado" }
  }

  const deleteUser = await User.destroy({ where: { id: id } })

  if (!deleteUser) {
    return { msg: "Error al eliminar el usuario" }
  }

  return { msg: "Usuario eliminado correctamente" }

}


const userImageChange = async  (id: string, buffer: Buffer): Promise<{ secureUrl: string; publicId: string } | { msg: string } > => {

    const findUser  = await User.findOne({ where: { id: id } })
    if (!findUser) return { msg: "Usuario no encontrado" }
   
    if (findUser.publicId) await deleteImage(findUser.publicId)

    const userImage = await uploadImageBuffer(buffer)

    await User.update(
       {
         image: userImage.secureUrl,
         publicId: userImage.publicId
       },
       { where: { id: id} }
    )
  
    return {
      secureUrl: userImage.secureUrl,
      publicId: userImage.publicId
    };   
    
}

export { 
  findAll, 
  findById, 
  updateById, 
  deleteByID, 
  userImageChange 
}