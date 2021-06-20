const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");
const Rol = require("./rol");
class Usuario extends Model {}
Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    usuario:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    correo:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contrasena:{
        type: DataTypes.STRING,
        allowNull: false
        
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    edad:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    sexo:{
        type: DataTypes.CHAR,
        allowNull: false,
    },
    is_est_espol:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    foto:{
        type: DataTypes.BLOB,
        allowNull: false,
    },
    estado:{
        type: DataTypes.CHAR,
        allowNull: false,
    },
    rolId:{
        type: DataTypes.INTEGER,
        allowNull :false,
        references:{
            model: 'rols',
            key:'id'
        }
    }
  },
  { sequelize, modelName: "usuario" }
);


  
module.exports = Usuario;