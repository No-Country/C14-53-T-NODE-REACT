import Calendar from "../models/calendar.model";
import Pet from "../models/petModel";
import User from "../models/user.model";

const syncModel = async () => {
  try {
    await User.sync();
    await Pet.sync();
    await Calendar.sync()
    console.log('Modelos sincronizados correctamente con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar el modelos con la base de datos:', error);
  }
};

export { syncModel }