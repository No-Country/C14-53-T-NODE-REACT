import { Sequelize, Model, DataTypes } from 'sequelize';
import { connectDB } from '../config/dbConfig';
import { MedicalSchemaType } from '../interfaces/medicalSchema';
import Pet from './petModel';

interface MedicalModel extends Model, MedicalSchemaType { }

export const MedicalRecord = connectDB.define<MedicalModel>('MedicalRecord',
  {
    id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
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


