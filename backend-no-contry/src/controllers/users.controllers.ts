import { Request, Response } from "express";
import UsersServices from "../services/users.services";

class UserControllers {

  private userService: UsersServices;

  constructor() {
    this.userService = new UsersServices();
  }

  async getAll(req: Request, res: Response) {
    const users = await this.userService.findAll();
    res.json(users);
  }

  async create(req: Request, res: Response) {
    const body = req.body
    console.log(body);
    res.json(await this.userService.create())
  }

  async getById(req: Request, res: Response) {
    res.send("Estas obteniendo un usuario")
  }

  async updateById(req: Request, res: Response) {
    res.send("Estas actualizando un usuario")
  }

  async deleteById(req: Request, res: Response) {
    res.send("Estas eliminando un usuario")
  }

}

export default UserControllers;