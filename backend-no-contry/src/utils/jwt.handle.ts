import { sign, verify, JwtPayload } from "jsonwebtoken";;

const JWT_SECRET: string = process.env.JWT_SECRET || "aca puede ir una clave generica"

const generateToken = async (id: string): Promise<string> => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn: "1d" })
  return jwt
}

const verifyToken = (jwt: string) => {
  const isValid = verify(jwt, JWT_SECRET)
  return isValid
}

export { generateToken, verifyToken }