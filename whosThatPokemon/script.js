//MODAL
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const check = document.querySelector('#check');
const pokemonInput = document.querySelector('#name');
const pokemonImg = document.querySelector('.pokemon img');
const divWrong = document.querySelector('.wrong');

function openModal() {
	modal.style.display = 'block';
	pokemonInput.focus();
}
openModal();

check.addEventListener('click', closeModal => {
	if (pokemonInput.value.toLowerCase() == 'gardevoir') {
		modal.style.display = 'none';
		document.querySelector('.pokemonName').innerHTML = `Gardevoir`
		pokemonImg.classList.add('hit');
		setTimeout(() => {
			modalContent.classList.remove('hit');
		}, 800);
		respFocus();
	} else {
		modalContent.classList.add('invalid');
		divWrong.innerHTML = 'NOPE!'
		setTimeout(() => {
			modalContent.classList.remove('invalid');
		}, 800);
		respFocus();
	}
});



//MOVEMENT ANIMATION HAPPEN
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//MOVING ANIMATION EVENT
container.addEventListener('mousemove', e => {
	let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//ANIMATE IN
container.addEventListener('mouseenter', e => {
	card.style.transition = 'nome';
	//POPUT
	pokemonImg.style.transform = 'translateZ(150px)';
});

//ANIMATE OUT

container.addEventListener('mouseleave', e => {
	card.style.transition = 'all 0.5s ease';
	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	//POPBACK
	pokemonImg.style.transform = 'translateZ(0px)';
});