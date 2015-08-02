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

        return StudentsSchema.find({}).lean().exec(function (err, students) {
            if (!err) {
                //console.log(students);
                var ob = students[0];

                var list = [];
                ob.currentStudents.map(function(obj) {
                    if(obj.isAlumni === false)
                        list.push(obj);

                    console.log(obj.isAlumni);
                });

                return res.send(list);
            } else {
                return console.log(err);
            }
        });
    });

}