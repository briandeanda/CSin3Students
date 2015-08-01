module.exports = function(router) {
    router.get('/', function (req, res) {
        res.render('index');
    });
    router.get('/students', function (req, res) {
        res.render('students');
    });
}