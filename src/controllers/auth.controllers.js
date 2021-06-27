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
        const token = jwt.sign({ usuario }, '$$Gp4_2021');
        return res.status(200).json({ token, rol: usuario.rol, id: usuario.id });
      });
    } catch (error) {
      return res.status(401).json({ error });
    }
  })(req, res, next);
};
