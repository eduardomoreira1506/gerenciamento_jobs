function ServicosDAO(connection){
	this._connection = connection;
}

ServicosDAO.prototype.pegarServicos = function(idCliente, callback){
	this._connection.query('SELECT id_servico, data_solicitacao, data_termino, observacao, servico.status as statusServico, projeto.nome as nomeProjeto FROM servico JOIN projeto USING (id_projeto) WHERE id_cliente = ?', idCliente, callback);
}

ServicosDAO.prototype.pegarServicosPeloIdProjeto = function(idProjeto, callback){
	this._connection.query('SELECT id_servico, data_solicitacao, data_termino, observacao, servico.status as statusServico, projeto.nome as nomeProjeto FROM servico JOIN projeto USING (id_projeto) WHERE projeto.id_projeto = ?', idProjeto, callback);
}

ServicosDAO.prototype.pegarTodosServicos = function(callback){
	this._connection.query('SELECT usuario.nome as nomeResponsavel, id_responsavel, id_servico, data_solicitacao, data_termino, observacao, servico.status as statusServico, projeto.nome as nomeProjeto FROM servico JOIN projeto USING (id_projeto) LEFT JOIN usuario ON servico.id_responsavel = usuario.id_usuario', callback);
}

ServicosDAO.prototype.inserirServico = function(idProjeto, observacao, callback){
	this._connection.query('INSERT INTO servico (id_projeto, observacao) VALUES (?, ?)', [idProjeto, observacao], callback);
}

module.exports = function(){
	return ServicosDAO;
}