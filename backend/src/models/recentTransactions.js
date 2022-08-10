const db = require('sequelize');

const sequelize = require('../util/database');

const recentTransaction = sequelize.define('transaction', {
  id: {
    type: db.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  type: db.STRING,
  cryptoAmount : db.FLOAT,
  dollarAmount : db.FLOAT,
  date:db.DATE
});

module.exports = recentTransaction;
