console.clear();
import express from "express";
import dotenv from 'dotenv';
import indexRouter from './routes/index.js';
import favicon  from'serve-favicon'
import path  from'path'
import {fileURLToPath} from 'url';
import  appConfig  from './config/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();


const SolicitudCreditoApp = express();
SolicitudCreditoApp.use(favicon(__dirname+ '/public/Img/favicon.ico'));
//utiliza mis archivos publicos
SolicitudCreditoApp.use(express.static('public'));
//motor de plantillas
SolicitudCreditoApp.set('view engine', 'ejs');
SolicitudCreditoApp.set('views', __dirname + '/views');

SolicitudCreditoApp.use(indexRouter);

//puerto de escucha
SolicitudCreditoApp.listen(appConfig.port,()=>
    console.log(`Servidor levantado en el puero http://localhost:${appConfig.port}/home`)
);
