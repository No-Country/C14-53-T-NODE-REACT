import { Sequelize, Model, DataTypes } from 'sequelize'
import { connectDB } from '../config/dbConfig'
import { UserInterface, UserRole } from '../interfaces/user.interface'
import { Pet } from './petModel'

interface UserModel extends Model, UserInterface { }


const User = connectDB.define<UserModel>('User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(...Object.values(UserRole)),
      allowNull: false,
      defaultValue: UserRole.USER
    }
    ,
    email: {
      type: DataTypes.STRING,
      unique: true,
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

User.hasMany(Pet, { foreignKey: 'userId' }); // Establece la relación uno a muchos


const syncModel = async () => {
  try {
    await User.sync();
    console.log('Modelo de usuario sincronizado correctamente con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar el modelo de usuario con la base de datos:', error);
  }
};

export { User, syncModel }