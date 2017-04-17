var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var setupController = require('./controlers/setupController');
var apiControllers = require('./controlers/apiControllers');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine' , 'ejs');

mongoose.connect(config.getDbConnectionString());

setupController(app);
apiControllers(app);


app.listen(port);
