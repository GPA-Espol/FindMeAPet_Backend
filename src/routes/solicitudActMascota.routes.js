const Router = require('express');
const routers = Router();
const solicitudActMascota = require('../controllers/solicitudActMascota.controllers');
const passport = require('passport');

const auth = passport.authorize('jwt', { session: false });
const authAdmin = passport.authorize('jwt-admin', { session: false });

routers.post('/', auth, solicitudActMascota.createUpdateform);
routers.put('/update', authAdmin, solicitudActMascota.updatedRequest);
routers.get('/', authAdmin, solicitudActMascota.getAllReq);

module.exports = routers;
