let express = require('express');
let conn = require('./conn');
let post_wisata = express.Router();

post_wisata.post('/form',(req,res) => {
    let data = {
        Nama_tempat_wisata : req.body.Nama_tempat_wisata,
        Lokasi : req.body.Lokasi,
        Harga : req.body.Harga,
        Deskripsi : req.body.Deskripsi
    };
    let sql = "INSERT INTO list_tempat_wisata SET ?";
    let query = conn.query(sql,data,(err,results) => {
        if (err) throw err;
        res.redirect('/isi');
    });
});

module.exports = post_wisata;
