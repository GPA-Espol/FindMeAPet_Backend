const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Mascota = require('./mascota');
const Usuario = require('./usuario');

/**
 *Class in charge to represent the table of formularioAdopcion in database
 * @category Models
 */
class FormularioAdopcion extends Model {}
FormularioAdopcion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    cedula: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ciudad: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    fecha_nacimiento: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    fecha: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    motivo: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    ubicacion: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    estado_civil: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    numero_mascotas: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    contacto_referencia: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    usuario_fb: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    usuario_instagram: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    is_tiene_mascotas: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    otras_mascotas: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    is_mascotas_esterilizadas: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    is_tenia_antes_mascotas: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    situacion_mascotas_anteriores: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    is_visitas_periodicas: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    is_convivencia_ninos: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    is_asmatico: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tipo_domicilio: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    vision_adoptado: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    is_espacio_suficiente: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    donde_dormir_mascota: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    tiempo_solo: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    medidas_tomaria: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    is_esterilizaria_adoptado: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    motivo_esterilizaria_adoptado: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    situacion_inesperada_cambios: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
  },
  { underscored: true, sequelize, modelName: 'formularioAdopcion', timestamps: false }
);

Mascota.hasMany(FormularioAdopcion, {
  foreignKey: 'id_mascota',
});

Usuario.hasMany(FormularioAdopcion, {
  foreignKey: 'id_administrador',
});
module.exports = FormularioAdopcion;
