let express = require('express');
let app = express();

console.log ("Hello Worlda");


function handler(req, res) {
    res.send('Hello Express');
}

app.get("/",handler);
  

































 module.exports = app;
