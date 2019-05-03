$(document).ready(function(){
	$('#novoDesenvolvedor').click(function(){
		$.ajax({
			url: '/novoDesenvolvedor',
			method: 'get',
			success: function(data){
				$('#conteudo').html(data);
			}
		});
	});
});