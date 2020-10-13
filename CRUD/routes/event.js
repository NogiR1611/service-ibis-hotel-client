let express = require("express");
let upload = require("./img_storage");
let router = express.Router();
let model = require("../models");
let list_event = model.list_event;

const getPagination = (page,size) => {
    const limit = size ? +size : 3;
    const offset = page ? page*limit : 0;

    return {offset,limit};
};

const getPagingData = (data,page,limit) => {
    const {count : totalItems,rows : list_events} = data;
    const currentPage = page ? +page : 0;
    const totalPage = Math.ceil(totalItems/limit);

    return { totalItems,list_events,totalPage,currentPage };
}

//mengambil data json
router.get('/json',(req,res) => {
    const {page,size} = req.query;
    const {limit,offset} = getPagination(page,size);

    list_event.findAndCountAll({ limit,offset })
    .then( data => {
        const response = getPagingData(data,page,limit);
        res.send(response);
    })
    .catch( err => {
        res.send(err);
    })
})

//mengambil data untuk pagination
router.get('/',(req,res,next) => {
    list_event.findAll({})
    .then(data => res.json(data))
    .catch( err => {
        res.status(500).send({
            'message' : err.message
        });
    });
});

//mengambil data dalam bentuk tabel
router.get('/list',(req,res,next) => {
    list_event.findAll({})
    .then(data =>{
        res.render('table-event',{
        results : data
        })}
    )
    .catch( err => {
        res.status(500).send({
            'message' : err.message
        });
    });
});

//mengambil data dengan id
router.get('/json/:id',(req,res,next) => {
    const id = req.params.id;

    list_event.findByPk(id)
    .then(data => res.json(data))
    .catch( err => {
        res.status(500).send({
            'message' : err.message
        });
    });
});

//menampilkan file yang berfungsi untuk menambah data
router.get('/tambah-data-event',(req,res) => {
    res.render('data_events');
});

//kirim data
router.post('/kirim-data-event',[
    upload.single('foto')
    ],
    (req,res) => {
    const event = {
        nama_event : req.body.nama_event,
        tempat : req.body.tempat,
        tanggal : req.body.tanggal,
        deskripsi : req.body.deskripsi,
        nomor : req.body.nomor,
        email : req.body.email,
        website : req.body.website,
        foto : req.file.filename
    };
    list_event.create(event)
        .then(data => res.send(data))
        .catch( err => {
            res.status(500).send({
                'message' : err.message || "Terjadi Error pada program yang dibuat"
        })
    })
});

//render form edit data
router.get("/edit/:id",(req,res) => {
    const id = req.params.id;

    list_event.findByPk(id)
    .then(data => {
        res.render('edit_event',{
            results : data
        })
    })
    .catch(err => {
        res.json({
            "messages" : err.messages
        })
    })
})
 
module.exports = router;