'use strict';

const viewBurger = () => {
    try {
        const menuButton = document.querySelector('.menu-button'),
            popupMenu = document.querySelector('.popup-menu');

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < 768) {
                menuButton.addEventListener('click', () => {
                    popupMenu.style.display = 'flex';
                });

                popupMenu.addEventListener('click', event => {
                    const target = event.target;
                    if (target.matches('.close-menu-btn > img') ||
                        target.matches('.scroll > a')) {
                            popupMenu.style.display = 'none';
                    }
                });

                const topMenu = document.querySelector('.top-menu'),
                    head = document.querySelector('.head-slider');
                    
                window.addEventListener('scroll', () => {
                    let topElem = head.getBoundingClientRect().top;
                    if (topElem <= 0) {
                        topMenu.style.position = 'fixed';
                    } else {
                        topMenu.style.position = 'relative';
                    }
                });
            } else {
                return;
            }
        };
        checkResponse();
        window.addEventListener('resize', checkResponse);

    } catch (error) {
        console.warn('viewBurger.js', error);
    }
};


export default viewBurger;