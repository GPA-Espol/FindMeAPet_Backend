const Mascota = require('./src/models/mascota');
const Rol = require('./src/models/rol');
const Usuario = require('./src/models/usuario');
const crypto = require('crypto');

async function loaddb() {
  loadMascota();
  loadRol();
  loadUsuario();
}

async function loadMascota() {
  await Mascota.create({
    nombre: 'Peluso',
    fecha_nacimiento: '2018-12-01',
    color: 'amarillo',
    is_esterilizado: 1,
    is_adoptado: 1,
    is_caso_externo: 0,
    is_adoptable: 1,
    descripcion: 'Es cazador y muy jugueton',
    sexo: 'M',
    fecha_adopcion: '2019-01-01',
    ubicacion: 'Dentro espol',
    tipo_mascota: 'Gato',
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/amarillo.jpg?alt=media&token=40a75d30-d4b1-4417-9a29-897a4a9ae068',
  });
  await Mascota.create({
    nombre: 'Cenicienta',
    fecha_nacimiento: '2021-02-01',
    color: 'plomo',
    is_esterilizado: 1,
    is_adoptado: 1,
    is_caso_externo: 0,
    is_adoptable: 1,
    descripcion: 'Es muy juguetona',
    sexo: 'H',
    ubicacion: 'Refugio',
    tipo_mascota: 'Gato',
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/pensando%20en%20ti.webp?alt=media&token=053b73a1-0f8b-4e5e-9d6e-1d7b216b09da',
  });
  await Mascota.create({
    nombre: 'Mimi',
    fecha_nacimiento: '2010-12-01',
    color: 'blanco con naranja',
    is_esterilizado: 1,
    is_adoptado: 0,
    is_caso_externo: 0,
    is_adoptable: 1,
    descripcion: 'Es carinosa',
    sexo: 'H',
    ubicacion: 'Dentro espol',
    tipo_mascota: 'Gato',
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/pantera.jpg?alt=media&token=ac4c584d-bc50-49ad-ac3f-826d02225cf8',
  });
  await Mascota.create({
    nombre: 'Panda',
    fecha_nacimiento: '2010-12-01',
    color: 'blanco con negro',
    is_esterilizado: 0,
    is_adoptado: 0,
    is_caso_externo: 0,
    is_adoptable: 0,
    descripcion: 'Es feroz',
    sexo: 'M',
    ubicacion: 'Dentro espol',
    tipo_mascota: 'Gato',
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/pensando%20en%20ti.webp?alt=media&token=053b73a1-0f8b-4e5e-9d6e-1d7b216b09da',
  });
  await Mascota.create({
    nombre: 'Pototo',
    fecha_nacimiento: '2021-02-15',
    color: 'negro',
    is_esterilizado: 0,
    is_adoptado: 0,
    is_caso_externo: 1,
    is_adoptable: 1,
    descripcion: 'Es juguetona',
    sexo: 'M',
    ubicacion: 'Externo',
    tipo_mascota: 'Gato',
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/pantera.jpg?alt=media&token=ac4c584d-bc50-49ad-ac3f-826d02225cf8',
  });
  await Mascota.create({
    nombre: 'Oreo',
    fecha_nacimiento: '2021-01-01',
    color: 'blanco con negro',
    is_esterilizado: 0,
    is_adoptado: 0,
    is_caso_externo: 0,
    is_adoptable: 1,
    descripcion: 'Es muy jugueton',
    sexo: 'M',
    ubicacion: 'Refugio',
    tipo_mascota: 'Perro',
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/husky-siberiano-bosque.jpg?alt=media&token=ad47cd95-ab9a-4150-aab2-ff3b37a2648f',
  });
  await Mascota.create({
    nombre: 'Teo',
    fecha_nacimiento: '2018-12-01',
    color: 'romano',
    is_esterilizado: 1,
    is_adoptado: 1,
    is_caso_externo: 0,
    is_adoptable: 1,
    descripcion: 'Es cazador y muy jugueton',
    sexo: 'M',
    fecha_adopcion: '2019-01-01',
    ubicacion: 'Refugio',
    tipo_mascota: 'Gato',
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/teito.jpg?alt=media&token=1d2d830d-9962-4f99-ac7f-7616d76ec91a',
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
}

async function loadRol() {
  await Rol.create({ nombre: 'Admin', estado: 'A' });
  await Rol.create({ nombre: 'Voluntario', estado: 'A' });
}

module.exports = { loaddb };
