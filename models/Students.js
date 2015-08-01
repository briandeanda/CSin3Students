var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var studentsSchema = new Schema({
    name: String,
    email: String,
    website: String,
    linkedin: String,
    github: String,
    summary: String,
    isAlumni: Boolean
});

studentsSchema.plugin(autoIncrement.plugin, { model: 'Students', startAt: 1 });
var Students = mongoose.model('Students', studentsSchema);
module.exports = Students;