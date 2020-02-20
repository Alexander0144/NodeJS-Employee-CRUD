require('./Models/ConexionBDD');

const express = require('express');
const path = require('path');
const oExpressHB = require('express-handlebars');
const oAppServidor = express();
const empleadoController = require('./Controllers/EmpleadoController');

let puerto = 8080;

oAppServidor.use('/Empleados', empleadoController);

oAppServidor.get('/', (req, res) => {
    res.send("Pagina en construccion");
});

oAppServidor.listen(puerto, () => {
    console.log(`Corriendo en puerto ${puerto}`);
});