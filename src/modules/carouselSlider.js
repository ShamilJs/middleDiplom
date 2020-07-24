'use strict';

class sliderCarousel {
    constructor({ main, wrap, prev, next, position = 0, slidesToShow = 3}) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            widthSlide: Math.floor(100 / this.slidesToShow),
            maxPosition: this.slides.length - this.slidesToShow
        };
    }

    init() {
        this.addGloClass();
        this.addStyle();
        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
    }

    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for (const item of this.slides) {
            item.classList.add('glo-slider__item');
        }
    }

    addStyle() {
        let style = document.getElementById('sliderCarousel-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }
        style.textContent = `
            .glo-slider {
                overflow: hidden !important;
            }
            .glo-slider__wrap {
                transition: transform 0.3s !important;
                will-change: transform !important;
            }
            .glo-slider__item {
                align-items: center;
                justify-content: center; 
                flex: 0 0 ${this.options.widthSlide}% !important;
            }
            `;
        document.head.appendChild(style);
    }

    controlSlider() {
        this.prev.addEventListener('click',this.prevSlider.bind(this));
        this.next.addEventListener('click',this.nextSlider.bind(this));
    }

    prevSlider() {
        if (this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.options.maxPosition;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    nextSlider() {
        if (this.options.position < this.options.maxPosition)
            ++this.options.position;
        if (this.options.position > this.options.maxPosition) {
            this.options.position = 0;
        }

        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }

    addArrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'slider-arrow';
        this.next.className = 'slider-arrow';

        this.prev.classList.add('prev');
        this.next.classList.add('next');
        this.prev.innerHTML = `<span>
            <i class="fa fa-angle-left"></i>
            </span>`;
        this.next.innerHTML = `<span>
            <i class="fa fa-angle-right"></i>
        </span>`;
        this.main.append(this.prev);
        this.main.append(this.next);
    }

}

export default sliderCarousel;