function ProjetosDAO(connection){
	this._connection = connection;
}

ProjetosDAO.prototype.pegarProjetos = function(idCliente, callback){
	this._connection.query('SELECT * FROM projeto WHERE id_cliente = ?', idCliente, callback);
}

ProjetosDAO.prototype.inserirProjeto = function(nomeProjeto, idCliente, callback){
	this._connection.query('INSERT INTO projeto (nome, id_cliente) VALUES (? , ?)', [nomeProjeto, idCliente], callback);
}

ProjetosDAO.prototype.editarProjeto = function(idProjeto, status, callback){
	idProjeto = parseInt(idProjeto);
	this._connection.query('UPDATE projeto SET status = ? WHERE id_projeto = ?', [status, idProjeto], callback);
}

module.exports = function(){
	return ProjetosDAO;
}