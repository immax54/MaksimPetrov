(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	let tab = require('../parts/tab.js');
	let modal = require('../parts/modal.js');
	let ajax = require('../parts/ajax.js');
	let slider = require('../parts/slider.js');
	let calculator = require('../parts/calculator.js');
	let timer = require('../parts/timer.js');

	tab();
	modal();
	ajax();
	slider();
	calculator();
	timer();
	
});
//Подключение и использование модулей

},{"../parts/ajax.js":2,"../parts/calculator.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/tab.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
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


		// Использование сообщений ajax

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');

		// Выбор кодировки
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		let formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status === 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						// Добавление информации на страницу
						}
					} else {
						statusMessage.innerHTML = message.failure;
					}
		}
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
			// Очистка полей ввода
		}
	});



	// ajax запрос

	let message2 = new Object();
	message2.loading = 'Щас погоди, загружаю';
	message2.success = 'Принял, заходи';
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
			// очистка полей ввода
		}

	});
}

module.exports = ajax;


},{}],3:[function(require,module,exports){
function calculator() {
	    	 let people = document.getElementsByClassName('counter-block-input')[0],
	    	 	  days = document.getElementsByClassName('counter-block-input')[1],
	    	 	  place = document.getElementById('select');
	    	 	  price = document.getElementById('total');
	    	 	  peopleSum = 0,
	    	 	  daysSum = 0,
	    	 	  newPrice = 0;
	    	 	  price.innerHTML = 0;
				//использование калькулятора сайта
	    	 	  people.addEventListener('change', function() {
	    	 	  	peopleSum = +this.value;
					newPrice = (daysSum + peopleSum) * 4000;
					price.innerHTML = newPrice;
					if (days.value == '') {
						price.innerHTML = 0
						} else {
							price.innerHTML = newPrice;
						}
	    	 	  });

	    	 	  days.addEventListener('change', function() {
	    	 	  	daysSum = +this.value;
	    	 	  	newPrice = (daysSum + peopleSum) * 4000;
	    	 	  	price.innerHTML = newPrice;
	    	 	  	if (people.value == '') {
	    	 	  		price.innerHTML = 0
	    	 	  		} else {
	    	 	  			price.innerHTML = newPrice;
	    	 	  		}

	    	 	  });

	    	 	  place.addEventListener('change', function() {
	    	 	  	if (days.value == '' || people.value == '') {
	    	 	  		price.innerHTML = 0
	    	 	  		} else {
	    	 	  			let ab = newPrice;
	    	 	  			price.innerHTML = ab *  this.options[this.selectedIndex].value;
	    	 	  		}
	    	 	  });
}

module.exports = calculator;
//Вывод стиля калькулятора на сайте
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
function slider() {
	let sliderIndex = 1,
		 sliderItem = document.getElementsByClassName('slider-item');
		 prevArrow = document.querySelector('.prev'),
		 nextArrow = document.querySelector('.next'),
		 dots = document.querySelector('.slider-dots'),
		 dot = document.getElementsByClassName('dot');

		 showSlider(sliderIndex);

		 function showSlider(now) {
		 	if (now > sliderItem.length) {
		 		sliderIndex = 1;
		 	};
		 	if (now < 1) {
		 		sliderIndex = sliderItem.length;
		 	};
		 	for (let i = 0; i < sliderItem.length; i++) {
		 		sliderItem[i].style.display = 'none';
		 	};
		 	for (let i = 0; i < dot.length; i++) {
		 		dot[i].classList.remove('dot-active');
		 	};
		 	sliderItem[sliderIndex - 1].style.display = 'block';
		 	dot[sliderIndex - 1].classList.add('dot-active');
		 };

		 function nextSlider(now) {
		 	showSlider(sliderIndex += now);
		 };

		 function nowSlide(now) {
		 		showSlider(sliderIndex = now)
		 };

		 prevArrow.addEventListener('click', function() {
		 	nextSlider(-1);
		 });

		 nextArrow.addEventListener('click', function() {
		 	nextSlider(1);
		 });

		 dots.addEventListener('click', function(e) {
		 	for (let i = 0; i < dot.length + 1; i++) {
		 		if (e.target.classList.contains('dot') && e.target == dot[i-1]) {
		 			nowSlide(i);
		 		}
		 	}
		 });
}

module.exports = slider;
},{}],6:[function(require,module,exports){
function tab() {
	let tab = document.getElementsByClassName('info-header-tab'),
	tabContent = document.getElementsByClassName('info-tabcontent'),
	info = document.getElementsByClassName('info-header')[0];

	function hideTabCont(act) {
		for (let i = act; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabCont(1);

	function showTabCont(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabCont(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show')
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className === 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target === tab[i]) {
					showTabCont(i);
					break;
				}
			}
		}
	});
}

module.exports = tab;
},{}],7:[function(require,module,exports){
function timer() {
	function getTimeRemaining(endtime) {
	      let t = Date.parse(endtime) - Date.parse(new Date());
	      let seconds = Math.floor((t / 1000) % 60);
	      let minutes = Math.floor((t / 1000 / 60) % 60);
	      let hours = Math.floor((t / (1000 * 60 * 60)));
	      return {
	        'total': t,
	        'hours': hours,
	        'minutes': minutes,
	        'seconds': seconds
	      };
	    };
	    function setClock(id, endtime) {
	      let clock = document.getElementById(id);
	      let hoursText = clock.querySelector('.hours');
	      let minutesText = clock.querySelector('.minutes');
	      let secondsText = clock.querySelector('.seconds');

	      function upClock() {
	        let t = getTimeRemaining(endtime);

	        hoursText.innerHTML = ('0' + t.hours).slice(-2);
	        minutesText.innerHTML = ('0' + t.minutes).slice(-2);
	        secondsText.innerHTML = ('0' + t.seconds).slice(-2);

	        if (t.total <= 0) {
	          clearInterval(timeinterval);
	        }
	      }

	      upClock();
	      let timeinterval = setInterval(upClock, 1000);
	    }
	    let deadline = new Date('20:32:00');
	    setClock('timer', deadline);
}

module.exports = timer;

},{}]},{},[1]);
