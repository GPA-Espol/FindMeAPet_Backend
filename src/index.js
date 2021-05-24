import app from './app';
import './database';

const port = process.env.port || 3000;
console.log(port);
app.listen(port);