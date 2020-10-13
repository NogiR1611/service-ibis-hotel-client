let express = require('express');
let upload = require('./img_storage');
let router = express.Router();
let model = require('../models');
let list_wisata = model.list_tempat_wisata;

//untuk membuat dan menjalankan pagination pada list wisata
const getPagination = (page,size) => {
    const limit = size ? +size : 3;
    const offset = page ? page*limit : 0;

    return {offset,limit};
};

const getPagingData = (data,page,limit) => {
    const {count : totalItems,rows : list_wisata} = data;
    const currentPage = page ? +page : 0;
    const totalPage = Math.ceil(totalItems/limit);

    return { totalItems,list_wisata,totalPage,currentPage };
}

//untuk membuat API yang menyetting banyaknya item list pada pagination secara otomatis
router.get('/json',(req,res) => {
    const {page,size} = req.query;
    const {limit,offset} = getPagination(page,size);

    list_wisata.findAndCountAll({ limit,offset })
    .then(data => {
        const response = getPagingData(data,page,limit);
        res.send(response);
    })
    .catch(err => {
         res.send(err);
    })
})

//data json
router.get('/',(req,res,next) => {
    list_wisata.findAll({})
    .then(data => res.json(data))
    .catch( err => {
        res.status(500).send({
            'message' : err.message
        });
    });
});

//ambil data json dengan id
router.get('/json/:id',(req,res,next) => {
    const id = req.params.id;

    list_wisata.findByPk(id)
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
        res.render('table-wisata',{
            results : data
        });
    })
    .catch(err => {
        res.json({
            'err' : err.message
        });
    });
});

router.get('/tambah-data-wisata',(req,res,next) => {
    res.render('data_wisata');
});

//tambah data
router.post('/kirim-data-wisata',[
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
            res.status(500).send({
                'message' : err.message || "Terjadi Error pada program yang dibuat"
        });
    });
});

//konfirmasi edit data
router.get('/edit/:id',(req,res) => {
    const id = req.params.id;

    list_wisata.findByPk(id)
    .then(data => {
        res.render('edit_wisata',{
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

//pagination data


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