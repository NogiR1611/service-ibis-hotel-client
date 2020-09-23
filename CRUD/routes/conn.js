let mysql = require('mysql');

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'hotel_ibis_pasteur'
});

module.exports = conn;