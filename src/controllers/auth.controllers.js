const pool = require('../database');

export const login = async (req, res) => {
    console.log(req.body.usuario, req.body.password);
};