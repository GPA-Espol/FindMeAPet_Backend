// import express from 'express';
const express = require('express')
// import morgan from 'morgan';
const morgan = require('morgan')
const sequelize = require('../src/database')

// import mascotaRoutes from './routes/mascota.routes';
const mascotaRoutes = require('./routes/mascota.routes')
// import authRoutes from './routes/auth.routes';
const authRoutes = require('./routes/auth.routes')
const app = express();
app.set('port', (process.env.PORT || 3000));
app.use(express.json());
app.use(morgan('dev'));

app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
    
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
    sequelize.sync({force:false}).then(()=>{
        console.log("Nos conectamos ala base")
    }).catch(err=>{
        console.log("Se ha producido un error",err)
    });
});
app.use('/mascota',mascotaRoutes);
app.use('/auth',authRoutes);

module.exports = app