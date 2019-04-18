$(document).ready(function(){
	$('#novoServico').click(function(){
		$.ajax({
			url: '/novoServico',
			method: 'get',
			success: function(data){
				$('#conteudo').html(data);
			}
		});
	})
})