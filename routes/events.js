var mongoose = require("mongoose");
var EventsSchema = mongoose.model('Events');

module.exports = function(router) {
    router.get('/events', function (req, res){
        var EventsSchema = require('../models/Event');

        return EventsSchema.find({}).lean().exec(function (err, events) {
            if (!err) {
                var ob = events[0];

                return res.send(ob);
            } else {
                return console.log(err);
            }
        });
    });
}

