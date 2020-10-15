let express = require('express');
let router =express.Router();
let models = require('../models');
let pesan_klien = models.pesan_klien;

/*
router.get('/json',() => {
})
*/

//tampilkan data pesan masuk
router.get('/',(req,res) => {
    pesan_klien.findAll({})
    .then(data => {
        res.render('data_inbox',{
            results : data
        })
    })
    .catch(err =>{
        res.json({
            'err' : err.message
        })
    });
})

//Kirim pesan feedback klien dari web klien
router.post('/kirim',(req,res) => {
    const pesan = {
        nama_kontak : req.body.nama_kontak,
        email   : req.body.email,
        pesan   : req.body.pesan
    };
 
    pesan_klien.create(pesan)
    .then(data => res.send(data))
    .catch( err => {
        res.status(500).send({
            'message' : err.message
        });
    });
});

module.exports = router;