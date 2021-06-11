// import {Router} from 'express';
const Router = require('express')
const routers = Router();
const mascotaController = require('../controllers/mascota.controllers')
// import * as mascotaController from '../controllers/mascota.controllers';


routers.post('/', mascotaController.createMascota);
routers.get('/', mascotaController.getMascotas);
routers.get('/:mascotaId', mascotaController.getMascotaById);
routers.put('/:mascotaId', mascotaController.updateMascotaById);
routers.delete('/:mascotaId', mascotaController.deleteMascotaById);
// export default routers;
module.exports = routers
