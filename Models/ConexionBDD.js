const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Empresa', {useNewUrlParser: true}, err => {
    if(!err){
        //TODO code Here
    }else{
        console.log(`Error de conexion: ${err}`);
    }
});
require('./EmpleadoModel');