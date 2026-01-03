import Joi from 'joi'
import 'dotenv/config'

const envVars = {
  PORT: process.env.PORT
}

const schema = Joi.object({
  PORT: Joi.number().default(3000)
})  

const { error, value } = schema.validate(envVars, {
  abortEarly: false,
  allowUnknown: true
})

if (error) throw new Error(`Error al leer las variables de entorno ${error}`)

export default {
  PORT: value.PORT
}