const Usuario = require('../models/usuario');
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
  const data = await Usuario.findAll({
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

  res.status(200).json(data);
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
    estado,
    id_rol,
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
    imagen_url === undefined ||
    estado === undefined ||
    id_rol === undefined
  ) {
    res.status(400).json('Debe llenar todos los campos');
    return;
  }
  const u = await Usuario.create({
    usuario: usuario,
    correo: correo,
    contrasena: contrasena,
    nombre: nombre,
    apellido: apellido,
    fecha_nacimiento: fecha_nacimiento,
    sexo: sexo,
    is_est_espol: is_est_espol,
    imagen_url: imagen_url,
    estado: estado,
    id_rol: id_rol,
  }).then((user) => {
    res.status(201).json(req.body);
  });
};

/**
 * Receive an HTTP request to update an user on the database
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 200 is succesfully, Otherwise 400
 */
exports.updateUsuarioById = async (req, res) => {
  try {
    let body = req.body;
    let data = await Usuario.update(body, {
      where: {
        id: req.params.usuarioId,
      },
    });
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json('Error en la actualizacion');
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
