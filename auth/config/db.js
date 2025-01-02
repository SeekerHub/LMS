const { Sequelize, DataTypes } = require('sequelize');

// Load environment variables
require('dotenv').config();

// MySQL database connection using Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const User = require('../models/User')(sequelize, DataTypes);

// Sync the database and create the table if it doesn't exist
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(error => {
    console.error('Unable to create table:', error);
  });

module.exports = { sequelize, User };
