import 'dotenv/config'
import express, { Express } from 'express';
import cors from 'cors'
import { router } from './routes';
import morgan from 'morgan';
import { connectDB } from './config/dbConfig'

const app: Express = express();

//Middlewares
app.use(morgan("dev"))
app.use(cors({
  origin: [
    'https://c14-53-t-node-react.vercel.app',
    'http://localhost:3001',
    '*'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

app.use('/api/v1', router)


export { app, connectDB }