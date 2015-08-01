module.exports = function(router) {
    router.get('/', function (req, res) {
        return res.render('index');
    });
    router.get('/activeStudents', function (req, res) {
        return res.render('activeStudents');
    });
    router.get('/map', function(req, res) {
        return res.render('map');
    })
}
