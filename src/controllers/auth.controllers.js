const pool = require('../database');
const crypto = require('crypto');
const jwt = require('jsonwebtoken')
// import jwt from 'jsonwebtoken';

exports.login = async (req, res) => {
    console.log(req.body);
    const hash = crypto.createHash('sha256').update(req.body.password).digest('base64');
    console.log(hash);
    const registros = await pool.query("SELECT id_rol FROM usuario where usuario = ? and contrasena = ? and estado ='A'",[req.body.usuario,hash]);
    const perfil = await pool.query("SELECT nombre FROM rol where id = ? and estado ='A'",[registros[0].id_rol]);
    console.log(registros[0].id_rol,perfil);
    if(registros.length!==1){
        res.json("Usuario no existe");
        return;
    }
    const usuario ={
        id:registros[0].id_rol,rol:perfil[0].nombre
    };
    jwt.sign({usuario},'secretkey',(error,token)=>{
        res.json({token})
    });
};