var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var eventsSchema = new Schema({
    id: Number,
    name: String,
    date: Date,
    lat: Number,
    long: Number,
    location: String,
    summary: String,
    members: [],
    isHackthon: Boolean,
    isInternship: Boolean,
    isConference: Boolean,
    isFulltime: Boolean
});

var Events = mongoose.model('Events', eventsSchema);
module.exports = Events;
