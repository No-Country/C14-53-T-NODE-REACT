import { Model, DataTypes } from 'sequelize';
import { connectDB } from '../config/dbConfig';
import Pet from './petModel';
import { MedicalInterface } from '../interfaces/medical.interface';

interface MedicalModel extends Model, MedicalInterface { }

export const MedicalRecord = connectDB.define<MedicalModel>('MedicalRecord',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    treatment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    petMedicalId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Pet,
        key: 'id'
      }
    }
  },
  {
    timestamps: false,
  }
)


