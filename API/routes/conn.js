let mysql = require('mysql');

const conn = 
mysql.createConnection({
    host : "localhost",
    username : "root",
    password : "",
    database : "db_ibispasteur"
});

module.exports = conn;