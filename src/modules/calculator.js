'use strict';

const calculator = () => {
	const form = document.getElementById('card_order'),
		priceTotal = document.getElementById('price-total'),
		promoCode = form.querySelector('.price-message > input[name="PromoCode"]');

	const priceMozaika = [1999, 9900, 13900, 19900],
		priceSchelkovo = [2999, 14990, 21990, 24990];

	let discount = 1;

	const calc = (price, indexPrice) => {
		
		price.forEach((item, index) => {
			if (index === indexPrice) {
				let total = Math.floor(item * discount);
				priceTotal.textContent = `${total}`;
			}
		});
	};

	const render = () => {
		const time = form.querySelectorAll('.time > input[name="card-type"]'),
			mozaika = document.getElementById('card_leto_mozaika');
		let indexPrice;

		time.forEach((item, index) => {
			if (item.checked) {
				indexPrice = index;
			}
		});
		if (mozaika.checked) {
			calc(priceMozaika, indexPrice);
		} else {
			calc(priceSchelkovo, indexPrice);
		}
	};
	render();

	form.addEventListener('click', event => {
		const target = event.target;
		if (target.matches('#card_leto_mozaika') ||
			target.matches('#card_leto_schelkovo') ||
			target.matches('.time > input[name="card-type"]')) {
			render();
		}
	});
	form.addEventListener('input', event => {
		const target = event.target;
		if (target.matches('.price-message > input[name="PromoCode"]')) {
			if (target.value === 'ТЕЛО2020') {
				discount = (1 - 0.3);
			} else {
				discount = 1;
			}
			render();
		}
	});
};



export default calculator;