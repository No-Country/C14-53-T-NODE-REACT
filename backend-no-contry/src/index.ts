import { app } from './app';
import { connectDB } from "./config/dbConfig";
import { syncModel } from './utils/syncModel';

const PORT_SERVER: number = parseInt(process.env.PORT_SERVER || "")
const PORT_SECUNDARY: number = 4000

const PORT: number = PORT_SERVER || PORT_SECUNDARY

connectDB
  .authenticate()
  .then(() => {
    console.log("Conexion exitosa con la base de datos");
    syncModel()
    app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))
  })
  .catch((error: any) => {
    console.error('No se pudo conectar a la base de datos:', error);
  })
