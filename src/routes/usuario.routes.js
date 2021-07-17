const Router = require('express');
const routers = Router();
const usuarioController = require('../controllers/usuario.controllers');
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });
const authAdmin = passport.authenticate('jwt-admin', { session: false });

routers.post('/', authAdmin, usuarioController.createUsuario);
routers.get('/', usuarioController.getUsuarios);
routers.get('/:usuarioId', usuarioController.getUsuarioById);
routers.put('/:usuarioId', authAdmin, usuarioController.updateUsuarioById);
routers.delete('/:usuarioId', authAdmin, usuarioController.deleteUsuarioById);

module.exports = routers;