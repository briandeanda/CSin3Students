var mongoose = require("mongoose");
var EventsSchema = mongoose.model('Events');
var env = process.env.NODE_ENV || 'development';

module.exports = function(router) {
    router.get('/events', function (req, res){
        var EventsSchema = require('../models/Event');

        return EventsSchema.find({}).lean().exec(function (err, events) {
            if (!err) {
                if (env !== 'development') {
                   var ob = events[0];
                   console.log(ob);

                   return res.send(ob); 
                }
                var eventObj = {events:[]}
                events.map(function(event) {
                    eventObj['events'].push(event);
                });

                console.log(eventObj);

                return res.send(eventObj);
                
            } else {
                return console.log(err);
            }
        });
    });
}

