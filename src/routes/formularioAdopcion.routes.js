const Router = require('express');
const routers = Router();
const formularioAdopcionController = require('../controllers/formularioAdopcion.controllers');
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });
const authAdmin = passport.authenticate('jwt-admin', { session: false });

routers.get('/', authAdmin, formularioAdopcionController.getFormulariosAdopcion);
routers.post('/', formularioAdopcionController.createAdopteForm);
routers.put('/status', authAdmin, formularioAdopcionController.editStatus);

module.exports = routers;
