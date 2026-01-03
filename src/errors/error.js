export class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = true
  }
}

export class BadRequestError extends AppError {
  constructor(message='Solicitud Inválida') {
    super(message, 400)
  }
}

export class UnauthorizationError extends AppError {
  constructor(message='No autorizado') {
    super(message, 401)
  }
}

export class NotFoundError extends AppError {
  constructor(message='Recurso no encontrado') {
    super(message, 404)
  }
}

export class ConflicError extends AppError {
  constructor(message='Conflicto de datos') {
    super(message, 409)
  }
}