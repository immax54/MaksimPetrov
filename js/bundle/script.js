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
	//Использование экспорта модулей на сайт
});
