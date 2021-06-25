const Router = require('express');
const routers = Router();
const mascotaController = require('../controllers/mascota.controllers');

routers.post('/', mascotaController.createMascota);
routers.get('/', mascotaController.getMascotas);
routers.get('/:mascotaId', mascotaController.getMascotaById);
routers.put('/:mascotaId', mascotaController.updateMascotaById);
routers.delete('/:mascotaId', mascotaController.deleteMascotaById);
module.exports = routers;
