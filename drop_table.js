var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("DROP TABLE customers", function (err, result) {
          if (err) throw err; 
          console.log("Table Deleted.");
    });
});