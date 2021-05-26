import Mascota from '../models/mascota'
const connection = require('../database')

export const getMascotas = async (req, res) => {
    
     connection.query("SELECT * from mascota",function(err, results, fields) {
         if(err){
             console.log("An error ocurred performing the query.");
             return;
         }else{
             res.status(200).json(results);
            console.log("Consulta ejecutada con éxito");
            results.forEach(element => {
                console.log(element);
            });
         }
        
     });
  
};
export const createMascota = async (req, res) => {

//     $query = 'SELECT * from MyTable LIMIT 10';

// connection.query($query, function(err, rows, fields) {
//     if(err){
//         console.log("An error ocurred performing the query.");
//         return;
//     }

//     console.log("Consulta ejecutada con éxito:", rows);
// });

// // Cerrar la conexión
// connection.end(function(){
//     // La conexión se ha cerrado
// });
    
};

export const updateMascotaById = async (req, res) => {
    
};
export const getMascotaById = async (req, res) => {
    connection.query("SELECT * from mascota where id = ?",[req.params.mascotaId],function(err, results, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            return;
        }else{
            res.status(200).json(results);
           console.log("Consulta ejecutada con éxito");
           results.forEach(element => {
               console.log(element);
           });
        }
        
    });

};
export const deleteMascotaById = async (req, res) => {
    
};