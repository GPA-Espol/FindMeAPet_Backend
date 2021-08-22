const Router = require('express');
const routers = Router();
const publicacionController = require('../controllers/publicacion.controllers');
const passport = require('passport');

const auth = passport.authorize('jwt', { session: false });
const authAdmin = passport.authorize('jwt-admin', { session: false });

routers.post('/', authAdmin, publicacionController.createPublicacion);
routers.get('/', publicacionController.getPublicacion);
routers.get('/:publicacionId', publicacionController.getPublicacionById);
routers.put('/:publicacionId', authAdmin, publicacionController.updatePublicacionById);
routers.delete('/:publicacionId', authAdmin, publicacionController.deletePublicacionById);

module.exports = routers;
