const Sequelize = require('sequelize')

const sequelize = require('../util/database')
const RecentTransaction = require('./recentTransactions')

const Cryptocurrency = sequelize.define('cryptocurrency', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  symbol: Sequelize.STRING,
  currentValue: Sequelize.FLOAT,
  icon: Sequelize.STRING,
  trend: Sequelize.JSON,
})
Cryptocurrency.hasMany(RecentTransaction, { foreignKey: 'cryptoID' })
module.exports = Cryptocurrency
