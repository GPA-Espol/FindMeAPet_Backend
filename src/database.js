const { Sequelize } = require('sequelize');





const sequelize = new Sequelize('proyecto_gpa', 'gpa_user', 'gpa_user', {
  host: 'te-learning.com',
  dialect: 'mysql',
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
});


module.exports = sequelize;
