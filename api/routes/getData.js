var express = require('express');
var router = express.Router();
var Request= require('tedious').Request
var sql = require('../public/javascripts/SQLConnect')
// var Data = require('../models/data')
/* GET users listing. */
router.get('/', (req,res) => {
  console.log("In here");

  //sql.connect
  sql.executeStatement(res);
  //res.status(200).send(String(20));
  
});

module.exports = router;
