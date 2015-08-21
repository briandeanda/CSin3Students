var mongoose = require("mongoose");
var StudentsSchema = mongoose.model('Students');
var env = process.env.NODE_ENV || 'development';

module.exports = function(router) {

    router.post('/students/create', function(req, res, next) {
        var studentsModel = new StudentsSchema();

        studentsModel.name = req.body.name;
        studentsModel.email = req.body.email;
        studentsModel.website = req.body.website;
        studentsModel.linkedin = req.body.linkedin;
        studentsModel.summary = req.body.summary;

        studentsModel.save(function(err, student) {
            if (!err) {
                res.json({
                    type: true,
                    data: student
                });
            } else {
                res.json({
                    type: false,
                    data: "Error occured:" + err
                });
            }
        });
    });

    router.get('/students/currentStudents', function (req, res){
        var StudentsSchema = require('../models/Students');

        return StudentsSchema.find({}).lean().exec(function (err, students) {
            if (!err) {
                if (env !== 'development') {
                    var ob = students[0];

                    var studentList = ob.currentStudents.filter(function(student) {
                        return student.isAlumni === false;
                    });

                    studentList.sort(function() {
                        return .5 - Math.random();
                    });

                    return res.send(studentList);
                }

                var studentList = students.filter(function(student) {
                    return student.isAlumni === false;
                });

                return res.send(studentList);

            } else {
                return console.log(err);
            }
        });
    });

    router.get('/students/:id', function(req, res) {
        var StudentSchema = require('../models/Students');

        return StudentsSchema.find({}).lean().exec(function(err, students) {
            if (!err) {
                var ob = students[0];
                var student = ob.currentStudents.filter(function(obj) {
                    return obj.id == req.params.id;
                });
                return res.send(student);
            }
        })
    })

}
