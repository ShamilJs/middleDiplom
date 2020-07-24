'use strict';

const mainSlider = (wrapSelector, slidesSelector) => {

    const mainSlider = document.querySelector(wrapSelector),
        slides = mainSlider.querySelectorAll(slidesSelector);
    let count = 0,
        interval;
    
       
    slides.forEach((element, index) => {
        if (wrapSelector === '.main-slider') {
            element.style.position = 'absolute';
        }
        if (index > 0) {
            element.style.display = 'none';
        }
    });
    

    const prevSlide = (elem, index) => {
        elem[index].style.display = `none`;
	};

	const nextSlide = (elem, index) => {
        elem[index].style.display = 'block';
	};

    const autoPlaySlide = () => {
        prevSlide(slides, count);
        count ++;
        if (count >= slides.length) {
            count = 0;
        }
        nextSlide(slides, count);
    };

    const startSlide = () => {
        interval = setInterval(autoPlaySlide, 1000);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

// -------------------Фнкционал только для слайдера с кнопками-------------------------
    mainSlider.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.prev')) {
            prevSlide(slides, count);
            count --;
            if (count < 0) {
				count = slides.length - 1;
			}
            nextSlide(slides, count);
        }
        if (target.closest('.next')) {
            prevSlide(slides, count);
            count ++;
            if (count >= slides.length) {
				count = 0;
			}
            nextSlide(slides, count);
        }
    });

    mainSlider.addEventListener('mouseover', event => {
        const target = event.target;
        if (target.closest('.prev') ||
            target.closest('.next')) {
            stopSlide();
        }
    });

    mainSlider.addEventListener('mouseout', event => {
        const target = event.target;
        if (target.closest('.prev, .next')) {
            startSlide();
        }
            
    });

    startSlide();
};


export default mainSlider;