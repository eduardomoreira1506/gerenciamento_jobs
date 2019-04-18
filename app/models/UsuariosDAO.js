var crypto = require('crypto');

function UsuariosDAO(connection){
	this._connection = connection;
}

UsuariosDAO.prototype.autenticarUsuario = function(usuario, callback){
	var senhaCriptografada = crypto.createHash('md5').update(usuario.senha).digest('hex');
	usuario.senha = senhaCriptografada;

	this._connection.query(`SELECT * FROM usuario WHERE email = ? AND senha = ? AND id_cliente IS NOT NULL`, [usuario.email, usuario.senha], callback);
}

UsuariosDAO.prototype.inserirUsuario = function(usuario, callback){
	var senhaCriptografada = crypto.createHash('md5').update(usuario.senha).digest('hex');
	usuario.senha = senhaCriptografada;

	this._connection.query('INSERT INTO usuario SET ? ', usuario, callback);
}

UsuariosDAO.prototype.listarUsuarios = function(idCliente, idUsuario, callback){
	this._connection.query(`SELECT * FROM usuario WHERE id_cliente = ? AND id_usuario <> ?`, [idCliente, idUsuario], callback);
}

UsuariosDAO.prototype.verificarEmail = function(email, callback){
	this._connection.query('SELECT nome FROM usuario WHERE email = ?', email, callback);
}

module.exports = function(){
	return UsuariosDAO;
}