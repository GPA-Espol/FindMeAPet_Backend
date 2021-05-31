const pool = require('../database');
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    console.log(req.body);
    const registros = await pool.query("SELECT * FROM usuario where usuario = ? and contrasena = ? and estado ='A'",[req.body.usuario,req.body.password]);
    console.log(registros.length);
    if(registros.length!==1){
        res.json("Usuario no existe");
        return;
    }
    const usuario ={
        username:req.body.nombre,password:req.body.password
    };
    jwt.sign({usuario},'secretkey',(error,token)=>{
        res.json({token})
    });
};