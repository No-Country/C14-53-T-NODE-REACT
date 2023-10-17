import { DataTypes, UUIDV4, Model } from "sequelize";
import { connectDB } from "../config/dbConfig";
import { PetSchemaType } from "../interfaces/petSchema";

interface PetModel extends Model, PetSchemaType { }

export const Pet = connectDB.define<PetModel>('Pet',
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
        birthdate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },

        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        paranoid: true,
        deletedAt: 'eliminadoEn',
        timestamps: false,
    })

