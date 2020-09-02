let express = require('express');
let router = express.Router();

router.get('/',function(res,req){
    res.send("API berjalan dengan lancar")
});

module.exports = router;