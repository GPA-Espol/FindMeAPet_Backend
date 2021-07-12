const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Usuario = require('./usuario');
/**
 * Class in charge to represent the table of rol in database
 * @category Models
 */
class Rol extends Model {}
Rol.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
  },
  { underscored: true, sequelize, modelName: 'rol' }
);

Rol.hasMany(Usuario, {
  foreignKey: 'id_rol',
});

Usuario.belongsTo(Rol, {
  foreignKey: 'id_rol',
});
module.exports = Rol;
