const Mascota = require('./src/models/mascota');
const Rol = require('./src/models/rol');
const Usuario = require('./src/models/usuario');
const FormularioAdopcion = require('./src/models/formularioAdopcion');
const crypto = require('crypto');
const ReporteAsistencia = require('./src/models/reporteAsistencia');
const Publicacion = require('./src/models/publicacion');
const enums = require('./src/util/enum.model');

async function loaddb() {
  await loadMascota();
  await loadRol();
  await loadUsuario();
  await loadReporteAsistencia();
  // await loadFormularioAdopcion();
  await loadPublicacion();
}
async function loadsample() {
  await loadRol();
  await loadUsuario();
}

async function loadMascota() {
  await Mascota.create({
    nombre: 'Mila',
    fecha_nacimiento: '2021-05-01',
    color: enums.ColorMascota.BLANCO,
    is_esterilizado: 0,
    is_adoptado: 0,
    is_caso_externo: 0,
    is_adoptable: 1,
    descripcion: 'Es carinosa',
    sexo: 'H',
    ubicacion: enums.UbicacionMascota.FCV,
    //ubicacion_mascota_politecnica: enums.UbicacionMascotaPolitecnica.FEPOL,
    tipo_mascota: enums.TipoMascota.GATO,
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/mila.jpeg?alt=media&token=0fa957b8-89a1-49a6-bd41-6c1dc41fdb9f',
  });
  await Mascota.create({
    nombre: 'July',
    fecha_nacimiento: '2018-12-01',
    color: enums.ColorMascota.NARANJA,
    is_esterilizado: 1,
    is_adoptado: 0,
    is_caso_externo: 0,
    is_adoptable: 1,
    descripcion: 'Se lleva bien con gatitos',
    sexo: 'H',
    ubicacion: enums.UbicacionMascota.CELEX,
    //ubicacion_mascota_politecnica: enums.UbicacionMascotaPolitecnica.CELEX,
    tipo_mascota: enums.TipoMascota.PERRO,
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/july.jpg?alt=media&token=b2e2516e-13cc-424e-91ce-6439c636be98',
  });
  await Mascota.create({
    nombre: 'Lula',
    fecha_nacimiento: '2010-12-01',
    color: enums.ColorMascota.NEGRO,
    is_esterilizado: 1,
    is_adoptado: 1,
    is_caso_externo: 0,
    is_adoptable: 1,
    descripcion: 'Se lleva bien con gatitos',
    sexo: 'H',
    ubicacion: enums.UbicacionMascota.CELEX,
    //ubicacion_mascota_politecnica: enums.UbicacionMascotaPolitecnica.CELEX,
    tipo_mascota: enums.TipoMascota.PERRO,
    fecha_adopcion: '2020-11-01',
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/lula.jpg?alt=media&token=98d7416d-5f33-4b5f-80a4-ed0118b513f8',
  });
  await Mascota.create({
    nombre: 'Empanada',
    fecha_nacimiento: '2015-12-01',
    color: enums.ColorMascota.CAREY,
    is_esterilizado: 1,
    is_adoptado: 0,
    is_caso_externo: 0,
    is_adoptable: 1,
    descripcion: 'Es carinosa',
    sexo: 'H',
    ubicacion: enums.UbicacionMascota.LABS_FCSH,
    //ubicacion_mascota_politecnica: enums.UbicacionMascotaPolitecnica.CELEX,
    tipo_mascota: enums.TipoMascota.GATO,
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/empanada.jpg?alt=media&token=3fba147e-bcab-4ec6-aa8d-2d43d2adc74f',
  });
  await Mascota.create({
    nombre: 'Ennie',
    fecha_nacimiento: '2021-02-15',
    color: enums.ColorMascota.NEGRO,
    is_esterilizado: 0,
    is_adoptado: 0,
    is_caso_externo: 0,
    is_adoptable: 1,
    descripcion: 'Es juguetona',
    sexo: 'H',
    ubicacion: enums.UbicacionMascota.FCV,
    tipo_mascota: enums.TipoMascota.GATO,
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/ennie.PNG?alt=media&token=e12c4b13-459b-4fa1-8e01-25ec02f43017',
  });
  ('');
  await Mascota.create({
    nombre: 'Balto',
    fecha_nacimiento: '2020-01-01',
    color: enums.ColorMascota.CAREY,
    is_esterilizado: 0,
    is_adoptado: 1,
    is_caso_externo: 0,
    is_adoptable: 1,
    descripcion: 'Es muy jugueton',
    sexo: 'M',
    ubicacion: enums.UbicacionMascota.FCV,
    tipo_mascota: enums.TipoMascota.PERRO,
    fecha_adopcion: '2020-01-09',
    //ubicacion_mascota_politecnica: enums.UbicacionMascotaPolitecnica.FCV,
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/balto.jpg?alt=media&token=6134d4e2-2c14-4450-be5b-a49be915679a',
  });
  await Mascota.create({
    nombre: 'Tais',
    fecha_nacimiento: '2021-05-05',
    color: enums.ColorMascota.ROMANO,
    is_esterilizado: 1,
    is_adoptado: 0,
    is_caso_externo: 0,
    is_adoptable: 1,
    sexo: 'H',
    ubicacion: enums.UbicacionMascota.FCV,
    tipo_mascota: enums.TipoMascota.GATO,
    //ubicacion_mascota_politecnica: enums.UbicacionMascotaPolitecnica.FCV,
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/hembrita1.jpeg?alt=media&token=aa65c588-99bc-42d3-8b3b-f7b4a35bc3ec',
  });
  await Mascota.create({
    nombre: 'Madonna',
    fecha_nacimiento: '2021-05-01',
    color: enums.ColorMascota.CAREY,

    is_esterilizado: 1,
    is_adoptado: 0,
    is_caso_externo: 0,
    is_adoptable: 1,
    sexo: 'H',
    ubicacion: enums.UbicacionMascota.FCV,
    tipo_mascota: enums.TipoMascota.GATO,
    //ubicacion_mascota_politecnica: enums.UbicacionMascotaPolitecnica.FCV,
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/carey.jpeg?alt=media&token=184c97b1-1aeb-47ba-86dd-3f910057a16f',
  });
  await Mascota.create({
    nombre: 'Nieves',
    fecha_nacimiento: '2021-01-01',
    color: enums.ColorMascota.BLANCO,
    is_esterilizado: 1,
    is_adoptado: 0,
    is_caso_externo: 0,
    is_adoptable: 1,
    sexo: 'H',
    ubicacion: enums.UbicacionMascota.FCV,
    tipo_mascota: enums.TipoMascota.GATO,
    //ubicacion_mascota_politecnica: enums.UbicacionMascotaPolitecnica.FCV,
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/unknown%2Fblanquita.jpeg?alt=media&token=071ed5f2-d5a4-4b1f-9df4-daed2a1a9826',
  });
  await Mascota.create({
    nombre: 'Luna',
    fecha_nacimiento: '2020-02-01',
    color: enums.ColorMascota.NEGRO,
    is_esterilizado: 1,
    is_adoptado: 0,
    is_caso_externo: 0,
    is_adoptable: 1,
    sexo: 'H',
    ubicacion: enums.UbicacionMascota.FCV,
    tipo_mascota: enums.TipoMascota.GATO,
    //ubicacion_mascota_politecnica: enums.UbicacionMascotaPolitecnica.FCV,
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/unknown%2Fnegrita.jpeg?alt=media&token=6c2b7b95-c06c-40ff-988e-74062a606eff',
  });
  await Mascota.create({
    nombre: 'Panda',
    fecha_nacimiento: '2021-02-01',
    color: enums.ColorMascota.BLANCO,
    is_esterilizado: 1,
    is_adoptado: 0,
    is_caso_externo: 0,
    is_adoptable: 1,
    sexo: 'H',
    ubicacion: enums.UbicacionMascota.FCV,
    tipo_mascota: enums.TipoMascota.GATO,
    //ubicacion_mascota_politecnica: enums.UbicacionMascotaPolitecnica.FCV,
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/unknown%2Fhembrita2.jpeg?alt=media&token=432186f5-5f1b-4b33-924b-02b4f91efb44',
  });
  await Mascota.create({
    nombre: 'Peluso',
    fecha_nacimiento: '2018-12-01',
    color: enums.ColorMascota.GRIS,
    is_esterilizado: 1,
    is_adoptado: 1,
    is_caso_externo: 0,
    is_adoptable: 1,
    descripcion: 'Es cazador y muy jugueton',
    sexo: 'M',
    fecha_adopcion: '2019-01-01',
    ubicacion: enums.UbicacionMascota.FCV,
    tipo_mascota: enums.TipoMascota.GATO,
    //ubicacion_mascota_politecnica: enums.UbicacionMascotaPolitecnica.FICT,
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/peluso.jpeg?alt=media&token=d1326487-2a1d-45ba-a4f6-bb16d4e79dd4',
  });
  await Mascota.create({
    nombre: 'Cenicienta',
    fecha_nacimiento: '2018-12-01',

    color: enums.ColorMascota.GRIS,

    is_esterilizado: 1,
    is_adoptado: 1,
    is_caso_externo: 0,
    is_adoptable: 1,
    fecha_adopcion: '2019-01-01',

    descripcion: 'Es muy juguetona',
    sexo: 'H',
    ubicacion: enums.UbicacionMascota.FCV,
    //ubicacion_mascota_politecnica: enums.UbicacionMascotaPolitecnica.FCV,
    tipo_mascota: enums.TipoMascota.GATO,
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/cenicienta.jpeg?alt=media&token=39bf03f6-7473-495f-98c1-18e562477d43',
  });
  await Mascota.create({
    nombre: 'Teito',
    fecha_nacimiento: '2018-12-01',
    color: enums.ColorMascota.ROMANO,
    is_esterilizado: 1,
    is_adoptado: 1,
    is_caso_externo: 0,
    is_adoptable: 1,
    fecha_adopcion: '2019-01-01',
    descripcion: 'Es muy cazador y juguetón',
    sexo: 'M',
    ubicacion: enums.UbicacionMascota.FCV,
    //ubicacion_mascota_politecnica: enums.UbicacionMascotaPolitecnica.FCV,
    tipo_mascota: enums.TipoMascota.GATO,
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/teito.jpeg?alt=media&token=fd1dc15f-6092-4fcd-8bc3-217cf505f2ae',
  });
}

