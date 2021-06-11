// import Mascota from '../models/mascota'
const pool = require("../database");
const Mascota = require("../models/mascota")


exports.getMascotas = async (req, res) => {
  const data= await Mascota.findAll({
    attributes: ['id','nombre', 'edad_mes','edad_anio','ubicacion','descripcion']
  });
  
  res.status(200).json(data);
};
exports.createMascota = async (req, res) => {
  console.log(req.body)
  
  const {
    nombre,
    edad_mes,
    edad_anio,
    color,
    is_esterilizado,
    is_adoptado,
    is_caso_externo,
    is_adoptable,
    descripcion,
    sexo,
    fecha_adopcion,
    ubicacion,
    estado
    
  } = req.body;
  if (
    nombre === undefined ||
    edad_anio === undefined ||
    edad_mes === undefined ||
    color === undefined ||
    is_esterilizado === undefined ||
    is_adoptado === undefined ||
    is_caso_externo === undefined ||
    is_adoptable === undefined ||
    descripcion === undefined ||
    sexo === undefined ||
    fecha_adopcion === undefined ||
    ubicacion === undefined ||
    estado === undefined 
  ) {
    res.status(400).json("Debe llenar todos los campos");
    return;
  }
  await Mascota.create({
    nombre: nombre,
    edad_mes: edad_mes,
    edad_anio:edad_anio,
    color: color,
    is_esterilizado: is_esterilizado,
    is_adoptado: is_adoptado,
    is_caso_externo: is_caso_externo,
    is_adoptable: is_adoptable,
    descripcion: descripcion,
    sexo:sexo,
    fecha_adopcion:fecha_adopcion,
    ubicacion:ubicacion,
    estado:estado
  }).then(user => {
    res.status(201).json("Mascota creada");
  })
  console.log(req.body.edad);
  
  
  
  
};

exports.updateMascotaById = async (req, res) => {
  const {
    nombre,
    edad_mes,
    edad_anio,
    color,
    is_esterilizado,
    is_adoptado,
    is_caso_externo,
    is_adoptable,
    descripcion,
    sexo,
    fecha_adopcion,
    ubicacion
    
  } = req.body;
  if (
    nombre === undefined ||
    edad_anio === undefined ||
    edad_mes === undefined ||
    color === undefined ||
    is_esterilizado === undefined ||
    is_adoptado === undefined ||
    is_caso_externo === undefined ||
    is_adoptable === undefined ||
    descripcion === undefined ||
    sexo === undefined ||
    fecha_adopcion === undefined ||
    ubicacion === undefined 
  ) {
    res.status(400).json("Debe llenar todos los campos");
    return;
  }

  await Mascota.update({
    nombre: nombre,
    edad_mes: edad_mes,
    edad_anio:edad_anio,
    color: color,
    is_esterilizado: is_esterilizado,
    is_adoptado: is_adoptado,
    is_caso_externo: is_caso_externo,
    is_adoptable: is_adoptable,
    descripcion: descripcion,
    sexo:sexo,
    fecha_adopcion:fecha_adopcion,
    ubicacion:ubicacion
  },{
    where:{
      id : req.params.mascotaId
    }
  }).then(mascota => {
    res.status(201).json("Mascota actualizada");
  });

  
};
exports.getMascotaById = async (req, res) => {
  const data= await Mascota.findAll({
    where: {
      id: req.params.mascotaId
    }
  });
  
  res.status(200).json(data);
};
exports.deleteMascotaById = async (req, res) => {
    
};
