let mysql = require('./node_modules/mysql');
let express = require('./node_modules/express');
let bodyParser = require('./node_modules/body-parser');
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

app.listen(3000);
console.log("server dibuka di port 3000");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/Titipan-barang/input', function (req, res) {
    let nama_barang = nama_barang; 

    con.query("INSERT INTO user SET ? ", { 
        titipan_barang : nama_barang
    }, function (error) {
    if (error) throw error;
        return console.log(res.send({ 
            message: 'Berhasil Menambah Data !'
        }));
    });
});