module.exports.listarServicosAdmin = function(application, req, res){
	var connection = application.config.dbConnection();
    var servicosModel = new application.app.models.ServicosDAO(connection);

    servicosModel.pegarServicos(req.session.idCliente, function(error, result){
        if(result){
            res.render('servicos/gerenciar-servicos-cliente', {servicos: result});
        }
    });
}

module.exports.novoServico = function(application, req, res){
    var connection = application.config.dbConnection();
    var projetosModel = new application.app.models.ProjetosDAO(connection);

    projetosModel.pegarProjetos(req.session.idCliente, function(error, result){
        if(result){
            res.render('servicos/formulario-criar-servico', {projetos: result});
        }
    });
}

module.exports.criarNovoServico = function(application, req, res){
    var servico = req.body;

    req.assert('observacao','Nome do Projeto é obrigatório').notEmpty();

    var erros = req.validationErrors();
    if(erros){
        return;
    }

    var connection = application.config.dbConnection();
    var servicosModel = new application.app.models.ServicosDAO(connection);

    servicosModel.inserirServico(servico.idProjeto, servico.observacao, function(error, result){
        res.redirect('/servicos');
    });
}

module.exports.servico = function(application, req, res){
    var idProjeto = req.query;

    var connection = application.config.dbConnection();
    var servicosModel = new application.app.models.ServicosDAO(connection);

    servicosModel.pegarServicosPeloIdProjeto(idProjeto.projeto, function(error, result){
        if(result){
            res.render('servicos/gerenciar-servicos-cliente', {servicos: result});
        }
    });
}

module.exports.listarServicosDev = function(application, req, res){
    var connection = application.config.dbConnection();
    var servicosModel = new application.app.models.ServicosDAO(connection);

    servicosModel.pegarTodosServicos(function(error, result){
        if(result){
            res.render('servicos/gerenciar-servicos', {servicos: result, idUsuario : req.session.idUsuario});
        }
    });
}

module.exports.iniciarServico = function(application, req, res){
    var connection = application.config.dbConnection();
    var servicosModel = new application.app.models.ServicosDAO(connection);

    servicosModel.iniciarServico(req.session.idUsuario, req.body.idServico, function(error, result){
        res.send({"concluido":"1"});
    });
}

module.exports.aprovarServico = function(application, req, res){
    var connection = application.config.dbConnection();
    var servicosModel = new application.app.models.ServicosDAO(connection);

    servicosModel.aprovarServico(req.body.idServico, 0, function(error, result){
        res.send({"concluido":"1"});
    });
}

module.exports.mandarParaAprovacao = function(application, req, res){
    var connection = application.config.dbConnection();
    var servicosModel = new application.app.models.ServicosDAO(connection);

    servicosModel.editarServico(req.body.idServico, 4, function(error, result){
        res.send({"concluido":"1"});
    });
}