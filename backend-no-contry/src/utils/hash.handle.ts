import { compare, hash } from 'bcryptjs'

const encrypt = async (password: string): Promise<string> => {

  const passwordHash = await hash(password, 10);

  return passwordHash

}

const verified = async (password: string, passHash: string): Promise<boolean> => {

  const isCorrect = await compare(password, passHash)

  return isCorrect

}

export { encrypt, verified }
