
import mongoose from 'mongoose';
const uri = "mongodb+srv://findmepet:findmepet@cluster.jw3dz.mongodb.net/findmepet?retryWrites=true&w=majority";
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(db => console.log("Conectado a mongo atlas"))
.catch(er => console.log(er));


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://findmepet:findmepet@cluster.jw3dz.mongodb.net/findmepet?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// console.log("en la bd");
// client.connect(err => {
//     console.log("err");
//   const collection = client.db("findmepet").collection("animal");
//   console.log(collection);
//   // perform actions on the collection object
//   client.close();
// });