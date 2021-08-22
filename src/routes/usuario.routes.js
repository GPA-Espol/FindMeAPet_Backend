const Router = require('express');
const routers = Router();
const usuarioController = require('../controllers/usuario.controllers');
const passport = require('passport');

const auth = passport.authorize('jwt', { session: false });
const authAdmin = passport.authorize('jwt-admin', { session: false });

routers.post('/', authAdmin, usuarioController.createUsuario);
routers.get('/', authAdmin, usuarioController.getUsuarios);
routers.get('/myUser', auth, usuarioController.getMyUser);
routers.get('/:usuarioId', authAdmin, usuarioController.getUsuarioById);
routers.put('/:usuarioId', authAdmin, usuarioController.updateUsuarioById);
routers.delete('/device', auth, usuarioController.deleteUserDevice);
routers.delete('/:usuarioId', authAdmin, usuarioController.deleteUsuarioById);

module.exports = routers;
