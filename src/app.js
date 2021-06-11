// import express from 'express';
const express = require('express')
// import morgan from 'morgan';
const morgan = require('morgan')
// import mascotaRoutes from './routes/mascota.routes';
const mascotaRoutes = require('./routes/mascota.routes')
// import authRoutes from './routes/auth.routes';
const authRoutes = require('./routes/auth.routes')

let cors = require('cors')

const app = express();

app.use(cors());
app.options('*', cors());
app.set('port', (process.env.PORT || 3000));
app.use(express.json());
app.use(morgan('dev'));
// app.get('/',(req,res)=>{
//     res.json('welcome');
// });
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
app.use('/mascota',mascotaRoutes);
app.use('/auth',authRoutes);

// export default app;
module.exports = app