var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var getDataRouter = require('./routes/getData');

var app = express();

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var tediousExpress = require('express4-tedious');
// var sql = require('mssql')

var sql= require('./public/javascripts/SQLConnect')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());

var corsOption = 
{
  origin : "*",
  optionsSuccessStatus : 200
};

app.get('/', (req,res)=>{
  console.log("In backdend");
})
app.use(cors(corsOption));

sql.connect();
// sql.getA();

// var config = {
//   server: "CPCINPUDV003505",
//   options: {
//     database: "Book21_Dev"
//   },
//   authentication: {
//    type: "default",
//     options: {
//       userName: "PMOUser",
//       password: "Pa$$word#123",
//     }
//   }
// };


// connection = new Connection(config);

// connection.on('connect', function (err, res) {
//   if (err) {
//     console.log('Error: ', err)
//   }
//   // If no error, then good to go...
//   console.log("Connected");
//   // executeStatement();
// });



app.use('/getData', getDataRouter);




module.exports = app;
