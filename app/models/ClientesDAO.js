function ClientesDAO(connection){
	this._connection = connection;
}

ClientesDAO.prototype.procuraChaveNoBanco = function(chave, callback){
	this._connection.query('SELECT * FROM cliente WHERE chave = ? AND ativo <> 50', chave, callback);
}

ClientesDAO.prototype.verificarChave = function(chave, callback){
	this._connection.query('SELECT usuario.nome FROM cliente JOIN usuario ON cliente.id_cliente = usuario.id_cliente WHERE cliente.chave = ? AND cliente.ativo <> 50', chave, callback);
}

ClientesDAO.prototype.listarClientes = function(callback){
	this._connection.query('SELECT * FROM cliente WHERE ativo <> 50', callback);
}

ClientesDAO.prototype.contarTodosClientes = function(callback){
	this._connection.query('SELECT COUNT(id_cliente) AS todosClientes FROM cliente', callback);
}

ClientesDAO.prototype.contarClientesAtivos = function(callback){
	this._connection.query('SELECT COUNT(id_cliente) AS clientesAtivos FROM cliente WHERE ativo <> 50 AND ativo <> 0', callback);
}

ClientesDAO.prototype.inserirCliente = function(cliente, callback){
	this._connection.query('INSERT INTO cliente SET ? ', cliente, callback);
}

ClientesDAO.prototype.editarCliente = function(idCliente, ativo, callback){
	this._connection.query('UPDATE cliente SET ativo = ? WHERE id_cliente = ?', [ativo, idCliente], callback);
}

module.exports = function(){
	return ClientesDAO;
}