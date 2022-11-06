import  { Router } from "express";
import axios  from 'axios';
import dotenv from 'dotenv';
import alert from 'alert';
dotenv.config();
const solicitudRouter = Router();
let url = process.env.API_SEND_OTP;// 'http://localhost:8087/api/otp';
let urllog = process.env.API_VAL_LOGIN; //'http://localhost:8087/api/login'
let urlrad = process.env.API_VAL_RAD; //'http://localhost:8087/api/solicitud'

let gltocken = "";
let transactionArr = []
solicitudRouter.get('/home', (req, res) =>{
    res.render('home');
});

solicitudRouter.get('/solicitudotp', (req, res) =>{
    res.render('solicitudotp');
});

solicitudRouter.post('/solicitudotp', (req, res) =>{
    //console.log(req.body.name);
    let data = {
        username : req.body.username,
        correo: req.body.correo
    }
    axios.post(url,data).then(response =>{
        //console.log(response);
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
        datos="err";
    });
    
    //console.log(req.body.username);
    //console.log(req.body.password);
    if (!datos){
        gltocken=response.data;
        //console.log(gltocken);
        res.render('radicar');
    }else{
        res.render('login',{ success:'Err',correo:''});
    }
    
});

solicitudRouter.get('/radicar', (req, res) =>{
    res.render('validaradicado',{ correo:req.body.correo});
});

solicitudRouter.post('/radicar', (req, res) =>{
    let dtfechaExpedicion = new Date(req.body.fechaExpedicion);
    let dtfechaNacimiento = new Date(req.body.fechaNacimiento);
    let accesotocken = gltocken;
    //console.log(accesotocken.access_token);
    let config ={
        headers: { 
            Authorization: "Bearer "+accesotocken.access_token,
            'Content-Type': "application/json"        
        }
    }

    let data = {
        clienteDto: {
            tipoDocumento : req.body.tipoDocumento,
            numeroDocumento : req.body.numeroDocumento,
            fechaExpedicion : dtfechaExpedicion,
            nombre1 : req.body.nombre1,
            nombre2 : req.body.nombre2,
            apellido1 : req.body.apellido1,
            apellido2 : req.body.apellido2,
            genero : req.body.genero,
            fechaNacimiento : dtfechaNacimiento,
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
            gastos : req.body.gastos
        },
        valorSolicitado : req.body.valorSolicitado,
        plazo : req.body.plazo
    }

    axios.post(urlrad,data,config).then(response =>{
        console.log(config);
        console.log(data);
    });
    res.render('validaradicado',{ correo:req.body.correoElectronico});
});

export default solicitudRouter;



