import Joi from 'joi'

export const createUserSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.empty': 'El nombre no puede estar vacio',
    'string.min': 'El nombre debe tener más de 3 caracteres',
    'any.required': 'El nombre es obligatorio'
  }),

  email: Joi.string().email().required().messages({
    'string.empty': 'El email no puede estar vacio',
    'string.email': 'Email no válido',
    'any.required': 'El email es obligatorio'
  }),

  role: Joi.string().valid('admin', 'user').default('user').messages({
    'any.only': "El role debe ser o 'admin' o 'user'",
  }),
})

export const updateUserSchema = createUserSchema.fork(
  ['name', 'email', 'role'],
  (field) => field.optional()
)