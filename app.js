var express = require('express');
var app = express();
var mongoose = require('mongoose');
var hogan = require('hogan-express');
var config = require('./config/environment/development');
var path = require('path');
var env = process.env.NODE_ENV || 'development';

if (env !== "development") {
	config = require('./config/environment/production');
}
var mongoURL = config.mongodb.uri;
var router = express.Router();
mongoose.connect(mongoURL);

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

