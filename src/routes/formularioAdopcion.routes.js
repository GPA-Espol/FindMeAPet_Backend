const Router = require('express');
const routers = Router();
const formularioAdopcionController = require('../controllers/formularioAdopcion.controllers');
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });
const authAdmin = passport.authenticate('jwt-admin', { session: false });

routers.post('/', authAdmin, formularioAdopcionController.createAdopteForm);

module.exports = routers;