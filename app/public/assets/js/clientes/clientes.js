$(document).ready(function(){
	$('#novoCliente').click(function(){
		$.ajax({
			url: '/novoCliente',
			method: 'get',
			success: function(data){
				$('#conteudo').html(data);
			}
		});
	})
})
