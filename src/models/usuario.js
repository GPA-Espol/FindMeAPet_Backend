const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

/**
 * Class in charge to represent the table of usuario in the database
 * @category Models
 */
class Usuario extends Model {}
Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    usuario: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    correo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    contrasena: {
      type: DataTypes.STRING(50),
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
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    sexo: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    is_est_espol: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imagen_url: {
      type: DataTypes.STRING(400),
    },
    estado: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
  },
  { underscored: true, sequelize, modelName: 'usuario' }
);

module.exports = Usuario;
