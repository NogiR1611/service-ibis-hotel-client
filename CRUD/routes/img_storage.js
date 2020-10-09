let multer = require("multer");
let crypto = require("crypto");
let path = require("path");

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

module.exports = upload;