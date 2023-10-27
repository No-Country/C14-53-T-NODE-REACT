import { Sequelize, DataTypes, UUIDV4, Model } from "sequelize";
import { connectDB } from '../config/dbConfig'
import { PetSchemaType } from "../interfaces/petSchema";
import User from "./user.model";
import Calendar from "./calendar.model";
import { MedicalRecord } from "./medicalRecord.model";

interface PetModel extends Model, PetSchemaType { }

const Pet = connectDB.define<PetModel>('Pet',
    {
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
            type: DataTypes.STRING,
            allowNull: false,
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descriptions: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
    },
    {
        paranoid: true,
        deletedAt: 'eliminadoEn',
        timestamps: false,
    }
)

Pet.hasMany(Calendar, { foreignKey: 'petId' })
Calendar.belongsTo(Pet, { foreignKey: 'petId' })

Pet.hasMany(MedicalRecord, { foreignKey: 'petMedicalId' })
MedicalRecord.belongsTo(Pet, { foreignKey: 'petMedicalId' })

export default Pet