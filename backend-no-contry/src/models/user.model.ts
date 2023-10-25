import { Model, DataTypes } from 'sequelize'
import { connectDB } from '../config/dbConfig'
import { UserInterface, UserRole } from '../interfaces/user.interface'
import Pet from './petModel'

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

User.hasMany(Pet, { foreignKey: 'userId' })
Pet.belongsTo(User, { foreignKey: 'userId' })

export default User 