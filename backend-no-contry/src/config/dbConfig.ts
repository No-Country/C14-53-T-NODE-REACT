require('dotenv').config()
import { Sequelize } from 'sequelize';


const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;


if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_PORT || !DB_NAME) {
  throw new Error('Falta variable de entorno para la conexión a la base de datos.');
}

const connectDB = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, { logging: false, dialect: 'postgres' })

// import User from '../models/user.model'
// import Pet from  '../models/petModel'
// User.hasMany(Pet)
// Pet.belongsTo(User)



export { connectDB }

