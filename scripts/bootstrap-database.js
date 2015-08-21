var mongoose = require('mongoose');
var async = require('async');
var Student = require('./../models/Students');
var Event = require('./../models/Event');
var config = require('./../config/environment/development.json');
var log = require('./../util/logger');
var students = config.currentStudents;
var events = config.events;

mongoose.connect(config.mongodb.uri);

log(config.mongodb.uri);
log('Inserting students');
log('Inserting events');

async.waterfall([
	removeModels,
	insertStudents,
	insertEvents
	], function onWrite(err) {
		if (err) {
			log(err.message);
			process.exit(1);
		}
		log('Succesfully bootstraped!');
		process.exit(0);
	});

function insertStudents (cb) {
	students.map(function(student) {
		var newStudent = new Student(student);
		newStudent.save(function(err) {
			if (err) {
				log(err.message);
				process.exit(1);
			}
		});
	});
	cb(null);
}

function insertEvents(cb) {
	events.map(function(event) {
		var newEvent = new Event(event);
		newEvent.save(function(err) {
			if (err) {
				log(err.message);
				process.exit(1);
			}
		});
	});
	cb(null);
}

function removeModels(cb) {
	Student.remove(function(err, docs) {
		if (err) {
			throw err;
		} else {
			log('No of docs removed: ' + docs);
			removeEvents();
		}
	});

	function removeEvents() {
		Event.remove(function(err, docs) {
			if (err) {
				throw err;
			} else {
				log('No of docs removed: ' + docs);
			}
			cb(null);
		});
	}
}
