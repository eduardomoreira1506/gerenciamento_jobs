module.exports.listarUsuariosAdmin = function(application, req, res){
	var connection = application.config.dbConnection();
    var usuariosModel = new application.app.models.UsuariosDAO(connection);

    usuariosModel.listarUsuarios(req.session.idCliente, req.session.idUsuario, function(error, result){
        res.render('usuarios/gerenciar-usuarios-cliente', {usuarios : result});
    });
}

module.exports.aprovarUsuario = function(application, req, res){
	var connection = application.config.dbConnection();
    var usuariosModel = new application.app.models.UsuariosDAO(connection);

   	usuariosModel.aprovarUsuario(req.body.idUsuario, function(error, result){
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