const FormularioAdopcion = require('../models/formularioAdopcion');
const tipoEstado = require('../util/tipo_estado');
/**
 * FormularioAdopcion controller
 * @module FormularioAdopcionControllers
 */
/**
 * Receive an HTTP request to create a adopt form on the database
 * @param {HTTP} req - HTTP request
 * @param {HTTP} rep - HTTP response status 201 is succesfully, Otherwise 400
 */
exports.createAdopteForm = async (req, res) => {
  /*Campos default id_administrador,estado,fecha */
  console.log(req);

  let {
    //obligatorios
    nombre,
    apellido,
    fecha_nacimiento,
    estado_civil,
    telefono_fijo,
    movil,
    provincia,
    ciudad,
    direccion_domicilio,
    correo_electronico,
    id_mascota,
    como_conocio_gpa,
    num_ninos,
    num_adultos,
    familia_acepta,
    familia_alergica,
    compromiso_esterilizacion,
    tipo_vivienda,
    is_alquilada,
    is_tiene_mascotas,
    dos_contacto_referencia,
    planilla,
    //no obligatorios
    dueno_acepta,
    descripcion_mascotas,
    usuario_fb,
    usuario_instagram,
  } = req.body;
  if (nombre === undefined || nombre === '') {
    return res.status(400).json('El campo nombre es obligatorio');
  }
  if (apellido === '' || apellido === undefined) {
    return res.json('El campo apellido es obligatorio');
  }
  if (fecha_nacimiento === '' || fecha_nacimiento === undefined) {
    return res.json('El campo fecha de nacimiento es obligatorio');
  }
  if (estado_civil === '' || estado_civil === undefined) {
    return res.json('El campo estado civil es obligatorio');
  }
  if (telefono_fijo === '' || telefono_fijo === undefined) {
    return res.json('El campo telefono fijo es obligatorio');
  }
  if (movil === '' || movil === undefined) {
    return res.json('El campo movil es obligatorio');
  }
  if (provincia === '' || provincia === undefined) {
    return res.json('El campo provincia es obligatorio');
  }
  if (ciudad === '' || ciudad === undefined) {
    return res.json('El campo ciudad es obligatorio');
  }
  if (direccion_domicilio === '' || direccion_domicilio === undefined) {
    return res.json('El campo direccion de domicilio es obligatorio');
  }
  if (correo_electronico === '' || correo_electronico === undefined) {
    return res.json('El campo correo electronico es obligatorio');
  }
  if (id_mascota === '' || id_mascota === undefined) {
    return res.json('Debe seleccionar una mascota');
  }
  if (como_conocio_gpa === '' || como_conocio_gpa === undefined) {
    return res.json('El campo como_conocio_gpa es obligatorio');
  }
  if (num_ninos === '' || num_ninos === undefined) {
    return res.json('El campo num_ninos es obligatorio');
  }
  if (num_adultos === '' || num_adultos === undefined) {
    return res.json('El campo num_adultos es obligatorio');
  }
  if (familia_acepta === '' || familia_acepta === undefined) {
    return res.json('El campo familia_acepta es obligatorio');
  }
  if (familia_alergica === '' || familia_alergica === undefined) {
    return res.json('El campo familia_alergica es obligatorio');
  }
  if (compromiso_esterilizacion === '' || compromiso_esterilizacion === undefined) {
    return res.json('El campo compromiso_esterilizacion es obligatorio');
  }
  if (tipo_vivienda === '' || tipo_vivienda === undefined) {
    return res.json('El campo tipo_vivienda es obligatorio');
  }
  if (is_alquilada === '' || is_alquilada === undefined) {
    return res.json('El campo is_alquilada es obligatorio');
  }
  if (is_tiene_mascotas === '' || is_tiene_mascotas === undefined) {
    return res.json('El campo is_tiene_mascotas es obligatorio');
  }
  if (dos_contacto_referencia === '' || dos_contacto_referencia === undefined) {
    return res.json('El campo dos_contacto_referencia es obligatorio');
  }
  if (planilla === '' || planilla === undefined) {
    return res.json('El campo planilla es obligatorio');
  }

  if (usuario_fb === '') {
    usuario_fb = null;
  }
  if (usuario_instagram === '') {
    usuario_instagram = null;
  }
  if (descripcion_mascotas === '') {
    descripcion_mascotas = null;
  }
  if (dueno_acepta === '') {
    dueno_acepta = null;
  }
  let fecha = new Date().format('YYYY-MM-DD HH:MM:SS');
  const formulario = {
    estado: tipoEstado.tipoEstado.PENDIENTE,
    fecha: fecha,
    //obligatorios
    nombre: nombre,
    apellido: apellido,
    fecha_nacimiento: fecha_nacimiento,
    estado_civil: estado_civil,
    telefono_fijo: telefono_fijo,
    movil: movil,
    provincia: provincia,
    ciudad: ciudad,
    direccion_domicilio: direccion_domicilio,
    correo_electronico: correo_electronico,
    id_mascota: id_mascota,
    como_conocio_gpa: como_conocio_gpa,
    num_ninos: num_ninos,
    num_adultos: num_adultos,
    familia_acepta: familia_acepta,
    familia_alergica: familia_alergica,
    compromiso_esterilizacion: compromiso_esterilizacion,
    tipo_vivienda: tipo_vivienda,
    is_alquilada: is_alquilada,
    is_tiene_mascotas: is_tiene_mascotas,
    dos_contacto_referencia: dos_contacto_referencia,
    planilla: planilla,
    //no obligatorios
    dueno_acepta: dueno_acepta,
    descripcion_mascotas: descripcion_mascotas,
    usuario_fb: usuario_fb,
    usuario_instagram: usuario_instagram,
  };
  await FormularioAdopcion.create(formulario)
    .then((form) => {
      return res.status(201).json('Formulario enviado');
    })
    .catch((error) => {
      return res.status(error.status).json({ error });
    });
};

exports.editStatus = async (req, res) => {};
