module.exports = function(application){
	application.get('/servicos', function(req, res){
		if(req.session.logado == true){
			application.app.controllers.geral.verificacaoTipoUsuarioServico(application, req, res, req.session.tipo);
		}else{
			res.redirect('/');
		}
	});

	application.get('/servicosAdmin', function(req, res){
		if(req.session.logado == true){
			if(req.session.tipo == 3)
				application.app.controllers.servicos.listarServicosAdmin(application, req, res);
			else
				application.app.controllers.geral.verificacaoTipoUsuarioServico(application, req, res, req.session.tipo);
		}else{
			res.redirect('/');
		}
	});

	application.get('/novoServico', function(req, res){
		if(req.session.logado == true && req.session.tipo == 3){			
			application.app.controllers.servicos.novoServico(application, req, res);
		}else{
			res.redirect('/');
		}
	});

	application.post('/criarNovoServico', function(req, res){
		application.app.controllers.servicos.criarNovoServico(application, req, res);
	})

	application.get('/servico', function(req, res){
		application.app.controllers.servicos.servico(application, req, res);
	});
}