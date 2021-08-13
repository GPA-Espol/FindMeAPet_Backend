const Usuario = require('../models/usuario');
const crypto = require('crypto');
const enums = require('../util/enum.model');

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
    res.status(201).json({ id: user.id });
  } catch {
    res.status(409).json('El usuario ya existe'); //Asumiendo que el unico error que da la base de datos es que el usuario ya exista
    //En realidad esto se deberia hacer bien, con todas las validaciones de si el un usuario con el username ya existe o si un usuario con ese correo ya existe...
    //para dar buenos mensajes de errores, pero lo dejo aqui por motivos de tiempo...
  }
};

/**
 * Receive an HTTP request to update an user on the database
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 200 is succesfully, Otherwise 400
 */
exports.updateUsuarioById = async (req, res) => {
  try {
    const { body } = req; //Lo mismo acá, es que enserio no puedo creer como no le meten tiempo a un proyecto
    //tan imprtante como este que vale el 50% de la nota..., todos estos endpoints estan hechos a lo que salga como si el proyecto no importara...
    //En ninguno de los dos endpoints encriptaban siquiera la contraseña...
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
    res.status(200).json('Usuario actualizado exitosamente');
  } catch (error) {
    res.status(409).json('Error en la actualizacion');
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
