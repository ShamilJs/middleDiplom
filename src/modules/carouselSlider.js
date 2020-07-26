'use strict';


const sliderCarousel = () => {
	try {
		const slides = document.querySelectorAll('.services-slider > .slide'),
			next = document.querySelector('.services-slider > .next'),
			left = document.querySelector('.services-slider > .prev');
		const show = 5;
		let count = 0;

		next.style.marginTop = '55px';
		left.style.marginTop = '55px';
	
		const render = () => {
			slides.forEach((item, i)=>{
				if (i >= count && i <= show - 1 + count ) {
					item.style.display = 'block';
				} else {
					item.style.display = 'none';
				}
			});
		};
		render();
	
		next.addEventListener('click', () => {
			count ++;
			if (slides.length -1 < show - 1 + count) {
				count = 0;
			}
			render();
		});

		left.addEventListener('click', () => {
			count --;
			if (count <= 0) {
				count = show - 1 + count;
			}
			render();
		});
		
	} catch (error) {
		console.warn('sliderCarousel.js', error);
	}
};

export default sliderCarousel;