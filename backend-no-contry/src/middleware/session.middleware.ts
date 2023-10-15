import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handle";
import { RequestExtends } from "../interfaces/reqExtends.interface";

const checkJWT = (req: RequestExtends, res: Response, next: NextFunction) => {

  try {

    // Obtener el jwt que genera el usuario
    const jwtByUser = req.headers.authorization || '';

    if (!jwtByUser) {
      res.status(400).send("No se recibió el token");
      return;
    }

    // Separo el Bearer y el token solo devuelvo el token
    const jwt = jwtByUser.split(' ').pop()

    if (!jwt) {
      res.status(400).send("Token no proporcionado");
      return;
    }

    const validUser = verifyToken(`${jwt}`)

    console.log(validUser);

    if (!validUser) {
      res.status(400).send("Token no válido");
    } else {
      req.user = validUser
      next();
    }

  } catch (error) {
    res.status(400)
    res.send('Sesión no valida')
  }

}

export { checkJWT }