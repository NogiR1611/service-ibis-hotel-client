let express = require('express');
let multer = require('multer');
let crypto = require('crypto');
let path = require('path');
let router = express.Router();
let model = require("../models");
let list_event = model.list_event;

const storage = multer.diskStorage({
    destination : "/public/images/event",
    filename : function (req,file,cb) {
        crypto.pseudoRandomBytes(8, function (err, raw) {
          if (err) return cb(err)  
    
          cb(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
});
const upload = multer({storage : storage});

router.get('/',(req,res) => {
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