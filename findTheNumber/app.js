//MODAL
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const go = document.querySelector('.go');
const max = document.querySelector('#txtMax');
const chances = document.querySelector('#txtChances');

//GAME
const box = document.querySelector('#txtNumber');
const button = document.querySelector('.check');
const output = document.querySelector('.output');
const body = document.querySelector('body');

function openModal() {
	modal.style.display = 'block';
	max.focus();
}
openModal(); 

go.addEventListener('click', closeModal => {
	if (max.value > 0 && chances.value > 0) {
		modal.style.display = 'none';
		const rules = document.querySelector('.rules');
		rules.innerHTML = `<h1>Find the number between 1 to ${max.value}</h1>`;
		box.focus()
		var randomKey = Math.floor(Math.random() * parseInt(max.value) + 1);
		console.log(randomKey)
		var i = parseInt(chances.value);
	} else {
		modalContent.classList.add('invalid');
		setTimeout(() => {
			modalContent.classList.remove('invalid');
		}, 800);
		respFocus();
	}
	button.addEventListener('click', e => {
		//REMOVE THE CLASSES FOR THE BACKGROUND COLOR
		body.classList.remove('right');
		body.classList.remove('wrong');
		output.innerHTML = '';
		//VALIDATION IF THE NUMBER ADD IS BETWEEN 1 AND 14
		if (box.value >= 1 && box.value <= parseInt(max.value)) {
			//RIGHT PAGE
			if (parseInt(box.value) == randomKey) {
				body.classList.add('right');
				output.innerHTML = '<p>You win! Congratulations</p>';
				output.innerHTML += `<p>The number is ${randomKey}</p>`;
				if (parseInt(box.value) == randomKey && randomKey == 13) {
					const img = document.createElement('img');
					img.setAttribute(
						'src',
						'https://images.uncyc.org/pt/1/15/Procurado_Viniccius13.png'
					);
					output.appendChild(img);
				} else if (parseInt(box.value) == randomKey && randomKey == 14) {
					const img = document.createElement('img');
					img.setAttribute('src', 'https://i.redd.it/w0n80g10nz051.jpg');
					output.appendChild(img);
				} else if (parseInt(box.value) == randomKey && randomKey == 7) {
					const img = document.createElement('img');
					img.setAttribute(
						'src',
						'https://data.whicdn.com/images/172049952/original.gif'
					);
					output.appendChild(img);
				} else if (parseInt(box.value) == randomKey && randomKey == 10) {
					const img = document.createElement('img');
					img.setAttribute(
						'src',
						'https://64.media.tumblr.com/5694c615b0260823db0cc54fc77c1769/tumblr_oovr7wUpKy1uqdbpso1_540.gifv'
					);
					output.appendChild(img);
				} else if (parseInt(box.value) == randomKey) {
					const img = document.createElement('img');
					img.setAttribute(
						'src',
						'https://24.media.tumblr.com/691319250ea56161aeddcdf7ac3ae0e6/tumblr_miazecVM8q1r3ifxzo1_500.gif'
					);
					output.appendChild(img);
				}
				box.readOnly = true;
				button.disabled = true;
				//WRONG PAGE
			} else {
				body.classList.add('wrong');
				output.innerHTML = `<p>You have more ${i - 1} chances!</p>`;
				const img = document.createElement('img');
				img.setAttribute(
					'src',
					'https://dbriefing.com.br/blog/wp-content/uploads/2018/10/errou-faustao-gif.gif'
				);
				output.appendChild(img);
				//GAME OVER
				if (i == 1) {
					output.innerHTML = `<p>Game Over!</p>`;
					const img = document.createElement('img');
					img.setAttribute(
						'src',
						'https://media1.tenor.com/images/6d46c278bc8bea36adbced41f730981d/tenor.gif?itemid=12235828'
					);
					output.appendChild(img);
					box.readOnly = true;
					button.disabled = true;
				}
				//REMOVE 1 CHANCE
				i--;
			}
		} else {
			output.innerHTML = '<p>Please, use a valid number!</p>';
		}
		box.focus();
		box.value = '';
	});
	
});
