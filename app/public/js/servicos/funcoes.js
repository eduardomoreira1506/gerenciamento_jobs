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

function aprovarServico(idServico){
	Swal.fire({
		title: `Confirmação!`,
		text: `Tem certeza que deseja aprovar o serviço?`,
		type: 'info',
		showCloseButton: true,
  		showCancelButton: true,
	}).then((result) => {
		if (result.value) {
			$.ajax({
				url: '/aprovarServico',
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

function reprovarServico(idServico){
	Swal.fire({
		title: `Confirmação!`,
		text: `Tem certeza que deseja reprovar o serviço?`,
		type: 'info',
		showCloseButton: true,
  		showCancelButton: true,
	}).then((result) => {
		if (result.value) {
			const {value: text} = Swal.fire({
				input: 'textarea',
				title: "Informações",
				text: "Poderia nos dar mais detalhes a respeito do serviço?",
				type: 'info',
				showCloseButton: true,
				showCancelButton: true,
			}).then((result) => {
				if(result.value){
					console.log(value);
					console.log(text);

					if(text){
						console.log(text)
						alert(text)
					}
				}
			})			
		}
	})
}

function mandarParaAprovacao(idServico){
	Swal.fire({
		title: `Confirmação!`,
		text: `Tem certeza que deseja mandar para aprovação o serviço?`,
		type: 'info',
		showCloseButton: true,
  		showCancelButton: true,
	}).then((result) => {
		if (result.value) {
			$.ajax({
				url: '/mandarParaAprovacao',
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