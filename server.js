let mysql = require('mysql');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "db_ibispasteur"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.get('/',function(req,res){
    res.send('Hello world');
})

app.listen(8080);
console.log("server dibuka di port 8080");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/Titipan-barang/input', function (req, res) {
    let titipan_barang = req.body.titipan_barang; 

    con.query(`INSERT INTO user SET ? `,
    {titipan_barang},
    function (error) {
        if (error) throw error;
        return console.log(res.send({ 
            message: 'Berhasil Menambah Data !'
        }));
    });
});