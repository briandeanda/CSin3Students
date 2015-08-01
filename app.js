var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.set('port', port);

app.listen(app.get('port'), function() {
    console.log('Server started on localhost: ' + app.get('port'));
});

