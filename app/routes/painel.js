module.exports = function(application){
	application.get('/painelAdmin', function(req, res){
		if(req.session.logado == true && req.session.tipo == 3){
			application.app.controllers.painel.iniciarPainel(application, req, res);
		}else{
			res.redirect('/');
		}
	});

	application.get('/painel', function(req, res){
		if(req.session.logado == true){
			application.app.controllers.geral.verificacaoTipoUsuario(application, req, res, req.session.tipo);
		}else{
			res.redirect('/');
		}
	});
}

