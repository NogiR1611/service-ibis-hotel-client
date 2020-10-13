let express = require('express');
let router =express.Router();
let models = require('../models');
let pesan_klien = models.pesan_klien;

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