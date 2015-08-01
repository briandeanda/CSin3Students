module.exports = function(router) {
    router.get('/', function (req, res) {
        return res.render('index');
    });
    router.get('/students', function (req, res) {
        return res.render('students');
    });
    router.get('/map', function(req, res) {
        return res.render('map');
    })
}
