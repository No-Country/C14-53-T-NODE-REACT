import { DataTypes, Model } from "sequelize";
import { connectDB } from "../config/dbConfig";
import { PetSchemaType } from "../interfaces/petSchema";
import User from "./user.model";


interface PetModel extends Model, PetSchemaType { }

const Pet = connectDB.define<PetModel>('Pet',
    {
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
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
    }
)

export default Pet