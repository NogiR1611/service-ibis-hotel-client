let express = require('express');
let conn = require('./conn');
let render_wisata = express.Router();

render_wisata.get('/',(req,res) => {
    let sql = "SELECT*FROM tempat_wisata";
    let query = conn.query(sql,(err,results => {
        if (err) throw err;
        res.render('Tempat_Wisata',{
            results : results
        });
    }));
});

module.exports = render_wisata;