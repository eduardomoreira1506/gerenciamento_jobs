module.exports.listarClientes = function(application, res, res){
	var connection = application.config.dbConnection();
    var clientesModel = new application.app.models.ClientesDAO(connection);

    clientesModel.listarClientes(function(error, result){
        res.render('clientes/gerenciar-clientes', {clientes: result});
    });
}

module.exports.novoCliente = function(application, req, res){
	res.render('clientes/formulario-criar-cliente');
}

module.exports.criarNovoCliente = function(application, req, res){
	var cliente = req.body;

	req.assert('nome','Nome do Cliente é obrigatório').notEmpty();
	req.assert('cpf_cnpj','CPF/CNPJ do cliente é obrigatório').notEmpty();
	req.assert('chave','Chave é obrigatório').notEmpty();

	var erros = req.validationErrors();
    if(erros){
        return;
    }

    var connection = application.config.dbConnection();
    var clientesModel = new application.app.models.ClientesDAO(connection);

    clientesModel.inserirCliente(cliente, function(error, result){
        res.redirect('/clientes');
    });
}

module.exports.editarCliente = function(application, req, res, ativo){
    var connection = application.config.dbConnection();
    var clientesModel = new application.app.models.ClientesDAO(connection);

    clientesModel.editarCliente(req.body.idCliente, ativo, function(error, result){
        res.send({"concluido":"1"});
    });
}

module.exports.cliente = function(application, req, res){
    var cliente = req.query;

    var connection = application.config.dbConnection();
    var servicosModel = new application.app.models.ServicosDAO(connection);

    servicosModel.pegarServicosPeloIdCliente(cliente.id_cliente, function(error, result){
        res.render('servicos/gerenciar-servicos', {servicos: result, idUsuario : req.session.idUsuario});
    });
}