const Mascota = require('../models/mascota');

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

  res.status(200).json(data);
};
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
    res.status(400).json('Debe llenar todos los campos');
    return;
  }
  await Mascota.create({
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
  }).then((user) => {
    res.status(201).json(req.body);
  });
};

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
exports.getMascotaById = async (req, res) => {
  const data = await Mascota.findAll({
    where: {
      id: req.params.mascotaId,
    },
  });

  res.status(200).json(data);
};
exports.deleteMascotaById = async (req, res) => {
  try {
    const data = await Mascota.destroy({
      where: {
        id: req.params.mascotaId,
      },
    });
    res.status(200).json('ok');
  } catch (error) {
    res.status(400).json('Error al eliminar');
  }
};
