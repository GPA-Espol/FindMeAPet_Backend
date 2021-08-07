const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Usuario = require('./usuario');

/**
 * Class in charge to represent the table of usuario in the database
 * @category Models
 */
class Publicacion extends Model {}
Publicacion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    tipo_publicacion: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    tag: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  { underscored: true, sequelize, modelName: 'publicacion', timestamps: false }
);

Usuario.hasMany(Publicacion, {
  foreignKey: 'id_usuario',
});

module.exports = Publicacion;
