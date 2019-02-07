function sortear(){
	return Math.floor(Math.random() * 60);
}

var sorteados = [];

for (var i = 0; i < 6; i++) {
	sorteados[i] = sortear();
}

console.log(sorteados);