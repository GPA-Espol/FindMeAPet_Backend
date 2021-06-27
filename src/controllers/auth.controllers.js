const passport = require('passport');
const jwt = require('jsonwebtoken');

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
        return res.status(200).json({ token, rol: usuario.rol, id: usuario.id });
      });
    } catch (error) {
      return res.status(401).json({ error });
    }
  })(req, res, next);
};
