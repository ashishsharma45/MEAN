module.exports = function(app) {
    var index = require('../controllers/index.server.controller'); 
	app.get('/', index.render);
	// app.get('/', function (req, res) {
	// 	res.render('index', {title: 'Hello world'});
	// });
};