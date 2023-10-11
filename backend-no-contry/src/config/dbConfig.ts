import { Sequelize } from 'sequelize';

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_PORT || !DB_NAME) {
  throw new Error('Faltan variables de entorno para la conexión a la base de datos.');
}

const connetDB = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, { logging: false })

//const connetDB = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, { host: DB_HOST, port: parseInt(DB_PORT, 10), dialect: 'postgres'});

export { connetDB }

