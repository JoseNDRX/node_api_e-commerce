const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
  host: "localhost",
  port: 5432,
  database: "api_e_commerce",
  username: "postgres",
  password: "root",
  dialect: "postgres",
  logging: false,

  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
});

module.exports = db;
