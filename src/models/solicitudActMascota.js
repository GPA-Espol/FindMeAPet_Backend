const { Model, DataTypes, NOW } = require('sequelize');
const sequelize = require('../database');
const Usuario = require('./usuario');
const Mascota = require('./mascota');

/**
 *Class in charge to represent the table of reporteAsistencia in database
 * @category Models
 */
class SolicitudActualizacionMascota extends Model {}
SolicitudActualizacionMascota.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    color: { type: DataTypes.STRING(50), allowNull: true },
    is_esterilizado: { type: DataTypes.BOOLEAN, allowNull: true },
    is_adoptado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    is_caso_externo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    is_adoptable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: { type: DataTypes.STRING(400), allowNull: true },
    sexo: {
      type: DataTypes.CHAR,
      allowNull: true,
    },
    fecha_adopcion: DataTypes.DATEONLY,
    ubicacion: {
      type: DataTypes.STRING(400),
      allowNull: true,
    },
    tipo_mascota: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  { underscored: true, sequelize, modelName: 'solicitudActMascota', timestamps: false }
);

Usuario.hasMany(SolicitudActualizacionMascota, {
  foreignKey: 'id_usuario_admin',
});

Usuario.hasMany(SolicitudActualizacionMascota, {
  foreignKey: 'id_usuario_voluntario',
});

Mascota.hasMany(SolicitudActualizacionMascota, {
  foreignKey: 'id_mascota',
});

module.exports = SolicitudActualizacionMascota;
