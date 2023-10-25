import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers.authorization;
  const token = authorizationHeader && authorizationHeader.split(' ')[1];

  if (!JWT_SECRET) {
    return res.status(500).json({ msg: "JWT_SECRET no está definido en las variables de entorno" });
  }

  if (!token) return res.status(401).json({ message: "No hay token" });


  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.status(401).json({ message: "No autorizado" });
    (req as any).user = user;
    next();
  });
};
