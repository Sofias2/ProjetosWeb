function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = 'Agora são ' + hora + ' horas.'

if (hora >= 0 && hora < 12) {
	img.src = "imagens/img_manha.png"
	document.body.style.background = '#93c4e5'

} else if (hora >= 12 && hora < 18) {
	img.src = "imagens/img_tarde.png"
	document.body.style.background = '#a17d69'


} else{
	img.src = "imagens/img_noite.png"
	document.body.style.background = '#355365'

}


}