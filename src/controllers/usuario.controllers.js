const Usuario = require('../models/usuario');
const crypto = require('crypto');
const enums = require('../util/enum.model');
const auth = require('./auth.controllers');

/**
 * Usuario controller
 * @module UsuarioControllers
 */

/**
 * Receive an HTTP request to get all the available users on the database and response this informmation on the body of the HTTP response
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 200 is succesfully, Otherwise 400
 */
exports.getUsuarios = async (req, res) => {
  const usuarios = await Usuario.findAll({
    attributes: [
      'id',
      'usuario',
      'correo',
      'contrasena',
      'nombre',
      'apellido',
      'fecha_nacimiento',
      'sexo',
      'is_est_espol',
      'imagen_url',
      'estado',
      'id_rol',
    ],
  });
  let irol;
  let tipoRol = Object.keys(enums.RolUsuarioBase);
  for (usuario of usuarios) {
    irol = 0;
    id_rol = usuario['dataValues']['id_rol'];

    while (id_rol != enums.RolUsuarioBase[tipoRol[irol]]) {
      irol += 1;
    }
    usuario['dataValues']['rol'] = enums.RolUsuario[tipoRol[irol]];
  }
  res.status(200).json(usuarios);
};
/**
 * Receive an HTTP request to create a user on the database
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 201 is succesfully, Otherwise 400
 */
exports.createUsuario = async (req, res) => {
  const {
    usuario,
    correo,
    contrasena,
    nombre,
    apellido,
    fecha_nacimiento,
    sexo,
    is_est_espol,
    imagen_url,
    id_rol,
    estado,
  } = req.body;
  if (
    usuario === undefined ||
    correo === undefined ||
    contrasena === undefined ||
    nombre === undefined ||
    apellido === undefined ||
    fecha_nacimiento == undefined ||
    sexo === undefined ||
    is_est_espol === undefined ||
    id_rol === undefined ||
    estado == undefined
  ) {
    return res.status(400).json('Debe llenar todos los campos');
  }
  const usuarios = await Usuario.findAll({
    attributes: ['usuario', 'correo'],
  });
  let correoBase, usuarioBase;
  for (user of usuarios) {
    correoBase = user['dataValues']['correo'];
    usuarioBase = user['dataValues']['usuario'];
    if (correo === correoBase) {
      return res.status(409).json('El correo ya se encuentra registrado ');
    }
    if (usuario === usuarioBase) {
      return res.status(409).json('El nombre de usuario no está disponible');
    }
  }

  const hash = crypto.createHash('sha256').update(contrasena).digest('base64');
  try {
    const user = await Usuario.create({
      usuario: usuario,
      correo: correo,
      contrasena: hash,
      nombre: nombre,
      apellido: apellido,
      fecha_nacimiento: fecha_nacimiento,
      sexo: sexo,
      is_est_espol: is_est_espol,
      imagen_url: imagen_url,
      estado: estado,
      id_rol: id_rol,
    });
    return res.status(201).json({ id: user.id });
  } catch {
    return res.status(409).json('El usuario ya existe');
  }
};

/**
 * Receive an HTTP request to update an user on the database
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 200 is succesfully, Otherwise 400
 */
exports.updateUsuarioById = async (req, res) => {
  try {
    const { body } = req;
    if (body.contrasena !== undefined && body.contrasena !== '') {
      body.contrasena = crypto.createHash('sha256').update(body.contrasena).digest('base64');
    } else if (body.contrasena === '') {
      delete body.contrasena;
    }

    await Usuario.update(body, {
      where: {
        id: req.params.usuarioId,
      },
    });
    return res.status(200).json('Usuario actualizado exitosamente');
  } catch (error) {
    return res.status(409).json('Error en la actualizacion');
  }
};

/**
 * Receive an HTTP request to get an specific user on the database and response this informmation on the body of the HTTP response
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 200 is succesfully, Otherwise 400
 */
exports.getUsuarioById = async (req, res) => {
  const data = await Usuario.findOne({
    where: {
      id: req.params.usuarioId,
    },
  });

  return res.status(200).json(data);
};
exports.getMyUser = async (req, res) => {
  const { id } = req.user;
  const data = await Usuario.findOne({ where: { id } });
  res.status(200).json(data);
};

/**
 * Receive an HTTP request to delete an specific user on the database and response this informmation on the body of the HTTP response
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 204 is succesfully, Otherwise 404
 */
exports.deleteUsuarioById = async (req, res) => {
  try {
    await Usuario.destroy({
      where: {
        id: req.params.usuarioId,
      },
    });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: 'No existe el usuario' });
  }
};

exports.deleteUserDevice = async (req, res) => {
  const { id } = req.user;
  Usuario.update({ device_id: null }, { where: { id } });
  res.status(200).send();
};

exports.updateDeviceId = async (userId, deviceId) => {
  await Usuario.update({ device_id: deviceId }, { where: { id: userId } });
};
