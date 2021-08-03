const Publicacion = require('../models/publicacion');
/**
 * Mascota controller
 * @module PublicacionControllers
 */

/**
 * Receive an HTTP request to get all the available news on the database and response this informmation on the body of the HTTP response
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 200 is succesfully, Otherwise 400
 */
exports.getPublicacion = async (req, res) => {
  const data = await Publicacion.findAll({});

  res.status(200).json(data);
};

/**
 * Receive an HTTP request to create a news on the database
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 201 is succesfully, Otherwise 400
 */
exports.createPublicacion = async (req, res) => {
  const { titulo, fecha, imagen, descripcion, tipo_publicacion, tag, id_usuario } = req.body;
  if (
    titulo === undefined ||
    fecha == undefined ||
    imagen === undefined ||
    descripcion === undefined ||
    id_usuario === undefined ||
    tag === undefined ||
    tipo_publicacion === undefined
  ) {
    return res.status(400).json('Debe llenar todos los campos');
  }
  const publicacion = await Publicacion.create({
    titulo: titulo,
    fecha: fecha,
    imagen: imagen,
    descripcion: descripcion,
    id_usuario: id_usuario,
    tag: tag,
    tipo_publicacion: tipo_publicacion,
  });
  res.status(201).json({ id: publicacion.getDataValue('id') });
};

/**
 * Receive an HTTP request to update a news on the database
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 200 is succesfully, Otherwise 400
 */
exports.updatePublicacionById = async (req, res) => {
  try {
    const { titulo, fecha, imagen, descripcion, tipo_publicacion, tag, id_usuario } = req.body;
    if (
      titulo === undefined ||
      titulo.length === 0 ||
      fecha == undefined ||
      fecha.length === 0 ||
      imagen === undefined ||
      descripcion === undefined ||
      descripcion.length === 0 ||
      id_usuario === undefined ||
      tag === undefined ||
      tipo_publicacion === undefined ||
      tipo_publicacion.length === 0
    ) {
      res.status(400).json('Debe llenar todos los campos');
      return;
    }
    let body = req.body;
    let data = await Publicacion.update(body, {
      where: {
        id: req.params.publicacionId,
      },
    });
    res.status(200).json('Se editó la publicación');
  } catch (error) {
    res.status(400).json('Error en la actualizacion');
  }
};
/**
 * Receive an HTTP request to get an specific news on the database and response this informmation on the body of the HTTP response
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 200 is succesfully, Otherwise 400
 */
exports.getPublicacionById = async (req, res) => {
  const data = await Publicacion.findOne({
    where: {
      id: req.params.publicacionId,
    },
  });

  res.status(200).json(data);
};

/**
 * Receive an HTTP request to delete an specific news on the database and response this informmation on the body of the HTTP response
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 204 is succesfully, Otherwise 404
 */
exports.deletePublicacionById = async (req, res) => {
  try {
    await Publicacion.destroy({
      where: {
        id: req.params.publicacionId,
      },
    });
    res.status(204).send('Se ha eliminado la noticia');
  } catch {
    res.status(404);
    res.send({ error: 'No existe la noticia' });
  }
};
