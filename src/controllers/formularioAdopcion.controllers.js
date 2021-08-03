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
  let {
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
    res.status(400).json('Faltan campos en su request');
    return;
  }
  if (cedula === '') {
    res.json('Debe ingresar la cedula');
    return;
  }
  if (nombre === '') {
    res.json('Debe ingresar el nombre');
    return;
  }
  if (apellido === '') {
    res.json('Debe ingresar el apellido');
    return;
  }
  if (ciudad === '') {
    res.json('Debe ingresar la ciudad');
    return;
  }
  if (fecha_nacimiento === '') {
    res.json('Debe ingresar la fecha de nacimiento');
    return;
  }
  if (correo === '') {
    res.json('Debe ingresar un correo');
    return;
  }
  if (fecha === '') {
    res.json('Debe ingresar la fecha');
    return;
  }
  if (direccion === '') {
    res.json('Debe ingresar la direccion');
    return;
  }
  if (motivo === '') {
    res.json('Debe ingresar el motivo');
    return;
  }
  if (ubicacion === '') {
    res.json('Debe ingresar la ubicacion');
    return;
  }
  if (estado_civil === '') {
    estado_civil = null;
  }
  if (numero_mascotas === '') {
    numero_mascotas = null;
  }
  if (contacto_referencia === '') {
    contacto_referencia = null;
  }
  if (usuario_fb === '') {
    usuario_fb = null;
  }
  if (usuario_instagram === '') {
    usuario_instagram = null;
  }
  if (is_tiene_mascotas === '') {
    is_tiene_mascotas = null;
  }
  if (otras_mascotas === '') {
    otras_mascotas = null;
  }
  if (is_mascotas_esterilizadas === '') {
    is_mascotas_esterilizadas = null;
  }
  if (is_tenia_antes_mascotas === '') {
    is_tenia_antes_mascotas = null;
  }
  if (situacion_mascotas_anteriores === '') {
    situacion_mascotas_anteriores = null;
  }
  if (is_visitas_periodicas === '') {
    is_visitas_periodicas = null;
  }
  if (is_convivencia_ninos === '') {
    is_convivencia_ninos = null;
  }
  if (is_asmatico === '') {
    is_asmatico = null;
  }
  if (tipo_domicilio === '') {
    tipo_domicilio = null;
  }
  if (vision_adoptado === '') {
    vision_adoptado = null;
  }
  if (is_espacio_suficiente === '') {
    is_espacio_suficiente = null;
  }
  if (donde_dormir_mascotas === '') {
    donde_dormir_mascotas = null;
  }
  if (tiempo_solo === '') {
    tiempo_solo = null;
  }
  if (medidas_tomaria === '') {
    medidas_tomaria = null;
  }
  if (is_esterilizaria_adoptado === '') {
    is_esterilizaria_adoptado = null;
  }
  if (motivo_esterilizaria_adoptado === '') {
    motivo_esterilizaria_adoptado = null;
  }
  if (situacion_inesperada_cambios === '') {
    situacion_inesperada_cambios = null;
  }
  if (id_mascota == '') {
    res.json('Debe seleccionar una mascota');
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
    estado: 'PENDIENTE',
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
    res.status(201).json('Formulario enviado');
  });
};
