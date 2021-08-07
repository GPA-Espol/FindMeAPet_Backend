const createServer = require('./app');
require('./database');
const sequelize = require('./database');
const sampledb = require('../scriptdb');
const app = createServer();
const firebase = require('./util/firebase_service');

firebase.setup();

app
  .get('/', function (request, response) {
    var result = 'App is running';
    response.send(result);
  })
  .listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
    sequelize
      .sync({ force: false })
      //.sync({ force: true })
      .then(() => {
        require('./auth/auth');
        //sampledb.loaddb();
        console.log('Se ha conectado a la base exitosamente');
      })
      .catch((err) => {
        console.log('Se ha producido un error', err);
      });
  });
