var app = require('./config/server');

var server = app.listen(400, function(){
	console.log('Servidor online na porta 400');
})