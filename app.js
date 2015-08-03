var express = require('express');
var app = express();
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var hogan = require('hogan-express');
var username = process.env.USER;
var password = process.env.PASSWORD;
var mongoURL = "mongodb://" + username + ":" + password + "@ds047632.mongolab.com:47632/csin3students";
var path = require('path');
var connection = mongoose.connect(mongoURL);
autoIncrement.initialize(connection);
var router = express.Router();
require('./models/Students');
require('./models/Event');
require('./routes/index')(router);
require('./routes/students')(router);
require('./routes/events')(router);

var port = process.env.PORT || 8080;

app.set('port', port);
app.engine('html', hogan);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public'))); // .public

// Routing
app.use('/', router);
app.use('/students', router);
app.use('/alumni', router);
app.use('/students/:id', router);
app.use('/students/currentStudents', router);
app.use('/events', router);


app.listen(app.get('port'), function() {
    console.log('Server started on localhost: ' + app.get('port'));
});
