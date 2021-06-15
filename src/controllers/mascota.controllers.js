// import Mascota from '../models/mascota'
const pool = require("../database");
const Mascota = require("../models/mascota")


exports.getMascotas = async (req, res) => {
  const data= await Mascota.findAll({
    attributes: ['id','nombre', 'edad_mes','edad_anio','color','is_esterilizado',
     'is_adoptado', 'is_caso_externo','is_adoptable','descripcion','sexo',
    'fecha_adopcion','ubicacion','tipo_mascota',]
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
    tipo_mascota
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
    tipo_mascota === undefined 
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
    tipo_mascota:tipo_mascota,
  }).then(user => {
    res.status(201).json("Mascota creada");
  })
  console.log(req.body.edad);
  
  
  
  
};

exports.updateMascotaById = async (req,res) => {
  try{
   let body = req.body;
   let data = await Mascota.update(body,{
    where:{
     id:req.params.mascotaId
    }
   });
   res.status(200).json(req.body);
  }catch(error){
    res.status(400).json('Error en la actualizacion');
  }
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
try{
  const data= await Mascota.destroy({
    where: {
      id: req.params.mascotaId
    }
  });
  res.status(200).json('ok');
}catch(error){
  res.status(400).json('Error al eliminar');
}
};