async function loadUsuario() {
  let contraMomo = '12345momo';
  contraMomo = crypto.createHash('sha256').update(contraMomo).digest('base64');
  await Usuario.create({
    nombre: 'Monica',
    apellido: 'Santos',
    usuario: 'momo',
    correo: 'mogasant@espol.edu.ec',
    contrasena: contraMomo,
    fecha_nacimiento: '1994-06-23',
    sexo: 'F',
    is_est_espol: 1,
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/monik.jpg?alt=media&token=d58191af-8194-477e-accd-5ed90ddf1700',
    estado: 'A',
    id_rol: 1,
  });

  let contraEu = '12345eunice';
  contraEu = crypto.createHash('sha256').update(contraEu).digest('base64');
  await Usuario.create({
    nombre: 'Eunice Alexandra',
    apellido: 'Galvez Nan',
    usuario: 'eagalvez',
    correo: 'eunicegalvez17@gmail.com',
    contrasena: contraEu,
    fecha_nacimiento: '1998-07-24',
    sexo: 'F',
    is_est_espol: 1,
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/eu.jpg?alt=media&token=18c19a8b-7907-40e1-afd8-f9492d40b831',
    estado: 'A',
    id_rol: 2,
  });

  let contraJoha = '12345johana';
  contraJoha = crypto.createHash('sha256').update(contraJoha).digest('base64');
  await Usuario.create({
    nombre: 'Johana',
    apellido: 'Zambrano',
    usuario: 'Johana',
    correo: 'jolizamb@espol.edu.ec',
    contrasena: contraJoha,
    fecha_nacimiento: '1994-06-23',
    sexo: 'F',
    is_est_espol: 1,
    estado: 'A',
    id_rol: 1,
  });

  let contraAndreina = '12345andreina';
  contraAndreina = crypto.createHash('sha256').update(contraJoha).digest('base64');
  await Usuario.create({
    nombre: 'Andreina',
    apellido: 'Bravo Lino',
    usuario: 'Andreina',
    correo: 'anmabrav@espol.edu.ec',
    contrasena: contraAndreina,
    fecha_nacimiento: '1998-07-24',
    sexo: 'F',
    is_est_espol: 1,
    estado: 'A',
    id_rol: 2,
  });
}

