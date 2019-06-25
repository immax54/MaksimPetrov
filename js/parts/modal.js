function modal() {
	let btnShadow = document.querySelector('.more');
	let overlay = document.querySelector('.overlay');
	let close = document.querySelector('.popup-close');

	btnShadow.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		btnShadow.classList.remove('more-splash');
		document.body.style.overflow = 'visible';
	});
}


module.exports = modal;