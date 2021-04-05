/*SHOW THE SUGGESTIONS BOOKS*/
function suggestionsBooks() {
	const bookSugg = [
		'https://image.ebooks.com/previews/000/000719/000719042/000719042.jpg',
		'https://images-na.ssl-images-amazon.com/images/I/41tlhlBUnpL._SX331_BO1,204,203,200_.jpg',
		'https://images-na.ssl-images-amazon.com/images/I/51YFmYA6XBL.jpg',
		'https://images-na.ssl-images-amazon.com/images/I/81V3mrjjWcL.jpg',
		'https://images-na.ssl-images-amazon.com/images/I/61aAU1V4F1L.jpg',
		'https://i.annihil.us/u/prod/marvel/i/mg/9/d0/581d139df2e9c/clean.jpg',
		'https://m.media-amazon.com/images/I/41Yb0G32bcL.jpg',
	];
	const bookDownload = [
		'https://br1lib.org/book/1217285/136536',
		'https://br1lib.org/book/4000275/611259',
		'https://br1lib.org/book/1064778/870e58',
		'https://br1lib.org/book/2168206/acb458',
		'https://br1lib.org/book/4418336/317997',
		'#',
		'https://br1lib.org/book/3741730/d4faf7',
	];
	const bookName = [
		'Ready Player One',
		'All the Bright Places',
		'Suicide Notes',
		'Outwittng the Devil',
		'Civil War',
		'Civil War II',
		'Looking for Alaska',
	]
	const suggestions = document.querySelector('.suggestions');
	for (let i in bookSugg) {
		suggestions.innerHTML += `<div class="suggestionjs"> <a href="${bookDownload[i]}" target="_blank"><img src="${bookSugg[i]}"></a> <p>${bookName[i]}</p> </div>`;
	}
}

suggestionsBooks();

/*ADD MORE BOOKS*/
const output = document.querySelector('.output');
const link = document.querySelector('#txtlink');
const nam = document.querySelector('#txtname');
nam.focus();
document.querySelector('#add').addEventListener('click', e => {
	const bookLink = [];
	const bookName = [];
	/*VALIDATION IF THE LINK IS RIGHT*/
	if (link.value != '' && link.value.endsWith('.jpg')) {
		bookLink.push(link.value);
		bookName.push(nam.value);
		output.innerHTML += `<div class="suggestionjs"> <img src="${bookLink[bookLink.length - 1]}"> <p>${bookName[bookName.length - 1]}</p> </div>`;
	} else {
		alert('ERROR');
	}
	nam.focus();
	link.value = '';
	nam.value = '';
});

/*RESET*/
document.querySelector('#reset').addEventListener('click', r => {
	output.innerHTML = '';
});
