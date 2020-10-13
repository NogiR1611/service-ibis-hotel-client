let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let pesan_klien = require('./routes/pesan_klien');
let hbs = require('hbs');
let bodyParser = require('body-parser');
let index = require("./routes/index");
let list_wisata = require('./routes/tempat_wisata');
let list_event = require('./routes/event');
let cors = require('cors');
let app = express();

app.use(cors());
//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set folder public sebagai static folder untuk static file
app.use(express.static(__dirname + '/public'));

app.use('/',index);
app.use('/tempat-wisata',list_wisata);
app.use('/event',list_event);
app.use('/pesan',pesan_klien);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;