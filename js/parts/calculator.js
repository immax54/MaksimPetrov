function calculator() {
	//Функция- калькулятор подсчета общей цены отдыха за n-ое количество людей, дней и выбранной базы отдыха.
				 let people = document.getElementsByClassName('counter-block-input')[0],
					   days = document.getElementsByClassName('counter-block-input')[1],
					   place = document.getElementById('select');
					   price = document.getElementById('total');
	
	//Задание переменных, по найденым классам и id из HTML и CSS
					   peopleSum = 0,
					   daysSum = 0,
					   newPrice = 0;
					   price.innerHTML = 0;
	
					   people.addEventListener('change', function() {
						   peopleSum = +this.value; //Прибавление
						newPrice = (daysSum + peopleSum) * 4000; // Подсчет общей суммы за кол-во дней и людей, если введено кол-во людей
						price.innerHTML = newPrice;
						if (days.value == '') {// Условие для пустого поля дней, если пусто, тогда берем цену за 0
							price.innerHTML = 0
							} else {
								price.innerHTML = newPrice;
							}
					   });
	
					   days.addEventListener('change', function() {
						   daysSum = +this.value;
						   newPrice = (daysSum + peopleSum) * 4000;// Подсчет общей суммы за кол-во дней и людей, если введено кол-во дней
						   price.innerHTML = newPrice;
						   if (people.value == '') {// Условие для пустого поля кол-ва людей, если пусто, тогда берем цену за 0
							   price.innerHTML = 0
							   } else {
								   price.innerHTML = newPrice;
							   }
	
					   });
	
					   place.addEventListener('change', function() {
						   if (days.value == '' || people.value == '') { // Условие для пустого поля кол-ва людей и дней, если пусто, тогда берем цену за 0
							   price.innerHTML = 0
							   } else {
								   let ab = newPrice;
								   price.innerHTML = ab *  this.options[this.selectedIndex].value;
							   }
					   });
	}
	
	module.exports = calculator;
	//Настройка текущего модуля для экспорта