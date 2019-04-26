module.exports = function(application){
	application.get('/usuarios', function(req, res){
		if(req.session.logado == true && req.session.tipo != 2){
			application.app.controllers.geral.verificacaoTipoUsuarioUsuario(application, req, res);
		}else{
			res.redirect('/');
		}
	});

	application.get('/usuariosAdmin', function(req, res){
		if(req.session.logado == true && req.session.tipo == 3){
			application.app.controllers.usuarios.listarUsuariosAdmin(application, req, res);
		}else{
			res.redirect('/usuarios');
		}
	});

	application.get('/novoUsuario', function(req, res){
		if(req.session.logado == true && req.session.tipo == 3){			
			application.app.controllers.usuarios.novoUsuario(application, req, res);
		}else{
			res.redirect('/');
		}
	});

	application.post('/aprovarUsuario', function(req, res){
		if(req.session.logado == true){			
			application.app.controllers.usuarios.aprovarUsuario(application, req, res);
		}else{
			res.redirect('/');
		}
	})

	application.post('/bloquearUsuario', function(req, res){
		if(req.session.logado == true){			
			application.app.controllers.usuarios.bloquearUsuario(application, req, res);
		}else{
			res.redirect('/');
		}
	})

	application.post('/excluirUsuario', function(req, res){
		if(req.session.logado == true){			
			application.app.controllers.usuarios.excluirUsuario(application, req, res);
		}else{
			res.redirect('/');
		}
	})
}