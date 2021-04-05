const image = document.querySelector('.img');
const divInput = document.querySelector('.inputs');
const divOutput = document.querySelector('.output');
const converter = document.querySelector('.converter')
const input = document.querySelector('.input');


const btnDolar = document.querySelector('.dolar');
btnDolar.addEventListener('click', e => {
    //APAGAR ÚLTIMAS INFORMAÇÕES
    input.innerHTML = ''
    //MUDAR A IMAGEM
    image.setAttribute('src', 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
    //CRIAR UM INPUT
    const real = document.createElement('input')
    real.setAttribute('type','number')
    real.setAttribute('id','valor')
    real.setAttribute('placeHolder','R$')
    input.appendChild(real)
    //CRIAR UM BUTTON
	converter.style.display = 'block'
    //FOCO
    real.focus()
    //MOSTRAR O VALOR
    converter.addEventListener('click', n => {
        divOutput.innerHTML = ''
        if (real.value > 0 ) {
        const dolar = parseFloat(real.value) * 0.17
        console.log(dolar)
        divOutput.innerHTML += parseFloat(real.value).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
        divOutput.innerHTML += ' -> '
        divOutput.innerHTML += dolar.toLocaleString('pt-BR',{style:'currency',currency:'USD'})
        } else {
            divOutput.innerHTML += 'Digite um valor válido'
        }
        real.value = ''
        real.focus()
    })
});

const btnEuro = document.querySelector('.euro');
btnEuro.addEventListener('click', e => {
    //APAGAR ÚLTIMAS INFORMAÇÕES
    input.innerHTML = ''
    //MUDAR A IMAGEM
    image.setAttribute('src', 'https://images.pexels.com/photos/316401/pexels-photo-316401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
    //CRIAR UM INPUT
	const real = document.createElement('input')
    real.setAttribute('type','number')
    real.setAttribute('id','valor')
    real.setAttribute('placeHolder','R$')
    input.appendChild(real)
    //CRIAR UM BUTTON
	converter.style.display = 'block'
    //FOCO
    real.focus()
    //MOSTRAR O VALOR
    converter.addEventListener('click', n => {
        divOutput.innerHTML = ''
        if (real.value > 0 ) {
            const euro = parseFloat(real.value) * 0.15
            divOutput.innerHTML += parseFloat(real.value).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
            divOutput.innerHTML += ' -> '
            divOutput.innerHTML += euro.toLocaleString('pt-BR',{style:'currency',currency:'EUR'})
        } else {
            divOutput.innerHTML += 'Digite um valor válido'
        }
        real.value = ''
        real.focus()
    })
});

const btnDolarCA = document.querySelector('.dolarCanadense');
btnDolarCA.addEventListener('click', e => {
    //APAGAR ÚLTIMAS INFORMAÇÕES
    input.innerHTML = ''
    //MUDAR A IMAGEM
    image.setAttribute('src', 'https://images.unsplash.com/photo-1443041630902-3ad09447e1a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')
    //CRIAR UM INPUT
	const real = document.createElement('input')
    real.setAttribute('type','number')
    real.setAttribute('id','valor')
    real.setAttribute('placeHolder','R$')
    input.appendChild(real)
    //CRIAR UM BUTTON
	converter.style.display = 'block'
    //FOCO
    real.focus()
    //MOSTRAR O VALOR
    converter.addEventListener('click', n => {
        divOutput.innerHTML = ''
        if (real.value > 0 ) {
        const dolarCA = parseFloat(real.value) * 0.22
        divOutput.innerHTML += parseFloat(real.value).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
        divOutput.innerHTML += ' -> '
        divOutput.innerHTML += dolarCA.toLocaleString('pt-BR',{style:'currency',currency:'CAD'})
        } else {
            divOutput.innerHTML += 'Digite um valor válido'
        }
        real.value = ''
        real.focus()
    })
});

const btnBitcoin = document.querySelector('.bitcoin');
btnBitcoin.addEventListener('click', e => {
    //APAGAR ÚLTIMAS INFORMAÇÕES
    input.innerHTML = ''
    //MUDAR A IMAGEM
    image.setAttribute('src', 'https://images.pexels.com/photos/5980863/pexels-photo-5980863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
    //CRIAR UM INPUT
	const real = document.createElement('input')
    real.setAttribute('type','number')
    real.setAttribute('id','valor')
    real.setAttribute('placeHolder','R$')
    input.appendChild(real)
    //CRIAR UM BUTTON
	converter.style.display = 'block'
    //FOCO
    real.focus()
    //MOSTRAR O VALOR
    converter.addEventListener('click', n => {
        divOutput.innerHTML = ''
        if (real.value > 0 ) {
        const bitcoin = parseFloat(real.value) * 0.0000031
        divOutput.innerHTML += parseFloat(real.value).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
        divOutput.innerHTML += ' -> '
        divOutput.innerHTML += bitcoin.toLocaleString('pt-BR',{style:'currency',currency:'BTC'})
        } else {
            divOutput.innerHTML += 'Digite um valor válido'
        }
        real.value = ''
        real.focus()
    })
});