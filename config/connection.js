// Set up MySQL connection.
var mysql = require('mysql')
var env = require("dotenv").config()
var sqlPort = process.env.PORT || 3306

var connection = mysql.createConnection({
  host: 'localhost',
  port: sqlPort,
  user: 'root',
  password: "Devils12",
  database: 'burgers_db'
})

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
})

// Export connection for our ORM to use.
module.exports = connection
