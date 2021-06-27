const express = require('express');
const morgan = require('morgan');
const sequelize = require('../src/database');
const loadsampledb = require('../scriptdb');

const mascotaRoutes = require('./routes/mascota.routes');
const authRoutes = require('./routes/auth.routes');

let cors = require('cors');

const app = express();

app.use(cors());
app.options('*', cors());
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(morgan('dev'));

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app
  .get('/', function (request, response) {
    var result = 'App is running';
    response.send(result);
  })
  .listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
    sequelize
      .sync({ force: true })
      .then(() => {
        console.log('Se ha conectado a la base exitosamente');
        require('./auth/auth');
        loadsampledb.loaddb();
        console.log('Se han cargado los datos de prueba exitosamente');
      })
      .catch((err) => {
        console.log('Se ha producido un error', err);
      });
  });
app.use('/mascota', mascotaRoutes);
app.use('/auth', authRoutes);

module.exports = app;
