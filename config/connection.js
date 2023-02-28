const mysql = require("mysql2");

const mysqlConnection = mysql.createConnection(
  {
    host: 'localhost',
    port: 3306,
    user: "root",
    database: "employees_db",
    password: "rootr00t!"
  },
  console.log(`Connected to the DB.`)
);

module.exports = mysqlConnection;
