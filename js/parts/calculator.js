function calculator() {
	    	 let people = document.getElementsByClassName('counter-block-input')[0],
	    	 	  days = document.getElementsByClassName('counter-block-input')[1],
	    	 	  place = document.getElementById('select');
	    	 	  price = document.getElementById('total');
	    	 	  peopleSum = 0,
	    	 	  daysSum = 0,
	    	 	  newPrice = 0;
	    	 	  price.innerHTML = 0;

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