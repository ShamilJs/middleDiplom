'use strict';

import smoothDocument from './modules/smoothDocument';
import openHeadElem from './modules/openHeadElem';
import sendForm from './modules/sendForm';
import openPopup from './modules/openPopup';
import maskPhone from './modules/maskPhone';
import validaition from './modules/validaition';
import mainSlider from './modules/mainSlider';
import sliderCarousel from './modules/carouselSlider';
import viewBurger from './modules/viewBurger';
import windowScroll from './modules/windowScroll';







smoothDocument();
openHeadElem();
openPopup();
maskPhone('input[name="phone"]');
validaition();
sendForm();
mainSlider('.main-slider', '.slide');
mainSlider('.gallery-slider', '.slide');

const carousel = new sliderCarousel({ main: '#services > .wrapper',
									wrap: '.services-slider',
									prev: '#services > .wrapper >.services-slider > .prev',
									next: '#services > .wrapper >.services-slider > .next',
									slidesToShow: 5,
									infinity: false,
									});
carousel.init();
viewBurger();
windowScroll();