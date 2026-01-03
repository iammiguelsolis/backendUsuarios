export const errorHandler = (error, req, res, next) => {

  if(error.isOperational) {
    return res.status(error.statusCode).json({
      status: 'Error',
      message: error.message,
      code: error.statusCode
    })
  }

  return res.status(500).json({
    status: 'Error',
    message: 'Error interno en el servidor',
    code: 500
  })  

}