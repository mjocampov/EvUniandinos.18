var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
var mongo = require('mongodb');

/* Mongo Connection*/
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://evUniandinos:evUniandinos.18@mjocampov-kchmz.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri);

var db = undefined;
var users = undefined;
var events = undefined;

client.connect((err) => {
  if(err) throw err;

  console.log('Conectado a monguito!');

  db = client.db('EvUniandinos');
  users = db.collection('Usuarios');
  events = db.collection('Eventos');
});

var usersRouter = require('./routes/users');
var eventsRouter = require('./routes/events');
var indexRouter = require('./routes/index');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', function (req, res, next) {
  req.db_config = {
    usersDB: {users}
  }
  next();
}, usersRouter);

app.use('/events', function (req, res, next) {
  req.db_config = {
    eventsDB: {events}
  }
  next();
}, eventsRouter);

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
