module.exports.iniciarPainel = function(application, req, res){
	res.render('painel-admin', {nome: req.session.nome});
}