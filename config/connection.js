
var mysql = require("mysql");

var infoMan = require("../info.js")

var infoWordMan = infoMan.wordThing

// var connection = mysql.createConnection({
//   port: 3306,
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// });


var connection = mysql.createConnection(process.env.JAWSDB_URL);



connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection
