import { Sequelize, Model, DataTypes } from 'sequelize'
import { connetDB } from '../config/dbConfig'
import { UserInterface } from '../interfaces/user.interface'

interface UserModel extends Model, UserInterface { }

const User = connetDB.define<UserModel>('User',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  }
)

const syncModel = async () => {
  try {
    await User.sync();
    console.log('Modelo de usuario sincronizado correctamente con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar el modelo de usuario con la base de datos:', error);
  }
};

export { User, syncModel }