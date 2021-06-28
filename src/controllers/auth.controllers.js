const pool = require('../database');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const Rol = require('../models/rol');
const Usuario = require('../models/usuario');

/**
 * Auth controller
 * @module AuthControllers
 */

/**
 * Receive an HTTP request to log an user to the system, finding his/her role, save the jsonwebtoken in the localStorage and create the user instance if he/she logs in succesfuly.
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response
 */
exports.login = async (req, res) => {
  const hash = crypto.createHash('sha256').update(req.body.password).digest('base64');
  console.log(hash);
  const data = await Usuario.findAll({
    where: {
      [Op.and]: [{ usuario: req.body.usuario }, { contrasena: hash }, { estado: 'A' }],
    },
    include: [
      {
        model: Rol,
        required: true,
      },
    ],
  });

  if (data.length === 0) {
    res.status(401).json('Usuario no existe');
    return;
  }
  console.log(data[0].rol.nombre, data[0].id_rol);

  const usuario = {
    id: data[0].id_rol,
    rol: data[0].rol.nombre,
  };
  const token = jwt.sign({ usuario }, '$$Gp4_2021');
  res.status(200).json({ token: token, rol: usuario.rol, id: usuario.id });
};
