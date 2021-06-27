const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');
class Mascota extends Model {}
Mascota.init(
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
    imagen_url: DataTypes.STRING(400),
  },
  { sequelize, modelName: 'mascota' }
);

module.exports = Mascota;
