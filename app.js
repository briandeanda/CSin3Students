var express = require('express');
var app = express();
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var username = process.env.USER;
var password = process.env.PASSWORD;
var mongoURL = "mongodb://" + username + ":" + password + "@ds047632.mongolab.com:47632/csin3students";
console.log(mongoURL);
var connection = mongoose.connect(mongoURL);
autoIncrement.initialize(connection);
var router = express.Router();
require('./routes/index')(router);
require('./models/Products');

var port = process.env.PORT || 8080;

app.set('port', port);
app.set('view engine', 'html');

// Routing
app.use('/', router);
app.use('/students', router);
app.use('/alumni', router);
app.use('/student/:id', router);


app.listen(app.get('port'), function() {
    console.log('Server started on localhost: ' + app.get('port'));
});
