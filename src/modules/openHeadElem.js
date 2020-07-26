'use strict';

    const openHeadElem = () => {
        try {
            let count = 0;
            const head = document.querySelector('.head'),
                ul = document.querySelector('.clubs-list > ul'),
                freeVisitForm = document.getElementById('free_visit_form'),
                callbackForm = document.getElementById('callback_form');

            head.addEventListener('click', event => {
                const target = event.target;
                if (target.closest('.club-select')) {
                    count ++;
                    ul.style.display = 'block';
                } 
                if (target.matches('.open-popup')) {
                    freeVisitForm.style.display = 'block';
                }
                if (target.matches('.callback-btn')) {
                    callbackForm.style.display = 'block';
                }
            });

            document.body.addEventListener('click', event => {
                const target = event.target;
                if (!target.closest('.club-select') || count === 2) {
                    count = 0;
                    ul.style.display = 'none';
                }
                if (target.matches('.close_icon') ||
                target.matches('.overlay') && !target.closest('.form-content')) {
                    freeVisitForm.style.display = 'none';
                    callbackForm.style.display = 'none';
                }
            });

        } catch (error) {
            console.warn('openHeadElem.js', error);
        }
    };


export default openHeadElem;