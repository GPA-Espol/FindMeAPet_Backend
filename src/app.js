const express = require('express');
const morgan = require('morgan');

const mascotaRoutes = require('./routes/mascota.routes');
const authRoutes = require('./routes/auth.routes');
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
  return app;
}

module.exports = createServer;
