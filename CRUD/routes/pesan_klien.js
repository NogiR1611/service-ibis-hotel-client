let express = require('express');
let router =express.Router();
let models = require('../models');
let pesan_klien = models.pesan_klien;

//tampilkan data pesan masuk
router.get('/',(req,res,next) => {

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

router.get('/:id',(req,res,next) => {
    const id = req.params.id;

    pesan_klien.findByPk(id)
    .then( data => {
        res.render('pesan_klien',{
            results : data
        });
    })
    .catch( err => {
        res.send(err);
    });
});

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

//hapus item
router.post('/hapus/:id',(req,res) => {
    const id = req.params.id;

    pesan_klien.destroy({
        where : {id : id}
    })
    .then(num => {
        if(num === 1){
            res.redirect('/pesan');
        }
        else{
        res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
        }
    })
    .catch( err => {
        res.status.send({
            "message " : err.message
        });
    });
})

module.exports = router;