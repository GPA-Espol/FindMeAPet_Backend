const Router = require('express');
const routers = Router();
const solicitudActMascota = require('../controllers/solicitudActMascota.controllers');
const passport = require('passport');

const auth = passport.authenticate('jwt', { session: false });
const authAdmin = passport.authenticate('jwt-admin', { session: false });

routers.post('/', auth, solicitudActMascota.createUpdateform);
routers.put('/update', authAdmin, solicitudActMascota.updatedRequest);
routers.get('/', authAdmin, solicitudActMascota.getAllReq);

module.exports = routers;
