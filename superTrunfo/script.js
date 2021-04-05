//CRIANDO CARTAS
const cardKrakelios = {
    nome: 'Krakelios',
    card: 'https://bakugan.wiki/images/8/83/Krakelios_Ultra_%28Aquos_Card%29_ENG_289_CC_BB.png',
    ataques: {
    poder: 500,
    dano: 1
    }
}

const cardHydorous = {
    nome: 'Hydorous',
    card: 'https://bakugan.wiki/images/c/c6/Hydorous_%28Aurelus_Card%29_ENG_303_CC_BB.png',
    ataques: {
        poder: 400,
        dano: 5  
    }
}

const cardNillous = {
    nome: 'Nillous',
    card: 'https://bakugan.wiki/images/d/de/Nillious_%28Darkus_Card%29_ENG_321_CC_BB.png',
    ataques: {
    poder: 500,
    dano: 2
    }
}

const cardPegatrix = {
    nome: 'Pegatrix',
    card: 'https://bakugan.wiki/images/1/1f/Pegatrix_%28Haos_Card%29_ENG_339_CC_BB.png',
    ataques: {
    poder: 500,
    dano: 2
    }
}

const cardDrogonoid = {
    nome: 'Dragonoid',
    card: 'https://bakugan.wiki/images/5/5e/Dragonoid_%28Pyrus_Card%29_ENG_343_CC_BB.png',
    ataques: {
    poder: 200,
    dano: 5
    }
}

const cardGorthion = {
    nome: 'Gorthion',
    card: 'https://bakugan.wiki/images/8/82/Gorthion_%28Ventus_Card%29_ENG_363_CC_BB.png',
    ataques: {
    poder: 300,
    dano: 6
    }
}

//CRIANDO VARIÁVEIS PARA AS CARTAS
let cartas = [cardKrakelios, cardHydorous, cardNillous, cardPegatrix, cardDrogonoid, cardGorthion]
let cartasP1
let cartasIA

//CRIANDO VARIÁVEIS PARA OS OS PONTOS
let pontosP1 = 0
let pontosIA = 0
const spanPontosP1 = document.querySelector('.pontosP1')
const spanPontosIA = document.querySelector('.pontosIA')
spanPontosP1.innerHTML = `${pontosP1}`
spanPontosIA.innerHTML = `${pontosIA}`

//PRINCIPAIS DIVS
const divCarta = document.querySelector('.divCarta')
const divInput = document.querySelector('.divInput')
const divResultado = document.querySelector('.divResultado')

const btnSortearCarta = document.querySelector('.btnSortearCarta')
btnSortearCarta.addEventListener('click', sortearCartas)
function sortearCartas() {
    //SORTEAR CARTAS PARA IA
    const indexCartasIA = parseInt(Math.random() * cartas.length)
    cartasIA = cartas[indexCartasIA]
    //SORTEAR CARTAS PARA O JOGADOR
    const indexCartasP1 = parseInt(Math.random() * cartas.length)
    while (indexCartasIA == indexCartasP1) {
        let indexCartasP1 = parseInt(Math.random() * cartas.length)
    }
    cartasP1 = cartas[indexCartasP1]
    //MOSTRAR AS OPÇÕES A SEREM ESCOLHIDAS
    mostrarOpcoes()
    //DESABILITAR O BOTÃO DE SORTEAR E HABILITAR DE JOGAR
    btnSortearCarta.disabled = true;
    jogar.disabled = false;
}

function mostrarOpcoes() {
    //MOSTRAR A CARTA E O INPUT RADIO TYPE
    divCarta.innerHTML = `<img src='${cartasP1.card}'>`
    divInput.style.display = 'block'
}

function ataqueSelecionado() {
    //SELECIONA OS INPUTS RADIO
    const radioAtaque = document.getElementsByName('ataque')
    //ANALISAR TODOS
    for (let i in radioAtaque) {
        //SE ESTIVER MARCADO
        if (radioAtaque[i].checked) {
            //RETORNA QUAL ESTA MARCADO
            return radioAtaque[i].value
        }
    }
}

const jogar = document.querySelector('.jogar')
jogar.addEventListener('click', jogarFunc)
function jogarFunc() {
    //RETORNAR A FUNÇÃO QUE SELECIONA OS ATAQUES
    var ataqueMarcado = ataqueSelecionado()
    //GARANTIR QUE ALGUM ITEM ESTEJA MARCADO
    if (ataqueMarcado != undefined) {
    //ADICIONA A COR DE FUNDO ONDE VAI SER O RESULTADO
    divResultado.style.background = '#E5383B'
    //MOSTRA O RESULTADO
    if (cartasP1.ataques[ataqueMarcado] > cartasIA.ataques[ataqueMarcado]) {
        divResultado.innerHTML += `<h2>Você Ganhou</h2>`
        divResultado.innerHTML += `<h2>Seu ${ataqueMarcado} de ${cartasP1.ataques[ataqueMarcado]} bateu os ${cartasIA.ataques[ataqueMarcado]} do ${cartasIA.nome}</h2>`
        //ADICIONA OS PONTOS E MUDA EM CIMA
        pontosP1++
        spanPontosP1.innerHTML = `${pontosP1}`
    } else if (cartasP1.ataques[ataqueMarcado] < cartasIA.ataques[ataqueMarcado]) {
        divResultado.innerHTML += `<h2>Você Perdeu</h2>`
        divResultado.innerHTML += `<h2>Seu ${ataqueMarcado} de ${cartasP1.ataques[ataqueMarcado]} não foi capaz de aniquilar os ${cartasIA.ataques[ataqueMarcado]} do ${cartasIA.nome}</h2>`
        //ADICIONA OS PONTOS E MUDA EM CIMA
        pontosIA++
        spanPontosIA.innerHTML = `${pontosIA}`
    } else {
        divResultado.innerHTML += `<h2>Você Empatou</h2>`
        divResultado.innerHTML += `<h2>Seu ${ataqueMarcado} de ${cartasP1.ataques[ataqueMarcado]} foi equivalente ${cartasIA.ataques[ataqueMarcado]} do ${cartasIA.nome}</h2>`
    }
    //BOTÃO PARA JOGAR DENOVO
    divResultado.innerHTML += `<button onClick="resetar()"> Jogar Denovo! </button>`
    //ESCONDE OS INPUTS RADIO TYPE
    divInput.style.display = 'none'
    //MOSTRA A CARTA DA MÁQUINA
    divCarta.innerHTML += `<img src='${cartasIA.card}'>`
    //DESABILITA O BOTÃO DE JOGAR
    jogar.disabled = true;
    }
}

function resetar() {
    //DESABILITA O BOTÃO DE JOGAR E HABILITAR DE SORTEAR CARTA
    btnSortearCarta.disabled = false;
    jogar.disabled = true;
    //APAGA TODAS AS DIVS
    divCarta.innerHTML = ``
    divResultado.innerHTML = ``
    divInput.style.display = 'none'
    divResultado.style.background = 'none'
}