import Calendar from "../models/calendar.model";
import { MedicalRecord } from "../models/medicalRecord.model";
import Pet from "../models/petModel";
import User from "../models/user.model";

const syncModel = async () => {
  try {
    await User.sync({ alter: true });
    await Pet.sync({ alter: true });
    await Calendar.sync({ alter: true })
    await MedicalRecord.sync({ alter: true })
    console.log('Modelos sincronizados correctamente con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar el modelos con la base de datos:', error);
  }
};

export { syncModel }