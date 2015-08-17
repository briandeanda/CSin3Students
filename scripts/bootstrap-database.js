var mongoose = require('mongoose');
var async = require('async');
var Student = require('./../models/Students');
var Event = require('./../models/Event');
var mongourl = require('./../config/environment/development');
var log = require('./../util/logger');
log(mongourl.mongodb.uri);
var connection = mongoose.connect(mongourl.mongodb.uri);

var daniel = new Student({id: 1,name: 'Daniel'})
var csumb = new Event({id: 1, name: 'csumb'});

log('Inserting student- ' + daniel.name);
log('Inserting event- ' + csumb.name);

async.waterfall([
	insertStudent.bind(null, daniel),
	insertEvent.bind(null, csumb)
	], function onWrite(err, result) {
		if (err) {
			log(err.message);
			process.exit(1);
		}
		log('Succesfully bootstraped!');
		process.exit(0);
	})

function insertStudent (student, cb) {
	student.save(function(err) {
		if (err) {
			return cb(new Error('Failed to insert student'));
		}
		return cb(null);
	})
}

function insertEvent(event, cb) {
	event.save(function(err) {
		if (err) {
			return cb(new Error('Failed to insert event'));
		}
		return cb(null);
	})
}
