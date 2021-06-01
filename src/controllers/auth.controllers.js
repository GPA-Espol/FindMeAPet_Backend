const pool = require('../database');
const jwt = require('jsonwebtoken')
// import jwt from 'jsonwebtoken';

exports.login = async (req, res) => {
    console.log(req.body);
    const registros = await pool.query("SELECT * FROM usuario where usuario = ? and contrasena = ? and estado ='A'",[req.body.usuario,req.body.password]);
    console.log(registros,registros.length,registros[0].id);
    if(registros.length!==1){
        res.json("Usuario no existe");
        return;
    }
    const usuario ={
        username:req.body.nombre,password:req.body.password
    };
    jwt.sign({usuario},'secretkey',(error,token)=>{
        res.json({token,id:registros[0].id,nombre:registros[0].nombre +" " + registros[0].apellido, usuario:registros[0].usuario})
    });
};