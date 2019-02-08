var sorteados = numerosSortidos();
var output = document.querySelector("#output");
var msg = '';

msg += '<p>Números sorteados: </p>';
msg += '<p>' + sorteados.join('-') + '</p>';

var meusNumeros = [7, 8, 10, 15, 17, 30];

for (var i = 0; i < meusNumeros.length; i++) {
	msg += '<p>' + meusNumeros[i] + ': ';
	msg += (sorteados.indexOf(meusNumeros[i]) === -1) ? 'errou' : 'acertou';
	msg += '</p>';
}
output.innerHTML = msg;

function numerosSortidos() {
	
	var sorteados = [];

	function sortear(){
		return Math.floor(Math.random() * 60);
	}

	while(sorteados.length < 6){
		var sorteado = sortear();
		if (sorteados.indexOf(sorteado) === -1){
			sorteados[sorteados.length] = sorteado;
		}
		console.log(sorteados.length, sorteado);
	}
	return sorteados;
}