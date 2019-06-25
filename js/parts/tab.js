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