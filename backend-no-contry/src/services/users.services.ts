class UsersServices {

  findAll() {
    return "Servicio para buscar usuarios";
  }

  async create() {
    return "Servicio para crear usuarios"
  }

  async find(id: number) {
    return "Servicio para buscar usuario"
  }

  async update(id: number) {
    return "Servicio para actualizar usuario"
  }

  async delete(id: number) {
    return "Servicio para eliminar usuario"
  }

}

export default UsersServices