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
      allowNull: false,
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    color: DataTypes.STRING(50),
    is_esterilizado: DataTypes.BOOLEAN,
    is_adoptado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_caso_externo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_adoptable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    descripcion: DataTypes.STRING(400),
    sexo: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    fecha_adopcion: DataTypes.DATEONLY,
    ubicacion: {
      type: DataTypes.STRING(400),
      allowNull: false,
    },
    tipo_mascota: {
      type: DataTypes.STRING(50),
      allowNull: false,
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
