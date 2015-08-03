var googleApiKey = process.env.GOOGLE_API_KEY;
module.exports = function(router) {
    router.get('/', function (req, res) {
        return res.render('index');
    });
    router.get('/currentStudents', function (req, res) {
        return res.render('activeStudents');
    });
    router.get('/map', function(req, res) {
        return res.render('map', {key: googleApiKey});
    });

    router.get('/currentStudents/:id', function (req, res) {
        return res.render('student');
    })
}
