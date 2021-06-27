const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Usuario = require('../models/usuario');
const Rol = require('../models/rol');
const crypto = require('crypto');
const { Op } = require('sequelize');

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'usuario',
      passwordField: 'password',
    },
    async (usuario, password, done) => {
      const hash = crypto.createHash('sha256').update(password).digest('base64');
      const data = await Usuario.findAll({
        where: {
          [Op.and]: [{ usuario }, { contrasena: hash }, { estado: 'A' }],
        },
        include: [
          {
            model: Rol,
            required: true,
          },
        ],
      });

      if (data.length === 0) {
        return done(null, false, { message: 'Usuario no existe' });
      }
      return done(null, data[0]);
    }
  )
);

passport.use(
  new JWTstrategy(
    {
      secretOrKey: '$$Gp4_2021',
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken('token'),
    },
    async (token, done) => {
      try {
        return done(null, token.usuario);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  'jwt-admin',
  new JWTstrategy(
    {
      secretOrKey: process.env.JWT_SECRET_KEY_FMAP || 'test_key',
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken('token'),
    },
    async (token, done) => {
      try {
        if (token.usuario.rol != 'Admin') {
          done({ status: 403, error: 'No tiene permisos para realizar esta accion' });
        }
        return done(null, token.usuario);
      } catch (error) {
        done(error);
      }
    }
  )
);
