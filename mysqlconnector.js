//mysql driver
const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  connectionLimit: 10, //important
  host: "localhost",
  user: "root",
  password: process.env.SQL_PASSWORD,
  database: "betterpoll",
  port: process.env.PORT,
});

module.exports = pool;
