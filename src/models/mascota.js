const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");
class Mascota extends Model {}
Mascota.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING(400),
    edad_mes: DataTypes.INTEGER,
    edad_anio: DataTypes.INTEGER,
    color: DataTypes.STRING(400),
    is_esterilizado: DataTypes.BOOLEAN,
    is_adoptado: DataTypes.BOOLEAN,
    is_caso_externo: DataTypes.BOOLEAN,
    is_adoptable: DataTypes.BOOLEAN,
    descripcion: DataTypes.STRING(400),
    sexo: DataTypes.CHAR,
    fecha_adopcion: DataTypes.DATEONLY,
    ubicacion: DataTypes.STRING(400),
    tipo_mascota: DataTypes.STRING(400),
 
  },
  { sequelize, modelName: "mascota" }
);

module.exports = Mascota;