async function loadRol() {
  await Rol.create({ nombre: 'Admin', estado: 'A' });
  await Rol.create({ nombre: 'Voluntario', estado: 'A' });
}
async function loadReporteAsistencia() {
  await ReporteAsistencia.create({
    comida: enums.CantidadComida.UN_CUARTO,
    id_usuario: 1,
  });
  await ReporteAsistencia.create({
    comida: enums.CantidadComida.UN_MEDIO,
    anomalia: 'Se registro comida fuera de los puntos de comida',
    id_usuario: 2,
  });
}

async function loadFormularioAdopcion() {
  await FormularioAdopcion.create({
    nombre: 'Allison',
    apellido: 'Brito',
    fecha_nacimiento: '08/11/1994',
    estado_civil: 'Soltera',
    telefono_fijo: '5035408',
    movil: '0991279378',
    provincia: 'Guayas',
    ciudad: 'Guayaquil',
    direccion_domicilio: 'Fco de Marcos',
    correo_electronico: 'adbrito@espol.edu.ec',
    id_mascota: 2,
    como_conocio_gpa: 'Fb',
    num_ninos: 2,
    num_adultos: 1,
    familia_acepta: true,
    familia_alergica: true,
    compromiso_esterilizacion: true,
    tipo_vivienda: 'arrendada',
    is_alquilada: false,
    is_tiene_mascotas: false,
    dos_contacto_referencia: 'na',
    planilla: 'hola',
    //no obligatorios
    dueno_acepta: '',
    descripcion_mascotas: '',
    usuario_fb: '',
    usuario_instagram: '',
  });
}

async function loadPublicacion() {
  await Publicacion.create({
    titulo: 'noticia 2',
    imagen: 'la imagen',
    descripcion: 'esto es una descripcion',
    tipo_publicacion: 'noticia',
    tag: 'perros',
    fecha: '2021-2-3',
    id_usuario: 1,
  });
  await Publicacion.create({
    titulo: 'noticia 3',
    imagen: 'la imagen',
    descripcion: 'esto es una descripcion',
    tipo_publicacion: 'evento',
    tag: 'bingo',
    fecha: '2021-2-3',
    id_usuario: 1,
  });
}

module.exports = { loaddb, loadsample };
