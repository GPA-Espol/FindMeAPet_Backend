const createServer = require('../src/app');
const supertest = require('supertest');
const sequelize = require('../src/database');
const Mascota = require('../src/models/mascota');
const sampledb = require('../scriptdb');

var token = null;

const login_user = {
  usuario: 'momo',
  password: '12345momo',
};

const dato_mascota = {
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
  tipo_mascota: 'gato',
  imagen_url:
    'https://firebasestorage.googleapis.com/v0/b/gpa-findmepet.appspot.com/o/amarillo.jpg?alt=media&token=40a75d30-d4b1-4417-9a29-897a4a9ae068',
};

beforeAll(async () => {
  await sequelize.sync({ force: true });
  console.log('Se han limpiado los datos');
  await sampledb.loadsample();
  const response = await supertest(app).post('/auth').send(login_user);
  token = response.body.token;
});

afterAll(async () => {
  await sequelize.drop();
  await sequelize.close();
});

describe("Pet's Service", () => {
  test('PE-01 GET/mascota -- should get all pets', async () => {
    const mascota = await Mascota.create(dato_mascota);
    const response = await supertest(app).get('/mascota');
    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toEqual(1);
    expect(response.body[0].id).toBe(mascota.id);
    expect(response.body[0].nombre).toBe(mascota.nombre);
    expect(response.body[0].fecha_nacimiento).toBe(mascota.fecha_nacimiento);
    expect(response.body[0].color).toBe(mascota.color);
    expect(response.body[0].is_esterilizado).toBe(mascota.is_esterilizado);
    expect(response.body[0].is_adoptado).toBe(mascota.is_adoptado);
    expect(response.body[0].is_caso_externo).toBe(mascota.is_caso_externo);
    expect(response.body[0].is_adoptable).toBe(mascota.is_adoptable);
    expect(response.body[0].descripcion).toBe(mascota.descripcion);
    expect(response.body[0].sexo).toBe(mascota.sexo);
    expect(response.body[0].fecha_adopcion).toBe(mascota.fecha_adopcion);
    expect(response.body[0].ubicacion).toBe(mascota.ubicacion);
    expect(response.body[0].tipo_mascota).toBe(mascota.tipo_mascota);
    expect(response.body[0].imagen_url).toBe(mascota.imagen_url);
  });

  test('PE-02 GET /mascota/:id -- should get a pet ', async () => {
    const mascota = await Mascota.create(dato_mascota);

    const response = await supertest(app).get('/mascota/' + mascota.id);
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(mascota.id);
    expect(response.body.nombre).toBe(mascota.nombre);
    expect(response.body.fecha_nacimiento).toBe(mascota.fecha_nacimiento);
    expect(response.body.color).toBe(mascota.color);
    expect(response.body.is_esterilizado).toBe(mascota.is_esterilizado);
    expect(response.body.is_adoptado).toBe(mascota.is_adoptado);
    expect(response.body.is_caso_externo).toBe(mascota.is_caso_externo);
    expect(response.body.is_adoptable).toBe(mascota.is_adoptable);
    expect(response.body.descripcion).toBe(mascota.descripcion);
    expect(response.body.sexo).toBe(mascota.sexo);
    expect(response.body.fecha_adopcion).toBe(mascota.fecha_adopcion);
    expect(response.body.ubicacion).toBe(mascota.ubicacion);
    expect(response.body.tipo_mascota).toBe(mascota.tipo_mascota);
    expect(response.body.imagen_url).toBe(mascota.imagen_url);
  });

  test('PE-03 POST /mascota -- should create a new pet', async () => {
    const response = await supertest(app)
      .post('/mascota')
      .set('Authorization', `Bearer ${token}`)
      .send(dato_mascota);
    expect(response.statusCode).toBe(201);
    expect(typeof response.body.id).toBe('number');
  });
  test('PE-05 DELETE /mascota/:id -- should delete a pet', async () => {
    const mascota = await Mascota.create(dato_mascota);
    const response = await supertest(app)
      .delete('/mascota/' + mascota.id)
      .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(204);
    expect(
      await Mascota.findOne({
        where: {
          id: mascota.id,
        },
      })
    ).toBeFalsy();
  });
});

const app = createServer();
