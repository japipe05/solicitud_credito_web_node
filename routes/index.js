import  { Router } from "express";
import axios  from 'axios';
import dotenv from 'dotenv';
import alert from 'alert';
import jwt from 'jsonwebtoken';

dotenv.config();
const solicitudRouter = Router();
let url = process.env.API_SEND_OTP;// 'http://localhost:8087/api/otp';
let urllog = process.env.API_VAL_LOGIN; //'http://localhost:8087/api/login'
let urlrad = process.env.API_VAL_SOLICITED; //'http://localhost:8087/api/solicitud'
let token ='';

let transactionArr = []
solicitudRouter.get('/home', (req, res) =>{
    res.render('home');
});

solicitudRouter.get('/solicitudotp', (req, res) =>{
    res.render('solicitudotp');
});

solicitudRouter.post('/solicitudotp', (req, res) =>{
    console.log(req.body.name);
    let data = {
        username : req.body.username,
        correo: req.body.correo
    }
    axios.post(url,data).then(response =>{
        console.log(response);
    });
    
    res.render('login',{ success:'suc',correo:req.body.correo});
});

solicitudRouter.get('/login', (req, res) =>{
    res.render('login',{ success:'',correo:''});
});

solicitudRouter.post('/login', async (req, res) =>{
    let datos ="";
    let mensaje2 ="";
    const response = await axios.get(
        urllog,{
            params:{
                username: req.body.username,
                password: req.body.password
            }
        }
    )
    .catch((error) =>{
        console.log("error");
        datos="err";
    });
    
    console.log(req.body.username);
    console.log(req.body.password);
    if (!datos){
        console.log(response.data);
        token = response.data.access_token;
        res.render('radicar');
    }else{
        res.render('login',{ success:'err',correo:''});
    }
    
});

solicitudRouter.get('/radicar', (req, res) =>{
    res.render('validaradicado');
});

solicitudRouter.post('/radicar', (req, res) =>{
   /* console.log(req.body.tipoDocumento);
    console.log(req.body.numeroDocumento);
    console.log(req.body.fechaExpedicion);
    console.log(req.body.nombre1);
    console.log(req.body.nombre2);
    console.log(req.body.apellido1);
    console.log(req.body.apellido2);
    console.log(req.body.genero);
    console.log(req.body.fechaNacimiento);
    console.log(req.body.celular);
    console.log(req.body.correoElectronico);
    console.log(req.body.estadoCivil);
    console.log(req.body.tipoInmueble);
    console.log(req.body.tipoResidencia);
    console.log(req.body.tipoContrato);
    console.log(req.body.autorizaCentrales);
    console.log(req.body.salarioMensual);
    console.log(req.body.nivelEstudios);
    console.log(req.body.actividadEconomica);
    console.log(req.body.totalActivos);
    console.log(req.body.totalPasivos);
    console.log(req.body.valorSolicitado);
    console.log(req.body.gastos);
    console.log(req.body.plazo);*/

    console.log('head 1 : ' + req);
    let data = {
        tipoDocumento : req.body.tipoDocumento,
        numeroDocumento : req.body.numeroDocumento,
        fechaExpedicion : req.body.fechaExpedicion,
        nombre1 : req.body.nombre1,
        nombre2 : req.body.nombre2,
        apellido1 : req.body.apellido1,
        apellido2 : req.body.apellido2,
        genero : req.body.genero,
        fechaNacimiento : req.body.fechaNacimiento,
        celular : req.body.celular,
        correoElectronico : req.body.correoElectronico,
        estadoCivil : req.body.estadoCivil,
        tipoInmueble : req.body.tipoInmueble,
        tipoResidencia : req.body.tipoResidencia,
        tipoContrato : req.body.tipoContrato,
        autorizaCentrales : req.body.autorizaCentrales,
        salarioMensual : req.body.salarioMensual,
        nivelEstudios : req.body.nivelEstudios,
        actividadEconomica : req.body.actividadEconomica,
        totalActivos : req.body.totalActivos,
        totalPasivos : req.body.totalPasivos,
        valorSolicitado : req.body.valorSolicitado,
        gastos : req.body.gastos,
        plazo : req.body.plazo
    }
    console.log(data);
     const config = {
         headers: { Authorization: 'Bearer '+ token }
     };
    axios.post(urlrad,data,config).then(response =>{
        console.log(response);
    });
    
    res.render('validaradicado');
});

export default solicitudRouter;



