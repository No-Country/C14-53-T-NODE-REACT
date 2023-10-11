import { app } from './app';
import { connetDB } from "./config/dbConfig";
import { syncModel } from './models/user.model';

const PORT_SERVER: number = parseInt(process.env.PORT_SERVER || "")
const PORT_SECUNDARY: number = 4000

const PORT: number = PORT_SERVER || PORT_SECUNDARY

connetDB
  .authenticate()
  .then(() => {
    console.log("Conexion exitosa con la base de datos");
    syncModel()
    app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))
  })
  .catch((error: any) => {
    console.error('No se pudo conectar a la base de datos:', error);
  })
