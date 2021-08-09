const SolicitudActualizacionMascota = require('../models/solicitudActMascota');
const enumModels = require('../util/enum.model');
const Mascota = require('../models/mascota');
/**
 * SolciitudActualizacionMascota controller
 * @module SolicitudActualkizacionMascotaControllers
 */

mascotaCampos = {
  nombre: null,
  fecha_nacimiento: null,
  fecha_adopcion: null,
  color: null,
  is_esterilizado: null,
  is_adoptado: null,
  is_caso_externo: null,
  is_adoptable: null,
  descripcion: null,
  sexo: null,
  ubicacion: null,
  tipo_mascota: null,
  id_mascota: null,
};

/**
 * Receive an HTTP request to get all the available news on the database and response this informmation on the body of the HTTP response
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 200 is succesfully, Otherwise 400
 */
exports.createUpdateform = async (req, res) => {
  isActualizado = false;
  solicitudMascota = {};
  Object.assign(solicitudMascota, mascotaCampos);
  for (key in req.body) {
    if (!(key in solicitudMascota)) {
      return res.status(400).json('El campo ' + key + ' no es un campo válido');
    }
    if (req.body[key] != '') {
      solicitudMascota[key] = req.body[key];
      isActualizado = true;
    }
  }
  if (!isActualizado) {
    return res.status(400).json('Debe haber al menos un campo con información');
  }
  const fecha = new Date();
  solicitudMascota['fecha'] =
    fecha.getFullYear() +
    '/' +
    (fecha.getMonth() > 8 ? fecha.getMonth() + 1 : '0' + (fecha.getMonth() + 1)) +
    '/' +
    (fecha.getDate() > 9 ? fecha.getDate() : '0' + fecha.getDate());

  solicitudMascota['id_usuario_voluntario'] = req.user.id;

  (solicitudMascota['estado'] = enumModels.tipoEstado.PENDIENTE),
    await SolicitudActualizacionMascota.create(solicitudMascota)
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
  let solicitud = await SolicitudActualizacionMascota.findByPk(id_solicitud);
  if (solicitud === null) {
    return res.status(409).json('No se encontró la solicitud actualizacion mascota');
  }
  respuestaExitosa = {};
  if (estado === 'A') {
    estado = enumModels.tipoEstado.ACEPTADO;
    let id_mascota = solicitud['dataValues']['id_mascota'];
    console.log('Se esta hablando de la mascota ' + id_mascota);
    if (id_mascota === null) {
      mascotaNueva = {};
      for (key in mascotaCampos) {
        mascotaNueva[key] = solicitud['dataValues'][key];
      }
      const mascota = await Mascota.create(mascotaNueva);
      respuestaExitosa['message'] = 'Se creo exitósamente la mascota ' + mascota.getDataValue('id');
    } else {
      mascotaCamposActualizados = {};
      for (key in mascotaCampos) {
        if (solicitud['dataValues'][key] != null) {
          mascotaCamposActualizados[key] = solicitud['dataValues'][key];
        }
      }
      await Mascota.update(mascotaCamposActualizados, {
        where: {
          id: id_mascota,
        },
      }).catch((error) => {
        return res.status(409).json('No se pudo actualizar la mascota ' + id_mascota);
      });
      respuestaExitosa = mascotaCamposActualizados;
      respuestaExitosa['message'] = 'Se actualizaron exitósamente los campos de la mascota';
    }
  } else if (estado === 'R') {
    estado = enumModels.tipoEstado.RECHAZADO;
    respuestaExitosa['message'] = 'Se rechazó exitosamente la solicitud';
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
      return res.status(201).json(respuestaExitosa);
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
