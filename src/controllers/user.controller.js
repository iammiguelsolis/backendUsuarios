import userService from "../services/user.service.js";

export default class userController {

  static async getAll (req, res, next) {
    try {
      const response = await userService.getAll()

      res.status(200).json({
        status: 'Ok',
        message:'Usuarios encontrados',
        data: response
      })
    } catch (error) {
      next(error)
    }
  }

  static async findById (req, res, next) {
    try {
      const {id} = req.params

      const response = await userService.findById(Number(id))

      res.status(200).json({
        status: 'Ok',
        message:'Usuario encontrado',
        data: response
      })
    } catch (error) {
      next(error)
    }
  }

  static async create (req, res, next) {
    try {
      const response = await userService.create(req.body)

      res.status(201).json({
        status: 'Ok',
        message:'Usuario creado',
        data: response
      })
    } catch (error) {
      next(error)
    }
  }

  static async update (req, res, next) {
    try {
      const {id} = req.params

      const response = await userService.update(req.body, Number(id))

      res.status(200).json({
        status: 'Ok',
        message:'Usario actualizado',
        data: response
      })
    } catch (error) {
      next(error)
    }
  }

  static async delete (req, res, next) {
    try {
      const {id} = req.params

      const response = await userService.delete(Number(id))

      res.status(200).json({
        status: 'Ok',
        message:'Usuario eliminado'
      })
    } catch (error) {
      next(error)
    }
  }

}