function ajax() {
	let message = new Object();
	message.loading = 'Загрузка...';
	message.success = 'Спасибо, скоро мы свяжемся с вами';
	message.failure = 'Что-то пошло не так...';

	let form = document.getElementsByClassName('main-form')[0];
	let input = form.getElementsByTagName('input');
	let statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);


		// ajax

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');

		// Правильная кодировка
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		let formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status === 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						// добавляем контент на страницу
						}
					} else {
						statusMessage.innerHTML = message.failure;
					}
		}
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
			// очистка инпутов
		}
	});



	// Мой ajax запрос

	let message2 = new Object();
	message2.loading = 'Щас пого, загружаю';
	message2.success = 'Принял, братик, заходи';
	message2.failure = 'Что за чушь ты отправил';

	let form2 = document.getElementById('form');
	let input2 = document.getElementsByTagName('input');
	let statusMessage2 = document.createElement('p');
	statusMessage2.style.marginTop = '20px';
	statusMessage2.style.color = '#fea100';

	form2.addEventListener('submit', function(e) {
		e.preventDefault();
		form2.appendChild(statusMessage2);

		//  My ajax
		let request2 = new XMLHttpRequest();
		request2.open('POST', 'server.php');
		request2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		let formData2 = new FormData(form2);

		request2.send(formData2);

		request2.onreadystatechange = function() {
			if (request2.readyState < 4) {
				statusMessage2.innerHTML = 'Пожалуйста, подожди';
				} else if (request2.readyState === 4) {
					if (request2.status === 200 && request2.status < 300) {
						statusMessage2.innerHTML = 'Готово, заходи!'
						}
					} else {
						statusMessage2.innerHTML = 'Извини, что-то пошло не так :(';
						}
		}


		for (let i = 0; i < input2.length; i++) {
			input2[i].value = '';
			// очистка инпутов
		}

	});
}

module.exports = ajax;

