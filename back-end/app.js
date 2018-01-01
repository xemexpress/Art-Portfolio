var fs = require('fs'),
    http = require('http'),
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    passport = require('passport'),
    errorhandler = require('errorhandler'),
    mongoose = require('mongoose');

var isProduction = process.env.NODE_ENV === 'production'

var app = express();

app.use(cors());

app.use(require('morgan')('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('method-override')());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'art-portfolio', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if(!isProduction){
  app.use(errorhandler());
}

if(isProduction){
  mongoose.connect(process.env.MONGODB_URI);
}else{
  mongoose.connect('mongodb://localhost/art-portfolio', {
    useMongoClient: true
  });
  mongoose.set('debug', true);
}

// Models
require('./models/User')

// Middlewares
require('./config/passport')

// Routes
app.use(require('./routes'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler

// development mode: reveal errors to developers
app.use(function(err, req, res, next){
  console.log(err.stack)

  res.status(err.status || 500)
  // no stacktrace leaked to user if in production mode.
  res.json({
    errors: {
      message: err.message,
      error: isProduction ? {} : err
    }
  })
})

var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Listening on port ' + server.address().port)
})
