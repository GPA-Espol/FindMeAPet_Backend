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
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    estado_civil: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    telefono_fijo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    movil: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    provincia: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ciudad: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    direccion_domicilio: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    correo_electronico: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    como_conocio_gpa: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    num_ninos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    num_adultos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    familia_acepta: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    familia_alergica: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    compromiso_esterilizacion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    tipo_vivienda: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    is_alquilada: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_tiene_mascotas: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    dos_contacto_referencia: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    planilla: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    usuario_fb: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    usuario_instagram: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    dueno_acepta: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    descripcion_mascotas: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },

    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
