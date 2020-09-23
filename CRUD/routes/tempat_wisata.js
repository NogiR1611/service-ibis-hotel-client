let express = require('express');
let conn = require('./conn');
let router = express.Router();
let model = require('../models');
let list_wisata = model.list_tempat_wisata;

//data json
router.get('/json',(req,res,next) => {
    list_wisata.findAll({})
    .then(data => res.json(data))
    .catch( err => {
        res.status(500).send({
            'message' : err.message
        });
    });
});

//lihat data
router.get('/list',(req,res,next) => {
    list_wisata.findAll({})
    .then(data => {
        res.render('list',{
            results : data
        });
    })
    .catch(err => {
        res.json({
            'err' : err.message
        });
    });
});

router.get('/tambah',(req,res,next) => {
    res.render('data');
});

//tambah data
router.post('/kirim',(req,res,next) => {
    const tempat_wisata = {
        nama_tempat_wisata : req.body.nama_tempat_wisata,
        lokasi : req.body.lokasi,
        harga : req.body.harga,
        deskripsi : req.body.deskripsi
    };

    list_wisata.create(tempat_wisata)
        .then(data => res.send(data))
        .catch( err => {
            res.status(500).res.send({
                'message' : err.message || "Terjadi Error pada program yang dibuat"
        });
    });
});

//update data
router.get('/edit/:id',(req,res) => {
    const id = req.params.id;

    list_wisata.findByPk(id)
    .then(data => {
        res.render('findOne',{
            results : data
        });
    })
    .catch(err => {
        res.json({
            'messages' : err.messages
        });
    });
});

//hapus data
router.delete('/delete/:id',(req,res) => {
    const id = req.params.id;

    list_wisata.destroy({
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Tutorial was deleted successfully!"
            });
        } else {
            res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Could not delete Tutorial with id=" + id
        });
    });
});

/*
router.delete('/delete/:id',(req,res) => {
    const id = req.params.id;

    list_wisata.destroy({ where : {id:id} })
    .then(num =>{
        if (num) {
        res.send({
            message : 'Data Terhapus'
        })}
        else{
            res.send({
                message : 'Data tak bisa dihapus'
            })
        }
    })
    .catch(err => {
        res.render('error',{
            results : err
        })
    });
});
*/

module.exports = router;