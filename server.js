/**
 * Created by binh on 9/10/18.
 */
const express = require('express')
const app = express();

app.use(express.static(__dirname + '/docs'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/docs/index.html');
});

app.listen(7000); //the port you want to use
console.log("App running...");
