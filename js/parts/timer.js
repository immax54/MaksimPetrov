function timer() { //Функция для вывода таймера на экспорт в другой модуль

	function getTimeRemaining(endtime) {
	      let t = Date.parse(endtime) - Date.parse(new Date());
	      let seconds = Math.floor((t / 1000) % 60);
	      let minutes = Math.floor((t / 1000 / 60) % 60);
	      let hours = Math.floor((t / (1000 * 60 * 60)));
//Задание переменных с подсчетом до окончания времяни таймера, по формулам, где t=Секунда*1000 
	      return {
	        'total': t,
	        'hours': hours,
	        'minutes': minutes,
	        'seconds': seconds
	      };
	    };
//Функция возвращает JSON файл с данными об окончании таймера: часы, минуты, секунды

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
//Функции, которые выводят таймер на фронт сайта  в виде часов, минут, секунд

	      upClock();
	      let timeinterval = setInterval(upClock, 1000);
	    }

	    let deadline = new Date('2020-07-23T20:32:00');
	    setClock('timer', deadline);
//Настройка функции таймера до определенной даты
}

module.exports = timer;

//Настройка функции timer() для экспорта модуля