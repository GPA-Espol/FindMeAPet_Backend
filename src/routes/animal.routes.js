import {Router} from 'express';
const routers = Router();
import * as animalController from '../controllers/animal.controllers';


routers.post('/', animalController.createAnimal);
routers.get('/', animalController.getAnimals);
routers.get('/:animalId', animalController.getAnimalById);
routers.put('/:animalId', animalController.updateAnimalById);
routers.delete('/:animalId', animalController.deleteAnimalById);
export default routers;
