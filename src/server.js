import express from 'express'
import { errorHandler } from './middlewares/errorHanlder.middlewar.js'
import userRouters from './routes/user.routes.js'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(cors())   
app.use(express.json())
app.use(morgan('dev'))

app.use('/user', userRouters)

app.get('/', (req, res) => {
  res.status(200).json({
    message:'Bienvenido a mi API :D',
    version: 'v1'
  })
})

app.use(errorHandler)

app.use((req, res) => {
  res.status(404).json({
    error: `Ruta no encontrada: ${req.originalUrl}`
  })
})

export default app
