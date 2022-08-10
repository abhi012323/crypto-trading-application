const db = require("sequelize");
require("dotenv").config();

const sequelize = new db(
  process.env.DATABASE_NAME,
    process.env.DATABASE_USER_NAME,
    process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.host,
    port: "3306",
  }
);
module.exports = sequelize;
