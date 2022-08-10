const Sequelize = require('sequelize')

const sequelize = require('../util/database')
const RecentTransaction = require('./recentTransactions')
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  availableBalance: Sequelize.FLOAT,
  purchasedCrypto: Sequelize.JSON,
  trend: Sequelize.JSON,
})
User.hasMany(RecentTransaction, { foreignKey: 'userID' })
module.exports = User
