var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');

require('./config/database');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const tasksRouter = require('./routes/new-tasks');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// method-override middleware (after body parsers)
app.use(methodOverride('_method'));


app.use('/', indexRouter);         
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);    

app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
