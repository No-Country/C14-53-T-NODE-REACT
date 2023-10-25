import { Sequelize, DataTypes, UUIDV4, Model } from "sequelize";
import { connectDB } from '../config/dbConfig'
import { SupplierSchemaType } from '../interfaces/supplierSchema'


interface SupplierModel extends Model, SupplierSchemaType { }

export const Supplier = connectDB.define<SupplierModel>('Supplier',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },
    {
        // paranoid: true,
        // deletedAt: 'eliminadoEn',
        timestamps: false,
    }
)



