"use strict";

var _mysql = _interopRequireDefault(require("mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import mongoose from 'mongoose';
// const uri = "mongodb+srv://findmepet:findmepet@cluster.jw3dz.mongodb.net/findmepet?retryWrites=true&w=majority";
// mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
// .then(db => console.log("Conectado a mongo atlas"))
// .catch(er => console.log(er));
var _require = require('util'),
    promisify = _require.promisify; // Agregue las credenciales para acceder a su base de datos
// var connection = mysql.createConnection({
//     host     : 'te-learning.com',
//     user     : 'gpa_user',
//     password : 'gpa_user',
//     database : 'proyecto_gpa'
// });
// // conectarse a mysql
// connection.connect(function(err) {
//     // en caso de error
//     if(!!err){
//         console.log(err);
//         console.log(err.code);
//         console.log(err.fatal);
//     }
//     else{
//         console.log("Conexion exitosa");
//     }
// });


var database = {
  connectionLimit: 10,
  host: 'te-learning.com',
  user: 'gpa_user',
  password: 'gpa_user',
  database: 'proyecto_gpa'
};

var pool = _mysql["default"].createPool(database);

pool.getConnection(function (err, connection) {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }

    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has to many connections');
    }

    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused');
    }
  }

  if (connection) connection.release();
  console.log('DB is Connected');
  return;
});
pool.query = promisify(pool.query); // module.exports = connection;module.exports = pool;

module.exports = pool;