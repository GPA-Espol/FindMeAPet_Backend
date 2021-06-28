const express = require('express');
const createServer = require('./app');
require('./database');
const sequelize = require('./database');
const app = createServer();

app
  .get('/', function (request, response) {
    var result = 'App is running';
    response.send(result);
  })
  .listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
    sequelize
      .sync({ force: false })
      .then(() => {
        console.log('Se ha conectado a la base exitosamente');
      })
      .catch((err) => {
        console.log('Se ha producido un error', err);
      });
  });
