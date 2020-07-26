'use strict';

const openPopup = () => {
	try {
		const fixedGift = document.querySelector('.fixed-gift'),
			gift = document.getElementById('gift'),
			thanks = document.getElementById('thanks');

		if (fixedGift) {
			fixedGift.addEventListener('click', () => {
				gift.style.display = 'block';
				fixedGift.style.display = 'none';
			});
		}

		if (gift) {
			gift.addEventListener('click', event => {
				const target = event.target;
				if (target.matches('.overlay') &&
				!target.matches('.form-content') ||
				target.matches('.close-btn') ||
				target.matches('.close_icon')) {
					gift.style.display = 'none';
				}
			});
		}

		if (thanks) {
			thanks.addEventListener('click', event => {
				const target = event.target;
				if (target.matches('.overlay') &&
				!target.matches('.form-content') ||
				target.matches('.close-btn') ||
				target.matches('.close_icon')) {
					thanks.style.display = 'none';
				}
			});
		}
		
	} catch (error) {
		console.warn('openPopup.js', error);
	}
};

export default openPopup;