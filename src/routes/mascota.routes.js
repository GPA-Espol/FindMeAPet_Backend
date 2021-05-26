import {Router} from 'express';
const routers = Router();
import * as mascotaController from '../controllers/mascota.controllers';


routers.post('/', mascotaController.createMascota);
routers.get('/', mascotaController.getMascotas);
routers.get('/:mascotaId', mascotaController.getMascotaById);
routers.put('/:mascotaId', mascotaController.updateMascotaById);
routers.delete('/:mascotaId', mascotaController.deleteMascotaById);
export default routers;
