const passport = require('passport');
const jwt = require('jsonwebtoken');

const userController = require('./usuario.controllers');
/**
 * Auth controller
 * @module AuthControllers
 */

/**
 * Receive an HTTP request to log an user to the system, finding his/her role, save the jsonwebtoken in the localStorage and create the user instance if he/she logs in succesfuly.
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response
 */
exports.login = async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        return res.status(401).json({ message: info });
      }
      req.login(user, { session: false }, async (error) => {
        if (error) {
          return res.status(401).json({ error });
        }
        const usuario = { rol: user.rol.nombre, id: user.id };
        const secretKey = process.env.JWT_SECRET_KEY_FMAP || 'test_key';
        const token = jwt.sign({ usuario }, secretKey);
        await userController.updateDeviceId(user.id, req.body.id_device);
        return res.status(200).json({ token, rol: usuario.rol, id: usuario.id });
      });
    } catch (error) {
      return res.status(401).json({ error });
    }
  })(req, res, next);
};
