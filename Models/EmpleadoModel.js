const mongoose = require('mongoose');

var esquemaBDD = new mongoose.Schema({
    strNombreCompleto: {
        type: String
    },
    iEdad: {
        type: Number
    },
    strCorreo:{
        type: String
    },
    strTelefono: {
        type: String
    }
});

mongoose.model('Empleado', esquemaBDD);