
// import mongoose from 'mongoose';
// const uri = "mongodb+srv://findmepet:findmepet@cluster.jw3dz.mongodb.net/findmepet?retryWrites=true&w=majority";
// mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
// .then(db => console.log("Conectado a mongo atlas"))
// .catch(er => console.log(er));

import mysql from 'mysql';

// Agregue las credenciales para acceder a su base de datos
var connection = mysql.createConnection({
    host     : 'te-learning.com',
    user     : 'gpa_user',
    password : 'gpa_user',
    database : 'proyecto_gpa'
});

// conectarse a mysql
connection.connect(function(err) {
    // en caso de error
    if(!!err){
        console.log(err);
        console.log(err.code);
        console.log(err.fatal);
    }
    else{
        console.log("Conexion exitosa");
    }
});




// connection.end();

module.exports = connection;