# solicitud_credito_web_node
 #vesrsion de node
 v18.9.0
 
#Crear un proyecto en Node
> npm init -y

#modulo para ejecutar el servidor y guarde
> npm i nodemon -D

#Crear servidores 
express crear un servidor recibir petisiones
handlebars motord de palnatilla para el html 
morgan respuestas para la petision 
> npm i express express-handlebars morgan

#modulo para ejecutar el servidor y guarde
> npm i nodemon -D
> npm run dev # guarda automaticamnete

#dependencias leer archivos .env 
>npm i dotenv

#para las view
> npm i ejs  


http://localhost:8088/solicitud


#para los ico
npm install express serve-favicon#

#particles 
>npm install particlesjs --save

#estas son las dependencias utilizadas 
  "axios": "^1.1.3",
    "dotenv": "^16.0.3",
    "ejs": "^3.1.8",
    "express": "^4.18.2",
    "express-handlebars": "^6.0.6",
    "express-validator": "^6.14.2",
    "morgan": "^1.10.0",
    "particlesjs": "^2.2.3",
    "serve-favicon": "^2.5.0"
{
    "clienteDto" : {
        "tipoDocumento": "CC",
        "numeroDocumento": 123456789,
        "fechaExpedicion": "2017-12-27T00:00:00.000+00:00",
        "nombre1": "nombre1",
        "nombre2": "nombre2",
        "apellido1": "apellido1",
        "apellido2": "apellido2",
        "celular": 31012345656375,
        "correoElectronico": "correo@correo.com",
        "salarioMensual": 5000000.0,
        "fechaNacimiento": "2017-12-27T00:00:00.000+00:00",
        "totalActivos": 20000000.0,
        "totalPasivos": 20000000.0,
        "autorizaCentrales": "S",
        "genero": "X",
        "tipoResidencia": "F",
        "actividadEconomica": 2,
        "tipoContrato": "I",
        "nivelEstudios": "U",
        "tipoInmueble": "A",
        "estadoCivil": "C"
    },
    "valorSolicitado": 50000000,
    "tasaCalculada":1.0189583333333334,
    "cuotaCalculada": 1402351.1
}
http://localhost:8085/solicitud/radicar


{
            "tipoDocumento": "CC",
            "numeroDocumento": 12345678,
            "fechaExpedicion": "2017-12-27T00:00:00.000+00:00",
            "fechaNacimiento": "2017-12-27T00:00:00.000+00:00",
            "aprobadoCentral": "N",
            "salarioMensual": 8000000,
            "salarioAportes": 1450000,
            "valorSolicitado": 50000000,
            "plazo": 60,
            "numeroSolicitud": "a4845166-668b-40fe-8428-3173e429de08",
            "gastos": 600000
   }

   http://localhost:8089/api/motor

   Authorization
   Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODcvYXBpL2xvZ2luIiwiZXhwIjoxNjUzMzQ5Mzg3fQ.lR66BZU903GSt6a3QP8_3wMP6fR-0DTa_3gjLfYpCdE
   Content-Type
   application/json
   http://localhost:8087/api/solicitud





   {
  "clienteDto": {
    "tipoDocumento": "CC",
    "numeroDocumento": "1026297316",
    "fechaExpedicion": "2012/11/06",
    "nombre1": "Andres",
    "nombre2": "Andres Felipe",
    "apellido1": "Rodriguez",
    "apellido2": "Roa",
    "genero": "M",
    "fechaNacimiento": "1996/11/05",
    "celular": "3224612382",
    "correoElectronico": "felipehuchija@gmail.com",
    "estadoCivil": "C",
    "tipoInmueble": "N",
    "tipoResidencia": "F",
    "tipoContrato": "F",
    "autorizaCentrales": "remember-me",
    "salarioMensual": "1000000",
    "nivelEstudios": "N",
    "actividadEconomica": "1",
    "totalActivos": "1000000",
    "totalPasivos": "1000000",
    "valorSolicitado": "1000000",
    "gastos": "1000000"
  },
  "valorSolicitado": "1000000",
  "plazo": "12"
}