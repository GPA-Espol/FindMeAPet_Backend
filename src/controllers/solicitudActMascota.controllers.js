const SolicitudActualizacionMascota = require('../models/solicitudActMascota');
const tipoEstado = require('../util/tipo_estado');
const moment = require('moment');
const Mascota = require('../models/mascota');
/**
 * SolciitudActualizacionMascota controller
 * @module SolicitudActualkizacionMascotaControllers
 */

/**
 * Receive an HTTP request to get all the available news on the database and response this informmation on the body of the HTTP response
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 200 is succesfully, Otherwise 400
 */
exports.createUpdateform = async (req, res) => {
  let {
    nombre,
    fecha_nacimiento,
    fecha_adopcion,
    color,
    is_esterilizado,
    is_adoptado,
    is_caso_externo,
    is_adoptable,
    descripcion,
    sexo,
    ubicacion,
    tipo_mascota,
    id_mascota,
  } = req.body;

  if (nombre === undefined) {
    return res.status(400).json('El campo nombre no está definido');
  }
  if (fecha_nacimiento === undefined) {
    return res.status(400).json('El campo fecha_nacimiento no está definido');
  }
  if (fecha_adopcion === undefined) {
    return res.status(400).json('El campo fecha_adopcion no está definido');
  }
  if (color === undefined) {
    return res.status(400).json('El campo color no está definido');
  }
  if (is_esterilizado === undefined) {
    return res.status(400).json('El campo is_esterilizado no está definido');
  }
  if (is_adoptado === undefined) {
    return res.status(400).json('El campo is_adoptado no está definido');
  }
  if (is_caso_externo === undefined) {
    return res.status(400).json('El campo is_caso_externo no está definido');
  }
  if (is_adoptable === undefined) {
    return res.status(400).json('El campo is_adoptable no está definido');
  }
  if (descripcion === undefined) {
    return res.status(400).json('El campo descripcion no está definido');
  }
  if (sexo === undefined) {
    return res.status(400).json('El campo sexo no está definido');
  }
  if (ubicacion === undefined) {
    return res.status(400).json('El campo ubicacion no está definido');
  }
  if (tipo_mascota === undefined) {
    return res.status(400).json('El campo tipo_mascota no está definido');
  }
  if (id_mascota === undefined || id_mascota === '' || typeof id_mascota !== 'number') {
    return res.status(400).json('El campo id_mascota no está definido');
  }
  if (
    nombre === '' &&
    fecha_nacimiento === '' &&
    color === '' &&
    is_esterilizado === '' &&
    is_adoptado === '' &&
    is_caso_externo === '' &&
    is_adoptable === '' &&
    descripcion === '' &&
    sexo === '' &&
    ubicacion === '' &&
    tipo_mascota === '' &&
    id_mascota === ''
  ) {
    return res.status(400).json('Debe haber al menos un campo con información');
  }

  if (nombre === '') {
    nombre = null;
  }
  if (fecha_nacimiento === '') {
    fecha_nacimiento = null;
  }
  if (fecha_adopcion === '') {
    fecha_adopcion = null;
  }
  if (color === '') {
    color = null;
  }
  if (is_esterilizado === '') {
    is_esterilizado = null;
  }
  if (is_adoptado === '') {
    is_adoptado = null;
  }
  if (is_caso_externo === '') {
    is_caso_externo = null;
  }
  if (is_adoptable === '') {
    is_adoptable = null;
  }
  if (descripcion === '') {
    descripcion = null;
  }
  if (sexo === '') {
    sexo = null;
  }
  if (ubicacion === '') {
    ubicacion = null;
  }
  if (tipo_mascota === '') {
    tipo_mascota = null;
  }
  let fecha = new Date();
  let log = await Mascota.findByPk(id_mascota);
  console.log(log);
  if (log === undefined || log === null) {
    return res.status(409).json('No se encontró a la mascota!');
  }

  const momentDate = moment(fecha.toLocaleDateString());
  const solicitud = {
    nombre: nombre,
    fecha: momentDate,
    fecha_adopcion: fecha_adopcion,
    fecha_nacimiento: fecha_nacimiento,
    color: color,
    is_esterilizado: is_esterilizado,
    is_adoptado: is_adoptado,
    is_caso_externo: is_caso_externo,
    is_adoptable: is_adoptable,
    descripcion: descripcion,
    sexo: sexo,
    ubicacion: ubicacion,
    tipo_mascota: tipo_mascota,
    estado: tipoEstado.tipoEstado.PENDIENTE,
    id_mascota: id_mascota,
    id_usuario_voluntario: req.user.id,
  };
  await SolicitudActualizacionMascota.create(solicitud)
    .then((data) => {
      return res.status(201).json({ message: 'Solicitud enviada correctamente!', id_solicitud: data.id });
    })
    .catch((error) => {
      return res.status(409).json('No se pudo enviar la solicitud!');
    });
};

exports.updatedRequest = async (req, res) => {
  let { estado, id_solicitud } = req.body;
  if (estado === undefined || estado === '') {
    return res.status(400).json('El campo estado no está definido o está vacío');
  }
  if (id_solicitud === undefined || id_solicitud === '') {
    return res.status(400).json('El campo id_solicitud no está definido o está vacío');
  }

  let log = await SolicitudActualizacionMascota.findByPk(id_solicitud);
  console.log(log);
  if (log === undefined || log === null) {
    return res.status(409).json('No se encontró la solicitud!');
  }

  if (estado === 'A') {
    estado = tipoEstado.tipoEstado.ACEPTADO;
    await Mascota.update(
      {
        nombre: nombre,
        fecha: momentDate,
        fecha_adopcion: fecha_adopcion,
        fecha_nacimiento: fecha_nacimiento,
        color: color,
        is_esterilizado: is_esterilizado,
        is_adoptado: is_adoptado,
        is_caso_externo: is_caso_externo,
        is_adoptable: is_adoptable,
        descripcion: descripcion,
        sexo: sexo,
        ubicacion: ubicacion,
        tipo_mascota: tipo_mascota,
      },
      {
        where: {
          id: id_mascota,
        },
      }
    ).catch((error) => {
      return res.status(409).json('No se actualizó a la mascota!!');
    });
  }
  if (estado === 'R') {
    estado = tipoEstado.tipoEstado.RECHAZADO;
  }

  await SolicitudActualizacionMascota.update(
    {
      id_usuario_admin: req.user.id,
      estado: estado,
    },
    {
      where: {
        id: id_solicitud,
      },
    }
  )
    .then((data) => {
      return res.status(201).json('Se respondió a la solicitud enviada!');
    })
    .catch((error) => {
      return res.status(409).json('No se pudo enviar la respuesta de la solicitud!');
    });
};

exports.getAllReq = async (req, res) => {
  await SolicitudActualizacionMascota.findAll()
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((error) => {
      return res.status(400).json('No se pudo obtener las solicitudes');
    });
};
