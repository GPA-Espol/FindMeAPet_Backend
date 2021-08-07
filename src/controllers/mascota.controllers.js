const Mascota = require('../models/mascota');
/**
 * Mascota controller
 * @module MascotaControllers
 */

/**
 * Receive an HTTP request to get all the available pets on the database and response this informmation on the body of the HTTP response
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 200 is succesfully, Otherwise 400
 */
exports.getMascotas = async (req, res) => {
  const data = await Mascota.findAll({
    attributes: [
      'id',
      'nombre',
      'fecha_nacimiento',
      'color',
      'is_esterilizado',
      'is_adoptado',
      'is_caso_externo',
      'is_adoptable',
      'descripcion',
      'sexo',
      'fecha_adopcion',
      'ubicacion',
      'tipo_mascota',
      'imagen_url',
    ],
  });
  for (imascota in data) {
    var edad = getAge(data[imascota]['fecha_nacimiento']);
    if (edad > 0) {
      data[imascota]['dataValues']['categoria_edad'] = 'cachorro';
    } else {
      if (edad < 4) {
        data[imascota]['dataValues']['categoria_edad'] = 'juvenil';
      } else {
        data[imascota]['dataValues']['categoria_edad'] = 'adulto';
      }
    }
  }
  res.status(200).json(data);
};

/**
 * Receive an HTTP request to create a pet on the database
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 201 is succesfully, Otherwise 400
 */
exports.createMascota = async (req, res) => {
  const {
    nombre,
    fecha_nacimiento,
    color,
    is_esterilizado,
    is_adoptado,
    is_caso_externo,
    is_adoptable,
    descripcion,
    sexo,
    fecha_adopcion,
    ubicacion,
    tipo_mascota,
    imagen_url,
  } = req.body;
  if (
    nombre === undefined ||
    fecha_nacimiento == undefined ||
    color === undefined ||
    is_esterilizado === undefined ||
    is_adoptado === undefined ||
    is_caso_externo === undefined ||
    is_adoptable === undefined ||
    descripcion === undefined ||
    sexo === undefined ||
    ubicacion === undefined ||
    tipo_mascota === undefined ||
    imagen_url === undefined
  ) {
    return res.status(400).json('Debe llenar todos los campos');
  }
  const mascota = await Mascota.create({
    nombre: nombre,
    fecha_nacimiento: fecha_nacimiento,
    color: color,
    is_esterilizado: is_esterilizado,
    is_adoptado: is_adoptado,
    is_caso_externo: is_caso_externo,
    is_adoptable: is_adoptable,
    descripcion: descripcion,
    sexo: sexo,
    fecha_adopcion: fecha_adopcion,
    ubicacion: ubicacion,
    tipo_mascota: tipo_mascota,
    imagen_url: imagen_url,
  });
  res.status(201).json({ id: mascota.getDataValue('id') });
};

/**
 * Receive an HTTP request to update a pet on the database
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 200 is succesfully, Otherwise 400
 */
exports.updateMascotaById = async (req, res) => {
  try {
    let body = req.body;
    let data = await Mascota.update(body, {
      where: {
        id: req.params.mascotaId,
      },
    });
    res.status(200).json(req.body);
  } catch (error) {
    res.status(400).json('Error en la actualizacion');
  }
};
/**
 * Receive an HTTP request to get an specific pet on the database and response this informmation on the body of the HTTP response
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 200 is succesfully, Otherwise 400
 */
exports.getMascotaById = async (req, res) => {
  const data = await Mascota.findOne({
    where: {
      id: req.params.mascotaId,
    },
  });

  res.status(200).json(data);
};

/**
 * Receive an HTTP request to delete an specific pet on the database and response this informmation on the body of the HTTP response
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 204 is succesfully, Otherwise 404
 */
exports.deleteMascotaById = async (req, res) => {
  try {
    await Mascota.destroy({
      where: {
        id: req.params.mascotaId,
      },
    });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: 'No existe la mascota' });
  }
};

function getAge(dateString) {
  var today = new Date();
  var cumple = dateString.split('-');
  var birthDate = new Date(cumple[0], cumple[1], cumple[2]);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
