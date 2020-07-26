'use strict';

const validaition = () => {
    try {

        document.body.addEventListener('input', event => {
            const target = event.target;
            if (target.matches('input[name="name"]')) {
                target.value = target.value.replace(/[^а-я ]/gi, '');
            }
        });
        
    } catch (error) {
        console.warn('validaition.js', error);
    }
};


export default validaition;