// import {Router} from 'express';
const Router = require('express')
const routers = Router();

// import * as authController from '../controllers/auth.controllers';
const authController = require('../controllers/auth.controllers')

routers.post('/', authController.login);

// export default routers;
module.exports = routers