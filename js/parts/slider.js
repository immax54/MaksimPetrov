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