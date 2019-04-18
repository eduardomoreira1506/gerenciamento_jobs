function ClientesDAO(connection){
	this._connection = connection;
}

ClientesDAO.prototype.procuraChaveNoBanco = function(chave, callback){
	this._connection.query('SELECT * FROM cliente WHERE chave = ?', chave, callback);
}

ClientesDAO.prototype.verificarChave = function(chave, callback){
	this._connection.query('SELECT usuario.nome FROM cliente JOIN usuario ON cliente.id_cliente = usuario.id_cliente WHERE cliente.chave = ?', chave, callback);
}

module.exports = function(){
	return ClientesDAO;
}