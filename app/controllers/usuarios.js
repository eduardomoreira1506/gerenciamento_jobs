module.exports.listarUsuariosAdmin = function(application, req, res){
	var connection = application.config.dbConnection();
    var usuariosModel = new application.app.models.UsuariosDAO(connection);

    usuariosModel.listarUsuarios(req.session.idCliente, req.session.idUsuario, function(error, result){
        res.render('usuarios/gerenciar-usuarios-cliente', {usuarios : result});
    });
}
