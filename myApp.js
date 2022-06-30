let express = require('express');
let app = express();

console.log ("Hello Worlda");
console.log(__dirname);


  app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });

































 module.exports = app;
