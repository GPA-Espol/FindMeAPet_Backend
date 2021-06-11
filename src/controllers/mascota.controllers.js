// import Mascota from '../models/mascota'
const pool = require('../database');


exports.getMascotas = async (req, res) => {
    const registros = await pool.query("SELECT * FROM mascota");
    res.status(200).json(registros);


};
exports.createMascota = async (req, res) => {
    console.log(req.body.edad);
    const { nombre, edad, color, is_esterilizado, is_adoptado, is_caso_externo, is_adoptable, descripcion, sexo, fecha_adopcion, ubicacion, estado, id_personalidad } = req.body;
    if (nombre === undefined || edad === undefined || color === undefined || is_esterilizado === undefined || is_adoptado === undefined || is_caso_externo === undefined || is_adoptable === undefined || descripcion === undefined || sexo === undefined || fecha_adopcion === undefined || ubicacion === undefined || estado === undefined || id_personalidad === undefined) {
        res.status(400).json("Debe llenar todos los campos");
        return;
    }
    const mascotaCreada = await pool.query("insert into mascota(nombre,edad,color,is_esterilizado,is_adoptado,is_caso_externo,is_adoptable,descripcion,sexo,fecha_adopcion,ubicacion,estado,id_personalidad) values(?,?,?,?,?,?,?,?,?,?,?,?,?)", [nombre, edad, color, is_esterilizado, is_adoptado, is_caso_externo, is_adoptable, descripcion, sexo, fecha_adopcion, ubicacion, estado, id_personalidad])
    console.log(mascotaCreada);
    res.status(201).json("Mascota creada");


};

exports.updateMascotaById = async (req, res) => {

};
exports.getMascotaById = async (req, res) => {
    const registros = await pool.query("SELECT * from mascota where id = ?", [req.params.mascotaId]);
    res.status(200).json(registros);


};
exports.deleteMascotaById = async (req, res) => {

};