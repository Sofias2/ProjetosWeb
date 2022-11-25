function verificar(){
	var data = new Date()
	var ano = data.getFullYear()
	var fano = document.getElementById('txtano')
	var res = document.querySelector('div#res')

	if (fano.value.length == 0 || Number(fano.value) > ano) {
		window.alert('Verifique os dados e tente novamente!')
	} else {
		var fgen = document.getElementsByName('radgen')
		var idade = ano - Number(fano.value)
		var gênero = ''
		var img = document.createElement('img')
		img.setAttribute('id', 'foto')
		img.setAttribute('padding', '5px')

		if (fgen[0].checked) {
			gênero = 'Homem'

			if (idade >=0 && idade < 10 ) {
				//Criança
				img.setAttribute('src', 'imagens/img_criançaH.png')

			} else if (idade < 21) {
				//Adolescente 
				img.setAttribute('src', 'imagens/img_adolescenteH.png')

			} else if (idade < 50) {
				//Adulto
				img.setAttribute('src', 'imagens/img_adultoH.png')

			} else{
				//Idoso
				img.setAttribute('src', 'imagens/img_idosoH.png')
			}


		} else if (fgen[1].checked) {
			gênero = 'Mulher'

			if (idade >=0 && idade < 10 ) {
				//Criança
				img.setAttribute('src', 'imagens/img_criançaM.png')

			} else if (idade < 21) {
				//Adolescente 
				img.setAttribute('src', 'imagens/img_adolescenteM.png')

			} else if (idade < 50) {
				//Adulto
				img.setAttribute('src', 'imagens/img_adultoM.png')

			} else{
				//Idoso
				img.setAttribute('src', 'imagens/img_idosoM.png')
			}

		}
		
		res.innerHTML = 'Detectamos ' + gênero + ' com ' + idade + ' anos.'
		res.appendChild(img)

	}


}