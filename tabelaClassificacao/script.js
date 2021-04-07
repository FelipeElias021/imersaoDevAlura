//SELECIONANDO O MODAl[0] E O INPUT
const modal0 = document.querySelector('.modal0');
const modalContent0 = document.querySelector('.modal-content0');
const nomeTime = document.querySelector('#txtNomeTime');

//SELECIONANDO O MODAl[1] E OS 3 INPUTS
const modal1 = document.querySelector('.modal1');
const modalContent1 = document.querySelector('.modal-content1');
const valorVitoria = document.querySelector('#txtVitoria');
const valorDerrota = document.querySelector('#txtDerrota');
const valorEmpate = document.querySelector('#txtEmpate'); 

//TABELA ONDE OS TIMES VÃO FICAR
const tabelaTime = document.querySelector('.tabelaTime')

//ABRIR MODAL
function openModal() {
	modal0.style.display = 'block';
	nomeTime.focus();
}
openModal();

//DECLARAR UMA ARRAY PROS TIMES
var times = [];

//CALCULAR PONTOS
function calculaPontos(times) {
    var v = parseInt(valorVitoria.value)
    var d = parseInt(valorDerrota.value)
    var e = parseInt(valorEmpate.value)
	var ponto = times.vitorias * v + times.derrotas * d + times.empates * e;
	return ponto;
}

//CALCULAR QUANTOS JOGOS JA HOUVE
function calculaJogos(times) {
	var jogo = times.vitorias + times.derrotas + times.empates;
	return jogo;
}

//MENSAGENS PRO PRIMEIRO MODAL
const divNomes = document.querySelector('.divNomes');
const divWrong = document.querySelector('.divWrong');
//BOTÃO ADICIONAR (PUXAR TIMES NOVOS)
const adicionar = document.querySelector('.adicionar');
adicionar.addEventListener('click', a => {
	if (nomeTime.value != '') {
		//ADICIONAR UM NOVO TIME
		novoTime = {
			nome: nomeTime.value,
			jogos: 0,
			vitorias: 0,
			empates: 0,
			derrotas: 0,
			pontos: 0,
		};
		times.push(novoTime);
		divWrong.innerHTML = '';
		//FALAR O NOME DO TIME ADICIONADO
		for (let i in times) {
			divNomes.innerHTML = `${times[i].nome} ADICIONADO`;
		}
	} else {
		//ERRO
		modalContent0.classList.add('invalid');
		divNomes.innerHTML = '';
		divWrong.innerHTML = 'Insira os valores';
		setTimeout(() => {
			modalContent0.classList.remove('invalid');
		}, 800);
	}
	// divNomes.innerHTML += times
	// exibirTimes(times)
	nomeTime.focus();
	nomeTime.value = '';
});

//LISTAR OS TIMES
const pontuacoes = document.querySelector('.pontuacoes')
function listarTimes() {
    for (let i in times) {
        tabelaTime.innerHTML += `<tr>
            <td>${times[i].nome}</td>
            <td>${times[i].jogos}</td>
            <td>${times[i].vitorias}</td>
            <td>${times[i].empates}</td>
            <td>${times[i].derrotas}</td>
            <td>${times[i].pontos}</td>
            <td><button onClick='adicionarVitoria(${i})'>Vitória</button><button onClick="adicionarEmpate(${i})">Empate</button><button onClick="adicionarDerrota(${i})">Derrota</button></td>
        </tr>`
    }
    pontuacoes.innerHTML += `<p>Pontuações:</p>`
    pontuacoes.innerHTML += `<p>Vitória: ${valorVitoria.value}</p>`
    pontuacoes.innerHTML += `<p>Derrota: ${valorDerrota.value}</p>`
    pontuacoes.innerHTML += `<p>Empate: ${valorEmpate.value}</p>`
}

//BOTÃO PROXIMO (FECHAR MODAL[0]; ABRIR MODAL[1])
const proximo = document.querySelector('.proximo');
proximo.addEventListener('click', p => {
    modal0.style.display = 'none'
	modal1.style.display = 'block';
    valorVitoria.focus()
});

//BOTÃO PRONTO ( FECHAR MODAL[1] E CHAMAR PARA LISTAR TIMES)
const pronto = document.querySelector('.pronto')
pronto.addEventListener('click', e => {
    if (valorVitoria.value != '' && valorEmpate.value != '' && valorDerrota.value != '') {
        modal1.style.display = 'none'
        listarTimes()
    } else {
        //ERRO
        const divWrong1 = document.querySelector('.divWrong1');
        modalContent1.classList.add('invalid');
        divWrong1.innerHTML = 'Insira os valores';
        setTimeout(() => {
            modalContent1.classList.remove('invalid');
        }, 800);
    }
})

//ADICIONAR VITORIA
function adicionarVitoria(i) {
    times[i].vitorias++
    times[i].pontos = calculaPontos(times[i])
    times[i].jogos = calculaJogos(times[i])
    pontuacoes.innerHTML = ''
    tabelaTime.innerHTML = ''
    listarTimes()
}
//ADICIONAR DERROTA
function adicionarDerrota(i) {
    times[i].derrotas++
    times[i].pontos = calculaPontos(times[i])
    times[i].jogos = calculaJogos(times[i])
    pontuacoes.innerHTML = ''
    tabelaTime.innerHTML = ''
    listarTimes()
}
//ADICIONAR EMPATE
function adicionarEmpate(i) {
    times[i].empates++
    times[i].pontos = calculaPontos(times[i])
    times[i].jogos = calculaJogos(times[i])
    pontuacoes.innerHTML = ''
    tabelaTime.innerHTML = ''
    listarTimes()
}

//BOTÕES

//BOTÃO ADICIONAR 
const add = document.querySelector('.add');
add.addEventListener('click', ad => {
    pontuacoes.innerHTML = ''
    tabelaTime.innerHTML = ''
    openModal()
})

//BOTÃO RESETAR
const resetar = document.querySelector('.resetar');
resetar.addEventListener('click', ad => {
    for (let i in times) {
        times[i].jogos = 0
        times[i].vitorias = 0
        times[i].empates = 0
        times[i].derrotas = 0
        times[i].pontos = 0
    }
    tabelaTime.innerHTML = ''
    pontuacoes.innerHTML = ''
    listarTimes()
})

//BOTAO REMOVER TUDO
const removerTudo = document.querySelector('.removerTudo');
removerTudo.addEventListener('click', rem => {
    times = []
    tabelaTime.innerHTML = ''
    pontuacoes.innerHTML = ''
    listarTimes()
})

console.log(times)
console.log(times.nome)