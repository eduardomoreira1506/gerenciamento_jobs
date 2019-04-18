function criacaoContaCompleta(){
	var nomePessoa = document.getElementById('nomePessoaCriada').value;
	var splitado = nomePessoa.split(" ");
	nomePessoa = splitado[0];

	Swal.fire({
		title: `Bem vindo! ${nomePessoa}`,
		text: `Criação completa, basta clicar em ok para acessar nosso sitema.`,
		type: 'success'
	}).then((result) => {
		window.location.href = "/";
	})
}

function criacaoPendente(){
	Swal.fire({
		title: `Pendente!`,
		text: `A criação da sua conta está pendente, basta o administrador da empresa aprovar seu cadastro.`,
		type: 'info'
	}).then((result) => {
		window.location.href = "/";
	})
}

function chaveInexistente(){
	Swal.fire({
		title: `Erro!`,
		text: `A chave que está tentando usar não existe.`,
		type: 'error'
	})
}

function emailRepetido(){
	var nomePessoa = document.getElementById('nomePessoaCriada').value;
	var splitado = nomePessoa.split(" ");
	nomePessoa = splitado[0];

	var email = document.getElementById('emailPessoaCriada').value;

	Swal.fire({
		title: `Erro!`,
		text: `Desculpe ${nomePessoa}, mas o email ${email} já está em uso.`,
		type: 'error'
	})
}