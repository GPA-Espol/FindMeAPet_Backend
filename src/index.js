// import app from './app';
const app = require('./app')
require('./database')
// import './database';

const port = process.env.port || 3000;
console.log(port);
app.listen(port);