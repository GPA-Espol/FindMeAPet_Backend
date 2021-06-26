const { Sequelize } = require('sequelize');
const config = require('./dbconfig');

const sequelize = new Sequelize(
  config.production.database,
  config.production.username,
  config.production.password,
  {
    host: config.production.host,
    dialect: config.production.dialect,
  }
);

module.exports = sequelize;
