var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireName: function(req, res, next){
		console.log('Enter your name ...');
		next();
	},
	loadedCorrectly: function(req, res, next) {
		console.log('Page loaded correctly');
		next();
	}
}

app.use(middleware.loadedCorrectly);

app.get('/', function(req, res){
	res.send('Main page');
});

app.get('/login', middleware.requireName, function(req, res){
	res.send('Login page');
})

app.listen(PORT, function(){
	console.log('Listening correctly');
});