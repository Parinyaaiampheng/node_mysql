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
    var sql = "UPDATE customers SET address = 'Canyon 123' WHERE name = 'Jason'";
    con.query(sql, function (err, result, fields) {
        if (err) throw err; 
        console.log(result.affectedRows + " record(s) updated");
    });
});
