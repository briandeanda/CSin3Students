var express = require('express');
var app = express();
var router = express.Router();
require('./routes/index')(router);

var port = process.env.PORT || 8080;

app.set('port', port);
app.set('view engine', 'html');
app.use('views', __dirname + 'views');

// Routing
app.use('/', router);
app.use('/students', router);
app.use('/alumni', router);
app.use('/student/:id', router);


app.listen(app.get('port'), function() {
    console.log('Server started on localhost: ' + app.get('port'));
});

