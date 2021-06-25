const app = require('./app');
require('./database');

const port = process.env.port || 3000;
console.log(port);
app.listen(port);
