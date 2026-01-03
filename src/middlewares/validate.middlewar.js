import { BadRequestError } from "../errors/error.js";

export function validate (schema) {
  return (req, res, next) => {
    const {error, value} = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    })

    if(error) {
      const messages = error.details.map(e => e.message)

      throw new BadRequestError(messages.join(', '))
    }

    req.body = value

    next()
  }
}