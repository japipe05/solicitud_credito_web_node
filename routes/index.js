import  { Router } from "express";

const solicitudRouter = Router();

solicitudRouter.get('/home', (req, res) =>{
    res.render('home');
});
solicitudRouter.get('/solicitudotp', (req, res) =>{
    res.render('solicitudotp');
});

export default solicitudRouter;


