const FormularioAdopcion = require('../models/formularioAdopcion');
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
  const {
    cedula,
    nombre,
    apellido,
    ciudad,
    fecha_nacimiento,
    correo,
    fecha,
    direccion,
    motivo,
    ubicacion,
    estado_civil,
    estado,
    numero_mascotas,
    contacto_referencia,
    usuario_fb,
    usuario_instagram,
    is_tiene_mascotas,
    otras_mascotas,
    is_mascotas_esterilizadas,
    is_tenia_antes_mascotas,
    situacion_mascotas_anteriores,
    is_visitas_periodicas,
    is_convivencia_ninos,
    is_asmatico,
    tipo_domicilio,
    vision_adoptado,
    is_espacio_suficiente,
    donde_dormir_mascotas,
    tiempo_solo,
    medidas_tomaria,
    is_esterilizaria_adoptado,
    motivo_esterilizaria_adoptado,
    situacion_inesperada_cambios,
    id_mascota,
  } = req.body;
  if (
    cedula === undefined ||
    nombre === undefined ||
    apellido === undefined ||
    ciudad === undefined ||
    fecha_nacimiento == undefined ||
    correo === undefined ||
    fecha === undefined ||
    direccion === undefined ||
    motivo === undefined ||
    ubicacion === undefined ||
    estado_civil === undefined ||
    estado === undefined ||
    numero_mascotas === undefined ||
    contacto_referencia === undefined ||
    usuario_fb === undefined ||
    usuario_instagram === undefined ||
    is_tiene_mascotas === undefined ||
    otras_mascotas === undefined ||
    is_mascotas_esterilizadas === undefined ||
    is_tenia_antes_mascotas === undefined ||
    situacion_mascotas_anteriores === undefined ||
    is_visitas_periodicas === undefined ||
    is_convivencia_ninos === undefined ||
    is_asmatico === undefined ||
    tipo_domicilio === undefined ||
    vision_adoptado === undefined ||
    is_espacio_suficiente === undefined ||
    donde_dormir_mascotas === undefined ||
    tiempo_solo === undefined ||
    medidas_tomaria === undefined ||
    is_esterilizaria_adoptado === undefined ||
    motivo_esterilizaria_adoptado === undefined ||
    situacion_inesperada_cambios === undefined ||
    id_mascota == undefined
  ) {
    res.status(400).json({ message: 'Debe llenar algún campo' });
    return;
  }

  const formulario = {
    cedula: cedula,
    nombre: nombre,
    apellido: apellido,
    ciudad: ciudad,
    fecha_nacimiento: fecha_nacimiento,
    correo: correo,
    fecha: fecha,
    direccion: direccion,
    motivo: motivo,
    ubicacion: ubicacion,
    estado_civil: estado_civil,
    estado: estado,
    numero_mascotas: numero_mascotas,
    contacto_referencia: contacto_referencia,
    usuario_fb: usuario_fb,
    usuario_instagram: usuario_instagram,
    is_tiene_mascotas: is_tiene_mascotas,
    otras_mascotas: otras_mascotas,
    is_mascotas_esterilizadas: is_mascotas_esterilizadas,
    is_tenia_antes_mascotas: is_tenia_antes_mascotas,
    situacion_mascotas_anteriores: situacion_mascotas_anteriores,
    is_visitas_periodicas: is_visitas_periodicas,
    is_convivencia_ninos: is_convivencia_ninos,
    is_asmatico: is_asmatico,
    tipo_domicilio: tipo_domicilio,
    vision_adoptado: vision_adoptado,
    is_espacio_suficiente: is_espacio_suficiente,
    donde_dormir_mascotas: donde_dormir_mascotas,
    tiempo_solo: tiempo_solo,
    medidas_tomaria: medidas_tomaria,
    is_esterilizaria_adoptado: is_esterilizaria_adoptado,
    motivo_esterilizaria_adoptado: motivo_esterilizaria_adoptado,
    situacion_inesperada_cambios: situacion_inesperada_cambios,
    id_mascota: id_mascota,
  };
  console.log(formulario);
  await FormularioAdopcion.create(formulario).then((form) => {
    res.status(201).json(form);
  });
};
