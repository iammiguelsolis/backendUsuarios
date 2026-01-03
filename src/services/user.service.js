import userRepository from "../repository/user.repository.js";
import { NotFoundError, ConflicError, BadRequestError } from "../errors/error.js";

export default class userService {

  static async getAll () {
    const users = await userRepository.getAll()

    if(users.length === 0) throw new NotFoundError('Usuarios no encontrados')

    return users
  }

  static async findById (id) {
    const user = await userRepository.findById(id)

    if(!user) throw new NotFoundError('Usuario no encontrado')
      
    return user
  }

  static async create (data) {
    const newUser = await userRepository.create(data)

    if(!newUser) throw new ConflicError()

    return newUser
  }

  static async update (data, id) {
    const updateUser = await userRepository.update(data, id)

    if(!updateUser) throw new ConflicError()
    
    return updateUser
  }

  static async delete (id) {
    const isDelete = await userRepository.delete(id)

    if (!isDelete) throw new BadRequestError('No se puedo eliminar')

    return isDelete
  }
}