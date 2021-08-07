const express = require('express');
const morgan = require('morgan');

const mascotaRoutes = require('./routes/mascota.routes');
const authRoutes = require('./routes/auth.routes');
const usuarioRoutes = require('./routes/usuario.routes');
const formAdopRoutes = require('./routes/formularioAdopcion.routes');
const publicacionRoutes = require('./routes/publicacion.routes');

let cors = require('cors');
const port = process.env.PORT || 3000;

/**
 * Create server
 * @returns {Application} - express aplication
 */
function createServer() {
  const app = express();
  app.use(cors());
  app.options('*', cors());
  app.set('port', port);
  app.use(express.json());
  app.use(morgan('dev'));
  app.use('/mascota', mascotaRoutes);
  app.use('/auth', authRoutes);
  app.use('/publicacion', publicacionRoutes);
  app.use('/form_adopcion', formAdopRoutes);
  app.use('/usuario', usuarioRoutes);
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
  });
  return app;
}

module.exports = createServer;
