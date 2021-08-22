const Router = require('express');
const routers = Router();
const formularioAdopcionController = require('../controllers/formularioAdopcion.controllers');
const passport = require('passport');

const auth = passport.authorize('jwt', { session: false });
const authAdmin = passport.authorize('jwt-admin', { session: false });

routers.get('/', authAdmin, formularioAdopcionController.getFormulariosAdopcion);
routers.post('/', formularioAdopcionController.createAdopteForm);
routers.get('/:id', authAdmin, formularioAdopcionController.getFormulariosAdopcionById);
routers.put('/status', authAdmin, formularioAdopcionController.editStatus);

module.exports = routers;
