const Router = require('express');
const routers = Router();
const mascotaController = require('../controllers/mascota.controllers');
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });
const authAdmin = passport.authenticate('jwt-admin', { session: false });

routers.post('/', authAdmin, mascotaController.createMascota);
routers.get('/', mascotaController.getMascotas);
routers.get('/:mascotaId', mascotaController.getMascotaById);
routers.put('/:mascotaId', authAdmin, mascotaController.updateMascotaById);
routers.delete('/:mascotaId', authAdmin, mascotaController.deleteMascotaById);

module.exports = routers;
