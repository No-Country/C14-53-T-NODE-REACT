import { NextFunction, Response } from "express"
import { RequestExtends } from "../interfaces/reqExtends.interface"
import User from "../models/user.model";
import { UserRole } from "../interfaces/user.interface";


const adminProfile = async (req: RequestExtends, res: Response, next: NextFunction) => {

  try {
    if (typeof req.user === 'object' && req.user !== null) {
      // Acceder a la propiedad 'id' si es un objeto

      const { id } = req.user
      const findUser = await User.findOne({ where: { id: id } })

      if (findUser?.role !== UserRole.ADMIN && findUser?.role !== UserRole.SUPER_ADMIN) {
        return res.status(401).json({ msg: "No tienes permisos para acceder a esta ruta" });
      }

    }

    next();
  } catch (error) {
    console.error("Error en adminProfile:", error);
    res.status(500).json({ msg: "Error en el servidor" });
  }




}

export { adminProfile }