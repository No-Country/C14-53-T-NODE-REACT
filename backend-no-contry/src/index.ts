import { app } from './app';
import { connectDB } from "./config/dbConfig";
// import { syncModel } from './models/user.model';
// import { syncModelPet} from './models/petModel';
import { syncModelTypeSupplier} from './models/typeSupplier.model'
import {syncModelSupplie} from './models/Supplier.model'
import {syncModelMedicalRecord} from './models/medicalRecord.model'
// import { syncModel } from './utils/syncModel';

const PORT_SERVER: number = parseInt(process.env.PORT_SERVER || "")
const PORT_SECUNDARY: number = 4000

const PORT: number = PORT_SERVER || PORT_SECUNDARY

connectDB
  .authenticate()
  .then(() => {
    console.log("Conexion exitosa con la base de datos");
    // syncModel(),
    // syncModelPet(),
    syncModelTypeSupplier(),
    syncModelSupplie(),
    syncModelMedicalRecord(),
    app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))
  })
  .catch((error: any) => {
    console.error('No se pudo conectar a la base de datos:', error);
  })
