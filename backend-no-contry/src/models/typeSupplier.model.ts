import { Sequelize, DataTypes, Model } from "sequelize";
import { connectDB } from '../config/dbConfig'
import { TypeSupplierSchemaType } from "../interfaces/typeSupplierSchema";

interface TypeSupplierModel extends Model, TypeSupplierSchemaType { }

export const TypeSupplier = connectDB.define<TypeSupplierModel>('typeSupplier',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    typeSupplier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // paranoid: true,
    // deletedAt: 'eliminadoEn',
    timestamps: false,
  }
)
