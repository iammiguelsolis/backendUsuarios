import express from 'express'
import userController from '../controllers/user.controller.js'
import { createUserSchema, updateUserSchema } from '../schemas/user.schema.js'
import { validate } from '../middlewares/validate.middlewar.js'

const app = express.Router()

app.get('/', userController.getAll)
app.get('/:id', userController.findById)
app.post('/', validate(createUserSchema),userController.create)
app.patch('/:id', validate(updateUserSchema),userController.update)
app.delete('/:id', userController.delete)

export default app