// db code goes here
require('dotenv').config();
const Sequelize = require('sequelize');

const { Op } = Sequelize;

// setup connection to server
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  dialectOptions: {
    ssl: true,
  },
});

// testing connection
sequelize.authenticate()
  .then(() => {
    console.log('Connected DB to server.');
  })
  .catch((error) => {
    console.log('Unable to connect to the DB:', error);
  });

// model object created to import all DB tables
const models = {
  User: sequelize.import('./user'),
  Device: sequelize.import('./devices'),
  Profile: sequelize.import('./profiles'),
  Widget: sequelize.import('./widgets'),
  UserWidgetConfig: sequelize.import('./userWidgetConfigs'),
};

// create relationships between all tables with associations
Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports.models = models;
module.exports.Op = Op;
// module.exports.sequelize = sequelize;
