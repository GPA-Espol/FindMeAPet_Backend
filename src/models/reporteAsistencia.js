const { Model, DataTypes, NOW } = require('sequelize');
const sequelize = require('../database');
const Usuario = require('./usuario');

/**
 *Class in charge to represent the table of reporteAsistencia in database
 * @category Models
 */
class ReporteAsistencia extends Model {}
ReporteAsistencia.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.DATE,
      defaultValue: NOW,
      allowNull: false,
    },
    comida: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    anomalia: {
      type: DataTypes.STRING(400),
    },
    foto: {
      type: DataTypes.STRING(400),
    },
    mapa: {
      type: DataTypes.STRING(400),
      allowNull: false,
    },
  },
  { underscored: true, sequelize, modelName: 'reporteAsistencia' }
);

Usuario.hasMany(ReporteAsistencia, {
  foreignKey: {
    name: 'id_usuario',
    allowNull: false,
  },
  sourceKey: 'id',
});
ReporteAsistencia.belongsTo(Usuario, {
  foreignKey: {
    name: 'id_usuario',
    allowNull: false,
  },
  targetKey: 'id',
});
module.exports = ReporteAsistencia;
