import app from './server.js'
import config from '../config.js'

const {PORT} = config

async function startServer() {

  try {

    //testear conexión

    app.listen(PORT, () => {
      console.log('--------------------------------------------------')
      console.log(`Servidor de Express escuchando el puerto ${PORT}`)
      console.log(`http://localhost:${PORT}`)
      console.log('--------------------------------------------------')
    })

  } catch (error) {
    console.error(`Error al iniciar el servidor: ${error.message}`)
    process.exit(1)
  }
  
}

startServer()