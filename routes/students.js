var mongoose = require("mongoose");

var StudentsSchema = mongoose.model('Students');
module.exports = function(router) {

    //push product details into the database
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
        console.log(StudentsSchema);
        return StudentsSchema.find({}, function (err, students) {
            if (!err) {
                console.log(students);
                return res.send(students);
            } else {
                return console.log(err);
            }
        });
    });

}