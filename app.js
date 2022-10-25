console.clear();
import express from "express";
import favicon from 'serve-favicon';
import dotenv from 'dotenv';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import indexRouter from './routes/index.js';
import path from "path";


//import bodyParser from 'body-parser';


dotenv.config();

const   PORT = process.env.PORT || 3000;
const SolicitudCreditoApp = express();
const __dirname = dirname(fileURLToPath(import.meta.url))
// Returns a middleware to serve favicon
SolicitudCreditoApp.use(favicon(__dirname+'/public/Img/favicon.ico'));

console.log(__dirname+'/public/Img/favicon.ico');
//motor de plantillas
SolicitudCreditoApp.set('view engine', 'ejs');
SolicitudCreditoApp.set('views', __dirname + '/views'),


SolicitudCreditoApp.use(indexRouter);

//puerto de escucha
SolicitudCreditoApp.listen(PORT,()=>
    console.log(`Servidor levantado en el puero ${PORT}`)
);
