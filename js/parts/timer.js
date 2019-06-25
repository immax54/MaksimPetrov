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
	    let deadline = new Date('2020-07-23T20:32:00');
	    setClock('timer', deadline);
}

module.exports = timer;
