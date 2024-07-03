var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");

    
    var customers = [
        ['Jason', 'Highway 37'],
        ['Emma', 'Park Avenue'],
        ['Michael', 'Boulevard 42'],
        ['Sophia', 'Main Street'],
        ['William', 'Sunset Boulevard']
    ];

    var sql = "INSERT INTO Customers (name, address) VALUES ?";
    con.query(sql, [customers], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
    con.end();
});
