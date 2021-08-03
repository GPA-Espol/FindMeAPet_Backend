const { Sequelize } = require('sequelize');
const config = require('./dbconfig');

/**
 * A sequelize instance create the connection to the database
 * @typedef {Object} Sequelize
 * @property {string} database - Name of the database
 * @property {string} username - Username of the connection
 * @property {string} password - Password of the connection
 * @property {Object} host - Host and dialect of the database
 */

/**
 * @type {Sequelize}
 */
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
