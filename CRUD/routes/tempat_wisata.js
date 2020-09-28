let express = require('express');
let multer = require('multer');
let crypto = require('crypto');
let path = require('path');
let conn = require('./conn');
let router = express.Router();
let model = require('../models');
let list_wisata = model.list_tempat_wisata;
/*
const dirUpload = './../../src/Components/img/tempat_wisata/';
*/

const storage = multer.diskStorage({
  destination : "./public/images/" ,
  filename : function (req,file,cb) {
    crypto.pseudoRandomBytes(8, function (err, raw) {
      if (err) return cb(err)  

      cb(null, raw.toString('hex') + path.extname(file.originalname))
  })
  }
});
const upload = multer({storage : storage});

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

//konfirmasi hapus
router.get('/delete/:id',(req,res) => {
    const id = req.params.id;

    list_wisata.findByPk(id)
    .then(data => {
        res.render('delete',{
            results : data
        });
    })
    .catch(err => {
        res.json({
            'status' : 'error',
            'messages' : err.messages
        })
    })
});

//lihat data semuanya
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
router.post('/kirim',[
    upload.single('urlimage')
    ],
    (req,res,next) => {
    const tempat_wisata = {
        nama_tempat_wisata : req.body.nama_tempat_wisata,
        lokasi : req.body.lokasi,
        harga : req.body.harga,
        urlimage : req.file.filename,
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

//konfirmasi edit data
router.get('/edit/:id',(req,res) => {
    const id = req.params.id;

    list_wisata.findByPk(id)
    .then(data => {
        res.render('update',{
            results : data
        });
    })
    .catch(err => {
        res.json({
            'messages' : err.messages
        });
    });
});

//edit data
router.post('/update/:id',(req,res) => {
    const id = req.params.id;
    const {
        nama_tempat_wisata,
        lokasi,
        harga,
        urlimage,
        deskripsi
    } = req.body;

    list_wisata.update({
        nama_tempat_wisata,
        lokasi,
        harga,
        urlimage,
        deskripsi
    },{
        where : { id : id}
    })
    .then( data => {
        res.send({
            message : 'Data telah di update',
            data : data
        });
    })
    .catch( err => {
        res.send({
            message : err.message
        });
    });
});

//hapus data
router.post('/hapus/:id',(req,res) => {
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