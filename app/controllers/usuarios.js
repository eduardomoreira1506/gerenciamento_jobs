module.exports.listarUsuariosAdmin = function(application, req, res){
	var connection = application.config.dbConnection();
    var usuariosModel = new application.app.models.UsuariosDAO(connection);

    usuariosModel.listarUsuarios(req.session.idCliente, req.session.idUsuario, function(error, result){
        res.render('usuarios/gerenciar-usuarios-cliente', {usuarios : result});
    });
}

module.exports.listarUsuariosDev = function(application, req, res){
    var connection = application.config.dbConnection();
    var usuariosModel = new application.app.models.UsuariosDAO(connection);

    usuariosModel.listarUsuariosPrincipais(function(error, result){
        var usuariosClientes = result;
        usuariosModel.listarUsuariosDev(function(error, response){
            var usuariosDev = response;
            res.render('usuarios/gerenciar-usuarios', {usuariosClientes : usuariosClientes, usuariosDev : usuariosDev});
        });
    });
}

module.exports.aprovarUsuario = function(application, req, res){
	var connection = application.config.dbConnection();
    var usuariosModel = new application.app.models.UsuariosDAO(connection);

   	usuariosModel.aprovarUsuario(req.body.idUsuario, function(error, result){
        res.send({"concluido":"1"});
    });
}

module.exports.bloquearUsuario = function(application, req, res){
    var connection = application.config.dbConnection();
    var usuariosModel = new application.app.models.UsuariosDAO(connection);

    usuariosModel.bloquearUsuario(req.body.idUsuario, function(error, result){
        res.send({"concluido":"1"});
    });
}

module.exports.excluirUsuario = function(application, req, res){
    var connection = application.config.dbConnection();
    var usuariosModel = new application.app.models.UsuariosDAO(connection);

    usuariosModel.excluirUsuario(req.body.idUsuario, function(error, result){
        res.send({"concluido":"1"});
    });
}

module.exports.excluirUsuarioDev = function(application, req, res){
    var connection = application.config.dbConnection();
    var usuariosModel = new application.app.models.UsuariosDAO(connection);

    usuariosModel.excluirUsuario(req.body.idUsuario, function(error, result){
        res.send({"concluido":"1"});
    });
}

module.exports.novoDesenvolvedor = function(application, req, res){
    res.render('usuarios/formulario-criar-usuario-dev');
}

module.exports.criarNovoDesenvolvedor = function(application, req, res){
    var desenvolvedor = req.body;

    req.assert('nome','Nome do usuário é obrigatório').notEmpty();
    req.assert('email','Email do usuário é obrigatório').notEmpty();
    req.assert('senha','Senha é obrigatório').notEmpty();

    var erros = req.validationErrors();
    if(erros){
        return;
    }

    var connection = application.config.dbConnection();
    var usuariosModel = new application.app.models.UsuariosDAO(connection);

    usuariosModel.inserirDev(desenvolvedor.nome, desenvolvedor.email, desenvolvedor.senha, function(error, result){
        res.redirect('/usuarios');
    });
}