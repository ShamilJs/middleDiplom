'use strict';


const sliderCarousel = () => {
	try {
		const slides = document.querySelectorAll('.services-slider > .slide'),
			next = document.querySelector('.services-slider > .next'),
			left = document.querySelector('.services-slider > .prev');

		let show,
			count = 0;

		next.style.marginTop = '55px';
		left.style.marginTop = '55px';

		const render = () => {
			slides.forEach((item, i)=>{
				item.style.margin = 'auto';
				item.style.marginTop = 0;
				if (i >= count && i <= show - 1 + count ) {
					item.style.display = 'block';
					
				} else {
					item.style.display = 'none';
				}
			});
		};

		const checkResponse = () => { 
			const widthWindow = document.documentElement.clientWidth;
			if (widthWindow > 768) {
				show = 4;
			}
			if (widthWindow <= 768 && widthWindow > 425) {
				show = 2;
			}
			if (widthWindow <= 425) {
				show = 1;
			}
			render();
		}; 
		checkResponse();
		
	
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

		window.addEventListener('resize', checkResponse);	
		
	} catch (error) {
		console.warn('sliderCarousel.js', error);
	}
};

export default sliderCarousel;