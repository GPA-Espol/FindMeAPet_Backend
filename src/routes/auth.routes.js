import {Router} from 'express';
const routers = Router();

import * as authController from '../controllers/auth.controllers';


routers.post('/', authController.login);

export default routers;