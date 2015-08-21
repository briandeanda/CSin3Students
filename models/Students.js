var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var studentsSchema = new Schema({
    id: Number,
    name: String,
    email: String,
    website: String,
    linkedin: String,
    github: String,
    summary: String,
    detailSummary: String,
    isAlumni: Boolean,
    imageUrl: String
});

var Students = mongoose.model('Students', studentsSchema);
module.exports = Students;