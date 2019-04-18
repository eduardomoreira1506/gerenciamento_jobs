module.exports.iniciar = function(application, req, res){
    res.render('login', {validacao : {}, email: undefined});
}

module.exports.autenticar = function(application, req, res){
    var usuario = req.body;

    req.assert('email','Email é obrigatório').notEmpty();
    req.assert('senha','Senha é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('login', {validacao : erros, email : usuario.email});
        return;
    }

    var connection = application.config.dbConnection();
    var usuariosModel = new application.app.models.UsuariosDAO(connection);

    usuariosModel.autenticarUsuario(usuario, function(error, result){
        if(result.length > 0){
            if(result[0].aprovado == 1){
                req.session.nome = result[0].nome;
                req.session.logado = true;
                req.session.tipo = result[0].tipo;
                req.session.idUsuario = result[0].id_usuario;
                req.session.idCliente = result[0].id_cliente;

                application.app.controllers.geral.verificacaoTipoUsuario(application, req, res, result[0].tipo);
            }else{
                res.render('login', {validacao : [{msg: "Sua aprovação está pendente!"}], email : usuario.email});
            }
        }else{
            res.render('login', {validacao : [{msg: "Email ou senha inválidos!"}], email : usuario.email});
        }
    });
}

