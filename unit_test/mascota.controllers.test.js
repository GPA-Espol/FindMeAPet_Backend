const createServer = require('../src/app');
const supertest = require('supertest');
const sequelize = require('../src/database');

beforeAll(async () => {
  await sequelize.sync({ force: true });
  console.log('Se han limpiado los datos');
});

afterAll(async () => {
  await sequelize.close();
});

test('POST /mascota', async () => {
  const data = {
    nombre: 'Pitufa',
    fecha_nacimiento: '2018-12-01',
    color: 'amarillo',
    is_esterilizado: 1,
    is_adoptado: 1,
    is_caso_externo: 0,
    is_adoptable: 1,
    descripcion: 'Es cazador y muy jugueton',
    sexo: 'H',
    fecha_adopcion: '2019-01-01',
    ubicacion: 'DENTRO_ESPOL',
    tipo_mascota: 'gato',
    imagen_url:
      'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/amarillo.jpg?alt=media&token=40a75d30-d4b1-4417-9a29-897a4a9ae068',
  };
  await supertest(app)
    .post('/mascota')
    .send(data)
    .expect(201)
    .then(async (response) => {
      expect(response.body.nombre).toBe(data.nombre);
    });
});

const app = createServer();
