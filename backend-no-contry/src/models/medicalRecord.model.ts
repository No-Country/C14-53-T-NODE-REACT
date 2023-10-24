import { connect } from 'http2';
import {Sequelize, Model, DataTypes } from 'sequelize';
import { connectDB } from '../config/dbConfig';
import { MedicalSchemaType } from '../interfaces/medicalSchema';

interface MedicalModel extends Model, MedicalSchemaType {}

export const MedicalRecord = connectDB.define<MedicalModel>('MedicalRecord',
{
    id: {
        type: DataTypes.INTEGER,
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
    }
},
{
        // paranoid: true,
        // deletedAt: 'eliminadoEn',
        timestamps: false,
}
)

export const syncModelMedicalRecord = async () => {
  try {
    await MedicalRecord.sync();
    console.log('Modelo de pet sincronizado correctamente con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar el modelo de usuario con la base de datos:', error);
  }
};


