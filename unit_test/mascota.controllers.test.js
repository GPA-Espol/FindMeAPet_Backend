const createServer = require('../src/app');
const supertest = require('supertest');
const sequelize = require('../src/database');
const Mascota = require('../src/models/mascota');
jest.setTimeout(30000);

const dato_mascota = {
  nombre: 'Peluso',
  fecha_nacimiento: '2018-12-01',
  color: 'blanco',
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
});

afterAll(async () => {
  await sequelize.drop();
  await sequelize.close();
});

describe("Pet's Service", () => {
  let server;
  let api;
  beforeAll((done) => {
    server = app.listen(4000, (err) => {
      if (err) {
        done(err);
      }
      api = supertest.agent(server);
      done();
    });
  });

  test('PE-01 GET/mascota -- should get all pets', async () => {
    const mascota = await Mascota.create(dato_mascota);

    const response = await api.get('/mascota').expect(200);
    expect(response.body).toBeTruthy();
    /*.then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
        /*expect(response.body.length).toEqual(1);
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
        expect(response.body[0].imagen_url).toBe(mascota.imagen_url);*/
    /*done();
      });*/
  });

  /*test('PE-02 GET /mascota/:id -- should get a pet ', async (done) => {
    const mascota = await Mascota.create(dato_mascota);

    api
      .get('/mascota/' + mascota.id)
      .expect(200)
      .then((response) => {
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
        done();
      });
  });

  test('PE-03 POST /mascota -- should create a new pet', async (done) => {
    api
      .post('/mascota')
      .send(dato_mascota)
      .expect(201)
      .then(async (response) => {
        expect(response.body.nombre).toBe(dato_mascota.nombre);
        expect(response.body.fecha_nacimiento).toBe(dato_mascota.fecha_nacimiento);
        expect(response.body.color).toBe(dato_mascota.color);
        expect(response.body.is_esterilizado).toBe(dato_mascota.is_esterilizado);
        expect(response.body.is_adoptado).toBe(dato_mascota.is_adoptado);
        expect(response.body.is_caso_externo).toBe(dato_mascota.is_caso_externo);
        expect(response.body.is_adoptable).toBe(dato_mascota.is_adoptable);
        expect(response.body.descripcion).toBe(dato_mascota.descripcion);
        expect(response.body.sexo).toBe(dato_mascota.sexo);
        expect(response.body.fecha_adopcion).toBe(dato_mascota.fecha_adopcion);
        expect(response.body.ubicacion).toBe(dato_mascota.ubicacion);
        expect(response.body.tipo_dato_mascota).toBe(dato_mascota.tipo_dato_mascota);
        expect(response.body.imagen_url).toBe(dato_mascota.imagen_url);
        done();
      });
  });
  test('PE-05 DELETE /mascota/:id -- should delete a pet', async (done) => {
    const mascota = await Mascota.create(dato_mascota);
    api
      .delete('/mascota/' + mascota.id)
      .expect(204)
      .then(async () => {
        expect(
          await Mascota.findOne({
            where: {
              id: mascota.id,
            },
          })
        ).toBeFalsy();
        done();
      });
  });*/
  afterAll((done) => {
    server && server.close(done);
  });
});

const app = createServer();
