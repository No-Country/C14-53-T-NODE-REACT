import 'dotenv/config'
import express, { Express } from 'express';
import cors from 'cors'
import { router } from './routes';
import morgan from 'morgan';
import { connetDB } from './config/dbConfig'

const app: Express = express();

//Middlewares
app.use(morgan("dev"))
app.use(cors());
app.use(express.json());

app.use('/api/v1', router)


export { app, connetDB }