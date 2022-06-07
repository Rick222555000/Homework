// Vareáveis globais
vez = "peixe";
cont = 0;
blocoP = document.getElementById("blocoPeixe"); 
blocoS = document.getElementById("blocoSonico");

// localStorage

if (typeof(Storage) !== "undefined"){
    if(localStorage.peixe && localStorage.sonico){
        console.log('Recuperando variáveis...');
        elem1 = document.getElementById('peixe');
        elem2 = document.getElementById('sonico');
        elem1.innerHTML = localStorage.peixe;
        elem2.innerHTML = localStorage.sonico;
    }else{
        localStorage.setItem('peixe', 0);
        localStorage.setItem('sonico', 0);
    }
}else{
    window.write('Navegador não tem suporte a aplicação.');
}

// Armazenamento e aumento do placar

aumentar = (id) => {
    elemP = document.getElementById(id);
    ponto = parseInt(elemP.innerHTML);
    ponto += 1;
    elemP.innerHTML = ponto;
    if (id == "sonico") {
        localStorage.sonico = ponto;
    } else if (id == "peixe") {
        localStorage.peixe = ponto;
    }
}

// Reiniciar jogo(até o placar)

zerar = () => {
	elem1.innerHTML = "0";
    elem2.innerHTML = "0";
	localStorage.setItem('peixe', 0);
    localStorage.setItem('sonico', 0);
	restart();
}

// Validar o vencendor e quem ganhou, perdeu ou empatou

vencedor = () => {
	casas = [];
	for(i=1; i<=9; i++){
		elem = document.getElementById('casa'+i);
		casas[i] = elem.style.backgroundImage;
	}

	if(jogadas() && cont <= 8){
		if (vez == "sonico"){
			valor = 'Vencedor é o Sonico';
			cor = 'var(--sonico)';
			vez = "peixe";
			aumentar("sonico");
		}
		else if (vez = "peixe"){
			valor = 'Vencedor é o Peixe';
			cor = 'var(--peixe)';
			vez = "sonico";
			aumentar("peixe");
		}

		ven = 'vencedor'
		escrevaHTML(valor, cor);
		parar();

	} else if (cont == 8){
		valor = 'Velha';
		cor = 'var(--empate)';
		ven = 'vencedor'
		escrevaHTML(valor, cor);
		stiloVez(blocoP, true);
		stiloVez(blocoS, true);
	} 
}

// Bloquea as jogadas posteriores a vitória

parar = () => {
	for (var i=1; i<=9; i++){
		elem = document.getElementById('casa'+i);
		elem.onclick="";
	}
}

// Alterar o fundo quando clica no elemento e alterna a vez

jogar = (casa) => {
	ven = '';
	bg = casa.style.backgroundImage;
	casaId = casa.id[4];

	if(bg=="" || bg==null){

		casa.style.backgroundImage="url('img/" + vez + ".png')";
		
		if (cont > 3){
			vencedor();
		}
		
		if (ven != 'vencedor'){
			if (vez == "sonico"){
				vez = "peixe";
				stiloVez(blocoP, true);
				stiloVez(blocoS, false);
			}else{
				vez = "sonico";
				stiloVez(blocoP, false);
				stiloVez(blocoS, true);
			}

			valor = "É a vez do " + vez;
			cor = "black";
			escrevaHTML(valor, cor);
		}

		cont += 1;

	}
}

restart = () => {
	for (var i=1; i<=9; i++){
		elem = document.getElementById('casa'+i);
		elem.style.backgroundImage = '';
		elem.onclick= function(){ jogar(this); };
	}
	
	cont = 0;
	valor = "Jogue em uma casa";
	cor = "black";
	escrevaHTML(valor, cor);
	stiloVez(blocoP, true);
	stiloVez(blocoS, true);
}

escrevaHTML = (valor, cor) => {
	res = document.getElementById("resJogo");
	res.innerHTML = valor;
	res.style.color = cor;
}

stiloVez = (bloco, ativo) => {
	if (ativo) {
		bloco.style.opacity = '1';
		bloco.style.transform = "scale(1)";
	} else {
		bloco.style.opacity = '0.8';
		bloco.style.transform = "scale(0.98)";
	}
}

jogadas = () => {
	linha = casaId - 1;

	const jogo = [
		[[1, 2, 3], [1, 4, 7], [1, 5, 9]], //Lista da casa 1
		[[1, 2, 3], [2, 5, 8]], //Lista da casa 2
		[[1, 2, 3], [3, 5, 7], [3, 6, 9]], //Lista da casa 3
		[[1, 4, 7], [4, 5, 6]], //Lista da casa 4
		[[1, 5, 9], [3, 5, 7], [2, 5, 8], [4, 5, 6]], //Lista da casa 5
		[[3, 6, 9], [4, 5, 6]], //Lista da casa 6
		[[1, 4, 7], [3, 5, 7], [7, 8, 9]], //Lista da casa 7
		[[2, 5, 8], [7, 8, 9]], //Lista da casa 8
		[[3, 6, 9], [1, 5, 9], [7, 8, 9]] //Lista da casa 9
	];

	for (coluna = 0; coluna < jogo[linha].length; coluna++){
		[a, b, c] = jogo[linha][coluna];
		if (casas[a]==casas[b] && casas[b]==casas[c] && casas[a] !=""){
			return true;
		}
	}
}