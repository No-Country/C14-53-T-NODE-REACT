import { NextFunction, Response } from "express"
import { RequestExtends } from "../interfaces/reqExtends.interface"
import User from "../models/user.model";
import { UserRole } from "../interfaces/user.interface";


const validateUser = async (req: RequestExtends, res: Response, next: NextFunction) => {

  try {
    if (typeof req.user === 'object' && req.user !== null) {

      // Acceder a la propiedad 'id' si es un objeto

      const idUser = req.user.id

      const idParams = req.params.id;

      // solo hay throw new Error cuando el idUser y el idParam no existen y no coincide, y sin importar el rol se ejecuta el next()

      const findUser = await User.findOne({ where: { id: idUser } })

      if (!findUser) {
        return res.status(401).json({ msg: "No tienes permisos para acceder a esta ruta findUser" });
      }

      if (findUser.role === UserRole.ADMIN) {
        next()
      } else if (findUser.role === UserRole.SUPER_ADMIN || findUser.role === UserRole.USER) {
        if (findUser.role === UserRole.SUPER_ADMIN) { //si es super admin
          const userParams = await User.findOne({ where: { id: idParams } })
          if (userParams?.role === UserRole.USER) { // me fijo si es user?
            next()
          } else if (idUser !== idParams) {
            return res.status(401).json({ msg: "No tienes permisos para acceder a esta ruta" });
          } else {
            next()
          }
        } else if (idUser === idParams) {
          next()

        } else {
          return res.status(401).json({ msg: "No tienes permisos para acceder a esta ruta" });
        }
      } else {
        return res.status(401).json({ msg: "Usuario desconocido" });
      }
    } else {
      return res.status(401).json({ msg: "No tienes permisos para acceder a esta ruta" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor" });
  }

}

export { validateUser }


// const validateUser = async (req: RequestExtends, res: Response, next: NextFunction) => {

//   try {
//     if (typeof req.user === 'object' && req.user !== null) {

//       // Acceder a la propiedad 'id' si es un objeto

//       const idUser = req.user.id

//       const idParams = req.params.id;

//       const findUser = await User.findOne({ where: { id: idUser } })
//       const userParams = await User.findOne({ where: { id: idParams } })

//       if (!findUser && !userParams && idUser !== idParams) {
//         return res.status(401).json({ msg: "No tienes permisos para acceder a esta ruta" });
//       }
    
//     } 

//       next()
       
//   } catch (error) {
//     res.status(500).json({ msg: "Error en el servidor" });
//   }

// }

// export { validateUser }