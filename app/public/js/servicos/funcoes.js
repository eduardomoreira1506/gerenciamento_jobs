function iniciarServico(idServico){
	Swal.fire({
		title: `Confirmação!`,
		text: `Tem certeza que deseja iniciar o serviço?`,
		type: 'info',
		showCloseButton: true,
  		showCancelButton: true,
	}).then((result) => {
		if (result.value) {
			$.ajax({
				url: '/iniciarServico',
				method: 'post',
				dataType:'json',
				data: {idServico: idServico},
				success: function(data){
					if(data.concluido == 1){
						window.location.href = "/servicos";
					}
				}
			});
		}
	})
}