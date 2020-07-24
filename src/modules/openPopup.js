'use strict';

const openPopup = () => {
	const fixedGift = document.querySelector('.fixed-gift'),
		gift = document.getElementById('gift'),
		thanks = document.getElementById('thanks');


	fixedGift.addEventListener('click', () => {
		gift.style.display = 'block';
		fixedGift.style.display = 'none';
	});

	gift.addEventListener('click', event => {
		const target = event.target;
		if (target.matches('.overlay') &&
		!target.matches('.form-content') ||
		target.matches('.close-btn') ||
		target.matches('.close_icon')) {
			gift.style.display = 'none';
		}
	});

	thanks.addEventListener('click', event => {
		const target = event.target;
		if (target.matches('.overlay') &&
		!target.matches('.form-content') ||
		target.matches('.close-btn') ||
		target.matches('.close_icon')) {
			thanks.style.display = 'none';
		}
	});
};

export default openPopup;