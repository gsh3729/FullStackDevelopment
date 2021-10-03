//require('./app/model/db.connection').open();
require('./models/db.con');
const express = require('express');
const CONFIG = require('./config');
const bodyParser = require('body-parser');
var routes =require('./routes');
const path = require('path');
var cors = require('cors');


var app = express();
//setting a port for server
app.set('port',CONFIG.port);

//log inserver for every request

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");
  next();
});
app.use(bodyParser.urlencoded({extended:false}));
// parse application/json
app.use(bodyParser.json());
app.use('/',routes);

app.use(express.static(path.join(__dirname,'public')));
app.listen(app.get('port'),function () {
  console.log("Magic happens on port " +app.get('port'));
});
console.log("After Start");
