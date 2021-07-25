const Router = require('express');
const routers = Router();
const publicacionController = require('../controllers/publicacion.controllers');
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });
const authAdmin = passport.authenticate('jwt-admin', { session: false });

routers.post('/', authAdmin, publicacionController.createPublicacion);
routers.get('/', authAdmin, publicacionController.getPublicacion);
routers.get('/:publicacionId', authAdmin, publicacionController.getPublicacionById);
routers.put('/:publicacionId', authAdmin, publicacionController.updatePublicacionById);
routers.delete('/:publicacionId', authAdmin, publicacionController.deletePublicacionById);

module.exports = routers;
