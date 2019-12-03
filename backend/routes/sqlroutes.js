const express = require('express');
const sqlInstance = require('mssql');
const sqlRouter = express.Router();






sqlRouter.get('/', function (req, res) {

  // config for your database
  var config = {
      user: 'sa',
      password: 'DataBaseExam2019',
      server: 'localhost',
      database: 'DataBaseExam2019'
  };

  // connect to your database
  sqlInstance.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var request = new sqlInstance.Request();

      // query to the database and get the products
      request.query('select * from TProduct', function (err, products) {

          if (err) console.log(err)

          // send records as a response
         console.log(products);
         res.send(products);

      });



  });
});


module.exports = sqlRouter;
