import  { Router } from "express";
import axios  from 'axios';
const solicitudRouter = Router();
let url = 'http://localhost:8087/api/otp';
let transactionArr = []
solicitudRouter.get('/home', (req, res) =>{
    res.render('home');
});

solicitudRouter.get('/solicitudotp', (req, res) =>{
    res.render('solicitudotp');
});

solicitudRouter.post('/solicitudotp', (req, res) =>{

    let data = {
        username : req.body.username,
        correo: req.body.correo
    }
    
    axios.post(url,data).then(response =>{
        console.log(response);
    });


    res.render('solicitudotp');
});

solicitudRouter.get('/login', (req, res) =>{
    res.render('login');
});

solicitudRouter.get('/radicar', (req, res) =>{
    res.render('radicar');
});

solicitudRouter.get('/validaradicado', (req, res) =>{
    res.render('validaradicado');
});
/*
solicitudRouter.post('/solicitud', (req, res) =>{
    //res.send("CREADO");

    let body = '';

    req.on('data', chunk => {body += chunk;});
    req.on('end', () =>{
        res.writeHead(200, {'content-Type': 'text/html'});
        res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Otp generado</title>
            <!-- Estilos -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
        </head>
        <body>
            <h1>
            datos recibidos
            </h1>
            <p>${body}</p>
        </body>
        </html>`);
        //res.render('home');
    })
});
*/
export default solicitudRouter;



