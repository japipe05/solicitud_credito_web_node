console.clear();
import express from "express";
import dotenv from 'dotenv';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import indexRouter from './routes/index.js';

dotenv.config();

const   PORT = process.env.PORT || 3000;
const SolicitudCreditoApp = express();
const __dirname = dirname(fileURLToPath(import.meta.url))

//motor de plantillas
SolicitudCreditoApp.set('view engine', 'ejs');
SolicitudCreditoApp.set('views', __dirname + '/views'),

SolicitudCreditoApp.use(indexRouter);

SolicitudCreditoApp.listen(PORT,()=>
    console.log(`Servidor levantado en el puero ${PORT}`)
);
