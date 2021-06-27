const passport = require('passport');
const Router = require('express');
const routers = Router();

const authController = require('../controllers/auth.controllers');

routers.post('/', authController.login);

module.exports = routers;
