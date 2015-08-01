module.exports = function(router) {
    router.get('/', function (req, res) {
        console.log('Here');
        return res.render('index');
    });
    router.get('/students', function (req, res) {
        return res.render('students');
    });
}
