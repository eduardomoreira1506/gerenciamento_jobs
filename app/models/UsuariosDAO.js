var crypto = require('crypto');

function UsuariosDAO(connection){
	this._connection = connection;
}

UsuariosDAO.prototype.autenticarUsuario = function(usuario, callback){
	var senhaCriptografada = crypto.createHash('md5').update(usuario.senha).digest('hex');
	usuario.senha = senhaCriptografada;

	this._connection.query(`SELECT usuario.id_usuario, usuario.nome, usuario.email, usuario.senha, usuario.tipo, usuario.aprovado, usuario.id_cliente, cliente.ativo FROM usuario LEFT JOIN cliente ON usuario.id_cliente = cliente.id_cliente WHERE usuario.email = ? AND usuario.senha = ? AND usuario.aprovado <> 50`, [usuario.email, usuario.senha], callback);
}

UsuariosDAO.prototype.inserirUsuario = function(usuario, callback){
	var senhaCriptografada = crypto.createHash('md5').update(usuario.senha).digest('hex');
	usuario.senha = senhaCriptografada;

	this._connection.query('INSERT INTO usuario SET ? ', usuario, callback);
}

UsuariosDAO.prototype.inserirUsuarioSimples = function(usuario, callback){
	var senhaCriptografada = crypto.createHash('md5').update(usuario.senha).digest('hex');
	usuario.senha = senhaCriptografada;

	this._connection.query('INSERT INTO usuario SET ? ', usuario, callback);
}

UsuariosDAO.prototype.listarUsuarios = function(idCliente, idUsuario, callback){
	this._connection.query(`SELECT * FROM usuario WHERE id_cliente = ? AND id_usuario <> ? AND aprovado <> 50`, [idCliente, idUsuario], callback);
}

UsuariosDAO.prototype.listarUsuariosPrincipais = function(callback){
	this._connection.query(`SELECT usuario.id_usuario, usuario.nome as nomeUsuario, usuario.email, usuario.aprovado, cliente.nome as nomeCliente FROM usuario JOIN cliente ON cliente.id_cliente = usuario.id_cliente WHERE usuario.tipo = 3 AND usuario.aprovado <> 50`, callback);
}

UsuariosDAO.prototype.listarUsuariosDev = function(callback){
	this._connection.query(`SELECT * FROM usuario WHERE tipo = 1 AND usuario.aprovado <> 50`, callback);
}

UsuariosDAO.prototype.verificarEmail = function(email, callback){
	this._connection.query('SELECT nome FROM usuario WHERE email = ? AND usuario.aprovado <> 50', email, callback);
}

UsuariosDAO.prototype.aprovarUsuario = function(idUsuario, callback){
	this._connection.query('UPDATE usuario SET aprovado = 1 WHERE id_usuario = ?', idUsuario, callback);
}

UsuariosDAO.prototype.bloquearUsuario = function(idUsuario, callback){
	this._connection.query('UPDATE usuario SET aprovado = 0 WHERE id_usuario = ?', idUsuario, callback);
}

UsuariosDAO.prototype.excluirUsuario = function(idUsuario, callback){
	this._connection.query('UPDATE usuario SET aprovado = 50 WHERE id_usuario = ?', idUsuario, callback);
}

UsuariosDAO.prototype.inserirDev = function(nome, email, senha, callback){
	var senhaCriptografada = crypto.createHash('md5').update(senha).digest('hex');

	this._connection.query('INSERT INTO usuario SET nome = ?, email = ?, senha = ?, tipo = 1, aprovado = 1', [nome, email, senhaCriptografada], callback);
}

UsuariosDAO.prototype.contarTodosUsuarios = function(callback){
	this._connection.query('SELECT COUNT(id_usuario) as todosUsuarios FROM usuario', callback);
}

UsuariosDAO.prototype.contarUsuariosAtivos = function(callback){
	this._connection.query('SELECT COUNT(id_usuario) as usuariosAtivos FROM usuario WHERE aprovado <> 50', callback);
}

module.exports = function(){
	return UsuariosDAO;
}