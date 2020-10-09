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

router.get('/tambah',(req,res) => {
    res.render('dataevents');
});

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
})

module.exports = router;