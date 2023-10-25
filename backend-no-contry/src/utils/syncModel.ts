import Calendar from "../models/calendar.model";
import { MedicalRecord } from "../models/medicalRecord.model";
import Pet from "../models/petModel";
import User from "../models/user.model";

const syncModel = async () => {
  try {
    await User.sync({ force: true });
    await Pet.sync({ force: true });
    await Calendar.sync({ force: true })
    await MedicalRecord.sync({ force: true })
    console.log('Modelos sincronizados correctamente con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar el modelos con la base de datos:', error);
  }
};

export { syncModel }