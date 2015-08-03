var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

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

eventsSchema.plugin(autoIncrement.plugin, { model: 'Events', startAt: 1 });
var Events = mongoose.model('Events', eventsSchema);
module.exports = Events;
