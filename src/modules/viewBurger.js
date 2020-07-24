'use strict';

const viewBurger = () => {
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
        }
    };
    checkResponse();
    window.addEventListener('resize', checkResponse);

    const topMenu = document.querySelector('.top-menu'),
        head = document.querySelector('.head-slider');
    window.addEventListener('scroll', () => {
        let topElem = head.getBoundingClientRect().top;
        console.log('topElem: ', topElem);
        if (topElem <= 0) {
            topMenu.style.position = 'fixed';
        } else {
            topMenu.style.position = 'relative';
        }
    });
};


export default viewBurger;